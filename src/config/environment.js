//项目环境部署模块
console.log(process.env);
let resultConf = [];
/**
 * 公共配置
 */
let PublicEnvCOnf = {
    'activity_url' : 'http://zzzzzz.com/',
}

/**
 * 开发环境
 */
if(process.env.NODE_ENV == 'development') {
    resultConf = {
        'activity_url' : 'http://admin.survey.xueersi.com/',
    }
}
/**
 * 测试环境 【 release 】
 */
else if(process.env.NODE_ENV == 'release') {
    resultConf = {
        'activity_url' : 'http://admin.survey.xueersi.com/',
    }
}
/**
 * 正式环境配置
 */
else if(process.env.NODE_ENV == 'production'){
    resultConf = {
        'activity_url' : 'http://admin.survey.xueersi.com/',
    }
}

export default {
    envconf : Object.assign(PublicEnvCOnf,resultConf),
}