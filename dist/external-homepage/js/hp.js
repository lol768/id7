/*!
 * University of Warwick ID7
 */


// Utility for creating objects in older browsers
if ( typeof Object.create !== 'function' ) {
    Object.create = function( obj ) {

        function F() {}
        F.prototype = obj;
        return new F();

    };
}

/*!
 * jQuery panelSnap
 * Version 0.14.0
 *
 * Requires:
 * - jQuery 1.7 or higher (no jQuery.migrate needed)
 *
 * https://github.com/guidobouman/jquery-panelsnap
 *
 * Copyright 2013, Guido Bouman
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Date: Wed Feb 13 16:05:00 2013 +0100
 */
(function($, window, document, undefined) {

    var pluginName = 'panelSnap';
    var storageName = 'plugin_' + pluginName;

    var pluginObject = {

        isMouseDown: false,
        isSnapping: false,
        enabled: true,
        scrollInterval: 0,
        scrollOffset: 0,

        init: function(options, container) {

            var self = this;

            self.container = container;
            self.$container = $(container);

            self.$eventContainer = self.$container;
            self.$snapContainer = self.$container;

            if(self.$container.is('body')) {
                self.$eventContainer = $(document);
                self.$snapContainer = $(document.documentElement);

                var ua = navigator.userAgent;
                if(~ua.indexOf('WebKit')) {
                    self.$snapContainer = $('body');
                }
            }

            self.updateScrollInterval();

            self.options = $.extend(true, {}, $.fn.panelSnap.options, options);

            self.bind();

            if(self.options.$menu !== false && $('.active', self.options.$menu).length > 0) {
                $('.active', self.options.$menu).click();
            } else {
                var $target = self.getPanel(':first');
                self.activatePanel($target);
            }

            return self;

        },

        bind: function() {

            var self = this;

            self.bindProxied(self.$eventContainer, 'scrollstop', self.scrollStop);
            self.bindProxied(self.$eventContainer, 'mousewheel', self.mouseWheel);
            self.bindProxied(self.$eventContainer, 'mousedown', self.mouseDown);
            self.bindProxied(self.$eventContainer, 'mouseup', self.mouseUp);

            self.bindProxied($(window), 'resizestop', self.resize);

            if(self.options.keyboardNavigation.enabled) {
                self.bindProxied($(window), 'keydown', self.keyDown, self.$eventContainer);
            }

            if(self.options.$menu !== false) {
                self.bindProxied($(self.options.$menu), 'click', self.captureMenuClick, self.options.menuSelector);
            }

        },

        bindProxied: function($element, event, method, selector) {

            var self = this;

            selector = typeof selector === 'string' ? selector : null;

            $element.on(event + self.options.namespace, selector, $.proxy(function(e) {

                return method.call(self, e);

            }, self));

        },

        destroy: function() {

            var self = this;

            // Gotta love namespaced events!
            self.$eventContainer.off(self.options.namespace);

            $(window).off(self.options.namespace);

            if(self.options.$menu !== false) {
                $(self.options.menuSelector, self.options.$menu).off(self.options.namespace);
            }

            self.$container.removeData(storageName);

        },

        scrollStop: function(e) {

            var self = this;

            e.stopPropagation();

            if(self.isMouseDown) {
                return;
            }

            if(self.isSnapping) {
                return;
            }

            self.updateScrollInterval();

            var offset = self.$snapContainer.scrollTop();
            var scrollDifference = offset - self.scrollOffset;
            var maxOffset = self.$container[0].scrollHeight - self.scrollInterval;
            var panelCount = self.getPanel().length - 1;

            var childNumber;
            if(
                self.enabled &&
                scrollDifference < -self.options.directionThreshold &&
                scrollDifference > -self.scrollInterval
            ) {
                childNumber = Math.floor(offset / self.scrollInterval);
            } else if(
                self.enabled &&
                scrollDifference > self.options.directionThreshold &&
                scrollDifference < self.scrollInterval
            ) {
                childNumber = Math.ceil(offset / self.scrollInterval);
            } else {
                childNumber = Math.round(offset / self.scrollInterval);
            }

            childNumber = Math.max(0, Math.min(childNumber, panelCount));

            var $target = self.getPanel(':eq(' + childNumber + ')');

            if(!self.enabled) {
                if(!$target.is(self.getPanel('.active'))) {
                    self.activatePanel($target);
                }

                return;
            }

            // To get normal scrolling in panels taller than the viewport,
            // stop if there's no multiple panels in viewport
            if (self.getPanelsInViewport().length < 2)
                return;

            if (offset <= 0 || offset >= maxOffset) {
                // Only activate, prevent stuttering
                self.activatePanel($target);
                // Set scrollOffset to a sane number for next scroll
                self.scrollOffset = offset <= 0 ? 0 : maxOffset;
            } else {
                self.snapToPanel($target);
            }

        },

        getPanelsInViewport: function() {

            var self = this;
            var $window = $(window);

            var viewport = { top: $window.scrollTop() };
            viewport.bottom = viewport.top + $window.height();

            var panels = self.getPanel().filter(function (_, el) {
                var $el = $(el);
                var bounds = $el.offset();
                bounds.bottom = bounds.top + $el.outerHeight();

                return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);
            });

            return panels;
        },

        mouseWheel: function(e) {

            var self = this;

            // This event only fires when the user actually scrolls with their input device.
            // Be it a trackpad, legacy mouse or anything else.

            if(self.isSnapping) {
                self.scrollOffset = self.$snapContainer.scrollTop();
                self.$container.stop(true);
                self.isSnapping = false;
            }

        },

        mouseDown: function(e) {

            var self = this;

            self.isMouseDown = true;

        },

        mouseUp: function(e) {

            var self = this;

            self.isMouseDown = false;

            if(self.scrollOffset !== self.$snapContainer.scrollTop()) {
                self.scrollStop(e);
            }

        },

        keyDown: function(e) {

            var self = this;

            var nav = self.options.keyboardNavigation;

            if(!self.enabled) {
                return;
            }

            if (self.isSnapping) {
                if(e.which == nav.previousPanelKey || e.which == nav.nextPanelKey) {
                    e.preventDefault();
                    return false;
                }

                return;
            }

            switch(e.which) {
                case nav.previousPanelKey:
                    e.preventDefault();
                    self.snapTo('prev', nav.wrapAround);
                    break;
                case nav.nextPanelKey:
                    e.preventDefault();
                    self.snapTo('next', nav.wrapAround);
                    break;
            }

        },

        resize: function(e) {

            var self = this;

            self.updateScrollInterval();

            if(!self.enabled) {
                return;
            }

            var $target = self.getPanel('.active');

            self.snapToPanel($target);

        },

        captureMenuClick: function(e) {

            var self = this;

            var panel = $(e.currentTarget).data('panel');
            var $target = self.getPanel('[data-panel="' + panel + '"]');

            self.snapToPanel($target);

            return false;

        },

        snapToPanel: function($target) {

            var self = this;

            if (!$target.jquery) {
                return;
            }

            self.isSnapping = true;

            self.options.onSnapStart.call(self, $target);
            self.$container.trigger('panelsnap:start', [$target]);

            var scrollTarget = 0;
            if(self.$container.is('body')) {
                scrollTarget = $target.offset().top - self.options.offset;
            } else {
                scrollTarget = self.$snapContainer.scrollTop() + $target.position().top - self.options.offset;
            }

            self.$snapContainer.stop(true).animate({
                scrollTop: scrollTarget
            }, self.options.slideSpeed, self.options.easing, function() {

                // Set scrollOffset to scrollTop
                // (not to scrollTarget since on iPad those sometimes differ)
                self.scrollOffset = self.$snapContainer.scrollTop();
                self.isSnapping = false;

                // Call callback
                self.options.onSnapFinish.call(self, $target);
                self.$container.trigger('panelsnap:finish', [$target]);

                self.activatePanel($target);
            });

        },

        activatePanel: function($target) {

            var self = this;

            self.getPanel('.active').removeClass('active');
            $target.addClass('active');

            if(self.options.$menu !== false) {
                var activeItemSelector = self.options.menuSelector + '.active';
                $(activeItemSelector, self.options.$menu).removeClass('active');

                var attribute = '[data-panel="' + $target.data('panel') + '"]';
                var itemSelector = self.options.menuSelector + attribute;
                var $itemToActivate = $(itemSelector, self.options.$menu);
                $itemToActivate.addClass('active');
            }

            self.options.onActivate.call(self, $target);
            self.$container.trigger('panelsnap:activate', [$target]);

        },

        getPanel: function(selector) {

            var self = this;

            if(typeof selector === 'undefined') {
                selector = '';
            }

            return $(self.options.panelSelector + selector, self.$container);

        },

        snapTo: function(target, wrap) {

            var self = this;

            if(typeof wrap !== 'boolean') {
                wrap = true;
            }

            var $panels = self.getPanel();
            var index = $panels.index(self.getPanel('.active'));
            var $target;

            switch(target) {
                case 'prev':

                    $target = $panels.eq(index - 1);
                    if(index < 1 && !wrap)
                    {
                        $target = []; // Clear target, because negative indexes wrap automatically
                    }
                    break;

                case 'next':

                    $target = $panels.eq(index + 1);
                    if($target.length < 1 && wrap)
                    {
                        $target = $panels.filter(':first');
                    }
                    break;

                case 'first':

                    $target = $panels.filter(':first');
                    break;

                case 'last':

                    $target = $panels.filter(':last');
                    break;
            }

            if($target.length > 0) {
                self.snapToPanel($target);
            }

        },

        getScrollInterval: function () {

            return this.$container.is('body') ? window.innerHeight : this.$container.height();
        },

        updateScrollInterval: function () {

            this.scrollInterval = this.getScrollInterval();

        },

        enable: function() {

            var self = this;

            // Gather scrollOffset for next scroll
            self.scrollOffset = self.$snapContainer.scrollTop();

            self.enabled = true;

        },

        disable: function() {

            var self = this;

            self.enabled = false;

        },

        toggle: function() {

            var self = this;

            if(self.enabled) {
                self.disable();
            } else {
                self.enable();
            }

        }

    };

    $.fn[pluginName] = function(options) {

        var args = Array.prototype.slice.call(arguments);

        return this.each(function() {

            var pluginInstance = $.data(this, storageName);
            if(typeof options === 'object' || options === 'init' || ! options) {
                if(!pluginInstance) {
                    if(options === 'init') {
                        options = args[1] || {};
                    }

                    pluginInstance = Object.create(pluginObject).init(options, this);
                    $.data(this, storageName, pluginInstance);
                } else {
                    $.error('Plugin is already initialized for this object.');
                    return;
                }
            } else if(!pluginInstance) {
                $.error('Plugin is not initialized for this object yet.');
                return;
            } else if(pluginInstance[options]) {
                var method = options;
                options = args.slice(1);
                pluginInstance[method].apply(pluginInstance, options);
            } else {
                $.error('Method ' +  options + ' does not exist on jQuery.panelSnap.');
                return;
            }

        });

    };

    $.fn[pluginName].options = {
        $menu: false,
        menuSelector: 'a',
        panelSelector: '> section',
        namespace: '.panelSnap',
        onSnapStart: function(){},
        onSnapFinish: function(){},
        onActivate: function(){},
        directionThreshold: 50,
        slideSpeed: 200,
        easing: 'linear',
        offset: 0,
        keyboardNavigation: {
            enabled: false,
            nextPanelKey: 40,
            previousPanelKey: 38,
            wrapAround: true
        }
    };

})(jQuery, window, document);

