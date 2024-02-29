import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as r,f as a,e as t}from"./app-KJHtdF_7.js";const n={},o=t('<h1 id="neural-network-training-key-points-interpretation" tabindex="-1"><a class="header-anchor" href="#neural-network-training-key-points-interpretation" aria-hidden="true">#</a> Neural Network Training Key Points Interpretation</h1><ul><li><ol><li>Overall Objective</li></ol></li><li><ol start="2"><li>Loss Function(Objective Function): Quantifying Model Effectiveness</li></ol></li><li><ol start="3"><li>Optimization Algorithms (Gradient Descent): Algorithms that Adjust Model Parameters to Optimize the Objective Function</li></ol></li><li><ol start="4"><li>Hyperparameters</li></ol></li></ul>',2),s=t('<h2 id="_1-overall-objective" tabindex="-1"><a class="header-anchor" href="#_1-overall-objective" aria-hidden="true">#</a> 1. Overall Objective</h2><p>用数据不断调整神经网络模型的参数，使得模型行为更符合预期。</p><h2 id="_2-loss-function-objective-function-quantifying-model-effectiveness" tabindex="-1"><a class="header-anchor" href="#_2-loss-function-objective-function-quantifying-model-effectiveness" aria-hidden="true">#</a> 2. Loss Function(Objective Function): Quantifying Model Effectiveness</h2><table><thead><tr><th>场景</th><th>最常见损失函数</th><th>特点</th></tr></thead><tbody><tr><td>回归</td><td>平方误差SE，squared error，即预测值与实际值之差的平方</td><td>很容易被优化</td></tr><tr><td>分类</td><td>交叉熵cross-entropy最小化错误率，即预测与实际情况不符的样本比例</td><td>难以直接优化，通常会优化替代目标</td></tr></tbody></table><h2 id="_3-optimization-algorithms-gradient-descent-algorithms-that-adjust-model-parameters-to-optimize-the-objective-function" tabindex="-1"><a class="header-anchor" href="#_3-optimization-algorithms-gradient-descent-algorithms-that-adjust-model-parameters-to-optimize-the-objective-function" aria-hidden="true">#</a> 3. Optimization Algorithms (Gradient Descent): Algorithms that Adjust Model Parameters to Optimize the Objective Function</h2><p>梯度下降（gradient descent）， 这种方法几乎可以优化所有深度学习模型。 它通过不断地在损失函数递减的方向上更新参数来降低误差。</p><p>梯度，是对每一个特征求偏导组成的向量</p><p>梯度下降最简单的用法是计算损失函数（数据集中所有样本的损失均值） 关于模型参数的导数（在这里也可以称为梯度）。 但实际中的执行可能会非常慢：因为在每一次更新参数之前，我们必须遍历整个数据集。 因此，我们通常会在每次需要计算更新的时候随机抽取一小批样本， 这种变体叫做<strong>小批量随机梯度下降</strong>（minibatch stochastic gradient descent）。</p><h2 id="_4-hyperparameters" tabindex="-1"><a class="header-anchor" href="#_4-hyperparameters" aria-hidden="true">#</a> 4. Hyperparameters</h2><p>|B|表示每个小批量中的样本数，这也称为<strong>批量大小</strong>（batch size）。</p><p>η表示<em>学习率</em>（learning rate）。</p><p>批量大小和学习率的值通常是手动预先指定，而不是通过模型训练得到的。 这些可以调整但不在训练过程中更新的参数称为<strong>超参数</strong>（hyperparameter）。</p><p><strong>调参</strong>（hyperparameter tuning）是选择超参数的过程。 超参数通常是我们根据训练迭代结果来调整的， 而训练迭代结果是在独立的<strong>验证数据集</strong>（validation dataset）上评估得到的。</p><p>深度学习实践者很少会去花费大力气寻找这样一组参数，使得在<strong>训练集</strong>上的损失达到最小。 事实上，更难做到的是找到一组参数，这组参数能够在我们从未见过的数据上实现较低的损失， 这一挑战被称为<strong>泛化</strong>（generalization）。</p>',14);function l(d,c){return i(),r("div",null,[o,a(" more "),s])}const m=e(n,[["render",l],["__file","02_neural_net_train.html.vue"]]);export{m as default};
