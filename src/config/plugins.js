/*
* @Date   ： 2018-8-20 12:08:40
* @Author :  BraveDu
* @Desc :   此文件存放所有第三方插件集合
*/
import axios from 'axios'
import gbObj from "@/config/global.js"

axios.defaults.withCredentials = true;
export let Ajax = (obj) => {
    console.log(gbObj);
    let type = obj.type || 'post';
    let useFormData = obj.useFormData || false;
    let params = type == 'post' ? (useFormData ? obj.data : gbObj.Utils.jsonToString(obj.data)) : {
        params: obj.data
    };
    axios[type](gbObj.Urllists[obj.key], params)
        .then(function (response) {
            if (typeof response.data == "string" || !response.data) {
                response.data = JSON.parse(response.data || "{}");
                obj.success(response.data);
            } else {
                obj.success(response.data);
            }
        }).catch(function (error) {
        //全局Error处理
    })
}

//方法声明
export default {
    Ajax : Ajax,
}