/*

 @name    : 锅巴汉化 - 游戏自动化插件
 @author  : 好阳光的小锅巴
 @version : V0.1.1 - 2019-07-25
 @website : http://www.g8hh.com

*/

! function () {
    var content = '';
    content += '<!-- 脚本动态内容 开始 -->';
    content += '<style>.main-im{position:fixed;right:10px;bottom:50px;line-height:normal;z-index:9999}.main-im .qq-a{display:block;width:106px;height:116px;font-size:14px;color:#0484cd !important;text-align:center;position:relative;}.main-im .qq-a span{bottom:5px;position:absolute;width:90px;left:10px;}.main-im .qq-hover-c{width:70px;height:70px;border-radius:35px;position:absolute;left:18px;top:10px;overflow:hidden;z-index:9;}.main-im .qq-container{z-index:99;position:absolute;width:109px;height:118px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:1px solid #dddddd;background-image:url("//likexia.gitee.io/game/images/kf/qq-icon-bg.png");background-position:center 8px;background-repeat:no-repeat;}.main-im .img-qq{max-width:60px;display:block;position:absolute;left:6px;top:3px;-webkit-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}.main-im .im-qq:hover .img-qq{max-width:70px;left:1px;top:8px;position:absolute;color:#ff0000 !important;}.main-im .im_main{background-color:#F9FAFB !important;border:1px solid #dddddd;border-radius:10px;background-color:#F9FAFB !important;display:none;z-index:999;}.main-im .im_main .im-tel{color:#000000 !important;text-align:center;width:109px;height:105px;border-bottom:1px solid #dddddd;}.main-im .im_main .im-tel div{font-weight:bold;font-size:12px;margin-top:6px;}.main-im .im_main .im-tel .tel-num{font-family:Arial;font-weight:bold;}.main-im .im_main .im-tel .tel-num a{color:#e66d15 !important;}.main-im .im_main .im-tel:hover{background-color:#fafafa !important;}.main-im .im_main .weixing-container{width:55px;height:47px;border-right:1px solid #dddddd;background-color:#f5f5f5 !important;border-bottom-left-radius:10px;background-image:url("//likexia.gitee.io/game/images/kf/weixing-icon.png");background-position:center;background-repeat:no-repeat;float:left;}.main-im .im_main .weixing-show{width:400px;height:400px;background-color:#ffffff;border-radius:10px;border:1px solid #dddddd;position:absolute;left:-410px;top:-354px;overflow-y:auto;}.main-im .im_main .weixing-show .weixing-sanjiao{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #ffffff;border-width:6px;left:112px;top:134px;position:absolute;z-index:2;}.main-im .im_main .weixing-show .weixing-sanjiao-big{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #dddddd;border-width:8px;left:112px;top:132px;position:absolute;}.main-im .im_main .weixing-show .weixing-ma{width:104px;height:103px;padding-left:5px;padding-top:5px;}.main-im .im_main .weixing-show .weixing-txt{position:absolute;top:110px;left:7px;width:100px;margin:0 auto;text-align:center;color:#000 !important;}.main-im .im_main .weixing-show .weixing-txt a,.main-im .im_main .weixing-show .weixing-txt a:hover,.main-im .im_main .im-tel .tel-num a:hover{color:#ff0000 !important;}.main-im .im_main .go-top{width:50px;height:47px;background-color:#f5f5f5;border-bottom-right-radius:10px;background-image:url("//likexia.gitee.io/game/images/kf/totop-icon.png");float:right;background-position:center center;background-repeat:no-repeat;}.main-im .im_main .go-top a{display:block;width:52px;height:47px;}.main-im .close-im{position:absolute;right:10px;top:-12px;z-index:100;width:24px;height:24px;}.main-im .close-im a{display:block;width:24px;height:24px;background-image:url("//likexia.gitee.io/game/images/kf/close_im.png") !important;text-decoration:none;background-position:left top;background-repeat:no-repeat;}.main-im .close-im a:hover{text-decoration:none;}.main-im .open-im{cursor:pointer;margin-left:68px;width:30px;height:30px;background-image:url("//likexia.gitee.io/game/images/kf/open_im.png");background-repeat:no-repeat;background-position:left top;cursor:pointer;background-size:100%;z-index:100;position:fixed;right:10px;bottom:320px;}@media screen and (max-width:480px){.main-im{display:none;}}.JB-form{padding:10px;}.JB-form *{margin:5px;font-size:13px;}.JB-form .tit{font-weight:bold;}.JB-form input{width:100px;height:30px;line-height:30px;}.JB-form button{width:50px;height:30px;}</style>';
    content += '<div class="main-im">';
    content += '<div id="open_im" class="open-im">&nbsp;</div>  ';
    content += '<div class="im_main" id="im_main">';
    content += '<div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>';
    content += '<a href="http://shang.qq.com/wpa/qunwpa?idkey=d10d784492d5e73cca25ff48f4763bdc14f698ffdbf42adbb0e9304495cb0387" target="_blank" class="im-qq qq-a" title="点击加入 - GitHub游戏交流群:627141737">';
    content += '<div class="qq-container"></div>';
    content += '<div class="qq-hover-c"><img class="img-qq" src="//likexia.gitee.io/game/images/kf/qq.png"></div>';
    content += '<span>点击加群</span>';
    content += '</a>';
    content += '<div class="im-tel">';
    content += '<div>QQ群号:</div>';
    content += '<div class="tel-num">627141737</div>';
    content += '<div>更多同类游戏:</div>';
    content += '<div class="tel-num"><a href="http://www.gityx.com" target="_blank" title="我们有域名啦~">Git游戏</a><a href="http://bbs.gityx.com/" target="_blank" style="margin-left:5px;" title="点击查看游戏攻略">论坛</a><a href="http://likexia.gitee.io/game/" target="_blank" style="margin-left:5px;" title="之前首页继续保留">旧版</a></div>';
    content += '</div>';
    content += '<div class="im-footer" style="position:relative">';
    content += '<div class="weixing-container">';
    content += '<div class="weixing-show">';
    //吃食物-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">吃食物</div>';
    content += '生命值低于<select id="minHP">';
    content += '<option value="10">10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" selected>30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时吃';
    content += '<select id="Food1">';
    content += '<option value="kYB8MzmpM7gWAvGtA" selected>胡萝卜-回350血-持续10秒</option>';
    content += '<option value="ps6cmbsDZFa9oaTHn" >苹果-回185血-持续30秒</option>';
    content += '<option value="iAebBXtBBHjjNp9ZN" >菠萝-回550血-持续80秒</option>';
    content += '</select>';
    content += '<button id="startEatFood" type="primary" >启动</button>';
    content += '<button id="stopEatFood" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '能量值低于<select id="minEnergy">';
    content += '<option value="5">5</option>';
    content += '<option value="10">10</option>';
    content += '<option value="15">15</option>';
    content += '<option value="20">20</option>';
    content += '<option value="25">25</option>';
    content += '<option value="30" selected>30</option>';
    content += '<option value="35">35</option>';
    content += '</select>时吃';
    content += '<select id="Food2">';
    content += '<option value="Tft5mJhyyfcYZshjS">柠檬-回9能量-持续300秒</option>';
    content += '</select>';
    content += '<button id="startEatEnergyFood" type="primary" >启动</button>';
    content += '<button id="stopEatEnergyFood" type="danger" disabled>停止</button>';
    content += '</div>';
    //吃食物-结束
    //单人战斗-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">单人战斗（Solo）</div>';
    content += '生命值低于<select id="fightMinHP">';
    content += '<option value="10">10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" selected>30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时停止战斗';
    content += '<br/>';
    content += '能量值低于<select id="fightMinEnergy">';
    content += '<option value="5">5</option>';
    content += '<option value="10" selected>10</option>';
    content += '<option value="15">15</option>';
    content += '<option value="20">20</option>';
    content += '<option value="25">25</option>';
    content += '<option value="30">30</option>';
    content += '<option value="35">35</option>';
    content += '</select>时停止战斗';
    content += '<br/>';
    content += '刷固定楼层';
    content += '<button id="startSolo" type="primary" >启动</button>';
    content += '<button id="stopSolo" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '自动爬楼层';
    content += '<button id="startSoloUp" type="primary" >启动</button>';
    content += '<button id="stopSoloUp" type="danger" disabled>停止</button>';
    content += '</div>';
    //单人战斗-结束

    content += '<div class="tit"></div>';
    content += '</div>';
    content += '</div>';
    content += '<div class="go-top"><a href="javascript:;" title="返回顶部"></a> </div>';
    content += '<div style="clear:both"></div>';
    content += '</div>';
    content += '</div>';
    content += '</div>';
    content += '<!-- 脚本动态内容 结束 -->';

    //渲染脚本
    $("body").append(content);

    //关闭小球
    $('#close_im').bind('click', function () {
        $('#main-im').css("height", "0");
        $('#im_main').hide();
        $('#open_im').show();
    });

    //展开小球
    $('#open_im').bind('click', function (e) {
        $('#main-im').css("height", "272");
        $('#im_main').show();
        $(this).hide();
    });

    //页面回到顶部
    $('.go-top').bind('click', function () {
        $(window).scrollTop(0);
    });

    //单人Solo-开始战斗
    //固定层、自动放技能
    var autoSoloFight;
    $("#startSolo").click(function () {
        var fightUpMinHP = $('#fightMinHP').val();
        var fightUpMinEnergy = $('#fightMinEnergy').val();
        autoSoloFight = setInterval(soloFight(fightUpMinHP, fightUpMinEnergy), 5000);
        $(this).attr("disabled", true);
        $("#stopSolo").attr("disabled", false);
        $("#startSoloUp").attr("disabled", true);
        $("#stopSoloUp").attr("disabled", true);
    });

    //单人Solo-停止战斗
    $("#stopSolo").click(function () {
        clearInterval(soloFight);
        $(this).attr("disabled", true);
        $("#startSolo").attr("disabled", false);
        $("#startSoloUp").attr("disabled", false);
        $("#stopSoloUp").attr("disabled", true);
    });
    
    
    //单人Solo-开始战斗
    //自动切换最高层、自动放技能
    var autoSoloUpFight;
    $("#startSoloUp").click(function () {
        var fightMinHP = $('#fightMinHP').val();
        var fightMinEnergy = $('#fightMinEnergy').val();
        autoSoloUpFight = setInterval(soloUpFight(fightMinHP, fightMinEnergy), 5000);
        $(this).attr("disabled", true);
        $("#stopSoloUp").attr("disabled", false);
        $("#startSolo").attr("disabled", true);
        $("#stopSolo").attr("disabled", true);
    });

    //单人Solo-停止战斗
    $("#stopSoloUp").click(function () {
        clearInterval(autoSoloUpFight);
        $(this).attr("disabled", true);
        $("#startSoloUp").attr("disabled", false);
        $("#startSolo").attr("disabled", false);
        $("#stopSolo").attr("disabled", true);
    });


    //刷单人Solo--自动打怪
    function soloUpFight(minHp, minEnergy) {
        //能量最小值
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //默认自动放全部技能
            //$('.ability-icon-container').trigger("click");
            //想指定某个技能，把下面对应技能前面的斜杠删掉，然后把上面那句前面加斜杠
            //$('.ability-icon-container:nth-child(1)').trigger("click");
            $('.ability-icon-container:nth-child(2)').trigger("click");
            $('.ability-icon-container:nth-child(3)').trigger("click");
            $('.ability-icon-container:nth-child(4)').trigger("click");
            $('.ability-icon-container:nth-child(5)').trigger("click");
            $('.ability-icon-container:nth-child(6)').trigger("click");
            //未战斗完毕，则停留在当前界面
            return
        } else {
            //当前层没刷完，则继续刷当前层
            var energy = parseInt($('.energy-bar .health-bar').text().substring(1))
            if (energy <= minEnergy) {
                //能量小于指定值，则不执行战斗
                console.log('能量值过低，休息一下，吃个柠檬吧~')
                return
            } else {
                //能量充足，继续下一次战斗
                //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                if ($('.health-bar .progress-bar').width() > minHp) {
                    $(".battle-btn").trigger("click");
                } else {
                    //生命值小于，则不执行战斗
                    console.log('生命值过低，暂停战斗，回回血吧~')
                    return
                }
            }
        }
    }

    //刷单人Solo--自动打怪
    function soloFight(minHp, minEnergy) {
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //默认自动放全部技能
            //$('.ability-icon-container').trigger("click");
            //第一个技能是指定目标，咱不需要启用
            //不想施放某个技能，在下面对应技能前面加上斜杠//
            //$('.ability-icon-container:nth-child(1)').trigger("click");
            $('.ability-icon-container:nth-child(2)').trigger("click");
            $('.ability-icon-container:nth-child(3)').trigger("click");
            $('.ability-icon-container:nth-child(4)').trigger("click");
            $('.ability-icon-container:nth-child(5)').trigger("click");
            $('.ability-icon-container:nth-child(6)').trigger("click");
            return
        } else {
            //当前层刷完时，自动切换下一层
            if ($('.energyUse-dropdown').length > 0) {
                //刷完则自动切换新的一层
                $('.btn-secondary+.dropdown-menu a:first-child').trigger("click");
                console.log('本层已清理完毕，继续下一层吧~')
                var energy1 = parseInt($('.energy-bar .health-bar').text().substring(1))
                if (energy1 <= minEnergy) {
                    //能量小于指定值，则不执行战斗
                    console.log('能量值过低，休息一下，吃个柠檬吧~')
                    return
                } else {
                    //能量充足，继续下一次战斗
                    //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                    if ($('.health-bar .progress-bar').width() > minHp) {
                        $(".battle-btn").trigger("click");
                    } else {
                        //生命值小于，则不执行战斗
                        console.log('生命值过低，暂停战斗，回回血吧~')
                        return
                    }

                }

            } else {
                //当前层没刷完，则继续刷当前层
                //继续下一次战斗
                var energy2 = parseInt($('.energy-bar .health-bar').text().substring(1))
                if (energy2 <= minEnergy) {
                    //能量小于指定值，则不执行战斗
                    console.log('能量值过低，休息一下，吃个柠檬吧~')
                    return
                } else {
                    //能量充足，继续下一次战斗
                    //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                    if ($('.health-bar .progress-bar').width() > minHp) {
                        $(".battle-btn").trigger("click");
                    } else {
                        //生命值小于，则不执行战斗
                        console.log('生命值过低，暂停战斗，回回血吧~')
                        return
                    }
                }
            }
        }
    }


    var autoEatFood;
    //启动吃食物-回血
    $("#startEatFood").click(function () {
        var minHP = $("#minHP").val();
        var hpFood = $("#Food1").val();
        autoEatFood = setInterval(eatFood(hpFood, minHP), 3000);
        $(this).attr("disabled", true);
        $("#stopEatFood").attr("disabled", false);
    });

    //停止吃食物-回血
    $("#stopEatFood").click(function () {
        clearInterval(autoEatFood);
        $(this).attr("disabled", true);
        $("#startEatFood").attr("disabled", false);
    });

    var autoEnergy;
    //启动吃食物-回能量
    $("#startEatEnergyFood").click(function () {
        var minEnergy = $("#minEnergy").val();
        var energyFood = $("#Food2").val();
        autoEnergy = setInterval(eatLemon(energyFood, minEnergy), 5000);
        $(this).attr("disabled", true);
        $("#stopEatEnergyFood").attr("disabled", false);
    });

    //停止吃食物-回能量
    $("#stopEatEnergyFood").click(function () {
        clearInterval(autoEnergy);
        $(this).attr("disabled", true);
        $("#startEatEnergyFood").attr("disabled", false);
    });

    //自动吃食物恢复能量
    function eatLemon(item, energy) {
        //能量低于30就开始吃柠檬，柠檬冷却时间300秒        
        var num = parseInt($('.energy-bar .health-bar').text().substring(1))
        if (num < energy) {
            //获取食物对象
            //柠檬-300秒内回9能量
            var lemon = getElementByAttr('div', 'data-id', item);
            //判断是否正在吃柠檬，
            if ($('.battle-unit-container .justify-content-center img').length == 0) {
                //没吃柠檬，则点击柠檬
                lemon[0].click();
                console.log('没能量了，吃个柠檬~')
            } else {
                //正在吃柠檬，不执行操作
                return
            }
        }
    }

    //自动吃食物回血
    function eatFood(item, hp) {
        //获取食物对象
        //胡萝卜-10秒内回350血
        var eatItem = getElementByAttr('div', 'data-id', item);
        //生命低于指定百分比，就吃胡萝卜回血。默认是：80%
        if ($('.health-bar .progress-bar').width() < hp) {
            //生命值小于指定值，则吃胡萝卜回血
            //判断是否正在吃胡萝卜
            if ($('.battle-unit-container .justify-content-center img').length == 0) {
                //没吃胡萝卜，则点击胡萝卜
                eatItem[0].click();
                console.log('生命值低于设定值，吃个胡萝卜回个血~')
            } else {
                //正在吃胡萝卜，不执行操作
                return
            }
        }
    }


    //获取要吃的食物
    function getElementByAttr(tag, dataAttr, item) {
        var aElements = document.getElementsByTagName(tag);
        var aEle = [];
        for (var i = 0; i < aElements.length; i++) {
            var ele = aElements[i].getAttribute(dataAttr);
            if (ele == item) {
                aEle.push(aElements[i]);
            }
        }
        return aEle;
    }

    //吃胡萝卜

    //单人战斗

    //单人放技能


    console.log("加载自动化脚本");
}();
