- @ques 是不是要写发言稿

- @ques http 请求头包含哪些部分

  - https://segmentfault.com/a/1190000018234763

- @todo 前端安全

## http 请求头包含哪些部分

HTTP 消息头允许客户端和服务器通过 request 和 response 传递附加信息。一个请求头由名称（不区分大小写）后跟一个冒号“：”，冒号后跟具体的值（不带换行符）组成。

根据不同上下文，可将消息头分为：

General headers: 同时适用于请求和响应消息，但与最终消息主体中传输的数据无关的消息头。
Request headers: 包含更多有关要获取的资源或客户端本身信息的消息头。
Response headers: 包含有关响应的补充信息，如其位置或服务器本身（名称和版本等）的消息头。

## General

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
