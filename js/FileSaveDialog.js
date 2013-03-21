;(function() {

	// --------- View Registration --------- //
	brite.registerView("FileSaveDialog", {
		loadTmpl : true,
		parent : "body"
	}, {
		create : function(data, config) {
			return app.render("tmpl-FileSaveDialog");
		},

		postDisplay : function(data, config) {
			var view = this;
			var $e = view.$el;
			
  	  // get the canvas element
      var mainScreen = $("body").bFindComponents("MainScreen")[0];
      view.canvas = mainScreen.$canvas[0];
      console.log(mainScreen);
  
      $e.find("input").val(getFileName.call(view)).focus();
		},
		events : {
		  "btap;[data-action='cancel']":function(e){
		    var view = this;
		    var $e = view.$el;
		    $e.bRemove();
		  },
		  "btap;[data-action='save']":function(e){
		    var view = this;
        var $e = view.$el;
        // get the filename
        var $fileName = $e.find("input");
		    
		    if ($fileName.val() == "") {
            $fileName.val(getFileName.call(view));
        }
  
        view.canvas.toBlob(function(blob) {
          // create the a element
          var $a = $("<a></a>");
          var a = $a[0];
          a.download = $fileName.val();
          var URL = window.URL || window.webkitURL;
          a.href = URL.createObjectURL(blob);

          // auto click on the element
          var event = document.createEvent("MouseEvents");
          event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          a.dispatchEvent(event);

          $e.bRemove();

        }, "image/png"); 

      }
		}

	});
	// --------- View Registration --------- //
	
	function getFileName() {
    var time = app.util.now();
    return "Screenshot - WebCamraDemo - " + time+".png";
  }

})();
