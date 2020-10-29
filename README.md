# 风影院 H5版本

![Build And Upload COS](https://github.com/CodeByZack/kongtv-react/workflows/Build%20And%20Upload%20COS/badge.svg)


换了ios手机，之前看做的看视频的app只有安卓版本的。由于iosApp开发的条件限制，暂时先做一个H5的用用。

如果喜欢APP，可以试试[安卓版本](https://github.com/CodeByZack/kongtv-android)，暂时没有IOS。

## 开发中

[线上地址](http://movie.zackdk.top/)勉强观看，存在很多细节问题。

还在开发中....

技术栈: react react-hook unstate-next react-router


## 运行项目

### 本地

``` 
git clone https://github.com/CodeByZack/kongtv-react 

npm i

npm run start
```

### 打包

`npm run build`用于github action自动构建,请勿使用。

请使用`npm run build-dev`。



## 问题记录
开发过程中，一些配置问题的[记录（待整理）](https://www.yuque.com/zackdk/web/an8i5p)。

## todo

~~删除redux相关，使用unstated-next~~

~~删除antd-mobild~~

~~使用material ui~~

~~添加PWA支持（IOS需要手动添加到主屏幕）~~

增加本地观看记录

增加分类

优化体验

## gif预览

![gif预览](https://apks-1252514056.cos.ap-chengdu.myqcloud.com/demo.gif)


## 截图预览

![首页](https://apks-1252514056.cos.ap-chengdu.myqcloud.com/%E9%A6%96%E9%A1%B5web.png)

![详情页](https://apks-1252514056.cos.ap-chengdu.myqcloud.com/%E8%AF%A6%E6%83%85web.png)

![播放页](https://apks-1252514056.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE-web.png)