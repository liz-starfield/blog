---
icon: lightbulb
date: 2022-06-12
category:
  - Python
tag:
  - Python
---
# Python的数据类型
  - 1. 数据类型
  - 2. String操作
  - 3. List操作
  - 4. Tuple操作
  - 5. Set操作
  - 6. Dictionary操作
<!-- more -->


## 1. 数据类型

### 1.1. Number 数字

#### 1.1.1. Integer 整数（正整数，负整数；十进制，十六进制）

Python允许在数字中间以_分隔，因此，写成10_000_000_000和10000000000是完全一样的。十六进制数也可以写成0xa1b2_c3d4。

注意：Python的整数没有大小限制，而某些语言的整数根据其存储长度是有大小限制的，例如Java对32位整数的范围限制在-2147483648-2147483647。

#### 1.1.2. Float 浮点数（普通表示，科学计数法表示）

用科学计数法表示，把10用e替代，1.23x10<sup>9</sup>就是1.23e<sup>9</sup>，0.000012可以写成1.2e<sup>-5</sup>，等等。

注意：Python的浮点数也没有大小限制，但是超出一定范围就直接表示为inf（无限大）。

### 1.2. String 字符串

#### 1.2.1. 单行内容和多行内容
##### 1.2.1.1. 单行内容

- 用单引号'或双引号"括起来表示单行内容
- 单行内容为了美观用反斜杠\换行写，实际还是单行内容
  
```
# 用'表示单行内容
>>> greeting = 'Hello, World!'
>>> print(greeting)
Hello, World!
>>> print(len(greeting))
13

# 用"表示单行内容
>>> sentence = "I hope you are enjoying 30 days of Python Challenge"
>>> print(sentence)
I hope you are enjoying 30 days of Python Challenge

# 单行内容为了美观用反斜杠\换行写，实际还是单行内容
>>> sentence1 = "I hope you are\
... enjoying 30 days\
... of Python Challenge."
>>> print(sentence1)
I hope you areenjoying 30 daysof Python Challenge.
```
##### 1.2.1.2. 多行内容

- 用三引号（'''或"""）括起来表示多行内容
- 单行内容里用\n进行换行

```python
# 用'''表示多行内容
>>> multiline_string = '''I am a teacher and enjoy teaching.
... I didn't find anything as rewarding as empowering people.
... That is why I created 30 days of python.'''
>>> print(multiline_string)
I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python.

# 用"""表示多行内容
>>> multiline_string = """I am a teacher and enjoy teaching.
... I didn't find anything as rewarding as empowering people.
... That is why I created 30 days of python."""
>>> print(multiline_string)
I am a teacher and enjoy teaching.
I didn't find anything as rewarding as empowering people.
That is why I created 30 days of python.

# 单行内容里用\n进行换行表示多行内容
>>> sentence = "I hope you are\n enjoying 30 days\n of Python Challenge"
>>> print(sentence)
I hope you are
 enjoying 30 days
 of Python Challenge
```

#### 1.2.2. 转义字符和不转义表示

##### 1.2.2.1. 转义字符 \

| \n | 换行 |
| --- | --- |
| \t | 制表符 |
| \\ | 斜杠 |
| \' | 单引号 |
| \" | 双引号 |

##### 1.2.2.2. 不转义表示：在字符串前加r，表示内部的字符串默认不转义

```
>>> print('\\\t\\')
\       \

>>> print(r'\\\t\\')
\\\t\\

>>> print('''hello,\n
world''')
hello,

