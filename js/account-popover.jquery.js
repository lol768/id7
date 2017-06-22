/*global _:false, console:false, JSON:false */

(function ($) {
  'use strict';

  function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
  }

  var Config = {
    Templates: {
      Popover: function (o) { return '<div class="account-info"><iframe src="' + escapeHtml(o.iframelink + "?embedded") + '" scrolling="auto" frameborder="0" allowtransparency="true" seamless sandbox="allow-same-origin allow-scripts allow-top-navigation allow-forms allow-popups"></iframe></div><div class="actions"><div class="btn-group btn-group-justified"><div class="btn-group sign-out"><a href="' + escapeHtml(o.logoutlink) + '" class="btn btn-default">Sign out</a></div></div></div>'; },
      Action: function (o) { return '<div class="btn-group"><a href="' + escapeHtml(o.href) + '" title="' + escapeHtml(o.tooltip) + '" class="btn btn-default ' + escapeHtml(o.classes) + '">' + escapeHtml(o.title) + '</a></div>'; }
    },
    Defaults: {
      container: false,
      iframelink: 'https://my-dev.warwick.ac.uk/',
      notificationsApi: 'https://my-dev.warwick.ac.uk/api/id7/notifications/unreads',
      showNotificationsBadge: true,
      maxNumberNotifications: 99,
      template: [
        '<div class="popover account-information">',
        '<div class="arrow"></div>',
        '<div class="popover-inner">',
        '<div class="popover-content"><p></p></div>',
        '</div>',
        '</div>'
      ].join('')
    },
    MessagePrefix: 'message.id7.account-popover.'
  };

  var fetchNotificationData = (function(endpoint, callback) {
    // avoid fetch for compatibility
      $.ajax({
          url: endpoint,
          success: callback,
          dataType: "json",
          xhrFields: {
            withCredentials: true
          }
      });
  });

  /**
   * Display a popover with account information
   */
  var AccountPopover = (function () {
    function AccountPopover(o) {
      o = $.extend({}, Config.Defaults, o);
      this.$trigger = o.trigger;
      this.options = o;

      if (typeof this.options.logoutlink === 'undefined') {
        this.options.logoutlink = this.$trigger.attr('href');
      }

      this.wireEventHandlers();
    }

    $.extend(AccountPopover.prototype, {
      wireEventHandlers: function wireEventHandlers() {
        var $trigger = this.$trigger;

        if (this.options.name) {
          var badgeHtml = ' <span class="fa-stack id7-notifications-badge">  <i class="fa fa-circle fa-stack-2x"></i>  <strong class="fa-stack-1x brand-text counter-value">X</strong> </span>';
          $trigger.html(this.options.name + badgeHtml + ' <span class="caret"></span>');
        }

        var $badge = $trigger.find(".id7-notifications-badge");
        $badge.hide();

        $trigger
          .on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $trigger.popover('toggle');
            $badge.hide();
            return false;
          })
          .popover({
            container: this.options.container,
            content: Config.Templates.Popover(this.options),
            template: this.options.template,
            html: true,
            placement: 'bottom',
            title: 'Account information',
            trigger: 'manual'
          });

        if (this.options.showNotificationsBadge) {
          var that = this;
          fetchNotificationData(this.options.notificationsApi, function(data) {
            var unreads = Math.min(data.unreads, 99);
            if (unreads > 0) {
              $badge.find(".counter-value").text(unreads);
              $badge.fadeIn();
              that.options.iframelink = that.options.iframelink + 'notifications';
              $trigger.data('bs.popover').options.content = Config.Templates.Popover(that.options);
            }
          });
        }

        // Click away to dismiss
        $('html').on('click.popoverDismiss', function (e) {
          var $target = $(e.target);
          if ($target.closest('.popover').length === 0 && $target.closest('.use-popover').length === 0 && $target.closest($trigger).length === 0) {
            $trigger.popover('hide');
          }
        });
      },
      onMessage: function onMessage(messageType, data) {
        var $popover = this.$trigger.next('.popover');

        switch (messageType) {
          case 'addAction':
            _.defaults(data, { classes: '', tooltip: '' });

            $popover.find('.actions > .btn-group').prepend(Config.Templates.Action(data));
            $popover.find('.actions > .btn-group > .btn-group').first().find('[title]:not([title=""])').tooltip({
              placement: 'bottom'
            });
            break;
          case 'resizeIframe':
            $popover.find('.account-info iframe').height(data.height);
            break;
          case 'signedOut':
            var loginlink = this.options.loginlink;
            $popover.find('.actions > .btn-group > .sign-out').replaceWith(Config.Templates.Action({ href: loginlink, classes: 'sign-in', title: 'Sign in', tooltip: '' }));
            break;
          default:
            console.error('Unexpected message type: ' + messageType);
        }
      }
    });

    return AccountPopover;
  })();

  $.fn.accountPopover = function (o) {
    o = o || {};

    function attach(i, element) {
      var $trigger = $(element);
      var accountPopover = new AccountPopover($.extend({}, $trigger.data(), o, {
        trigger: $trigger
      }));

      $trigger.data('id7.account-popover', accountPopover);
    }

    return this.each(attach);
  };

  $(function () {
    $('[data-toggle="id7:account-popover"]').accountPopover();

    // Listen to relevant messages and send them through
    $(window).on('message', function (e) {
      var origin = e.originalEvent.origin;

      try {
        var data = JSON.parse(e.originalEvent.data);
        if (data.type && data.type.indexOf(Config.MessagePrefix) === 0) {
          var messageType = data.type.substring(Config.MessagePrefix.length);

          // Send the message out to each instance
          $('[data-toggle="id7:account-popover"]').each(function () {
            var $trigger = $(this);
            var accountPopover = $trigger.data('id7.account-popover');

            if (accountPopover.options.iframelink.indexOf(origin) !== 0) {
              console.error('Ignored message of type ' + messageType + ' because origin ' + origin + ' didn\'t match iframe link ' + accountPopover.options.iframelink);
            } else {
              accountPopover.onMessage(messageType, data);
            }
          });
        }
      } catch (error) {}
    })
  });

})(jQuery);
