$(function() {


	//函数
	function initContent(){
		var ul = $(".scrollImg").find('ul');
		var ele = ul.find('li').width() + parseInt(ul.find('li').css("marginRight"))
		ul.width(ul.find('li').length*ele);
	}
	function move(event) {
		if($(this).hasClass('disabled')) return flase;
		var ul = $(this).siblings('ul');
		var left = parseInt(ul.css("marginLeft"));
		var marginR = parseInt(ul.find('li').css("marginRight"))
		var ele = ul.find('li').width() + marginR;
		if($(this).hasClass('moveleft') && left<0){
			left += ele;
		}else if($(this).hasClass('moveright') && ul.width() - Math.abs(left) - marginR > $(this).parent().width()){
			left -= ele;
		}
		$('.moveleft,.moveright').addClass('disabled');
		ul.animate({
			marginLeft: left + "px"
			},500,function(){
				$('.moveleft,.moveright').removeClass('disabled');
			});
	}
	//动作
	initContent();
	$(".scrollImg").on('click', '.moveleft,.moveright', move);


})