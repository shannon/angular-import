angular.module('templateImport', [])
  .run(function($templateCache){
    var links = [].slice.call(document.querySelectorAll('link[rel=import]'));
    var link, template;
    var templates = [].slice.call(document.querySelectorAll('script[type="text/ng-template"], template'));
    
    while(links.length){
      link = links.shift();
      
      if(link.import){
        templates = templates.concat([].slice.call(link.import.querySelectorAll('script[type="text/ng-template"], template')));
        links.push.apply(links, link.import.querySelectorAll('link[rel=import]'));
      }
    }
  
    while(templates.length){
      template = templates.shift();
      $templateCache.put(template.id, template.innerHTML.trim());
    }
  })
;
