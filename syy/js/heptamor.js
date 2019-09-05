/**
 * Created by egzosn on 2019/9/4.
 */
$(function () {
    load("./json/heptamor.json", '[js-do="list"]',{
        cllack:function (rows, data) {
            $("#image").attr("src", data.image);
        }
    })
})