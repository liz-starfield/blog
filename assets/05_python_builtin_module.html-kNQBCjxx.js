import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as p,f as o,a as s,b as l,d as c,e as n}from"./app-4jXQnbjM.js";const r="/blog/assets/package_and_module-eeamwuF2.png",u="/blog/assets/package_and_directory-wDV22_zQ.png",d="/blog/assets/regular_expression-AC09umgh.png",k={},m=n('<h1 id="python-packages-and-modules" tabindex="-1"><a class="header-anchor" href="#python-packages-and-modules" aria-hidden="true">#</a> Python Packages and Modules</h1><ul><li><ol><li>Packages, Modules,and <strong>init</strong>.py</li></ol></li><li><ol start="2"><li>Inside Python Files</li></ol></li><li><ol start="3"><li>Python Built-in Modules</li></ol></li><li><ol start="4"><li>Practice</li></ol></li></ul>',2),v=n('<h2 id="_1-packages-modules-and-init-py" tabindex="-1"><a class="header-anchor" href="#_1-packages-modules-and-init-py" aria-hidden="true">#</a> 1. Packages, Modules,and <strong>init</strong>.py</h2><h3 id="_1-1-包-package" tabindex="-1"><a class="header-anchor" href="#_1-1-包-package" aria-hidden="true">#</a> 1.1. 包 Package</h3><p>包是指含有__init__.py的文件夹，如果没有__init__.py则不是包</p><p>包里包含的内容：<strong>init</strong>.py，模块，子包</p><figure><img src="'+r+'" alt="包与模块" tabindex="0" loading="lazy"><figcaption>包与模块</figcaption></figure><figure><img src="'+u+`" alt="包与目录" tabindex="0" loading="lazy"><figcaption>包与目录</figcaption></figure><h3 id="_1-2-模块-modules" tabindex="-1"><a class="header-anchor" href="#_1-2-模块-modules" aria-hidden="true">#</a> 1.2. 模块 Modules</h3><p>模块是指包里的python文件</p><p>模块是一个文件，里面包含变量，函数等</p><p>A module can contain multiple objects, such as classes, functions, etc.</p><p>包是一个文件夹，包含有一个或多个模块</p><p>A package can contain one or more relevant modules.</p><p>A package is actually a folder containing one or more module files.</p><h3 id="_1-3-init-py" tabindex="-1"><a class="header-anchor" href="#_1-3-init-py" aria-hidden="true">#</a> 1.3. __init__.py</h3><p>三个主要作用：</p><p>1）标识其所在目录为一个python包，可以被其他代码导入使用</p><p>2）初始化python包，可以被理解为是包的构造函数，当一个包被第一次引入时会被执行，可以将一些初始化代码放如此</p><p>3）控制导入行为：在__init__.py中定义可以被外界调用的类和方法。</p><p>导入所有（from xxx import *）：可以通过设置 <code>__all__</code> 变量来指定包被import * 导入时，应该导入哪些模块</p><p>导入指定（from xxx import yyy）: 如果有__getattr__方法，导入前会调用该方法</p><p>注意：</p><ul><li><code>__init__.py</code>文件可以为空</li><li>不能把其它同级目录的文件导入此package中</li><li>如果有多个类和方法名字相同，那么后导入的会覆盖先导入的</li></ul><h2 id="_2-inside-python-files" tabindex="-1"><a class="header-anchor" href="#_2-inside-python-files" aria-hidden="true">#</a> 2. Inside Python Files</h2><h3 id="_2-1-导入" tabindex="-1"><a class="header-anchor" href="#_2-1-导入" aria-hidden="true">#</a> 2.1. 导入</h3><p>1、导入整个模块</p><ul><li>import module_name</li><li>from module_name import * # 使用更便捷</li></ul><p><em>Note：用</em> from statistics import * 代替 import statistics，可以避免前面都加statistics.mean(xxx)，</p><p>从而可以直接使用导入的函数mean(xxx)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py file</span>
<span class="token keyword">import</span> mymodule
<span class="token keyword">print</span><span class="token punctuation">(</span>mymodule<span class="token punctuation">.</span>generate_full_name<span class="token punctuation">(</span><span class="token string">&#39;Asabeneh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Yetayeh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># Asabeneh Yetayeh</span>

<span class="token keyword">from</span> math <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span>                  <span class="token comment"># 3.141592653589793, pi constant</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sqrt<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>             <span class="token comment"># 1.4142135623730951, square root</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>           <span class="token comment"># 8.0, exponential</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>floor<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>         <span class="token comment"># 9, rounding to the lowest</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ceil<span class="token punctuation">(</span><span class="token number">9.81</span><span class="token punctuation">)</span><span class="token punctuation">)</span>          <span class="token comment"># 10, rounding to the highest</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>log10<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>     <span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、导入模块中的部分变量或函数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py file</span>
<span class="token keyword">from</span> mymodule <span class="token keyword">import</span> generate_full_name<span class="token punctuation">,</span> sum_two_nums<span class="token punctuation">,</span> person<span class="token punctuation">,</span> gravity
<span class="token keyword">print</span><span class="token punctuation">(</span>generate_full_name<span class="token punctuation">(</span><span class="token string">&#39;Asabneh&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Yetayeh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sum_two_nums<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mass <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
weight <span class="token operator">=</span> mass <span class="token operator">*</span> gravity
<span class="token keyword">print</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span><span class="token string">&#39;firstname&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、导入内容重命名</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># main.py file</span>
<span class="token keyword">from</span> mymodule <span class="token keyword">import</span> generate_full_name <span class="token keyword">as</span> fullname<span class="token punctuation">,</span> sum_two_nums <span class="token keyword">as</span> total<span class="token punctuation">,</span> person <span class="token keyword">as</span> p<span class="token punctuation">,</span> gravity <span class="token keyword">as</span> g
<span class="token keyword">print</span><span class="token punctuation">(</span>fullname<span class="token punctuation">(</span><span class="token string">&#39;Asabneh&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;Yetayeh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>total<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
mass <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
weight <span class="token operator">=</span> mass <span class="token operator">*</span> g
<span class="token keyword">print</span><span class="token punctuation">(</span>weight<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span><span class="token string">&#39;firstname&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-类与对象" tabindex="-1"><a class="header-anchor" href="#_2-2-类与对象" aria-hidden="true">#</a> 2.2. 类与对象</h3><p>Python是面向对象的编程语言</p><p>Python的每个元素都是一个类，有其属性和方法（行为）</p><p>number, string, list, dictionary, tuple, set是内置类（built-in class）</p><h4 id="_2-2-1-创建类-对象" tabindex="-1"><a class="header-anchor" href="#_2-2-1-创建类-对象" aria-hidden="true">#</a> 2.2.1. 创建类&amp;对象</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 创建Person类（用class关键字创建类，类名采用驼峰命名）</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">:</span>
      <span class="token comment"># 构造函数：Python有一个内置构造函数init()</span>
      <span class="token comment"># 参数可以给默认值，调用构造函数时就可用默认值，从而不传参数</span>
      <span class="token comment"># init()构造函数有一个 self 参数,是类的实例（对象）的一个指代</span>
      <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> firstname<span class="token operator">=</span><span class="token string">&#39;Asabeneh&#39;</span><span class="token punctuation">,</span> lastname<span class="token operator">=</span><span class="token string">&#39;Yetayeh&#39;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">250</span><span class="token punctuation">,</span> country<span class="token operator">=</span><span class="token string">&#39;Finland&#39;</span><span class="token punctuation">,</span> city<span class="token operator">=</span><span class="token string">&#39;Helsinki&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
          self<span class="token punctuation">.</span>firstname <span class="token operator">=</span> firstname
          self<span class="token punctuation">.</span>lastname <span class="token operator">=</span> lastname
          self<span class="token punctuation">.</span>age <span class="token operator">=</span> age
          self<span class="token punctuation">.</span>country <span class="token operator">=</span> country
          self<span class="token punctuation">.</span>city <span class="token operator">=</span> city
          self<span class="token punctuation">.</span>skills <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

      <span class="token comment"># 方法</span>
      <span class="token keyword">def</span> <span class="token function">person_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>firstname<span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>lastname<span class="token punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string"> years old. He lives in </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>city<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>country<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span>
      <span class="token keyword">def</span> <span class="token function">add_skill</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> skill<span class="token punctuation">)</span><span class="token punctuation">:</span>
          self<span class="token punctuation">.</span>skills<span class="token punctuation">.</span>append<span class="token punctuation">(</span>skill<span class="token punctuation">)</span>

<span class="token comment"># 创建Person对象</span>
p1 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 通过调用构造函数创建对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>person_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;HTML&#39;</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;CSS&#39;</span><span class="token punctuation">)</span>
p1<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">)</span>

p2 <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Doe&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">&#39;Nomanland&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Noman city&#39;</span><span class="token punctuation">)</span> <span class="token comment"># 通过调用构造函数创建对象</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>person_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>skills<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>skills<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-继承类" tabindex="-1"><a class="header-anchor" href="#_2-2-2-继承类" aria-hidden="true">#</a> 2.2.2. 继承类</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 通过class Student(Person)语法使Student类继承Person类</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 改写父类方法：和父类方法同名，则会覆盖父类的方法</span>
    <span class="token comment"># 如果子类没有改写init()，则可以使用父类的构造方法创建对象</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span> <span class="token punctuation">(</span>self<span class="token punctuation">,</span> firstname<span class="token operator">=</span><span class="token string">&#39;Asabeneh&#39;</span><span class="token punctuation">,</span> lastname<span class="token operator">=</span><span class="token string">&#39;Yetayeh&#39;</span><span class="token punctuation">,</span>age<span class="token operator">=</span><span class="token number">250</span><span class="token punctuation">,</span> country<span class="token operator">=</span><span class="token string">&#39;Finland&#39;</span><span class="token punctuation">,</span> city<span class="token operator">=</span><span class="token string">&#39;Helsinki&#39;</span><span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
        <span class="token comment"># 通过super()调用父类的方法</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>firstname<span class="token punctuation">,</span> lastname<span class="token punctuation">,</span>age<span class="token punctuation">,</span> country<span class="token punctuation">,</span> city<span class="token punctuation">)</span>

    <span class="token comment"># 改写父类方法：和父类方法同名，则会覆盖父类的方法</span>
    <span class="token keyword">def</span> <span class="token function">person_info</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        gender <span class="token operator">=</span> <span class="token string">&#39;He&#39;</span> <span class="token keyword">if</span> self<span class="token punctuation">.</span>gender <span class="token operator">==</span><span class="token string">&#39;male&#39;</span> <span class="token keyword">else</span> <span class="token string">&#39;She&#39;</span>
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>firstname<span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>lastname<span class="token punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>age<span class="token punctuation">}</span></span><span class="token string"> years old. </span><span class="token interpolation"><span class="token punctuation">{</span>gender<span class="token punctuation">}</span></span><span class="token string"> lives in </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>city<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>country<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span>

<span class="token comment"># 创建Student对象</span>
s1 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Eyob&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Yetayeh&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">&#39;Finland&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Helsinki&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;male&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>person_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;React&#39;</span><span class="token punctuation">)</span>
s1<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;Python&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">.</span>skills<span class="token punctuation">)</span>

s2 <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Lidiya&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Teklemariam&#39;</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token string">&#39;Finland&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Espoo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;female&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>person_info<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
s2<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;Organizing&#39;</span><span class="token punctuation">)</span>
s2<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;Marketing&#39;</span><span class="token punctuation">)</span>
s2<span class="token punctuation">.</span>add_skill<span class="token punctuation">(</span><span class="token string">&#39;Digital Marketing&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s2<span class="token punctuation">.</span>skills<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-异常" tabindex="-1"><a class="header-anchor" href="#_2-3-异常" aria-hidden="true">#</a> 2.3. 异常</h3><h4 id="_2-3-1-异常类型" tabindex="-1"><a class="header-anchor" href="#_2-3-1-异常类型" aria-hidden="true">#</a> 2.3.1. 异常类型</h4><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>SyntaxError</td><td>语法错误</td></tr><tr><td>NameError</td><td>未申明变量</td></tr><tr><td>IndexError</td><td>索引越界</td></tr><tr><td>ModuleNotFoundError</td><td>模块未发现</td></tr><tr><td>AttributeError</td><td>属性错误</td></tr><tr><td>KeyError</td><td>键错误</td></tr><tr><td>TypeError</td><td>类型错误</td></tr><tr><td>ImportError</td><td>导入错误</td></tr><tr><td>ValueError</td><td>值错误</td></tr><tr><td>ZeroDivisionError</td><td>除0错误</td></tr></tbody></table><h4 id="_2-3-2-异常处理-try-except-finally" tabindex="-1"><a class="header-anchor" href="#_2-3-2-异常处理-try-except-finally" aria-hidden="true">#</a> 2.3.2. 异常处理（try except finally）</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># example 1</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Enter your name:&#39;</span><span class="token punctuation">)</span>
    year_born <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Year you were born:&#39;</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> <span class="token number">2019</span> <span class="token operator">-</span> year_born
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;You are </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">. And your age is </span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">except</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Something went wrong&#39;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;输出结果
Something went wrong
&quot;&quot;&quot;</span>

<span class="token comment"># example 2</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Enter your name:&#39;</span><span class="token punctuation">)</span>
    year_born <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Year you were born:&#39;</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> <span class="token number">2019</span> <span class="token operator">-</span> year_born
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;You are </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">. And your age is </span><span class="token interpolation"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span>
<span class="token keyword">except</span> TypeError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Type error occured&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> ValueError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Value error occured&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> ZeroDivisionError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;zero division error occured&#39;</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot; 输出结果
Enter your name:Asabeneh
Year you born:1920
Type error occured
&quot;&quot;&quot;</span>

<span class="token comment"># example 3</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Enter your name:&#39;</span><span class="token punctuation">)</span>
    year_born <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Year you born:&#39;</span><span class="token punctuation">)</span>
    age <span class="token operator">=</span> <span class="token number">2019</span> <span class="token operator">-</span> <span class="token builtin">int</span><span class="token punctuation">(</span>year_born<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;You are {name}. And your age is {age}.&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I usually run with the try block&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;I alway run.&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-内置变量-name" tabindex="-1"><a class="header-anchor" href="#_2-4-内置变量-name" aria-hidden="true">#</a> 2.4. 内置变量__name__</h3><ul><li>在本文件中，__name__的值为‘__main__’</li><li>在该文件作为模块被导入到其他文件中，被导入模块的__name__值为导入的模块名</li></ul><h2 id="_3-python-built-in-modules" tabindex="-1"><a class="header-anchor" href="#_3-python-built-in-modules" aria-hidden="true">#</a> 3. Python Built-in Modules</h2><h3 id="_3-1-os" tabindex="-1"><a class="header-anchor" href="#_3-1-os" aria-hidden="true">#</a> 3.1. os</h3><p>os：(operating system)操作系统</p><p>用途：操作文件夹或文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># import the module
import os
# Creating a directory
os.mkdir(&#39;directory_name&#39;)
# Changing the current directory
os.chdir(&#39;path&#39;)
# Getting current working directory
os.getcwd()
# Removing directory
os.rmdir()

# 删除文件：如果不存在则报错
os.remove(&#39;./files/example.txt&#39;)
# 删除文件，提前校验文件是否存在
if os.path.exists(&#39;./files/example.txt&#39;):
    os.remove(&#39;./files/example.txt&#39;)
else:
    print(&#39;The file does not exist&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-sys" tabindex="-1"><a class="header-anchor" href="#_3-2-sys" aria-hidden="true">#</a> 3.2. sys</h3><p>sys：(runtime environment)运行时环境</p><p>用途：命令行参数等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import sys
# command line: python script.py Asabeneh 30DaysOfPython
print(sys.argv[0], argv[1],sys.argv[2])  # this line would print out: filename argument1 argument2
print(&#39;Welcome {}. Enjoy  {} challenge!&#39;.format(sys.argv[1], sys.argv[2])) # Welcome Asabeneh. Enjoy  30DayOfPython challenge! 
# to exit sys
sys.exit()
# To know the largest integer variable it takes
sys.maxsize
# To know environment path
sys.path
# To know the version of python you are using
sys.version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-math" tabindex="-1"><a class="header-anchor" href="#_3-3-math" aria-hidden="true">#</a> 3.3. math</h3><p>math 数学</p><p>数学运算及常量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import math
print(math.pi)           # 3.141592653589793, pi constant
print(math.sqrt(2))      # 1.4142135623730951, square root
print(math.pow(2, 3))    # 8.0, exponential function
print(math.floor(9.81))  # 9, rounding to the lowest
print(math.ceil(9.81))   # 10, rounding to the highest
print(math.log10(100))   # 2, logarithm with 10 as base
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-datetime" tabindex="-1"><a class="header-anchor" href="#_3-4-datetime" aria-hidden="true">#</a> 3.4. datetime</h3><p>datetime 时间</p><ul><li>datetime 日期+时间</li><li>date 日期</li><li>time 时间</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from datetime import datetime
now = datetime.now()
new_year = datetime(2020, 1, 1)
timestamp = now.timestamp()
t = now.strftime(&quot;%H:%M:%S&quot;) # 格式化输出
date_object = datetime.strptime(date_string, &quot;%d %B, %Y&quot;) # string转datetime对象
from datetime import date
from datetime import time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-random" tabindex="-1"><a class="header-anchor" href="#_3-5-random" aria-hidden="true">#</a> 3.5. random</h3><p>random 随机数</p><p>random and randint</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from random import random, randint
print(random())   # it doesn&#39;t take any arguments; it returns a value between 0 and 0.9999
print(randint(5, 20)) # it returns a random integer number between [5, 20] inclusive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-statistics" tabindex="-1"><a class="header-anchor" href="#_3-6-statistics" aria-hidden="true">#</a> 3.6. statistics</h3><p>statistics 统计数据</p><p>mean, median, mode, stdev等</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from statistics import * # importing all the statistics modules
ages = [20, 20, 4, 24, 25, 22, 26, 20, 23, 22, 26]
print(mean(ages))       # ~22.9
print(median(ages))     # 23
print(mode(ages))       # 20
print(stdev(ages))      # ~2.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-webbrowser" tabindex="-1"><a class="header-anchor" href="#_3-7-webbrowser" aria-hidden="true">#</a> 3.7. webbrowser</h3><p>can help us to open any website. For instance if you like to open any number of websites at any time or if you like to schedule something, this webbrowser module can be used.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import webbrowser # web browser module to open websites

# list of urls: python
url_lists = [
    &#39;http://www.python.org&#39;,
    &#39;https://www.linkedin.com/in/asabeneh/&#39;,
    &#39;https://github.com/Asabeneh&#39;,
    &#39;https://twitter.com/Asabeneh&#39;,
]

# opens the above list of websites in a different tab
for url in url_lists:
    webbrowser.open_new_tab(url)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-json" tabindex="-1"><a class="header-anchor" href="#_3-8-json" aria-hidden="true">#</a> 3.8. json</h3><p>json：JavaScript Object Notation (JSON)</p><p>JSON及JSON文件处理</p><p>1、导入</p><p>import json</p><p>2、jsonstr与dict转换</p><p>dict=json.loads(json_str)</p><p>json_str=json.dumps(dict)</p><p>3、保存JSON文件</p><p>json.dump(dict,output_file,...)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import json
# python dictionary
person = {
    &quot;name&quot;: &quot;Asabeneh&quot;,
    &quot;country&quot;: &quot;Finland&quot;,
    &quot;city&quot;: &quot;Helsinki&quot;,
    &quot;skills&quot;: [&quot;JavaScrip&quot;, &quot;React&quot;, &quot;Python&quot;]
}
with open(&#39;./files/json_example.json&#39;, &#39;w&#39;, encoding=&#39;utf-8&#39;) as f:
    json.dump(person, f, ensure_ascii=False, indent=4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-csv" tabindex="-1"><a class="header-anchor" href="#_3-9-csv" aria-hidden="true">#</a> 3.9. csv</h3><p>CSV文件处理</p><p>1、导入</p><p>import csv</p><p>2、读文件</p><p>csv.reader(f, delimiter=&#39;,&#39;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import csv
with open(&#39;./files/csv_example.csv&#39;) as f:
    csv_reader = csv.reader(f, delimiter=&#39;,&#39;) # w use, reader method to read csv
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f&#39;Column names are :{&quot;, &quot;.join(row)}&#39;)
            line_count += 1
        else:
            print(
                f&#39;\\t{row[0]} is a teachers. He lives in {row[1]}, {row[2]}.&#39;)
            line_count += 1
    print(f&#39;Number of lines:  {line_count}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-string" tabindex="-1"><a class="header-anchor" href="#_3-10-string" aria-hidden="true">#</a> 3.10. string</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import string
print(string.ascii_letters) # abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
print(string.digits)        # 0123456789
print(string.punctuation)   # !&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[\\]^_\`{|}~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-11-re" tabindex="-1"><a class="header-anchor" href="#_3-11-re" aria-hidden="true">#</a> 3.11. re</h3><p>re 正则表达式 RegEx (Regular Expressions)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>re.I # 匹配是否不限大小写，加上则不限
re.match # 找第1个
re.search # 找第1个
re.findall  # 找所有
re.sub # 全部替代
re.split # 按分隔符拆分
声明一个正则表达式：r&#39;xxx&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
txt = &#39;&#39;&#39;%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing. 
T%he%re i%s n%o%th%ing as r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing p%e%o%ple.
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs. 
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher?&#39;&#39;&#39;

matches = re.sub(&#39;%&#39;, &#39;&#39;, txt)
print(matches)

&quot;&quot;&quot; 输出结果
I am teacher and I love teaching.
There is nothing as rewarding as educating and empowering people. 
I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-11-1-正则表达式规则" tabindex="-1"><a class="header-anchor" href="#_3-11-1-正则表达式规则" aria-hidden="true">#</a> 3.11.1. 正则表达式规则</h4><figure><img src="`+d+`" alt="正则表达式规则" tabindex="0" loading="lazy"><figcaption>正则表达式规则</figcaption></figure><h3 id="_3-12-collections" tabindex="-1"><a class="header-anchor" href="#_3-12-collections" aria-hidden="true">#</a> 3.12. collections</h3><h3 id="_3-12-1-counter-计数" tabindex="-1"><a class="header-anchor" href="#_3-12-1-counter-计数" aria-hidden="true">#</a> 3.12.1. Counter 计数</h3><p>Counter是dict的子类，用于计数可哈希对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from collections import Counter

# 字符串
s = &quot;loveleetcode&quot;
counter = Counter(s)
print(counter) # Counter({&#39;e&#39;: 4, &#39;l&#39;: 2, &#39;o&#39;: 2, &#39;v&#39;: 1, &#39;t&#39;: 1, &#39;c&#39;: 1, &#39;d&#39;: 1})

# 列表
lst = [&#39;red&#39;, &#39;blue&#39;, &#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;blue&#39;]
counter = Counter(lst)
print(counter) # Counter({&#39;blue&#39;: 3, &#39;red&#39;: 2, &#39;green&#39;: 1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Counter的方法most_common(),返回top k的列表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Counter(&#39;abracadabra&#39;).most_common(3) # [(&#39;a&#39;, 5), (&#39;b&#39;, 2), (&#39;r&#39;, 2)]

Counter(&#39;abracadabra&#39;).most_common(5) # [(&#39;a&#39;, 5), (&#39;b&#39;, 2), (&#39;r&#39;, 2), (&#39;c&#39;, 1), (&#39;d&#39;, 1)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-12-2-deque-双端队列-double-end-queue" tabindex="-1"><a class="header-anchor" href="#_3-12-2-deque-双端队列-double-end-queue" aria-hidden="true">#</a> 3.12.2. deque 双端队列（double-end queue）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from collections import deque

queue = deque()

queue = deque(list/tuple/string/dict)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>queue.append(item) # 从右端添加元素
queue.extend(list/tuple/string/dict) # 从右端添加可迭代对象
queue.pop() # 从右端移除元素并返回

queue.appendleft(item) # 从左端添加元素
queue.extendleft(list/tuple/string/dict)# 从左端添加可迭代对象
queue.popleft() # 从左端移除元素并返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-practice" tabindex="-1"><a class="header-anchor" href="#_4-practice" aria-hidden="true">#</a> 4. Practice</h2><h3 id="_4-1-抓取网站数据" tabindex="-1"><a class="header-anchor" href="#_4-1-抓取网站数据" aria-hidden="true">#</a> 4.1. 抓取网站数据</h3><ul><li>使用requests从url获取数据</li><li>使用BeautifulSoup解析页面内容</li></ul>`,114),b={href:"https://www.crummy.com/software/BeautifulSoup/bs4/doc/#quick-start",target:"_blank",rel:"noopener noreferrer"},h=n(`<p>导包</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install requests
pip install beautifulsoup4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
url <span class="token operator">=</span> <span class="token string">&#39;https://archive.ics.uci.edu/ml/datasets.php&#39;</span>

response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
content <span class="token operator">=</span> response<span class="token punctuation">.</span>content <span class="token comment"># we get all the content from the website</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span> <span class="token comment"># beautiful soup will give a chance to parse</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token comment"># &lt;title&gt;UCI Machine Learning Repository: Data Sets&lt;/title&gt;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>title<span class="token punctuation">.</span>get_text<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># UCI Machine Learning Repository: Data Sets</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>soup<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token comment"># gives the whole page on the website</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

tables <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;table&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;cellpadding&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment"># We are targeting the table with cellpadding attribute with the value of 3</span>
<span class="token comment"># We can select using id, class or HTML tag , for more information check the beautifulsoup doc</span>
table <span class="token operator">=</span> tables<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment"># the result is a list, we are taking out data from it</span>
<span class="token keyword">for</span> td <span class="token keyword">in</span> table<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;tr&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;td&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>td<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(y,_){const a=t("ExternalLinkIcon");return i(),p("div",null,[m,o(" more "),v,s("p",null,[s("a",b,[l("Beautiful Soup Doc"),c(a)])]),h])}const w=e(k,[["render",g],["__file","05_python_builtin_module.html.vue"]]);export{w as default};
