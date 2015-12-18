var i = 0;

function incrementMoney() {
  i = i + 1;
  postMessage(i);
  setTimeout("incrementMoney()",1000);
}

incrementMoney();
