---
icon: lightbulb
---
# SQL
- [SQL](#sql)
- [SQL](#sql-1)
  - [关联查询](#关联查询)
  - [having与where](#having与where)
  - [添加一列](#添加一列)
  - [聚合函数](#聚合函数)
  - [窗口函数-添加排名列(排名，top n)](#窗口函数-添加排名列排名top-n)
    - [窗口函数 关键字：over,partition,order](#窗口函数-关键字overpartitionorder)
    - [排名 rank,dense\_rank,row\_number](#排名-rankdense_rankrow_number)
    - [聚合函数作为窗口函数](#聚合函数作为窗口函数)
  - [顺序](#顺序)
  - [去重distinct](#去重distinct)
  - [包含in](#包含in)
  - [字符串处理](#字符串处理)
    - [子串 substr(str,start)   |    substr(str,start,len)](#子串-substrstrstart-------substrstrstartlen)
    - [子串 left(str,len)  | right(str,len)](#子串-leftstrlen---rightstrlen)
    - [反转 reverse(str)](#反转-reversestr)
    - [拼接 concat](#拼接-concat)
  - [时间处理](#时间处理)
    - [计算时间差 timestampdiff(计算粒度,开始时间,结束时间)](#计算时间差-timestampdiff计算粒度开始时间结束时间)
  - [四舍五入与取整](#四舍五入与取整)
- [other](#other)
  - [1.Distinct关键字（必须直接放在列名的前面；关键字作用于所有要查的列） ](#1distinct关键字必须直接放在列名的前面关键字作用于所有要查的列-)
  - [2.行数限制： ](#2行数限制-)
  - [3.	注释 ](#3注释-)
  - [4.	排序 ](#4排序-)
  - [5.	Where ](#5where-)
  - [6.	通配符（用来匹配值的一部分的特殊字符） ](#6通配符用来匹配值的一部分的特殊字符-)
  - [7.	拼接字段 ](#7拼接字段-)
  - [8.	聚集函数 ](#8聚集函数-)
  - [9.分组数据 ](#9分组数据-)
  - [10.Select子句及其顺序 ](#10select子句及其顺序-)
  - [11.子查询（NOTE:作为子查询的SELECT语句只能查询单个列。企图检索多个列将返回错误。子查询常用于where子句的in操作符中） ](#11子查询note作为子查询的select语句只能查询单个列企图检索多个列将返回错误子查询常用于where子句的in操作符中-)
  - [12.	联结（联结是一种机制，用来在一条select语句中关联表，因此称为联结） ](#12联结联结是一种机制用来在一条select语句中关联表因此称为联结-)
  - [13.	组合查询（使用union很简单，所要做的只是给出每条select语句，在各条语句之间放上关键字union） ](#13组合查询使用union很简单所要做的只是给出每条select语句在各条语句之间放上关键字union-)
  - [14.	视图 ](#14视图-)
  - [15. 存储过程 ](#15-存储过程-)


# SQL
## 关联查询
select * from tb1 left join tb2 on tb1.id = tb2.id; <br/>
## having与where
having子句与where都是设定条件筛选的语句，有相似之处也有区别。 <br/>
**having与where的区别:** <br/>
having是在分组后对数据进行过滤 <br/>
where是在分组前对数据进行过滤 <br/>
having后面可以使用[聚合函数](https://so.csdn.net/so/search?q=%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020) <br/>
where后面不可以使用聚合 <br/>
## 添加一列
1、固定值/表达式 as new_col <br/>
select (normal_salary - dock_salary) as salary from salary_tb; <br/>
select 'Male' as gender from users; <br/>
2、分条件 <br/>
case  <br/>
when 条件1 then 值1 <br/>
when 条件2 then 值2 <br/>
else 值3 <br/>
end <br/>
as new_col <br/>
```java
SELECT
CASE
    WHEN gender = 1 THEN 'Male'
    WHEN gender = 2 THEN 'Female'
END
as gender from users;
```
```java
SELECT
CASE 
    WHEN age < 18 THEN 'Child'
    WHEN age >= 18 AND age <= 50 THEN 'Adult'
    ELSE 'Elder'
END
as age_category from users;
```
## 聚合函数
平均值函数avg <br/>
求和 sum <br/>
最大值 max <br/>
最小值 min <br/>
基数 count <br/>
## 窗口函数-添加排名列(排名，top n)
[窗口函数介绍](https://www.zhihu.com/tardis/bd/art/92654574?source_id=1001) <br/>
### 窗口函数 关键字：over,partition,order
1）同时具有分组和排序的功能 <br/>
2）不减少原表的行数 <br/>
3）语法如下： <br/>
```
<窗口函数> over (partition by <用于分组的列名>
                order by <用于排序的列名>)
```
### 排名 rank,dense_rank,row_number
```shell
select *,
   rank() over (order by 成绩 desc) as ranking
from 班级表
```
```shell
select *,
   rank() over (order by 成绩 desc) as ranking,
   dense_rank() over (order by 成绩 desc) as dese_rank,
   row_number() over (order by 成绩 desc) as row_num
from 班级表
```

### 聚合函数作为窗口函数
聚合函数作为窗口函数，可以在每一行的数据里直观的看到，截止到本行数据，统计数据是多少（最大值、最小值等）。同时可以看出每一行数据，对整体统计数据的影响。 <br/>
```shell
select *,
   sum(成绩) over (order by 学号) as current_sum,
   avg(成绩) over (order by 学号) as current_avg,
   count(成绩) over (order by 学号) as current_count,
   max(成绩) over (order by 学号) as current_max,
   min(成绩) over (order by 学号) as current_min
from 班级表
```

## 顺序
先条件筛选 where <br/>
后分组  group by 列 <br/>
再排序   order by  列  desc <br/>
## 去重distinct
select distinct user_id from order_tb where order_time like "2022-09-02%"; <br/>
## 包含in
where user_id in (select distinct user_id from order_tb where order_time like "2022-09-02%") <br/>
## 字符串处理
[字符串处理大全](https://blog.csdn.net/weixin_62360479/article/details/127996907) <br/>
### 子串 substr(str,start)   |    substr(str,start,len) 
### 子串 left(str,len)  | right(str,len)
select *,left(order_time,10) as order_date from order_tb; <br/>
### 反转 reverse(str)
### 拼接 concat
## 时间处理
### 计算时间差 timestampdiff(计算粒度,开始时间,结束时间)
timestampdiff()函数：用于计算两个日期或时间之间的时间差。 <br/>
Note：以下的大写均可小写 <br/>
例如：SELECT TIMESTAMPDIFF(MINUTE, '2021-08-15 12:30:00', '2021-08-15 12:45:00'); 结果为 15，表示两个时间之间相差 15 分钟。 <br/>
在使用 TIMESTAMPDIFF() 函数时，第一个参数可以是 YEAR、MONTH、DAY、HOUR、MINUTE、SECOND 、QUARTER（季）、WEEK（周）等。 <br/>
```shell
select
	tb.logtime as order_time,
  tb1.logtime as pay_time,
  timestampdiff(second,tb.logtime,tb1.logtime) as gap
from order_log as tb inner join select_log as tb1 on tb.order_id = tb1.order_id;
```
## 四舍五入与取整
round(值,2)  第2个参数指取几位小数 <br/>
取整： <br/>
round(值，0) <br/>
floor(值) <br/>
ceiling(值) <br/>
# other
数据库（文件柜） <br/>
数据库软件：数据库管理系统（DBMS） <br/>
数据库是通过DBMS创建和操纵的容器，而具体它究竟是什么，形式如何，各种数据库都不一样。 <br/>
## 1.Distinct关键字（必须直接放在列名的前面；关键字作用于所有要查的列） <br/>
## 2.行数限制： <br/>
Mysql（需要使用LIMIT子句） <br/>
select prod_name from Products limit 4; <br/>
select prod_name from Products limit 4 offset 3;(第一个数字：检索的行数；第二个数字：从哪开始，从0开始) <br/>
select prod_name from Products limit 3,4; <br/>
Oracle（需要基于ROWNUM行计数器来计算行）select prod_name from Products where rownum <= 5; <br/>
## 3.	注释 <br/>
--单行 <br/>
/_多行_/ <br/>
## 4.	排序 <br/>
Order by prod_price desc,prod_name; <br/>
Order by位于where之后 <br/>
## 5.	Where <br/>
1）Between操作符（必须指定两个值——所需范围的低端值和高端值，这两个值必须用and分隔，between匹配范围包括开始值和结束值）：select prod_name,prod_price from Products where prod_price between 5 and 10; <br/>
2）is null <br/>
3）or(匹配任一条件) <br/>
And和or组合使用：and优先级高于or（用圆括号消除歧义） <br/>
4）in（指定条件范围，范围中的每个条件都可以进行匹配；由逗号分隔，括在圆括号中） <br/>
In的最大优点是可以包含其他select语句 <br/>
5）not(where子句中用来否定其后条件的关键字) <br/>
Select prod_name from products where not vend_id = ‘DLL01’ order by prod_name; <br/>
## 6.	通配符（用来匹配值的一部分的特殊字符） <br/>
为在搜索子句中使用通配符，必须使用like操作符 <br/>
通配符搜索只能用于文本字段，非文本数据类型字段不能使用通配符搜索。 <br/>
A.	百分号（%）通配符：任何字符出现任意次数，可在任意位置使用，并且可以使用多个通配符。除了能匹配一个或多个字符外，%还能匹配0个字符。通配符%不能匹配null,子句where prod_name like ‘%’不会匹配产品名称为null的行。 <br/>
B.	下划线（_）通配符：只匹配单个字符，而不是多个字符 <br/>
## 7.	拼接字段 <br/>
使用||拼接两个列 <br/>
Select vend_name || ‘ (’ || vend_country || ‘)’ from Vendors order by vend_name; <br/>
许多数据库（不是所有）保存填充为列宽的文本值，而实际上你要的结果不需要这些空格。这可以使用SQL的RTRIM()函数来完成。 <br/>
Select RTRIM(vend_name) || ‘ (’ || RTRIM(vend_country) || ‘)’ AS vend_title from Vendors order by vend_name; <br/>
NOTE:TRIM函数 <br/>
RTRIM（去掉字符串右边的空格） <br/>
LTRIM（去掉字符串左边的空格） <br/>
TRIM（去掉字符串左右两边的空格） <br/>
## 8.	聚集函数 <br/>
AVG()   注意：只用于单个列，为了获得多个列的平均值，必须使用多个此函数。AVG()函数忽略列值为null的行。AVG(DISTINCT  column)只包含不同的值，指定DISTINCT参数。 <br/>
COUNT()  两种方式：COUNT(*)不管表列中是否包含空值；COUNT(column)忽略null值。 <br/>
MAX()   MAX()函数忽略列值为null的行。 <br/>
MIN()   MIN()函数忽略列值为null的行。 <br/>
SUM()  SUM()函数忽略列值为null的行。SUM(DISTINCT  column)只包含不同的值，指定DISTINCT参数。 <br/>
## 9.分组数据 <br/>
GROUP BY子句 <br/>
GROUP BY子句中列出的每一列都必须是检索列或有效的表达式（但不能是聚集函数）。如果在select中使用表达式，则必须在GROUP BY子句中指定相同的表达式，不能使用别名。除聚集计算语句外，select语句中的每一列都必须在GROUP BY子句中给出。 <br/>
HAVING子句：过滤分组（WHERE过滤行，而HAVING过滤分组。HAVING支持所有WHERE操作符） <br/>
例：列出具有两个以上产品且其价格大于等于4的供应商 <br/>
Select vend_id,count(_) as num_prods from Products where prod_price >= 4  group by vend_id having count(_) >= 2; <br/>
(where子句过滤所有prod_price至少为4的行，然后按vend_id分组数据，having子句过滤计数为2或2以上的分组) <br/>
例：检索包含3个或更多物品的订单号和订购物品的数目，要按订购物品的数目排序输出 <br/>
Select order_num,count(_) as items from OrderItems group by order_num having count(_) >= 3 order by items,order_num; <br/>
## 10.Select子句及其顺序 <br/>
Select <br/>
From <br/>
Where <br/>
Group by <br/>
Having <br/>
Order by <br/>
## 11.子查询（NOTE:作为子查询的SELECT语句只能查询单个列。企图检索多个列将返回错误。子查询常用于where子句的in操作符中） <br/>
Select cust_name,cust_contact from Customers where cust_id in(select cust_id from Order where order_num in (select order_num from OrderItems where prod_id = ‘RGAN01’)); <br/>
## 12.	联结（联结是一种机制，用来在一条select语句中关联表，因此称为联结） <br/>
Select vend_name,prod_name,prod_price from Vendors,Products where Vendors.vend_id = Products.vend_id; <br/>
内联结：等值联结，它基于两个表之间的相等测试。 <br/>
Select vend_name.prod_name,prod_price from Venders inner join Products on Vendors.vend_id = Products.vend_id; <br/>
外联结：(外联结还包括没有关联行的行，在使用outer join语法时，必须使用right或left关键字指定包括其所有行的表) <br/>
对每个顾客下的订单进行计数，包括哪些至今尚未下订单的顾客； <br/>
列出所有产品以及订购数量，包括没有人订购的产品； <br/>
计算平均销售规模，包括那些至今尚未下订单的顾客 <br/>
Select Customers.cust_id,Orders.order_num from Customers left outer join Orders on Customers.cust_id = Orders.cust_id; <br/>
全外联结：它检索两个表中的所有行并关联那些可以关联的行。 <br/>
Select Customers.cust_id,Orders.order_num from Orders full outer join Customers on Orders.cust_id = Customers.cust_id; <br/>
## 13.	组合查询（使用union很简单，所要做的只是给出每条select语句，在各条语句之间放上关键字union） <br/>
Select cust_name,cust_contact,cust_email from Customers where cust_state in(‘IL’,’IN’,’MI’) <br/>
union <br/>
Select cust_name,cust_contact,cust_email from Customers where cust_name = ‘Fun4All’; <br/>
如果组合四条select语句，将要使用三个union关键字。 <br/>
Union中的每个查询必须包含相同的列、表达式或聚集函数（不过，各个列不需要以相同的次序列出） <br/>
Union从查询结果集中自动去除了重复的行，如果不用去除重复行，可使用union all. <br/>
在用union组合查询时，只能使用一条order by子句，它必须位于最后一条select语句之后，它对返回的所有结果排序。 <br/>
Select cust_name,cust_contact,cust_email from Customers where cust_state in(‘IL’,’IN’,’MI’) <br/>
union <br/>
Select cust_name,cust_contact,cust_email from Customers where cust_name = ‘Fun4All’ order by cust_name,cust_contact; <br/>
## 14.	视图 <br/>
视图是虚拟的表，与包含数据的表不一样，视图只包含使用时动态检索数据的查询。 <br/>
把整个查询包装成一个名为ProductCustomers的虚拟表，则可以如下轻松的检索出相同的数据。Select cust_name,cust_contact from ProductCustomers where prod_id = ‘RGAN01’; <br/>

创建视图 <br/>
Create view ProductCustomers as select cust_name.cust_contact,prod_id from Customers,Orders,OrderItems where Customers.cust_id = Orders.cust_id and OrderItems.order_num = Orders.order_num; <br/>
可一次性编写基础的SQL,然后根据需要多次使用。 <br/>
视图提供了一种封装select语句的层次，可用来简化数据处理，重新格式化或保护基础数据。 <br/>

## 15. 存储过程 <br/>
存储过程就是为以后使用而保存的一条或多条SQL语句。可将其视为批文件，虽然它们的作用不仅限于批处理。使用存储过程有三个主要的好处，即简单、安全、高性能。 <br/>
例： <br/>
为了处理订单，必须核对以保证库存中有相应的物品。 <br/>
如果物品有库存，需要预定，不再出售给别的人，并且减少物品数据以反映正确的库存量。 <br/>
库存中没有的物品需要订购，这需要与供应商进行某种交互。 <br/>
关于哪些物品入库（并且可以立即发货）和哪些物品退订，需要通知相应的顾客。 <br/>
1）执行存储过程 <br/>
执行存储过程的SQL语句很简单，即execute. <br/>
Execute接受存储过程名和需要传递给它的任何参数。 <br/>
例：execute AddNewProduct(‘JTS01’,’Stuffed Eiffel Tower’,6.49,’Plush stuffed toy with the text La Tour Eiffel in red white and Blue’); <br/>
2）创建存储过程 <br/>
