let changeColor1 = document.getElementById('changeColor1');

  chrome.storage.sync.get('color', function(data) {
  	var e=changeColor1.style.backgroundColor;
    changeColor1.setAttribute('value', e);
  });
  changeColor1.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };