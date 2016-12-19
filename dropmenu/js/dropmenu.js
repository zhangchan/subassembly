$(function() {


	//函数
	function dropList(event) {
		event.stopPropagation();
		console.log($(this))
		if(!$(this).parents(".dropdown").length) {
			$(".dropdown-menu").hide();
		}else{
			if($(this).attr("type")=="text" || $(this).hasClass('caret')){
				$(this).parent().siblings('ul.dropdown-menu').show();
			}else if(this.nodeName == "LI"){
				var txt = $.trim($(this).text());
				$(this).parent().siblings('.dropdown-btn').find('input').val(txt);
				$(this).parent().hide();
			}
		}
	}

	//动作
	$("html").on('click',"*", dropList);
})