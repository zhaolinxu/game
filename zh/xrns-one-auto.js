// ==UserScript==
// @name         仙人南山
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://120.77.202.34:3344/
// @grant        none
// ==/UserScript==

var cookie = '';

var repair_num = null;
var next_level_num = null;
var idIndex = 0;
var id = '';

(function () {
    //getCombatBeMonster()
    makeGoods()
})();

function upgradeUserLevel() {
    fetch('http://120.77.202.34:3344/api/upgradeUserLevel', {
        method: "POST",
        headers: {
            'Cookie': cookie,
        },
    }).then(function (response) {
        return response.json()
    }).then(function () {
        console.log('升级成功');
    })
}

function getCombatBeMonster() {
    fetch('http://120.77.202.34:3344/api/getCombatBeMonster', {
        method: "GET",
        headers: {
            'Cookie': cookie,
        },
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        var src = '';
        for(let i = 0; i < res.data.combatList.length; i++){
            src += res.data.combatList[i].name + "=" + i + ";";
        }
        idIndex = Number(prompt("请输入副本编号 " + src, ""));
        id = res.data.combatList[idIndex]._id
        autoStartPeril();
    })
}

function getUserInfo() {
    fetch('http://120.77.202.34:3344/api/getUserInfo', {
        method: "GET",
        headers: {
            'Cookie': cookie,
        },
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        repair_num = res.data.user.repair_num;
        next_level_num = res.data.user.next_level_num;
        //if (repair_num > next_level_num) {
        //    upgradeUserLevel();
        //}
        console.log(`修为点${repair_num}`);
        console.log(`当前体力${res.data.user.health_num}`);
        if(res.data.user.health_num<400){
            byGoodsToMyUser();
            useGoodsToUser();
        }
    })
}

function startPeril() {
    fetch("http://120.77.202.34:3344/api/startPeril", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            'Cookie': cookie,
        },
        body: `cbmid=${id}`
    }).then(function (response) {
        return response.json()
    }).then(function (res) {
        if(res.code === 304){
            console.log(res.msg + "10秒后继续");
            setTimeout(autoStartPeril, 10000);
        }else if(res.code === 200){
            console.log("战斗结束，下一次战斗时间:" + res.data.end_combatsid_at);
            var s = '';
            for(let i = 0; i < res.data.users[0].goods.length; i++){
                s += res.data.users[0].goods[i].name + ";";
            }
            console.log(res.data.users[0].goods);
            console.log("战利品：" + s);
            setTimeout(autoStartPeril, new Date(res.data.end_combatsid_at) - new Date() + 1000);
        }else{
            console.log("不知名错误：" + res.msg + "，根据提示刷新试试");
        }
    })
}

function autoStartPeril() {
    startPeril();
    getUserInfo();
}

// 使用红药水
function useGoodsToUser() {
    fetch("http://120.77.202.34:3344/api/useGoodsToUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            'Cookie': cookie,
        },
        body: 'ugid=5dc1158e5ac14a3ab1a0745d'
    }).then(function (response) {
    }).then(function () {
        console.log('体力加100点')
    })
}

// 买红药水
function byGoodsToMyUser() {
    fetch("http://120.77.202.34:3344/api/byGoodsToMyUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            'Cookie': cookie,
        },
        body: 'gid=5dbfcc8cd9b8c0272471e2bf'
    }).then(function (response) {
    }).then(function () {
    })
}

function makeGoods() {

        fetch("http://120.77.202.34:3344/api/makeGoods", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                'Cookie': cookie,
            },
            body: 'sell_json=[{"id":"5dd4f047ee3174147535ec6e","count":"1","name":"天外陨石-木","style":"text-shadow:1px 1px px salmon;color:salmon;"},{"id":"5dd3fb2b5890a00b610c94cf","count":"1","name":"天外陨石-金","style":"text-shadow:1px 1px px salmon;color:salmon;"},{"id":"5dd28f2bf81f0f78f1ebfb04","count":"1","name":"天外陨石-土","style":"text-shadow:1px 1px px salmon;color:salmon;"},{"id":"5dd250e4a4db8277c3b0615c","count":"1","name":"天外陨石-水","style":"text-shadow:1px 1px px salmon;color:salmon;"},{"id":"5dd24bd4a4db8277c3b05c4b","count":"1","name":"天外陨石-火","style":"text-shadow:1px 1px px salmon;color:salmon;"}]&sell_type=make'
        }).then(function (response) {
        }).then(function (res) {
           console.log(res)
        })
}

//setInterval(() => {
//  useGoodsToUser()
//}, 75000);
//useGoodsToUser()

// 卖东西
//function sellGoods() {
//    fetch("http://120.77.202.34:3344/api/sellGoods", {
//        method: "POST",
//        headers: {
//            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//            'Cookie': cookie,
//        },
//        body: `sell_json=[{"id":"5dc0dba8656436341f045964","count":"200"}]&sell_type=zhd`
//    }).then(function (response) {
//    }).then(function () {
//    })
//}
//sellGoods()

//for (let i = 0; i < 100; i++) {
//    setTimeout(() => {
//        byGoodsToMyUser()
//    }, 1000 * i);
//}