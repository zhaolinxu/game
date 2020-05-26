/*

 @name    : 锅巴汉化 - 游戏自动化插件
 @author  : 好阳光的小锅巴
 @version : V0.1.1 - 2019-07-25
 @website : http://www.g8hh.com

*/

! function () {
    var content = '';
    content += '<!-- 脚本动态内容 开始 -->';
    content += '<style>.main-im{position:fixed;right:10px;bottom:50px;line-height:normal;z-index:9999}.main-im .qq-a{display:block;width:106px;height:116px;font-size:14px;color:#0484cd !important;text-align:center;position:relative;}.main-im .qq-a span{bottom:5px;position:absolute;width:90px;left:10px;}.main-im .qq-hover-c{width:70px;height:70px;border-radius:35px;position:absolute;left:18px;top:10px;overflow:hidden;z-index:9;}.main-im .qq-container{z-index:99;position:absolute;width:109px;height:118px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:1px solid #dddddd;background-image:url("//likexia.gitee.io/game/images/kf/qq-icon-bg.png");background-position:center 8px;background-repeat:no-repeat;}.main-im .img-qq{max-width:60px;display:block;position:absolute;left:6px;top:3px;-webkit-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}.main-im .im-qq:hover .img-qq{max-width:70px;left:1px;top:8px;position:absolute;color:#ff0000 !important;}.main-im .im_main{background-color:#F9FAFB !important;border:1px solid #dddddd;border-radius:10px;background-color:#F9FAFB !important;display:none;z-index:999;}.main-im .im_main .im-tel{color:#000000 !important;text-align:center;width:109px;height:105px;border-bottom:1px solid #dddddd;}.main-im .im_main .im-tel div{font-weight:bold;font-size:12px;margin-top:6px;}.main-im .im_main .im-tel .tel-num{font-family:Arial;font-weight:bold;}.main-im .im_main .im-tel .tel-num a{color:#e66d15 !important;}.main-im .im_main .im-tel:hover{background-color:#fafafa !important;}.main-im .im_main .weixing-container{width:55px;height:47px;border-right:1px solid #dddddd;background-color:#f5f5f5 !important;border-bottom-left-radius:10px;background-image:url("//likexia.gitee.io/game/images/kf/weixing-icon.png");background-position:center;background-repeat:no-repeat;float:left;}.main-im .im_main .weixing-show{width:670px;height:400px;background-color:#ffffff;border-radius:10px;border:1px solid #dddddd;position:absolute;left:-680px;top:-354px;overflow-y:auto;}.main-im .im_main .weixing-show .weixing-sanjiao{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #ffffff;border-width:6px;left:112px;top:134px;position:absolute;z-index:2;}.main-im .im_main .weixing-show .weixing-sanjiao-big{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #dddddd;border-width:8px;left:112px;top:132px;position:absolute;}.main-im .im_main .weixing-show .weixing-ma{width:104px;height:103px;padding-left:5px;padding-top:5px;}.main-im .im_main .weixing-show .weixing-txt{position:absolute;top:110px;left:7px;width:100px;margin:0 auto;text-align:center;color:#000 !important;}.main-im .im_main .weixing-show .weixing-txt a,.main-im .im_main .weixing-show .weixing-txt a:hover,.main-im .im_main .im-tel .tel-num a:hover{color:#ff0000 !important;}.main-im .im_main .go-top{width:50px;height:47px;background-color:#f5f5f5;border-bottom-right-radius:10px;background-image:url("//likexia.gitee.io/game/images/kf/totop-icon.png");float:right;background-position:center center;background-repeat:no-repeat;}.main-im .im_main .go-top a{display:block;width:52px;height:47px;}.main-im .close-im{position:absolute;right:10px;top:-12px;z-index:100;width:24px;height:24px;}.main-im .close-im a{display:block;width:24px;height:24px;background-image:url("//likexia.gitee.io/game/images/kf/close_im.png") !important;text-decoration:none;background-position:left top;background-repeat:no-repeat;}.main-im .close-im a:hover{text-decoration:none;}.main-im .open-im{cursor:pointer;margin-left:68px;width:30px;height:30px;background-image:url("//likexia.gitee.io/game/images/kf/open_im.png");background-repeat:no-repeat;background-position:left top;cursor:pointer;background-size:100%;z-index:100;position:fixed;right:10px;bottom:320px;}@media screen and (max-width:480px){.main-im{display:none;}}.JB-form{padding:10px;}.JB-form *{margin:5px;font-size:13px;}.JB-form .tit{font-weight:bold;}.JB-form input{width:100px;height:30px;line-height:30px;text-align:center;}.JB-form input#minTime,.JB-form input#famingTime{width:50px;}.JB-form button{width:50px;height:30px;}#nofood,#noseed,#noSkill{opacity:0;color:red;}#nofood.show,#noseed.show,#noSkill.show{opacity:1;}.JB-form input[type=checkbox]{width:auto;vertical-align: middle;}.JB-form label{user-select: none;margin-left:0;}</style>';
    content += '<div class="main-im">';
    content += '<div id="open_im" class="open-im">&nbsp;</div>  ';
    content += '<div class="im_main" id="im_main">';
    content += '<div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>';
    content += '<a href="http://shang.qq.com/wpa/qunwpa?idkey=4f30bee18d8ea6ec2b53d31407daf6c6f9f8e722187707f65ed1b354f25af6d9" target="_blank" class="im-qq qq-a" title="点击加入 - GitHub游戏交流群:627141737">';
    content += '<div class="qq-container"></div>';
    content += '<div class="qq-hover-c"><img class="img-qq" src="//likexia.gitee.io/game/images/kf/qq.png"></div>';
    content += '<span>点击加群</span>';
    content += '</a>';
    content += '<div class="im-tel">';
    content += '<div>QQ群号:</div>';
    content += '<div class="tel-num">701342586</div>';
    content += '<div>更多同类游戏:</div>';
    content += '<div class="tel-num"><a href="http://www.gityx.com" target="_blank" title="我们有域名啦~">Git游戏</a><a href="http://bbs.gityx.com/" target="_blank" style="margin-left:5px;" title="点击查看游戏攻略">论坛</a><a href="http://likexia.gitee.io/game/" target="_blank" style="margin-left:5px;" title="之前首页继续保留">旧版</a></div>';
    content += '</div>';
    content += '<div class="im-footer" style="position:relative">';
    content += '<div class="weixing-container">';
    content += '<div class="weixing-show">';

    //生火 - 自动添加柴火-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">生火</div>';
    content += '生火自动添柴，需要自己选择木头、点开始';
    content += '时间间隔 <input id="fireTime" type="text" value="3" placeholder="输入整数数字" autocomplete="on"/> 秒；';
    content += '<button id="startFire" type="primary" >启动</button>';
    content += '<button id="stopFire" type="danger" disabled>停止</button>';
    content += '</div>';
    //生火 - 自动添加柴火-结束

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
    //获取时间
    function nowTime() {
        var d = new Date();
        var my_hours = d.getHours();
        var my_minutes = d.getMinutes();
        var my_seconds = d.getSeconds();
        return my_hours + ":" + my_minutes + ":" + my_seconds
    }

    var autoFire;
    //启动生火-添柴
    $("#startFire").click(function () {
        var fireTime = parseInt($('#fireTime').val());
        if (fireTime == '') {
            minTime = 3000;
        }
        //多留5秒
        autoFire = setInterval(firing, minTime);
        $(this).attr("disabled", true);
        $("#stopFire").attr("disabled", false);
    });

    //停止生火-添柴
    $("#stopFire").click(function () {
        clearInterval(autoFire);
        $(this).attr("disabled", true);
        $("#startFire").attr("disabled", false);
    });
    //自动添柴
    function firing() {
        //判断木头进度条百分比，大于等于你指定百分比才执行挖矿。
        var min1Wid = $('#skill-fm-bonfire-progress').width();
        //设置木头进度条百分比，低于这个百分比时，自动加木头
        if (min1Wid == 0) {
            //没木头时加木头
            lightBonfire();

        }
    }


    console.log("加载自动化脚本 " + nowTime());
}();
