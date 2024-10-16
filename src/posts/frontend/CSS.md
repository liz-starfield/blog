---
icon: lightbulb
---
# CSS


# Resolution
内容超出了页面，看不到底部的内容了，如何加上滚轴？ <br/>
overflow-y: auto !important; <br/>
# Knowledge

1、引入样式表（3种方式） <br/>

- 内联样式- 在HTML元素中使用"style"**属性** <br/>
- 内部样式表 -在HTML文档头部 \<head\> 区域使用\<style\>**元素** 来包含CSS <br/>
- 外部样式表 - 使用外部 CSS**文件**，在HTML文档头部 \<head\> 区域使用\<link\>引入 <br/>

2、选择器 <br/>
id选择器（#id） id唯一 <br/>
class选择器（.class）class可重复，一个元素可有多个class，用空格分隔 <br/>
元素选择（元素名） <br/>

元素里有class的（元素名. class） <br/>
多个选择器用同一个样式，用逗号分开（table,td,th   或 #customers td, #customers th） <br/>
id选择器下的元素选择，用空格（#customers th 或 #customers tr.alt td） <br/>

3、多重样式优先级（样式表和选择器都有影响） <br/>
内联样式 > 内部样式表 > 外部样式表 > 浏览器样式表 <br/>
**注意：**如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式 <br/>

css 7 种选择器： <br/>
-  id 选择器 <br/>
-  类选择器 <br/>
-  伪类选择器 <br/>
-  属性选择器 <br/>
-  伪元素选择器 <br/>
-  通配选择器 <br/>
-  标签选择器 <br/>

CSS 优先规则： <br/>
内联样式 > id 选择器 > 类选择器 = 伪类选择器 = 属性选择器 > 标签选择器 = 伪元素选择器 <br/>

1、布局 <br/>
display是CSS中最重要的用于控制布局的属性。 <br/>
