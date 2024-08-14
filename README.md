# view-pc

#### 介绍

前端 pc 端项目基础构建

#### 软件架构

> 1.  基于 webpack5 构建打包
> 2.  集成 react、react-dom、react-router-dom
> 3.  mobx 状态管理
> 4.  react-i18 多语言
> 5.  tailwindcss 框架
> 6.  小函数例如：jmd 加密、aes 加密、数字精度 bignumber.js 二次封装等
>     ......

#### 安装教程

1.  npm i vrw-cli -g
2.  vrw create 项目名称 (选择 pc)

#### 使用说明

1.  cd 项目名称
2.  pnpm i (推荐使用 pnpm 管理依赖)
3.  删除 node_moduls 里面的 esy-ui 包
4.  解压 esy-ui.zip 文件，将解压后的文件夹拖入到 node_modules 目录中
5.  pnpm start