/*!
 * Special flavoured jQuery Mobile scrollstart & scrollstop events.
 * Version 0.1.3
 *
 * Requires:
 * - jQuery 1.7.1 or higher (no jQuery.migrate needed)
 *
 * Copyright 2013, Guido Bouman
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Date: Wed Feb 13 16:05:00 2013 +0100
 */
(function($) {

    // Also handles the scrollstop event
    $.event.special.scrollstart = {

        enabled: true,

        setup: function() {

            var thisObject = this;
            var $this = $(thisObject);
            var scrolling;
            var timer;
            var isTouching;

            $this.data('scrollwatch', true);

            function trigger(event, scrolling) {

                event.type = scrolling ? "scrollstart" : "scrollstop";
                $this.trigger(event);

            }

            $this.on("touchstart", function(event) {
                isTouching = true;
            });

            $this.on("touchleave touchcancel touchend", function(event) {
                isTouching = false;
                setTimeout(function () {
                    clearTimeout(timer);
                }, 50);
            });

            $this.on("touchmove scroll", function(event) {

                if (isTouching) {
                    return;
                }

                if(!$.event.special.scrollstart.enabled) {
                    return;
                }

                if(!$.event.special.scrollstart.scrolling) {
                    $.event.special.scrollstart.scrolling = true;
                    trigger(event, true);
                }

                clearTimeout(timer);
                timer = setTimeout(function() {
                    $.event.special.scrollstart.scrolling = false;
                    trigger(event, false);
                }, 50);

            });

        }

    };

    // Proxies scrollstart when needed
    $.event.special.scrollstop = {

        setup: function() {

            var thisObject = this;
            var $this = $(thisObject);

            if(!$this.data('scrollwatch')) {
                $(this).on('scrollstart', function(){});
            }

        }

    };

})(jQuery);

