function hideItem(){
	$(".bs-contents-ul li").css({
		'min-height':'0px',
		'opacity': '0',
		'padding':'0',
	
	});
		$(".bs-contents-ul li").animate({
			'min-height': '4.9rem',
			'opacity': '1',
			'padding': '3.5% 5%'
	},1000);
		
		$(".bs-contents-left-title").text();
}


function showItem(Class){
	window.location.hash = '#child-' + Class + '-' +1;
	$('.bs-contents-left-class-ul li[class="active"]').removeClass("active");
	$($('.bs-contents-left-class-ul li:eq('+Class+')')).addClass("active");
	showbox();
}


function titleAnimate(Class,ID)
{
	
	console.log('top:'+$('.bs-contents-ul .active').offset().top);
	
	console.log(groups[Class][ID%10].title);

	var html='<div class="titleAnimate">'+groups[Class][ID%10].title+'</div>';
	
	var active=$('.bs-contents-ul .active');
	active.html(html+active.text());
	$(".titleAnimate").animate(
		{
			'font-size': '2.3rem',
			'left': '58%',
			'top':'50%',
			'padding':"2rem"
		}
		,300,function(){
			
			/*$(".titleAnimate").css(
			{
				'border':'1px solid rgb(228, 176, 13)',
	    		'border-radius': '5px',
	    		'background-color': 'red',
	    		'-webkit-animation':'shake 5s infinite',
	    		'-webkit-animation-direction':'alternate'
			})
			
			getContent({
				"action": 'getContent',
				"page": Class,
				"id": ID
			}, function(data) {
				$('.bs-contents-right-title').text(data.title);
				$('.bs-contents-right-info').text('来源:' + data.au.origin + ' 作者:' + data.au.author + ' 创建时间:' + data.au.date + ' 点击次数:' + data.au.visitor);
				$('.bs-contents-right-content').html(data.content);
			}, function() {
				postError(parentId, childId, 0);
			}
		);*/
		
		}
	);
	
	
}