//=============================ajax页面模版部分=================================================



//---------------------------音乐详情页面-----------------
myApp.onPageBeforeInit('post-music',function(page){
post_id=page.query['post_id'];
play_post_id=$('.jinsom-player-footer-btn .play').attr('post_id');
if(play_post_id==post_id&&!player.paused){//正在播放的文章id和点击查看的文章id是一致，并且播放器是在播放的状态
$('.jinsom-music-voice-'+post_id).html('<i class="jinsom-icon jinsom-yuyin1 tiping"> </i> 播放中...');	
}

if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?p='+post_id+'#'+Math.random().toString(36).substr(2,5));	
}

});

//---------------------------动态详情页面-----------------
myApp.onPageBeforeInit('post-words',function(page){
post_id=page.query['post_id'];
jinsom_lightbox();
if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?p='+post_id+'#'+Math.random().toString(11).substr(5,8));	
}

});


//---------------------------视频详情页面-----------------
myApp.onPageBeforeInit('post-video',function(page){
post_id=page.query['post_id'];
if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?p='+post_id+'#'+Math.random().toString(36).substr(2,5));	
}
});

//---------------------------帖子详情页面-----------------
myApp.onPageBeforeInit('post-bbs',function(page){
jinsom_lightbox();
post_id=page.query['post_id'];
if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?p='+post_id+'#'+Math.random().toString(36).substr(2,5));	
}
});

//---------------------------文章详情页面-----------------
myApp.onPageBeforeInit('post-single',function(page){
jinsom_lightbox();
post_id=page.query['post_id'];
if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?p='+post_id+'#'+Math.random().toString(36).substr(2,5));	
}
});


//---------------------------案例页面-----------------
myApp.onPageBeforeInit('case',function(page){
post_id=page.query['post_id'];
if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?p='+post_id+'#'+Math.random().toString(11).substr(5,8));	
}
$('.jinsom-home-menu.case li').click(function(){
$(this).addClass('on').siblings().removeClass('on');
$(this).parents('.navbar').next().children('.page-on-center').find('ul').eq($(this).index()).show().siblings().hide();
});
});


//---------------------------动态评论-----------------
myApp.onPageAfterAnimation('comment-post',function(page){
post_id=page.query['post_id'];
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
name=page.query['name'];
//$('#jinsom-comment-content-'+post_id).focus();
if(name!='undefined'){
$('#jinsom-comment-content-'+post_id).val('@'+name+' ');
}

if($('#comment-1').length>0&&!jinsom.is_admin){
new TencentCaptcha(document.getElementById('comment-1'),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_comment(post_id,res.ticket,res.randstr);}
});
}

});



//---------------------------帖子楼层页面-----------------
myApp.onPageBeforeInit('comment-bbs-floor-page',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------音乐评论列表页面-----------------
myApp.onPageBeforeInit('comment-list-music',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//--------------------------- 一级回帖-----------------
myApp.onPageAfterAnimation('comment-bbs-post',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
post_id=page.query['post_id'];
bbs_id=page.query['bbs_id'];

if($('#comment-2').length>0&&!jinsom.is_admin){
new TencentCaptcha(document.getElementById('comment-2'),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_bbs_comment(post_id,bbs_id,res.ticket,res.randstr);}
});
}

});

//--------------------------- 二级回帖-----------------
myApp.onPageAfterAnimation('comment-bbs-post-floor',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
post_id=page.query['post_id'];
bbs_id=page.query['bbs_id'];
comment_id=page.query['comment_id'];
name=page.query['name'];
//$('#jinsom-comment-content-'+post_id).focus();
if(name!='undefined'){
$('#jinsom-comment-content-'+post_id).val('@'+name+' ');
}

if($('#comment-3').length>0&&!jinsom.is_admin){
new TencentCaptcha(document.getElementById('comment-3'),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_bbs_comment_floor(comment_id,post_id,bbs_id,res.ticket,res.randstr);}
});
}

});

//---------------------------搜索页面-----------------
myApp.onPageBeforeInit('search-mobile',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});
myApp.onPageBeforeInit('search-mobile',function(page){
search_keywords=page.query['search_keywords'];
if(search_keywords){
jinsom_search(search_keywords);	
}

$('#jinsom-search').focus();

$('#jinsom-search-form').submit(function (event) {
//动作：阻止表单的默认行为
event.preventDefault();
value=$('#jinsom-search').val();
jinsom_search(value);
})

});
//---------------------------论坛大厅-----------------
myApp.onPageBeforeInit('bbs-show',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
// new mobileSwiper("[data-page='bbs-show'] .jinsom-bbs-slider",1);
$('#jinsom-bbs-slider').owlCarousel({
items: 1,
margin:15,
autoplay:true,
autoplayTimeout:5000,
loop: true,
});

$('.jinsom-bbs-tab-post-header>li').click(function(event){
$(this).addClass('on').siblings().removeClass('on').parent().next().children().eq($(this).index()).show().siblings().hide();
});
});

//---------------------------话题中心-----------------
myApp.onPageBeforeInit('topic-show',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
navbar_height=parseInt($('.navbar').height());
w_height=parseInt($(window).height());
$('.jinsom-topic-show-form').height(w_height-navbar_height);
$('.jinsom-topic-show-form .left>li').click(function(event){
$(this).addClass('on').siblings().removeClass('on').parent().next().children().eq($(this).index()).show().siblings().hide();
});
});

//--------------------------发表动态-----------------
myApp.onPageBeforeInit('publish',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});


