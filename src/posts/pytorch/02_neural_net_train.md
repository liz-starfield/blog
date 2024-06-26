---
icon: lightbulb
date: 2022-07-14
category:
  - Pytorch
tag:
  - Pytorch
---

# Neural Network Training Key Points Interpretation
  - 1. Overall Objective
  - 2. Loss Function(Objective Function): Quantifying Model Effectiveness
  - 3. Optimization Algorithms (Gradient Descent): Algorithms that Adjust Model Parameters to Optimize the Objective Function
  - 4. Hyperparameters
<!-- more -->

## 1. Overall Objective
用数据不断调整神经网络模型的参数，使得模型行为更符合预期。

## 2. Loss Function(Objective Function): Quantifying Model Effectiveness
|场景|	最常见损失函数|	特点|
|---|---|---|
|回归|	平方误差SE，squared error，即预测值与实际值之差的平方|	很容易被优化|
|分类|	交叉熵cross-entropy</br>最小化错误率，即预测与实际情况不符的样本比例|难以直接优化，通常会优化替代目标|

## 3. Optimization Algorithms (Gradient Descent): Algorithms that Adjust Model Parameters to Optimize the Objective Function
梯度下降（gradient descent）， 这种方法几乎可以优化所有深度学习模型。 它通过不断地在损失函数递减的方向上更新参数来降低误差。

梯度，是对每一个特征求偏导组成的向量

梯度下降最简单的用法是计算损失函数（数据集中所有样本的损失均值） 关于模型参数的导数（在这里也可以称为梯度）。 但实际中的执行可能会非常慢：因为在每一次更新参数之前，我们必须遍历整个数据集。 因此，我们通常会在每次需要计算更新的时候随机抽取一小批样本， 这种变体叫做**小批量随机梯度下降**（minibatch stochastic gradient descent）。

## 4. Hyperparameters
|B|表示每个小批量中的样本数，这也称为**批量大小**（batch size）。

η表示*学习率*（learning rate）。

批量大小和学习率的值通常是手动预先指定，而不是通过模型训练得到的。 这些可以调整但不在训练过程中更新的参数称为**超参数**（hyperparameter）。 

**调参**（hyperparameter tuning）是选择超参数的过程。 超参数通常是我们根据训练迭代结果来调整的， 而训练迭代结果是在独立的**验证数据集**（validation dataset）上评估得到的。

深度学习实践者很少会去花费大力气寻找这样一组参数，使得在**训练集**上的损失达到最小。 事实上，更难做到的是找到一组参数，这组参数能够在我们从未见过的数据上实现较低的损失， 这一挑战被称为**泛化**（generalization）。