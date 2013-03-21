Handlebars.templates = Handlebars.templates || {};


// template --- tmpl-FileSaveDialog ---
Handlebars.templates['tmpl-FileSaveDialog'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"FileSaveDialog\">\n    <div>\n        <input type=\"text\" value=\"\"/>\n    </div>\n    <div class=\"FileSaveDialog-buttonbar\">\n      <button class=\"btn btn-primary\" data-action=\"save\">Save</button>\n      <button class=\"btn\" data-action=\"cancel\">Cancel</button>\n    </div>\n  </div>";}
);

// template --- tmpl-MainScreen ---
Handlebars.templates['tmpl-MainScreen'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"MainScreen\">\n    <canvas class=\"cacheCanvas\" style=\"display:none;\"></canvas>\n    <div class=\"MainScreen-content\">\n    	<div class=\"camContent\">\n    		<video class=\"webCam\" />\n    		<img class=\"imgScreenShot\" />\n    	</div>\n      <div class=\"btnContent\">\n        <div><div class=\"btn btnCapture\">Capture</div></div>\n        <div><div class=\"btn btnSave\">Save</div></div>\n      </div>\n    </div>\n	</div>";}
);
