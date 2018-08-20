/*
* @Date   ： 2018-8-16 20:11:17
* @Author :  BraveDu
* @Desc :    存放所有项目中使用的工具组件
*/

/*
*	请求数据格式json转string
*/
let jsonToString = jsonData => {
    var strArr = [];
    for (var k in jsonData) {
        if (typeof jsonData[k] == 'object') {
            json2String(jsonData[k])
        } else {
            strArr.push(k + "=" + jsonData[k]);
        }
    }
    strArr.sort();
    return strArr.join("&");
}

/**
 * 获取cookie
 * @param c_name cookie 名
 * @returns {*}
 */
let getCookie = c_name => {
    if(document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");//获取字符串的起点
        if(c_start != -1) {
            c_start = c_start + c_name.length + 1;//获取值的起点
            var c_end = document.cookie.indexOf(";", c_start);//获取结尾处
            if(c_end == -1) c_end = document.cookie.length;//如果是最后一个，结尾就是cookie字符串的结尾
            return decodeURI(document.cookie.substring(c_start, c_end));//截取字符串返回
        }
    }
    return "";
}

//方法声明
export default {
    jsonToString : jsonToString,
}