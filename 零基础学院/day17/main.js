var contactMeBtn = document.getElementById("contactMe");
var showMyHabitBtn = document.getElementById("showMyHabit");
var sayHiNode = document.getElementById("sayHi");
var curTime = new Date();
var curHour = curTime.getHours();

var sayHi = function(node, fn) {
    var text = fn();
    node.innerHTML = text;
}

var goodMorning = function() {
    return "Good Morning";
}

var goodAfternoon = function() {
    return "Good Afternoon";
}

var goodEvening = function() {
    return "Good Evening";
}

switch (true) {
    case (curHour < 12 && curHour > 0):
        sayHi(sayHiNode, goodMorning);
        break;
    case (curHour >= 12 && curHour < 18):
        sayHi(sayHiNode, goodAfternoon);
        break;
    case (curHour >= 18 && curHour <= 23):
        sayHi(sayHiNode, goodEvening);
        break;
}

contactMeBtn.onclick = function() {
    console.log("weixin: weixinmokan");
}

showMyHabitBtn.onclick = function() {
    console.log("我爱喝可乐！");
}