world
>>> print(r'''hello,\n
world''')
hello,\n
world
```
### 1.3. Boolean 布尔值

只有True、False两种值

首字母要大写

### 1.4. 空值（None）

首字母要大写

### 1.5. 组合类型汇总:List&Tuple&Set&Dictionary

|  | 表现 | 有序/无序 | 唯一/重复 | 可变/不可变 |
| --- | --- | --- | --- | --- |
| List | 方括号 [] | 有序 | 重复 | 可变 |
| Tuple | 圆括号 () | 有序 | 重复 | 不可变 |
| Set | 花括号 {} | 无序 | 唯一 | 可变 |
| Dictionary | 花括号 {} | 无序 | 唯一 | 可变 |

### 1.6. List（有序，允许不同数据类型项）

```
['Earth', 'Jupiter', 'Neptune', 'Mars', 'Venus', 'Saturn', 'Uranus', 'Mercury']# planets
```

### 1.7. Tuple（创建后无法修改，有序，允许不同数据类型项）

```
('Earth', 'Jupiter', 'Neptune', 'Mars', 'Venus', 'Saturn', 'Uranus', 'Mercury') # planets
```

### 1.8. Set（唯一，无序，无索引）

Set is a collection of unordered and un-indexed distinct elements.

```
{3.14, 9.81, 2.7} # order is not important in set
```

### 1.9. Dictionary（key value 对，无序）

a value could be any data types

## 2. String操作

### 2.1. 连接join
方式一：+

方式二：'连接符'.join(序列)

方式三："hello"*3		
字符串*3=3个字符串连接
'hellohellohello'

```
# +号连接
full_name = 'Asabeneh' + ' ' + 'Yetayeh'

# join函数连接
name = ('Asabeneh','Yetayeh') # tuple
full_name = ' '.join(name)

web_tech = ['HTML', 'CSS', 'JavaScript', 'React'] # list
result = ' '.join(web_tech)
print(result) # 'HTML CSS JavaScript React'
result1 = '# '.join(web_tech)
print(result1) # 'HTML# CSS# JavaScript# React'

# *号
>>> "hello"*3		#字符串*3=3个字符串连接
'hellohellohello'
```
### 2.2. 拆分split
- string.split()：默认空格作为分隔符
- string.split('分隔符')
```
challenge = 'thirty days of python'
print(challenge.split()) # ['thirty', 'days', 'of', 'python']
challenge = 'thirty, days, of, python'
print(challenge.split(', ')) # ['thirty', 'days', 'of', 'python']
```
### 2.3. 格式化f-Strings
- f-Strings
```
a = 4
b = 3
print(f'{a} + {b} = {a +b}')
print(f'{a} - {b} = {a - b}')
print(f'{a} * {b} = {a * b}')
print(f'{a} / {b} = {a / b:.2f}')
print(f'{a} % {b} = {a % b}')
print(f'{a} // {b} = {a // b}')
print(f'{a} ** {b} = {a ** b}')
```
### 2.4. String转字符
方式一：unpack
```
language = 'Python'
a,b,c,d,e,f = language # unpacking sequence characters into variables
print(a) # P
print(b) # y
print(c) # t
print(d) # h
print(e) # o
print(f) # n
```
方式二：index
正索引：从左到右
（0，1，2，3）
负索引：从右到左（-1，-2，-3，-4）
```
# 正索引
language = 'Python'
first_letter = language[0]
print(first_letter) # P
second_letter = language[1]
print(second_letter) # y
last_index = len(language) - 1
last_letter = language[last_index]
print(last_letter) # n

# 负索引
language = 'Python'
last_letter = language[-1]
print(last_letter) # n
second_last = language[-2]
print(second_last) # o
```
### 2.5. 子串slice
切片 slice
- 无步长
- 有步长
```
# 无步长
language = 'Python'
first_three = language[0:3] # starts at zero index and up to 3 but not include 3
print(first_three) #Pyt
last_three = language[3:6]
print(last_three) # hon
# Another way
last_three = language[-3:]
print(last_three)   # hon
last_three = language[3:]
print(last_three)   # hon

