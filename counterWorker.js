var money = 0;

function incrementMoney() {
    money + 1 + buildingModifier = money;
    postMessage(money);
    setTimeout("incrementMoney()",1000)
}
