---
title: 5、本地镜像上传至阿里云
---
![image-20220410220217273](../../images/image-20220410220217273.png)

### 1、镜像的生成方法

> - 基于当前容器创建一个新的镜像，新功能增强
    >
    >   ```
    >   docker commit [OPTIONS] 容器ID [REPOSITORY[:TAG]]
    >   ```
>
> - DockerFile



### 2、本地推送到阿里云

#### 1、阿里云开发者平台

https://promotion.aliyun.com/ntms/act/kubernetes.html

![image-20220416152352397](../../images/image-20220416152352397.png)



#### 2、创建仓库镜像

##### 1、选择控制台，进入容器镜像服务

![image-20220416152500028](../../images/image-20220416152500028.png)



##### 2、选择个人实例

![image-20220416152544697](../../images/image-20220416152544697.png)



##### 3、命名空间

![image-20220416152604459](../../images/image-20220416152604459.png)



创建命名空间

![image-20220416152624420](../../images/image-20220416152624420.png)



##### 4、仓库名称

![image-20220416152700231](../../images/image-20220416152700231.png)

![image-20220416152714343](../../images/image-20220416152714343.png)

![image-20220416152724320](../../images/image-20220416152724320.png)



##### 5、进入管理界面获得脚本

![image-20220416152746792](../../images/image-20220416152746792.png)



#### 3、将镜像推送到阿里云

将镜像推送到阿里云registry

- 管理界面脚本

![image-20220416152927778](../../images/image-20220416152927778.png)



```
将镜像推送到Registry
$ docker login --username=[阿里云账号] registry.cn-hangzhou.aliyuncs.com
$ docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/xiaobear/xiaobear-dcoker:[镜像版本号]
$ docker push registry.cn-hangzhou.aliyuncs.com/xiaobear/xiaobear-dcoker:[镜像版本号]
```

![image-20220416154550387](../../images/image-20220416154550387.png)



### 3、将阿里云上的镜像下载到本地

#### 从Registry中拉取镜像

```
 docker pull registry.cn-hangzhou.aliyuncs.com/xiaobear/xiaobear-dcoker:[镜像版本号]
```
