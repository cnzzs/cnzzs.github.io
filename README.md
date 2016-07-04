Linux下将mysql从5.1升级至5.5后，发现存储过程不能用了。创建和使用存储过程时就会提示
```java
Caused by: java.sql.SQLException: Cannot load from mysql.proc. The table is probably corrupted
        at com.mysql.jdbc.SQLError.createSQLException(SQLError.java:1055)
        at com.mysql.jdbc.SQLError.createSQLException(SQLError.java:956)
        at com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:3515)
        at com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:3447)
        at com.mysql.jdbc.MysqlIO.sendCommand(MysqlIO.java:1951)
        at com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2101)
        at com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2554)
        at com.mysql.jdbc.PreparedStatement.executeInternal(PreparedStatement.java:1761)
        at com.mysql.jdbc.PreparedStatement.executeQuery(PreparedStatement.java:1912)
        at com.mchange.v2.c3p0.impl.NewProxyPreparedStatement.executeQuery(NewProxyPreparedStatement.java:446)
        at org.hibernate.jdbc.AbstractBatcher.getResultSet(AbstractBatcher.java:208)
        at org.hibernate.loader.Loader.getResultSet(Loader.java:1869)
        at org.hibernate.loader.Loader.doQuery(Loader.java:718)
        at org.hibernate.loader.Loader.doQueryAndInitializeNonLazyCollections(Loader.java:270)
        at org.hibernate.loader.Loader.doList(Loader.java:2449)
        ... 89 more


```

查遍整个百度，结果还是印证了那一句话“天下文章一大抄”啊！

所有的文章几乎都是这么说的

解决方法非常简单，运行mysql_upgrade命令即可。此命令会在数据目录下生成一个文本文件mysql_upgrade_info，里面的内容为升级后的数据库版本。

但不知道什么原因，在我这里无效，升级后各种升级OK，但仍然报这个错误。

最后还是求助ＧＯＯＧＬＥ吧

http://bugs.mysql.com/bug.php?id=50183

原因是mysql.proc升级时有个字段没有升级成功。

在5.1中mysql.proc表的comment字段是varchar(64)：
```sql
`comment` char(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT
```
,但在5.5中应该是text：

```sql
`comment` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
```

So，执行下面的语句，把这个字段修改为text，就彻底OK了：

```sql
ALTER TABLE `proc`

MODIFY COLUMN `comment`  text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL AFTER `sql_mode`;
```
