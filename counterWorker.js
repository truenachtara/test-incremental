var i = 0;

function incrementMoney() {
  this.onmessage = function(event) {
     i = i - event.data
  }
  i = i + 1;
  postMessage(i);
  setTimeout("incrementMoney()",1000);
}

incrementMoney();
