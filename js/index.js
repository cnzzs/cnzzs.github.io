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
        befor: function (row, data) {
             row["url"] = formatString2Array("%s?type=%s&id=%s", data.url, data.type, row.id)
            return row;
        }
    })
})