//--------------------------赠送礼物-----------------
myApp.onPageBeforeInit('send-gift',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//--------------------------我的礼物-----------------
myApp.onPageBeforeInit('my-gift',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//--------------------------礼物记录-----------------
myApp.onPageBeforeInit('gift-note',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------附近的人-----------------
myApp.onPageBeforeInit('nearby-people',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------话题排行榜-----------------
myApp.onPageBeforeInit('topic-rank',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------打赏页面-----------------
myApp.onPageBeforeInit('reward',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------购买付费内容页面-----------------
myApp.onPageBeforeInit('post-buy',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------充值金币页面-----------------
myApp.onPageBeforeInit('recharge-credit',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});
//---------------------------充值会员页面-----------------
myApp.onPageBeforeInit('recharge-vip',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------卡密兑换页面-----------------
myApp.onPageBeforeInit('key-recharge',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------提现-----------------
myApp.onPageBeforeInit('cash',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
$('.jinsom-cash-form-content .type>m').click(function(){
$(this).addClass('on').siblings().removeClass('on');
if($(this).attr('type')=='alipay'){
$('.jinsom-cash-form-content .alipay-phone').show();
$('.jinsom-cash-form-content .wechat-phone').hide();
}else{
$('.jinsom-cash-form-content .alipay-phone').hide();
$('.jinsom-cash-form-content .wechat-phone').show();	
}
});
$("#jinsom-cash-number").bind("input propertychange",function(){
number=Math.floor($(this).val()/page.query['ratio']);
$('.jinsom-cash-form-content .number n').text(number+'元');
});
});

//---------------------------提现记录-----------------
myApp.onPageBeforeInit('cash-note',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------提现记录详情-----------------
myApp.onPageBeforeInit('cash-note-more',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//---------------------------经验记录页面-----------------
myApp.onPageBeforeInit('exp-note',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//签到
myApp.onPageBeforeInit('sign', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));

if($('#sign-1').length>0){
new TencentCaptcha(document.getElementById('sign-1'),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_sign(document.getElementById('sign-1'),res.ticket,res.randstr);}
});
}

});
//签到排行榜
myApp.onPageBeforeInit('sign-rank', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//我的钱包
myApp.onPageBeforeInit('mywallet', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//活跃用户
myApp.onPageBeforeInit('online', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//会员中心
myApp.onPageBeforeInit('vip', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//活动报名表单
myApp.onPageBeforeInit('activity-form', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//排行榜
myApp.onPageBeforeInit('leaderboard', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});
//小黑屋
myApp.onPageBeforeInit('black-house', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//转发
myApp.onPageBeforeInit('reprint', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//抢红包
myApp.onPageBeforeInit('get-redbag', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});
//马甲
myApp.onPageBeforeInit('majia', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});



//发布红包
myApp.onPageBeforeInit('publish-redbag', function (page) {
$('.jinsom-publish-redbag-form .type li').click(function(){
$(this).addClass('on').siblings().removeClass('on');
$('.jinsom-publish-redbag-form .tips').html($(this).attr('title'));
});
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//幸运抽奖
myApp.onPageBeforeInit('luck-draw', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));

//列表tab切换
$('.jinsom-luck-draw-list li').click(function(){
$(this).addClass('on').siblings().removeClass('on');
$(this).parent().next().children().eq($(this).index()).show().siblings().hide();
});
});


//消息
myApp.onPageBeforeInit('notice', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
$('.jinsom-mine-page li.notice .item-after').empty();//移除红点
});

//---------------------------视频专题-----------------
myApp.onPageBeforeInit('video-special',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
var video_list=$('.jinsom-video-special-list');
// var video_loading = false;
// var video_page = 2;
$('.jinsom-video-page-content.infinite-scroll').on('infinite',function(){
if($('.jinsom-video-page-content .jinsom-loading').length==0){//判断是否切换tab菜单
if (video_loading) return;
video_loading = true;
video_list.after('\
<div class="infinite-scroll-preloader">\
<div class="preloader"></div>\
</div>\
');
topic=$('.jinsom-video-special-menu li.on').attr('data');
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/post/video-special.php",
data: {topic:topic,page:video_page,type:'more'},
success: function(msg){
if(msg==0){
video_list.append('<div class="jinsom-empty-page">没有更多内容</div>'); 
video_loading = true; 
}else{
video_list.append(msg);
video_page++;
video_loading = false;  
}
$('.infinite-scroll-preloader').remove(); 
}
});
}
}); 
});

//---------------------------上传头像页面-----------------
myApp.onPageBeforeInit('upload-avatar',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
var avatar = new Mavatar({el: '#jinsom-avatar-demo',backgroundColor:'#fff',width:'250px',height:'250px', fileOnchange: function (e) {
}});
margintop=($('body').width()-250)/2;
$('#jinsom-avatar-demo').css('margin-top',margintop+'px');
$('#jinsom-clip-avatar').click(function(event) {
myApp.showIndicator();
avatar.imageClipper(function (data) {
$.ajax({
type:"POST",
dataType:'json',
url:jinsom.jinsom_ajax_url+"/upload/avatar-base64.php",
data:{base64:data,user_id:post_id=page.query['user_id']},
success: function(msg){
myApp.hideIndicator();
$('.jinsom-setting-box .avatarimg img.avatar').attr('src',msg.url);
if(msg.self){//如果是自己操作
$('.jinsom-mine-user-info img.avatar,.jinsom-setting-box .avatarimg img.avatar,.jinsom-home-navbar img.avatar').attr('src',msg.url);
}
history.back(-1);//返回上一页
}
});	
})
});


function reset() {
avatar.resetImage();
}
//获取上传前信息
function getInfo() {
var fileInfo = avatar.getfileInfo();
console.log(fileInfo);
}
//获取base64
function getdata() {
var urldata = avatar.getDataUrl();
console.log(urldata);
}

});

//---------------------------设置页面-----------------
myApp.onPageInit('setting', function (page) {
window.history.pushState(null,null,'/?'+page.name+'#'+Math.random().toString(36).substr(2,5));

$('.jinsom-setting-box li.vip-time').change(function(event) {//设置VIP到期时间
vip_time=$(this).children('input').val();
author_id=$('.jinsom-setting-content').attr('data');
this_dom=$(this);
$.ajax({
type:"POST",
url:jinsom.mobile_ajax_url+"/setting/profile-admin.php",
data:{value:vip_time,author_id:author_id,type:'vip_time'},
success: function(msg){
myApp.hideIndicator();
if(msg.code==1){
this_dom.find('.value').html(vip_time);
}
}
});

});

$('.jinsom-setting-box li.blacklist').change(function(event) {//设置黑名单
blacklist=$(this).children('input').val();
author_id=$('.jinsom-setting-content').attr('data');
this_dom=$(this);
$.ajax({
type:"POST",
url:jinsom.mobile_ajax_url+"/setting/profile-admin.php",
data:{value:blacklist,author_id:author_id,type:'blacklist_time'},
success: function(msg){
myApp.hideIndicator();
if(msg.code==1){
this_dom.find('.value').html(blacklist);
}
}
});

});


$('.jinsom-setting-box li.verify select').change(function(event){//设置认证类型
verify=$(this).val();
verify_text=$(this).children('option:selected').attr('data');
author_id=$('.jinsom-setting-content').attr('data');
this_dom=$(this);
$.ajax({
type:"POST",
url:jinsom.mobile_ajax_url+"/setting/profile-admin.php",
data:{value:verify,author_id:author_id,type:'verify'},
success: function(msg){
myApp.hideIndicator();
layer.open({content:msg.msg,skin:'msg',time:2});
if(msg.code==1){
this_dom.siblings('.value').html(verify_text);
}
}
});
});

$('.jinsom-setting-box li.user_power select').change(function(event){//设置认证类型
user_power=$(this).val();
author_id=$('.jinsom-setting-content').attr('data');
this_dom=$(this);
$.ajax({
type:"POST",
url:jinsom.mobile_ajax_url+"/setting/profile-admin.php",
data:{value:user_power,author_id:author_id,type:'user_power'},
success: function(msg){
myApp.hideIndicator();
layer.open({content:msg.msg,skin:'msg',time:2});
if(msg.code==1){
if(user_power==1){
this_dom.siblings('.value').html('正常用户');
}else if(user_power==2){
this_dom.siblings('.value').html('网站管理');
}else if(user_power==3){
this_dom.siblings('.value').html('黑名单');
}else if(user_power==4){
this_dom.siblings('.value').html('风险账户');
}
}
}
});
});

});
//---------------------------更多设置页面-----------------
myApp.onPageInit('setting-more', function (page) {
window.history.pushState(null,null,'/?'+page.name+'#'+Math.random().toString(36).substr(2,5));

$('.jinsom-setting-box li.gender select').change(function(event) {//设置性别
gender=$(this).val();
author_id=$('.jinsom-setting-content').attr('data');
this_dom=$(this);
$.ajax({
type:"POST",
url:jinsom.mobile_ajax_url+"/setting/profile.php",
data:{value:gender,author_id:author_id,type:'gender'},
success: function(msg){
myApp.hideIndicator();
layer.open({content:msg.msg,skin:'msg',time:2});
if(msg.code==1){
this_dom.siblings('.value').html(gender);
// if(msg.self){
// if(gender=='保密'){
// $('.jinsom-mine-page .jinsom-girl,.jinsom-mine-page .jinsom-boy').remove();	
// }
// }
}
}
});
});

$('.jinsom-setting-box li.birthday').change(function(event) {//设置生日
birthday=$(this).children('input').val();
author_id=$('.jinsom-setting-content').attr('data');
this_dom=$(this);
$.ajax({
type:"POST",
url:jinsom.mobile_ajax_url+"/setting/profile.php",
data:{value:birthday,author_id:author_id,type:'birthday'},
success: function(msg){
myApp.hideIndicator();
if(msg.code==1){
this_dom.find('.value').html(birthday);
}
}
});

// $(this).find('.value').html($(this).children('input').val());
});

});


//---------------------------更多个人说明页面-----------------
myApp.onPageAfterAnimation('setting-desc', function (page) {
window.history.pushState(null,null,'/?'+page.name+'#'+Math.random().toString(36).substr(2,5));
t=$('#jinsom-setting-desc').val(); 
$('#jinsom-setting-desc').val("").focus().val(t); 
});

//---------------------------更多头衔设置页面-----------------
myApp.onPageAfterAnimation('setting-honor', function (page) {
window.history.pushState(null,null,'/?'+page.name+'#'+Math.random().toString(36).substr(2,5));
$('.jinsom-user_honor-select-form .list li').click(function(){
$(this).addClass('on').siblings().removeClass('on');
});

});


//---------------------------设置-修改手机号-----------------
myApp.onPageAfterAnimation('setting-phone', function (page) {
window.history.pushState(null,null,'/?'+page.name+'#'+Math.random().toString(36).substr(2,5));

if($('#code-3').length>0){
new TencentCaptcha(document.getElementById('code-3'),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_get_code(120,'phone',res.ticket,res.randstr);}
});
}

});

//---------------------------设置-修改邮箱号-----------------
myApp.onPageAfterAnimation('setting-email', function (page) {
window.history.pushState(null,null,'/?'+page.name+'#'+Math.random().toString(36).substr(2,5));

if($('#code-4').length>0){
new TencentCaptcha(document.getElementById('code-4'),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_get_code(120,'mail',res.ticket,res.randstr);}
});
}

});


