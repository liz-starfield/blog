import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,f as s,e}from"./app-kCz0Mz9E.js";const d="/blog/assets/positive_index-u3W5LQ1U.png",l="/blog/assets/negative_index-X0T7VD_c.png",t={},r=e('<h1 id="python的数据类型" tabindex="-1"><a class="header-anchor" href="#python的数据类型" aria-hidden="true">#</a> Python的数据类型</h1><ul><li><ol><li>数据类型</li></ol></li><li><ol start="2"><li>String操作</li></ol></li><li><ol start="3"><li>List操作</li></ol></li><li><ol start="4"><li>Tuple操作</li></ol></li><li><ol start="5"><li>Set操作</li></ol></li><li><ol start="6"><li>Dictionary操作</li></ol></li></ul>',2),v=e(`<h2 id="_1-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-数据类型" aria-hidden="true">#</a> 1. 数据类型</h2><h3 id="_1-1-number-数字" tabindex="-1"><a class="header-anchor" href="#_1-1-number-数字" aria-hidden="true">#</a> 1.1. Number 数字</h3><h4 id="_1-1-1-integer-整数-正整数-负整数-十进制-十六进制" tabindex="-1"><a class="header-anchor" href="#_1-1-1-integer-整数-正整数-负整数-十进制-十六进制" aria-hidden="true">#</a> 1.1.1. Integer 整数（正整数，负整数；十进制，十六进制）</h4><p>Python允许在数字中间以_分隔，因此，写成10_000_000_000和10000000000是完全一样的。十六进制数也可以写成0xa1b2_c3d4。</p><p>注意：Python的整数没有大小限制，而某些语言的整数根据其存储长度是有大小限制的，例如Java对32位整数的范围限制在-2147483648-2147483647。</p><h4 id="_1-1-2-float-浮点数-普通表示-科学计数法表示" tabindex="-1"><a class="header-anchor" href="#_1-1-2-float-浮点数-普通表示-科学计数法表示" aria-hidden="true">#</a> 1.1.2. Float 浮点数（普通表示，科学计数法表示）</h4><p>用科学计数法表示，把10用e替代，1.23x10<sup>9</sup>就是1.23e<sup>9</sup>，0.000012可以写成1.2e<sup>-5</sup>，等等。</p><p>注意：Python的浮点数也没有大小限制，但是超出一定范围就直接表示为inf（无限大）。</p><h3 id="_1-2-string-字符串" tabindex="-1"><a class="header-anchor" href="#_1-2-string-字符串" aria-hidden="true">#</a> 1.2. String 字符串</h3><h4 id="_1-2-1-单行内容和多行内容" tabindex="-1"><a class="header-anchor" href="#_1-2-1-单行内容和多行内容" aria-hidden="true">#</a> 1.2.1. 单行内容和多行内容</h4><h5 id="_1-2-1-1-单行内容" tabindex="-1"><a class="header-anchor" href="#_1-2-1-1-单行内容" aria-hidden="true">#</a> 1.2.1.1. 单行内容</h5><ul><li>用单引号&#39;或双引号&quot;括起来表示单行内容</li><li>单行内容为了美观用反斜杠\\换行写，实际还是单行内容</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 用&#39;表示单行内容
&gt;&gt;&gt; greeting = &#39;Hello, World!&#39;
&gt;&gt;&gt; print(greeting)
Hello, World!
&gt;&gt;&gt; print(len(greeting))
13

# 用&quot;表示单行内容
&gt;&gt;&gt; sentence = &quot;I hope you are enjoying 30 days of Python Challenge&quot;
&gt;&gt;&gt; print(sentence)
I hope you are enjoying 30 days of Python Challenge

# 单行内容为了美观用反斜杠\\换行写，实际还是单行内容
&gt;&gt;&gt; sentence1 = &quot;I hope you are\\
... enjoying 30 days\\
... of Python Challenge.&quot;
&gt;&gt;&gt; print(sentence1)
I hope you areenjoying 30 daysof Python Challenge.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_1-2-1-2-多行内容" tabindex="-1"><a class="header-anchor" href="#_1-2-1-2-多行内容" aria-hidden="true">#</a> 1.2.1.2. 多行内容</h5><ul><li>用三引号（&#39;&#39;&#39;或&quot;&quot;&quot;）括起来表示多行内容</li><li>单行内容里用\\n进行换行</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 用&#39;&#39;&#39;表示多行内容</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> multiline_string <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;I am a teacher and enjoy teaching.
... I didn&#39;t find anything as rewarding as empowering people.
... That is why I created 30 days of python.&#39;&#39;&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>multiline_string<span class="token punctuation">)</span>
I am a teacher <span class="token keyword">and</span> enjoy teaching<span class="token punctuation">.</span>
I didn&#39;t find anything <span class="token keyword">as</span> rewarding <span class="token keyword">as</span> empowering people<span class="token punctuation">.</span>
That <span class="token keyword">is</span> why I created <span class="token number">30</span> days of python<span class="token punctuation">.</span>

<span class="token comment"># 用&quot;&quot;&quot;表示多行内容</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> multiline_string <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;I am a teacher and enjoy teaching.
... I didn&#39;t find anything as rewarding as empowering people.
... That is why I created 30 days of python.&quot;&quot;&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>multiline_string<span class="token punctuation">)</span>
I am a teacher <span class="token keyword">and</span> enjoy teaching<span class="token punctuation">.</span>
I didn&#39;t find anything <span class="token keyword">as</span> rewarding <span class="token keyword">as</span> empowering people<span class="token punctuation">.</span>
That <span class="token keyword">is</span> why I created <span class="token number">30</span> days of python<span class="token punctuation">.</span>

<span class="token comment"># 单行内容里用\\n进行换行表示多行内容</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> sentence <span class="token operator">=</span> <span class="token string">&quot;I hope you are\\n enjoying 30 days\\n of Python Challenge&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span>
I hope you are
 enjoying <span class="token number">30</span> days
 of Python Challenge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-转义字符和不转义表示" tabindex="-1"><a class="header-anchor" href="#_1-2-2-转义字符和不转义表示" aria-hidden="true">#</a> 1.2.2. 转义字符和不转义表示</h4><h5 id="_1-2-2-1-转义字符" tabindex="-1"><a class="header-anchor" href="#_1-2-2-1-转义字符" aria-hidden="true">#</a> 1.2.2.1. 转义字符 \\</h5><table><thead><tr><th>\\n</th><th>换行</th></tr></thead><tbody><tr><td>\\t</td><td>制表符</td></tr><tr><td>\\</td><td>斜杠</td></tr><tr><td>&#39;</td><td>单引号</td></tr><tr><td>&quot;</td><td>双引号</td></tr></tbody></table><h5 id="_1-2-2-2-不转义表示-在字符串前加r-表示内部的字符串默认不转义" tabindex="-1"><a class="header-anchor" href="#_1-2-2-2-不转义表示-在字符串前加r-表示内部的字符串默认不转义" aria-hidden="true">#</a> 1.2.2.2. 不转义表示：在字符串前加r，表示内部的字符串默认不转义</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; print(&#39;\\\\\\t\\\\&#39;)
\\       \\

&gt;&gt;&gt; print(r&#39;\\\\\\t\\\\&#39;)
\\\\\\t\\\\

&gt;&gt;&gt; print(&#39;&#39;&#39;hello,\\n
world&#39;&#39;&#39;)
hello,

world
&gt;&gt;&gt; print(r&#39;&#39;&#39;hello,\\n
world&#39;&#39;&#39;)
hello,\\n
world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-boolean-布尔值" tabindex="-1"><a class="header-anchor" href="#_1-3-boolean-布尔值" aria-hidden="true">#</a> 1.3. Boolean 布尔值</h3><p>只有True、False两种值</p><p>首字母要大写</p><h3 id="_1-4-空值-none" tabindex="-1"><a class="header-anchor" href="#_1-4-空值-none" aria-hidden="true">#</a> 1.4. 空值（None）</h3><p>首字母要大写</p><h3 id="_1-5-组合类型汇总-list-tuple-set-dictionary" tabindex="-1"><a class="header-anchor" href="#_1-5-组合类型汇总-list-tuple-set-dictionary" aria-hidden="true">#</a> 1.5. 组合类型汇总:List&amp;Tuple&amp;Set&amp;Dictionary</h3><table><thead><tr><th></th><th>表现</th><th>有序/无序</th><th>唯一/重复</th><th>可变/不可变</th></tr></thead><tbody><tr><td>List</td><td>方括号 []</td><td>有序</td><td>重复</td><td>可变</td></tr><tr><td>Tuple</td><td>圆括号 ()</td><td>有序</td><td>重复</td><td>不可变</td></tr><tr><td>Set</td><td>花括号 {}</td><td>无序</td><td>唯一</td><td>可变</td></tr><tr><td>Dictionary</td><td>花括号 {}</td><td>无序</td><td>唯一</td><td>可变</td></tr></tbody></table><h3 id="_1-6-list-有序-允许不同数据类型项" tabindex="-1"><a class="header-anchor" href="#_1-6-list-有序-允许不同数据类型项" aria-hidden="true">#</a> 1.6. List（有序，允许不同数据类型项）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[&#39;Earth&#39;, &#39;Jupiter&#39;, &#39;Neptune&#39;, &#39;Mars&#39;, &#39;Venus&#39;, &#39;Saturn&#39;, &#39;Uranus&#39;, &#39;Mercury&#39;]# planets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-7-tuple-创建后无法修改-有序-允许不同数据类型项" tabindex="-1"><a class="header-anchor" href="#_1-7-tuple-创建后无法修改-有序-允许不同数据类型项" aria-hidden="true">#</a> 1.7. Tuple（创建后无法修改，有序，允许不同数据类型项）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(&#39;Earth&#39;, &#39;Jupiter&#39;, &#39;Neptune&#39;, &#39;Mars&#39;, &#39;Venus&#39;, &#39;Saturn&#39;, &#39;Uranus&#39;, &#39;Mercury&#39;) # planets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-8-set-唯一-无序-无索引" tabindex="-1"><a class="header-anchor" href="#_1-8-set-唯一-无序-无索引" aria-hidden="true">#</a> 1.8. Set（唯一，无序，无索引）</h3><p>Set is a collection of unordered and un-indexed distinct elements.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{3.14, 9.81, 2.7} # order is not important in set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-9-dictionary-key-value-对-无序" tabindex="-1"><a class="header-anchor" href="#_1-9-dictionary-key-value-对-无序" aria-hidden="true">#</a> 1.9. Dictionary（key value 对，无序）</h3><p>a value could be any data types</p><h2 id="_2-string操作" tabindex="-1"><a class="header-anchor" href="#_2-string操作" aria-hidden="true">#</a> 2. String操作</h2><h3 id="_2-1-连接join" tabindex="-1"><a class="header-anchor" href="#_2-1-连接join" aria-hidden="true">#</a> 2.1. 连接join</h3><p>方式一：+</p><p>方式二：&#39;连接符&#39;.join(序列)</p><p>方式三：&quot;hello&quot;<em>3 字符串</em>3=3个字符串连接 &#39;hellohellohello&#39;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># +号连接
full_name = &#39;Asabeneh&#39; + &#39; &#39; + &#39;Yetayeh&#39;

# join函数连接
name = (&#39;Asabeneh&#39;,&#39;Yetayeh&#39;) # tuple
full_name = &#39; &#39;.join(name)

web_tech = [&#39;HTML&#39;, &#39;CSS&#39;, &#39;JavaScript&#39;, &#39;React&#39;] # list
result = &#39; &#39;.join(web_tech)
print(result) # &#39;HTML CSS JavaScript React&#39;
result1 = &#39;# &#39;.join(web_tech)
print(result1) # &#39;HTML# CSS# JavaScript# React&#39;

# *号
&gt;&gt;&gt; &quot;hello&quot;*3		#字符串*3=3个字符串连接
&#39;hellohellohello&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-拆分split" tabindex="-1"><a class="header-anchor" href="#_2-2-拆分split" aria-hidden="true">#</a> 2.2. 拆分split</h3><ul><li>string.split()：默认空格作为分隔符</li><li>string.split(&#39;分隔符&#39;)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;thirty days of python&#39;
print(challenge.split()) # [&#39;thirty&#39;, &#39;days&#39;, &#39;of&#39;, &#39;python&#39;]
challenge = &#39;thirty, days, of, python&#39;
print(challenge.split(&#39;, &#39;)) # [&#39;thirty&#39;, &#39;days&#39;, &#39;of&#39;, &#39;python&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-格式化f-strings" tabindex="-1"><a class="header-anchor" href="#_2-3-格式化f-strings" aria-hidden="true">#</a> 2.3. 格式化f-Strings</h3><ul><li>f-Strings</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 4
b = 3
print(f&#39;{a} + {b} = {a +b}&#39;)
print(f&#39;{a} - {b} = {a - b}&#39;)
print(f&#39;{a} * {b} = {a * b}&#39;)
print(f&#39;{a} / {b} = {a / b:.2f}&#39;)
print(f&#39;{a} % {b} = {a % b}&#39;)
print(f&#39;{a} // {b} = {a // b}&#39;)
print(f&#39;{a} ** {b} = {a ** b}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-string转字符" tabindex="-1"><a class="header-anchor" href="#_2-4-string转字符" aria-hidden="true">#</a> 2.4. String转字符</h3><p>方式一：unpack</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>language = &#39;Python&#39;
a,b,c,d,e,f = language # unpacking sequence characters into variables
print(a) # P
print(b) # y
print(c) # t
print(d) # h
print(e) # o
print(f) # n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：index 正索引：从左到右 （0，1，2，3） 负索引：从右到左（-1，-2，-3，-4）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 正索引
language = &#39;Python&#39;
first_letter = language[0]
print(first_letter) # P
second_letter = language[1]
print(second_letter) # y
last_index = len(language) - 1
last_letter = language[last_index]
print(last_letter) # n

# 负索引
language = &#39;Python&#39;
last_letter = language[-1]
print(last_letter) # n
second_last = language[-2]
print(second_last) # o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-子串slice" tabindex="-1"><a class="header-anchor" href="#_2-5-子串slice" aria-hidden="true">#</a> 2.5. 子串slice</h3><p>切片 slice</p><ul><li>无步长</li><li>有步长</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 无步长
language = &#39;Python&#39;
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
language = &#39;Python&#39;
pto = language[0:6:2] #
print(pto) # Pto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-反转" tabindex="-1"><a class="header-anchor" href="#_2-6-反转" aria-hidden="true">#</a> 2.6. 反转</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>greeting = &#39;Hello, World!&#39;
print(greeting[::-1]) # !dlroW ,olleH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-首字母大写" tabindex="-1"><a class="header-anchor" href="#_2-7-首字母大写" aria-hidden="true">#</a> 2.7. 首字母大写</h3><ul><li>capitalize() 格式化为非首字母均小写，第一个词首字母大写，其他词首字母小写</li><li>title() 每个词首字母大写，非首字母均小写</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># capitalize
challenge = &#39;thirty days of python&#39;
print(challenge.capitalize()) # &#39;Thirty days of python&#39;

# title
challenge = &#39;thirty days of python&#39;
print(challenge.title()) # Thirty Days Of Python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-大小写替换swapcase" tabindex="-1"><a class="header-anchor" href="#_2-8-大小写替换swapcase" aria-hidden="true">#</a> 2.8. 大小写替换swapcase</h3><ul><li>swapcase()</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;thirty days of python&#39;
print(challenge.swapcase())   # THIRTY DAYS OF PYTHON
challenge = &#39;Thirty Days Of Python&#39;
print(challenge.swapcase())  # tHIRTY dAYS oF pYTHON
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-全大写upper-全小写lower" tabindex="-1"><a class="header-anchor" href="#_2-9-全大写upper-全小写lower" aria-hidden="true">#</a> 2.9.全大写upper/全小写lower</h3><ul><li>upper()</li><li>lower()</li></ul><h3 id="_2-10-替代replace" tabindex="-1"><a class="header-anchor" href="#_2-10-替代replace" aria-hidden="true">#</a> 2.10. 替代replace</h3><ul><li>replace()</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;thirty days of python&#39;
print(challenge.replace(&#39;python&#39;, &#39;coding&#39;)) # &#39;thirty days of coding&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-11-去掉头尾strip" tabindex="-1"><a class="header-anchor" href="#_2-11-去掉头尾strip" aria-hidden="true">#</a> 2.11. 去掉头尾strip</h3><ul><li>strip()</li><li>strip([chars]) 字符串头尾指定的字符（默认为空格或换行符）或字符序列 该方法只能删除开头或是结尾的字符，不能删除中间部分的字符。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; str = &quot;00000003210Runoob01230000000&quot;
&gt;&gt;&gt; str.strip(&#39;0&#39;) # 去除首尾字符 0 
&#39;3210Runoob0123&#39; 

&gt;&gt;&gt; str2 = &quot; Runoob &quot;
&gt;&gt;&gt; str2.strip() # 去除首尾空格
&#39;Runoob&#39;
 
&gt;&gt;&gt; challenge = &#39;thirty days of pythoonnn&#39;
&gt;&gt;&gt; print(challenge.strip(&#39;noth&#39;)) 
&#39;irty days of py&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-12-统计出现次数count" tabindex="-1"><a class="header-anchor" href="#_2-12-统计出现次数count" aria-hidden="true">#</a> 2.12. 统计出现次数count</h3><ul><li>count(substring)</li><li>count(substring,start,end)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;thirty days of python&#39;
print(challenge.count(&#39;y&#39;)) # 3
print(challenge.count(&#39;y&#39;, 7, 14)) # 1, 
print(challenge.count(&#39;th&#39;)) # 2\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-13-查找find" tabindex="-1"><a class="header-anchor" href="#_2-13-查找find" aria-hidden="true">#</a> 2.13. 查找find</h3><ul><li>安全的查找方法 <ul><li>find(substring) 正向查找，返回第一个；如没有，则返回-1</li><li>find(substring,start)</li><li>find(substring,start,end)</li><li>rfind(substring) 反向查找，返回最后一个；如没有，则返回-1</li><li>rfind(substring,start)</li><li>rfind(substring,start,end)</li></ul></li><li>不安全的查找方法 <ul><li>index(substring) 正向查找，返回第一个；如没有，则报错</li><li>index(substring,start)</li><li>index(substring,start,end)</li><li>rindex(substring) 反向查找，返回最后一个；如没有，则报错</li><li>rindex(substring,start)</li><li>rindex(substring,start,end)</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># find返回第一个
challenge = &#39;thirty days of python&#39;
print(challenge.find(&#39;y&#39;))  # 5
print(challenge.find(&#39;th&#39;)) # 0

# find返回最后一个
challenge = &#39;thirty days of python&#39;
print(challenge.rfind(&#39;y&#39;))  # 16
print(challenge.rfind(&#39;th&#39;)) # 17

# index返回第一个
challenge = &#39;thirty days of python&#39;
sub_string = &#39;da&#39;
print(challenge.index(sub_string))  # 7
print(challenge.index(sub_string, 9)) # error

# index返回最后一个
challenge = &#39;thirty days of python&#39;
sub_string = &#39;da&#39;
print(challenge.rindex(sub_string))  # 8
print(challenge.rindex(sub_string, 9)) # error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-14-tab扩大空格大小expandtabs" tabindex="-1"><a class="header-anchor" href="#_2-14-tab扩大空格大小expandtabs" aria-hidden="true">#</a> 2.14. Tab扩大空格大小expandtabs</h3><ul><li>expandtabs()</li><li>expandtabs(tab_size) 默认tab_size是8</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;thirty\\tdays\\tof\\tpython&#39;
print(challenge.expandtabs())   # &#39;thirty  days    of      python&#39;
print(challenge.expandtabs(10)) # &#39;thirty    days      of        python&#39;

&gt;&gt;&gt; str = &quot;Name\\tAge\\tCountry\\tCity\\nAsabeneh\\t250\\tFinland\\tHelsinki&quot;
&gt;&gt;&gt; str
&#39;Name\\tAge\\tCountry\\tCity\\nAsabeneh\\t250\\tFinland\\tHelsinki&#39;
&gt;&gt;&gt; print(str)
Name    Age     Country City
Asabeneh        250     Finland Helsinki
&gt;&gt;&gt; print(str.expandtabs())
Name    Age     Country City
Asabeneh        250     Finland Helsinki
&gt;&gt;&gt; print(str.expandtabs(10))
Name      Age       Country   City
Asabeneh  250       Finland   Helsinki
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-15-是否以xx开头startswith-结尾endswith" tabindex="-1"><a class="header-anchor" href="#_2-15-是否以xx开头startswith-结尾endswith" aria-hidden="true">#</a> 2.15. 是否以xx开头startswith/结尾endswith</h3><ul><li>startswith(substring)</li><li>endswith(substring)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># startswith
challenge = &#39;thirty days of python&#39;
print(challenge.startswith(&#39;thirty&#39;)) # True

challenge = &#39;30 days of python&#39;
print(challenge.startswith(&#39;thirty&#39;)) # False

# endswith
challenge = &#39;thirty days of python&#39;
print(challenge.endswith(&#39;on&#39;))   # True
print(challenge.endswith(&#39;tion&#39;)) # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-16-是否全是字母或数字isalnum" tabindex="-1"><a class="header-anchor" href="#_2-16-是否全是字母或数字isalnum" aria-hidden="true">#</a> 2.16. 是否全是字母或数字isalnum</h3><ul><li>isalnum()</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;ThirtyDaysPython&#39;
print(challenge.isalnum()) # True

challenge = &#39;30DaysPython&#39;
print(challenge.isalnum()) # True

challenge = &#39;thirty days of python&#39;
print(challenge.isalnum()) # False, space is not an alphanumeric character

challenge = &#39;thirty days of python 2019&#39;
print(challenge.isalnum()) # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-17-是否全是字母isalpha" tabindex="-1"><a class="header-anchor" href="#_2-17-是否全是字母isalpha" aria-hidden="true">#</a> 2.17. 是否全是字母isalpha</h3><ul><li>isalpha()</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;thirty days of python&#39;
print(challenge.isalpha()) # False, space is once again excluded
challenge = &#39;ThirtyDaysPython&#39;
print(challenge.isalpha()) # True
num = &#39;123&#39;
print(num.isalpha())      # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-18-是否全是数字" tabindex="-1"><a class="header-anchor" href="#_2-18-是否全是数字" aria-hidden="true">#</a> 2.18. 是否全是数字</h3><ul><li>isdecimal()：只有0-9</li><li>isdigit()：0-9 and some other unicode characters for numbers</li><li>isnumeric()：just like isdigit(), just accepts more symbols, like ½</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 不包括小数
&gt;&gt;&gt; challenge = &#39;3.14&#39;
&gt;&gt;&gt; challenge.isdecimal()
False
&gt;&gt;&gt; challenge.isdigit()
False
&gt;&gt;&gt; challenge.isnumeric()
False

# isdecimal
challenge = &#39;thirty days of python&#39;
print(challenge.isdecimal())  # False
challenge = &#39;123&#39;
print(challenge.isdecimal())  # True
challenge = &#39;\\u00B2&#39;
print(challenge.isdigit())   # False
challenge = &#39;12 3&#39;
print(challenge.isdecimal())  # False, space not allowed

# isdigit
challenge = &#39;Thirty&#39;
print(challenge.isdigit()) # False
challenge = &#39;30&#39;
print(challenge.isdigit())   # True
challenge = &#39;\\u00B2&#39;
print(challenge.isdigit())   # True

# isnumeric
num = &#39;10&#39;
print(num.isnumeric()) # True
num = &#39;\\u00BD&#39; # ½
print(num.isnumeric()) # True
num = &#39;10.5&#39;
print(num.isnumeric()) # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-19-是否是合法变量名isidentifier" tabindex="-1"><a class="header-anchor" href="#_2-19-是否是合法变量名isidentifier" aria-hidden="true">#</a> 2.19. 是否是合法变量名isidentifier</h3><ul><li>isidentifier()</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>challenge = &#39;30DaysOfPython&#39;
print(challenge.isidentifier()) # False, because it starts with a number
challenge = &#39;thirty_days_of_python&#39;
print(challenge.isidentifier()) # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-20-是否全是大写isupper-小写islower" tabindex="-1"><a class="header-anchor" href="#_2-20-是否全是大写isupper-小写islower" aria-hidden="true">#</a> 2.20. 是否全是大写isupper/小写islower</h3><ul><li>isupper()</li><li>islower()</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># islower
challenge = &#39;thirty days of python&#39;
print(challenge.islower()) # True
challenge = &#39;Thirty days of python&#39;
print(challenge.islower()) # False

# isupper
challenge = &#39;thirty days of python&#39;
print(challenge.isupper()) #  False
challenge = &#39;THIRTY DAYS OF PYTHON&#39;
print(challenge.isupper()) # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-list操作" tabindex="-1"><a class="header-anchor" href="#_3-list操作" aria-hidden="true">#</a> 3. List操作</h2><h3 id="_3-1-create" tabindex="-1"><a class="header-anchor" href="#_3-1-create" aria-hidden="true">#</a> 3.1. Create</h3><p>方式一：内置函数 list()</p><p>方式二：方括号 []</p><p>[i for i in iterable if expression]</p><p>方式三：List Comprehension</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># empty
lst = list()
lst = []

# init
nums = [0, 1, 2, 3, 4, 5]  # all are the same data types - a list of numbers
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;] # all the same data types - a list of strings (fruits)
diffs = [&#39;Banana&#39;, 10, False, 9.81] # different data types in the list - string, integer, boolean and float

language = &#39;Python&#39;
lst = list(language) # changing the string to list
print(type(lst))     # list
print(lst)           # [&#39;P&#39;, &#39;y&#39;, &#39;t&#39;, &#39;h&#39;, &#39;o&#39;, &#39;n&#39;]

# Print the lists and its length
print(&#39;Fruits:&#39;, fruits)
print(&#39;Number of fruits:&#39;, len(fruits))

language = &#39;Python&#39;
lst = [i for i in language]
print(type(lst)) # list
print(lst)       # [&#39;P&#39;, &#39;y&#39;, &#39;t&#39;, &#39;h&#39;, &#39;o&#39;, &#39;n&#39;]

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
# Filter numbers: let&#39;s filter out positive even numbers from the list below
positive_even_numbers = [i for i in range(21) if i % 2 == 0 and i &gt; 0]
print(positive_even_numbers)                    # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Flattening a three dimensional array
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened_list = [ number for row in list_of_lists for number in row]
print(flattened_list)    # [1, 2, 3, 4, 5, 6, 7, 8, 9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-access-modify" tabindex="-1"><a class="header-anchor" href="#_3-2-access-modify" aria-hidden="true">#</a> 3.2. Access&amp;Modify</h3><p>lst[index]</p><p>• 正索引</p><p>• 负索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 正索引
second_fruit = fruits[1]
print(second_fruit)     # orange
fruits[0] = &#39;avocado&#39;
print(fruits)       #  [&#39;avocado&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]

# 负索引
first_fruit = fruits[-4]
print(first_fruit)      # banana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-find-index" tabindex="-1"><a class="header-anchor" href="#_3-3-find-index" aria-hidden="true">#</a> 3.3. Find Index</h3><p>lst.index(item)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
print(fruits.index(&#39;orange&#39;))   # 1
ages = [22, 19, 24, 25, 26, 24, 25, 24]
print(ages.index(24))           # 2, the first occurrence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-items" tabindex="-1"><a class="header-anchor" href="#_3-4-items" aria-hidden="true">#</a> 3.4. Items</h3><p>1、Unpack List Items</p><p>1）item1,item2,*rest = list</p><p>2）*list</p><p>2、Slice List Items</p><p>list[start：end：step]</p><p>start和end可以是正索引，也可以是负索引</p><p>左闭右开：[start，end）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># First Example
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;,&#39;lime&#39;,&#39;apple&#39;]
first_fruit, second_fruit, third_fruit, *rest = lst
print(first_fruit)     # banana
print(second_fruit)    # orange
print(third_fruit)     # mango
print(rest)           # [&#39;lemon&#39;,&#39;lime&#39;,&#39;apple&#39;]

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


fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
all_fruits = fruits[0:4] # it returns all the fruits
# this will also give the same result as the one above
all_fruits = fruits[0:] # if we don&#39;t set where to stop it takes all the rest
orange_and_mango = fruits[1:3] # it does not include the first index
orange_mango_lemon = fruits[1:]
orange_and_lemon = fruits[::2] # here we used a 3rd argument, step. It will take every 2cnd item - [&#39;banana&#39;, &#39;mango&#39;]

all_fruits = fruits[-4:] # it returns all the fruits
orange_and_mango = fruits[-3:-1] # it does not include the last index,[&#39;orange&#39;, &#39;mango&#39;]
orange_mango_lemon = fruits[-3:] # this will give starting from -3 to the end,[&#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
reverse_fruits = fruits[::-1] # a negative step will take the list in reverse order,[&#39;lemon&#39;, &#39;mango&#39;, &#39;orange&#39;, &#39;banana&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-insert" tabindex="-1"><a class="header-anchor" href="#_3-5-insert" aria-hidden="true">#</a> 3.5. Insert</h3><p>1、在末尾添加</p><p>list.append(item)</p><p>2、在index位置添加</p><p>list.insert(index,item)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fruits.append(&#39;apple&#39;)
fruits.insert(2, &#39;apple&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-remove" tabindex="-1"><a class="header-anchor" href="#_3-6-remove" aria-hidden="true">#</a> 3.6. Remove</h3><p>1、按item</p><p>list.remove(item) 去掉出现的第一个item</p><p>2、按index</p><p>list.pop() 去掉最后一项</p><p>list.pop(index) 去掉index那项</p><p>3、按index，range，all</p><p>del 关键字</p><p>del list[index]</p><p>del list[start:end]</p><p>del list</p><p>4、clear</p><p>list.clear()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># remove
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;, &#39;banana&#39;]
fruits.remove(&#39;banana&#39;)
print(fruits)  # [&#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;, &#39;banana&#39;] - this method removes the first occurrence of the item in the list

# pop
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
fruits.pop()
print(fruits)       # [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;]

fruits.pop(0)
print(fruits)       # [&#39;orange&#39;, &#39;mango&#39;]

# del
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;, &#39;kiwi&#39;, &#39;lime&#39;]
del fruits[0]
print(fruits)       # [&#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;, &#39;kiwi&#39;, &#39;lime&#39;]
del fruits[1]
print(fruits)       # [&#39;orange&#39;, &#39;lemon&#39;, &#39;kiwi&#39;, &#39;lime&#39;]
del fruits[1:3]     # this deletes items between given indexes, so it does not delete the item with index 3!
print(fruits)       # [&#39;orange&#39;, &#39;lime&#39;]
del fruits
print(fruits)       # This should give: NameError: name &#39;fruits&#39; is not defined

# clear
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
fruits.clear()
print(fruits)       # []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-contain" tabindex="-1"><a class="header-anchor" href="#_3-7-contain" aria-hidden="true">#</a> 3.7. Contain</h3><ul><li>in</li></ul><p>item in list</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
does_exist = &#39;banana&#39; in fruits
print(does_exist)  # True
does_exist = &#39;lime&#39; in fruits
print(does_exist)  # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-copy" tabindex="-1"><a class="header-anchor" href="#_3-8-copy" aria-hidden="true">#</a> 3.8. Copy</h3><p>list.copy()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
fruits_copy = fruits.copy()
print(fruits_copy)       # [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-connect" tabindex="-1"><a class="header-anchor" href="#_3-9-connect" aria-hidden="true">#</a> 3.9. Connect</h3><p>方式一：Plus Operator (+)</p><p>list3 = list1 + list2 + list3</p><p>方式二：extend()</p><p>list1.extend(list2)</p><p>方式三：unpack：*list</p><p>lst = [*list_one, *list_two]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>positive_numbers = [1, 2, 3, 4, 5]
zero = [0]
negative_numbers = [-5,-4,-3,-2,-1]

# plus operator
integers = negative_numbers + zero + positive_numbers
print(integers) # [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

# extend
negative_numbers.extend(zero)
negative_numbers.extend(positive_numbers)
print(&#39;Integers:&#39;, negative_numbers) # Integers: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]

# unpack
lst_one = [1, 2, 3]
lst_two = [4, 5, 6, 7]
lst = [0, *list_one, *list_two]
print(lst)          # [0, 1, 2, 3, 4, 5, 6, 7]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-count" tabindex="-1"><a class="header-anchor" href="#_3-10-count" aria-hidden="true">#</a> 3.10. Count</h3><p>list.count(item)</p><h3 id="_3-11-reverse" tabindex="-1"><a class="header-anchor" href="#_3-11-reverse" aria-hidden="true">#</a> 3.11. Reverse</h3><p>list.reverse()</p><p>Note：会在原本list上生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
print(fruits.index(&#39;orange&#39;))   # 1
ages = [22, 19, 24, 25, 26, 24, 25, 24]
print(ages.index(24))           # 2, the first occurrence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-sort" tabindex="-1"><a class="header-anchor" href="#_3-12-sort" aria-hidden="true">#</a> 3.12. Sort</h3><p>方式一：sort() List函数</p><p>Note：会在原本list上生效</p><p>lst.sort() # ascending</p><p>lst.sort(reverse=True) # descending</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># sort
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
fruits.sort()
print(fruits)             # sorted in alphabetical order, [&#39;banana&#39;, &#39;lemon&#39;, &#39;mango&#39;, &#39;orange&#39;]
fruits.sort(reverse=True)
print(fruits) # [&#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;, &#39;banana&#39;]
ages = [22, 19, 24, 25, 26, 24, 25, 24]
ages.sort()
print(ages) #  [19, 22, 24, 24, 24, 25, 25, 26]

ages.sort(reverse=True)
print(ages) #  [26, 25, 25, 24, 24, 24, 22, 19]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：sorted() 内置函数</p><p>Note：不会在原本list上生效</p><p>sorted(list)</p><p>sorted(list,reverse=True)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># sorted
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
print(sorted(fruits))   # [&#39;banana&#39;, &#39;lemon&#39;, &#39;mango&#39;, &#39;orange&#39;]
# Reverse order
fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;]
fruits = sorted(fruits,reverse=True)
print(fruits)     # [&#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;, &#39;banana&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-13-index-item循环" tabindex="-1"><a class="header-anchor" href="#_3-13-index-item循环" aria-hidden="true">#</a> 3.13. index,item循环</h3><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for index,item in enumerate(list):
    print(index, item)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for index, i in enumerate(countries):
    print(&#39;hi&#39;)
    if i == &#39;Finland&#39;:
        print(&#39;The country {i} has been found at index {index}&#39;)

&quot;&quot;&quot; 输出结果
The country Finland has been found at index 1.
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-14-zip组合循环" tabindex="-1"><a class="header-anchor" href="#_3-14-zip组合循环" aria-hidden="true">#</a> 3.14. zip组合循环</h3><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for f, v in zip(fruits, vegetables):
    fruits_and_veges.append({&#39;fruit&#39;:f, &#39;veg&#39;:v})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fruits = [&#39;banana&#39;, &#39;orange&#39;, &#39;mango&#39;, &#39;lemon&#39;, &#39;lime&#39;]                    
vegetables = [&#39;Tomato&#39;, &#39;Potato&#39;, &#39;Cabbage&#39;,&#39;Onion&#39;, &#39;Carrot&#39;]
fruits_and_veges = []
for f, v in zip(fruits, vegetables):
    fruits_and_veges.append({&#39;fruit&#39;:f, &#39;veg&#39;:v})

print(fruits_and_veges)

&quot;&quot;&quot; 输出结果
[{&#39;fruit&#39;: &#39;banana&#39;, &#39;veg&#39;: &#39;Tomato&#39;}, {&#39;fruit&#39;: &#39;orange&#39;, &#39;veg&#39;: &#39;Potato&#39;}, {&#39;fruit&#39;: &#39;mango&#39;, &#39;veg&#39;: &#39;Cabbage&#39;}, {&#39;fruit&#39;: &#39;lemon&#39;, &#39;veg&#39;: &#39;Onion&#39;}, {&#39;fruit&#39;: &#39;lime&#39;, &#39;veg&#39;: &#39;Carrot&#39;}]
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-tuple操作" tabindex="-1"><a class="header-anchor" href="#_4-tuple操作" aria-hidden="true">#</a> 4. Tuple操作</h2><h3 id="_4-1-access" tabindex="-1"><a class="header-anchor" href="#_4-1-access" aria-hidden="true">#</a> 4.1. Access</h3><p>tpl[index]</p><p>• 正索引</p><p>• 负索引</p><figure><img src="`+d+'" alt="正索引" tabindex="0" loading="lazy"><figcaption>正索引</figcaption></figure><figure><img src="'+l+`" alt="负索引" tabindex="0" loading="lazy"><figcaption>负索引</figcaption></figure><h3 id="_4-2-unpack" tabindex="-1"><a class="header-anchor" href="#_4-2-unpack" aria-hidden="true">#</a> 4.2. Unpack</h3><p>tuple同list一致</p><p>1）item1,item2,*rest = tpl</p><p>2）*tpl</p><h3 id="_4-3-slice" tabindex="-1"><a class="header-anchor" href="#_4-3-slice" aria-hidden="true">#</a> 4.3. Slice</h3><p>tpl[start🔚step]</p><h3 id="_4-4-changetype" tabindex="-1"><a class="header-anchor" href="#_4-4-changetype" aria-hidden="true">#</a> 4.4. ChangeType</h3><p>lst = list(tpl)</p><p>tpl=tuple(list)</p><h3 id="_4-5-contain" tabindex="-1"><a class="header-anchor" href="#_4-5-contain" aria-hidden="true">#</a> 4.5. Contain</h3><p>item in tpl</p><h3 id="_4-6-connect" tabindex="-1"><a class="header-anchor" href="#_4-6-connect" aria-hidden="true">#</a> 4.6. Connect</h3><p>tpl3 = tpl1 + tpl2 + tpl3</p><h3 id="_4-7-delete" tabindex="-1"><a class="header-anchor" href="#_4-7-delete" aria-hidden="true">#</a> 4.7. Delete</h3><p>del关键字</p><p>del tpl</p><h2 id="_5-set操作" tabindex="-1"><a class="header-anchor" href="#_5-set操作" aria-hidden="true">#</a> 5. Set操作</h2><h3 id="_5-1-create" tabindex="-1"><a class="header-anchor" href="#_5-1-create" aria-hidden="true">#</a> 5.1. Create</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. empty

set1 = set()

Note:不可使用set1 = {}初始化，这会是dict类型

2. init

set1 = {&#39;item1&#39;, &#39;item2&#39;, &#39;item3&#39;, &#39;item4&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-access" tabindex="-1"><a class="header-anchor" href="#_5-2-access" aria-hidden="true">#</a> 5.2. Access</h3><p>loops</p><h3 id="_5-3-contain" tabindex="-1"><a class="header-anchor" href="#_5-3-contain" aria-hidden="true">#</a> 5.3. Contain</h3><p>item in set</p><h3 id="_5-4-add" tabindex="-1"><a class="header-anchor" href="#_5-4-add" aria-hidden="true">#</a> 5.4. Add</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. one item

set.add(item)

2.multiple items

set.update(list/tuple/set1)

set.union(set1)  join
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-remove" tabindex="-1"><a class="header-anchor" href="#_5-5-remove" aria-hidden="true">#</a> 5.5. Remove</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.指定

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-changetype" tabindex="-1"><a class="header-anchor" href="#_5-6-changetype" aria-hidden="true">#</a> 5.6. ChangeType</h3><p>set = set(list)</p><p>list = list(set)</p><h3 id="_5-7-交集-intersection" tabindex="-1"><a class="header-anchor" href="#_5-7-交集-intersection" aria-hidden="true">#</a> 5.7. 交集 Intersection</h3><p>set1.intersection(set2)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># syntax
st1 = {&#39;item1&#39;, &#39;item2&#39;, &#39;item3&#39;, &#39;item4&#39;}
st2 = {&#39;item3&#39;, &#39;item2&#39;}
st1.intersection(st2) # {&#39;item3&#39;, &#39;item2&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-差集-difference" tabindex="-1"><a class="header-anchor" href="#_5-8-差集-difference" aria-hidden="true">#</a> 5.8. 差集 Difference</h3><p>1.单向</p><p>Note：以下两个结果不同</p><p>set1.difference(set2)</p><p>set2.difference(set1)</p><p>2.双向</p><p>Note：以下两个结果相同，均返回单向差集的和</p><p>set1.symmetric_difference(set2)</p><p>set2.symmetric_difference(set1)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; python = {&#39;p&#39;, &#39;y&#39;, &#39;t&#39;, &#39;h&#39;, &#39;o&#39;,&#39;n&#39;}
&gt;&gt;&gt; dragon = {&#39;d&#39;, &#39;r&#39;, &#39;a&#39;, &#39;g&#39;, &#39;o&#39;,&#39;n&#39;}

# 单向
&gt;&gt;&gt; python.difference(dragon)
{&#39;t&#39;, &#39;p&#39;, &#39;y&#39;, &#39;h&#39;}
&gt;&gt;&gt; dragon.difference(python)
{&#39;r&#39;, &#39;d&#39;, &#39;g&#39;, &#39;a&#39;}

# 双向
&gt;&gt;&gt; python.symmetric_difference(dragon)
{&#39;r&#39;, &#39;g&#39;, &#39;p&#39;, &#39;d&#39;, &#39;y&#39;, &#39;h&#39;, &#39;t&#39;, &#39;a&#39;}
&gt;&gt;&gt; dragon.symmetric_difference(python)
{&#39;r&#39;, &#39;g&#39;, &#39;d&#39;, &#39;p&#39;, &#39;y&#39;, &#39;h&#39;, &#39;t&#39;, &#39;a&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-是否是子集-父集" tabindex="-1"><a class="header-anchor" href="#_5-9-是否是子集-父集" aria-hidden="true">#</a> 5.9. 是否是子集/父集</h3><p>Subset: issubset()</p><p>set1.issubset(set2)</p><p>Super set: issuperset()</p><p>set1.issuperset(set2)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># syntax
st1 = {&#39;item1&#39;, &#39;item2&#39;, &#39;item3&#39;, &#39;item4&#39;}
st2 = {&#39;item2&#39;, &#39;item3&#39;}
st2.issubset(st1) # True
st1.issuperset(st2) # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-是否互斥" tabindex="-1"><a class="header-anchor" href="#_5-10-是否互斥" aria-hidden="true">#</a> 5.10. 是否互斥</h3><p>set1.isdisjoint(set2)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>even_numbers = {0, 2, 4 ,6, 8}
even_numbers = {1, 3, 5, 7, 9}
even_numbers.isdisjoint(odd_numbers) # True, because no common item

python = {&#39;p&#39;, &#39;y&#39;, &#39;t&#39;, &#39;h&#39;, &#39;o&#39;,&#39;n&#39;}
dragon = {&#39;d&#39;, &#39;r&#39;, &#39;a&#39;, &#39;g&#39;, &#39;o&#39;,&#39;n&#39;}
python.isdisjoint(dragon)  # False, there are common items {&#39;o&#39;, &#39;n&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-dictionary操作" tabindex="-1"><a class="header-anchor" href="#_6-dictionary操作" aria-hidden="true">#</a> 6. Dictionary操作</h2><h3 id="_6-1-create" tabindex="-1"><a class="header-anchor" href="#_6-1-create" aria-hidden="true">#</a> 6.1. Create</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、empty

empty_dict = {}

2、init

dict = {&#39;key1&#39;:&#39;value1&#39;, &#39;key2&#39;:&#39;value2&#39;, &#39;key3&#39;:&#39;value3&#39;, &#39;key4&#39;:&#39;value4&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>person = {
    &#39;first_name&#39;:&#39;Asabeneh&#39;,
    &#39;last_name&#39;:&#39;Yetayeh&#39;,
    &#39;age&#39;:250,
    &#39;country&#39;:&#39;Finland&#39;,
    &#39;is_marred&#39;:True,
    &#39;skills&#39;:[&#39;JavaScript&#39;, &#39;React&#39;, &#39;Node&#39;, &#39;MongoDB&#39;, &#39;Python&#39;],
    &#39;address&#39;:{
        &#39;street&#39;:&#39;Space street&#39;,
        &#39;zipcode&#39;:&#39;02210&#39;
    }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-access-add-update" tabindex="-1"><a class="header-anchor" href="#_6-2-access-add-update" aria-hidden="true">#</a> 6.2. Access &amp; Add &amp; Update</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、查询、新增、修改

dict[&#39;key&#39;]

Note：原本有key，可查询，可修改；原本没key，可新增

Note：如果不是新增，key不存在，则报错

2、只查询

dict.get(&#39;key&#39;)

Note：如果key不存在，则返回None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># dict[&#39;key&#39;]
print(person[&#39;first_name&#39;]) # Asabeneh
print(person[&#39;country&#39;])    # Finland
print(person[&#39;skills&#39;])     # [&#39;JavaScript&#39;, &#39;React&#39;, &#39;Node&#39;, &#39;MongoDB&#39;, &#39;Python&#39;]
print(person[&#39;skills&#39;][0])  # JavaScript
print(person[&#39;address&#39;][&#39;street&#39;]) # Space street
print(person[&#39;city&#39;])       # Error

# Add key
person[&#39;job_title&#39;] = &#39;Instructor&#39;
# Update value
person[&#39;skills&#39;].append(&#39;HTML&#39;)
person[&#39;first_name&#39;] = &#39;Eyob&#39;
person[&#39;age&#39;] = 252


# dict.get(&#39;key&#39;)
print(person.get(&#39;first_name&#39;)) # Asabeneh
print(person.get(&#39;country&#39;))    # Finland
print(person.get(&#39;skills&#39;)) #[&#39;HTML&#39;,&#39;CSS&#39;,&#39;JavaScript&#39;, &#39;React&#39;, &#39;Node&#39;, &#39;MongoDB&#39;, &#39;Python&#39;]
print(person.get(&#39;city&#39;))   # None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-contain" tabindex="-1"><a class="header-anchor" href="#_6-3-contain" aria-hidden="true">#</a> 6.3. Contain</h3><p>key in dict</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># syntax
dct = {&#39;key1&#39;:&#39;value1&#39;, &#39;key2&#39;:&#39;value2&#39;, &#39;key3&#39;:&#39;value3&#39;, &#39;key4&#39;:&#39;value4&#39;}
print(&#39;key2&#39; in dct) # True
print(&#39;key5&#39; in dct) # False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-remove" tabindex="-1"><a class="header-anchor" href="#_6-4-remove" aria-hidden="true">#</a> 6.4. Remove</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、去除key

dict.pop(key)

2、去除最后一项

dict.popitem()

3、清空

dict.clear()

4、去除key或完全去除

del 关键字

del dict[key]

del dict
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-changetype" tabindex="-1"><a class="header-anchor" href="#_6-5-changetype" aria-hidden="true">#</a> 6.5. ChangeType</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、tuples list

dict.items()

2、keys list

keys = dict.keys()

3、values list

values = dict.values()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># tuples list
dct = {&#39;key1&#39;:&#39;value1&#39;, &#39;key2&#39;:&#39;value2&#39;, &#39;key3&#39;:&#39;value3&#39;, &#39;key4&#39;:&#39;value4&#39;}
print(dct.items()) # dict_items([(&#39;key1&#39;, &#39;value1&#39;), (&#39;key2&#39;, &#39;value2&#39;), (&#39;key3&#39;, &#39;value3&#39;), (&#39;key4&#39;, &#39;value4&#39;)])


# keys
dct = {&#39;key1&#39;:&#39;value1&#39;, &#39;key2&#39;:&#39;value2&#39;, &#39;key3&#39;:&#39;value3&#39;, &#39;key4&#39;:&#39;value4&#39;}
keys = dct.keys()
print(keys)     # dict_keys([&#39;key1&#39;, &#39;key2&#39;, &#39;key3&#39;, &#39;key4&#39;])

# values
dct = {&#39;key1&#39;:&#39;value1&#39;, &#39;key2&#39;:&#39;value2&#39;, &#39;key3&#39;:&#39;value3&#39;, &#39;key4&#39;:&#39;value4&#39;}
values = dct.values()
print(values)     # dict_values([&#39;value1&#39;, &#39;value2&#39;, &#39;value3&#39;, &#39;value4&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-6-copy" tabindex="-1"><a class="header-anchor" href="#_6-6-copy" aria-hidden="true">#</a> 6.6. Copy</h3><p>dict_copy = dict.copy()</p><h3 id="_6-7-unpack" tabindex="-1"><a class="header-anchor" href="#_6-7-unpack" aria-hidden="true">#</a> 6.7. Unpack</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>**dict
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>def unpacking_person_info(name, country, city, age):
    return f&#39;{name} lives in {country}, {city}. He is {age} year old.&#39;
dct = {&#39;name&#39;:&#39;Asabeneh&#39;, &#39;country&#39;:&#39;Finland&#39;, &#39;city&#39;:&#39;Helsinki&#39;, &#39;age&#39;:250}
print(unpacking_person_info(**dct)) # Asabeneh lives in Finland, Helsinki. He is 250 years old.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,266);function c(u,m){return i(),a("div",null,[r,s(" more "),v])}const p=n(t,[["render",c],["__file","02_python_data_type.html.vue"]]);export{p as default};
