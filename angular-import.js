angular.module('ngImport', [])
  .run(['$templateCache', function($templateCache){
    var tmplSelector = 'script[type="text/ng-template"], template';
    var linkSelector = 'link[rel=import]';
  
    function $$(elem, selector){
      return [].slice.call(elem.querySelectorAll(selector));  
    }
  
    var links = $$(document, linkSelector);
    var tmpls = $$(document, tmplSelector);
  
    var link, tmpl;
  
    while(links.length){
      link = links.shift();
      
      if(link.import){
        tmpls = tmpls.concat($$(link.import, tmplSelector));
        links = links.concat($$(link.import, linkSelector));
      }
    }
  
    while(tmpls.length){
      tmpl = tmpls.shift();
      $templateCache.put(tmpl.id, tmpl.innerHTML.trim());
    }
  }])
;