# 有步长
language = 'Python'
pto = language[0:6:2] #
print(pto) # Pto
```
### 2.6. 反转
```
greeting = 'Hello, World!'
print(greeting[::-1]) # !dlroW ,olleH
```
### 2.7. 首字母大写
- capitalize() 格式化为非首字母均小写，第一个词首字母大写，其他词首字母小写
- title() 每个词首字母大写，非首字母均小写
```
# capitalize
challenge = 'thirty days of python'
print(challenge.capitalize()) # 'Thirty days of python'

# title
challenge = 'thirty days of python'
print(challenge.title()) # Thirty Days Of Python
```
### 2.8. 大小写替换swapcase
- swapcase()
```
challenge = 'thirty days of python'
print(challenge.swapcase())   # THIRTY DAYS OF PYTHON
challenge = 'Thirty Days Of Python'
print(challenge.swapcase())  # tHIRTY dAYS oF pYTHON
```
### 2.9.全大写upper/全小写lower
- upper()
- lower()
### 2.10. 替代replace
- replace()
```
challenge = 'thirty days of python'
print(challenge.replace('python', 'coding')) # 'thirty days of coding'
```
### 2.11. 去掉头尾strip
- strip()
- strip([chars])
字符串头尾指定的字符（默认为空格或换行符）或字符序列
该方法只能删除开头或是结尾的字符，不能删除中间部分的字符。
```
>>> str = "00000003210Runoob01230000000"
>>> str.strip('0') # 去除首尾字符 0 
'3210Runoob0123' 

>>> str2 = " Runoob "
>>> str2.strip() # 去除首尾空格
'Runoob'
 
>>> challenge = 'thirty days of pythoonnn'
>>> print(challenge.strip('noth')) 
'irty days of py'
```

### 2.12. 统计出现次数count
- count(substring)
- count(substring,start,end)
```
challenge = 'thirty days of python'
print(challenge.count('y')) # 3
print(challenge.count('y', 7, 14)) # 1, 
print(challenge.count('th')) # 2`
```
### 2.13. 查找find
- 安全的查找方法
  - find(substring)  正向查找，返回第一个；如没有，则返回-1
  - find(substring,start)
  - find(substring,start,end)
  - rfind(substring) 反向查找，返回最后一个；如没有，则返回-1
  - rfind(substring,start)
  - rfind(substring,start,end)
- 不安全的查找方法
  - index(substring) 正向查找，返回第一个；如没有，则报错
  - index(substring,start)
  - index(substring,start,end)
  - rindex(substring) 反向查找，返回最后一个；如没有，则报错
  - rindex(substring,start)
  - rindex(substring,start,end)
```
# find返回第一个
challenge = 'thirty days of python'
print(challenge.find('y'))  # 5
print(challenge.find('th')) # 0

# find返回最后一个
challenge = 'thirty days of python'
print(challenge.rfind('y'))  # 16
print(challenge.rfind('th')) # 17

# index返回第一个
challenge = 'thirty days of python'
sub_string = 'da'
print(challenge.index(sub_string))  # 7
print(challenge.index(sub_string, 9)) # error

# index返回最后一个
challenge = 'thirty days of python'
sub_string = 'da'
print(challenge.rindex(sub_string))  # 8
print(challenge.rindex(sub_string, 9)) # error
```

### 2.14. Tab扩大空格大小expandtabs
- expandtabs()
- expandtabs(tab_size)
默认tab_size是8
```
challenge = 'thirty\tdays\tof\tpython'
print(challenge.expandtabs())   # 'thirty  days    of      python'
print(challenge.expandtabs(10)) # 'thirty    days      of        python'

>>> str = "Name\tAge\tCountry\tCity\nAsabeneh\t250\tFinland\tHelsinki"
>>> str
'Name\tAge\tCountry\tCity\nAsabeneh\t250\tFinland\tHelsinki'
>>> print(str)
Name    Age     Country City
Asabeneh        250     Finland Helsinki
>>> print(str.expandtabs())
Name    Age     Country City
Asabeneh        250     Finland Helsinki
>>> print(str.expandtabs(10))
Name      Age       Country   City
Asabeneh  250       Finland   Helsinki
```
### 2.15. 是否以xx开头startswith/结尾endswith
- startswith(substring)
- endswith(substring)
```
# startswith
challenge = 'thirty days of python'
print(challenge.startswith('thirty')) # True

