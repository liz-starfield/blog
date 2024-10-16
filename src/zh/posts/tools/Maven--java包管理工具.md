---
icon: lightbulb
---
# Maven--java包管理工具
- [Maven--java包管理工具](#maven--java包管理工具)
  - [一、简介](#一简介)
    - [（一）什么是Maven](#一什么是maven)
    - [（二）maven能做什么](#二maven能做什么)
    - [（三）maven文件结构](#三maven文件结构)
  - [二、使用](#二使用)
    - [（一）官网下载（window系统）](#一官网下载window系统)
    - [（二）解压](#二解压)
    - [（三）配置环境变量](#三配置环境变量)
    - [（四）配置settings.xml](#四配置settingsxml)
    - [（五）IDEA配置自己的maven](#五idea配置自己的maven)
    - [（六）用IDEA创建maven项目](#六用idea创建maven项目)
    - [（七）引入依赖](#七引入依赖)
    - [（八）引入插件](#八引入插件)
  - [三、maven基础操作](#三maven基础操作)
    - [（一）仓库](#一仓库)
    - [（二）配置](#二配置)
    - [（三）gav坐标](#三gav坐标)
    - [（四）操作命令与生命周期](#四操作命令与生命周期)
    - [（五）依赖范围管理](#五依赖范围管理)
    - [（六）父子项目依赖传递](#六父子项目依赖传递)
    - [（七）项目聚合统一管理](#七项目聚合统一管理)
    - [（八）项目中的依赖冲突](#八项目中的依赖冲突)
      - [排包: maven helper](#排包-maven-helper)
  - [POM文件解析](#pom文件解析)
    - [scope详解](#scope详解)
  - [常见错误](#常见错误)
    - [Since Maven 3.8.1 http repositories are blocked.](#since-maven-381-http-repositories-are-blocked)
    - [Could not find artifact org.springframework.boot:spring-boot-starter-parent:pom:3.2.0.RELEASE in central](#could-not-find-artifact-orgspringframeworkbootspring-boot-starter-parentpom320release-in-central)

## 一、简介
### （一）什么是Maven
Maven：一个用于自动化构建项目和管理项目依赖的工具 <br/>
![image.png](images/Maven(1)-2.png) <br/>
### （二）maven能做什么
1.自动化构建项目：按照企业中主流的项目模板，创建完善的项目结构 <br/>
2.管理项目依赖：配置式添加和管理，自动下载和导入 <br/>
（Note：依赖就是Jar包，第三方的jar包，导入jar包后，才能使用相应的功能） <br/>
（像以前，需要手动往项目里加入jar包，如果版本有问题，自己得更新jar包，比较麻烦。而有了maven，在pom.xml里配置项目的依赖就不用管后续了，maven会自动下载和导入那些配置的依赖，如果需要修改某个依赖的版本，也只需要修改配置就好） <br/>
管理maven依赖，分析依赖关系 <br/>
### （三）maven文件结构
![image.png](images/Maven(1)-3.png) <br/>
bin：binary的缩写，存放二进制可执行文件，包含了主要操作命令mvn <br/>
boot：存放maven的类加载器，用于加载自己的jar包和类库 <br/>
conf：config的缩写，存放配置文件 <br/>
lib：library的缩写，存放maven自己jar包的目录 <br/>
usrlibs：是用户自定义目录，可以作为本地仓库位置 <br/>

## 二、使用
### （一）官网下载（window系统）
![image.png](images/Maven(1)-4.png) <br/>
### （二）解压
### （三）配置环境变量
1.添加MAVEN_HOME（Note：版本1需要配MAVEN_HOME，版本2需要配M2_HOME，到了版本3可以不配这个，直接配path就行） <br/>
2.在path中添加%MAVEN_HOME%\bin <br/>
验证：命令提示符中输入**mvn -v或mvn -version** <br/>
### （四）配置settings.xml
1.配置本地仓库位置 <br/>
![image.png](images/Maven(1)-5.png) <br/>
2.配置远程镜像仓库 <br/>
一般会用阿里云的镜像库（因为官方的镜像是非常慢的，官方的是从国外下载，外网访问很慢，所以一般换成国内的） <br/>
![image.png](images/Maven(1)-6.png) <br/>
Note：此防火墙不是自己电脑的防火墙，而是国家的防火墙 <br/>
![image.png](images/Maven(1)-7.png) <br/>
```xml
<mirrors> <br/>
  <mirror> <br/>
    <id>nexus-aliyun</id> <br/>
    <mirrorOf>central</mirrorOf> <br/>
    <name>Nexus aliyun</name> <br/>
    <url>http://maven.aliyun.com/nexus/content/groups/public</url> <br/>
  </mirror> <br/>
</mirrors> <br/>

<--使用jdk1.8,也可以不配--> <br/>
<profiles> <br/>
  <profile> <br/>
    <id>jdk-1.8</id> <br/>
    <activation> <br/>
      <activeByDefault>true</activeByDefault> <br/>
      <jdk>1.8</jdk> <br/>
    </activation> <br/>
    <properties> <br/>
      <maven.compiler.source>1.8</maven.compiler.source> <br/>
      <maven.compiler.target>1.8</maven.compiler.target> <br/>
      <maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion> <br/>
    </properties> <br/>
  </profile> <br/>
</profiles> <br/>
```
### （五）IDEA配置自己的maven
![image.png](images/Maven(1)-8.png) <br/>

![image.png](images/Maven(1)-9.png) <br/>
![image.png](images/Maven(1)-10.png) <br/>
![image.png](images/Maven(1)-11.png) <br/>

如果项目在deploy时出现transfer failed:    xxx  401 unauthorized <br/>
说明是远程私服jar包仓库需要账号密码等配置 <br/>

配置: <br/>
```xml
<?xml version="1.0" encoding="UTF-8"?> <br/>

<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"  <br/>
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  <br/>
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd"> <br/>
  <!-- localRepository <br/>
   | The path to the local repository maven will use to store artifacts. <br/>
   | <br/>
   | Default: ${user.home}/.m2/repository <br/>
  <localRepository>/path/to/local/repo</localRepository> <br/>
  --> <br/>
  <localRepository>C:\Users\zhouyi16\.m2\repository</localRepository> <br/>

  <!-- servers <br/>
   | This is a list of authentication profiles, keyed by the server-id used within the system. <br/>
   | Authentication profiles can be used whenever maven must make a connection to a remote server. <br/>
   |--> <br/>
  <servers> <br/>
    <server> <br/>
      <id>${仓库名}</id> <br/>
      <username>${账号}</username> <br/>
      <password>${密码}</password> <br/>
    </server> <br/>
    <!-- 举例 --> <br/>
    <server> <br/>
      <id>netease-snapshots</id> <br/>
      <username>123</username> <br/>
      <password>456</password> <br/>
    </server> <br/>
  </servers> <br/>
  
  <!-- profiles <br/>
   | This is a list of profiles which can be activated in a variety of ways, and which can modify <br/>
   | the build process. Profiles provided in the settings.xml are intended to provide local machine- <br/>
   | specific paths and repository locations which allow the build to work in the local environment. <br/>
   | <br/>
   | For example, if you have an integration testing plugin - like cactus - that needs to know where <br/>
   | your Tomcat instance is installed, you can provide a variable here such that the variable is  <br/>
   | dereferenced during the build process to configure the cactus plugin. <br/>
   | <br/>
   | As noted above, profiles can be activated in a variety of ways. One way - the activeProfiles <br/>
   | section of this document (settings.xml) - will be discussed later. Another way essentially <br/>
   | relies on the detection of a system property, either matching a particular value for the property, <br/>
   | or merely testing its existence. Profiles can also be activated by JDK version prefix, where a  <br/>
   | value of '1.4' might activate a profile when the build is executed on a JDK version of '1.4.2_07'. <br/>
   | Finally, the list of active profiles can be specified directly from the command line. <br/>
   | <br/>
   | NOTE: For profiles defined in the settings.xml, you are restricted to specifying only artifact <br/>
   |       repositories, plugin repositories, and free-form properties to be used as configuration <br/>
   |       variables for plugins in the POM. <br/>
   | <br/>
   |--> <br/>
  <profiles> <br/>
    <profile> <br/>
      <repositories> <br/>
        <repository> <br/>
            <id>nexus-aliyun</id> <br/>
            <name>Nexus aliyun</name> <br/>
            <url>http://maven.aliyun.com/nexus/content/groups/public</url> <br/>
        </repository> <br/>
        <repository> <br/>
          <snapshots> <br/>
            <enabled>false</enabled> <br/>
          </snapshots> <br/>
          <id>netease-release</id> <br/>
          <name>netease-release</name> <br/>
          <url>http://mvn.hz.netease.com/artifactory/libs-releases</url> <br/>
        </repository> <br/>
        <repository> <br/>
          <snapshots> <br/>
            <enabled>false</enabled> <br/>
          </snapshots> <br/>
          <id>central</id> <br/>
          <name>repo</name> <br/>
          <url>http://mvn.hz.netease.com/artifactory/repo</url> <br/>
        </repository> <br/>
        <repository> <br/>
          <snapshots /> <br/>
          <id>snapshots</id> <br/>
          <name>snapshots-only</name> <br/>
          <url>http://mvn.hz.netease.com/artifactory/snapshots-only</url> <br/>
        </repository> <br/>
        <repository> <br/>
          <id>repository.springframework.maven.snapshot</id> <br/>
          <name>Spring Framework Maven Snapshot Repository</name> <br/>
          <url>http://repo.spring.io/snapshot/</url> <br/>
        </repository> <br/>
        <repository> <br/>
          <id>maven.central</id> <br/>
          <name>maven.central</name> <br/>
          <url>http://central.maven.org/maven2/</url> <br/>
        </repository> <br/>
      </repositories> <br/>
      <id>tanc-netease</id> <br/>
    </profile> <br/>
  </profiles> <br/>
  
  <activeProfiles> <br/>
    <activeProfile>tanc-netease</activeProfile> <br/>
  </activeProfiles> <br/>
</settings> <br/>

```
### （六）用IDEA创建maven项目
1.左侧选择maven <br/>
2.勾选Create from archetype，即使用模板自动完成项目的创建 <br/>
3.选择maven-archetype-webapp模板 <br/>
![image.png](images/Maven(1)-12.png) <br/>
![image.png](images/Maven(1)-13.png) <br/>
Note：SNAPSHOT是指快照版本，指这个项目在创建初期 <br/>
![image.png](images/Maven(1)-14.png) <br/>
使用自己的maven和settings.xml，仓库用默认地址的仓库 <br/>
### （七）引入依赖
1.打开依赖检索网站：[https://mvnrepository.com/](https://mvnrepository.com/) <br/>
2.搜索依赖 <br/>
![image.png](images/Maven(1)-15.png) <br/>
3.点击进入想要的搜索结果 <br/>
4.选择版本（Note：Usages代表使用的人数，可以作为选择参考） <br/>
![image.png](images/Maven(1)-16.png) <br/>
5.复制\<dependency\>到pom.xml，点击悬浮的maven更新按钮，进行更新依赖 <br/>
![image.png](images/Maven(1)-17.png) <br/>
![image.png](images/Maven(1)-18.png) <br/>
### （八）引入插件
1.打开maven官网   [https://maven.apache.org/](https://maven.apache.org/) <br/>
2.左侧找到Plugins点进去 <br/>
3.ctrl+F在该页面找到想要的插件点进去 <br/>
4.选择版本点进去 <br/>
5.复制\<plugin\>到pom.xml中，点击悬浮的maven更新按钮，进行更新插件 <br/>
## 三、maven基础操作
### （一）仓库
![image.png](images/Maven(1)-19.png) <br/>
（1）远程仓库/中央仓库 <br/>
maven官网和阿里云的仓库 <br/>
（2）本地仓库 <br/>
开发人员本地文件夹 <br/>
（3）私有服务器 <br/>
公司内部开发的工具jar包 <br/>
公司内部搭建自己的私有服务器，在私有服务器上部署项目的依赖，服务于公司内部的项目 <br/>
私有仓库就包含了maven远程仓库jar包和自己特有jar包，直接都走该私有仓库即可 <br/>
如下操作可见视频：[https://www.imooc.com/video/22616](https://www.imooc.com/video/22616) <br/>
1.搭建私有服务器 <br/>
![image.png](images/Maven(1)-20.png) <br/>
2.创建私有仓库 <br/>
3.配置私有仓库 <br/>
![image.png](images/Maven(1)-21.png) <br/>
![image.png](images/Maven(1)-22.png) <br/>


### （二）配置
（1）配置文件 <br/>
1.全局配置文件：settings.xml <br/>
![image.png](images/Maven(1)-23.png) <br/>
2.项目配置文件 <br/>
![image.png](images/Maven(1)-24.png) <br/>
3.用户配置文件 <br/>
settings.xmlnote <br/>
基本不去使用 <br/>

（2）优先级 <br/>
若出现同样配置，pom.xml优先级高于settings.xml <br/>
![image.png](images/Maven(1)-25.png) <br/>
资料下载地址：https://img.mukewang.com/down//imgsvc/2020/09/25/5f6dc567c0451b6f5bb7e957.zip <br/>
### （三）gav坐标
![image.png](images/Maven(1)-26.png) <br/>
![image.png](images/Maven(1)-27.png) <br/>
### （四）操作命令与生命周期
![image.png](images/Maven(1)-28.png) <br/>
mvn clean：把target清空 <br/>
mvn compile：编译，生成target文件夹 <br/>
mvn package：打包，在target目录下生成jar包或war包 <br/>
mvn install：把jar包或war包放入本地仓库 <br/>
![image.png](images/Maven(1)-29.png) <br/>
### （五）依赖范围管理
指定某个依赖在哪个生命周期范围内有效 <br/>
![image.png](images/Maven(1)-30.png) <br/>
[scope值为import的参考说明](https://www.cnblogs.com/zhizhixiaoxia/p/14041697.html)：只在父项目的\<dependencyManagement\>中出现，表明范围管理此处不生效，需要子类导入父项目依赖管理中的依赖后再指定scope那5个值。 <br/>
### （六）父子项目依赖传递
（1）什么是父子项目 <br/>
父子项目是maven中为了合理有效的管理依赖jar包，建立的一种项目和项目之间的继承关系。 <br/>
（2）项目之间的依赖关系是怎么建立的 <br/>
![image.png](images/Maven(1)-31.png) <br/>
父项目的依赖：  <br/>
1、父项目的打包方式 <br/>
只能是pom方式，不可以是jar或war <br/>
        <packaging>pom</packaging> <br/>
2、统一管理版本 <br/>
通过在\<properties\>自定义变量统一管理版本 <br/>
3、父项目的基本依赖 <br/>
在\<dependencies\>里的依赖是父项目需要的基本依赖 <br/>
4、父项目统一管理的依赖（依赖管理器，管理子项目的依赖，并不是父项目所需要的） <br/>
        在\<dependencyManagement\></dependencyManagement\>里的依赖是统一管理的依赖 <br/>
```
Note：父项目并不会导入此依赖，只是作为依赖容器，主要可以方便版本管理。子项目用到时才引入。 <br/>
Note：<dependencyManagement>中的<dependency>里的type必为pom，scope必为import。 <br/>
```
子项目的依赖： <br/>
```
1、通过<parent>指定父项目，建立继承关系 <br/>
Note:<relativePath>指定父类的pom.xml <br/>
<parent> <br/>
    <groupId>org.example</groupId> <br/>
    <artifactId>mcex01_parent</artifactId> <br/>
    <version>1.0.0</version> <br/>
    <relativePath>../mcex01_parent/pom.xml</relativePath> <br/>
</parent> <br/>
2、继承关系中，会自动继承父项目的groupid，所以此项目不用写groupid <br/>
3、如果使用父项目统一管理中的依赖，可以不写版本号，依赖版本由父项目统一管理 <br/>
```
（3）父子项目的优缺点 <br/>
优点 <br/>
![image.png](images/Maven(1)-32.png) <br/>
缺点 <br/>
![image.png](images/Maven(1)-33.png) <br/>

### （七）项目聚合统一管理
（1）什么是项目聚合 <br/>
maven中针对多个项目统一打包的管理方式。项目聚合关系，使项目之间的整体性较高，便于系统集成和维护。提高依赖的复用性。 <br/>
（2）聚合项目 <br/>
1、新建一个聚合项目，打包方式为pom <br/>
2、在项目里新建模块module，默认以聚合项目为父项目，module的pom.xml里自动有了\<parent\> <br/>
3、聚合项目的pom.xml里，自动有了\<modules\>，并把子项目模块加入了进来 <br/>
![image.png](images/Maven(1)-34.png) <br/>

### （八）项目中的依赖冲突
（1）两种冲突（直接冲突和传递冲突） <br/>
1.直接冲突 <br/>
maven机制：一个依赖导入了是不会重复导入的 <br/>
解决：把低版本的排除 <br/>
![image.png](images/Maven(1)-35.png) <br/>
![image.png](images/Maven(1)-36.png) <br/>

![image.png](images/Maven(1)-37.png) <br/>
2.传递冲突 <br/>
项目不依赖C，但由于依赖A，而传递使得依赖了C，造成冲突。 <br/>
解决：把项目引入的依赖A中排除C <br/>
![image.png](images/Maven(1)-38.png) <br/>
（2）依赖原则 <br/>
1. 依赖路径最短优先原则 <br/>
A -> B -> C -> X(1.0) A -> D -> X(2.0) <br/>
由于 X(2.0) 路径最短，所以使用 X(2.0)。 <br/>
2. 声明顺序优先原则 <br/>
A -> B -> X(1.0) A -> C -> X(2.0) <br/>
在 POM 中最先声明的优先，上面的两个依赖如果先声明 B，那么最后使用 X(1.0)。 <br/>
3. 覆写优先原则 <br/>
子 POM 内声明的依赖优先于父 POM 中声明的依赖。 <br/>
（3）解决依赖冲突 <br/>
1.使用 mvn dependency:tree 查看依赖树 <br/>
2.解决方案都可以是把冲突用\<exclousion\>的排除掉或根据依赖原则来调整依赖在 POM 文件的声明顺序 <br/>

#### 排包: maven helper


可以用Dependency Analyzer进行conflict的查看 <br/>

## POM文件解析

### scope详解

- **import** <br/>

虽然是\<dependency\>中的属性，但只能用在\<dependencyManagement\>中 <br/>
```xml
<dependencyManagement> <br/>
  <dependency> <br/>
      <groupId>com.didi</groupId> <br/>
      <artifactId>didi-spring</artifactId> <br/>
      <version>2.2.2</version> <br/>
      <type>pom</type> <br/>
      <scope>import</scope> <br/>
  </dependency> <br/>
</dependencyManagement> <br/>
```
它的意思是，当前项目的\<dependencyManagement\>会导入com.didichuxing:didi-spring:2.2.2 这个pom项目中的\<dependencyManagement\ > <br/>

所以，只是表示dependencyManagement的导入 <br/>

- **test** <br/>

这个包只有在测试编译和测试运行阶段可用，不会被打包到项目jar包中，同时如果项目A依赖于项目B，项目B中的test作用域下的依赖不会被继承。 <br/>

- **compile** <br/>

不声明scope的情况下，scope的默认值 <br/>
compile表示被依赖包需要参与当前项目的编译、测试、打成项目包运行的整个周期，是一个比较强的依赖。 <br/>

- **runtime** <br/>

runtime与compile比较相似，区别在于runtime 跳过了编译阶段，打项目包的时候再包含进去 <br/>

- **provided** <br/>

表示这个包只在项目的编译、测试阶段起作用。运行时(在目标容器中) 已经提供了这个依赖，无需在提供，但是在编写代码或者编译时可能会用到这个依赖 <br/>
依赖不会被打入到项目jar包中 <br/>

- **system** <br/>

表示使用本地系统路径下的jar包，需要和一个systemPath一起使用，如下:  <br/>
```xml
<dependency> <br/>
  <groupId>com.didi</groupId> <br/>
  <artifactId>spring</artifactId> <br/>
  <systemPath>${basedir}/lib/spring.jar</systemPath> <br/>
  <scope>system</scope> <br/>
  <version>1.1.2</version> <br/>
</dependency> <br/>
```

## 常见错误

### Since Maven 3.8.1 http repositories are blocked. 

原因:  <br/>
Maven >= 3.8.1时不支持http协议，只支持https协议 <br/>
如果私有仓库地址不支持https协议，则只能把Maven版本降低如3.6.3 <br/>
### Could not find artifact org.springframework.boot:spring-boot-starter-parent:pom:3.2.0.RELEASE in central
原因：spring-boot-starter-parent当时版本太高，找不到 <br/>
解决：降低版本

