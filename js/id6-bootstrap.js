/**
 * If jQuery 1.8 or older is detected, loads a much newer jQuery and Bootstrap 3.
 * After adding this script you must use the usual jQuery onready stuff to
 * contain your code, otherwise it'll run before this has finished. e.g.:
 *     jQuery(function() {
 *       // new jQuery should work here
 *     });
 */
(function(){
  var j = jQuery;
  var loadCss = function(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  };
  var loadScript = function(url) {
    j.holdReady(true);
    j.getScript( url ).always(function() {
      j.holdReady(false);
    });
  };
  
  if (!window.jQuery || (window.jQuery.fn.jquery||'').match(/1\.[5678]/)) {
    loadCss('//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css');
    loadScript('https://code.jquery.com/jquery-1.11.2.min.js');
    loadScript('//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js');
  }
  
})();