捕鱼我从 2017 开始做，经过很多次优化，以下就是其中重要的地方；

https://github.com/zsytssk/tpl/tree/master/laya

## mvc

我在捕鱼中实现了 mvc，model 层管理数据，view 管理显示，用 ctrl 将两者串联起来。
model 数据发生改变时就分发事件，ctrl 监听这些事件然后去控制 view 的显示。
model 和 view 都实现了独立运行，不依赖其他部分。

道理很简单实现方式也很简单，我在刚开始做捕鱼这个项目时只是一个模糊的想法；
经过不知到多少次的尝试，不断的修改框架，最后才实现这样的一个方式；
其中的经历外人难以知道，我特别要感谢 typescript 当时公司没有人使用 ts（2017）；
因为我经常的尝试新的想法需要不断的重构代码，如果没有 ts 给我保证，我可能在第一版的时候就不敢动大动作了。

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

## 继承的缺点和改善

js 继承曾经是一个高级用法，有很多的库专门干这个事情， 例如`xx.extend()`; 我在捕鱼的第一个正式版中就使用了继承，几乎每一个比较独立的功能都是一个 class 总共有一百多个 class；我敢说我是当时公司将继承进行最彻底的一个，当其他人还是用十几个文件来管理游戏逻辑甚至只有几个文件，所有的逻辑耦合在一起，我有一种无声的自豪感：我写过的类比你们见过的都多。然而在接下来的维护改版中我发现项目原来越难以控制，添加新功能时变的越来越难。继承有几大缺点：

1. 子类继承父类经常会出现父类的一些方法属性不在需要，当继承链扩展时这个问题就会越来越严重
2. 深不见底的继承链，使你不敢对底部的基类进行改动；
3. 继承链将所有的代码串联在一起，使得很难将一部分代码抽离出来；经常是你想将一个功能抽离出来，最后往往是带出一堆代码

这些问题的根本原因是，继承链将所有的代码绑定在一起（耦合）；这也是为什么最新的新语言都采用组件的形式来组织代码而不是继承。

---

因为这些问题，我在后续的版本中尝试用组合的方式来组织代码，并且将代码抽离出一个个不依赖的纯净的模块，然后在用一个部分将其组合起来成为我需要的功能，
我感觉自己的维护变得越来越轻松。

## 自行车理论

我们并不会做自行车，却可以无障碍的使用它，为什么？因为自行车提供两个接口给我们：

1. 脚踩踏踏板推动前进（功能）
2. 龙头+刹车来转向和刹车（控制）

手机行业那么多的功能不知道有多少个厂商参与其中，最终由手机厂商组合在一起成为一个功能齐全的手机。
其中的分工与合作无疑是体现出人类文明的智慧，同样的逻辑放到代码中一样，我们几乎每天都在使用外部代码，
我们并不用自己去写它们甚至不用知道它们是怎么实现的，只需要我们知道怎么使用和控制就可以了；我感觉这个道理可以应用在万事万物中。

## 其他

1. 通过 rxjs 将多个加载任务合并成一个[代码][progress_code] [demo][progress_demo]
1. node 脚本生成版本号[代码](https://github.com/zsytssk/tpl/blob/master/laya/script/genVersion/genVersion.ts)
1. 将资源打包成 zip 记载 [打包代码](https://github.com/zsytssk/tpl/tree/master/laya/script/zipFile) [给 laya 注入功能](https://github.com/zsytssk/tpl/blob/master/laya/library/honor/utils/zipResManager.ts)
1. 常用动画脚本 [代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/animate.ts)
1. 异步任务 [代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/asyncQue.ts)
1. 像 jquery 一样查找 node 节点[代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/layaQueryElements.ts)
1. laya 显示的图片切换功能[代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/layaSlider.ts)
1. 分页[代码](https://github.com/zsytssk/tpl/blob/master/laya/src/utils/pagination.ts)
   ...

[progress_code]: https://github.com/zsytssk/tpl/blob/master/laya/library/honor/utils/loadRes.ts#L134
[progress_demo]: https://codesandbox.io/s/rxjs-progressbar-52dji
