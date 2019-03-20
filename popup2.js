let changeColor2 = document.getElementById('changeColor2');

  chrome.storage.sync.get('color', function(data) {
  	var e=changeColor2.style.backgroundColor;
    changeColor2.setAttribute('value', e);
  });
  changeColor2.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };