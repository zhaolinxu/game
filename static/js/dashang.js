$(function(){
    var dashang='';
    dashang += '<!-- 打赏动态内容 开始 -->';
    dashang += '<div class="dashang-body">';
    dashang += '<div class="hide_box"></div>';
    dashang += '<div class="shang_box">';
    dashang += '<a class="shang_close" href="javascript:void(0)" title="关闭"><img src="../images/dashang/close.png" alt="关闭" /></a>';
    dashang += '<div class="shang_tit">';
    dashang += '<p>感谢您的支持，我会继续努力的!</p>';
    dashang += '</div>';
    dashang += '<div class="shang_payimg">';
    dashang += '<img src="../images/dashang/alipayimg.png" alt="扫码支持" title="扫一扫" />';
    dashang += '</div>';
    dashang += '<div class="pay_explain">扫码打赏，你说多少就多少</div>';
    dashang += '<div class="shang_payselect">';
    dashang += '<div class="pay_item checked" data-id="alipay">';
    dashang += '<span class="radiobox"></span>';
    dashang += '<span class="pay_logo"><img src="../images/dashang/alipay.jpg" alt="支付宝" /></span>';
    dashang += '</div>';
    dashang += '<div class="pay_item" data-id="weipay">';
    dashang += '<span class="radiobox"></span>';
    dashang += '<span class="pay_logo"><img src="../images/dashang/wechat.jpg" alt="微信" /></span>';
    dashang += '</div>';
    dashang += '<div class="pay_item" data-id="qqpay">';
    dashang += '<span class="radiobox"></span>';
    dashang += '<span class="pay_logo"><img src="../images/dashang/qq.jpg" alt="QQ" /></span>';
    dashang += '</div>';
    dashang += '</div>';
    dashang += '<div class="shang_info">';
    dashang += '<p>打开<span id="shang_pay_txt">支付宝</span>扫一扫，即可进行扫码打赏哦</p>';
    dashang += '<p>分享从这里开始，精彩与您同在</p>';
    dashang += '<p><a style="margin-right:20px;color:#009BE1;font-weight:bold;" href="https://www.paypal.me/sundad" target="_blank"><font color="#01315F">PayPal</font> Donation</a><a href="../../#/support" target="_blank" style="color:blue;">查看打赏列表</a></p>';
    dashang += '</div>';
    dashang += '</div>';
    dashang += '</div>';
    dashang += '<!-- 打赏动态内容 结束 -->';
    
    $("body").append(dashang);
   $(".pay_item").click(function(){
    		$(this).addClass('checked').siblings('.pay_item').removeClass('checked');
    		var dataid=$(this).attr('data-id');
    		$(".shang_payimg img").attr("src","../images/dashang/"+dataid+"img.png");
    		$("#shang_pay_txt").text(dataid=="alipay"?"支付宝":"微信");
    	});
    $(".shang_close,.dashang,.btn-dashang").click(function(){
        $(".hide_box").fadeToggle();
    	$(".shang_box").fadeToggle();
        });
});