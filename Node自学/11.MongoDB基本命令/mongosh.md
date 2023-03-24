# shell连接mongoDB数据库

由于下载了mongoDB专用shell  —— mongosh

所以连接数据库的命令为：

```shell
mongosh
```





# 查

- `show dbs`
  - 查看显示所有数据库
- `db`
  - 查看当前操作的数据库
- `show collections`
  - 查看所有集合(表)
- `db.表名.find()`
  - 查询一个表所有的数据
- `use 数据库名称`
  - 切换到指定的数据库（若没有会新建）

# 增

- `db.表名.insertOne({})`
  - 增加一条数据