myApp.onPageAfterAnimation('bbs',function(page){
bbs_loading = false; 
//渲染瀑布流
var container = $('.page-on-center .jinsom-bbs-post-list-3');
container.imagesLoaded(function(){
container.masonry({
itemSelector : '.grid',
gutter: 0,
isAnimated: true,
isRTL:false,
isResizable: true,//是否自动布局默认true
gutterWidth:0,
animationOptions:{
duration: 800,
easing: 'easeOutBounce',
queue: false
}
});
});

});

//--------------------论坛页面-------
myApp.onPageAfterAnimation('bbs',function(page){
$('[data-page=bbs] .navbar').removeClass('color');//移除color
bbs_id=page.query.bbs_id;

if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?cat='+bbs_id+'#'+Math.random().toString(36).substr(2,5));	
}



//滚动事件
$('.jinsom-bbs-content').scroll(function(){
scrollTop =$(this).scrollTop();//滚动高度

if(scrollTop>50){
$('[data-page=bbs] .navbar').addClass('color');
}else{
$('[data-page=bbs] .navbar').removeClass('color');
};

});

$('.jinsom-bbs-content.infinite-scroll').on('infinite',function(){
more_list=$('.page-on-center .jinsom-bbs-post-list');
if (bbs_loading) return;
bbs_loading = true;
more_list.after('\
<div class="infinite-scroll-preloader">\
<div class="preloader"></div>\
</div>\
');


page=parseInt(more_list.attr('page'));
// more_list.after(jinsom.loading);
type=more_list.attr('type');
if(type==''){type='new';}
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/post/bbs.php",
data: {page:page,bbs_id:bbs_id,type:type},
success: function(msg){
if(msg!=0){

if(more_list.hasClass('jinsom-bbs-post-list-3')){
container=$('.page-on-center .jinsom-bbs-post-list-3');
$(msg).find('img').each(function(index){
jinsom_loadImage($(this).attr('src'));
})
var $newElems = $(msg).css({ opacity: 1}).appendTo(container);
$newElems.imagesLoaded(function(){
// $newElems.animate({ opacity: 1},800);
container.masonry( 'appended', $newElems,true);
});
}else{
more_list.append(msg);
}


bbs_loading = false; 
page=page+1;
more_list.attr('page',page);
}else{
bbs_loading = true;
// more_list.append('<div class="jinsom-empty-page">没有更多内容</div>'); 
}
$('.infinite-scroll-preloader').remove(); 
}
});


}); 



}); 

//---------------------------话题页面-----------------
myApp.onPageBeforeInit('topic',function(page){
$('[data-page=topic] .navbar').removeClass('color');//移除color
topic_id=page.query.topic_id;

if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?tag='+topic_id+'#'+Math.random().toString(36).substr(2,5));	
}



//滚动事件
$('.jinsom-topic-content').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度

if(scrollTop>30){
$('[data-page=topic] .navbar').addClass('color');
}else{
$('[data-page=topic] .navbar').removeClass('color');
};


if(contentH - viewH - scrollTop-navbarH <20){ //到达底部时,加载新内容
if($('.jinsom-topic-content .jinsom-loading').length==0&&$('.jinsom-topic-content .jinsom-empty-page').length==0){
more_list=$('.jinsom-topic-post-list');
page=parseInt(more_list.attr('page'));
more_list.after(jinsom.loading);
type=more_list.attr('type');
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/post/topic.php",
data: {page:page,topic_id:topic_id,type:type},
success: function(msg){
if(msg!=0){
more_list.append(msg);
page=page+1;
more_list.attr('page',page);
}else{
more_list.append('<div class="jinsom-empty-page">没有更多内容</div>'); 
}
$('.jinsom-load').remove();
}
});


}
}

});



});
//--------------------------我关注的论坛页面-----------------
myApp.onPageBeforeInit('bbs-like',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});
//--------------------------推荐论坛页面-----------------
myApp.onPageBeforeInit('bbs-commend',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//--------------------------大转盘页面-----------------
myApp.onPageBeforeInit('lottery',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
$('.jinsom-lottery-money span.add').click(function(){
number=$('#jinsom-lottery-money').val();
if(number){
number=parseInt(number);
}else{
number=0;
}
add_number=parseInt($(this).attr('data'));
$('#jinsom-lottery-money').val(number+add_number);

});

});

