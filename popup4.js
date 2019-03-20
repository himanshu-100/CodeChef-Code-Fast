let changeColor4 = document.getElementById('changeColor4');
var times=0;
  chrome.storage.sync.get('color', function(data) {
  	var e=changeColor4.style.backgroundColor;
    changeColor4.setAttribute('value', e);
  });
  changeColor4.onclick = function(element) {
  var win = window.open('https://www.onlinegdb.com/online_c++_compiler', '_blank');
  if (win) {
    win.focus();
  } 
  else {
    alert('Please allow popups for this website');
  }
  };