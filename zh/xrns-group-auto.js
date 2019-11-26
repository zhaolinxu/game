// ==UserScript==
// @name         仙人南山自动战斗
// @namespace    https://blog.wingsky.net/
// @version      0.1
// @description  仙人南山自动战斗
// @author       Kite
// @match        http://120.77.202.34:3344/
// @grant        none
// ==/UserScript==

(function() {
    if(!window.localStorage){
        alert('不支持这个浏览器，请换成Chrome或者Safari。');
        return null;
    }
    var storage = window.localStorage;
    var time = storage.getItem("time");
    if(time == null){
        time = 8000;
        storage.setItem("time", time);
    }

    var start = document.createElement("P");
    start.appendChild(document.createTextNode("开始战斗"));
    start.style.lineheight="50px";
    start.style.color="white";
    start.style.fontSize="30px";
    start.style.padding="10px 20px";
    start.style.background="green";
    start.style.position="fixed";
    start.style.right="30px";
    start.style.top="100px";
    start.style.zIndex="10000";

    var stop = document.createElement("P");
    stop.appendChild(document.createTextNode("停止战斗"));
    stop.style.lineheight="50px";
    stop.style.color="white";
    stop.style.fontSize="30px";
    stop.style.padding="10px 20px";
    stop.style.background="black";
    stop.style.position="fixed";
    stop.style.right="30px";
    stop.style.top="200px";
    stop.style.zIndex="10000";

    var notice = document.createElement("DIV");
    //notice.style.color="white";
    notice.style.background="darkseagreen";
    notice.style.fontSize="20px";
    notice.style.padding="10px 20px";
    notice.style.position="fixed";
    notice.style.right="30px";
    notice.style.top="300px";
    notice.style.lineheight="30px";
    notice.style.zIndex = "10000";
    notice.style.width = "300px";

    var notice_0 = document.createElement("P");
    notice_0.appendChild(document.createTextNode("Ctrl+Q隐藏/显示"));
    var notice_1 = document.createElement("P");
    notice_1.appendChild(document.createTextNode("当前状态：停止中" ));
    var notice_2 = document.createElement("P");
    notice_2.appendChild(document.createTextNode("当前时间间隔：" + time + "毫秒"));
    var notice_3 = document.createElement("P");
    notice_3.appendChild(document.createTextNode("修改时间间隔"));

    var input1 = document.createElement("input");
    input1.setAttribute('type', 'text');//输入框的类型
    input1.setAttribute('name', "man");//输入框的名字
    input1.setAttribute('id', "mans");//输入框的id
    var button1 = document.createElement("button");
    button1.innerHTML = '修改';

    notice.appendChild(notice_0);
    notice.appendChild(notice_1);
    notice.appendChild(notice_2);
    notice.appendChild(notice_3);
    notice.appendChild(input1);
    notice.appendChild(button1);


    var container = document.querySelector('body');
    container.appendChild(start);
    container.appendChild(stop);
    container.appendChild(notice);

    //绑定点击事件
    button1.onclick = function () {
        time = input1.value;
        storage.setItem("time", time);
        notice_2.innerText = "当前时间间隔：" + time + "毫秒";
    };

    var flag = true;

    document.onkeydown = function() {

        var oEvent = window.event;
        if (oEvent.keyCode == 81 && oEvent.ctrlKey) {
             console.log("你按下了Ctrl+Q");
            if(flag == true){
                start.style.display="none";
                stop.style.display="none";
                notice.style.display="none";
                flag = false;
            }else{
                start.style.display="";
                stop.style.display="";
                notice.style.display="";
                flag = true;
            }
        }else if (oEvent.keyCode == 84 && oEvent.altKey) {
            console.log("你按下了ALT+T");
        }
    }

    var auto = null;
    start.onclick = function() {
        notice_1.innerText = "当前状态：战斗中";
        auto = setInterval(function(){
            startPerilTeamFunc()
        },time)

    }

    stop.onclick = function() {
       notice_1.innerText = "当前状态：停止中";
        clearInterval(auto)
    }

})();