//---------------------------个人主页-自己-----------------


myApp.onPageBeforeInit('member-mine',function(page){
$('[data-page=member-mine] .navbar').removeClass('color');//移除color
jinsom_lightbox();
author_id=page.query.author_id;

if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?author='+author_id+'#'+Math.random().toString(36).substr(2,5));	
}

});


myApp.onPageAfterAnimation('member-mine', function (page) {
author_id=page.query.author_id;

//滚动事件
$('.page-on-center #jinsom-member-mine-page').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度


if(scrollTop>200){
$('[data-page=member-mine] .navbar').addClass('color');
}else{
$('[data-page=member-mine] .navbar').removeClass('color');
};

if(contentH - viewH - scrollTop-navbarH <1){ //到达底部时,加载新内容
if($('#jinsom-member-mine-page .jinsom-loading').length==0&&$('#jinsom-member-mine-page .jinsom-empty-page').length==0){
more_list=$(this).find('.jinsom-member-mine-post-list');
type=$(this).find('.jinsom-member-menu li.on').attr('data');
page=parseInt(more_list.attr('page'));
more_list.after(jinsom.loading);
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/post/data.php",
data: {page:page,type:type,load_type:'more',author_id:author_id},
success: function(msg){
if(msg==0){
more_list.append('<div class="jinsom-empty-page">没有更多内容</div>'); 
}else{    
more_list.append(msg);
jinsom_lightbox();
page=page+1;
more_list.attr('page',page);
}
$('.jinsom-load').remove();
}
});
}
}


});

//查看自己头像
$('.jinsom-member-header .avatarimg').on('click',function(){
avatar_url=$(this).children('img').attr('src');
show_avatar = myApp.photoBrowser({
photos : [avatar_url],
theme:'dark',
toolbar:false,
type:'popup',
});
show_avatar.open();
});

}); 

//---------------------------个人主页-别人-----------------

myApp.onPageBeforeInit('member-other',function(page){
$('[data-page=member-other] .navbar').removeClass('color');//移除color
jinsom_lightbox();
author_id=page.query.author_id;

if(jinsom.permalink_structure){//固定连接
window.history.pushState(null,null,page.query['url']+'#'+Math.random().toString(36).substr(2,5));	
}else{//朴素
window.history.pushState(null,null,'/?author='+author_id+'#'+Math.random().toString(36).substr(2,5));	
}

});

myApp.onPageAfterAnimation('member-other', function (page) {
author_id=page.query.author_id;

//滚动事件
$('.page-on-center #jinsom-member-other-page').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度

if(scrollTop>200){
$('[data-page=member-other] .navbar').addClass('color');
}else{
$('[data-page=member-other] .navbar').removeClass('color');
};

if(contentH - viewH - scrollTop-navbarH <1){ //到达底部时,加载新内容
if($('#jinsom-member-other-page .jinsom-loading').length==0&&$('#jinsom-member-other-page .jinsom-empty-page').length==0){
more_list=$(this).find('.jinsom-member-other-post-list');
type=$(this).find('.jinsom-member-menu li.on').attr('data');
page=parseInt(more_list.attr('page'));
more_list.after(jinsom.loading);
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/post/data.php",
data: {page:page,type:type,load_type:'more',author_id:author_id},
success: function(msg){
if(msg==0){
more_list.append('<div class="jinsom-empty-page">没有更多内容</div>'); 
}else{    
more_list.append(msg);
jinsom_lightbox();
page=page+1;
more_list.attr('page',page);
}
$('.jinsom-load').remove();
}
});
}
}


});



//查看他人头像
$('.jinsom-member-header .avatarimg').on('click',function(){
avatar_url=$(this).children('img').attr('src');
show_avatar = myApp.photoBrowser({
photos : [avatar_url],
theme:'dark',
toolbar:false,
type:'popup',
});
show_avatar.open();
});


}); 




//===========================消息页面================================

//消息页面下拉刷新
var ptrContent = $('#jinsom-view-notice .pull-to-refresh-content');
ptrContent.on('refresh', function (e) {
setTimeout(function (){//显示刷新成功
$('#jinsom-view-notice .preloader').hide();
$('#jinsom-view-notice .jinsom-refresh-success').show();
}, 800);

//下拉刷新完成
setTimeout(function (){
myApp.pullToRefreshDone();
$('#jinsom-view-notice .preloader').show();
$('#jinsom-view-notice .jinsom-refresh-success').hide();


}, 1600);

});


//---------------------------单对单聊天-----------------
myApp.onPageBeforeInit('chat-one',function(page){
author_id=page.query.author_id;
window.history.pushState(null,null,'/?chat='+author_id+'&r='+Math.random().toString(36).substr(2,5));
jinsom_lightbox();
$('#jinsom-chat-user-'+author_id+' .tips').remove();//消灭提示
$('.jinsom-chat-list-content').scrollTop($('.jinsom-chat-list-content')[0].scrollHeight);


jinsom_ajax_get_messages(author_id);//长轮询

//图片加载完成
$(".jinsom-chat-message-list-content img").on('load',function(){
$('.jinsom-chat-list-content').scrollTop($('.jinsom-chat-list-content')[0].scrollHeight);
});


//点击内容 撤回菜单
// $('.jinsom-chat-message-list-content').on('click',function(){
// myApp.popover('.jinsom-chat-tap-popover',this);
// });

$('.jinsom-chat-list-content').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度
if(contentH - viewH - scrollTop-navbarH*2 >5){ //到达底部时,加载新内容
$('.jinsom-msg-tips').show();
}else{
$('.jinsom-msg-tips').hide().html('底部');	
}
});


});

//关闭聊天
myApp.onPageBack('chat-one', function (page){//返回
jinsom_stop_user_Ajax();//关闭长轮询   
})



