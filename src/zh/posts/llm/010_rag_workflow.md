---
icon: lightbulb
sidebar: false
date: 2024-10-31
prev: ./011_vector_database
next: ./009_llm_challenge
category:
  - LLM
tag:
  - RAG
  - Workflow
---
# RAG工作流
  - 1. 原生数据处理流
  - 2. 问答场景中RAG的流程
  - 3. RAG优化点
  - 4. RAG场景中的Prompt
  - 5. 文本分割方式
<!-- more -->

## 1. 原生数据处理流
![原生数据处理流](../../../assets/010_rag_data_process.png)

- 原生数据 Raw Data
- 数据加载 Data Loader
- 数据转换（数据清洗）Data Transformer(Data Cleaning)
- 数据分割 Data Split
  - 分割为多个块 Chunk
  - 分割大小的权衡
- 数据向量化 
  - 将 Chunk 表示为 Vector
  - Text Embedding Model
- 数据存储 Vector Store
- 数据检索 Retriever

## 2. 问答场景中RAG的流程
![问答场景中RAG的流程](../../../assets/010_rag_qa_process.jpg)

- 1.用户发起问题 Query
- 2.将用户问题 Query 使用嵌入模型 Embedding Model 向量化
- 3.得到向量化过的用户问题 Query Vector
- 4.用向量化过的用户问题 Query Vector 检索向量数据库 Vector Database
  - 将向量数据库用作外部知识库
- 5.通过语义相似性检索出 Top k 的向量
- 6.将 Top K 的向量对应语义内容和用户问题 Query 作为 Prompt 调用 LLM
- 7.LLM 根据用户问题和检索到的数据信息给出问题的答案
- 8.用户得到答案

## 3. RAG优化点
- For step2
  - Query在向量化时，是否需要进行处理 -> Refined Query
- For step5
  - 将Recall和Ranking分开处理
  - Recall (召回，eg.从向量数据库召回50条相关数据) => Ranking (排序，eg.将召回的50条排序，取top3)

## 4. RAG场景中的Prompt
- Instruction
- Context => Retrieval
- Input => Query
- History

## 5. 文本分割方式
- 目的
  - 能够检索到和Query更相关的内容  
- 方式
  - 根据句子来切分（split by sentences)
  - 按照字符数，采用固定窗口来切分（fixed window character count）
  - 按照字符数，采用滑动窗口来切分（moving window character count）
  - 递归方法：RecursiveCharacterTextSplitter（固定窗口+语义分割；LangChain采用了此；通常采用此）
  - 根据语义来分割（操作难度比较大；可能有些Chunk太长，有些又太短）


