"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,l){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:n.default});(0,t.default)(a,l.default.modulePrefix),e.default=a}),define("dummy/components/bootstrap-affix",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Component,t=Ember.computed,l=Ember.$
e.default=n.extend({after:null,autoPosition:!1,initialOffsetTop:null,offsetTopFunc:t("after",function(){var e=this
return function(){var n=l(e.get("after")).eq(0)
return 0===n.length?e.get("initialOffsetTop"):n.offset().top+n.outerHeight()}}),offsetTop:10,affixedOffsetTop:t("after",function(){var e=l(this.get("after")).eq(0)
return 0===e.length?this.get("offsetTop"):this.get("initialOffsetTop")-(e.offset().top+e.outerHeight())}),didInsertElement:function(){var e=this
e.set("initialOffsetTop",e.$().offset().top),!0===e.get("autoPosition")&&e.$().on("affix.bs.affix affixed.bs.affix",function(){e.$().css("top",e.get("affixedOffsetTop"))}).on("affixed-top.bs.affix",function(){e.$().css("top","")}),e.$().affix({offset:{top:e.get("offsetTopFunc")}})}})}),define("dummy/components/code-block",["exports","ember-prism/components/code-block"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/components/code-inline",["exports","ember-prism/components/code-inline"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/components/intl-tel-input",["exports","ember-intl-tel-input/components/intl-tel-input"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Controller,t=Ember.$
e.default=n.extend({geoIpLookupFunc:function(e){t.getJSON("http://ipinfo.io/").always(function(n){n&&n.country||e(""),e(n.country)})}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var l,a=n.default.exportApplicationGlobal
l="string"==typeof a?a:Ember.String.classify(n.default.modulePrefix),t[l]||(t[l]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[l]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){}),e.default=t}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"/yKx6yL0",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false],[0,"\\n\\n"],[6,"footer"],[9,"id","page-footer"],[7],[0,"\\n  "],[6,"div"],[9,"class","container"],[7],[0,"\\n    "],[6,"p"],[7],[0,"Licensed under "],[6,"a"],[9,"href","https://github.com/cdatehortuab/ember-intl-tel-input/blob/master/LICENSE.md"],[7],[0,"MIT"],[8],[0,"."],[8],[0,"\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/bootstrap-affix",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"iRc5oKNM",block:'{"symbols":["&default"],"statements":[[11,1],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/bootstrap-affix.hbs"}})}),define("dummy/templates/components/code-block",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"7hTcwWv6",block:'{"symbols":["&default"],"statements":[[6,"code"],[10,"class",[18,"languageClass"],null],[7],[11,1],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-block.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"oZgMdnpW",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","jumbotron"],[7],[0,"\\n  "],[6,"div"],[9,"class","container"],[7],[0,"\\n    "],[6,"h1"],[9,"class","text-center"],[7],[0,"\\n      "],[6,"span"],[9,"class","flow-text"],[7],[0,"International Telephone Input 2"],[8],[6,"br"],[7],[8],[0,"\\n      "],[6,"small"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Ember Addon"],[8],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","row"],[7],[0,"\\n      "],[6,"div"],[9,"class","col-sm-10 col-sm-offset-1"],[7],[0,"\\n        "],[6,"p"],[9,"class","lead text-center"],[7],[0,"\\n          "],[6,"span"],[9,"class","flow-text"],[7],[0,"An Ember.js addon for entering and validating international telephone numbers."],[8],[0,"\\n          "],[6,"span"],[9,"class","flow-text"],[7],[0,"This project is a fork of "],[6,"a"],[9,"href","https://github.com/justin-lau/ember-intl-tel-input"],[9,"target","_blank"],[7],[0,"justin-lau/ember-intl-tel-input"],[8],[0," that is outdated."],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","row text-center"],[7],[0,"\\n      "],[2," <button class=\\"btn btn-sm btn-default\\">github</button> "],[0,"\\n      "],[6,"a"],[9,"href","https://github.com/cdatehortuab/ember-intl-tel-input"],[7],[6,"span"],[9,"class","fa fa-5x fa-github"],[7],[8],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","container"],[7],[0,"\\n\\n  "],[6,"div"],[9,"class","row"],[7],[0,"\\n\\n    "],[6,"nav"],[7],[0,"\\n"],[4,"bootstrap-affix",null,[["id","after","autoPosition"],["side-nav",".jumbotron",true]],{"statements":[[0,"        "],[6,"ul"],[9,"class","nav"],[7],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","#basic-usage"],[7],[0,"Basic Usage"],[8],[8],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","#with-utilities-script"],[7],[0,"With Utilities Script"],[8],[8],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","#properties-binding"],[7],[0,"Properties Binding"],[8],[8],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","#lookup-users-country"],[7],[0,"Lookup User\'s Country"],[8],[8],[0,"\\n          "],[6,"li"],[7],[6,"a"],[9,"href","#credits"],[7],[0,"Credits"],[8],[8],[0,"\\n        "],[8],[0,"\\n"]],"parameters":[]},null],[0,"    "],[8],[0,"\\n\\n    "],[6,"main"],[7],[0,"\\n\\n      "],[6,"section"],[9,"id","basic-usage"],[7],[0,"\\n        "],[6,"h1"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Basic Usage"],[8],[8],[0,"\\n        "],[6,"hr"],[7],[8],[0,"\\n\\n        "],[6,"p"],[7],[0,"Just place the "],[4,"code-inline",null,null,{"statements":[[0,"{{intl-tel-input}}"]],"parameters":[]},null],[0," component in the handlebars template, as you would have guessed."],[8],[0,"\\n\\n        "],[6,"div"],[9,"class","row sample"],[7],[0,"\\n\\n          "],[6,"div"],[9,"class","col-code"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Code"],[8],[8],[0,"\\n            "],[4,"code-block",null,[["language"],["handlebars"]],{"statements":[[0,"{{intl-tel-input}}"]],"parameters":[]},null],[0,"\\n          "],[8],[0,"\\n\\n          "],[6,"div"],[9,"class","col-result"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Result"],[8],[8],[0,"\\n            "],[1,[25,"intl-tel-input",null,[["autoPlaceholder"],[false]]],false],[0,"\\n          "],[8],[0,"\\n\\n        "],[8],[0,"\\n\\n        "],[6,"p"],[7],[0,"The component derives from "],[6,"a"],[9,"href","https://emberjs.com/api/ember/2.17/classes/TextField"],[9,"target","_blank"],[7],[4,"code-inline",null,null,{"statements":[[0,"Ember.TextField"]],"parameters":[]},null],[8],[0,", anything you can do with the input helper can also be done with this component."],[8],[0,"\\n\\n        "],[6,"div"],[9,"class","row sample"],[7],[0,"\\n\\n          "],[6,"div"],[9,"class","col-code"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Code"],[8],[8],[0,"\\n            "],[4,"code-block",null,[["language"],["handlebars"]],{"statements":[[0,"{{intl-tel-input value=\\"555-5555\\"}}"]],"parameters":[]},null],[0,"\\n          "],[8],[0,"\\n\\n          "],[6,"div"],[9,"class","col-result"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Result"],[8],[8],[0,"\\n            "],[1,[25,"intl-tel-input",null,[["autoPlaceholder","value"],[false,"555-5555"]]],false],[0,"\\n          "],[8],[0,"\\n\\n        "],[8],[0,"\\n\\n      "],[8],[0,"\\n\\n      "],[6,"section"],[9,"id","with-utilities-script"],[7],[0,"\\n        "],[6,"h1"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"With Utilities Script"],[8],[8],[0,"\\n        "],[6,"hr"],[7],[8],[0,"\\n\\n        "],[6,"p"],[7],[0,"With the "],[6,"a"],[9,"href","https://github.com/jackocnr/intl-tel-input#utilities-script"],[9,"target","_blank"],[7],[0,"utilities script"],[8],[0," included, the "],[4,"code-inline",null,null,{"statements":[[0,"autoPlaceholder"]],"parameters":[]},null],[0," option is automatically enabled. The rest of the examples assume the utilities script is included."],[8],[0,"\\n\\n        "],[6,"div"],[9,"class","row sample"],[7],[0,"\\n\\n          "],[6,"div"],[9,"class","col-code"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Code"],[8],[8],[0,"\\n            "],[4,"code-block",null,[["language"],["javascript"]],{"statements":[[0,"// ember-cli-build.js\\nmodule.exports = function(defaults) {\\n  let app = new EmberApp(defaults, {\\n    ...\\n    \'ember-intl-tel-input\': {\\n      includeUtilsScript: true, // default to false\\n    },\\n    ...\\n  });\\n  ...\\n};"]],"parameters":[]},null],[0,"\\n            Or if you want to specify your own compatible utils script (like a custom build).\\n            "],[4,"code-block",null,[["language"],["javascript"]],{"statements":[[0,"// ember-cli-build.js\\nmodule.exports = function(defaults) {\\n  let app = new EmberApp(defaults, {\\n    ...\\n    \'ember-intl-tel-input\': {\\n      utilsScript: \'path/to/utilsScript.js\',\\n    },\\n    ...\\n  });\\n  ...\\n};"]],"parameters":[]},null],[0,"\\n            If you use both options the default utilsScript will be exported to the path specified.\\n            "],[4,"code-block",null,[["language"],["handlebars"]],{"statements":[[0,"{{intl-tel-input}}"]],"parameters":[]},null],[0,"\\n          "],[8],[0,"\\n\\n          "],[6,"div"],[9,"class","col-result"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Result"],[8],[8],[0,"\\n            "],[1,[18,"intl-tel-input"],false],[0,"\\n          "],[8],[0,"\\n\\n        "],[8],[0,"\\n\\n      "],[8],[0,"\\n\\n      "],[6,"section"],[9,"id","properties-binding"],[7],[0,"\\n        "],[6,"h1"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Properties Binding"],[8],[8],[0,"\\n        "],[6,"hr"],[7],[8],[0,"\\n\\n        "],[6,"p"],[7],[0,"Use the following properties for binding:"],[8],[0,"\\n\\n        "],[6,"ul"],[7],[0,"\\n          "],[6,"li"],[7],[4,"code-inline",null,null,{"statements":[[0,"value"]],"parameters":[]},null],[0," for input value"],[8],[0,"\\n          "],[6,"li"],[7],[4,"code-inline",null,null,{"statements":[[0,"selectedCountryData"]],"parameters":[]},null],[0," for data of the currently selected country"],[8],[0,"\\n          "],[6,"li"],[7],[4,"code-inline",null,null,{"statements":[[0,"number"]],"parameters":[]},null],[0," for formatted phone number"],[8],[0,"\\n          "],[6,"li"],[7],[4,"code-inline",null,null,{"statements":[[0,"extension"]],"parameters":[]},null],[0," for the extension part of the number"],[8],[0,"\\n          "],[6,"li"],[7],[4,"code-inline",null,null,{"statements":[[0,"numberType"]],"parameters":[]},null],[0," for the type of the current number"],[8],[0,"\\n          "],[6,"li"],[7],[4,"code-inline",null,null,{"statements":[[0,"isValidNumber"]],"parameters":[]},null],[0," for the validity of the number"],[8],[0,"\\n          "],[6,"li"],[7],[4,"code-inline",null,null,{"statements":[[0,"validationError"]],"parameters":[]},null],[0," for information about a validation error"],[8],[0,"\\n        "],[8],[0,"\\n\\n        "],[6,"div"],[9,"class","row sample"],[7],[0,"\\n\\n          "],[6,"div"],[9,"class","col-code"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Code"],[8],[8],[0,"\\n            "],[4,"code-block",null,[["language"],["handlebars"]],{"statements":[[0,"{{intl-tel-input\\n  allowExtensions=true\\n  value=value\\n  selectedCountryData=selectedCountryData\\n  number=number\\n  extension=extension\\n  numberType=numberType\\n  isValidNumber=isValidNumber\\n  validationError=validationError}}"]],"parameters":[]},null],[0,"\\n          "],[8],[0,"\\n\\n          "],[6,"div"],[9,"class","col-result"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Result"],[8],[8],[0,"\\n            "],[1,[25,"intl-tel-input",null,[["allowExtensions","value","selectedCountryData","number","extension","numberType","isValidNumber","validationError"],[true,[20,["value"]],[20,["selectedCountryData"]],[20,["number"]],[20,["extension"]],[20,["numberType"]],[20,["isValidNumber"]],[20,["validationError"]]]]],false],[0,"\\n\\n            "],[6,"dl"],[7],[0,"\\n              "],[6,"dt"],[7],[0,"{{value}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["value"]],[20,["value"]],"<br>"],null],true],[8],[0,"\\n              "],[6,"dt"],[7],[0,"{{selectedCountryData.name}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["selectedCountryData"]],[20,["selectedCountryData","name"]],"<br>"],null],true],[8],[0,"\\n              "],[6,"dt"],[7],[0,"{{selectedCountryData.iso2}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["selectedCountryData"]],[20,["selectedCountryData","iso2"]],"<br>"],null],true],[8],[0,"\\n              "],[6,"dt"],[7],[0,"{{selectedCountryData.dialCode}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["selectedCountryData"]],[20,["selectedCountryData","dialCode"]],"<br>"],null],true],[8],[0,"\\n              "],[6,"dt"],[7],[0,"{{number}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["number"]],[20,["number"]],"<br>"],null],true],[8],[0,"\\n              "],[6,"dt"],[7],[0,"{{extension}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["extension"]],[20,["extension"]],"<br>"],null],true],[8],[0,"\\n              "],[6,"dt"],[7],[0,"{{isValidNumber}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["isValidNumber"]],"true","false"],null],true],[8],[0,"\\n              "],[6,"dt"],[7],[0,"{{validationError}}:"],[8],[0,"\\n              "],[6,"dd"],[7],[1,[25,"if",[[20,["validationError"]],[20,["validationError"]],"<br>"],null],true],[8],[0,"\\n            "],[8],[0,"\\n          "],[8],[0,"\\n\\n        "],[8],[0,"\\n\\n      "],[8],[0,"\\n\\n      "],[6,"section"],[9,"id","lookup-users-country"],[7],[0,"\\n        "],[6,"h1"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Lookup User\'s Country"],[8],[8],[0,"\\n        "],[6,"hr"],[7],[8],[0,"\\n\\n        "],[6,"p"],[7],[4,"code-inline",null,null,{"statements":[[0,"intl-tel-input"]],"parameters":[]},null],[0," provides a convenient way to look up the user\'s country based on their IP addresses. This example uses "],[6,"a"],[9,"href","http://ipinfo.io/"],[9,"target","_blank"],[7],[0,"ipinfo.io"],[8],[0," for demonstration."],[8],[0,"\\n\\n        "],[6,"div"],[9,"class","row sample"],[7],[0,"\\n\\n          "],[6,"div"],[9,"class","col-code"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Code"],[8],[8],[0,"\\n            "],[4,"code-block",null,[["language"],["javascript"]],{"statements":[[0,"// controller\\n...\\ngeoIpLookupFunc: function(callback) {\\n  $.getJSON(\'http://ipinfo.io/\')\\n   .always(function(resp) {\\n     if (!resp || !resp.country_code) {\\n       callback(\'\');\\n     }\\n\\n     callback(resp.country_code);\\n   });\\n}\\n..."]],"parameters":[]},null],[0,"\\n            "],[4,"code-block",null,[["language"],["handlebars"]],{"statements":[[0,"{{intl-tel-input\\n  initialCountry=\\"auto\\"\\n  geoIpLookup=geoIpLookupFunc}}"]],"parameters":[]},null],[0,"\\n          "],[8],[0,"\\n\\n          "],[6,"div"],[9,"class","col-result"],[7],[0,"\\n            "],[6,"h2"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Result"],[8],[8],[0,"\\n            "],[1,[25,"intl-tel-input",null,[["initialCountry","geoIpLookup"],["auto",[20,["geoIpLookupFunc"]]]]],false],[0,"\\n          "],[8],[0,"\\n\\n        "],[8],[0,"\\n\\n      "],[8],[0,"\\n\\n      "],[6,"section"],[9,"id","credits"],[7],[0,"\\n        "],[6,"h1"],[7],[6,"span"],[9,"class","flow-text"],[7],[0,"Credits"],[8],[8],[0,"\\n        "],[6,"hr"],[7],[8],[0,"\\n        "],[6,"p"],[7],[0,"This is a wrapper library. It simply wraps the API of the "],[6,"a"],[9,"href","http://jackocnr.com/intl-tel-input.html"],[9,"target","_blank"],[7],[0,"original jQuery plugin"],[8],[0," created by "],[6,"a"],[9,"href","http://jackocnr.com/"],[9,"target","_blank"],[7],[0,"Jack O\'Connor"],[8],[0," into an "],[6,"a"],[9,"href","http://emberjs.com/"],[9,"target","_blank"],[7],[0,"Ember.js"],[8],[0," component."],[8],[0,"\\n        "],[6,"p"],[7],[0,"The original jQuery plugin also depends on several other open-source libraries:"],[8],[0,"\\n        "],[6,"ul"],[9,"class","list"],[7],[0,"\\n          "],[6,"li"],[7],[0,"Flag images from "],[6,"a"],[9,"href","https://github.com/behdad/region-flags"],[9,"target","_blank"],[7],[0,"region-flags"],[8],[8],[0,"\\n          "],[6,"li"],[7],[0,"Original country data from mledoze\'s "],[6,"a"],[9,"href","https://github.com/mledoze/countries"],[9,"target","_blank"],[7],[0,"World countries in JSON, CSV and XML"],[8],[8],[0,"\\n          "],[6,"li"],[7],[0,"Formatting/validation/example number code from Google\'s "],[6,"a"],[9,"href","https://github.com/googlei18n/libphonenumber"],[9,"target","_blank"],[7],[0,"libphonenumber"],[8],[8],[0,"\\n          "],[6,"li"],[7],[0,"Lookup user\'s country using "],[6,"a"],[9,"href","http://ipinfo.io/"],[9,"target","_blank"],[7],[0,"ipinfo.io"],[8],[8],[0,"\\n        "],[8],[0,"\\n        "],[6,"p"],[7],[6,"s"],[7],[0,"This demo page uses "],[6,"a"],[9,"href","http://www.telize.com/"],[9,"target","_blank"],[7],[0,"Telize"],[8],[0," for a fast, SSL-supported, and FREE Geo IP service."],[8],[8],[0,"\\n        "],[6,"p"],[7],[6,"a"],[9,"href","http://www.cambus.net/adventures-in-running-a-free-public-api/"],[9,"target","_blank"],[7],[0,"Telize no longer provides free services due to heavy abuse"],[8],[0,". This demo page is now using "],[6,"a"],[9,"href","http://ipinfo.io"],[9,"target","_blank"],[7],[0,"ipinfo.io"],[8],[0," instead."],[8],[0,"\\n        "],[6,"p"],[7],[0,"The layout and color theme of this very documentation page comes from Twitter\'s "],[6,"a"],[9,"href","http://getbootstrap.com/"],[9,"target","_blank"],[7],[0,"Bootstrap"],[8],[0," and "],[6,"a"],[9,"href","http://emberjs.com/"],[9,"target","_blank"],[7],[0,"Ember.js"],[8],[0,", respectively."],[8],[0,"\\n      "],[8],[0,"\\n\\n    "],[8],[0,"\\n\\n  "],[8],[0,"\\n\\n"],[8]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})