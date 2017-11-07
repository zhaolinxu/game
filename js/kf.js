$(function(){
    var content='';
    content +='<!-- 客服动态内容 开始 -->';
     content +='<div class="main-im">';
    content +='<div id="open_im" class="open-im">&nbsp;</div>  ';
    content +='<div class="im_main" id="im_main">';
    content +='<div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>';
    content +='<a href="http://shang.qq.com/wpa/qunwpa?idkey=d10d784492d5e73cca25ff48f4763bdc14f698ffdbf42adbb0e9304495cb0387" target="_blank" class="im-qq qq-a" title="点击加入 - GitHub游戏交流群:627141737">';
    content +='<div class="qq-container"></div>';
    content +='<div class="qq-hover-c"><img class="img-qq" src="http://likexia.gitee.io/game/images/kf/qq.png"></div>';
    content +='<span>点击加群</span>';
    content +='</a>';
    content +='<div class="im-tel">';
    content +='<div>QQ群</div>';
    content +='<div class="tel-num">627141737</div>';
    content +='<div>公众号</div>';
    content +='<div class="tel-num">likexiazai</div>';
    content +='</div>';
    content +='<div class="im-footer" style="position:relative">';
    content +='<div class="weixing-container">';
    content +='<div class="weixing-show">';
    content +='<div class="weixing-txt">微信扫一扫<br>关注公众号</div>';
    content +='<img class="weixing-ma" src="http://likexia.gitee.io/game/images/kf/weixing-ma.jpg">';
    content +='<div class="weixing-sanjiao"></div>';
    content +='<div class="weixing-sanjiao-big"></div>';
    content +='</div>';
    content +='</div>';
    content +='<div class="go-top"><a href="javascript:;" title="返回顶部"></a> </div>';
    content +='<div style="clear:both"></div>';
    content +='</div>';
    content +='</div>';
    content +='</div>';
    content +='<!-- 客服动态内容 结束 -->';
    $("body").append(content);
	$('#close_im').bind('click',function(){
		$('#main-im').css("height","0");
		$('#im_main').hide();
		$('#open_im').show();
	});
	$('#open_im').bind('click',function(e){
		$('#main-im').css("height","272");
		$('#im_main').show();
		$(this).hide();
	});
	$('.go-top').bind('click',function(){
		$(window).scrollTop(0);
	});
	$(".weixing-container").bind('mouseenter',function(){
		$('.weixing-show').show();
	})
	$(".weixing-container").bind('mouseleave',function(){        
		$('.weixing-show').hide();
	});
});