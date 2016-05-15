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


var options = {
    befor:function(data){

    },
    cllack:function(data){

    }

};
function load(url, dom, options){


    $.ajax({
        url : url,
        type : "get",
        dataType : 'json',
        success : function(data) {
            if (data.code == 0) {
                var rows = data.rows;
                var content = $(dom).html();
                $(dom).html("");
                for(var i in rows){
                    if(options.befor){
                        rows[i] = options.befor(rows[i], data);
                    }
                    $(dom).append(drawing(content, rows[i]));
                }
                if(options.cllack){
                    options.cllack(rows);
                }
            }
        }
    })
}
function loadOne(url, dom, options){
    $.ajax({
        url : url,
        type : "get",
        dataType : 'json',
        success : function(data) {
            if (data.code == 0) {
                var row = data.content;
                if(options.befor){
                    row =options.befor(row);
                }
                var dom= $(dom)
                var content = dom.html();
                dom.html("");
                dom.append(drawing(content, row));
                if(options.cllack){
                    options.cllack();
                }
            }
        }
    })
}