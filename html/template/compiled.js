(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['content'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n  <p>test</p>\n  <p>"
    + this.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0,"key",{"name":"t","hash":{},"data":data}))
    + "</p>\n</div>\n";
},"useData":true});
})();