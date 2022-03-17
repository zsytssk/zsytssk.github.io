- [css 垂直居中样式](https://codesandbox.io/s/review-align-center-cb9wyc)

### 问题

- @ques 明确我不会的问题

- @ques 不要主动的暴露自己的缺点

## redux 异步

redux-thunk

## 强制缓存和协商缓存

- https://segmentfault.com/a/1190000008956069

## 二叉树两种状态的转化

- 节点递归
- 数组递归 [x.left, x.right, y.left, y.right, ...]

## http code 码

http://tools.jb51.net/table/http_status_code

## TCP 协议三次握手

https://segmentfault.com/a/1190000039165592

## 前端的性能优化

https://juejin.cn/post/6911472693405548557

- webpack-bundle-analyzer ->

- https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bda756efa4f546e3b2fd6744e2e3336c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp

- 压缩文件

- 缓存 http 请求

- 合并文件减少请求数量

- 压缩文件减少请求大小

  - 图片 + 代码

- 提升 服务器性能+带宽

- 使用 CDN 加快相应速度

- 优化代码减少不必要的运行开销

- 服务端渲染 减少首屏时间 优化性能

- 延迟加载图片

- 分包

- 使用 https：更快+同时 对一个客户端请求发送多个响应

## 浏览器输入地址栏到渲染全流程

- 客户端向服务端请求
- 服务器返回数据 渲染 dom 节点，渲染样式 执行 js

## tcp udp 的区别

https://zhuanlan.zhihu.com/p/24860273

## 导致浏览器重绘因素

https://juejin.cn/post/6844903569087266823

## react suspend

https://zh-hans.reactjs.org/docs/concurrent-mode-suspense.html

https://codesandbox.io/s/wandering-frog-ek4p1i?file=/src/index.js

## current mode

搞不懂 -> 需求我知道 也能用 但是 这代码很神奇

https://zh-hans.reactjs.org/docs/concurrent-mode-patterns.html

## 前端安全

https://segmentfault.com/a/1190000039977360

## 常规的题目

## let code

https://leetcode-cn.com/problems/word-transformer-lcci/comments/

## 逻辑题

- 字节跳动 题目

## Proxy Symbol

Proxy: https://codesandbox.io/s/es6-proxy-forked-x59wft
Symbol: https://codesandbox.io/s/vnozc?file=/src/index.js

## http 请求头包含哪些部分

HTTP 消息头允许客户端和服务器通过 request 和 response 传递附加信息。一个请求头由名称（不区分大小写）后跟一个冒号“：”，冒号后跟具体的值（不带换行符）组成。

根据不同上下文，可将消息头分为：

General headers: 同时适用于请求和响应消息，但与最终消息主体中传输的数据无关的消息头。
Request headers: 包含更多有关要获取的资源或客户端本身信息的消息头。
Response headers: 包含有关响应的补充信息，如其位置或服务器本身（名称和版本等）的消息头。

### General

本地地址 远程地址 状态 方法

### Request headers

网站信息 method path

Accept - accept-encoding - accept-language
authorization - cookie

浏览器信息 : user-agent + platform + ...

### Response headers

access-control-allow- credentials | headers | method | origin
content- encoding | type
cache-control expire
date

## 前端安全

### XSS

在 url 中插入一些代码

在网站的评论中插入一些代码

- 解决办法
  - 对于 url 用户评论采取转码的方式
  - 使用 setContent 等安全方式设置 url

### CSRF

伪造网站

- 增加用户验证

- token

- 禁止在 iframe 中打开网站 X-Frame-Options
  - deny | sameorigin | allow-from
