//全局配置参数
//全局URL配置列表
import EnvConf from "@/config/environment.js"

/**
 * 项目URL映射对象
 * @type {{login: string}}
 */
let Urllists = {
    'login' : '/admin/activity/admin.login',
}

import Utils from "@/config/util.js"

export default {
    EnvConf  : EnvConf,
    Urllists : Urllists,
    Utils    : Utils,
}