challenge = '30 days of python'
print(challenge.startswith('thirty')) # False

# endswith
challenge = 'thirty days of python'
print(challenge.endswith('on'))   # True
print(challenge.endswith('tion')) # False
```

### 2.16. 是否全是字母或数字isalnum
- isalnum()
```
challenge = 'ThirtyDaysPython'
print(challenge.isalnum()) # True

challenge = '30DaysPython'
print(challenge.isalnum()) # True

challenge = 'thirty days of python'
print(challenge.isalnum()) # False, space is not an alphanumeric character

challenge = 'thirty days of python 2019'
print(challenge.isalnum()) # False
```

### 2.17. 是否全是字母isalpha
- isalpha()
```
challenge = 'thirty days of python'
print(challenge.isalpha()) # False, space is once again excluded
challenge = 'ThirtyDaysPython'
print(challenge.isalpha()) # True
num = '123'
print(num.isalpha())      # False
```

### 2.18. 是否全是数字

- isdecimal()：只有0-9
- isdigit()：0-9 and some other unicode characters for numbers
- isnumeric()：just like isdigit(), just accepts more symbols, like ½

```
# 不包括小数
>>> challenge = '3.14'
>>> challenge.isdecimal()
False
>>> challenge.isdigit()
False
>>> challenge.isnumeric()
False

# isdecimal
challenge = 'thirty days of python'
print(challenge.isdecimal())  # False
challenge = '123'
print(challenge.isdecimal())  # True
challenge = '\u00B2'
print(challenge.isdigit())   # False
challenge = '12 3'
print(challenge.isdecimal())  # False, space not allowed

# isdigit
challenge = 'Thirty'
print(challenge.isdigit()) # False
challenge = '30'
print(challenge.isdigit())   # True
challenge = '\u00B2'
print(challenge.isdigit())   # True

# isnumeric
num = '10'
print(num.isnumeric()) # True
num = '\u00BD' # ½
print(num.isnumeric()) # True
num = '10.5'
print(num.isnumeric()) # False
```

### 2.19. 是否是合法变量名isidentifier
- isidentifier()
```
challenge = '30DaysOfPython'
print(challenge.isidentifier()) # False, because it starts with a number
challenge = 'thirty_days_of_python'
print(challenge.isidentifier()) # True
```
### 2.20. 是否全是大写isupper/小写islower
- isupper() 
- islower()
```
# islower
challenge = 'thirty days of python'
print(challenge.islower()) # True
challenge = 'Thirty days of python'
print(challenge.islower()) # False

# isupper
challenge = 'thirty days of python'
print(challenge.isupper()) #  False
challenge = 'THIRTY DAYS OF PYTHON'
print(challenge.isupper()) # True
```

## 3. List操作
### 3.1. Create
方式一：内置函数 list()

方式二：方括号 []

[i for i in iterable if expression]

方式三：List Comprehension

```
# empty
lst = list()
lst = []

# init
nums = [0, 1, 2, 3, 4, 5]  # all are the same data types - a list of numbers
fruits = ['banana', 'orange', 'mango', 'lemon'] # all the same data types - a list of strings (fruits)
diffs = ['Banana', 10, False, 9.81] # different data types in the list - string, integer, boolean and float

language = 'Python'
lst = list(language) # changing the string to list
print(type(lst))     # list
print(lst)           # ['P', 'y', 't', 'h', 'o', 'n']

# Print the lists and its length
print('Fruits:', fruits)
print('Number of fruits:', len(fruits))

