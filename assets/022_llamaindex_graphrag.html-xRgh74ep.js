import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as l,c as r,f as d,a as e,b as i,d as s,e as o}from"./app-74fYY7Rf.js";const u={},v=e("h1",{id:"llamaindex-graphrag-ollama-neo4j",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#llamaindex-graphrag-ollama-neo4j","aria-hidden":"true"},"#"),i(" LlamaIndex + GraphRAG + Ollama + Neo4j")],-1),m=o(`<h2 id="_1-官方实现改进点" tabindex="-1"><a class="header-anchor" href="#_1-官方实现改进点" aria-hidden="true">#</a> 1. 官方实现改进点</h2><ul><li>将openai模型替换为ollama本地模型 <ul><li>llm: llama3</li><li>embedding model: nomic-embed-text</li></ul></li><li>使用本地neo4j图数据库</li><li>优化抽取图的实体和关系的prompt以及相应的解析函数</li></ul><h2 id="_2-整体流程" tabindex="-1"><a class="header-anchor" href="#_2-整体流程" aria-hidden="true">#</a> 2. 整体流程</h2><ul><li>1.加载数据，并将数据分割为文本块</li><li>2.从每一个文本块中抽取出实体和关系</li><li>3.汇总所有文本块的实体和关系，得到完整的图信息</li><li>4.存储图信息到Neo4j图数据库并创建索引</li><li>5.将图中相关的节点分组为一个个社区，并为每个社区生成摘要</li><li>6.检索社区摘要，从每个摘要生成答案，然后将这些答案聚合成最终响应</li></ul><h2 id="_3-实现" tabindex="-1"><a class="header-anchor" href="#_3-实现" aria-hidden="true">#</a> 3. 实现</h2><h3 id="_3-1-安装需要的库" tabindex="-1"><a class="header-anchor" href="#_3-1-安装需要的库" aria-hidden="true">#</a> 3.1. 安装需要的库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!pip install -i https://pypi.tuna.tsinghua.edu.cn/simple llama-index-graph-stores-neo4j graspologic numpy scipy==1.12.0 future 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-加载数据" tabindex="-1"><a class="header-anchor" href="#_3-2-加载数据" aria-hidden="true">#</a> 3.2. 加载数据</h3><h4 id="_3-2-1-加载csv文件-该文件有3列-分别是标题、日期和文本" tabindex="-1"><a class="header-anchor" href="#_3-2-1-加载csv文件-该文件有3列-分别是标题、日期和文本" aria-hidden="true">#</a> 3.2.1. 加载csv文件，该文件有3列，分别是标题、日期和文本</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import pandas as pd
from llama_index.core import Document

news = pd.read_csv(
    &quot;https://raw.githubusercontent.com/tomasonjo/blog-datasets/main/news_articles.csv&quot;
)[:10]

news.head()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>title</th><th>date</th><th>text</th></tr></thead><tbody><tr><td>0 Chevron: Best Of Breed</td><td>2031-04-06T01:36:32.000000000+00:00</td><td>JHVEPhoto Like many companies in the O&amp;G secto...</td></tr><tr><td>1 FirstEnergy (NYSE:FE) Posts Earnings Results</td><td>2030-04-29T06:55:28.000000000+00:00</td><td>FirstEnergy (NYSE:FE – Get Rating) posted its ...</td></tr><tr><td>2 Dáil almost suspended after Sinn Féin TD put p...</td><td>2023-06-15T14:32:11.000000000+00:00</td><td>The Dáil was almost suspended on Thursday afte...</td></tr><tr><td>3 Epic’s latest tool can animate hyperrealistic ...</td><td>2023-06-15T14:00:00.000000000+00:00</td><td>Today, Epic is releasing a new tool designed t...</td></tr><tr><td>4 EU to Ban Huawei, ZTE from Internal Commission...</td><td>2023-06-15T13:50:00.000000000+00:00</td><td>The European Commission is planning to ban equ...</td></tr></tbody></table><h4 id="_3-2-2-拼接title和text-得到documents" tabindex="-1"><a class="header-anchor" href="#_3-2-2-拼接title和text-得到documents" aria-hidden="true">#</a> 3.2.2. 拼接title和text，得到documents</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>documents = [Document(text=f&#39;{row[&#39;title&#39;]}:{row[&#39;text&#39;]}&#39;) for i,row in news.iterrows()]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-3-分割文本块" tabindex="-1"><a class="header-anchor" href="#_3-2-3-分割文本块" aria-hidden="true">#</a> 3.2.3. 分割文本块</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.core.node_parser import SentenceSplitter

splitter = SentenceSplitter(
    chunk_size=1024,
    chunk_overlap=20,
)
nodes = splitter.get_nodes_from_documents(documents)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-4-验证" tabindex="-1"><a class="header-anchor" href="#_3-2-4-验证" aria-hidden="true">#</a> 3.2.4. 验证</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>len(nodes)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>10</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print(nodes[0].text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Chevron: Best Of Breed:JHVEPhoto Like many companies in the O&amp;G sector, the stock of Chevron (NYSE:CVX) has declined about 10% over the past 90-days despite the fact that Q2 consensus earnings estimates have risen sharply (~25%) during that same time frame. Over the years, Chevron has kept a very strong balance sheet. That allowed the...</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print(nodes[1].text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>FirstEnergy (NYSE:FE) Posts Earnings Results:FirstEnergy (NYSE:FE – Get Rating) posted its earnings results on Tuesday. The utilities provider reported $0.53 earnings per share for the quarter, topping the consensus estimate of $0.52 by $0.01, RTT News reports. FirstEnergy had a net margin of 10.85% and a return on equity of 17.17%. During the same period... If the content contained herein violates any of your rights, including those of copyright, you are requested to immediately notify us using via the following email address operanews-external(at)opera.com Top News</p></blockquote><h3 id="_3-3-抽取实体和关系" tabindex="-1"><a class="header-anchor" href="#_3-3-抽取实体和关系" aria-hidden="true">#</a> 3.3. 抽取实体和关系</h3><h4 id="_3-3-1-定义graphragextractor类" tabindex="-1"><a class="header-anchor" href="#_3-3-1-定义graphragextractor类" aria-hidden="true">#</a> 3.3.1. 定义GraphRAGExtractor类</h4><ul><li>GraphRAGExtractor类用于从文本中抽取实体 entities 和关系 relationships 的三元组subject-relation-object</li><li>关键组件 <ul><li>llm：抽取实体和关系采用的llm</li><li>extract_prompt：抽取实体和关系的prompt</li><li>parse_fn：将llm输出解析为结构化数据的解析函数</li><li>num_workers: 线程数，同时处理多个文本的数量</li></ul></li><li>主要方法 <ul><li><strong>call</strong>：处理入口</li><li>acall：call的异步版本</li><li>_aextract：核心方法</li></ul></li><li>每个文本块的抽取过程 <ul><li>1.将文本块和extract_prompt传给llm</li><li>2.得到llm的响应结果：抽取出的实体和关系以及对它们的描述</li><li>3.通过parse_fn解析llm的响应结果，得到EntityNode和Relation对象</li><li>4.将所有文本块解析出的实体和关系的信息添加到KG_NODES_KEY和KG_RELATIONS_KEY的节点元数据下</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import asyncio
import nest_asyncio

nest_asyncio.apply()

from typing import Any, List, Callable, Optional, Union, Dict
from IPython.display import Markdown, display

from llama_index.core.async_utils import run_jobs
from llama_index.core.indices.property_graph.utils import (
    default_parse_triplets_fn,
)
from llama_index.core.graph_stores.types import (
    EntityNode,
    KG_NODES_KEY,
    KG_RELATIONS_KEY,
    Relation,
)
from llama_index.core.llms.llm import LLM
from llama_index.core.prompts import PromptTemplate
from llama_index.core.prompts.default_prompts import (
    DEFAULT_KG_TRIPLET_EXTRACT_PROMPT,
)
from llama_index.core.schema import TransformComponent, BaseNode
from llama_index.core.bridge.pydantic import BaseModel, Field


class GraphRAGExtractor(TransformComponent):
    &quot;&quot;&quot;Extract triples from a graph.

    Uses an LLM and a simple prompt + output parsing to extract paths (i.e. triples) and entity, relation descriptions from text.

    Args:
        llm (LLM):
            The language model to use.
        extract_prompt (Union[str, PromptTemplate]):
            The prompt to use for extracting triples.
        parse_fn (callable):
            A function to parse the output of the language model.
        num_workers (int):
            The number of workers to use for parallel processing.
        max_paths_per_chunk (int):
            The maximum number of paths to extract per chunk.
    &quot;&quot;&quot;

    llm: LLM
    extract_prompt: PromptTemplate
    parse_fn: Callable
    num_workers: int
    max_paths_per_chunk: int

    def __init__(
        self,
        llm: Optional[LLM] = None,
        extract_prompt: Optional[Union[str, PromptTemplate]] = None,
        parse_fn: Callable = default_parse_triplets_fn,
        max_paths_per_chunk: int = 10,
        num_workers: int = 4,
    ) -&gt; None:
        &quot;&quot;&quot;Init params.&quot;&quot;&quot;
        from llama_index.core import Settings

        if isinstance(extract_prompt, str):
            extract_prompt = PromptTemplate(extract_prompt)

        super().__init__(
            llm=llm or Settings.llm,
            extract_prompt=extract_prompt or DEFAULT_KG_TRIPLET_EXTRACT_PROMPT,
            parse_fn=parse_fn,
            num_workers=num_workers,
            max_paths_per_chunk=max_paths_per_chunk,
        )

    @classmethod
    def class_name(cls) -&gt; str:
        return &quot;GraphExtractor&quot;

    def __call__(
        self, nodes: List[BaseNode], show_progress: bool = False, **kwargs: Any
    ) -&gt; List[BaseNode]:
        &quot;&quot;&quot;Extract triples from nodes.&quot;&quot;&quot;
        return asyncio.run(
            self.acall(nodes, show_progress=show_progress, **kwargs)
        )

    async def _aextract(self, node: BaseNode) -&gt; BaseNode:
        &quot;&quot;&quot;Extract triples from a node.&quot;&quot;&quot;
        assert hasattr(node, &quot;text&quot;)

        text = node.get_content(metadata_mode=&quot;llm&quot;)
        try:
            llm_response = await self.llm.apredict(
                self.extract_prompt,
                text=text,
                max_knowledge_triplets=self.max_paths_per_chunk,
            )
            print(f&#39;extract text ---&gt;:\\n{text}&#39;)
            entities, entities_relationship = self.parse_fn(llm_response)
        except ValueError:
            entities = []
            entities_relationship = []

        existing_nodes = node.metadata.pop(KG_NODES_KEY, [])
        existing_relations = node.metadata.pop(KG_RELATIONS_KEY, [])
        entity_metadata = node.metadata.copy()
        for entity, entity_type, description in entities:
            entity_metadata[&quot;entity_description&quot;] = description  
            entity_node = EntityNode(
                name=entity, label=entity_type, properties=entity_metadata
            )
            existing_nodes.append(entity_node)

        relation_metadata = node.metadata.copy()
        for triple in entities_relationship:
            subj, obj, rel, description = triple
            relation_metadata[&quot;relationship_description&quot;] = description
            rel_node = Relation(
                label=rel,
                source_id=subj,
                target_id=obj,
                properties=relation_metadata,
            )
            existing_relations.append(rel_node)

        node.metadata[KG_NODES_KEY] = existing_nodes
        node.metadata[KG_RELATIONS_KEY] = existing_relations
        return node

    async def acall(
        self, nodes: List[BaseNode], show_progress: bool = False, **kwargs: Any
    ) -&gt; List[BaseNode]:
        &quot;&quot;&quot;Extract triples from nodes async.&quot;&quot;&quot;
        jobs = []
        for node in nodes:
            jobs.append(self._aextract(node))

        return await run_jobs(
            jobs,
            workers=self.num_workers,
            show_progress=show_progress,
            desc=&quot;Extracting paths from text&quot;,
        )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-采用ollama本地模型-并设为全局llm" tabindex="-1"><a class="header-anchor" href="#_3-3-2-采用ollama本地模型-并设为全局llm" aria-hidden="true">#</a> 3.3.2. 采用ollama本地模型，并设为全局llm</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import os
from llama_index.llms.ollama import Ollama

os.environ[&quot;no_proxy&quot;] = &quot;127.0.0.1,localhost&quot;

llm = Ollama(model=&quot;llama3&quot;, request_timeout=660.0)

Settings.llm = llm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试是否能调通</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>response = llm.complete(&quot;What is the capital of France?&quot;)
print(response)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>输出：</p><p>The capital of France is Paris.</p></blockquote><h4 id="_3-3-3-采用ollama本地embedding模型-并设为全局embed-model" tabindex="-1"><a class="header-anchor" href="#_3-3-3-采用ollama本地embedding模型-并设为全局embed-model" aria-hidden="true">#</a> 3.3.3. 采用ollama本地embedding模型，并设为全局embed_model</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!pip install llama-index-embeddings-ollama
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.embeddings.ollama import OllamaEmbedding
from llama_index.core import Settings

ollama_embedding = OllamaEmbedding(
    model_name=&quot;nomic-embed-text&quot;,
    base_url=&quot;http://localhost:11434&quot;,
    ollama_additional_kwargs={&quot;mirostat&quot;: 0},
    request_timeout=660.0
)

# changing the global default
Settings.embed_model = ollama_embedding
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-4-定义extract-prompt" tabindex="-1"><a class="header-anchor" href="#_3-3-4-定义extract-prompt" aria-hidden="true">#</a> 3.3.4. 定义extract_prompt</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KG_TRIPLET_EXTRACT_TMPL = &quot;&quot;&quot;
-Goal-
Given a text document, identify all entities and their entity types from the text and all relationships among the identified entities.
Given the text.

-Steps-
1. Identify all entities. For each identified entity, extract the following information:
- entity_name: Name of the entity, capitalized
- entity_type: Type of the entity
- entity_description: Comprehensive description of the entity&#39;s attributes and activities

2. From the entities identified in step 1, identify all pairs of (source_entity, target_entity) that are *clearly related* to each other.
For each pair of related entities, extract the following information:
- source_entity: name of the source entity, as identified in step 1
- target_entity: name of the target entity, as identified in step 1
- relation: relationship between source_entity and target_entity
- relationship_description: explanation as to why you think the source entity and the target entity are related to each other

3. Output Formatting:
- Return the result in valid JSON format with two keys: &#39;entities&#39; (list of entity objects) and &#39;relationships&#39; (list of relationship objects).
- Exclude any text outside the JSON structure (e.g., no explanations or comments).
- If no entities or relationships are identified, return empty lists: { &quot;entities&quot;: [], &quot;relationships&quot;: [] }.

-An Output Example-
{
  &quot;entities&quot;: [
    {
      &quot;entity_name&quot;: &quot;Albert Einstein&quot;,
      &quot;entity_type&quot;: &quot;Person&quot;,
      &quot;entity_description&quot;: &quot;Albert Einstein was a theoretical physicist who developed the theory of relativity and made significant contributions to physics.&quot;
    },
    {
      &quot;entity_name&quot;: &quot;Theory of Relativity&quot;,
      &quot;entity_type&quot;: &quot;Scientific Theory&quot;,
      &quot;entity_description&quot;: &quot;A scientific theory developed by Albert Einstein, describing the laws of physics in relation to observers in different frames of reference.&quot;
    },
    {
      &quot;entity_name&quot;: &quot;Nobel Prize in Physics&quot;,
      &quot;entity_type&quot;: &quot;Award&quot;,
      &quot;entity_description&quot;: &quot;A prestigious international award in the field of physics, awarded annually by the Royal Swedish Academy of Sciences.&quot;
    }
  ],
  &quot;relationships&quot;: [
    {
      &quot;source_entity&quot;: &quot;Albert Einstein&quot;,
      &quot;target_entity&quot;: &quot;Theory of Relativity&quot;,
      &quot;relation&quot;: &quot;developed&quot;,
      &quot;relationship_description&quot;: &quot;Albert Einstein is the developer of the theory of relativity.&quot;
    },
    {
      &quot;source_entity&quot;: &quot;Albert Einstein&quot;,
      &quot;target_entity&quot;: &quot;Nobel Prize in Physics&quot;,
      &quot;relation&quot;: &quot;won&quot;,
      &quot;relationship_description&quot;: &quot;Albert Einstein won the Nobel Prize in Physics in 1921.&quot;
    }
  ]
}

-Real Data-
######################
text: {text}
######################
output:&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-5-定义parse-fn" tabindex="-1"><a class="header-anchor" href="#_3-3-5-定义parse-fn" aria-hidden="true">#</a> 3.3.5. 定义parse_fn</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import json
import re

def parse_fn(response_str: str) -&gt; Any:
    print(f&#39;parse_fn ---&gt; response_str:\\n{response_str}&#39;)
    json_pattern = r&#39;\\{.*\\}&#39;
    match = re.search(json_pattern, response_str, re.DOTALL) 
    entities = []
    relationships = []
    if not match: return entities, relationships      
    json_str = match.group(0)
    try:
        data = json.loads(json_str)
        entities = [(entity[&#39;entity_name&#39;], entity[&#39;entity_type&#39;], entity[&#39;entity_description&#39;]) for entity in data.get(&#39;entities&#39;, [])]
        relationships = [(relation[&#39;source_entity&#39;], relation[&#39;target_entity&#39;], relation[&#39;relation&#39;], relation[&#39;relationship_description&#39;]) for relation in data.get(&#39;relationships&#39;, [])]
        print(f&#39;parse_fn ---&gt; entities:\\n{entities}&#39;)
        print(f&#39;parse_fn ---&gt; relationships:\\n{relationships}&#39;)
        return entities, relationships
    except json.JSONDecodeError as e:
        print(&quot;Error parsing JSON:&quot;, e)
        return entities, relationships
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-6-实例化graphragextractor为kg-extractor对象" tabindex="-1"><a class="header-anchor" href="#_3-3-6-实例化graphragextractor为kg-extractor对象" aria-hidden="true">#</a> 3.3.6. 实例化GraphRAGExtractor为kg_extractor对象</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kg_extractor = GraphRAGExtractor(
    llm=llm,
    extract_prompt=KG_TRIPLET_EXTRACT_TMPL,
    max_paths_per_chunk=2,
    parse_fn=parse_fn,
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-存储图信息到neo4j" tabindex="-1"><a class="header-anchor" href="#_3-4-存储图信息到neo4j" aria-hidden="true">#</a> 3.4. 存储图信息到Neo4j</h3><h4 id="_3-4-1-定义graphragstore类" tabindex="-1"><a class="header-anchor" href="#_3-4-1-定义graphragstore类" aria-hidden="true">#</a> 3.4.1. 定义GraphRAGStore类</h4><p>关键方法</p><ul><li>build_communities() <ul><li>将内部图表示转换为 NetworkX 图</li><li>应用层次 Leiden 算法进行社区检测</li><li>收集每个社区的详细信息</li><li>为每个社区生成摘要</li></ul></li><li>generate_community_summary(text) <ul><li>使用 LLM 生成社区中关系的摘要</li><li>摘要包括实体名称和关系描述的综合</li></ul></li><li>_create_nx_graph() <ul><li>将内部图表示转换为 NetworkX 图，以便进行社区检测</li></ul></li><li>_collect_community_info(nx_graph, clusters) <ul><li>根据社区收集每个节点的详细信息</li><li>创建社区内每个关系的字符串表示</li></ul></li><li>_summarize_communities(community_info) <ul><li>使用 LLM 为每个社区生成并存储摘要</li></ul></li><li>get_community_summaries() <ul><li>返回社区摘要，如果尚未生成，则先构建它们</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import re
import networkx as nx
from graspologic.partition import hierarchical_leiden
from llama_index.core.llms import ChatMessage
from collections import defaultdict
from llama_index.graph_stores.neo4j import Neo4jPropertyGraphStore


class GraphRAGStore(Neo4jPropertyGraphStore):
    community_summary = {}
    max_cluster_size = 5
    entity_info = None

    def generate_community_summary(self, text):
        &quot;&quot;&quot;Generate summary for a given text using an LLM.&quot;&quot;&quot;
        messages = [
            ChatMessage(
                role=&quot;system&quot;,
                content=(
                    &quot;You are provided with a set of relationships from a knowledge graph, each represented as &quot;
                    &quot;entity1-&gt;entity2-&gt;relation-&gt;relationship_description. Your task is to create a summary of these &quot;
                    &quot;relationships. The summary should include the names of the entities involved and a concise synthesis &quot;
                    &quot;of the relationship descriptions. The goal is to capture the most critical and relevant details that &quot;
                    &quot;highlight the nature and significance of each relationship. Ensure that the summary is coherent and &quot;
                    &quot;integrates the information in a way that emphasizes the key aspects of the relationships.&quot;
                ),
            ),
            ChatMessage(role=&quot;user&quot;, content=text),
        ]
        response = llm.chat(messages)
        clean_response = re.sub(r&quot;^assistant:\\s*&quot;, &quot;&quot;, str(response)).strip()
        return clean_response

    def build_communities(self):
        &quot;&quot;&quot;Builds communities from the graph and summarizes them.&quot;&quot;&quot;
        nx_graph = self._create_nx_graph()
        community_hierarchical_clusters = hierarchical_leiden(
            nx_graph, max_cluster_size=self.max_cluster_size
        )
        self.entity_info, community_info = self._collect_community_info(
            nx_graph, community_hierarchical_clusters
        )
        self._summarize_communities(community_info)

    def _create_nx_graph(self):
        &quot;&quot;&quot;Converts internal graph representation to NetworkX graph.&quot;&quot;&quot;
        nx_graph = nx.Graph()
        triplets = self.get_triplets()
        for entity1, relation, entity2 in triplets:
            nx_graph.add_node(entity1.name)
            nx_graph.add_node(entity2.name)
            nx_graph.add_edge(
                relation.source_id,
                relation.target_id,
                relationship=relation.label,
                description=relation.properties[&quot;relationship_description&quot;],
            )
        return nx_graph

    def _collect_community_info(self, nx_graph, clusters):
        &quot;&quot;&quot;
        Collect information for each node based on their community,
        allowing entities to belong to multiple clusters.
        &quot;&quot;&quot;
        entity_info = defaultdict(set)
        community_info = defaultdict(list)
        
        for item in clusters:
            node = item.node
            cluster_id = item.cluster

            # Update entity_info
            entity_info[node].add(cluster_id)

            for neighbor in nx_graph.neighbors(node):
                edge_data = nx_graph.get_edge_data(node, neighbor)
                if edge_data:
                    detail = f&quot;{node} -&gt; {neighbor} -&gt; {edge_data[&#39;relationship&#39;]} -&gt; {edge_data[&#39;description&#39;]}&quot;
                    community_info[cluster_id].append(detail)
        
        # Convert sets to lists for easier serialization if needed
        entity_info = {k: list(v) for k, v in entity_info.items()}

        return dict(entity_info), dict(community_info)

    def _summarize_communities(self, community_info):
        &quot;&quot;&quot;Generate and store summaries for each community.&quot;&quot;&quot;
        for community_id, details in community_info.items():
            details_text = (
                &quot;\\n&quot;.join(details) + &quot;.&quot;
            )  # Ensure it ends with a period
            self.community_summary[
                community_id
            ] = self.generate_community_summary(details_text)

    def get_community_summaries(self):
        &quot;&quot;&quot;Returns the community summaries, building them if not already done.&quot;&quot;&quot;
        if not self.community_summary:
            self.build_communities()
        return self.community_summary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-2-实例化graphragstore为graph-store对象-采用本地neo4j图数据库" tabindex="-1"><a class="header-anchor" href="#_3-4-2-实例化graphragstore为graph-store对象-采用本地neo4j图数据库" aria-hidden="true">#</a> 3.4.2. 实例化GraphRAGStore为graph_store对象，采用本地neo4j图数据库</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.graph_stores.neo4j import Neo4jPropertyGraphStore

# Note: used to be \`Neo4jPGStore\`
graph_store = GraphRAGStore(
    username=&quot;neo4j&quot;, password=&quot;neo4j&quot;, url=&quot;bolt://localhost:7687&quot;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-graphrag-索引" tabindex="-1"><a class="header-anchor" href="#_3-5-graphrag-索引" aria-hidden="true">#</a> 3.5. GraphRAG 索引</h3><h4 id="_3-5-1-创建索引" tabindex="-1"><a class="header-anchor" href="#_3-5-1-创建索引" aria-hidden="true">#</a> 3.5.1. 创建索引</h4><ul><li>nodes来自3.2.3</li><li>kg_extractor来自3.3.6</li><li>graph_store来自3.4.2</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.core import PropertyGraphIndex

index = PropertyGraphIndex(
    nodes=nodes,
    property_graph_store=graph_store,
    kg_extractors=[kg_extractor],
    show_progress=True,
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个文本块输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extract text ---&gt;:
Chevron: Best Of Breed:JHVEPhoto Like many companies in the O&amp;G sector, the stock of Chevron (NYSE:CVX) has declined about 10% over the past 90-days despite the fact that Q2 consensus earnings estimates have risen sharply (~25%) during that same time frame. Over the years, Chevron has kept a very strong balance sheet. That allowed the...
parse_fn ---&gt; response_str:
Here is the output for the given text:

{
  &quot;entities&quot;: [
    {
      &quot;entity_name&quot;: &quot;Chevron&quot;,
      &quot;entity_type&quot;: &quot;Company&quot;,
      &quot;entity_description&quot;: &quot;A multinational energy corporation that engages in the development of crude oil and natural gas resources.&quot;
    },
    {
      &quot;entity_name&quot;: &quot;NYSE:CVX&quot;,
      &quot;entity_type&quot;: &quot;Stock Ticker Symbol&quot;,
      &quot;entity_description&quot;: &quot;The stock ticker symbol for Chevron Corporation&#39;s shares listed on the New York Stock Exchange.&quot;
    }
  ],
  &quot;relationships&quot;: [
    {
      &quot;source_entity&quot;: &quot;Chevron&quot;,
      &quot;target_entity&quot;: &quot;Chevron&quot;,
      &quot;relation&quot;: &quot;has&quot;,
      &quot;relationship_description&quot;: &quot;Chevron has a strong balance sheet.&quot;
    }
  ]
}

Note that I did not identify any other entities or relationships beyond the company and its stock ticker symbol. If you would like me to look for more entities and relationships, please let me know!
parse_fn ---&gt; entities: 
[(&#39;Chevron&#39;, &#39;Company&#39;, &#39;A multinational energy corporation that engages in the development of crude oil and natural gas resources.&#39;), (&#39;NYSE:CVX&#39;, &#39;Stock Ticker Symbol&#39;, &quot;The stock ticker symbol for Chevron Corporation&#39;s shares listed on the New York Stock Exchange.&quot;)]
parse_fn ---&gt; relationships: 
[(&#39;Chevron&#39;, &#39;Chevron&#39;, &#39;has&#39;, &#39;Chevron has a strong balance sheet.&#39;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-2-验证" tabindex="-1"><a class="header-anchor" href="#_3-5-2-验证" aria-hidden="true">#</a> 3.5.2. 验证</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>len(index.property_graph_store.get_triplets())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>148</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>index.property_graph_store.get_triplets()[10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>[EntityNode(label=&#39;Company&#39;, embedding=None, properties={&#39;id&#39;: &#39;FirstEnergy&#39;, &#39;entity_description&#39;: &#39;FirstEnergy (NYSE:FE) is a utilities provider&#39;, &#39;triplet_source_id&#39;: &#39;144af8a1-4078-4991-a234-4fc930bcd029&#39;}, name=&#39;FirstEnergy&#39;), Relation(label=&#39;reported_by&#39;, source_id=&#39;FirstEnergy&#39;, target_id=&#39;RTT News&#39;, properties={&#39;relationship_description&#39;: &quot;FirstEnergy&#39;s earnings results were reported by RTT News&quot;, &#39;triplet_source_id&#39;: &#39;144af8a1-4078-4991-a234-4fc930bcd029&#39;}), EntityNode(label=&#39;News Source&#39;, embedding=None, properties={&#39;id&#39;: &#39;RTT News&#39;, &#39;entity_description&#39;: &#39;A news source reporting on earnings results and other financial information&#39;, &#39;triplet_source_id&#39;: &#39;144af8a1-4078-4991-a234-4fc930bcd029&#39;}, name=&#39;RTT News&#39;)]</p></blockquote><h3 id="_3-6-构建社区并生成社区摘要" tabindex="-1"><a class="header-anchor" href="#_3-6-构建社区并生成社区摘要" aria-hidden="true">#</a> 3.6. 构建社区并生成社区摘要</h3><p>使用社区检测算法将图中相关的节点分组，然后使用大语言模型 (LLM) 为每个社区生成摘要。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>index.property_graph_store.build_communities()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-7-graphrag-查询" tabindex="-1"><a class="header-anchor" href="#_3-7-graphrag-查询" aria-hidden="true">#</a> 3.7. GraphRAG 查询</h3><h4 id="_3-7-1-定义graphragqueryengine类" tabindex="-1"><a class="header-anchor" href="#_3-7-1-定义graphragqueryengine类" aria-hidden="true">#</a> 3.7.1. 定义GraphRAGQueryEngine类</h4><ul><li>GraphRAGQueryEngine 类是一个定制的查询引擎，旨在使用 GraphRAG 方法处理查询。它利用 GraphRAGStore 生成的社区摘要来回答用户查询。</li><li>主要组件 <ul><li>graph_store：GraphRAGStore 的实例，包含社区摘要</li><li>llm：用于生成和聚合答案的语言模型</li></ul></li><li>关键方法 <ul><li>custom_query(query_str: str) <ul><li>查询的主入口</li><li>用于检索社区摘要，从每个摘要生成答案，然后将这些答案聚合成最终响应</li></ul></li><li>generate_answer_from_summary(community_summary, query) <ul><li>根据单个社区摘要为查询生成答案</li><li>使用 LLM 在查询的上下文中解释社区摘要</li></ul></li><li>aggregate_answers(community_answers) <ul><li>将来自不同社区的单个答案组合成一个连贯的最终响应</li><li>使用 LLM 将多个视角合成为一个简洁的答案</li></ul></li></ul></li><li>查询处理流程 <ul><li>1.从图存储中检索社区摘要</li><li>2.针对每个社区摘要，为查询生成特定的答案</li><li>3.将所有社区特定的答案聚合成一个最终的、连贯的响应</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.core.query_engine import CustomQueryEngine
from llama_index.core.llms import LLM
from llama_index.core import PropertyGraphIndex
import re

class GraphRAGQueryEngine(CustomQueryEngine):
    graph_store: GraphRAGStore
    llm: LLM
    index: PropertyGraphIndex
    similarity_top_k: int = 20

    def custom_query(self, query_str: str) -&gt; str:
        &quot;&quot;&quot;Process all community summaries to generate answers to a specific query.&quot;&quot;&quot;
        
        entities = self.get_entities(query_str, self.similarity_top_k)

        community_ids = self.retrieve_entity_communities(
            self.graph_store.entity_info, entities
        )
        
        community_summaries = self.graph_store.get_community_summaries()
        community_answers = [
            self.generate_answer_from_summary(community_summary, query_str)
            for id, community_summary in community_summaries.items()
            if id in community_ids # 用聚类IDs进行过滤
        ]

        final_answer = self.aggregate_answers(community_answers)
        return final_answer

    def get_entities(self, query_str, similarity_top_k):
        nodes_retrieved = self.index.as_retriever(
            similarity_top_k=similarity_top_k
        ).retrieve(query_str)

        enitites = set()
        pattern = (
            r&quot;^(\\w+(?:\\s+\\w+)*)\\s*-&gt;\\s*([a-zA-Z\\s]+?)\\s*-&gt;\\s*(\\w+(?:\\s+\\w+)*)$&quot;
        )

        for node in nodes_retrieved:
            matches = re.findall(
                pattern, node.text, re.MULTILINE | re.IGNORECASE
            )

            for match in matches:
                subject = match[0]
                obj = match[2]
                enitites.add(subject)
                enitites.add(obj)

        return list(enitites)

    def retrieve_entity_communities(self, entity_info, entities):
        &quot;&quot;&quot;
        Retrieve cluster information for given entities, allowing for multiple clusters per entity.

        Args:
        entity_info (dict): Dictionary mapping entities to their cluster IDs (list).
        entities (list): List of entity names to retrieve information for.

        Returns:
        List of community or cluster IDs to which an entity belongs.
        &quot;&quot;&quot;
        community_ids = []

        for entity in entities:
            if entity in entity_info:
                community_ids.extend(entity_info[entity])

        return list(set(community_ids))
    
    def generate_answer_from_summary(self, community_summary, query):
        &quot;&quot;&quot;Generate an answer from a community summary based on a given query using LLM.&quot;&quot;&quot;
        prompt = (
            f&quot;Given the community summary: {community_summary}, &quot;
            f&quot;how would you answer the following query? Query: {query}&quot;
        )
        messages = [
            ChatMessage(role=&quot;system&quot;, content=prompt),
            ChatMessage(
                role=&quot;user&quot;,
                content=&quot;I need an answer based on the above information.&quot;,
            ),
        ]
        response = self.llm.chat(messages)
        cleaned_response = re.sub(r&quot;^assistant:\\s*&quot;, &quot;&quot;, str(response)).strip()
        return cleaned_response

    def aggregate_answers(self, community_answers):
        &quot;&quot;&quot;Aggregate individual community answers into a final, coherent response.&quot;&quot;&quot;
        # intermediate_text = &quot; &quot;.join(community_answers)
        prompt = &quot;Combine the following intermediate answers into a final, concise response.&quot;
        messages = [
            ChatMessage(role=&quot;system&quot;, content=prompt),
            ChatMessage(
                role=&quot;user&quot;,
                content=f&quot;Intermediate answers: {community_answers}&quot;,
            ),
        ]
        final_response = self.llm.chat(messages)
        cleaned_final_response = re.sub(
            r&quot;^assistant:\\s*&quot;, &quot;&quot;, str(final_response)
        ).strip()
        return cleaned_final_response
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-7-2-实例化graphragqueryengine为query-engine对象" tabindex="-1"><a class="header-anchor" href="#_3-7-2-实例化graphragqueryengine为query-engine对象" aria-hidden="true">#</a> 3.7.2. 实例化GraphRAGQueryEngine为query_engine对象</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query_engine = GraphRAGQueryEngine(
    graph_store=index.property_graph_store, 
    llm=llm,
    index=index,
    similarity_top_k=10
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-7-3-检索信息" tabindex="-1"><a class="header-anchor" href="#_3-7-3-检索信息" aria-hidden="true">#</a> 3.7.3. 检索信息</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>response = query_engine.query(
    &quot;What are the main news discussed in the document?&quot;
)
display(Markdown(f&quot;{response.response}&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Here is the combined response: The main news discussed in the document is a debate on retained firefighters&#39; pay, with Sinn Féin TDs John Brady and Pearse Doherty advocating for their rights. Specifically, John Brady interrupted Minister for Housing Darragh O&#39;Brien&#39;s speech to emphasize the importance of retaining firefighters&#39; pay, while Pearse Doherty called on the minister to make an improved offer in relation to pay and meet with them outside of the House.</p></blockquote><h2 id="_4-参考链接" tabindex="-1"><a class="header-anchor" href="#_4-参考链接" aria-hidden="true">#</a> 4. 参考链接</h2>`,71),c={href:"https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v1/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v2/",target:"_blank",rel:"noopener noreferrer"};function p(h,_){const n=a("ExternalLinkIcon");return l(),r("div",null,[v,d(" more "),m,e("p",null,[e("a",c,[i("https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v1/"),s(n)])]),e("p",null,[e("a",b,[i("https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v2/"),s(n)])])])}const f=t(u,[["render",p],["__file","022_llamaindex_graphrag.html.vue"]]);export{f as default};
