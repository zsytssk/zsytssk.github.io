捕鱼我从 2017 开始做，经过很多次优化，以下就是其中重要的地方；

https://github.com/zsytssk/tpl/tree/master/laya

## mvc

## honor 框架

honor 框架主要管理弹框和场景，还有其他一些小功能；这是原来公司的框架后来维护的那个人离职了，就交给我了。我对其进行了多次优化，目标就是将其变得简单可维护。比方说弹框管理器，最终我将其优化成了一个方法，仍保有以下功能：[代码](https://github.com/zsytssk/tpl/blob/master/laya/library/honor/ui/dialogManager.ts)

1. 可控制只显示一个实例还是每次都创建一个。
2. 显示加载进度
3. 如果在打开过程中切换了场景就不再显示
4. 点击背景关闭
5. 完成之后返回一个实例
6. 在打开之前调用方法

## 测试代码分离

实现方式十分的简单，但是非常的有用；将实际项目代码放在 src 文件夹中，将 test 代码放在 test 目录中；本地开发时打包在一起，发布生产文件时就不打包测试代码。测试代码其实就是直接调用项目代码填充测试数据，不依赖服务器端代码来测试自己的功能，这在实际的开发过程中让我省了很多力气。（因为我是实用 webpack 自己打包代码所以一切很简单）

我这么做的初始念头是当时前端自动化测试非常流行，我在刚开始的时候模拟前端测试框架写一个 testBuilder，在实际使用中并不方便，后来就直接粗放的调用简单且有效。

## 其他

1. 通过 rxjs 将多个加载任务合并成一个[代码](https://github.com/zsytssk/tpl/blob/master/laya/library/honor/utils/loadRes.ts#L134)
1. node 脚本生成版本号[代码](https://github.com/zsytssk/tpl/blob/master/laya/script/genVersion/genVersion.ts)
1. 将资源打包成 zip 记载 [打包代码](https://github.com/zsytssk/tpl/tree/master/laya/script/zipFile) [给 laya 注入功能](https://github.com/zsytssk/tpl/blob/master/laya/library/honor/utils/zipResManager.ts)
1. 常用动画脚本 [代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/animate.ts)
1. 异步任务 [代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/asyncQue.ts)
1. 像 jquery 一样查找 node 节点[代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/layaQueryElements.ts)
1. laya 显示的图片切换功能[代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/layaSlider.ts)
1. 分页[代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/pagination.ts)
   ...
