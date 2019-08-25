/**
 * Created by egzosn on 2019/8/17.
 */
$(function () {
    $('[data-toggle="dropdown-t"]').on("focus",function (e) {
        var that = $(this);
        that.parent().toggleClass('open');
        that.attr('aria-expanded', !that.attr('aria-expanded'));
        return false;
    })

})