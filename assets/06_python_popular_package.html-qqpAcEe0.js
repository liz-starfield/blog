import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as l,c as u,f as r,a as n,b as s,d as t,e as a}from"./app-C2Yo_1J1.js";const c="/blog/assets/graph_result-I2yjCKiU.png",o="/blog/assets/popular_package_1-7Yc28Iol.png",d="/blog/assets/popular_package_2-8ugBXZdT.png",m={},v=a('<h1 id="python受欢迎的第三方包" tabindex="-1"><a class="header-anchor" href="#python受欢迎的第三方包" aria-hidden="true">#</a> Python受欢迎的第三方包</h1><ul><li><ol><li>Numpy</li></ol></li><li><ol start="2"><li>Pandas</li></ol></li><li><ol start="3"><li>Requests</li></ol></li><li><ol start="4"><li>Flask</li></ol></li><li><ol start="5"><li>更多</li></ol></li></ul>',2),b=a(`<h2 id="_1-numpy" tabindex="-1"><a class="header-anchor" href="#_1-numpy" aria-hidden="true">#</a> 1. Numpy</h2><p>numpy, called numeric python. It is one of the most popular packages in machine learning and data science community. It contains among other things:a powerful N-dimensional array objectsophisticated (broadcasting) functionstools for integrating C/C++ and Fortran codeuseful linear algebra, Fourier transform, and random number capabilities</p><h3 id="_1-1-install" tabindex="-1"><a class="header-anchor" href="#_1-1-install" aria-hidden="true">#</a> 1.1. Install</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip install numpy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-import-version-help" tabindex="-1"><a class="header-anchor" href="#_1-2-import-version-help" aria-hidden="true">#</a> 1.2. Import&amp;Version&amp;Help</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导入
import numpy
# 查看版本
print(&#39;numpy:&#39;, np.__version__)
# 查看可用方法
print(dir(np))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-create" tabindex="-1"><a class="header-anchor" href="#_1-3-create" aria-hidden="true">#</a> 1.3. Create</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;&quot;&quot; array &quot;&quot;&quot;
# np.array
np.array(sequence) # 不设定类型
np.array(sequence,dtype) # 设定类型
Note:
sequence可以是list,可以是tuple
dtype取值类型：int,float,bool,str
创建后类型为n维数组：numpy.ndarray

# 值全为0的array
# np.zeros(shape,dtype)
numpy_zeros = np.zeros((3,3),dtype=int)

# 值全为1的array
# np.ones(shape,dtype)
numpy_ones = np.ones((3,3),dtype=int)

# 值全为n的array
numpy_ns = numpy_ones * n

# numpy.arange(start, stop, step)  类似python的内置函数range
odd_numbers = np.arange(1, 20, 2)

&quot;&quot;&quot; matrix &quot;&quot;&quot;
four_by_four_matrix = np.matrix(np.ones((4,4), dtype=float))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># exp1
python_list = [1,2,3,4,5]
numpy_array_from_list = np.array(python_list, dtype=float)
print(type (numpy_array_from_list))   # &lt;class &#39;numpy.ndarray&#39;&gt;    
print(numpy_array_from_list) # [1., 2., 3., 4., 5.]

# exp2
python_tuple = (1,2,3,4,5)
numpy_array_from_tuple = np.array(python_tuple)
print(type (numpy_array_from_tuple)) # &lt;class &#39;numpy.ndarray&#39;&gt;
print(&#39;numpy_array_from_tuple: &#39;, numpy_array_from_tuple) # numpy_array_from_tuple:  [1 2 3 4 5]

# exp3
four_by_four_matrix = np.matrix(np.ones((4,4), dtype=float))
print(type(four_by_four_matrix))
print(four_by_four_matrix)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-convert" tabindex="-1"><a class="header-anchor" href="#_1-4-convert" aria-hidden="true">#</a> 1.4. Convert</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># array转list
np_to_list=numpy_array.tolist()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-dtype" tabindex="-1"><a class="header-anchor" href="#_1-5-dtype" aria-hidden="true">#</a> 1.5. Dtype</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 数据类型：str, int, float, complex, bool, list, None
# numpy_array所有元素都是同一类型

# 查看数据类型
numpy_array.dtype

# 转换数据类型
str_array = numpy_array.astype(&#39;str&#39;)
str_array = numpy_array.astype(&#39;float&#39;).astype(&#39;str&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>int_lists = [-3, -2, -1, 0, 1, 2,3]
int_array = np.array(int_lists)
print(int_array.dtype) # int64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6-shape-reshape" tabindex="-1"><a class="header-anchor" href="#_1-6-shape-reshape" aria-hidden="true">#</a> 1.6. Shape&amp;Reshape</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># numpy_array的形状：每个维度的大小
numpy_array.shape

# 改变形状:reshape &amp; flatten
first_shape  = np.array([(1,2,3), (4,5,6)])
reshaped = first_shape.reshape(3,2)
flattened = reshaped.flatten()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums = np.array([1, 2, 3, 4, 5])
print(&#39;shape of nums: &#39;, nums.shape) # shape of nums:  (5,)

three_by_four_array = np.array([[0, 1, 2, 3],
    [4,5,6,7],
    [8,9,10, 11]])
print(three_by_four_array.shape) # (3, 4)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-7-size" tabindex="-1"><a class="header-anchor" href="#_1-7-size" aria-hidden="true">#</a> 1.7. Size</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 所有元素之和
numpy_array.size
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>numpy_array_from_list = np.array([1, 2, 3, 4, 5])
two_dimensional_list = np.array([[0, 1, 2],[3, 4, 5],[6, 7, 8]])
print(&#39;The size:&#39;, numpy_array_from_list.size) # The size: 5
print(&#39;The size:&#39;, two_dimensional_list.size)  # The size: 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8-math-operation" tabindex="-1"><a class="header-anchor" href="#_1-8-math-operation" aria-hidden="true">#</a> 1.8. Math Operation</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、numpy_array与数字：
无需循环，会对每个元素生效

2、numpy_array与numpy_array：
相同位置进行运算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>numpy_array = np.array([1, 2, 3, 4, 5])
a = numpy_array_from_list  + 10
print(a) # [11 12 13 14 15]
b = numpy_array_from_list - 10
print(b) # [-9 -8 -7 -6 -5]
c = numpy_array_from_list * 10
print(c) # [10 20 30 40 50]
d = numpy_array_from_list / 10
print(d) # [0.1 0.2 0.3 0.4 0.5]
e = numpy_array_from_list % 3
print(e) # [1 2 0 1 2]
f = numpy_array_from_list // 10
print(f) # [0 0 0 0 0]
g = numpy_array_from_list  ** 2
print(g) # [ 1  4  9 16 25]

np_list_one = np.array([1,2,3])
np_list_two = np.array([4,5,6]) 
print(np_list_one + np_list_two) # [5 7 9]
print(np_list_one * np_list_two) # [4 10 18]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-9-切片-slice" tabindex="-1"><a class="header-anchor" href="#_1-9-切片-slice" aria-hidden="true">#</a> 1.9. 切片 Slice</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 行
numpy_array[0] # 第1行
numpy_array[1] # 第2行
numpy_array[2] # 第3行

# 列
numpy_array[:,0] # 第1列
numpy_array[:,1] # 第2列
numpy_array[:,2] # 第3列

# 元素
numpy_array[1,1] = 55

# 前2行，前2列
numpy_array[0:2,0:2]

# 翻转
numpy_array[::-1,::-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    numpy_array = np.array([[1,2,3],[4,5,6], [7,8,9]])
    numpy_array[::-1,::-1]

&quot;&quot;&quot; result：
    array([[9, 8, 7],
           [6, 5, 4],
           [3, 2, 1]])
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-10-连接-hstack-vstack" tabindex="-1"><a class="header-anchor" href="#_1-10-连接-hstack-vstack" aria-hidden="true">#</a> 1.10. 连接 hstack&amp;vstack</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、水平连接（按行）h=Horizontal：np.hstack((np_list_one,np_list_two))
2、垂直连接（按列）v=Vertical ：
np.vstack((np_list_one,np_list_two))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = np.array((1,2,3))
b = np.array((4,5,6))
print(np.hstack((a,b))) 
&quot;&quot;&quot;
[1 2 3 4 5 6]
&quot;&quot;&quot;
print(np.vstack((a,b)))
&quot;&quot;&quot;
[[1 2 3]
 [4 5 6]]
&quot;&quot;&quot;
a = np.array([[1],[2],[3]])
b = np.array([[4],[5],[6]])
print(np.hstack((a,b)))
&quot;&quot;&quot;
array([[1, 4],
       [2, 5],
       [3, 6]])
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-11-statistic" tabindex="-1"><a class="header-anchor" href="#_1-11-statistic" aria-hidden="true">#</a> 1.11. Statistic</h3><ul><li>Numpy Functions <ul><li>Min np.min()</li><li>Max np.max()</li><li>Mean np.mean()</li><li>Varience</li><li>Percentile</li><li>Standard deviation np.std()</li></ul></li></ul><h3 id="_1-12-random" tabindex="-1"><a class="header-anchor" href="#_1-12-random" aria-hidden="true">#</a> 1.12. Random</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、float
random_float = np.random.random()
2、float array
random_floats = np.random.random(5)
3、int（start,end）左闭右开
random_int = np.random.randint(0, 11)
4、int array （start,end,size）左闭右开
random_int = np.random.randint(2,10, size=4)
random_int = np.random.randint(2,10, size=(3,3))
5、normal array （均值mu,标准差sigma,size）
normal_array = np.random.normal(79, 15, 80)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>normal_array <span class="token operator">=</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">79</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>normal_array<span class="token punctuation">)</span>
<span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> seaborn <span class="token keyword">as</span> sns
sns<span class="token punctuation">.</span><span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>hist<span class="token punctuation">(</span>normal_array<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&quot;grey&quot;</span><span class="token punctuation">,</span> bins<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;normal_array 结果
80个元素的数组，服从均值为79，标准差为15的正态分布
&quot;&quot;&quot;</span>
array<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">92.69419484</span><span class="token punctuation">,</span> <span class="token number">100.90522098</span><span class="token punctuation">,</span>  <span class="token number">75.66676723</span><span class="token punctuation">,</span>  <span class="token number">51.85288324</span><span class="token punctuation">,</span>
        <span class="token number">58.93456584</span><span class="token punctuation">,</span>  <span class="token number">86.8882653</span> <span class="token punctuation">,</span>  <span class="token number">77.85232879</span><span class="token punctuation">,</span>  <span class="token number">80.65229762</span><span class="token punctuation">,</span>
        <span class="token number">75.29982406</span><span class="token punctuation">,</span>  <span class="token number">61.37092068</span><span class="token punctuation">,</span>  <span class="token number">92.2196512</span> <span class="token punctuation">,</span>  <span class="token number">81.4621436</span> <span class="token punctuation">,</span>
        <span class="token number">75.60624329</span><span class="token punctuation">,</span>  <span class="token number">78.8313502</span> <span class="token punctuation">,</span>  <span class="token number">95.1988703</span> <span class="token punctuation">,</span>  <span class="token number">71.61367817</span><span class="token punctuation">,</span>
        <span class="token number">76.53464648</span><span class="token punctuation">,</span>  <span class="token number">79.79467471</span><span class="token punctuation">,</span>  <span class="token number">84.64456654</span><span class="token punctuation">,</span>  <span class="token number">60.45380126</span><span class="token punctuation">,</span>
        <span class="token number">86.26484877</span><span class="token punctuation">,</span>  <span class="token number">89.34976733</span><span class="token punctuation">,</span>  <span class="token number">76.31257666</span><span class="token punctuation">,</span>  <span class="token number">73.19016742</span><span class="token punctuation">,</span>
        <span class="token number">87.32942795</span><span class="token punctuation">,</span>  <span class="token number">89.14391161</span><span class="token punctuation">,</span> <span class="token number">104.4921231</span> <span class="token punctuation">,</span>  <span class="token number">93.81488786</span><span class="token punctuation">,</span>
        <span class="token number">75.73943026</span><span class="token punctuation">,</span>  <span class="token number">65.22710178</span><span class="token punctuation">,</span>  <span class="token number">92.4933286</span> <span class="token punctuation">,</span>  <span class="token number">91.04748818</span><span class="token punctuation">,</span>
        <span class="token number">88.43185823</span><span class="token punctuation">,</span>  <span class="token number">71.7591173</span> <span class="token punctuation">,</span>  <span class="token number">76.58885905</span><span class="token punctuation">,</span>  <span class="token number">70.56334243</span><span class="token punctuation">,</span>
        <span class="token number">96.84237334</span><span class="token punctuation">,</span>  <span class="token number">80.68069405</span><span class="token punctuation">,</span>  <span class="token number">78.58849189</span><span class="token punctuation">,</span>  <span class="token number">74.96428085</span><span class="token punctuation">,</span>
        <span class="token number">70.93466647</span><span class="token punctuation">,</span>  <span class="token number">65.15164539</span><span class="token punctuation">,</span>  <span class="token number">73.95878663</span><span class="token punctuation">,</span>  <span class="token number">99.15939347</span><span class="token punctuation">,</span>
        <span class="token number">63.39133723</span><span class="token punctuation">,</span>  <span class="token number">78.79097971</span><span class="token punctuation">,</span>  <span class="token number">85.53327827</span><span class="token punctuation">,</span> <span class="token number">101.79255722</span><span class="token punctuation">,</span>
        <span class="token number">63.52833828</span><span class="token punctuation">,</span>  <span class="token number">86.50269085</span><span class="token punctuation">,</span> <span class="token number">104.36624717</span><span class="token punctuation">,</span>  <span class="token number">89.25578975</span><span class="token punctuation">,</span>
        <span class="token number">79.45701012</span><span class="token punctuation">,</span>  <span class="token number">81.03987345</span><span class="token punctuation">,</span>  <span class="token number">72.25460386</span><span class="token punctuation">,</span>  <span class="token number">95.33397222</span><span class="token punctuation">,</span>
        <span class="token number">95.60863274</span><span class="token punctuation">,</span>  <span class="token number">82.27517837</span><span class="token punctuation">,</span>  <span class="token number">83.72772366</span><span class="token punctuation">,</span>  <span class="token number">71.53024163</span><span class="token punctuation">,</span>
       <span class="token number">109.75087739</span><span class="token punctuation">,</span>  <span class="token number">97.12307579</span><span class="token punctuation">,</span>  <span class="token number">92.74977091</span><span class="token punctuation">,</span>  <span class="token number">69.97209205</span><span class="token punctuation">,</span>
        <span class="token number">96.37927411</span><span class="token punctuation">,</span>  <span class="token number">91.41644221</span><span class="token punctuation">,</span>  <span class="token number">72.94486545</span><span class="token punctuation">,</span> <span class="token number">113.25565357</span><span class="token punctuation">,</span>
        <span class="token number">99.60227425</span><span class="token punctuation">,</span>  <span class="token number">98.44423374</span><span class="token punctuation">,</span>  <span class="token number">98.68006829</span><span class="token punctuation">,</span>  <span class="token number">62.1570979</span> <span class="token punctuation">,</span>
       <span class="token number">102.71289562</span><span class="token punctuation">,</span>  <span class="token number">87.29671601</span><span class="token punctuation">,</span>  <span class="token number">71.36173083</span><span class="token punctuation">,</span>  <span class="token number">88.64526558</span><span class="token punctuation">,</span>
        <span class="token number">52.90835334</span><span class="token punctuation">,</span>  <span class="token number">84.34055885</span><span class="token punctuation">,</span>  <span class="token number">64.30992424</span><span class="token punctuation">,</span>  <span class="token number">65.63687458</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;plt.hist结果
array 的第一个元素：50个元素，是每个分桶的高度
array 的第二个元素：51个元素，是区间范围。此处是等宽分组。
从头到尾,每个区间范围的宽度是非常固定的约为0.76。

在默认情况下，plt.hist() 函数使用的是等宽分组
区间间隔一致的是等宽分组
区间间隔不一致，使每个区间内数据数量大致相同的是等频分组。

第一组(51.85 ~ 53.08 )有2个值落在这个范围内。
第二组(53.08 ~ 54.31 )有0个值落在这个范围内。
第三组(54.31 ~ 55.54 )有0个值落在这个范围内。
依此类推。
&quot;&quot;&quot;</span>

<span class="token punctuation">(</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">4.</span><span class="token punctuation">,</span>
        <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">5.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">4.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">5.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span>
        <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">3.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">2.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">,</span> <span class="token number">0.</span><span class="token punctuation">,</span> <span class="token number">1.</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 array<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">51.85288324</span><span class="token punctuation">,</span>  <span class="token number">53.08093864</span><span class="token punctuation">,</span>  <span class="token number">54.30899405</span><span class="token punctuation">,</span>  <span class="token number">55.53704946</span><span class="token punctuation">,</span>
         <span class="token number">56.76510486</span><span class="token punctuation">,</span>  <span class="token number">57.99316027</span><span class="token punctuation">,</span>  <span class="token number">59.22121568</span><span class="token punctuation">,</span>  <span class="token number">60.44927108</span><span class="token punctuation">,</span>
         <span class="token number">61.67732649</span><span class="token punctuation">,</span>  <span class="token number">62.9053819</span> <span class="token punctuation">,</span>  <span class="token number">64.1334373</span> <span class="token punctuation">,</span>  <span class="token number">65.36149271</span><span class="token punctuation">,</span>
         <span class="token number">66.58954812</span><span class="token punctuation">,</span>  <span class="token number">67.81760352</span><span class="token punctuation">,</span>  <span class="token number">69.04565893</span><span class="token punctuation">,</span>  <span class="token number">70.27371434</span><span class="token punctuation">,</span>
         <span class="token number">71.50176974</span><span class="token punctuation">,</span>  <span class="token number">72.72982515</span><span class="token punctuation">,</span>  <span class="token number">73.95788056</span><span class="token punctuation">,</span>  <span class="token number">75.18593596</span><span class="token punctuation">,</span>
         <span class="token number">76.41399137</span><span class="token punctuation">,</span>  <span class="token number">77.64204678</span><span class="token punctuation">,</span>  <span class="token number">78.87010219</span><span class="token punctuation">,</span>  <span class="token number">80.09815759</span><span class="token punctuation">,</span>
         <span class="token number">81.326213</span>  <span class="token punctuation">,</span>  <span class="token number">82.55426841</span><span class="token punctuation">,</span>  <span class="token number">83.78232381</span><span class="token punctuation">,</span>  <span class="token number">85.01037922</span><span class="token punctuation">,</span>
         <span class="token number">86.23843463</span><span class="token punctuation">,</span>  <span class="token number">87.46649003</span><span class="token punctuation">,</span>  <span class="token number">88.69454544</span><span class="token punctuation">,</span>  <span class="token number">89.92260085</span><span class="token punctuation">,</span>
         <span class="token number">91.15065625</span><span class="token punctuation">,</span>  <span class="token number">92.37871166</span><span class="token punctuation">,</span>  <span class="token number">93.60676707</span><span class="token punctuation">,</span>  <span class="token number">94.83482247</span><span class="token punctuation">,</span>
         <span class="token number">96.06287788</span><span class="token punctuation">,</span>  <span class="token number">97.29093329</span><span class="token punctuation">,</span>  <span class="token number">98.51898869</span><span class="token punctuation">,</span>  <span class="token number">99.7470441</span> <span class="token punctuation">,</span>
        <span class="token number">100.97509951</span><span class="token punctuation">,</span> <span class="token number">102.20315491</span><span class="token punctuation">,</span> <span class="token number">103.43121032</span><span class="token punctuation">,</span> <span class="token number">104.65926573</span><span class="token punctuation">,</span>
        <span class="token number">105.88732113</span><span class="token punctuation">,</span> <span class="token number">107.11537654</span><span class="token punctuation">,</span> <span class="token number">108.34343195</span><span class="token punctuation">,</span> <span class="token number">109.57148735</span><span class="token punctuation">,</span>
        <span class="token number">110.79954276</span><span class="token punctuation">,</span> <span class="token number">112.02759817</span><span class="token punctuation">,</span> <span class="token number">113.25565357</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token operator">&lt;</span>BarContainer <span class="token builtin">object</span> of <span class="token number">50</span> artists<span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-pandas" tabindex="-1"><a class="header-anchor" href="#_2-pandas" aria-hidden="true">#</a> 2. Pandas</h2><p>pandas, an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language.</p>',44),k={href:"https://github.com/Asabeneh/30-Days-Of-Python/blob/master/25_Day_Pandas/25_pandas.md",target:"_blank",rel:"noopener noreferrer"},_=a(`<h2 id="_3-requests" tabindex="-1"><a class="header-anchor" href="#_3-requests" aria-hidden="true">#</a> 3. Requests</h2><p>Requests(HTTP 请求)</p><p>requests: is a package which we can use to send requests to a server(GET, POST, DELETE, PUT) We will see get, status_code, headers, text and json methods in requests module:</p><ul><li>get(): to open a network and fetch data from url - it returns a response object</li><li>status_code: After we fetched data, we can check the status of the operation (success, error, etc)</li><li>headers: To check the header types</li><li>text: to extract the text from the fetched response object For txt, html, xml and other file formats we can use text.</li><li>json: to extract json data Let&#39;s read a txt file from this website</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># example 1
import requests # importing the request module
url = &#39;https://www.w3.org/TR/PNG/iso_8859-1.txt&#39; # text from a website
response = requests.get(url) # opening a network and fetching a data
print(response)
print(response.status_code) # status code, success:200
print(response.headers)     # headers information
print(response.text) # gives all the text from the page

# example 2
import requests
url = &#39;https://restcountries.eu/rest/v2/all&#39;  # countries api
response = requests.get(url)  # opening a network and fetching a data
print(response) # response object
print(response.status_code)  # status code, success:200
countries = response.json()
print(countries[:1])  # we sliced only the first country, remove the slicing to see all countries
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-flask" tabindex="-1"><a class="header-anchor" href="#_4-flask" aria-hidden="true">#</a> 4. Flask</h2><p>web框架的一种前提：设置虚拟环境</p>`,7),h={href:"https://github.com/Asabeneh/30-Days-Of-Python/blob/master/26_Day_Python_web/26_python_web.md",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"_5-更多",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-更多","aria-hidden":"true"},"#"),s(" 5. 更多")],-1),g=n("p",null,[n("img",{src:o,alt:"",loading:"lazy"}),n("img",{src:d,alt:"",loading:"lazy"})],-1);function x(f,q){const e=p("ExternalLinkIcon");return l(),u("div",null,[v,r(" more "),b,n("p",null,[n("a",k,[s("pandas使用"),t(e)])]),_,n("p",null,[n("a",h,[s("virtual_environmentpython_web"),t(e)])]),y,g])}const T=i(m,[["render",x],["__file","06_python_popular_package.html.vue"]]);export{T as default};
