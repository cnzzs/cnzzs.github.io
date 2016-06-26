var request = new GetRequest();
if(!request.createTime){
    request.createTime = ""
}
if(null == request["type"]){
    request["type"] = "newest";
}else if(null == request["id"]){
    if(null == request.title){
        request.title =  request["type"];
    }
    request.title = decodeURIComponent(decodeURIComponent(request.title));
    document.title =  request.title + "|" + document.title;
    $('#title').html( drawing($('#title').html(), request))
}

if(null != request["outCode"]){
  /*  $.ajax({
        url : "http://67933.site.booen.com/article.php?articleLabel=" + request["outCode"],
        type : "get",
        success : function(data) {
            console.log(data)
        }});*/

}else if(null != request["id"]){
    request.title = decodeURIComponent(decodeURIComponent(request.title));
    document.title =  request.title + "|" + document.title;
    $('#title').html( drawing($('#title').html(), request))
    $('#article-content').load( base + formatString2Map("/article/({type})/({id}).html", request));
}



