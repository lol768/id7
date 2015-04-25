/* Implementation of WPopupBox that utilises a Bootstrap Popover */

window.WPopupBox || (window.WPopupBox = (function ($) {
  'use strict';

  var Config = {
    Defaults: {

    }
  };

  function WPopupBox(config, o) {
    // config argument for legacy support, not actually used
    o = $.extend({}, Config.Defaults, o);

    this.options = o;

    /*
     * Widely used options:
     *
     * element - a jQuery element for the contents of the popup
     * width
     * height
     * x
     * y
     */

  }

  $.extend(WPopupBox.prototype, {

  });

  return WPopupBox;
})(jQuery));