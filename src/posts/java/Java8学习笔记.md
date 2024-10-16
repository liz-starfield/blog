---
icon: lightbulb
---
# Java8学习笔记
- [Java8学习笔记](#java8学习笔记)
- [一、行为参数化](#一行为参数化)
- [二、Lambda表达式](#二lambda表达式)
- [三、函数式接口](#三函数式接口)
- [四、方法引用](#四方法引用)
- [五、Stream API](#五stream-api)
- [六、Optional类](#六optional类)
- [七、举例](#七举例)
- [50.JDK1.8 都有哪些新特性？ ](#50jdk18-都有哪些新特性-)
- [51.Lambda 表达式了解多少？](#51lambda-表达式了解多少)
- [52.Optional 了解吗？](#52optional-了解吗)
- [53.Stream 流用过吗？](#53stream-流用过吗)


# 一、行为参数化
“行为” + “参数化” <br/>
行为：即某一段具体的业务代码块 <br/>
参数化：将行为作为参数 <br/>
是整个lambda表达式，以及Stream API的基础 <br/>
**作用：可以重复使用同一个方法，给它传不同的行为来达到不同的目的。可以让代码更好地适应不断变化的要求，减轻未来的工作量。类似于策略模式。** <br/>
# 二、Lambda表达式
（一）语法：**参数列表 ->  Lambda体** <br/>
Note：-> 称为Lambda操作符或箭头操作符 <br/>
（二）原则：能省则省 <br/>
1.左侧推断类型省（参数列表可以不写参数类型，会根据上下文进行类型推断） <br/>
2.左右逢一括号省，return省（左边一个参数省去小括号，右侧一条语句省去大括号并省去return） <br/>
（三）前提：函数式接口（只有一个抽象方法的接口，Note：该接口允许有多个默认方法和静态方法） <br/>
可使用注解@FunctionalInterface修饰，来检查是否是函数式接口 <br/>
（四）复合Lambda表达式 <br/>
语法：Lambda表达式.默认方法1.默认方法2 <br/>
前提：函数式接口中有默认方法 <br/>
举例：Predicate predicate = (stu->"女".equals(stu.getGender())).or(stu->stu.getAge()<15); <br/>
（五）作用 <br/>
**避免为只用一两次的短方法写一堆定义，也用不着去找自己到底传递了什么代码，代码更干净更清晰。** <br/>
Note：但要是Lambda的长度有很多行，不一目了然，那你还是应该用方法引用（在第四点有提到）来指向一个有描述性名称的方法，而不是使用匿名的Lambda。你应该以代码的清晰度为准绳。 <br/>
# 三、函数式接口
（一）定义 <br/>
只有一个抽象方法的接口，称为函数式接口 <br/>
（二）Java内置的四大核心函数式接口 <br/>

| 接口 | 类型 | 抽象方法 |
| --- | --- | --- |
| Consumer | 消费型接口，有入参，没有返参 | void accept(T t); |
| Supplier | 供给型接口，没有入参，有返参 | T get(); |
| Function | 函数型接口，既有入参，又有返参 | R apply(T t); |
| Predicate | 断言型接口，有入参，返参为布尔类型 | boolean test(T t); |

# 四、方法引用
（一）若Lambda体中的内容有方法已经实现了，我们可以使用“方法引用”。 <br/>
可以理解为方法引用就是Lambda表达式的快捷写法 <br/>
Note：引用的方法要与函数式接口中抽象方法的参数和返回值保持一致 <br/>
（二）语法格式 <br/>
对象::实例方法名 <br/>
类::静态方法名 <br/>
类::实例方法名 <br/>
类::new（构造器引用，调用哪个构造器取决于返回值类型的限制） <br/>
String[]::new（数组引用） <br/>
# 五、Stream API
（一）Java8提供了一套全新的API，用来处理集合的方法集，可以看做遍历数据集的高级迭代器。 <br/>
Note：Stream不会改变源对象，而是会返回一个持有结果的新Stream。 <br/>
（二）优点 <br/>
内部迭代（可并行） <br/>
声明式书写（关注要做什么，而不是怎么做） <br/>
链接操作（流水线，一条龙服务） <br/>
计算时机（惰性求值，操作是延迟执行的，终端操作时才执行，类似于设计模式中的构建器模式，无需全加载到内存，而是在后台按需计算） <br/>
（三）中间操作 <br/>

| 总类 | 类型 | API | 作用 | SQL对照 |
| --- | --- | --- | --- | --- |
| 筛选 | 谓词筛选 | filter(Predicate p) | 根据条件筛选数据 | where |
| - | 去重筛选 | distinct() | 去除重复元素 | distinct |
| 切片 | 截断流 | limit(long n) | 取前n条 | limit |
| - | 跳过元素 | skip(long n) | 从第n+1条开始取 | offset |
| 映射 |  | map(Function f) | 将元素转换成其他形式或提取信息 | * |
| - |  | flatMap(Function f) | 接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流 |  |
| - |  | mapToDouble(ToDoubleFunction f) | 接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的 DoubleStream。 |  |
| - |  | mapToInt(ToIntFunction f) | 接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的 IntStream。 |  |
| - |  | mapToLong(ToLongFunction f) | 接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的 LongStream。 |  |
| 排序 | 自然排序 | sorted() | 产生一个新流，其中按自然顺序排序 | order by |
| - | 定制排序 | sorted(Comparator comp) | 产生一个新流，其中按比较器顺序排序 |  |
| debug |  | Stream peek(Consumer<? super T> action); | 一般peek在Debug场景使用比较方便，也可用于对原有流的修改 |  |

debug示例 <br/>
```java
Stream.of("one", "two", "three", "four") 
         .filter(e -> e.length() > 3) 
         .peek(e -> System.out.println("Filtered value: " + e)) 
         .map(String::toUpperCase) 
         .peek(e -> System.out.println("Mapped value: " + e)) 
         .collect(Collectors.toList()); 
```
Note：peek、map、foreach的区别 <br/>
map应用一个函数型的接口，返回一个新流，是一个中间操作。 <br/>
peek接收一个消费型的接口，是一个中间操作，主要是用于debug的，可以进行二次的流处理。 <br/>
foreach接收一个消费型的接口，然后无返回值，是一个终止操作，注意线程安全问题及集合遍历的顺序问题。 <br/>
当我们只需要对元素内部处理，使用peek是比较合适的，如果我们需要返回一个自定义的Stream时候，需要使用map。 <br/>
```java
List<Student> result3 = students.stream() 
		.peek(stu -> stu.setStudentID("2021"+stu.getId()))
		.forEach(studentMapper::insertSelective); 
```
Note：map和flatmap的区别 <br/>
原始集合有n行，经过map操作后依旧是n行，不改变原始集合的结构，但是经过flatmap操作后会>=n行，flatmap对每一行进行处理后，每行是List或者Array类型，就会将这个List或者Array的每个元素变成1行。 <br/>
（四）终端操作 <br/>
Note：其结果可以是任何不是流的值，例如：List、Integer，甚至是void <br/>

| 总类 | 类型 | API | 作用 | SQL对照 |
| --- | --- | --- | --- | --- |
| 查找 | 查找第一个 | findFirst() | 返回第一个元素 |  |
| - | 随机查找一个 | findAny() | 返回当前流中的任意元素 |  |
| 匹配 | 全都匹配 | allMatch(Predicate p) | 检查是否匹配所有元素 |  |
| - | 有匹配的 | anyMatch(Predicate p) | 检查是否至少匹配一个元素 |  |
| - | 没有匹配的 | noneMatch(Predicate p) | 检查是否没有匹配所有元素 |  |
| 总数 |  | count() | 返回流中元素总数 | count |
| 最大值 |  | max(Comparator c) | 返回流中最大值 | max |
| 最小值 |  | min(Comparator c) | 返回流中最小值 | min |
| 归约 |  | reduce(T iden, BinaryOperator b) | 第一个参数为初始值，第二个参数为两值运算的规则，可以将流中元素反复结合起来，得到一个值。返回 T |  |
| - |  | reduce(BinaryOperator b) | 可以将流中元素反复结合起来，得到一个值。返回 Optional |  |
| 收集 |  | collect(Collector c) | 将流转换为其他形式。接收一个 Collector接口的实现，用于给Stream中元素做汇总的方法 |  |
| 遍历 |  | forEach(Consumer c) | 内部迭代(使用 Collection 接口需要用户去做迭代，称为外部迭代。相反，Stream API 使用内部迭代——它帮你把迭代做了) | forEach |

Collector接口 <br/>

| 方法 | 返回类型 | 作用 | 举例 |
| --- | --- | --- | --- |
| toMap(Function keyMapper, Function valueMapper) | Map | 若使Map的value 为对象本身，valueMapper写为 t->t 或Functions.identity() | Map<String, Student>  studentMap =         students.stream() .collect(Collectors.toMap(Student::getId,Functions.identity()); |
| toMap(Function keyMapper,Function valueMapper,BinaryOperator mergeFunction) | Map | 第3个参数为当key冲突时，调用的合并方法 | (n1, n2) -> n1 + n2或(a,b) -> a或(s, a) -> s + ", " + a等等 |
| toList | List | 把流中元素收集到List | List emps= list.stream().collect(Collectors.toList()); |
| toSet | Set | 把流中元素收集到Set | Set emps= list.stream().collect(Collectors.toSet()); |
| toCollection | Collection | 把流中元素收集到创建的集合 | Collectionemps=list.stream() .collect(Collectors.toCollection(ArrayList::new)); |
| counting | Long | 计算流中元素的个数 | long count = list.stream().collect(Collectors.counting()); |
| summingInt | Integer | 对流中元素的整数属性求和 | int total=list.stream() .collect(Collectors.summingInt(Employee::getSalary)); |
| averagingInt | Double | 计算流中元素Integer属性的平均值 | double avg= list.stream().collect(Collectors.averagingInt(Employee::getSalary)); |
| summarizingInt | IntSummaryStatistics | 收集流中Integer属性的统计值。如：平均值 | IntSummaryStatistics iss= list.stream().collect(Collectors.summarizingInt(Employee::getSalary)); |
| joining | String | 连接流中每个字符串 | String str= list.stream().map(Employee::getName).collect(Collectors.joining()); |
| maxBy | Optional | 根据比较器选择最大值 | Optional max= list.stream().collect(Collectors.maxBy(comparingInt(Employee::getSalary))); |
| minBy | Optional | 根据比较器选择最小值 | Optional min = list.stream().collect(Collectors.minBy(comparingInt(Employee::getSalary))); |
| reducing | 归约产生的类型 | 从一个作为累加器的初始值开始，利用BinaryOperator与流中元素逐个结合，从而归约成单个值 | int total=list.stream().collect(Collectors.reducing(0, Employee::getSalar, Integer::sum)); |
| collectingAndThen | 转换函数返回的类型 | 包裹另一个收集器，对其结果转换函数 | int how= list.stream().collect(Collectors.collectingAndThen(Collectors.toList(), List::size)); |
| groupingBy | Map<K, List> | 根据某属性值对流分组，属性为K，结果为V | Map<Emp.Status, List> map= list.stream().collect(Collectors.groupingBy(Employee::getStatus)); |
| partitioningBy | Map<Boolean, List> | 根据true或false进行分区 | Map<Boolean,List> vd= list.stream().collect(Collectors.partitioningBy(Employee::getManage)); |

# 六、Optional类
  用来解决空指针异常的问题。Java8引入Optional类的意图并非要消除每一个null引用。与此相反，它的目标是帮助你更好地设计出普适的API，可以非常清晰地界定出变量值的缺失。 <br/>

| 方法 | 作用 | 源码 |
| --- | --- | --- |
| **创建Optional实例** | 返回Optional实例 |  |
| Optional   Optional.empty() | 创建一个空实例，没有参数 |  |
| Optional     Optional.of(T t) | 创建一个实例，**参数t不可为null**，否则报空指针异常 |  |
| Optional     Optional.ofNullable(T t) | 创建一个实例，**参数t可为null**，为null时返回空实例，不会报空指针异常 |  |
| **判断是否包含值进行相应操作** | 调用对象value为指定泛型的Optional实例 |  |
| boolean  isPresent() | 没有参数，返回值为boolean类型。如果实例不为null，则返回true，否则返回false | return value != null; |
| void  isPresent(Consumer<? super T> consumer) | 有参数，返回值为void。如果实例为null，不做任何操作。实例不为null，则激活consumer，而此时如果consumer为null则报空指针异常。Consumer有一个入参，返参为void。 | if (value != null)          consumer.accept(value); |
| T orElse(T other) | 不为空返回value，为空返回other | return value != null ? value : other; ||
| T orElseGet(Supplier other) | 不为空返回value，为空返回other.get()，如果此时Supplier为null则报空指针异常。Supplier没有入参，有返回值。 |  |
| T orElseThrow(Supplier exceptionSupplier) throws X | 不为空返回value，为空抛异常。 |  |
| 其他 |  |  |
| T get() | 一般先用isPresent()校验不为空再用此 | if (value == null) {            throw new NoSuchElementException("No value present");        }        return value; |
| Optional map(Function mapper) | 同Stream的map，返回Optional。Function 传入一个入参，返回一个返参。如果Function为null则抛空指针异常 | |
| Optional filter(Predicate<? super T> predicate) | 同Stream的filter，返回Optional。 | Objects.requireNonNull(predicate);        if (!isPresent())            return this;        else            return predicate.test(value) ? this : empty(); |

# 七、举例
```java
String fruit = "apple,banana,mango,pear"; 
Set<String> result1 = Arrays.stream(Optional.ofNullable(fruit).orElse("").split(",")) 
							.map(String::trim) 
							.filter(StringUtils::isNotBlank) 
							.collect(Collectors.toSet());
List<String> result2 = Lists.newArrayList(Splitter.on(",").split(fruit)) 
							.stream() 
							.map(String::trim) 
							.collect(Collectors.toList()); 
```
```java
BigDecimal bookFees = students.stream() 
							.map(Student::getBookFee) 
							.reduce(BigDecimal::add) 
							.orElse(BigDecimal.ZERO) 
							.setScale(3, BigDecimal.ROUND_HALF_UP); 
int bookAmounts = students.stream()
							.map(Student::getBookAmount) 
							.reduce(0, (a, b) -> a + b); 
```
# 50.JDK1.8 都有哪些新特性？ <br/>

JDK1.8主要新特性 <br/>

- 接口默认方法：Java 8 允许我们给接口添加一个非抽象的方法实现，只需要使用 default 关键字修饰即可 <br/>
- Lambda 表达式和函数式接口：Lambda 表达式本质上是一段匿名内部类，也可以是一段可以传递的代码。Lambda 允许把函数作为一个方法的参数（函数作为参数传递到方法中），使用 Lambda 表达式使代码更加简洁，但是也不要滥用，否则会有可读性等问题，《Effective Java》作者 Josh Bloch 建议使用 Lambda 表达式最好不要超过 3 行。 <br/>
- Stream API：用函数式编程方式在集合类上进行复杂操作的工具，配合 Lambda 表达式可以方便的对集合进行处理。Java8 中处理集合的关键抽象概念，它可以指定你希望对集合进行的操作，可以执行非常复杂的查找、过滤和映射数据等操作。使用 Stream API 对集合数据进行操作，就类似于使用 SQL 执行的数据库查询。也可以使用 Stream API 来并行执行操作。简而言之，Stream API 提供了一种高效且易于使用的处理数据的方式。 <br/>
- 日期时间 API：Java 8 引入了新的日期时间 API 改进了日期时间的管理。 <br/>
- Optional 类：用来解决空指针异常的问题。很久以前 Google Guava 项目引入了 Optional 作为解决空指针异常的一种方式，不赞成代码被 null 检查的代码污染，期望程序员写整洁的代码。受 Google Guava 的鼓励，Optional 现在是 Java 8 库的一部分。 <br/>
# 51.Lambda 表达式了解多少？
Lambda 表达式本质上是一段匿名内部类，也可以是一段可以传递的代码。 <br/>
比如我们以前使用 Runnable 创建并运行线程： <br/>

```java
new Thread(new Runnable() { 
            @Override 
            public void run() { 
                System.out.println("Thread is running before Java8!"); 
            } 
        }).start(); 
```
这是通过内部类的方式来重写 run 方法，使用 Lambda 表达式，还可以更加简洁： <br/>

```java
new Thread( () -> System.out.println("Thread is running since Java8!") ).start();
```
当然不是每个接口都可以缩写成 Lambda 表达式。只有那些函数式接口（Functional Interface）才能缩写成 Lambda 表示式。 <br/>
所谓函数式接口（Functional Interface）就是只包含一个抽象方法的声明。针对该接口类型的所有 Lambda 表达式都会与这个抽象方法匹配。 <br/>
Java8 有哪些内置函数式接口？ <br/>
JDK 1.8 API 包含了很多内置的函数式接口。其中就包括我们在老版本中经常见到的 **Comparator** 和 **Runnable**，Java 8 为他们都添加了 @FunctionalInterface 注解，以用来支持 Lambda 表达式。 <br/>
除了这两个之外，还有 Callable、Predicate、Function、Supplier、Consumer 等等。 <br/>
# 52.Optional 了解吗？
Optional是用于防范NullPointerException。 <br/>
可以将 Optional 看做是包装对象（可能是 null, 也有可能非 null）的容器。当我们定义了 一个方法，这个方法返回的对象可能是空，也有可能非空的时候，我们就可以考虑用 Optional 来包装它，这也是在 Java 8 被推荐使用的做法。 <br/>

```java
Optional<String> optional = Optional.of("bam"); 

optional.isPresent();           // true 
optional.get();                 // "bam" 
optional.orElse("fallback");    // "bam" 

optional.ifPresent((s) -> System.out.println(s.charAt(0)));     // "b" 
```
# 53.Stream 流用过吗？
Stream 流，简单来说，使用 java.util.Stream 对一个包含一个或多个元素的集合做各种操作。这些操作可能是 _中间操作_ 亦或是 _终端操作_。 终端操作会返回一个结果，而中间操作会返回一个 Stream 流。 <br/>
Stream 流一般用于集合，我们对一个集合做几个常见操作： <br/>

```java
List<String> stringCollection = new ArrayList<>(); 
stringCollection.add("ddd2"); 
stringCollection.add("aaa2"); 
stringCollection.add("bbb1"); 
stringCollection.add("aaa1"); 
stringCollection.add("bbb3"); 
stringCollection.add("ccc"); 
stringCollection.add("bbb2"); 
stringCollection.add("ddd1"); 
```

- **Filter 过滤** <br/>

```java
stringCollection
    .stream() 
    .filter((s) -> s.startsWith("a")) 
    .forEach(System.out::println); 

// "aaa2", "aaa1" 
```

- **Sorted 排序** <br/>

```java
stringCollection 
    .stream() 
    .sorted() 
    .filter((s) -> s.startsWith("a")) 
    .forEach(System.out::println); 

// "aaa1", "aaa2" 
```

- **Map 转换** <br/>

```java
stringCollection 
    .stream() 
    .map(String::toUpperCase) 
    .sorted((a, b) -> b.compareTo(a))
    .forEach(System.out::println); 

// "DDD2", "DDD1", "CCC", "BBB3", "BBB2", "AAA2", "AAA1"
```

- **Match 匹配** <br/>

```java
// 验证 list 中 string 是否有以 a 开头的, 匹配到第一个，即返回 true
boolean anyStartsWithA = stringCollection 
        .stream()
        .anyMatch((s) -> s.startsWith("a"));

System.out.println(anyStartsWithA);      // true

// 验证 list 中 string 是否都是以 a 开头的
boolean allStartsWithA = stringCollection
        .stream()
        .allMatch((s) -> s.startsWith("a")); 

System.out.println(allStartsWithA);      // false

// 验证 list 中 string 是否都不是以 z 开头的,
boolean noneStartsWithZ = stringCollection
        .stream()
        .noneMatch((s) -> s.startsWith("z"));

System.out.println(noneStartsWithZ);      // true
```

- **Count 计数** <br/>

count 是一个终端操作，它能够统计 stream 流中的元素总数，返回值是 long 类型。 <br/>

```java
// 先对 list 中字符串开头为 b 进行过滤，让后统计数量
long startsWithB = 
    stringCollection 
        .stream() 
        .filter((s) -> s.startsWith("b")) 
        .count(); 

System.out.println(startsWithB);    // 3 
```

- **Reduce** <br/>

Reduce 中文翻译为：_减少、缩小_。通过入参的 Function，我们能够将 list 归约成一个值。它的返回类型是 Optional 类型。 <br/>

```java
Optional<String> reduced = stringCollection 
        .stream() 
        .sorted() 
        .reduce((s1, s2) -> s1 + "#" + s2); 

reduced.ifPresent(System.out::println); 
// "aaa1#aaa2#bbb1#bbb2#bbb3#ccc#ddd1#ddd2"
```
以上是常见的几种流式操作，还有其它的一些流式操作，可以帮助我们更便捷地处理集合数据。 <br/>
Java Stream流 <br/>
