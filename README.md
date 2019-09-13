# Typecho 微信小程序 TypechoWeapp #

## 源码链接 ##

[小程序](https://github.com/diaolingzc/TypechoWeapp)
[插件](https://github.com/diaolingzc/TypechoWeapp-plugin)

## 扫码预览 ##

![yunli.jpg](https://user-images.githubusercontent.com/21998370/64835447-a22e1900-d618-11e9-997b-5bff1690742f.jpg)

## 支持功能 ##

> * 首页轮播文章配置
> * 评论，回复，点赞
> * 转发，分享到朋友圈
> * 支持 `markdown` , `html` 解析

## 安装需知 ##

> 1.域名已备案通过
> 2.域名开启 https

## 安装 Typecho ##

[Typecho 官网](http://typecho.org/)
[Typecho 安装指引](http://docs.typecho.org/install)

## 安装 TypechoWeapp 插件 ##

下载 [插件](https://github.com/diaolingzc/TypechoWeapp-plugin)，并根据 [TypechoWeapp-plugin安装指引](https://github.com/diaolingzc/TypechoWeapp-plugin/blob/master/README.md) 安装。

## 配置 TypechoWeapp 小程序 ##

1. 下载[小程序](https://github.com/diaolingzc/TypechoWeapp) 并解压
2. 安装 `WePY` -> `yarn global add wepy-cli`
3. 进入小程序目录下，执行 `yarn` 安装依赖
4. 修改配置
5. 执行 `wepy build` 编译
6. 使用 `微信开发者工具` 导入 `TypechoWeapp` 目录

```javascript
// /src/config/config.js

const DOMAIN = 'https://www.masterzc.cn' // 修改为你的 Typecho 域名 （请根据自己服务器配置确认是否携带 /index.php）
const NAME = '种花家的云璃ღ' // 修改为你的 Typecho 网站名称
const API_SECRET = ''  // 需与 TpyechoWeapp-plugin 插件配置的 `API秘钥` 保持一致

```

> [安装微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E5%AE%89%E8%A3%85%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7)
> 导入中请使用自行申请的 `APPID`

## 服务器域名配置 ##

登录 [微信公众平台](https://mp.weixin.qq.com/) ，设置->开发设置，服务器域名。
配置 `request合法域名` 

> `request合法域名` 与 `DOMAIN` 域名保持一致
> `request合法域名` 只支持 `https`

## 发布上线 ##

[发布上线](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html#%E5%8F%91%E5%B8%83%E4%B8%8A%E7%BA%BF)


## 鸣谢 ##

> [WePY](https://wepyjs.github.io/wepy-docs/)
> [ColorUI](https://github.com/weilanwl/ColorUI/)
> [WeTypecho](https://github.com/MingliangLu/WeTypecho)