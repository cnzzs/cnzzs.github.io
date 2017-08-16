var issmall  = false;
var l_width  = $(window).width();
var l_height = $(window).height();
var isshowed = false;
function resize(){
	l_width         = $(window).width();
	l_height        = $(window).height();
	var l_left_top  = $('.margin-fix').offset().top - this.pageYOffset;
	var l_right_top = l_left_top;

	if (l_width > 768){
		issmall = false;
		$('.bs-contents-container').css({
			'width':  l_width*0.9,
			'height': l_height*0.9,
			'margin-top': l_height*0.05,
			'margin-left': l_width*0.05
		});
		$('.bs-contents-background').css({
			'width':  l_width,
			'height': l_height,
		});
		$('.bs-contents-left-list').css({
			'width':  l_width*0.225+21
		});
		$('.bs-contents-background').css({
			'width':  l_width,
			'height': l_height,
		});
		$('.bs-contents-ul').css({
			'height': l_height*0.95-l_left_top-30
		});
		$('.bs-contents-left-scoll').css({
			'height': l_height*0.9,
			'margin-left': l_width*0.225-3
		});
		$('.bs-contents-right-content').css({
			'height': l_height*0.95-l_right_top-22
		});
	}else{
		if (issmall == true)
			return;
		issmall = true;
		$('.bs-contents-container').css({
			'width':  'inherit',
			'height': 'inherit',
			'margin-top': 0,
			'margin-left': 0
		});
		$('.bs-contents-background').css({
			'width':  'inherit',
			'height': 'inherit',
		});
		$('.bs-contents-left-list').css({
			'width':  'inherit'
		});
		$('.bs-contents-background').css({
			'width':  'inherit',
			'height': 'inherit',
		});
		$('.bs-contents-ul').css({
			'height': 'inherit'
		});
		$('.bs-contents-left-scoll').css({
			'height': 'inherit',
			'margin-left': 'inherit'
		});
		$('.bs-contents-right-content').css({
			'height': 'inherit'
		});
		$('.bs-contents-container').css({
			'-webkit-transform':'rotateY(0deg) rotatex(0deg)'
		})
	}
	
}

$(window).resize(function() {
	resize();
	imgresize();
});

var classanimate = function(){
	$('.bs-contents-left-class-ul').animate({
		'width' : '60%'
	},600);

	$('.bs-contents-left-class-ul li:not([class="active"])').animate({
		'opacity' : '0',
		'border-radius': '5px',
		'min-height': '0px',
		'height': '0px',
		'padding': '0'
	},600);

	$('.bs-contents-left-class-ul li[class="active"]').animate({
		'opacity' : '0.8',
		'border-radius': '5px',
		'min-height': $('.bs-contents-left-title').outerHeight(true),
		'box-shadow: ':'0.2rem 0.2rem 1rem #525252'
	},300,function(){
		$('.bs-contents-left-class-ul').animate({
			'width' : '100%'
		},200);
		$(this).animate({
			'padding': '2rem'
		},200,function(){
			$('.bs-contents-left-class').animate({
				'opacity': '0'
			},800,function(){
				$(this).css('display','none');
			});
		});
		$(this).css({
			'text-align': 'center',
			'text-shadow': '0.2rem 0.1rem 0.4rem #565252'
		});
	});
}

