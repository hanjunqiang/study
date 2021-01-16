---
title: 启动图&logo
date: 2020-06-17 00:34:22
permalink: /pages/f82fdc/
categories:
  - ios
tags:
  - 
---
# 启动图

## 各种启动图尺寸
::: tip 重点摘要:
* #### X系列的手机,
* #### iPhone X、iPhone XS、iPhone11 Pro宽高都是375x812,分辨率都是1125x2436
* #### iPhone XS Max、iPhone11 Pro Max宽高都是414x896, 分辨率都是1245x2688
* #### iPhone XR、iPhone11宽高都是414x896, 分辨率都是825x1792

[各种启动图尺寸](https://blog.csdn.net/Scorpio_27/article/details/52297643)
<br>
:::

::: details 摘要
<img style="margin-top:10px" :src="$withBase('/ios/01.jpg')" alt="暂无图片">
<br>
:::

## APP的logo尺寸
::: tip 重点摘要:
* #### 准备一张1024 x 1024 的图即可
* #### 利用工具生成所需要的各种尺寸, [传送门>](https://icon.wuruihong.com/)
:::

## 商店预览图
[参考地址>](https://help.apple.com/app-store-connect/#/devd1093d90d)
::: details 摘要
<img style="margin-top:10px" :src="$withBase('/ios/02.jpg')" alt="暂无图片">
<img style="margin-top:10px" :src="$withBase('/ios/03.jpg')" alt="暂无图片">
<br>
:::

## iOS启动图实现方式
::: tip 启动图实现方式:
* #### LaunchScreen.storyboard中拖入UIImageView,非安全模式,上右下左都为0, 图片模式设置为Aspect Fit
* #### Assets.xcassets中创建Image文件,并放入需要尺寸的启动图(系统会自动适配,尺寸一定要对)
* #### 启动即可,如果没出现,就尝试-删除APP,退出Xcode,修改bundle等方式
:::

::: details 启动后有闪屏,或者其他逻辑,需要在启动图后仍然显示启动图,代码实现
```js
    UIImageView *launchImgView = [[UIImageView alloc]initWithFrame:[[UIScreen mainScreen]bounds]];
    //按不同屏幕尺寸准备图片，确保和系统显示的启动图衔接顺畅，无挪位现象
    if ([[UIScreen mainScreen]bounds].size.height==896) {
        NSString *type = [NSString jq_getDeviceVersion];
        NSLog(@"手机type---%@",type);
        if ([type isEqualToString:@"iPhone 11 Pro Max"] || [type isEqualToString:@"iPhone XS Max"]) {
            self.launchImgView.image = [UIImage imageNamed:@"iPhoneXSMax"];
        }else if ([type isEqualToString:@"iPhone 11"] || [type isEqualToString:@"iPhoneXR"]){
            self.launchImgView.image = [UIImage imageNamed:@"iPhoneXR"];
        }
    }else if ([[UIScreen mainScreen]bounds].size.height==812){  //iPhone X、iPhone XS、iPhone11 Pro宽高和分辨率都相同
        self.launchImgView.image = [UIImage imageNamed:@"IPhoneX"];
    }else if ([[UIScreen mainScreen]bounds].size.height==736){
        self.launchImgView.image = [UIImage imageNamed:@"iPhone8P"];
    }else if ([[UIScreen mainScreen]bounds].size.height==667){
        self.launchImgView.image = [UIImage imageNamed:@"iPhone8"];
    }else if ([[UIScreen mainScreen]bounds].size.height==568){
        self.launchImgView.image = [UIImage imageNamed:@"iPhone5s"];
    }else if ([[UIScreen mainScreen]bounds].size.height==480){
        self.launchImgView.image = [UIImage imageNamed:@"iPhone4"];
    }else {
        self.launchImgView.image = [UIImage imageNamed:@"iPhoneXSMax"]; //默认显示最大分辨率
    }
    
    [self.window.rootViewController.view addSubview:self.launchImgView];
```
<br>
:::

## --

