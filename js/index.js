/**
 * @author egan
 * @email cnzhengzs@gmail.com
 */
$(function(){
    load(
        "json/banner.json",
        $('[js-do="images"]'),
        {
            cllack: function (data) {
                slider.data = data;
                slider.init();
            }
        })
    load("json/newest.json", $('[js-do="newest-content"]'), {
        rowFilter:function(dom, row){
            var dom = $(dom);
            dom.find(".viewnum").remove();
            dom.find(".pingl").remove();
            if(null == row["image"] || "" == row["image"]){

                dom.find("figure").remove();

                return dom.prop('outerHTML').replace('col-lg-9 col-md-9', 'col-lg-12 col-md-12')
            }

           return dom.prop('outerHTML');
        },
        befor: function (row, data) {
             row["url"] = formatString2Array("%s?type=%s&id=%s", data.url, data.type, row.id)
            return row;
        }
    })
})
