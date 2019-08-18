//这个是一个获取地址中参数的包装
function GetRequest() {
	var url = location.hash; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("#") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for ( var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}


/**
 * 
 	var Request=new GetRequest();
	if(Request['validate']=="true")
	{
		alert("处理成功");
	}
	else if("false"==Request['validate']){
	
	alert("处理失败");
	}
 */