//---------------------群聊-------
myApp.onPageBeforeInit('chat-group',function(page){
bbs_id=page.query.bbs_id;
window.history.pushState(null,null,'/?group='+bbs_id+'&r='+Math.random().toString(36).substr(2,5));
jinsom_lightbox();
$('.jinsom-chat-group-list-content').scrollTop($('.jinsom-chat-group-list-content')[0].scrollHeight);

jinsom_ajax_get_messages_group(bbs_id);//长轮询

//图片加载完成
$('.jinsom-chat-message-list-content img').on('load',function(){
$('.jinsom-chat-group-list-content').scrollTop($('.jinsom-chat-group-list-content')[0].scrollHeight);
});

//点击内容 撤回菜单
// $('.jinsom-chat-message-list-content').on('click',function(){
// myApp.popover('.jinsom-chat-tap-popover',this);
// });


$('.jinsom-chat-group-list-content').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度
console.log(navbarH);
if(contentH - viewH - scrollTop-navbarH*2 >5){ //到达底部时,加载新内容
$('.jinsom-msg-tips').show();
}else{
$('.jinsom-msg-tips').hide().html('底部');	
}
});

});


//关闭群聊
myApp.onPageBack('chat-group', function (page){//返回
jinsom_stop_group_Ajax();//关闭长轮询   
})





//---------------------------发布动态页面-----------------
myApp.onPageAfterAnimation('publish',function(page){
type=page.query.type;

if(type=='words'){
if($('#publish-'+type).length>0){
new TencentCaptcha(document.getElementById('publish-'+type),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_publish_words(res.ticket,res.randstr);}
});
}
}else if(type=='music'){
if($('#publish-'+type).length>0){
new TencentCaptcha(document.getElementById('publish-'+type),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_publish_music_video('music',res.ticket,res.randstr);}
});
}
}else if(type=='video'){
if($('#publish-'+type).length>0){
new TencentCaptcha(document.getElementById('publish-'+type),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_publish_music_video('video',res.ticket,res.randstr);}
});
}
}else if(type=='single'){
if($('#publish-'+type).length>0){
new TencentCaptcha(document.getElementById('publish-'+type),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_publish_single(res.ticket,res.randstr);}
});
}	
}else{
if($('#publish-bbs').length>0){
new TencentCaptcha(document.getElementById('publish-bbs'),jinsom.machine_verify_appid,function(res){
if(res.ret === 0){jinsom_publish_bbs(type,res.ticket,res.randstr);}
});
}
}

if(type!='video'&&type!='music'){
document.querySelector('#file').addEventListener('change', function () {
var that = this;
var number=that.files.length;

if(type=='words'){
var words_images_max=jinsom.words_images_max;//最大上传数量
}else{
var words_images_max=20;	
}

if(number>words_images_max||$('#jinsom-publish-images-list li').length>=words_images_max){
layer.open({content:'最多只能上传'+words_images_max+'张图片！',skin:'msg',time:2});
return false;
}

a=0;//计时器
for(i = 0; i< number; i ++) {
$('.jinsom-publish-words-form .add i').hide();//显示加载loading
$('.jinsom-publish-words-form .add span').css('display','inline-block');//显示加载loading
info=that.files[i];
lrz(info)
.then(function (rst) {
$.ajax({
type: "POST",
dataType:'json',
url:jinsom.jinsom_ajax_url+"/upload/words-base64.php",
data:{base64:rst.base64},
success: function(msg){
img_count=$('#jinsom-publish-images-list li').length;//获取已经上传的图片数量
if(img_count>=words_images_max-1){//如果已经上传了9张
$('.jinsom-publish-words-form .add').hide();//隐藏添加按钮
}
if(img_count<words_images_max){//如果上传的超过了9张就不载入容器
if(msg.code==1){
$('#jinsom-publish-images-list').append('<li><i class="jinsom-icon jinsom-guanbi" onclick="jinsom_remove_image('+words_images_max+',this)"></i><a href="'+msg.url+'" data-fancybox="gallery-publish"><img src="'+msg.url+'"></a></li>');
jinsom_lightbox();//渲染灯箱
a++;

if(a==number){//如果照片已经上传完成就关闭
$('#file').val('');//清空已选状态
$('.jinsom-publish-words-form .add i').show();//关闭loading动画
$('.jinsom-publish-words-form .add span').hide();	//关闭loading动画
}

}else{
layer.open({content:msg.msg,skin:'msg',time:2});
}

}else{
$('#file').val('');//清空已选状态
$('.jinsom-publish-words-form .add i').show();//关闭loading动画
$('.jinsom-publish-words-form .add span').hide();	//关闭loading动画	
}

}
});
})
.catch(function (err) {
// 处理失败会执行
})
.always(function (){

});
}
});

//图片拖动排序
var el = document.getElementById('jinsom-publish-images-list');
var sortable = Sortable.create(el);
}

if(type=='video'){
document.querySelector('#jinsom-upload-video').addEventListener('change', function () {
var percent = $('.jinsom-upload-video-btn .percent');
var progress = $(".jinsom-upload-video-btn p");

$("#jinsom-upload-video-form").ajaxSubmit({
dataType:'json',
uploadProgress: function(event, position, total, percentComplete) {
var percentVal = percentComplete + '%';
percent.width(percentVal);
progress.html(percentVal);
if(percentVal=='100%'){
progress.html('视频正在处理中...');	
}
},
success:function(msg){
$('#jinsom-upload-video').val('');
if(msg.code==0){
layer.open({content:msg.msg,skin:'msg',time:2});
percent.width(0);
progress.html('选择一个视频');
}else if(msg.code==1){
$('#jinsom-upload-video-form').hide();
$('.jinsom-remove-video-toolbar').css('display','flex');
$('#jinsom-video-url').val(msg.url);

var jinsom_view_video = new Player({
id: 'jinsom-publish-video-demo',
url:msg.url,
fluid: true,
autoplay: true,
videoInit: true,
playsinline: true,
'x5-video-player-type': 'h5',
});

video = $('#jinsom-publish-video-demo video');
video.attr('crossOrigin','Anonymous');

jinsom_view_video.on("canplay", function(){
video_time=$('#jinsom-publish-video-demo .xgplayer-time em').text();
video_time_s=video_time.split(':')[video_time.split(':').length - 1];
video_time_m=video_time.split(':',1);
$('#jinsom-video-time').val(parseInt(video_time_m)*60+parseInt(video_time_s));
});

$('.jinsom-remove-video-toolbar .del').click(function(){
$('#jinsom-publish-video-demo').empty().attr('class','').attr('style','');
$('.jinsom-remove-video-toolbar').css('display','none');
$('#jinsom-upload-video-form').show();
percent.width(0);
progress.html('选择一个视频');
$('.jinsom-remove-video-toolbar .read').removeClass('on').text('截取封面');
$('.jinsom-publish-video-set-cover-content').empty();
$('#jinsom-video-img-url,#jinsom-video-url').val('');
});

$('.jinsom-remove-video-toolbar .read').click(function(){
if(!$(this).hasClass('on')){
var canvas = document.createElement("canvas");
canvas.width = video[0].videoWidth;
canvas.height = video[0].videoHeight;
var ctx=canvas.getContext("2d");
if(myApp.device.os=='ios'&&jinsom_get_file_type(msg.url)=='.mov'&&(video[0].videoHeight>video[0].videoWidth)){
ctx.rotate(90*Math.PI/180);
ctx.translate(0,-video[0].videoWidth);
ctx.drawImage(video[0], 0, 0, canvas.width*2, canvas.height);
}else{
ctx.drawImage(video[0], 0, 0, canvas.width, canvas.height);	
}
video_cover=canvas.toDataURL("image/png");

$('.jinsom-publish-video-set-cover-content').html('<img src="'+video_cover+'">');
$.ajax({
type:"POST",
dataType:'json',
url:jinsom.jinsom_ajax_url+"/upload/video-img-base64.php",
data:{base64:video_cover},
success: function(rel){
$('#jinsom-video-img-url').val(rel.url);	
$('.jinsom-remove-video-toolbar span.read').addClass('on').text('已截取封面');
$('.jinsom-publish-video-set-cover-content').html('<img src="'+rel.url+'">');
}
});	
}
});

$('#jinsom-publish-remove-video-cover').click(function(){
$('.jinsom-remove-video-toolbar .read').removeClass('on').text('截取封面');
$('.jinsom-publish-video-set-cover-content').empty();
$('#jinsom-video-img-url').val('');
});

}


}, 
error:function(){
$('#jinsom-upload-video-form').show();
percent.width(0);
progress.html('选择一个视频');
layer.open({content:'上传失败！',skin:'msg',time:2});
$('#jinsom-upload-video').val('');
return false;
} 
});

});
}


