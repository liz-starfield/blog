import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as r,c as l,f as d,a as e,b as i,d as t,e as o}from"./app-74fYY7Rf.js";const u={},m=e("h1",{id:"llamaindex-graphrag-ollama-neo4j",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#llamaindex-graphrag-ollama-neo4j","aria-hidden":"true"},"#"),i(" LlamaIndex + GraphRAG + Ollama + Neo4j")],-1),c=o(`<h2 id="_1-improvements-in-the-official-implementation" tabindex="-1"><a class="header-anchor" href="#_1-improvements-in-the-official-implementation" aria-hidden="true">#</a> 1. Improvements in the Official Implementation</h2><ul><li>Replace the OpenAI model with the local Ollama model <ul><li>llm: llama3</li><li>embedding model: nomic-embed-text</li></ul></li><li>Use a local Neo4j graph database</li><li>Optimize the prompt for extracting entities and relationships from the graph and the corresponding parsing function</li></ul><h2 id="_2-overall-process" tabindex="-1"><a class="header-anchor" href="#_2-overall-process" aria-hidden="true">#</a> 2. Overall Process</h2><ol><li>Load data and split it into text blocks</li><li>Extract entities and relationships from each text block</li><li>Summarize all entities and relationships from the text blocks to obtain complete graph information</li><li>Store graph information in the Neo4j graph database and create an index</li><li>Group related nodes in the graph into communities and generate summaries for each community</li><li>Retrieve community summaries, generate answers from each summary, and aggregate these answers into a final response</li></ol><h2 id="_3-implementation" tabindex="-1"><a class="header-anchor" href="#_3-implementation" aria-hidden="true">#</a> 3. Implementation</h2><h3 id="_3-1-install-required-libraries" tabindex="-1"><a class="header-anchor" href="#_3-1-install-required-libraries" aria-hidden="true">#</a> 3.1. Install Required Libraries</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!pip install -i https://pypi.tuna.tsinghua.edu.cn/simple llama-index-graph-stores-neo4j graspologic numpy scipy==1.12.0 future 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-load-data" tabindex="-1"><a class="header-anchor" href="#_3-2-load-data" aria-hidden="true">#</a> 3.2. Load Data</h3><h4 id="_3-2-1-load-csv-file-with-three-columns-title-date-and-text" tabindex="-1"><a class="header-anchor" href="#_3-2-1-load-csv-file-with-three-columns-title-date-and-text" aria-hidden="true">#</a> 3.2.1. Load CSV file with three columns: title, date, and text</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import pandas as pd
from llama_index.core import Document

news = pd.read_csv(
    &quot;https://raw.githubusercontent.com/tomasonjo/blog-datasets/main/news_articles.csv&quot;
)[:10]

news.head()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>title</th><th>date</th><th>text</th></tr></thead><tbody><tr><td>0 Chevron: Best Of Breed</td><td>2031-04-06T01:36:32.000000000+00:00</td><td>JHVEPhoto Like many companies in the O&amp;G secto...</td></tr><tr><td>1 FirstEnergy (NYSE:FE) Posts Earnings Results</td><td>2030-04-29T06:55:28.000000000+00:00</td><td>FirstEnergy (NYSE:FE – Get Rating) posted its ...</td></tr><tr><td>2 Dáil almost suspended after Sinn Féin TD put p...</td><td>2023-06-15T14:32:11.000000000+00:00</td><td>The Dáil was almost suspended on Thursday afte...</td></tr><tr><td>3 Epic&#39;s latest tool can animate hyperrealistic ...</td><td>2023-06-15T14:00:00.000000000+00:00</td><td>Today, Epic is releasing a new tool designed t...</td></tr><tr><td>4 EU to Ban Huawei, ZTE from Internal Commission...</td><td>2023-06-15T13:50:00.000000000+00:00</td><td>The European Commission is planning to ban equ...</td></tr></tbody></table><h4 id="_3-2-2-concatenate-title-and-text-to-get-documents" tabindex="-1"><a class="header-anchor" href="#_3-2-2-concatenate-title-and-text-to-get-documents" aria-hidden="true">#</a> 3.2.2. Concatenate title and text to get documents</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>documents = [Document(text=f&#39;{row[&#39;title&#39;]}:{row[&#39;text&#39;]}&#39;) for i,row in news.iterrows()]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-3-split-text-blocks" tabindex="-1"><a class="header-anchor" href="#_3-2-3-split-text-blocks" aria-hidden="true">#</a> 3.2.3. Split Text Blocks</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.core.node_parser import SentenceSplitter

splitter = SentenceSplitter(
    chunk_size=1024,
    chunk_overlap=20,
)
nodes = splitter.get_nodes_from_documents(documents)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-4-verification" tabindex="-1"><a class="header-anchor" href="#_3-2-4-verification" aria-hidden="true">#</a> 3.2.4. Verification</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>len(nodes)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>10</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print(nodes[0].text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Chevron: Best Of Breed:JHVEPhoto Like many companies in the O&amp;G sector, the stock of Chevron (NYSE:CVX) has declined about 10% over the past 90-days despite the fact that Q2 consensus earnings estimates have risen sharply (~25%) during that same time frame. Over the years, Chevron has kept a very strong balance sheet. That allowed the...</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>print(nodes[1].text)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>FirstEnergy (NYSE:FE) Posts Earnings Results:FirstEnergy (NYSE:FE – Get Rating) posted its earnings results on Tuesday. The utilities provider reported $0.53 earnings per share for the quarter, topping the consensus estimate of $0.52 by $0.01, RTT News reports. FirstEnergy had a net margin of 10.85% and a return on equity of 17.17%. During the same period... If the content contained herein violates any of your rights, including those of copyright, you are requested to immediately notify us using via the following email address operanews-external(at)opera.com Top News</p></blockquote><h3 id="_3-3-extract-entities-and-relationships" tabindex="-1"><a class="header-anchor" href="#_3-3-extract-entities-and-relationships" aria-hidden="true">#</a> 3.3. Extract Entities and Relationships</h3><h4 id="_3-3-1-define-graphragextractor-class" tabindex="-1"><a class="header-anchor" href="#_3-3-1-define-graphragextractor-class" aria-hidden="true">#</a> 3.3.1. Define GraphRAGExtractor Class</h4><ul><li>The GraphRAGExtractor class is used to extract entities and relationships in the form of subject-relation-object triples from text.</li><li>Key Components <ul><li>llm: The LLM used for extracting entities and relationships</li><li>extract_prompt: The prompt used for extracting entities and relationships</li><li>parse_fn: The parsing function to convert LLM output into structured data</li><li>num_workers: Number of threads to process multiple texts simultaneously</li></ul></li><li>Main Methods <ul><li><strong>call</strong>: Entry point for processing</li><li>acall: Asynchronous version of call</li><li>_aextract: Core method</li></ul></li><li>Extraction Process for Each Text Block <ul><li><ol><li>Pass the text block and extract_prompt to the LLM</li></ol></li><li><ol start="2"><li>Obtain the LLM&#39;s response: extracted entities and relationships and their descriptions</li></ol></li><li><ol start="3"><li>Parse the LLM&#39;s response using parse_fn to get EntityNode and Relation objects</li></ol></li><li><ol start="4"><li>Add the extracted entities and relationships information from all text blocks to the node metadata under KG_NODES_KEY and KG_RELATIONS_KEY</li></ol></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import asyncio
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-use-local-ollama-model-and-set-as-global-llm" tabindex="-1"><a class="header-anchor" href="#_3-3-2-use-local-ollama-model-and-set-as-global-llm" aria-hidden="true">#</a> 3.3.2. Use Local Ollama Model and Set as Global LLM</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import os
from llama_index.llms.ollama import Ollama

os.environ[&quot;no_proxy&quot;] = &quot;127.0.0.1,localhost&quot;

llm = Ollama(model=&quot;llama3&quot;, request_timeout=660.0)

Settings.llm = llm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Test if it works</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>response = llm.complete(&quot;What is the capital of France?&quot;)
print(response)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Output:</p><p>The capital of France is Paris.</p></blockquote><h4 id="_3-3-3-use-local-ollama-embedding-model-and-set-as-global-embed-model" tabindex="-1"><a class="header-anchor" href="#_3-3-3-use-local-ollama-embedding-model-and-set-as-global-embed-model" aria-hidden="true">#</a> 3.3.3. Use Local Ollama Embedding Model and Set as Global embed_model</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!pip install llama-index-embeddings-ollama
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-4-define-extract-prompt" tabindex="-1"><a class="header-anchor" href="#_3-3-4-define-extract-prompt" aria-hidden="true">#</a> 3.3.4. Define extract_prompt</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>KG_TRIPLET_EXTRACT_TMPL = &quot;&quot;&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-5-define-parse-fn" tabindex="-1"><a class="header-anchor" href="#_3-3-5-define-parse-fn" aria-hidden="true">#</a> 3.3.5. Define parse_fn</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import json
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-6-instantiate-graphragextractor-as-kg-extractor-object" tabindex="-1"><a class="header-anchor" href="#_3-3-6-instantiate-graphragextractor-as-kg-extractor-object" aria-hidden="true">#</a> 3.3.6. Instantiate GraphRAGExtractor as kg_extractor Object</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kg_extractor = GraphRAGExtractor(
    llm=llm,
    extract_prompt=KG_TRIPLET_EXTRACT_TMPL,
    max_paths_per_chunk=2,
    parse_fn=parse_fn,
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-store-graph-information-in-neo4j" tabindex="-1"><a class="header-anchor" href="#_3-4-store-graph-information-in-neo4j" aria-hidden="true">#</a> 3.4. Store Graph Information in Neo4j</h3><h4 id="_3-4-1-define-graphragstore-class" tabindex="-1"><a class="header-anchor" href="#_3-4-1-define-graphragstore-class" aria-hidden="true">#</a> 3.4.1. Define GraphRAGStore Class</h4><p>Key Methods</p><ul><li>build_communities() <ul><li>Convert internal graph representation to NetworkX graph</li><li>Apply hierarchical Leiden algorithm for community detection</li><li>Collect details for each community</li><li>Generate summaries for each community</li></ul></li><li>generate_community_summary(text) <ul><li>Use LLM to generate summaries of relationships in the community</li><li>Summaries include a synthesis of entity names and relationship descriptions</li></ul></li><li>_create_nx_graph() <ul><li>Convert internal graph representation to NetworkX graph for community detection</li></ul></li><li>_collect_community_info(nx_graph, clusters) <ul><li>Collect details for each node based on their community</li><li>Create string representations of each relationship within the community</li></ul></li><li>_summarize_communities(community_info) <ul><li>Use LLM to generate and store summaries for each community</li></ul></li><li>get_community_summaries() <ul><li>Return community summaries, building them if not already done</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import re
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-2-instantiate-graphragstore-as-graph-store-object-using-local-neo4j-graph-database" tabindex="-1"><a class="header-anchor" href="#_3-4-2-instantiate-graphragstore-as-graph-store-object-using-local-neo4j-graph-database" aria-hidden="true">#</a> 3.4.2. Instantiate GraphRAGStore as graph_store Object Using Local Neo4j Graph Database</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.graph_stores.neo4j import Neo4jPropertyGraphStore

# Note: used to be \`Neo4jPGStore\`
graph_store = GraphRAGStore(
    username=&quot;neo4j&quot;, password=&quot;neo4j&quot;, url=&quot;bolt://localhost:7687&quot;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-graphrag-index" tabindex="-1"><a class="header-anchor" href="#_3-5-graphrag-index" aria-hidden="true">#</a> 3.5. GraphRAG Index</h3><h4 id="_3-5-1-create-index" tabindex="-1"><a class="header-anchor" href="#_3-5-1-create-index" aria-hidden="true">#</a> 3.5.1. Create Index</h4><ul><li>nodes from 3.2.3</li><li>kg_extractor from 3.3.6</li><li>graph_store from 3.4.2</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.core import PropertyGraphIndex

index = PropertyGraphIndex(
    nodes=nodes,
    property_graph_store=graph_store,
    kg_extractors=[kg_extractor],
    show_progress=True,
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output for each text block:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extract text ---&gt;:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-2-verification" tabindex="-1"><a class="header-anchor" href="#_3-5-2-verification" aria-hidden="true">#</a> 3.5.2. Verification</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>len(index.property_graph_store.get_triplets())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>148</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>index.property_graph_store.get_triplets()[10]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>[EntityNode(label=&#39;Company&#39;, embedding=None, properties={&#39;id&#39;: &#39;FirstEnergy&#39;, &#39;entity_description&#39;: &#39;FirstEnergy (NYSE:FE) is a utilities provider&#39;, &#39;triplet_source_id&#39;: &#39;144af8a1-4078-4991-a234-4fc930bcd029&#39;}, name=&#39;FirstEnergy&#39;), Relation(label=&#39;reported_by&#39;, source_id=&#39;FirstEnergy&#39;, target_id=&#39;RTT News&#39;, properties={&#39;relationship_description&#39;: &quot;FirstEnergy&#39;s earnings results were reported by RTT News&quot;, &#39;triplet_source_id&#39;: &#39;144af8a1-4078-4991-a234-4fc930bcd029&#39;}), EntityNode(label=&#39;News Source&#39;, embedding=None, properties={&#39;id&#39;: &#39;RTT News&#39;, &#39;entity_description&#39;: &#39;A news source reporting on earnings results and other financial information&#39;, &#39;triplet_source_id&#39;: &#39;144af8a1-4078-4991-a234-4fc930bcd029&#39;}, name=&#39;RTT News&#39;)]</p></blockquote><h3 id="_3-6-build-communities-and-generate-community-summaries" tabindex="-1"><a class="header-anchor" href="#_3-6-build-communities-and-generate-community-summaries" aria-hidden="true">#</a> 3.6. Build Communities and Generate Community Summaries</h3><p>Use community detection algorithms to group related nodes in the graph, then use a large language model (LLM) to generate summaries for each community.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>index.property_graph_store.build_communities()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-7-graphrag-query" tabindex="-1"><a class="header-anchor" href="#_3-7-graphrag-query" aria-hidden="true">#</a> 3.7. GraphRAG Query</h3><h4 id="_3-7-1-define-graphragqueryengine-class" tabindex="-1"><a class="header-anchor" href="#_3-7-1-define-graphragqueryengine-class" aria-hidden="true">#</a> 3.7.1. Define GraphRAGQueryEngine Class</h4><ul><li>The GraphRAGQueryEngine class is a custom query engine designed to handle queries using the GraphRAG method. It utilizes community summaries generated by the GraphRAGStore to answer user queries.</li><li>Main Components <ul><li>graph_store: An instance of GraphRAGStore containing community summaries</li><li>llm: The language model used to generate and aggregate answers</li></ul></li><li>Key Methods <ul><li>custom_query(query_str: str) <ul><li>Main entry point for queries</li><li>Used to retrieve community summaries, generate answers from each summary, and aggregate these answers into a final response</li></ul></li><li>generate_answer_from_summary(community_summary, query) <ul><li>Generate an answer for a query based on a single community summary</li><li>Use LLM to interpret the community summary in the context of the query</li></ul></li><li>aggregate_answers(community_answers) <ul><li>Combine individual answers from different communities into a coherent final response</li><li>Use LLM to synthesize multiple perspectives into a concise answer</li></ul></li></ul></li><li>Query Processing Flow <ul><li><ol><li>Retrieve community summaries from the graph store</li></ol></li><li><ol start="2"><li>Generate specific answers for the query from each community summary</li></ol></li><li><ol start="3"><li>Aggregate all community-specific answers into a final, coherent response</li></ol></li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>from llama_index.core.query_engine import CustomQueryEngine
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
            if id in community_ids # Filter using cluster IDs
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-7-2-instantiate-graphragqueryengine-as-query-engine-object" tabindex="-1"><a class="header-anchor" href="#_3-7-2-instantiate-graphragqueryengine-as-query-engine-object" aria-hidden="true">#</a> 3.7.2. Instantiate GraphRAGQueryEngine as query_engine Object</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>query_engine = GraphRAGQueryEngine(
    graph_store=index.property_graph_store, 
    llm=llm,
    index=index,
    similarity_top_k=10
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-7-3-retrieve-information" tabindex="-1"><a class="header-anchor" href="#_3-7-3-retrieve-information" aria-hidden="true">#</a> 3.7.3. Retrieve Information</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>response = query_engine.query(
    &quot;What are the main news discussed in the document?&quot;
)
display(Markdown(f&quot;{response.response}&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Here is the combined response: The main news discussed in the document is a debate on retained firefighters&#39; pay, with Sinn Féin TDs John Brady and Pearse Doherty advocating for their rights. Specifically, John Brady interrupted Minister for Housing Darragh O&#39;Brien&#39;s speech to emphasize the importance of retaining firefighters&#39; pay, while Pearse Doherty called on the minister to make an improved offer in relation to pay and meet with them outside of the House.</p></blockquote><h2 id="_4-reference-links" tabindex="-1"><a class="header-anchor" href="#_4-reference-links" aria-hidden="true">#</a> 4. Reference Links</h2>`,71),v={href:"https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v1/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v2/",target:"_blank",rel:"noopener noreferrer"};function p(h,_){const n=a("ExternalLinkIcon");return r(),l("div",null,[m,d(" more "),c,e("p",null,[e("a",v,[i("https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v1/"),t(n)])]),e("p",null,[e("a",b,[i("https://docs.llamaindex.ai/en/stable/examples/cookbooks/GraphRAG_v2/"),t(n)])])])}const y=s(u,[["render",p],["__file","022_llamaindex_graphrag.html.vue"]]);export{y as default};
