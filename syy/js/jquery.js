var base ="/blog_suiyeyuan/blog-web/static/"
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    )
    document.querySelector('head').appendChild(msViewportStyle)
}
if(navigator.userAgent.toLowerCase().indexOf('msie') >= 0){
    document.write('<script type="text/javascript" src="'+base+'/js/jquery-1.11.3.js" ><\/script>')
}else{
    document.write('<script type="text/javascript" src="'+base+'/js/jquery-2.1.4.js" ><\/script>')
}
