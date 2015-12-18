var money = 0;

function incrementMoney() {
    money = money + 1;
    postMessage(money);
    setTimeout("incrementMoney()",1000);
}

incrementMoney();