if(type=='music'&&myApp.device.os!='ios'){//上传音乐
document.querySelector('#jinsom-upload-music').addEventListener('change', function () {
var percent = $('.jinsom-upload-music-btn .percent');
var progress = $(".jinsom-upload-music-btn p");

$("#jinsom-upload-music-form").ajaxSubmit({
dataType:'json',
uploadProgress: function(event, position, total, percentComplete) {
var percentVal = percentComplete + '%';
percent.width(percentVal);
progress.html(percentVal);
if(percentVal=='100%'){
progress.html('音频正在处理中...');	
}
},
success:function(msg){
$('#jinsom-upload-music').val('');
if(msg.code==0){
layer.open({content:msg.msg,skin:'msg',time:2});
percent.width(0);
progress.html('选择一个音频');
}else if(msg.code==1){
$('#jinsom-music-url').val(msg.url);
progress.html('音频已经上传');
}


}, 
error:function(){
$('#jinsom-upload-music-form').show();
percent.width(0);
progress.html('选择一个音频');
layer.open({content:'上传失败！',skin:'msg',time:2});
$('#jinsom-upload-music').val('');
return false;
} 
});

});


}




//发布@好友
$('.jinsom-publish-aite-popup').on('opened',function (){//打开
if($('.jinsom-publish-aite-form .list.aite li').length==0){
myApp.showIndicator();
$.ajax({
type: "POST",
url: jinsom.mobile_ajax_url+"/user/following.php",
success: function(msg){
myApp.hideIndicator();
html='';
for (var i = msg.data.length - 1; i >= 0; i--){
html+='\
<li onclick="jinsom_aite_selete_user(this)" data="'+msg.data[i].nickname+'">\
<div class="avatarimg">'+msg.data[i].avatar+msg.data[i].verify+'</div>\
<div class="name">'+msg.data[i].name+msg.data[i].vip+'</div>\
</li>';
}
$('.jinsom-publish-aite-form .list.aite').html(html);
}
}); 

}
});

//选择话题
$('.jinsom-publish-topic-popup').on('opened',function (){//打开
if($('.jinsom-publish-aite-form .list.topic li').length==0){
myApp.showIndicator();
$.ajax({
type: "POST",
url: jinsom.mobile_ajax_url+"/topic/topic-hot.php",
success: function(msg){
myApp.hideIndicator();
html='';
for (var i = 0; i < msg.data.length; i++){
html+='\
<li onclick="jinsom_publish_topic_selete(this)" data="'+msg.data[i].name+'">\
<div class="avatarimg">'+msg.data[i].avatar+'</div>\
<div class="name">#'+msg.data[i].name+'#</div>\
<div class="hot"><i class="jinsom-icon jinsom-huo"></i> '+msg.data[i].hot+'</div>\
</li>';
}
$('.jinsom-publish-aite-form .list.topic').html(html);
}
}); 

}
});

//选择话题
$('.jinsom-publish-power-popup').on('opened',function (){//打开
if($('.jinsom-publish-power-form li').length==0){
myApp.showIndicator();
post_type=$('.jinsom-publish-words-form .tool .power i').attr('post_type');
$.ajax({
type: "POST",
url: jinsom.mobile_ajax_url+"/publish/power-form.php",
data:{post_type:post_type},
success: function(msg){
myApp.hideIndicator();
$('.jinsom-publish-power-form').html(msg);
}
}); 
}
});



});





//---------------------------//充值金币页面-----------------
myApp.onPageAfterAnimation('recharge-credit',function(page){
$('.jinsom-recharge-number li').click(function() {
$(this).addClass('on').siblings().removeClass('on');
$('#jinsom-credit-recharge-number').val($(this).children('.bottom').attr('data'));
});
$('.jinsom-recharge-type li').click(function() {
$(this).addClass('on').siblings().removeClass('on');
type=$(this).attr('data');
$('#jinsom-recharge-type').val(type);
if(type=='alipay'){
$('#jinsom-credit-recharge-form').attr('action',jinsom.theme_url+'/mobile/module/pay/alipay-h5.php');	
}else if(type=='wechat-jsapi'){
$('#jinsom-credit-recharge-form').attr('action',jinsom.home_url+'/pay/wechat/wechat-mp.php');	
}
});
});

//---------------------------//开通会员页面-----------------
myApp.onPageAfterAnimation('recharge-vip',function(page){
$('.jinsom-recharge-number li').click(function() {
$(this).addClass('on').siblings().removeClass('on');

if($('.jinsom-recharge-type li.on').length>0){
if($('.jinsom-recharge-type li.on').attr('data')=='creditpay'){
$('#jinsom-credit-recharge-number').val($(this).children('.bottom').attr('credit_price'));	
}else{
$('#jinsom-credit-recharge-number').val($(this).children('.bottom').attr('rmb_price'));	
}
}
});	



$('.jinsom-recharge-type li').click(function() {
$(this).addClass('on').siblings().removeClass('on');
type=$(this).attr('data');
$('#jinsom-recharge-type').val(type);
if(type=='creditpay'){
$('#jinsom-credit-recharge-number').val($('.jinsom-recharge-number li.on').children('.bottom').attr('credit_price'));

$(".jinsom-recharge-number li").each(function(){
$(this).children('.bottom').find('m').html($(this).children('.bottom').attr('credit_price'));
});
$('.jinsom-recharge-number li .bottom i').html(jinsom.credit_name);
}else{
$('#jinsom-credit-recharge-number').val($('.jinsom-recharge-number li.on').children('.bottom').attr('rmb_price'));	

$(".jinsom-recharge-number li").each(function(){
$(this).children('.bottom').find('m').html($(this).children('.bottom').attr('rmb_price'));
});
$('.jinsom-recharge-number li .bottom i').html('元');
if(type=='alipay'){
$('#jinsom-credit-recharge-form').attr('action',jinsom.theme_url+'/mobile/module/pay/alipay-h5.php');	
}else if(type=='wechat-jsapi'){
$('#jinsom-credit-recharge-form').attr('action',jinsom.home_url+'/pay/wechat/wechat-mp.php');	
}	
}

});
});

