/**
 * Created by egzosn on 2019/8/17.
 */
function initLoad() {
    var request = new GetRequest();
    if (null != request.title) {
        request.title = decodeURIComponent(decodeURIComponent(request.title));
        document.title = request.title + "|" + document.title;
    }
    if (null != request["type"]) {
        $('#main').load(request["type"] + ".html");
        $('.activity').remove();
        var typeDom = $('[href="index.html#type=' + request["type"] + '"]');
        var text = typeDom.text();
        var dropdownMenu = typeDom.parent().parent();
        var dom = typeDom;
        if (dropdownMenu.hasClass("dropdown-menu")) {
            var prevDom = dropdownMenu.prev();
            text = prevDom.text();
            dom = prevDom;
        }
        var w = dom.parent().outerWidth();
        dom.before('<div class="activity" style="line-height: 15px;">&nbsp;&nbsp;&nbsp;' + text.replace(new RegExp(".", "g"), "&nbsp;") + '&nbsp;&nbsp;&nbsp;&nbsp;</div>')
    }

}




initLoad();
$(function () {

    $(".nav-menu").click(function () {
        var that = $(this);
        location.href = that.attr("href");
        initLoad();
        return false;
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