language = 'Python'
lst = [i for i in language]
print(type(lst)) # list
print(lst)       # ['P', 'y', 't', 'h', 'o', 'n']

# Generating numbers
numbers = [i for i in range(11)]  # to generate numbers from 0 to 10
print(numbers)                    # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# It is possible to do mathematical operations during iteration
squares = [i * i for i in range(11)]
print(squares)                    # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# It is also possible to make a list of tuples
numbers = [(i, i * i) for i in range(11)]
print(numbers)                             # [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]


# Generating even numbers
even_numbers = [i for i in range(21) if i % 2 == 0]  # to generate even numbers list in range 0 to 21
print(even_numbers)                    # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Generating odd numbers
odd_numbers = [i for i in range(21) if i % 2 != 0]  # to generate odd numbers in range 0 to 21
print(odd_numbers)                      # [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
# Filter numbers: let's filter out positive even numbers from the list below
positive_even_numbers = [i for i in range(21) if i % 2 == 0 and i > 0]
print(positive_even_numbers)                    # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Flattening a three dimensional array
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened_list = [ number for row in list_of_lists for number in row]
print(flattened_list)    # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
### 3.2. Access&Modify
lst[index]

• 正索引

• 负索引

```
# 正索引
second_fruit = fruits[1]
print(second_fruit)     # orange
fruits[0] = 'avocado'
print(fruits)       #  ['avocado', 'orange', 'mango', 'lemon']

# 负索引
first_fruit = fruits[-4]
print(first_fruit)      # banana
```

### 3.3. Find Index
lst.index(item)

```
fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits.index('orange'))   # 1
ages = [22, 19, 24, 25, 26, 24, 25, 24]
print(ages.index(24))           # 2, the first occurrence
```

### 3.4. Items
1、Unpack List Items

1）item1,item2,*rest = list

2）*list 

2、Slice List Items

list[start：end：step]

start和end可以是正索引，也可以是负索引

