var app = app || {};

(function($) {


  /**
   * Support:
   *  Android 3.0 browser - one of the first implementations. Check out this video to see it in action.
   *  Chrome for Android (0.16)
   *  Firefox Mobile 10.0
   *  iOS6 Safari and Chrome (partial support)
   */
  app.getUserMedia = function() {
    // Note: Opera is unprefixed.
    var args = arguments;
    var userMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    return userMedia.apply(navigator,arguments);
  }
  app.hasGetUserMedia = function() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  }
  
  app.render = function(templateName, data) {
    data = data || {};
    return render(templateName, data);
  }

})(jQuery);

(function(w) {

  w.render = function(templateName, data) {
    var tmpl = Handlebars.templates[templateName];
    if (tmpl) {
      return tmpl(data);
    } else {
      // obviously, handle this case as you think most appropriate.
      return "<small>Error: could not find template: " + templateName + "</small>";
    }
  }
})(window);

