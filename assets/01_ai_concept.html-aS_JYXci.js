import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as r,f as n,e as a}from"./app-IO-qNm-w.js";const l="/blog/assets/machine_learning-D-X7smr5.png",t="/blog/assets/reinforcement_learning-c7K7CCbG.png",s="/blog/assets/supervised_learning-q4MMb7N4.png",d="/blog/assets/unsupervised_learning-gTGWLqy1.png",h={},o=a('<h1 id="人工智能概念解读" tabindex="-1"><a class="header-anchor" href="#人工智能概念解读" aria-hidden="true">#</a> 人工智能概念解读</h1><ul><li><ol><li>机器学习、深度学习与强化学习</li></ol></li><li><ol start="2"><li>有监督学习、半监督学习、无监督学习</li></ol></li><li><ol start="3"><li>在线学习和离线学习</li></ol></li><li><ol start="4"><li>回归，分类与多标签分类</li></ol></li><li><ol start="5"><li>推荐与搜索</li></ol></li></ul>',2),c=a('<h2 id="_1-机器学习、深度学习与强化学习" tabindex="-1"><a class="header-anchor" href="#_1-机器学习、深度学习与强化学习" aria-hidden="true">#</a> 1. 机器学习、深度学习与强化学习</h2><p>简而言之：</p><ul><li>机器学习是根据数据提取知识的通用方法。</li><li>深度学习是机器学习中一个强大的-子集，它侧重于利用神经网络。</li><li>强化学习则侧重于在决策过程中通过反馈来优化智能体的行为。</li></ul><h3 id="_1-1-机器学习" tabindex="-1"><a class="header-anchor" href="#_1-1-机器学习" aria-hidden="true">#</a> 1.1. 机器学习</h3><p>机器学习研究计算机系统如何利用经验（通常是数据）来提高特定任务的性能。</p><p>用数据来调整模型参数，从而确定程序行为（输⼊-输出映射）。</p><p>参数可以被看作旋钮，旋钮的转动可以调整程序的⾏为。</p><p>任⼀调整参数后的程序被称为模型（model）。</p><p>使⽤数据集来选择参数的元程序被称为学习算法（learning algorithm）。</p><p>我们不需要设计“明确的”系统逻辑，只需要定义一个灵活的程序算法，其输出由许多参数（parameter）决定，然后使用数据集来确定当下的“最佳参数集”。</p><p>在机器学习中，学习（learning）是⼀个训练模型的过程。通过这个过程，我们可以发现正确的参数集， 从⽽使模型强制执⾏所需的⾏为。换句话说，我们⽤数据训练（train）模型。</p><p>这种“通过⽤数据集来确定程序⾏为”的⽅法可以被看作⽤数据编程（programming with data）。</p><figure><img src="'+l+'" alt="机器学习过程" tabindex="0" loading="lazy"><figcaption>机器学习过程</figcaption></figure><h3 id="_1-2-机器学习中的四大关键组件" tabindex="-1"><a class="header-anchor" href="#_1-2-机器学习中的四大关键组件" aria-hidden="true">#</a> 1.2. 机器学习中的四大关键组件</h3><ul><li>数据（数据集）data : 可以用来学习的数据</li><li>模型 model ：如何转换数据的模型</li><li>目标函数 objective function （损失函数，loss/cost function） ： 量化模型的有效性</li><li>优化算法（梯度下降,gradient descent）： 调整模型参数以优化目标函数的算法</li></ul><h3 id="_1-3-深度学习" tabindex="-1"><a class="header-anchor" href="#_1-3-深度学习" aria-hidden="true">#</a> 1.3. 深度学习</h3><p>深度学习是机器学习的一个子集，它使用了一类称为神经网络的算法。深度学习模型特别是卷积神经网络（CNNs）和循环神经网络（RNNs），能够在大量的数据中自动发现表示层次，从而学习数据的高层抽象。深度学习在图像识别、语音识别、自然语言处理等领域表现出色，成为当今很多复杂问题的首选方法。</p><h3 id="_1-4-强化学习reinforcement-learning与环境交互" tabindex="-1"><a class="header-anchor" href="#_1-4-强化学习reinforcement-learning与环境交互" aria-hidden="true">#</a> 1.4. 强化学习reinforcement learning与环境交互</h3><p>强化学习是一种与众不同的范式，它关注的是智能体（agent）如何在环境中采取行动，以最大化某种累计奖励。不同于大多数机器学习方法中数据是静态提供的，强化学习强调的是学习与环境之间的交互。智能体通过试错（trial and error）和收获奖励来学习最优策略。</p><figure><img src="'+t+'" alt="强化学习" tabindex="0" loading="lazy"><figcaption>强化学习</figcaption></figure><h2 id="_2-有监督学习、半监督学习、无监督学习" tabindex="-1"><a class="header-anchor" href="#_2-有监督学习、半监督学习、无监督学习" aria-hidden="true">#</a> 2. 有监督学习、半监督学习、无监督学习</h2><p>有监督学习（supervised learning）：每个数据样本都有相应标签</p><figure><img src="'+s+'" alt="有监督学习" tabindex="0" loading="lazy"><figcaption>有监督学习</figcaption></figure><p>半监督学习：部分数据样本有标签或仅采用部分数据样本的标签</p><p>无监督学习（unsupervised learning）：数据样本没有标签</p><figure><img src="'+d+'" alt="无监督学习" tabindex="0" loading="lazy"><figcaption>无监督学习</figcaption></figure><h2 id="_3-在线学习和离线学习" tabindex="-1"><a class="header-anchor" href="#_3-在线学习和离线学习" aria-hidden="true">#</a> 3. 在线学习和离线学习</h2><p>离线学习（offline learning）：数据时预先准备好的，固定的</p><p>在线学习（online learning）：数据是实时的，变化的</p><h2 id="_4-回归-分类与多标签分类" tabindex="-1"><a class="header-anchor" href="#_4-回归-分类与多标签分类" aria-hidden="true">#</a> 4. 回归，分类与多标签分类</h2><h3 id="_4-1-回归regression" tabindex="-1"><a class="header-anchor" href="#_4-1-回归regression" aria-hidden="true">#</a> 4.1. 回归regression</h3><p>在回归中，我们训练一个回归函数，它的输出为预测的数值。</p><p>回归问题：任何有关“多少”的问题很可能就是回归问题。标签是任意数值。</p><h3 id="_4-2-分类classification" tabindex="-1"><a class="header-anchor" href="#_4-2-分类classification" aria-hidden="true">#</a> 4.2. 分类classification</h3><p>分类问题：任何有关“哪一个”的问题很可能就是分类问题。</p><p>在分类中，我们训练一个分类器，它的输出为预测的类别。</p><p>我们可以试着用概率语言来理解模型。给定一个样本，模型为每个类别分配一个概率。eg.猫狗分类器，输出一个图像是猫的概率是0.9。可以理解为，分类器90%确定图像描绘的是一只猫。</p><p>预测类别的概率的大小传达了一种模型的不确定性。</p><ul><li>单标签分类：类别间相互排斥。 <ul><li>二分类：只有两种类别，最简单的分类问题。</li><li>多分类：两个以上的类别。如识别手写数字。</li></ul></li><li>多标签分类：也称为标记问题，不相互排斥的类别问题。</li></ul><h3 id="_4-3-多标签分类-multi-label-classification" tabindex="-1"><a class="header-anchor" href="#_4-3-多标签分类-multi-label-classification" aria-hidden="true">#</a> 4.3. 多标签分类 multi-label classification</h3><p>类别之间不相互排斥。</p><p>比如，一张图中有人，汽车，房子等多个物体。一篇博客文章有“机器学习”、“编程语言”、“AI”等多个标签。</p><h2 id="_5-推荐与搜索" tabindex="-1"><a class="header-anchor" href="#_5-推荐与搜索" aria-hidden="true">#</a> 5. 推荐与搜索</h2><h3 id="_5-1-搜索" tabindex="-1"><a class="header-anchor" href="#_5-1-搜索" aria-hidden="true">#</a> 5.1. 搜索</h3><p>如今，搜索引擎使用机器学习和用户行为模型来获取网页相关性得分</p><p>谷歌搜索引擎依靠一个简单的相关性过滤来识别一组相关条目，然后根据PageRank对包含查询条件的结果进行排序</p><h3 id="_5-2-推荐" tabindex="-1"><a class="header-anchor" href="#_5-2-推荐" aria-hidden="true">#</a> 5.2. 推荐</h3><p>目标是向特定用户进行“个性化”推荐。</p>',48);function p(_,g){return e(),r("div",null,[o,n(" more "),c])}const m=i(h,[["render",p],["__file","01_ai_concept.html.vue"]]);export{m as default};