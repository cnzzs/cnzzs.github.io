function getContent(i_data,i_success,i_error){
	$.ajax({
		url: url,
		type: "GET",
		data: i_data,
		dataType: 'json',
		success: function(data){
			
			if (data.Msg == 'Success'){
				i_success(data.Info)
			}else{
				i_error();
			}
		},
		error: function(){
			i_success(datas.Info)
		}
	})
}
var datas=JSON.parse('{"Info":{"Post":{"1":{"imgsrc":"../images/Poster-Img-1.png","url":"###","postname":"活动名称1","postintro":"活动介绍2，活动介绍2，活动介绍2"},"2":{"imgsrc":"../images/Poster-Img-2.png","url":"###","postname":"活动名称2","postintro":"活动介绍2，活动介绍2，活动介绍2"},"3":{"imgsrc":"../images/Poster-Img-3.png","url":"###","postname":"活动名称3","postintro":"活动介绍2，活动介绍2，活动介绍2"},"4":{"imgsrc":"../images/Poster-Img-4.png","url":"###","postname":"活动名称4","postintro":"活动介绍2，活动介绍2，活动介绍2"}},"Content":[[{"id":0,"title":"2013年五一放假通知"},{"id":1,"title":"关于组织选拔参加第十三届..."},{"id":2,"title":"2013届毕业生大型校园招聘会"},{"id":3,"title":"第二届“十佳大学生”评选活动"},{"id":4,"title":"2012年五四青年节停课通知"},{"id":5,"title":"2012年五一节放假通知"},{"id":6,"title":"2012年清明节调/停课安排通知"},{"id":7,"title":"学生干部换届竞选方案"},{"id":8,"title":"挑战杯竞赛报名表"},{"id":9,"title":"课外学术科技作品竞赛作品征集"}],[{"id":100,"title":"2013年五一放假通知"},{"id":101,"title":"关于组织选拔参加第十三届..."},{"id":102,"title":"2013届毕业生大型校园招聘会"},{"id":103,"title":"第二届“十佳大学生”评选活动"},{"id":104,"title":"2012年五四青年节停课通知"},{"id":105,"title":"2012年五一节放假通知"},{"id":106,"title":"2012年清明节调/停课安排通知"},{"id":107,"title":"学生干部换届竞选方案"},{"id":108,"title":"挑战杯竞赛报名表"},{"id":109,"title":"课外学术科技作品竞赛作品征集"}],[{"id":200,"title":"2013年五一放假通知"},{"id":201,"title":"关于组织选拔参加第十三届..."},{"id":202,"title":"2013届毕业生大型校园招聘会"},{"id":203,"title":"第二届“十佳大学生”评选活动"},{"id":204,"title":"2012年五四青年节停课通知"},{"id":205,"title":"2012年五一节放假通知"},{"id":206,"title":"2012年清明节调/停课安排通知"},{"id":207,"title":"学生干部换届竞选方案"},{"id":208,"title":"挑战杯竞赛报名表"},{"id":209,"title":"课外学术科技作品竞赛作品征集"}],[{"id":300,"title":"2013年五一放假通知"},{"id":301,"title":"关于组织选拔参加第十三届..."},{"id":302,"title":"2013届毕业生大型校园招聘会"},{"id":303,"title":"第二届“十佳大学生”评选活动"},{"id":304,"title":"2012年五四青年节停课通知"},{"id":305,"title":"2012年五一节放假通知"},{"id":306,"title":"2012年清明节调/停课安排通知"},{"id":307,"title":"学生干部换届竞选方案"},{"id":308,"title":"挑战杯竞赛报名表"},{"id":309,"title":"课外学术科技作品竞赛作品征集"}]],"Showtime":{"page1":{"img2":{"Id":401,"Imageurl":"../images/show/IMG (2).jpg","Title":"标题4-0","Big":true},"img3":{"Id":402,"Imageurl":"../images/show/IMG (3).jpg","Title":"标题4-2","Big":false},"img4":{"Id":403,"Imageurl":"../images/show/IMG (4).jpg","Title":"标题4-3","Big":false},"img5":{"Id":404,"Imageurl":"../images/show/IMG (5).jpg","Title":"标题4-4","Big":false},"img6":{"Id":405,"Imageurl":"../images/show/IMG (6).jpg","Title":"标题4-5","Big":false},"img7":{"Id":406,"Imageurl":"../images/show/IMG (7).jpg","Title":"标题4-6","Big":true}},"page2":{"img2":{"Id":407,"Imageurl":"../images/show/IMG (2).jpg","Title":"标题4-7","Big":false},"img3":{"Id":408,"Imageurl":"../images/show/IMG (3).jpg","Title":"标题4-8","Big":false},"img4":{"Id":409,"Imageurl":"../images/show/IMG (4).jpg","Title":"标题4-9","Big":true},"img5":{"Id":410,"Imageurl":"../images/show/IMG (5).jpg","Title":"标题4-10","Big":true},"img6":{"Id":411,"Imageurl":"../images/show/IMG (6).jpg","Title":"标题4-11","Big":false},"img7":{"Id":412,"Imageurl":"../images/show/IMG (7).jpg","Title":"标题4-12","Big":false}}}},"Msg":"Success"}');
function posttest(data) {
	var ol = ""
	var str = "";
	var num = 0;
	for (var key in data) {
		ol += '<li data-target="#carousel-example-captions" data-slide-to="'+num+'" class="'+(num == 0?'active':'')+'"></li>';
		str+='<div class="item'+(num == 0?' active':'')+'">'+'<img src="'+data[key].imgsrc+'" alt="'+data[key].postname+'"><div class="carousel-caption"><h3>'+data[key].postname+'</h3><p>'+data[key].postintro+'</p></div></div>';
		num ++;
	}
	$('.js-post-ol').html(ol);
	$('.js-post-img').html(str);
}

