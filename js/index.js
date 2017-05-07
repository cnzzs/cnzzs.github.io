/**
 * @author egan
 * @email cnzhengzs@gmail.com
 */
$(function(){
    load("/json/banner.json",$('[js-do="images"]'),
        {
            befor: function (row, data)  {
                row.url = formatString2Array("%s?type=%s&id=%s&file=%s&title=%s&createTime=%s", data.url, row.type, row.id, row.file, encodeURIComponent(encodeURIComponent(row.title)), row.createTime)
                return row;
            },
            cllack: function (data) {
                slider.data = data;
                slider.init();
                slider.cur = -1;
                slider.slide(0);
            }
        })
    load("/json/newest.json", $('[js-do="newest-content"]'), {
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
            row["image"] = base + row["image"];
             row["url"] = base + formatString2Array("%s?type=%s&id=%s&file=%s&title=%s&createTime=%s", data.url, data.type, row.id, row.file, encodeURIComponent(encodeURIComponent(row.title)), row.createTime)
            row["tag"] =  formatString2Array( row["tag"] , base);
            return row;
        }
    })

})
