var i = 0;

function incrementMoney() {
  self.addEventListener('message', function(e) {
    i = i - cost
    }, false);
  i = i + 1;
  postMessage(i);
  setTimeout("incrementMoney()",1000);
}

incrementMoney();
