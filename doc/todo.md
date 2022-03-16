- @ques letcode 每天一题

- @ques letcode 每天一题

- @todo 前端安全

## XSS

在 url 中插入一些代码

在网站的评论中插入一些代码

- 解决办法
  - 对于 url 用户评论采取转码的方式
  - 使用 setContent 等安全方式设置 url

## CSRF

伪造网站

- 增加用户验证

- token

- 禁止在 iframe 中打开网站 X-Frame-Options
  - deny | sameorigin | allow-from