/*!
 * Resizestart and resizestop events.
 * Version 0.0.1
 *
 * Requires:
 * - jQuery 1.7.1 or higher (no jQuery.migrate needed)
 *
 * Copyright 2013, Guido Bouman
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Date: Fri Oct 25 15:05:00 2013 +0100
 */
(function($) {

    // Also handles the resizestop event
    $.event.special.resizestart = {

        enabled: true,

        setup: function() {

            var thisObject = this;
            var $this = $(thisObject);
            var resizing;
            var timer;

            $this.data('resizewatch', true);

            function trigger(event, resizing) {

                event.type = resizing ? "resizestart" : "resizestop";
                $this.trigger(event);

            }

            $this.on("resize", function(event) {

                if(!$.event.special.resizestart.enabled) {
                    return;
                }

                if(!$.event.special.resizestart.resizing) {
                    $.event.special.resizestart.resizing = true;
                    trigger(event, true);
                }

                clearTimeout(timer);
                timer = setTimeout(function() {
                    $.event.special.resizestart.resizing = false;
                    trigger(event, false);
                }, 200);

            });

        }

    };

    // Proxies resizestart when needed
    $.event.special.resizestop = {

        setup: function() {

            var thisObject = this;
            var $this = $(thisObject);

            if(!$this.data('resizewatch')) {
                $(this).on('resizestart', function(){});
            }

        }

    };

})(jQuery);

