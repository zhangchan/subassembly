$(function() {


	//函数
	
	function move(obj) {
		var i= $('.sl_img .cur').index();
		var items = $('.slide').find('.item');
		var lis = $('.slide ul').find('li');
		$('.slide').find('.cur').removeClass('cur');
		if(obj && obj.parent().hasClass('sl_icons')){
			i = obj.index();
		}else if(obj && obj.hasClass('left')){
			i= (i==0 ? items.length : i)-1;
		}else{
			i= i==items.length-1 ? 0 : i+1;
		}
		items.eq(i).addClass('cur');
		lis.eq(i).addClass('cur');
	}
	function evtSlide(){
		if($(this).hasClass('cur')) return;
		move($(this))
	}

	//动作
	var timer = setInterval(move,2000);
	$('.slide').on('click','.left,.right,li', evtSlide);
	$('.slide').hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(move,2000);
	});

})