//---------------------------//发送礼物页面-----------------
myApp.onPageAfterAnimation('send-gift',function(page){
$('.jinsom-send-gift-form li').click(function() {
$(this).addClass('on').siblings().removeClass('on');
$('.jinsom-send-gift-toolbar span.send i').html($(this).children('.bottom').attr('data'));
});
});


//=============打开通知页面==================


myApp.onPageBeforeInit('about-me',function(page){
window.history.pushState(null,null,'/?about-me&r='+Math.random().toString(36).substr(2,5));
});

//---------------------与我相关-------
myApp.onPageBeforeInit('item-notice',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
tip_dom=$('.jinsom-chat-notice.item .tip');
if(tip_dom.length>0){
all_tip_dom=$('.jinsom-footer-toolbar .tips');
all_notice_dom=$('#jinsom-chat-tab-recently .jinsom-chat-notice .tip');
all_tips=parseInt(all_tip_dom.html());//所有消息提醒 包含聊天的
all_notice=parseInt(all_notice_dom.html());//所有提醒
this_tips=parseInt(tip_dom.html());//当前的通知消息数量
all_now_tips=all_tips-this_tips;
all_now_notice=all_notice-this_tips;

//消灭工具栏的消息提示
if(all_now_tips>0){//如果还有未读消息
all_tip_dom.html(all_now_tips);	
}else{
all_tip_dom.remove();
}

//消灭通知提醒的提示
if(all_now_notice>0){//如果还有未读消息
all_notice_dom.html(all_now_notice);	
}else{
all_notice_dom.remove();
}

tip_dom.remove();//移除点击的当前的提示
}



//滚动事件



$('.jinsom-chat-user-list li').click(function(){//消除红点
$(this).find('.item-media').find('span').remove();
});
});
//---------------------评论回复-------
myApp.onPageBeforeInit('comment-notice',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
tip_dom=$('.jinsom-chat-notice.comment .tip');
if(tip_dom.length>0){
all_tip_dom=$('.jinsom-footer-toolbar .tips');
all_notice_dom=$('#jinsom-chat-tab-recently .jinsom-chat-notice .tip');
all_tips=parseInt(all_tip_dom.html());//所有消息提醒 包含聊天的
all_notice=parseInt(all_notice_dom.html());//所有提醒
this_tips=parseInt(tip_dom.html());//当前的通知消息数量
all_now_tips=all_tips-this_tips;
all_now_notice=all_notice-this_tips;

//消灭工具栏的消息提示
if(all_now_tips>0){//如果还有未读消息
all_tip_dom.html(all_now_tips);	
}else{
all_tip_dom.remove();
}

//消灭通知提醒的提示
if(all_now_notice>0){//如果还有未读消息
all_notice_dom.html(all_now_notice);	
}else{
all_notice_dom.remove();
}

tip_dom.remove();//移除点击的当前的提示
}

$('.jinsom-chat-user-list li').click(function(){//消除红点
$(this).find('.item-media').find('span').remove();
});
});
//---------------------喜欢关注-------
myApp.onPageBeforeInit('like-follow-notice',function(page){
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
tip_dom=$('.jinsom-chat-notice.like .tip');
if(tip_dom.length>0){
all_tip_dom=$('.jinsom-footer-toolbar .tips');
all_notice_dom=$('#jinsom-chat-tab-recently .jinsom-chat-notice .tip');
all_tips=parseInt(all_tip_dom.html());//所有消息提醒 包含聊天的
all_notice=parseInt(all_notice_dom.html());//所有提醒
this_tips=parseInt(tip_dom.html());//当前的通知消息数量
all_now_tips=all_tips-this_tips;
all_now_notice=all_notice-this_tips;

//消灭工具栏的消息提示
if(all_now_tips>0){//如果还有未读消息
all_tip_dom.html(all_now_tips);	
}else{
all_tip_dom.remove();
}

//消灭通知提醒的提示
if(all_now_notice>0){//如果还有未读消息
all_notice_dom.html(all_now_notice);	
}else{
all_notice_dom.remove();
}

tip_dom.remove();//移除点击的当前的提示
}

$('.jinsom-chat-user-list li').click(function(){//消除红点
$(this).find('.item-media').find('span').remove();
});
});



//我的粉丝页面
myApp.onPageAfterAnimation('follower', function (page) {
window.history.pushState(null,null,'/?follower&r='+Math.random().toString(36).substr(2,5));
//滚动事件
$('.jinsom-follower-content').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度
if(contentH - viewH - scrollTop-navbarH <20){ //到达底部时,加载新内容
if($('.jinsom-follower-content .jinsom-loading').length==0&&$('.jinsom-follower-content .jinsom-empty-page').length==0){
more_list=$('.jinsom-chat-user-list.follower');
page=parseInt(more_list.attr('page'));
user_id=more_list.attr('user_id');
more_list.after(jinsom.loading);
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/user/follower.php",
data: {page:page,user_id:user_id},
success: function(msg){
if(msg.code!=0){  

html='';
for (var i = msg.data.length - 1; i >= 0; i--){
html+='\
<li>\
<div class="item-content">\
<div class="item-media">\
<a href="'+msg.data[i].link+'" class="link">\
'+msg.data[i].avatar+msg.data[i].verify+'\
</a>\
</div>\
<div class="item-inner">\
<div class="item-title">\
<a href="'+msg.data[i].link+'" class="link">\
<div class="name">'+msg.data[i].nickname+msg.data[i].vip+'</div>\
<div class="desc">'+msg.data[i].desc+'</div>\
</a>\
</div>\
</div>\
'+msg.data[i].follow+'\
</div>\
</li>';
}
more_list.append(html);
page=page+1;
more_list.attr('page',page);
}else{
more_list.append('<div class="jinsom-empty-page">没有更多粉丝</div>'); 
}
$('.jinsom-load').remove();
}
});
}
}

});

}); 


//---------------------我的访客-------
myApp.onPageBeforeInit('visitor',function(page){
window.history.pushState(null,null,'/?visitor&r='+Math.random().toString(36).substr(2,5));
$('.jinsom-mine-page li.visitor .item-title>i').remove();//移除红点
});