/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
(function($) {

    var types = ['DOMMouseScroll', 'mousewheel'];

    if ($.event.fixHooks) {
        for ( var i=types.length; i; ) {
            $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function() {
            if ( this.addEventListener ) {
                for ( var i=types.length; i; ) {
                    this.addEventListener( types[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i=types.length; i; ) {
                    this.removeEventListener( types[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call( arguments, 1 ),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;

        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
        if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaY = 0;
            deltaX = -1*delta;
        }

        // Webkit
        if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
        if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

})(jQuery);
/*global _:false, Modernizr:false */

(function ($) {
    'use strict';

    var Config = {
        PanelsCSSTemplate: _.template([
            'body .id7-masthead .id7-search .id7-search-box {',
                'border-color: <%= colour %>;',
            '}',
            'body .id7-masthead .id7-search .fa {',
                'color: rgba(<%= colour_r %>, <%= colour_g %>, <%= colour_b %>, 0.5);',
            '}',
            'body .id7-masthead .id7-search .twitter-typeahead:hover + .fa {',
                'color: <%= colour %>;',
            '}',
            'body .id7-masthead .id7-search .twitter-typeahead .tt-suggestion.tt-cursor {',
                'background: <%= colour %>;',
            '}',
            'body .form-control:focus {',
                'border-color: <%= colour %>;',
                '-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(<%= colour_r %>, <%= colour_g %>, <%= colour_b %>, 0.6);',
                'box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(<%= colour_r %>, <%= colour_g %>, <%= colour_b %>, 0.6);',
            '}',
            '.id7-page-header {',
                'background: <%= colour %>;',
            '}',
            '.id7-masthead .id7-logo-row nav {',
                'opacity: 1;',
                'filter: alpha(opacity=100);',
            '}',
            '.id7-masthead .id7-logo-row nav a {',
                'color: <%= colour %> !important;',
            '}'
        ].join('')),
        NavCSSTemplate: _.template([
            '<% _.each(panels, function (panel) { %>',
                '.carousel-nav a[href="#<%= panel.id %>"]:hover {',
                    'color: <%= panel.lighter_colour %>;',
                '}',
            '<% }); %>'
        ].join('')),
        Defaults: {
            menu: '.carousel-nav',
            panels: '.jumbotron-carousel > article:visible',
            animation: {
                length: 300,
                easing: 'swing'
            },
            keyboardNavigation: {
                enabled: true,
                wrapAround: false
            },
            defaultImageFocalPoint: 'center center',
            defaultImageScaling: 'cover',
            showFullpageImageCarouselTest: function () {
                // As per ID-94, if a browser can't do Flexbox (and therefore can't do panel layouts), serve the mobile hp
                return Modernizr.mq('only all and (min-width: 768px)') && Modernizr.flexbox;
            }
        }
    };

    /**
     * Display a megamenu popover
     */
    var HomepageCarousel = (function () {
        function HomepageCarousel(o) {
            o = $.extend({}, Config.Defaults, o);
            this.$container = o.container;
            this.options = o;

            // Apply the colour from the first panel - on mobile, this is the only one ever applied
            this.applyPanelStyles(this.$container.find(this.options.panels + '[data-colour]').first().data('colour'));
            this.onScreenResize();
            this.wireEventHandlers();
        }

        $.extend(HomepageCarousel.prototype, {
            wireEventHandlers: function wireEventHandlers() {
                $(window).on('resize.id7.homepage', $.proxy(this.onScreenResize, this));

                // ID-30 on load (i.e. after fonts have loaded) run this, forcing a resize
                $(window).on('load', $.proxy(function (e) {
                    this.onScreenResize(e, true);
                }, this));

                var $container = this.$container;

                // When popovers are open, disable the panel snap
                $(document.body)
                    .on('shown.bs.popover', function () {
                        if ($container.data('plugin_panelSnap')) {
                            $container.panelSnap('disable');
                        }
                    })
                    .on('hidden.bs.popover', function () {
                        if ($container.data('plugin_panelSnap')) {
                            $container.panelSnap('enable');
                        }
                    });
            },

            onScreenResize: function onResize() {
                var isOnLoad = (typeof this.lastIsDesktop === 'undefined');

                // Which stop-point are we on?
                var isDesktop = this.options.showFullpageImageCarouselTest();

                // Early exit if we're not transitioning
                if (isDesktop === this.lastIsDesktop) return;

                this.initPanelSnap(isOnLoad, isDesktop);
                this.initMenu(isOnLoad, isDesktop);
                this.initBackgroundImages(isOnLoad, isDesktop);
                this.initBackgroundColours(isOnLoad, isDesktop);
                this.initHashChangeListener(isOnLoad, isDesktop);
                this.initCaptionIcons(isOnLoad, isDesktop);
                this.initScrollWatcher(isOnLoad, isDesktop);

                this.lastIsDesktop = isDesktop;
            },

            initPanelSnap: function initPanelSnap(isOnLoad, isDesktop) {
                var $container = this.$container;
                var options = this.options;

                var onChangePanel = $.proxy(this.onChangePanel, this);

                if ($container.data('plugin_panelSnap')) {
                    if (isDesktop) {
                        $container.panelSnap('enable');
                    } else {
                        $container.panelSnap('disable');
                    }
                } else if (isDesktop) {
                    // First time init
                    $container.panelSnap({
                        panelSelector: options.panels,
                        slideSpeed: options.animation.length,
                        easing: options.animation.easing,
                        keyboardNavigation: options.keyboardNavigation,
                        onActivate: onChangePanel,
                        onSnapStart: onChangePanel,
                        onSnapFinish: $.proxy(this.onChangePanelComplete, this)
                    });
                }

                // Scroll to right panel on page load
                if (isDesktop && isOnLoad && window.location.hash.length > 0 && $container.find(options.panels + window.location.hash).length) {
                    setTimeout(function() {
                        $('html, body').scrollTop($(window.location.hash).offset().top);
                    }, 100);
                }
            },

            initMenu: function initMenu(isOnLoad, isDesktop) {
                var $container = this.$container;
                var options = this.options;

                var $menu = $container.find(this.options.menu);
                var onChangePanel = $.proxy(this.onChangePanel, this);

                $menu.find('a[href^="#"]').off('click.id7.homepage');

                if (isDesktop) {
                    $container.scrollspy({ target: options.menu }); // Idempotent, safe to call multiple times

                    // Smooth scroll
                    $menu.find('a[href^="#"]').on('click.id7.homepage', function (e) {
                        // prevent default anchor click behavior
                        e.preventDefault();

                        // store hash
                        var hash = this.hash;
                        onChangePanel($(hash));

                        // animate
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, options.animation.length, function () {
                            if (!$('.megamenu-links.popover').is(':visible')) {
                                window.location.hash = hash;
                            }
                        });
                    });

                    if ($('#homepage-style-rules-nav').is(':empty')) {
                        var panelColours = [];
                        $container.find(options.panels + '[id][data-colour]').each(function () {
                            function screen(cb, cs) {
                                return Math.round((cb + cs) - ((cb * cs) / 255));
                            }

                            function lighten(cb, ratio) {
                                return Math.min(255, Math.round(cb + (255 * ratio)));
                            }

                            function componentToHex(c) {
                                var hex = c.toString(16);
                                return hex.length == 1 ? "0" + hex : hex;
                            }

                            function rgbToHex(r, g, b) {
                                return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
                            }

                            var $panel = $(this);
                            var id = $panel.attr('id');
                            var colour = $panel.data('colour');

                            var r = parseInt(colour.substring(1, 3), 16);
                            var g = parseInt(colour.substring(3, 5), 16);
                            var b = parseInt(colour.substring(5, 7), 16);

                            var lighten_factor = 0.2; // 20%

                            var r_brighter = lighten(r, lighten_factor);
                            var g_brighter = lighten(g, lighten_factor);
                            var b_brighter = lighten(b, lighten_factor);

                            panelColours.push({
                                id: id,
                                colour: colour,
                                lighter_colour: rgbToHex(r_brighter, g_brighter, b_brighter),
                                colour_r: parseInt(colour.substring(1, 3), 16),
                                colour_g: parseInt(colour.substring(3, 5), 16),
                                colour_b: parseInt(colour.substring(5, 7), 16)
                            });
                        });

                        $('#homepage-style-rules-nav').text(Config.NavCSSTemplate({
                            panels: panelColours
                        }));
                    }
                }
            },

            initBackgroundColours: function initBackgroundColours(isOnLoad, isDesktop) {
                var $container = this.$container;

                // Init background colours
                $container.find('[data-colour]').each(function () {
                    var $panel = $(this);
                    var colour = $panel.data('colour');
                    var colour_r = parseInt(colour.substring(1, 3), 16);
                    var colour_g = parseInt(colour.substring(3, 5), 16);
                    var colour_b = parseInt(colour.substring(5, 7), 16);

                    $panel.css('background-color', colour);
                    var $content = $panel.find('.caption-content');
                    $content.css('background-color', colour);

                    if (isDesktop) {
                        $content.css('background-color', 'rgba(' + colour_r + ', ' + colour_g + ', ' + colour_b + ', 0.9)');
                    }
                });
            },

            initBackgroundImages: function initBackgroundColours(isOnLoad, isDesktop) {
                var $container = this.$container;
                var options = this.options;

                // Background images
                if (isDesktop) {
                    $container.find('[data-image]').each(function () {
                        var $panel = $(this);

                        $panel.css('background-image', 'url(' + $panel.data('image') + ')');

                        var position = $panel.data('image-focal-point') || options.defaultImageFocalPoint;
                        $panel.css('background-position', position);

                        var scaling = $panel.data('image-scaling') || options.defaultImageScaling;
                        $panel.css('background-size', scaling);
                    });
                } else {
                    $container.find('[data-image]').css({
                        'background-image': '',
                        'background-position': '',
                        'background-size': ''
                    });
                }
            },

            initCaptionIcons: function initCaptionIcons(isOnLoad, isDesktop) {
                var $container = this.$container;

                if (!isDesktop) {
                    $container.find('[data-icon]').each(function () {
                        var $caption = $(this);

                        var $target = $caption;

                        var $icon = $('<img />').addClass('caption-icon').attr({
                            alt: $caption.find('h2').first().text(),
                            src: $caption.data('icon')
                        });

                        if ($caption.find('a').length > 0) {
                            // Shallow clone
                            var $iconLink = $($caption.find('a')[0].cloneNode(false)).addClass('caption-icon-link');
                            $target.prepend($iconLink.append($icon));
                        } else {
                            $target.prepend($icon);
                        }
                    });
                } else {
                    $container.find('[data-icon] .caption-icon-link').remove();
                    $container.find('[data-icon] .caption-icon').remove();
                }
            },

            initHashChangeListener: function initHashChangeListener (isOnLoad, isDesktop) {
                // Handle in-page bookmarks.
                if (isOnLoad && !isDesktop && window.location.hash) this.hashChanged();
                $(window).off('hashchange.id7.homepage');

                if (!Modernizr.mq('only all and (min-width: 768px)')) {
                    $(window).on('hashchange.id7.homepage', $.proxy(this.hashChanged, this));
                }
            },

            hashChanged: function onHashChange() {
                var scrollY = $('.id7-page-header').outerHeight();
                setTimeout(function () {
                    window.scrollBy(0, -scrollY);
                }, 1);
            },

            initScrollWatcher: function initScrollWatcher (isOnLoad, isDesktop) {
                $(window).off('scrollstop.id7.homepage');

                if (!isDesktop) {
                    var $container = this.$container;
                    var options = this.options;
                    var fixedHeight = $('.id7-page-header').outerHeight();
                    var onChangePanel = $.proxy(this.onChangePanel, this);
                    var applyPanelStyles = $.proxy(this.applyPanelStyles, this);

                    $(window).on('scrollstop.id7.homepage', function (e) {
                        var scrollY = fixedHeight + $(window).scrollTop();

                        var beforeScroll = $container.find(options.panels + '[data-colour]:visible').filter(function () {
                            var $panel = $(this);
                            var offsetY = $panel.offset().top;

                            return offsetY <= scrollY;
                        });

                        if (beforeScroll.length == $container.find(options.panels + '[data-colour]:visible').length) {
                            // We've scrolled past all of them, use Warwick Aubergine
                            applyPanelStyles('#7b428e');
                        } else {
                            var $panel = (beforeScroll.length > 0) ? beforeScroll.last() : $container.find(options.panels + '[data-colour]:visible').first();
                            onChangePanel($panel);
                        }
                    });
                }
            },

            onChangePanel: function ($panel) {
                this.applyPanelStyles($panel.data('colour'));
            },

            applyPanelStyles: function (colour) {
                //cb + cs - cb * cs
                //function screen (cb, cs) {
                //    return Math.round((cb + cs) - ((cb * cs) / 255));
                //}
                //
                //function componentToHex(c) {
                //    var hex = c.toString(16);
                //    return hex.length == 1 ? "0" + hex : hex;
                //}
                //
                //function rgbToHex(r, g, b) {
                //    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
                //}

                var r = parseInt(colour.substring(1, 3), 16);
                var g = parseInt(colour.substring(3, 5), 16);
                var b = parseInt(colour.substring(5, 7), 16);

                //var screen_factor = 102; // #666666
                //
                //var r_brighter = screen(r, screen_factor);
                //var g_brighter = screen(g, screen_factor);
                //var b_brighter = screen(b, screen_factor);

                // Note: all this screen/brightening stuff not currently used.

                try {
                    $('#homepage-style-rules-panels').text(Config.PanelsCSSTemplate({
                        colour: colour,
                        //brighter_colour: rgbToHex(r_brighter, g_brighter, b_brighter),
                        colour_r: r,
                        colour_g: g,
                        colour_b: b
                    }));
                } catch (e) {
                    // This fails on IE8. Just accept the default colours
                }
            },

            onChangePanelComplete: function ($panel) {
                // when done, add hash to url
                // (default click behaviour)
                // Only if the more links popover is not open
                if (!$('.megamenu-links.popover').is(':visible')) {
                    window.location.hash = $panel.attr('id');
                }
            }
        });

        return HomepageCarousel;
    })();

    $.fn.homepageCarousel = function (o) {
        o = o || {};

        function attach(i, element) {
            var $container = $(element);
            var homepageCarousel = new HomepageCarousel($.extend({}, $container.data(), o, {
                container: $container
            }));

            $container.data('id7.homepage-carousel', homepageCarousel);
        }

        return this.each(attach);
    };

    $(function() {
        $('body').homepageCarousel();
    });
})(jQuery);
(function ($) {
    'use strict';

    var Config = {
        Defaults: {
            container: 'body', // Needed to avoid being drawn under the nav carousel which is fixed in the body
            template: [
                '<div class="popover megamenu-links">',
                '<div class="arrow"></div>',
                '<div class="popover-inner">',
                '<div class="popover-content container-fluid"></div>',
                '</div>',
                '</div>'
            ].join('')
        }
    };

    /**
     * Display a megamenu popover
     */
    var MoreLinksPopover = (function () {
        function MoreLinksPopover(o) {
            o = $.extend({}, Config.Defaults, o);
            this.$trigger = o.trigger;
            this.options = o;

            this.wireEventHandlers();
        }

        $.extend(MoreLinksPopover.prototype, {
            wireEventHandlers: function wireEventHandlers() {
                var $trigger = this.$trigger;
                var options = this.options;

                $trigger.on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }).popover({
                    container: options.container,
                    content: $(options.target).find('> .container').html(),
                    template: options.template,
                    html: true,
                    placement: 'bottom',
                    title: 'More links',
                    trigger: 'click'
                }).on('show.bs.popover', function () {
                    $trigger.data('previous-hash', window.location.hash);
                    window.location.hash = options.target;
                }).on('hide.bs.popover', function () {
                    if ($trigger.data('previous-hash')) {
                        window.location.hash = $trigger.data('previous-hash');
                    }
                });

                if ($trigger.is(':visible') && window.location.hash == options.target) {
                    $trigger.popover('show');
                }

                // Click away to dismiss
                $('html').on('click.popoverDismiss', function (e) {
                    // if clicking anywhere other than the popover itself
                    if ($(e.target).closest('.popover').length === 0 && $(e.target).closest('.use-popover').length === 0) {
                        $trigger.popover('hide');
                    }
                });
            }
        });

        return MoreLinksPopover;
    })();

    $.fn.moreLinksPopover = function (o) {
        o = o || {};

        function attach(i, element) {
            var $trigger = $(element);
            var moreLinksPopover = new MoreLinksPopover($.extend({}, $trigger.data(), o, {
                trigger: $trigger
            }));

            $trigger.data('id7.more-links-popover', moreLinksPopover);
        }

        return this.each(attach);
    };

    $(function() {
        if (Modernizr.flexbox) {
            $('[data-toggle="id7:megamenu-popover"]').moreLinksPopover();
        }
    });
})(jQuery);