
	$(function () {
		//clock();
		$("#main").attr("tabindex",0).css('outline','none');
		$("#main").focus();
		
		menuMove();
	})
	
	var index = 0;
	var focusIndex = 0;   //当前显示的大列表
	var navFocus = true;  //导航获取焦点
	var listFocus = true; //下方大的列表获取焦点
	var isMoveing = true;  //如果在运动中就什么也不做
	var isShow = true;    //焦点框只出现一次判定
	var i = 0;				//焦点狂对应的选项的索引值。
	
	
	//菜单切换
	function menuMove () {
		$("#main").keydown(function (e) {
			var keycode = e.keyCode;		
			switch (keycode){
				case 39:
					if (navFocus == true) {
						listFocus = false;
						moveToRight()
					}			
					break;
				case 37:		
					if (navFocus == true) {
						listFocus = false;
						moveToLeft()
					}	
					break;
				case 38:					
					break;
				//对应菜单的第一个子选项出现焦点框
				case 40:
					navFocus = false;	
					focusShow();
					//isShow = false;
					$("#main").blur();
					break;
				default:
					break;
			}
		})
	}
	
	//menu move to right
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
	
	//menu move to left
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
				isMoveing = true;
			})		
		}
	}

	//数字电视界面小选项焦点动画
	$('#menu_wraper .focus-div').eq(0).keydown(function (e) {		
		var keycode0 = e.keyCode;	
		switch (keycode0){				
			//left
			case 37:
				//listFocus = true
				i -= 1;
				if (i == 3) {
					i = 0
				}
				focusMove();			
				//当焦点框在所在界面的左方时，再次按left键，焦点框消失，然后执行menuMove函数，切换到上一个大菜单
				if (i == -1 || i == 5) {							
					focusInit(0);
				}
				break;
			//up
			case 38:
				i -= 7;
				if (i == 0 || i == -1) {
					i = 0
				}
				if (i == 1) {
					i = 4
				}
				if (i == -3) {
					i = 1;
				}
				
				if (i == -2) {
					i = 3
				}
				focusMove();
				//当焦点框在所在界面的上方时，再次按up键，焦点框消失，然后执行menuMove函数，恢复大菜单切换
				if (i == -7 || i == -6 || i == -5 || i == -4) {						
					focusInit(0);
				}
						
				break;
			//right
			case 39:
				i += 1;
						
				if (i == 9) {
					i = 5
				}
				focusMove();
				//当焦点框在所在界面的右方时，再次按right键，焦点框消失，然后执行menuMove函数，切换到下一个大菜单
				if (i == 4 || i == 6) {							
					focusInit(0);
				}
				break;
			//down
			case 40:
				i += 7;
				//焦点框在界面下方时，不做任何行为！
				if (i == 7) {
					i = 6;
				}
				if (i == 8) {
					i = 4;
				}
				if (i == 9 || i == 10) {
					i = 5;
				}
				if (i == 13) {
					i = 6;
				}
				if (i == 12) {
					i = 5;
				}
				if (i == 14) {
					i = 7;
				}
				if (i == 15) {
					i = 8;
				}
				if (i == 11) {
					i = 8;
				}
				focusMove();
				isShow = false;
				break;
			case 13:
				switch (i){
					case 0:
						alert(i)
						break;
					case 1:
						alert(i)
						break;
					case 2:
						alert(i)
						break;
					case 3:
						alert(i)
						break;
					case 4:
						alert(i)
						break;
					case 5:
						alert(i)
					case 6:
						alert(i)
					case 7:
						alert(i)
						break;
					case 8:
						alert(i)
						break;
					default:
						break;
				}
			default:
				break;
		}
		
	})	
	
	//互动点播界面小选项焦点动画
	$('#menu_wraper .focus-div').eq(1).keydown(function (e) {
		var keycode1 = e.keyCode;
		switch (keycode1){
			case 37:
				i -= 1;
				if (i == 5 || i == 2) {
					i = 0
				}
				focusMove();
				if (i == -1) {							
					focusInit(1);
				}
				break;
			case 38:
				i -= 3;
				if (i == 1) {
					i = 2;
				}
				if (i == 0) {
					i = 1;
				}
				
				focusMove();
				if (i == -3 || i == -2 || i == -1) {
					focusInit(1);
				}
				break;
			case 39:
				//listFocus = true
				i += 1;	
				focusMove();
				if (i == 3 || i == 6 || i ==8) {							
					focusInit(1);
				}
				break;
			case 40:
				i += 3;
				if (i == 3 ) {
					i = 0;
				}
				if (i == 9) {
					i = 6;
				}
				if (i == 10) {
					i = 7;
				}
				if (i == 8) {
					i = 7;
				}
				if (i == 4) {
					i = 3
				}
				focusMove()
				isShow = false;
				break;
			case 13:
				switch (i){
					case 0:
						alert(i)
						break;
					case 1:
						alert(i)
						break;
					case 2:
						alert(i)
						break;
					case 3:
						alert(i)
						break;
					case 4:
						alert(i)
						break;
					case 5:
						alert(i)
					case 6:
						alert(i)
					case 7:
						alert(i)
						break;
					default:
						break;
				}
			default:
				break;
		}
	})
	
	//我的应用界面选项焦点动画
	$('#menu_wraper .focus-div').eq(2).keydown(function (e) {
		var keycode2 = e.keyCode;
		switch (keycode2){
			case 37:
				i -= 1;	
				focusMove();
				if (i == -1 || i == 3) {							
					focusInit(2);
				}
				break;
			case 38:
				i -= 4;
				focusMove();
				if (i == -4 || i == -3 || i == -2 || i == -1) {
					focusInit(2);
				}
				break;
			case 39:
				i += 1;	
				focusMove();
				if (i == 4 || i == 8) {							
					focusInit(2);
				}
				break;
			case 40:
				i += 4;
				
				if(i == 8){ i = 4};
				if(i == 9){ i = 5};
				if(i == 10){ i = 6};
				if(i == 11){ i = 7};
				focusMove();
				isShow = false;
				break;
			case 13:
				switch (i){
					case 0:
						alert(i)
						break;
					case 1:
						alert(i)
						break;
					case 2:
						alert(i)
						break;
					case 3:
						alert(i)
						break;
					case 4:
						alert(i)
						break;
					case 5:
						alert(i)
					case 6:
						alert(i)
					case 7:
						alert(i)
						break;
					default:
						break;
				}
			default:
				break;
		}
	})
	
	//用户中心界面选项焦点动画
	$('#menu_wraper .focus-div').eq(3).keydown(function (e) {
		var keycode3 = e.keyCode;
		switch (keycode3){
			case 37:
				i -= 1;	
				focusMove();
				if (i == -1 || i == 3) {							
					focusInit(3);
				}
				break;
			case 38:
				i -= 4;
				focusMove();
				if (i == -4 || i == -3 || i == -2 || i == -1) {
					focusInit(3);
				}
				break;
			case 39:
				i += 1;	
				focusMove();
				if (i == 4 || i == 8) {							
					focusInit(3);
				}
				break;
			case 40:
				i += 4;
				if(i == 8){ i = 4};
				if(i == 9){ i = 5};
				if(i == 10){ i = 6};
				if(i == 11){ i = 7};
				focusMove();
				isShow = false;
				break;
			case 13:
				switch (i){
					case 0:
						alert(i)
						break;
					case 1:
						alert(i)
						break;
					case 2:
						alert(i)
						break;
					case 3:
						alert(i)
						break;
					case 4:
						alert(i)
						break;
					case 5:
						alert(i)
					case 6:
						alert(i)
					case 7:
						alert(i)
						break;
					default:
						break;
				}	
			default:
				break;
		}
	})	
	
	//系统设置界面选项焦点动画
	$('#menu_wraper .focus-div').eq(4).keydown(function (e) {
		var keycode4 = e.keyCode;
		switch (keycode4){
			case 37:
				i -= 1;	
				focusMove();
				if (i == -1 || i == 3) {							
					focusInit(4);
				}
				break;
			case 38:
				i -= 4;
				focusMove();
				if (i == -4 || i == -3 || i == -2 || i == -1) {
					focusInit(4);
				}
				break;
			case 39:
				i += 1;	
				focusMove();
				if (i == 4 || i == 8) {							
					focusInit(4);
				}
				break;
			case 40:
				i += 4;
				if(i == 8){ i = 4};
				if(i == 9){ i = 5};
				if(i == 10){ i = 6};
				if(i == 11){ i = 7};
				focusMove();
				isShow = false;
				break;
			case 13:
				switch (i){
					case 0:
						alert(i)
						break;
					case 1:
						alert(i)
						break;
					case 2:
						alert(i)
						break;
					case 3:
						alert(i)
						break;
					case 4:
						alert(i)
						break;
					case 5:
						alert(i)
					case 6:
						alert(i)
					case 7:
						alert(i)
						break;
					default:
						break;
				}
			default:
				break;
		}
	})	
	
	//菜单选项焦点框事件
	function focusShow () {
		
		if(isShow == true){
			$('#menu_wraper .focus-div').eq(index).css({
				'display':'block',
				'width':$('.focus-div').eq(index).parent().children('div').eq(0).outerWidth() - 10 + 'px',
				'height':$('.focus-div').eq(index).parent().children('div').eq(0).outerHeight() - 10 + 'px',
				'top':$('.focus-div').eq(index).parent().children('div').eq(0).position().top + 'px',
				'left':$('.focus-div').eq(index).parent().children('div').eq(0).position().left + 'px'
			}).attr("tabindex",0);
			
			$('#menu_wraper .focus-div').eq(index).focus();
		}
	}
	
	function focusInit (n) {
		$('#menu_wraper .focus-div').eq(n).css('display','none');
		navFocus = true;
		$('#menu_wraper .focus-div').eq(n).blur();
		$('#main').focus();
		menuMove();
		isShow = true;
		i = 0;
	}
	
	//菜单选项焦点框运动事件
	 function focusMove () {	
		$('#menu_wraper .focus-div').stop().animate({
			width:$('.focus-div').eq(index).parent().children('div').eq(i).outerWidth() - 10 + 'px',
			height:$('.focus-div').eq(index).parent().children('div').eq(i).outerHeight() - 10 + 'px',
			top:$('.focus-div').eq(index).parent().children('div').eq(i).position().top  + 'px',
			left:$('.focus-div').eq(index).parent().children('div').eq(i).position().left + 'px'
		},200)
	}
	
	//对应菜单切换函数
	function move () {
		var w = $("#menu_wraper").width();
		if (index == 0 && focusIndex == 4) {
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':w*-1 + 'px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css('left',w+'px').stop(true,true).animate({
				'left':'0px'
			},200)
		}else if(index == 4 && focusIndex == 0) { 
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':w+'px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css('left',w *-1 + 'px').stop(true,true).animate({
				'left':'0px'
			},200)
		}else if (index > focusIndex) {  //向左移动
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':w * -1 + 'px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css({'left':w+'px'}).stop(true,true).animate({
				'left':'0px'
			},200)
		}else if (index < focusIndex) {  //向右移动
			$('#menu_wraper .menu-list').eq(focusIndex).stop(true,true).animate({
				'left':w+'px'
			},200)
			$('#menu_wraper .menu-list').eq(index).css({'left':w*-1+'px'}).stop(true,true).animate({
				'left':'0px'
			},200)
		}
	}

