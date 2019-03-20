let changeColor3 = document.getElementById('changeColor3');

  chrome.storage.sync.get('color', function(data) {
  	var e=changeColor3.style.backgroundColor;
    changeColor3.setAttribute('value', e);
  });
  changeColor3.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };