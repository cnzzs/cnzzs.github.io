var url ='/json.php';
var debug = true;

! function($) {
	$(function() {
		getContent(
			{
				"action": 'getBody'
			}, function(data) {
				posttest(data.Post);
				postdata(data.Content);
				testimg(data.Showtime);
				var hash = window.location.hash.split("-");
				if (hash.length == 3 && hash[0] == '#child'){
					show(hash[1],hash[2]);
				}
				
			}, function() {
				console.log('geterror');
			}
		);
		
	})
}(jQuery)

var currentnum = 0;
var nextnum = 0;
var countpage = 0;
function nextpage(){
	countpage = $('.bs-show-time-page').length;
	if (nextnum == currentnum && currentnum == 0){
		$($('.bs-show-time-page')[0]).css("display","block");
		nextnum ++;
		return;
	}
	if (nextnum >= countpage)
		nextnum = 0;
	$($('.bs-show-time-page')[nextnum]).css({
		"display":"block",
		"opacity":"0"
	});
	$($('.bs-show-time-page')[nextnum]).animate({
		"opacity":"1"
	},500);
	$($('.bs-show-time-page')[currentnum]).animate({
		"opacity":"0"
	},500,function(){
		$(this).css({
			"display":"none"
		});
	});
	
	currentnum = nextnum;
	nextnum ++;
}

function testimg(imgjson){
	var tmp = $('body .container').width();
	var m_width = (tmp-15) / 4;
	var m_height = (tmp / 4) / 16 * 8;
	$('.bs-show-time').width(tmp);
	$('.bs-show-time').height(m_height * 2+5);
	var m_top = 0;
	var m_left = 0;
	tmp = "";
	var g = null;
	var h = new Array();
	for (var key in imgjson){
		var m_top = 0;
		var m_left = 0;
		var x = 0;
		var y = 0
		var i = 0;
		tmp += '<div class="bs-show-time-page show-'+key+'">';
		
		
		for (var k in imgjson[key]) {
			g = new Object();
			g['id'] = imgjson[key][k].Id;
			g['title'] = imgjson[key][k].Title;
			h.push(g);
			if (imgjson[key][k].Big){
				tmp += '<div class="bs-show-time-big" data-tag="'+x+"-"+y+'" onClick="show(4,'+imgjson[key][k].Id+')" style="margin-left:'+m_left+'px;"><div class="bs-show-time-img-title">'+imgjson[key][k].Title+'</div><img class="bs-show-time-big-img" src="'+imgjson[key][k].Imageurl+'" /></div>';
				m_left += m_width+5;
				x++;
			}else{
				tmp += '<div class="bs-show-time-small" data-tag="'+x+"-"+y+'" onClick="show(4,'+imgjson[key][k].Id+')" style="margin-left:'+m_left+'px;margin-top:'+m_top+'px;"><div class="bs-show-time-img-title">'+imgjson[key][k].Title+'</div><img class="bs-show-time-small-img" src="'+imgjson[key][k].Imageurl+'" /></div>';
				m_top += m_height+5;
				y++;
				if (m_top > m_height + 6){
					m_top = 0;
					m_left += m_width+5;
					x++;
					y=0;
				}
			}
			i++;
		}
		
		tmp +="</div>";
	}
	groups[4] = h;
	console.log(groups);
	
	$('.bs-show-time').html(tmp);
	$(".bs-show-time-page").css({
		'display':'none'
	})
	$('.bs-show-time-small').css({
		'width':m_width + 'px',
		'height':m_height + 'px'
	})
	$('.bs-show-time-big').css({
		'width':m_width+'px',
		'height':(m_height * 2+5)+'px'
	})
	$('.bs-show-time-small-img ,.bs-show-time-big-img').load(function(){
		var c_width = this.naturalWidth;
		var c_height = this.naturalHeight;
		var f_width = $(this).parent().width();
		var f_height = $(this).parent().height();
		if (c_height/(c_width/f_width) > f_height){
			$(this).css({
				'width':f_width+'px',
				'margin-top':(-((c_height/(c_width/f_width) - f_height)/2))+'px'
			})
			$(this).animate({
				'opacity': 1
			},300);
		}else{
			$(this).css({
				'height':f_height+'px',
				'margin-left':(-((c_width/(c_height/f_height) - f_width)/2))+'px'
			})
			$(this).animate({
				'opacity': 1
			},300);
		}
	});

	$('.bs-show-time-big ,.bs-show-time-small').mouseover(function(){
		var title = $(this).find('.bs-show-time-img-title');
		$(title).animate({
			'height': '5rem',
			'font-size': '2rem',
			'padding': '1.5rem 0.5rem',
		});
	});

	$('.bs-show-time-big ,.bs-show-time-small').mouseleave(function(){
		var title = $(this).find('.bs-show-time-img-title');
		$(title).stop(true).animate({
			'height': '2rem',
			'font-size': '1.7rem',
			'padding': '0.15rem 0.1rem'
		});
	});

	nextpage();
	setInterval(nextpage,8000);
}

function imgresize(){
	var tmp = $('body .container').width();
	var m_width = (tmp-15) / 4;
	var m_height = (tmp / 4) / 16 * 8;
	$('.bs-show-time').width(tmp);
	$('.bs-show-time').height(m_height * 2+5);
	$('.bs-show-time-small').css({
		'width':m_width + 'px',
		'height':m_height + 'px'
	});
	$('.bs-show-time-big').css({
		'width':m_width+'px',
		'height':(m_height * 2 + 5)+'px'
	});
	$('.bs-show-time-small ,.bs-show-time-big').each(function(){
		var t = $(this).attr('data-tag').split("-");
		if (t.length == 2){
			$(this).css({
				'margin-left':t[0]*m_width+5*t[0]+'px',
				'margin-top': t[1]*m_height+5*t[1]+'px'
			})
		}
	});

	$('.bs-show-time-small-img ,.bs-show-time-big-img').each(function(){
		var c_width = this.naturalWidth;
		var c_height = this.naturalHeight;
		var f_width = $(this).parent().width();
		var f_height = $(this).parent().height();

		if (c_height/(c_width/f_width) > f_height){
			$(this).css({
				'width':f_width+'px',
				'margin-top':(-((c_height/(c_width/f_width) - f_height)/2))+'px'
			});
		}else{
			$(this).css({
				'height':f_height+'px',
				'margin-left':(-((c_width/(c_height/f_height) - f_width)/2))+'px'
			});
		}
	});
}