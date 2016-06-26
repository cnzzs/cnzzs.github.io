var request = new GetRequest();
if(null == request["type"]){
    request["type"] = "newest";
}else{
    request.name = decodeURIComponent(decodeURIComponent(request.name));
    console.log(request.name)
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
    $('#content').load( formatString2Map("/article/({type})/({id}).html", request));
}



