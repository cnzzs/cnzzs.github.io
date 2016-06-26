load("/json/categories.json", $('[js-do="categories-content"]'),{
    befor: function (row, data) {
        row["url"] =  base + row["url"] + "&title=" + encodeURIComponent(encodeURIComponent(row["title"]));
        return row;
    }

})