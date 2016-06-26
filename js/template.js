/**
 * @author egan
 * @email cnzhengzs@gmail.com
 */
/**
 *
 * @param dom
 * @param data
 * @returns {*}
 */
function drawing(dom, data){
   for(var key in data){
       dom = dom.replace(new RegExp('\\({'+ key+'}\\)', "g"), data[key])
   }
    return dom
}

function formatString2Array(str) {

    for (var i = 0; i < arguments.length - 1; i++) {
        str = str.replace("%s", arguments[i + 1]);
    }
    return str;
}
function formatString2Map(str, map) {
    for(var key in map){
        str = str.replace(new RegExp('\\({'+ key+'}\\)', "g"), map[key])
    }
    return str;
}



var _options = {
    rowFilter:function(dom, row, data){
        return dom;
    },
    befor:function(row, data){
        return row;
    },
    cllack:function(row,data){
        return row;
    }

};

function load(url, dom, options){

    options = $.extend({}, _options,options);
    $.ajax({
        url : base + url,
        type : "get",
        dataType : 'json',
        success : function(data) {
            if (data.code == 0) {
                var rows = data.rows;
                var content = $(dom).html();
                $(dom).html("");
                for(var i in rows){
                    var html = options.rowFilter(content,  rows[i], data)
                    //if(options.befor){
                        rows[i] = options.befor(rows[i], data);
                    //}
                    $(dom).append(drawing(html, rows[i]));
                }
                //if(options.cllack){
                    options.cllack(rows, data);
                //}
            }
        }
    })
}
function loadOne(url, dom, options){
    options = $.extend({}, _options,options);
    $.ajax({
        url : base + url,
        type : "get",
        dataType : 'json',
        success : function(data) {
            if (data.code == 0) {
                var row = data.content;
                //if(options.befor){
                    row =options.befor(row);
                //}
                var dom= $(dom)
                var content = dom.html();
                dom.html("");
                dom.append(drawing(content, row));
                //if(options.cllack){
                    options.cllack();
                //}
            }
        }
    })
}