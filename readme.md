##### 下载路径：https://www.mongodb.com

安装：默认安装/选择路径自定义安装

配置mongodb服务（方便可以通过 net start mongodb---命令快速打开服务，net stop mongoDB---关闭服务）
注意：如果服务开启失败，有可能是操作者未通过合法方式关闭服务，再次打开服务时会出现此类情况
建议去data或者db文件夹下面查看是否存在一个mongo.lock文件删除后重新输入命令

在data文件夹下面新增一个log文件夹
在mongodb下面新增一个mongo.config配置文件
配置windows服务
mongo.config
dbpath=D:\mongoDB\data\db
logpath=D:\mongoDB\data\log\mongo.log


数据库常用命令：
1.show dbs --- 查看全部数据库

2.show collections --- 显示当前数据库中的集合

3.show users --- 查看当前数据库的用户信息

4.use ***  --- 切换/创建数据库

5.db或者db.getName()  --- 查看当前所在数据库

6.db.help() --- 显示数据库操作命令

7.db.dropDatabase()   删除当前使用的数据库

8.db.cloneDatabase('url')   从制定主机上克隆数据库
（将指定机器上的数据库的数据克隆到当前数据库）

9.db.copyDatabase('mydb','temp','url')   从指定的机器上复制指定数据库数据到某个数据库
（将本机的mydb的数据复制到temp数据库中）

10.db.stats()   显示当前db状态

11.db.version()   显示当前db版本

12.db.getMongo()  查看当前的连接机器地址
 

Collection聚集集合
1.db.createCollection('collname',{size:20,cap:5,max:100})   创建一个聚集集合
2.db.getCollection('***')  得到指定名称的聚集集合
3.db.getCollectionNames()   得到当前所有聚集集合


在mongoDB/bin目录下执行
1.net start mongodb --- 启动mongoDB服务

2.mongo --- 连接数据库

在adminMongoDB目录下
1.npm start --- 启动可视化工具

