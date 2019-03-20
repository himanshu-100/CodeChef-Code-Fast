let changeColor = document.getElementById('changeColor');
  chrome.storage.sync.get('color', function(data) {
  	var e=changeColor.style.backgroundColor;
    changeColor.setAttribute('value', e);
  });
  changeColor.onclick = function(element) {
  	let color = element.target.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    chrome.tabs.executeScript(
	        tabs[0].id,
	        {code: 'document.body.style.backgroundColor = "' + color + '";'});
	});
	chrome.storage.sync.set({color: color}, function() {
    	console.log("The color is "+color+".");
  	});
  };
  changeColor.onload = function(element) {

  	chrome.storage.sync.get('color', function(data) {
  	var color=data.color;
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    chrome.tabs.executeScript(
	        tabs[0].id,
	        {code: 'document.body.style.backgroundColor = "' + color + '";'});
	});
  	});
  };