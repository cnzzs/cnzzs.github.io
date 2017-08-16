<?PHP
header("Access-Control-Allow-Origin:*");
$action = $_GET['action'];
if ($action == 'getBody'){
	
	echo '{"Info":{"Post":{"1":{"imgsrc":"../images/Poster-Img-1.png","url":"###","postname":"活动名称1","postintro":"活动介绍2，活动介绍2，活动介绍2"},"2":{"imgsrc":"../images/Poster-Img-2.png","url":"###","postname":"活动名称2","postintro":"活动介绍2，活动介绍2，活动介绍2"},"3":{"imgsrc":"../images/Poster-Img-3.png","url":"###","postname":"活动名称3","postintro":"活动介绍2，活动介绍2，活动介绍2"},"4":{"imgsrc":"../images/Poster-Img-4.png","url":"###","postname":"活动名称4","postintro":"活动介绍2，活动介绍2，活动介绍2"}},"Content":[[{"id":0,"title":"2013年五一放假通知"},{"id":1,"title":"关于组织选拔参加第十三届..."},{"id":2,"title":"2013届毕业生大型校园招聘会"},{"id":3,"title":"第二届“十佳大学生”评选活动"},{"id":4,"title":"2012年五四青年节停课通知"},{"id":5,"title":"2012年五一节放假通知"},{"id":6,"title":"2012年清明节调/停课安排通知"},{"id":7,"title":"学生干部换届竞选方案"},{"id":8,"title":"挑战杯竞赛报名表"},{"id":9,"title":"课外学术科技作品竞赛作品征集"}],[{"id":100,"title":"2013年五一放假通知"},{"id":101,"title":"关于组织选拔参加第十三届..."},{"id":102,"title":"2013届毕业生大型校园招聘会"},{"id":103,"title":"第二届“十佳大学生”评选活动"},{"id":104,"title":"2012年五四青年节停课通知"},{"id":105,"title":"2012年五一节放假通知"},{"id":106,"title":"2012年清明节调/停课安排通知"},{"id":107,"title":"学生干部换届竞选方案"},{"id":108,"title":"挑战杯竞赛报名表"},{"id":109,"title":"课外学术科技作品竞赛作品征集"}],[{"id":200,"title":"2013年五一放假通知"},{"id":201,"title":"关于组织选拔参加第十三届..."},{"id":202,"title":"2013届毕业生大型校园招聘会"},{"id":203,"title":"第二届“十佳大学生”评选活动"},{"id":204,"title":"2012年五四青年节停课通知"},{"id":205,"title":"2012年五一节放假通知"},{"id":206,"title":"2012年清明节调/停课安排通知"},{"id":207,"title":"学生干部换届竞选方案"},{"id":208,"title":"挑战杯竞赛报名表"},{"id":209,"title":"课外学术科技作品竞赛作品征集"}],[{"id":300,"title":"2013年五一放假通知"},{"id":301,"title":"关于组织选拔参加第十三届..."},{"id":302,"title":"2013届毕业生大型校园招聘会"},{"id":303,"title":"第二届“十佳大学生”评选活动"},{"id":304,"title":"2012年五四青年节停课通知"},{"id":305,"title":"2012年五一节放假通知"},{"id":306,"title":"2012年清明节调/停课安排通知"},{"id":307,"title":"学生干部换届竞选方案"},{"id":308,"title":"挑战杯竞赛报名表"},{"id":309,"title":"课外学术科技作品竞赛作品征集"}]],"Showtime":{"page1":{"img2":{"Id":401,"Imageurl":"../images/show/IMG (2).jpg","Title":"标题4-0","Big":true},"img3":{"Id":402,"Imageurl":"../images/show/IMG (3).jpg","Title":"标题4-2","Big":false},"img4":{"Id":403,"Imageurl":"../images/show/IMG (4).jpg","Title":"标题4-3","Big":false},"img5":{"Id":404,"Imageurl":"../images/show/IMG (5).jpg","Title":"标题4-4","Big":false},"img6":{"Id":405,"Imageurl":"../images/show/IMG (6).jpg","Title":"标题4-5","Big":false},"img7":{"Id":406,"Imageurl":"../images/show/IMG (7).jpg","Title":"标题4-6","Big":true}},"page2":{"img2":{"Id":407,"Imageurl":"../images/show/IMG (2).jpg","Title":"标题4-7","Big":false},"img3":{"Id":408,"Imageurl":"../images/show/IMG (3).jpg","Title":"标题4-8","Big":false},"img4":{"Id":409,"Imageurl":"../images/show/IMG (4).jpg","Title":"标题4-9","Big":true},"img5":{"Id":410,"Imageurl":"../images/show/IMG (5).jpg","Title":"标题4-10","Big":true},"img6":{"Id":411,"Imageurl":"../images/show/IMG (6).jpg","Title":"标题4-11","Big":false},"img7":{"Id":412,"Imageurl":"../images/show/IMG (7).jpg","Title":"标题4-12","Big":false}}}},"Msg":"Success"}';
}elseif ($action == 'getContent') {
	$array = array(
		'title' => '测试正标题'.$_GET['id'],
		'au'=>array(
			'origin'=>'测试',
			'author'=>'DLLL',
			'date'=>date('Y-m-d H:i:s'),
			'visitor'=>(int)(rand()*100)
		),
		'content'=>'这是测试的页面。所需生成的ID为:'.$_GET['id'].',page:'.$_GET['page']
	);
	echo json_encode(array('Msg'=>'Success','Info'=>$array));
}
exit;
?>