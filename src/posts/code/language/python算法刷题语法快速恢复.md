---
icon: lightbulb
---
# Python算法刷题语法快速恢复
## 关键词
and 与
or  或
not 非
is  等于（比较对象）
== 等于（比较值）
True  真
False 假
None 空

## 选择
n1 = int(num1[i]) if i >= 0 else 0
return True if len(stack) == 0 else False
if root in (None, p, q): return root

## 循环
while xxx:
for item in nums:
for index, item in enumerate(nums): 
for i in range(n)： # 从0到（n-1）
for i in range(1, len(prices)): # 从1到（len-1）
for _ in range(len(q)): # 如果不需要用到遍历的值，用“_”

## 动态规划
### 上三角/下三角 （按长度大小进行迭代，从左下角或右上角开始）
for L in range(2,n+1): # 长度
    for start in range(n): # 开始

## 定义变量
res = "" # 1个变量
n1,n2,n3 = len(a1),len(a2),0 # 多个变量
slow = fast = head # 2个赋相同值

## 实例化对象 
h = ListNode(0, None) # 前面不加new

## 通用函数
len(xxx) # 求长度
str(xxx) # 转字符串
int(xxx) # 转整型
min(xxx)
max(xxx)

## 字符函数
c.lower() # 转小写
c.isalnum() # 是字母或数字

## 计算符
// 整除（得到整数）
/ 除法（得到小数）

每行结尾不用加；
递归，方法前要加self.


## 词典/哈希表
dict = {} # 定义
dict[target-item] # 取值
dict[item] = index # 赋值
if target-item in dict # 判断key是否存在

## 字符串
“00123”.lstrip(0) # 去掉前缀0
s[::-1] # 反转

## 数组
dp = [0 for _ in range(size)] # 定义方式1
dp[i] = 5 # 添加方式1（只有初始化长度足够，这样赋值才不会索引越界）

res = list() # 定义方式2
res.append(xxx) # 添加方式2（添加不能是res[i]=5的方式赋值）

res[i] # 取 
res[::-1] # 反转

## 二维数组
dp = [[False] * n for _ in range(n)] # 定义
dp[i][j] # 存取
s[begin: begin+max_len] # 子串，左闭右开

### 二维数组排序
sorted不在原有数组上排序，生成新的数组
array = sorted(array, key=lambda x:(x[0],x[1])) # 按第一个元素升序，再按第二个元素升序
array = sorted(array, key=lambda x: (x[0], -x[1]))  # 按第一个元素升序，再按第二个元素降序

sort在原有数组上排序  
array.sort(key=lambda x:(x[0],x[1]))
array.sort(key=lambda x:(x[0],-x[1]))

## 栈（同数组一样）
stack = list() # 定义
stack.append(xxx) # 存
stack.pop() # 取
stack[-1] # 栈顶

## 队列
q = collections.deque() # 定义
q.popleft() # 出队
q.append() # 入队 

## 堆
heapq


