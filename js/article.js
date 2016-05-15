var request = new GetRequest();
if(null == request["type"]){
    request["type"] = "newest";
}
if(null != request["id"]){
    $('#content').load(ctx + formatString2Map("/article/({type})/({id}).html", request));
}
