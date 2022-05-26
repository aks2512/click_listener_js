'use-strict';

(function (doc, win) {

  var tabs = doc.querySelectorAll('[data-tab-group][data-tab-listener]');
  var toggleElements = doc.querySelectorAll('[data-toggle-listener]');
  var addElements = doc.querySelectorAll('[data-add-listener]');
  var removeElements = doc.querySelectorAll('[data-remove-listener]');
  
  if(tabs) {
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        
        activeTabs = doc.querySelectorAll('[data-tab-group="'+tab.getAttribute('data-tab-group')+'"].active');
        if(activeTabs)
          activeTabs.forEach(function(tabActive) {
            tabActive.classList.remove('active');
          })

        tab.classList.add('active');
        var tabContent = doc.querySelector('[data-tab-group="'+tab.getAttribute('data-tab-group')+'"][data-tab-target="'+tab.getAttribute('data-tab-listener')+'"]')
        if(tabContent) 
          tabContent.classList.add('active');
      })
      
    })
  }
  
  if(toggleElements) {
    toggleElements.forEach(function(element) {
      
      element.addEventListener('click', function() {
        var targetElements = doc.querySelectorAll('[data-toggle-target="'+element.getAttribute('data-toggle-listener')+'"]');
        if(targetElements)
          targetElements.forEach(function(targetElement) {
            targetElement.classList.toggle('active');
          });
      });
      
    })
  }
  
  if(addElements) {
    addElements.forEach(function(element) {
      
      element.addEventListener('click', function() {
        var targetElements = doc.querySelectorAll('[data-add-target="'+element.getAttribute('data-add-listener')+'"]');
        if(targetElements)
          targetElements.forEach(function(targetElement) {
            targetElement.classList.add('active');
          });
      });
      
    })
  }
  
  if(removeElements) {
    removeElements.forEach(function(element) {
      
      element.addEventListener('click', function() {
        var targetElements = doc.querySelectorAll('[data-remove-target="'+element.getAttribute('data-remove-listener')+'"]');
        if(targetElements)
          targetElements.forEach(function(targetElement) {
            targetElement.classList.remove('active');
          });
      });
      
    })
  }



})(document, window)
