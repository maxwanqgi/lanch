$(function() {
	var index = 0;
	var focusIndex = 0;   //当前显示的大列表
	var navFocus = true;  //导航获取焦点
	var listFocus = true; //下方大的列表获取焦点
	var isMoveing = true;  //如果在运动中就什么也不做
	var isShow = false;
	var i = 0;
	
	$(document).keydown(function (e) {
		var keycode = e.keyCode;
		
		switch (keycode){
			case 39:
				if (navFocus == true) {
					listFocus = false;
					moveToRight()
				}
/*				if (navFocus == false) {
					listFocus = true;
					i+=1;
					if (index == 0 || index == 1) {
						if (i == 1) {
							i = 4
						}
						
						focusMove()
					}
					
				}*/
				
				break;
			case 37:
			
				if (navFocus == true) {
					moveToLeft()
				}
				/*if (navFocus == false) {
					listFocus = true;
					i-=1;
					if (index == 0 || index == 1) {		
						focusMove()
					}
					
				}*/
				break;
			case 38:
				
				break;
			case 40:
				navFocus = false;
				if (isShow == false) {
					focusShow();
					isShow = true;
				}
				
				break;
			default:
				break;
		}
	})
	
	
	
	//菜单向右移动
	function moveToRight () {
		if (isMoveing == true) {
			isMoveing = false;
			//listFocus = false;		
			index ++;
			if (index > 4) {
				index = 0;
				focusIndex = 4;
			}
			move();
			
			focusIndex = index;
			//console.log(index + '---' + focusIndex);
			$('#nav .navMenu'+index).css({'color':'yellow'}).stop().animate({
				'font-size':'30px'	
			},200,function() {
				isMoveing = true;
			}).siblings().css('color','#fff').stop().animate({
				'font-size':'20px'
			},200,function () {
				isMoveing = true
			})
	
		}
		
	}
	
	//菜单向左移动
	function moveToLeft () {
		if (isMoveing == true) {
			//listFocus = false;	
			isMoveing = false
			index --;
			if (index < 0) {
				index = 4;
				focusIndex = 0;
			}
			move();
			focusIndex = index;
			//console.log(index + '---' + focusIndex);
			$('#nav .navMenu'+index).css('color','yellow').stop().animate({
				'font-size':'30px'				
			},200,function() {
				isMoveing = true;
			}).siblings().css('color','#fff').stop().animate({
				'font-size':'20px'
			},200,function () {
				isMoveing = true
			})		
		}
	}
	
	//菜单选项焦点框事件
	function focusShow () {
		$('#menu_wraper .focus-div').eq(index).css({
			'display':'block',
			'width':$('.focus-div').eq(index).parent().children('div').eq(0).width() -10+ 'px',
			'height':$('.focus-div').eq(index).parent().children('div').eq(0).height() -10+ 'px',
			'top':$('.focus-div').eq(index).parent().children('div').eq(0).position().top + 'px',
			'left':$('.focus-div').eq(index).parent().children('div').eq(0).position().left + 'px'
		})
	}
	
	//菜单选项焦点框运动事件

	 function focusMove () {	
			
		$('#menu_wraper .focus-div').stop().animate({
			left:'500px',
			width:$('.focus-div').eq(index).parent().children('div').eq(i).width()-10 + 'px',
			'height':$('.focus-div').eq(index).parent().children('div').eq(i).height()-10 + 'px',
			'top':$('.focus-div').eq(index).parent().children('div').eq(i).position().top + 'px',
			'left':$('.focus-div').eq(index).parent().children('div').eq(i).position().left + 'px'
		},200)
	}
			
	//对应菜单切换函数
	function move () {
		if (index == 0 && focusIndex == 4) {
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':'-1200px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css('left','1200px').stop(true,true).animate({
				'left':'0px'
			},200)
		}else if(index == 4 && focusIndex == 0) {  //最后一张图片
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':'1200px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css('left','-1200px').stop(true,true).animate({
				'left':'0px'
			},200)
		}else if (index > focusIndex) {  //向左移动
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':'-1200px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css({'left':'1200px'}).stop(true,true).animate({
				'left':'0px'
			},200)
		}else if (index < focusIndex) {  //向右移动
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':'1200px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css({'left':'-1200px'}).stop(true,true).animate({
				'left':'0px'
			},200)
		}
	}
	
})
