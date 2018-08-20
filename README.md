# vue-init-project-cli3.0

### 一、框架诞生背景
vue-init-project-cli3.0 意为开箱即用的vue的单页面初始化框架，采用vue3.0 版本的脚手架管理

本人希望更多的朋友在开发单页面应用时只关心页面逻辑的编写，完全不需要考虑项目结构目录，
特此在官方的初始化项目上做了简单调整，搞出一套有规则的初始化框架雏形，希望以后大家多多填充，共同打造

### 三、环境依赖 && 安装 、运行
以下安装全采用 brew 方式安装，基于 Mac OS 系统
```text
1. Node 版本  V10.8.0

安装：brew install node

2. Npm  版本  V6.3.0

安装： brew install npm  ,安装后版本过于低 V6.2.0
安装后升级： npm install npm@latest -g   ，采用上面命令安装，目前已经是V6.4.0 版本

3. Vue  版本  V3.0.0

安装 VUE 脚手架：npm install -g @vue/cli
安装 CLI-SERVICE : npm install -g @vue/cli-service-global

4. 运行：

初次运行，需要拉取Vue 运行所需的 node_model 模块目录
执行命令： npm install

如果之前已经有依赖包，可以跳过上一步，直接执行
npm run serve   ##此命令调取的的默认为开发环境模式文件的配置, .env.development ,每次修改后需要冷启动环境

5. 编译

npm run build  ### 编译创建生产环境文件，默认调取生产环境模式配置 .env.production 文件
npm run release_build ### 编译创建测试环境文件，调取测试环境模式配置 .env.release 文件


```

### 四、框架目录结构

.
├── dist                                        // 上线项目文件，放在服务器即可正常访问
├── public                                      // 公告文件，入口html文件在里面
├── src                                         // 源码目录
│   ├── assets                                  // 项目所需图片文件目录
│   ├── components                              // 公共组件文件夹
│   ├── config                                  // 基本配置
│   │   ├── environment.js                      // 环境配置文件
│   │   ├── global.js                           // 公共文件
│   │   ├── plugins.js                          // 第三方插件集合文件
│   │   └── utils.js                            // 项目中独立工具方法文件
│   ├── style                                   // 样式目录
│   │   ├── common.less                         // 公共样式文件
│   ├── views                                   // 所有的页面集合
│   │   ├── About.vue                           // 官方默认关于我们页面
│   │   ├── Home.vue                            // 官方默认首页
│   ├── App.vue                                 // 页面模板入口文件
│   ├── main.js                                 // 程序入口文件，初始化Vue，注册项目资源
│   ├── router.js                               // 项目路由文件
├── vue.config.js                               // Vue 环境运行配置文件
├── .env.development                            // 开发环境模式
├── .env.production                             // 生产环境模式
├── .env.release                                // 测试环境模式
.

### 五、结言
感谢阅读，希望后续一起维护此框架，多多扩充更多扩展和方法