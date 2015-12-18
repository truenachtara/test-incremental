var i = 0;

self.addEventListener('message', function(e) {
  i = i - cost
}, false);

function incrementMoney() {
  i = i + 1;
  postMessage(i);
  setTimeout("incrementMoney()",1000);
}

incrementMoney();
