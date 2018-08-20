/*
* @Date   ： 2018-8-16 20:11:17
* @Author :  BraveDu
* @Desc :    存放所有项目中使用的工具组件
*/

/*
	请求数据格式json转string
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

//方法声明
export default {
    jsonToString : jsonToString,
}