function showbox(){
	var imgarr = $(".bs-contents-right-content img");
	if (imgarr.length != 0){
		imgarr.each(function(){
			$(this).load(function() {
				var width = this.naturalWidth;
				if (width > 1024)
					width = 1024
				$(this).animate({ 
					'max-width': width,
					'opacity': 1
				}, 500);
			});
		})
	}

	$(window).bind("scroll", function(){ 
		if(issmall){
			var concent = $('.bs-contents-background')[0];
			var l_height = $(window).height();
			if (this.pageYOffset > concent.scrollHeight - l_height){
				console.log($(concent));
				$(concent).css({
					'margin-top': this.pageYOffset - concent.scrollHeight + l_height
				});

			}
		}
	});
	setTimeout(function(){
		resize();
	},50)
	$(window).resize(function() {
		resize();
	});

	var in_animate = false;
	var animate_stop = false;
	var animatethread = null;
	var opacity = 0;
	$('.bs-contents-left-title').mouseover(function(){
		in_animate = true;
		animate_stop = false;
		var plus = 0;
		if (animatethread != null)
			return;
		animatethread = setInterval(function(){
			if (animate_stop)
				plus = -0.03; //关闭值
			else if (opacity >= 1)
				plus = -0.01; //下降值
			else if (opacity <= 0.5)
				plus = 0.03; //上升值
			opacity+=plus;

			$('.bs-contents-left-title').css({
				'background-image': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0px, rgba(0, 255, 231, '+opacity+') 50%, rgba(255, 255, 255, 0) 100%)'
			})
			if (!in_animate){
				clearInterval(animatethread);
				in_animate = false;
				animatethread = null;
			}
			if (opacity <= 0){
				clearInterval(animatethread);
				$('.bs-contents-left-title').removeAttr("style");
				in_animate = false;
				animatethread = null;
			}
		},30);
	});
	$('.bs-contents-left-title').mouseleave(function(){
		animate_stop = true;
	})
	$('.bs-contents-left-title').click(function(){
		return;
		in_animate = false;
		$('.bs-contents-left-class').css('display','block');
		
		$('.bs-contents-left-class').animate({
			'opacity': '1'
		},500,function(){
			$('.bs-contents-left-class-ul').animate({
				'width' : '60%'
			},500);
			$('.bs-contents-left-class-ul li').animate({
				'opacity' : '1',
				'border-radius': '0px',
				'min-height': l_height*0.9/5+'px',
				'height': l_height*0.9/5+'px',
				'padding': ((l_height*0.9/5)*0.35)+'px 0px'
			},300,function(){
				if (!in_animate){
					in_animate =true;
					$('.bs-contents-left-class-ul').animate({
						'width' : '100%'
					},300,function(){
						in_animate =false;

					});
				}

			});
		});
	})

	$('.bs-contents-left-class-ul li').click(function(){
		$('.bs-contents-left-class-ul li[class="active"]').removeClass("active");
		$($('.bs-contents-left-class-ul li:eq('+Class+')')).addClass("active");
		$('.bs-contents-left-title').unbind();
		show(Class,1);
		showbox();
		console.log("255");
	});

	$('.bs-contents-background').fadeIn(function(){
		resize();
		setTimeout(classanimate,100);
	});
	$('.bs-contents-background').mousemove(function(m){
		if (!issmall){
			$('.bs-contents-container').css({
				'-webkit-transform':'rotateY('+((l_width/2 - m.clientX)/l_width*4)+'deg) rotatex('+(-((l_height/2 - m.clientY)/l_height*4))+'deg)'
			});
		}
	});
	isshowed = true;
}

function hiddenbox(){
	$(window).unbind('resize');
	$('.bs-contents-background').unbind('mousemove');
	$('.bs-contents-background').fadeOut(500,function(){
		$('.bs-contents-container *').removeAttr("style");
		$('.bs-contents-container').removeAttr("style");
	});
	isshowed = false;
	window.location.hash = '###';

}
function genlist(Class) {
	/*<li class="active">校园公告</li>*/
	var html='';
	for(var key in group)
	{
		html+='<li'+(key==Class?' class="active"':"")+' onClick="showItem('+key+')" style="cursor: pointer;" >'+group[key]+'</li>'
	}
	
	
	$(".bs-contents-left-class-ul").html(html);
}
function show(Class,ID){
	window.location.hash = '#child-' + Class + '-' + ID;
	console.log("ID:"+ID);
	if (group[Class] == null )
		return;
	$(".bs-contents-left-title").text(group[Class]);
	if (!isshowed) {
		genlist(Class);
		showbox();
		
	}
	var listhtml = '';
	$(groups[Class]).each(function(){
		listhtml += '<li '+(ID == this.id ? 'class="active"' : 'onclick="show('+Class+','+this.id+')"')+'>'+ this.title +'</li>';
	})
	$(".bs-contents-ul").html(listhtml);
	if(ID==-1)
	{
		ID=0;
		$('.bs-contents-ul li:eq(0)').addClass("active");
	}	
	$('.bs-contents-right-title').text($('.bs-contents-ul li[class="active"]').text());
	 $('.bs-contents-right-info').text('来源:' + au[ID%10].origin + ' 作者:' +  au[ID%10].author + ' 创建时间:' + new Date().toLocaleString() + ' 点击次数:' + (++au[ID%10].visitor));
	/*

	*/
	

	 $('.bs-contents-right-content').html("这个是文章标题："+$('.bs-contents-ul li[class="active"]').text()+"<br/>这是测试的页面。所需生成的ID为:"+ID+"隶属:"+group[Class]);
		
	// postError(parentId, childId, 0);
		
	
	$('.bs-contents-left-class-ul li').css('min-height',((l_height*0.9)/5)+'px');

	// getContent(
	// 	{
	// 		"action": 'getList',
	// 		"page": Class
	// 	}, function(data) {
	// 		$('.bs-contents-right-title').text(data.title);
	// 		$('.bs-contents-right-info').text('来源:' + data.au.origin + ' 作者:' + data.au.author + ' 创建时间:' + data.au.date + ' 点击次数:' + data.au.visitor);
	// 		$('.bs-contents-right-content').html(data.content);
	// 	}, function() {
	// 		postError(parentId, childId, 0);
	// 	}
	// );

}

$('.bs-contents-background').fadeOut(0);