//收入记录
myApp.onPageBeforeInit('income', function (page) {
window.history.pushState(null,null,'/?income&r='+Math.random().toString(36).substr(2,5));
//滚动事件
$('.jinsom-recharge-note-content').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度
if(contentH - viewH - scrollTop-navbarH <20){ //到达底部时,加载新内容
if($('.jinsom-recharge-note-content .jinsom-loading').length==0&&$('.jinsom-recharge-note-content .jinsom-empty-page').length==0){
more_list=$('.jinsom-chat-user-list.recharge-note');
page=parseInt(more_list.attr('page'));
type=more_list.attr('type');
more_list.after(jinsom.loading);
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/note/credit.php",
data: {page:page,type:type},
success: function(msg){
if(msg.code!=0){  

html='';
for (var i = msg.data.length - 1; i >= 0; i--){
html+='\
<li>\
<div class="item-content">\
<div class="item-media">\
'+msg.data[i].avatar+'\
</div>\
<div class="item-inner">\
<div class="item-title">\
<div class="name">'+msg.data[i].content+'</div>\
<div class="desc">'+msg.data[i].time+'</div>\
</div>\
</div>\
<div class="item-after">+'+msg.data[i].number+'</div>\
</div>\
</li>';
}
more_list.append(html);
page=page+1;
more_list.attr('page',page);
}else{
more_list.append('<div class="jinsom-empty-page">没有更多记录</div>'); 
}
$('.jinsom-load').remove();
}
});
}
}

});

}); 

//支出记录
myApp.onPageBeforeInit('outlay', function (page) {
window.history.pushState(null,null,'?outlay&r='+Math.random().toString(36).substr(2,5));
//滚动事件
$('.jinsom-recharge-note-content').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度
if(contentH - viewH - scrollTop-navbarH <20){ //到达底部时,加载新内容
if($('.jinsom-recharge-note-content .jinsom-loading').length==0&&$('.jinsom-recharge-note-content .jinsom-empty-page').length==0){
more_list=$('.jinsom-chat-user-list.recharge-note');
page=parseInt(more_list.attr('page'));
type=more_list.attr('type');
more_list.after(jinsom.loading);
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/note/credit.php",
data: {page:page,type:type},
success: function(msg){
if(msg.code!=0){  

html='';
for (var i = msg.data.length - 1; i >= 0; i--){
html+='\
<li>\
<div class="item-content">\
<div class="item-media">\
'+msg.data[i].avatar+'\
</div>\
<div class="item-inner">\
<div class="item-title">\
<div class="name">'+msg.data[i].content+'</div>\
<div class="desc">'+msg.data[i].time+'</div>\
</div>\
</div>\
<div class="item-after out">-'+msg.data[i].number+'</div>\
</div>\
</li>';
}
more_list.append(html);
page=page+1;
more_list.attr('page',page);
}else{
more_list.append('<div class="jinsom-empty-page">没有更多记录</div>'); 
}
$('.jinsom-load').remove();
}
});
}
}

});

}); 



//充值记录
myApp.onPageBeforeInit('recharge-note', function (page) {
window.history.pushState(null,null,'?recharge-note&r='+Math.random().toString(36).substr(2,5));
//滚动事件
$('.jinsom-recharge-note-content').scroll(function(){
navbarH=$('.navbar').height();
viewH =Math.round($(this).height()),//可见高度
contentH =$(this).get(0).scrollHeight,//内容高度
scrollTop =$(this).scrollTop();//滚动高度
if(contentH - viewH - scrollTop-navbarH <20){ //到达底部时,加载新内容
if($('.jinsom-recharge-note-content .jinsom-loading').length==0&&$('.jinsom-recharge-note-content .jinsom-empty-page').length==0){
more_list=$('.jinsom-chat-user-list.recharge-note');
page=parseInt(more_list.attr('page'));
type=more_list.attr('type');
more_list.after(jinsom.loading);
$.ajax({
type: "POST",
url:  jinsom.mobile_ajax_url+"/note/credit.php",
data: {page:page,type:type},
success: function(msg){
if(msg.code!=0){  

html='';
for (var i = msg.data.length - 1; i >= 0; i--){
html+='\
<li>\
<div class="item-content">\
<div class="item-media">\
'+msg.data[i].avatar+'\
</div>\
<div class="item-inner">\
<div class="item-title">\
<div class="name">'+msg.data[i].content+'</div>\
<div class="desc">'+msg.data[i].time+'</div>\
</div>\
</div>\
<div class="item-after">+'+msg.data[i].number+'</div>\
</div>\
</li>';
}
more_list.append(html);
page=page+1;
more_list.attr('page',page);
}else{
more_list.append('<div class="jinsom-empty-page">没有更多记录</div>'); 
}
$('.jinsom-load').remove();
}
});
}
}

});

}); 



//活动报名表单
myApp.onPageAfterAnimation('activity-form', function (page) {


$('.jinsom-upload-activity-form-1 input').change(function(){
$(".jinsom-upload-activity-form-1").ajaxSubmit({
dataType:'json',
success:function(msg){
if(msg.code==0){
layer.open({content:msg.msg,skin:'msg',time:2});	
}
$(".jinsom-upload-activity-form-1").parent().hide().next().val(msg.url).show();
}, 
error:function(){
layer.open({content:'上传失败！',skin:'msg',time:2});
} 
});
});

$('.jinsom-upload-activity-form-2 input').change(function(){
$(".jinsom-upload-activity-form-2").ajaxSubmit({
dataType:'json',
success:function(msg){
if(msg.code==0){
layer.open({content:msg.msg,skin:'msg',time:2});	
}
$(".jinsom-upload-activity-form-2").parent().hide().next().val(msg.url).show();
}, 
error:function(){
layer.open({content:'上传失败！',skin:'msg',time:2});
} 
});
});

$('.jinsom-upload-activity-form-3 input').change(function(){
$(".jinsom-upload-activity-form-3").ajaxSubmit({
dataType:'json',
success:function(msg){
if(msg.code==0){
layer.open({content:msg.msg,skin:'msg',time:2});	
}
$(".jinsom-upload-activity-form-3").parent().hide().next().val(msg.url).show();
}, 
error:function(){
layer.open({content:'上传失败！',skin:'msg',time:2});
} 
});
});


});

//任务
myApp.onPageBeforeInit('task', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//宝箱任务
myApp.onPageBeforeInit('task-treasure', function (page) {
window.history.pushState(null,null,'/?'+page.name+'&r='+Math.random().toString(36).substr(2,5));
});

//任务事件
myApp.onPageAfterAnimation('task', function (page) {
$('#jinsom-task-navbar-center span').click(function(){
$(this).addClass('on').siblings().removeClass('on');
$('.jinsom-task-form-content').find('ul').eq($(this).index()).show().siblings().hide();
});
});