var group = ["校园公告", "思想引领", "服务青年成才", "下载文档","精彩瞬间"];
var au=JSON.parse('[{"origin":"软件学院","author":"DLLL","visitor":1233},{"origin":"软件学院","author":"ZZZS","visitor":4235},{"origin":"招生就业培训中心","author":"DLLL","visitor":1913},{"origin":"东南网","author":"WR","visitor":1543},{"origin":"软件学院","author":"ZZZS","visitor":4235},{"origin":"招生就业培训中心","author":"DLLL","visitor":1913},{"origin":"东南网","author":"WR","visitor":1543},{"origin":"软件学院","author":"ZZZS","visitor":4235},{"origin":"招生就业培训中心","author":"DLLL","visitor":1913},{"origin":"东南网","author":"WR","visitor":1543}]');
var groups = null;
function postdata(data) {
	var list_group = $(".list-group");
	var num = 0;
	groups = data;
	for (var key in groups) {
		num = 0;
		var html = '<span class="list-group-item bs-item-title" onclick="show(' + key + ',-1)">' + group[key] + '</span>';
		for (var k in groups[key]) {
			if (num > 9)
				break;
			html += '<a onclick="show(' + key + ',' + groups[key][k].id + ')" class="list-group-item">' + groups[key][k].title + '</a>';
			num ++;
		}
		for (var i = num; i <= 9; i++) {
			html += '<span class="list-group-item">&nbsp;</span>';
		};
		$(list_group[key]).html(html);
	}
}

!function($) {
	$(function() {
		 textFlag=true;
		 testShare=true;
		$('.js-banner-search').click(function(){
			
			$('.js-banner-tags').fadeOut(150);
			$('.js-banner-share').fadeOut(150);
			$('.js-banner-tui').css("display","block");
			
			if(textFlag){
				$('.js-banner-search').css('float','left');
 				textFlag=false;
				// $('.js-banner-search').html('<input type="text" id="text-share" style="width:60%;float: right;" />');
				$('#text-share').css("display","block")
			}
			$(this).parent().animate({
				'width':'30%',
				'background-color':'#000'
			},300);
			
		})



		$('.js-banner-tui').click(function(){
			if (!textFlag){
				textFlag=true;
				$('#text-share').css("display","none");
			}
			if(!testShare){
				testShare=true;
				$('.icon-medium').css("display","none")
			}

			$('.js-banner-tags').fadeIn(150);
			$('.js-banner-share').fadeIn(150);
			$('.js-banner-search').fadeIn(150);
			$('.js-banner-tui').css("display","none");
			$(this).parent().animate({
				'width':'5rem',
				'background-color':'#000'
			},300);

		})


		$('.js-banner-tags').click(function(){

		})



	
		$('.js-banner-share').click(function(){
			$('.js-banner-tags').fadeOut(150);
			$('.js-banner-search').fadeOut(150);
			if (testShare) {
				testShare=false;
				// $(this).parent().append('<div class="bshare-custom icon-medium"><div class="bsPromo bsPromo2"></div><a title="分享到一键通" class="bshare-bsharesync" href="javascript:void(0);"></a><a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a><a title="分享到QQ空间" class="bshare-qzone"></a><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><a title="分享到人人网" class="bshare-renren"></a><a title="分享到腾讯微博" class="bshare-qqmb"></a><a title="分享到网易微博" class="bshare-neteasemb"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a></div>');
				$('.icon-medium').css("display","block");
				$('.js-banner-share').css('float','left')
			};
			// $(this).parent().append('<div class="bshare-custom icon-medium"><div class="bsPromo bsPromo2"></div><a title="分享到一键通" class="bshare-bsharesync" href="javascript:void(0);"></a><a title="分享到QQ好友" class="bshare-qqim" href="javascript:void(0);"></a><a title="分享到QQ空间" class="bshare-qzone"></a><a title="分享到新浪微博" class="bshare-sinaminiblog"></a><a title="分享到人人网" class="bshare-renren"></a><a title="分享到腾讯微博" class="bshare-qqmb"></a><a title="分享到网易微博" class="bshare-neteasemb"></a><a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a></div>');
			$('.js-banner-tui').css("display","block");
			$(this).parent().animate({
				'width':'25%',
				'background-color':'#000'
			},300);
		});
	})
}(jQuery)