左闭右开：[start，end）

```
list1 = [1,2,3]
list2 = [4,5,6]
list2[:] = list1 # 将list2完全替换为list1
print(list2) # [1, 2, 3]
list2[2:] = list1 # 将list2的下标2及之后的元素用list1替换
print(list2) # [1, 2, 1, 2, 3]
```

```
# First Example
fruits = ['banana', 'orange', 'mango', 'lemon','lime','apple']
first_fruit, second_fruit, third_fruit, *rest = lst
print(first_fruit)     # banana
print(second_fruit)    # orange
print(third_fruit)     # mango
print(rest)           # ['lemon','lime','apple']

# Second Example about unpacking list
first, second, third,*rest, tenth = [1,2,3,4,5,6,7,8,9,10]
print(first)          # 1
print(second)         # 2
print(third)          # 3
print(rest)           # [4,5,6,7,8,9]
print(tenth)          # 10

# Third Example
def sum_of_five_nums(a, b, c, d, e):
    return a + b + c + d + e

lst = [1, 2, 3, 4, 5]
print(sum_of_five_nums(*lst))  # 15


fruits = ['banana', 'orange', 'mango', 'lemon']
all_fruits = fruits[0:4] # it returns all the fruits
# this will also give the same result as the one above
all_fruits = fruits[0:] # if we don't set where to stop it takes all the rest
orange_and_mango = fruits[1:3] # it does not include the first index
orange_mango_lemon = fruits[1:]
orange_and_lemon = fruits[::2] # here we used a 3rd argument, step. It will take every 2cnd item - ['banana', 'mango']

all_fruits = fruits[-4:] # it returns all the fruits
orange_and_mango = fruits[-3:-1] # it does not include the last index,['orange', 'mango']
orange_mango_lemon = fruits[-3:] # this will give starting from -3 to the end,['orange', 'mango', 'lemon']
reverse_fruits = fruits[::-1] # a negative step will take the list in reverse order,['lemon', 'mango', 'orange', 'banana']
```

### 3.5. Insert
1、在末尾添加

list.append(item)

2、在index位置添加

list.insert(index,item)

```
fruits.append('apple')
fruits.insert(2, 'apple')
```

### 3.6. Remove
1、按item

list.remove(item) 去掉出现的第一个item

2、按index

list.pop() 去掉最后一项

list.pop(index) 去掉index那项

3、按index，range，all

del 关键字

del list[index]

del list[start:end]

del list

4、clear

list.clear()

```
# remove
fruits = ['banana', 'orange', 'mango', 'lemon', 'banana']
fruits.remove('banana')
print(fruits)  # ['orange', 'mango', 'lemon', 'banana'] - this method removes the first occurrence of the item in the list

# pop
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.pop()
print(fruits)       # ['banana', 'orange', 'mango']

fruits.pop(0)
print(fruits)       # ['orange', 'mango']

# del
fruits = ['banana', 'orange', 'mango', 'lemon', 'kiwi', 'lime']
del fruits[0]
print(fruits)       # ['orange', 'mango', 'lemon', 'kiwi', 'lime']
del fruits[1]
print(fruits)       # ['orange', 'lemon', 'kiwi', 'lime']
del fruits[1:3]     # this deletes items between given indexes, so it does not delete the item with index 3!
print(fruits)       # ['orange', 'lime']
del fruits
print(fruits)       # This should give: NameError: name 'fruits' is not defined

# clear
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.clear()
print(fruits)       # []
```

### 3.7. Contain
- in
  
item in list
```
fruits = ['banana', 'orange', 'mango', 'lemon']
does_exist = 'banana' in fruits
print(does_exist)  # True
does_exist = 'lime' in fruits
print(does_exist)  # False
```
### 3.8. Copy
list.copy()

```
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits_copy = fruits.copy()
print(fruits_copy)       # ['banana', 'orange', 'mango', 'lemon']
```
### 3.9. Connect
方式一：Plus Operator (+)

list3 = list1 + list2 + list3

方式二：extend()

list1.extend(list2)

方式三：unpack：*list

lst = [*list_one, *list_two]

```
positive_numbers = [1, 2, 3, 4, 5]
zero = [0]
negative_numbers = [-5,-4,-3,-2,-1]

# plus operator
integers = negative_numbers + zero + positive_numbers
print(integers) # [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

# extend
negative_numbers.extend(zero)
negative_numbers.extend(positive_numbers)
print('Integers:', negative_numbers) # Integers: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

# unpack
lst_one = [1, 2, 3]
lst_two = [4, 5, 6, 7]
lst = [0, *list_one, *list_two]
print(lst)          # [0, 1, 2, 3, 4, 5, 6, 7]
```

### 3.10. Count
list.count(item)
### 3.11. Reverse
list.reverse()

Note：会在原本list上生效
```
fruits = ['banana', 'orange', 'mango', 'lemon']
print(fruits.index('orange'))   # 1
ages = [22, 19, 24, 25, 26, 24, 25, 24]
print(ages.index(24))           # 2, the first occurrence
```
### 3.12. Sort
方式一：sort()  List函数

Note：会在原本list上生效

lst.sort()          # ascending

lst.sort(reverse=True)    # descending
```
# sort
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.sort()
print(fruits)             # sorted in alphabetical order, ['banana', 'lemon', 'mango', 'orange']
fruits.sort(reverse=True)
print(fruits) # ['orange', 'mango', 'lemon', 'banana']
ages = [22, 19, 24, 25, 26, 24, 25, 24]
ages.sort()
print(ages) #  [19, 22, 24, 24, 24, 25, 25, 26]

ages.sort(reverse=True)
print(ages) #  [26, 25, 25, 24, 24, 24, 22, 19]
```

方式二：sorted() 内置函数

Note：不会在原本list上生效

sorted(list)

sorted(list,reverse=True)
```
# sorted
fruits = ['banana', 'orange', 'mango', 'lemon']
print(sorted(fruits))   # ['banana', 'lemon', 'mango', 'orange']
# Reverse order
fruits = ['banana', 'orange', 'mango', 'lemon']
fruits = sorted(fruits,reverse=True)
print(fruits)     # ['orange', 'mango', 'lemon', 'banana']
```

### 3.13. index,item循环
语法
```
for index,item in enumerate(list):
    print(index, item)
```
示例
```
for index, i in enumerate(countries):
    print('hi')
    if i == 'Finland':
        print('The country {i} has been found at index {index}')

""" 输出结果
The country Finland has been found at index 1.
"""
```

### 3.14. zip组合循环
语法
```
for f, v in zip(fruits, vegetables):
    fruits_and_veges.append({'fruit':f, 'veg':v})
```
示例
```
fruits = ['banana', 'orange', 'mango', 'lemon', 'lime']                    
vegetables = ['Tomato', 'Potato', 'Cabbage','Onion', 'Carrot']
fruits_and_veges = []
for f, v in zip(fruits, vegetables):
    fruits_and_veges.append({'fruit':f, 'veg':v})

print(fruits_and_veges)

""" 输出结果
[{'fruit': 'banana', 'veg': 'Tomato'}, {'fruit': 'orange', 'veg': 'Potato'}, {'fruit': 'mango', 'veg': 'Cabbage'}, {'fruit': 'lemon', 'veg': 'Onion'}, {'fruit': 'lime', 'veg': 'Carrot'}]
"""
```
## 4. Tuple操作
### 4.1. Access
tpl[index]

• 正索引

• 负索引

![正索引](images/positive_index.png)

![负索引](images/negative_index.png)

### 4.2. Unpack
tuple同list一致

1）item1,item2,*rest = tpl

2）*tpl

### 4.3. Slice
tpl[start:end:step]
### 4.4. ChangeType
lst = list(tpl)

tpl=tuple(list)
### 4.5. Contain
item in tpl
### 4.6. Connect
tpl3 = tpl1 + tpl2 + tpl3
### 4.7. Delete
del关键字

del tpl

## 5. Set操作
### 5.1. Create
```
1. empty

set1 = set()

Note:不可使用set1 = {}初始化，这会是dict类型

2. init

set1 = {'item1', 'item2', 'item3', 'item4'}
```
### 5.2. Access
loops
### 5.3. Contain
item in set
### 5.4. Add
```
1. one item

set.add(item)

2.multiple items

set.update(list/tuple/set1)

set.union(set1)  join
```
### 5.5. Remove
```
1.指定

set.remove(item)

没有会报错

set.discard(item)

没有不报错

2.随机

removed_item = set.pop()

pop会返回删除项

3.清空

set.clear()

4.完全删除

del关键字

del set
```
### 5.6. ChangeType
set = set(list)

list = list(set)
### 5.7. 交集 Intersection
set1.intersection(set2)

```
# syntax
st1 = {'item1', 'item2', 'item3', 'item4'}
st2 = {'item3', 'item2'}
st1.intersection(st2) # {'item3', 'item2'}
```
### 5.8. 差集 Difference
1.单向

Note：以下两个结果不同

set1.difference(set2)

set2.difference(set1)

2.双向

Note：以下两个结果相同，均返回单向差集的和

set1.symmetric_difference(set2)

set2.symmetric_difference(set1)

```
>>> python = {'p', 'y', 't', 'h', 'o','n'}
>>> dragon = {'d', 'r', 'a', 'g', 'o','n'}

# 单向
>>> python.difference(dragon)
{'t', 'p', 'y', 'h'}
>>> dragon.difference(python)
{'r', 'd', 'g', 'a'}

# 双向
>>> python.symmetric_difference(dragon)
{'r', 'g', 'p', 'd', 'y', 'h', 't', 'a'}
>>> dragon.symmetric_difference(python)
{'r', 'g', 'd', 'p', 'y', 'h', 't', 'a'}
```

### 5.9. 是否是子集/父集
Subset: issubset()

set1.issubset(set2)

Super set: issuperset()

set1.issuperset(set2)

```
# syntax
st1 = {'item1', 'item2', 'item3', 'item4'}
st2 = {'item2', 'item3'}
st2.issubset(st1) # True
st1.issuperset(st2) # True
```
### 5.10. 是否互斥
set1.isdisjoint(set2)
```
even_numbers = {0, 2, 4 ,6, 8}
even_numbers = {1, 3, 5, 7, 9}
even_numbers.isdisjoint(odd_numbers) # True, because no common item

python = {'p', 'y', 't', 'h', 'o','n'}
dragon = {'d', 'r', 'a', 'g', 'o','n'}
python.isdisjoint(dragon)  # False, there are common items {'o', 'n'}
```

## 6. Dictionary操作
### 6.1. Create
```
1、empty

empty_dict = {}

2、init

dict = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
```

```
person = {
    'first_name':'Asabeneh',
    'last_name':'Yetayeh',
    'age':250,
    'country':'Finland',
    'is_marred':True,
    'skills':['JavaScript', 'React', 'Node', 'MongoDB', 'Python'],
    'address':{
        'street':'Space street',
        'zipcode':'02210'
    }
    }
```
### 6.2. Access & Add & Update
```
1、查询、新增、修改

dict['key']

Note：原本有key，可查询，可修改；原本没key，可新增

Note：如果不是新增，key不存在，则报错

2、只查询

dict.get('key')

Note：如果key不存在，则返回None
```
```
# dict['key']
print(person['first_name']) # Asabeneh
print(person['country'])    # Finland
print(person['skills'])     # ['JavaScript', 'React', 'Node', 'MongoDB', 'Python']
print(person['skills'][0])  # JavaScript
print(person['address']['street']) # Space street
print(person['city'])       # Error

# Add key
person['job_title'] = 'Instructor'
# Update value
person['skills'].append('HTML')
person['first_name'] = 'Eyob'
person['age'] = 252


# dict.get('key')
print(person.get('first_name')) # Asabeneh
print(person.get('country'))    # Finland
print(person.get('skills')) #['HTML','CSS','JavaScript', 'React', 'Node', 'MongoDB', 'Python']
print(person.get('city'))   # None
```
### 6.3. Contain
key in dict
```
# syntax
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
print('key2' in dct) # True
print('key5' in dct) # False
```
### 6.4. Remove
```
1、去除key

dict.pop(key)

2、去除最后一项

dict.popitem()

3、清空

dict.clear()

4、去除key或完全去除

del 关键字

del dict[key]

del dict
```

### 6.5. ChangeType
```
1、tuples list

dict.items()

2、keys list

keys = dict.keys()

3、values list

values = dict.values()
```

```
# tuples list
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
print(dct.items()) # dict_items([('key1', 'value1'), ('key2', 'value2'), ('key3', 'value3'), ('key4', 'value4')])


# keys
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
keys = dct.keys()
print(keys)     # dict_keys(['key1', 'key2', 'key3', 'key4'])

# values
dct = {'key1':'value1', 'key2':'value2', 'key3':'value3', 'key4':'value4'}
values = dct.values()
print(values)     # dict_values(['value1', 'value2', 'value3', 'value4'])
```
### 6.6. Copy
dict_copy = dict.copy()
### 6.7. Unpack
```
**dict
```

```
def unpacking_person_info(name, country, city, age):
    return f'{name} lives in {country}, {city}. He is {age} year old.'
dct = {'name':'Asabeneh', 'country':'Finland', 'city':'Helsinki', 'age':250}
print(unpacking_person_info(**dct)) # Asabeneh lives in Finland, Helsinki. He is 250 years old.
```