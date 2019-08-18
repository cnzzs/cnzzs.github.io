/**
 * Created by egzosn on 2019/8/17.
 */
function init() {
    var request = new GetRequest();
    if (null != request.title) {
        request.title = decodeURIComponent(decodeURIComponent(request.title));
        document.title = request.title + "|" + document.title;
    }
    if (null != request["type"]) {
        $('#main').load(request["type"] + ".html");
    }
}
init();
$(function () {

    $(".nav-menu").click(function () {
        setTimeout(function () {
            init();
        }, 10)

    })
})
