load("/json/categories.json", $('[js-do="categories-content"]'),{
    befor: function (row, data) {
        row["url"] =  row["url"] + "&name=" + encodeURIComponent(encodeURIComponent(row["name"]));
        return row;
    }

})