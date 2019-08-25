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
        $('.navbar-nav li').removeClass("activity");
        var navLi = $('[href="index.html#type='+ request["type"]+'"]').parent();
        var navUL = $(navLi.parent());
        if (navUL.hasClass("navbar-nav")){
            navLi.addClass("activity");
        }else {
            navUL.parent().addClass("activity");
        }
    }
}
init();
$(function () {

    $(".nav-menu").click(function () {
        setTimeout(function () {

            init();
        }, 10)

    });

    $('[data-toggle="dropdown-t"]').parent().mouseover(function (e) {
        var that = $(this);
        that/*.parent()*/.addClass('open');
        $('[data-toggle="dropdown-t"]').attr('aria-expanded', !that.attr('aria-expanded'));
        return false;
    })

    $('[data-toggle="dropdown-t"]').parent().mouseleave(function (e) {
        var that = $(this);
        that/*.parent()*/.removeClass('open');
        $('[data-toggle="dropdown-t"]').attr('aria-expanded', !that.attr('aria-expanded'));
        return false;
    })

})
