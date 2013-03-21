;(function() {

	// --------- View Registration --------- //
	brite.registerView("MainScreen", {
		loadTmpl : true,
		parent : "#bodyPage"
	}, {
		create : function(data, config) {
			return app.render("tmpl-MainScreen");
		},

		postDisplay : function(data, config) {
			var view = this;
			var $e = view.$el;
			
			var $video = $e.find('.webCam');
      var $canvas = $e.find('.cacheCanvas');
      view.$video = $video;
      view.$canvas = $canvas;
      view.gtx = brite.gtx($canvas);
			
			loadCamera.call(view);
		},
		events : {
		  "btap;.btnCapture":function(e){
		    var view = this;
		    takeScreenshot.call(view);
		  },
		  "btap;.btnSave":function(e){
		    var view = this;
		    brite.display("FileSaveDialog");
		  }
		}

	});
	// --------- View Registration --------- //
	
	
	function loadCamera(){
	  var view = this;
	  var $e = view.$el;
  
    // Not showing vendor prefixes.
    app.getUserMedia({video: true}, function(localMediaStream) {
      view.localMediaStream = localMediaStream;
      var $video = $e.find('.webCam');
      var video = $video[0];
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
      // Note: onloadedmetadata doesn't fire in Chrome when using it with getUserMedia.
      // See crbug.com/110938.
      //video.onloadedmetadata = function(e) {
        // Ready to go. Do some stuff.
      //};
    }, function(e){
      console.log('Reeeejected!', e);
    });
	}
	
	function takeScreenshot() {
	  var view = this;
    var $e = view.$el;
  
	  var $video = view.$video;
	  var $canvas = view.$canvas;
    var gtx = view.gtx;
    var video = $video[0];
    var localMediaStream = view.localMediaStream;
    gtx.clear();
    
    var w = $video.width();
    var h = $video.height();
    gtx.canvas().width = w;
    gtx.canvas().height = h;
    
    if (localMediaStream) {
      gtx.drawImage(video, 0, 0,w,h);
      $e.find('.imgScreenShot').attr('src',$canvas[0].toDataURL('image/png'));
    }
  }

})();
