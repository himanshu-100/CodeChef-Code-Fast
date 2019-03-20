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
  };