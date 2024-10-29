const e=JSON.parse('{"key":"v-fbcadf0c","path":"/zh/posts/LLM/langchain_source_code.html","title":"从源码视角，窥探LangChain的运行逻辑","lang":"zh-CN","frontmatter":{"icon":"lightbulb","date":"2024-01-29T00:00:00.000Z","sticky":true,"star":true,"category":["LLM"],"tag":["LLM"],"description":"从源码视角，窥探LangChain的运行逻辑 通过解读Chain的源码和AgentExecutor的源码，带你了解各个模块是如何关联在一起的 LangChain的基类 LCEL与Runnable Chain AgentExecutor","head":[["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/zh/posts/LLM/langchain_source_code.html"}],["meta",{"property":"og:site_name","content":"莉芝"}],["meta",{"property":"og:title","content":"从源码视角，窥探LangChain的运行逻辑"}],["meta",{"property":"og:description","content":"从源码视角，窥探LangChain的运行逻辑 通过解读Chain的源码和AgentExecutor的源码，带你了解各个模块是如何关联在一起的 LangChain的基类 LCEL与Runnable Chain AgentExecutor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-29T04:35:55.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"LLM"}],["meta",{"property":"article:published_time","content":"2024-01-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-29T04:35:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从源码视角，窥探LangChain的运行逻辑\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-29T04:35:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"1. LangChain的基类","slug":"_1-langchain的基类","link":"#_1-langchain的基类","children":[]},{"level":2,"title":"2. LCEL与Runnable","slug":"_2-lcel与runnable","link":"#_2-lcel与runnable","children":[{"level":3,"title":"2.1. LCEL(LangChain的表达式语言)","slug":"_2-1-lcel-langchain的表达式语言","link":"#_2-1-lcel-langchain的表达式语言","children":[]},{"level":3,"title":"2.2. Runnable","slug":"_2-2-runnable","link":"#_2-2-runnable","children":[]},{"level":3,"title":"2.3. Runnable的子类","slug":"_2-3-runnable的子类","link":"#_2-3-runnable的子类","children":[]},{"level":3,"title":"2.4. Runnable子类的输入和输出类型","slug":"_2-4-runnable子类的输入和输出类型","link":"#_2-4-runnable子类的输入和输出类型","children":[]}]},{"level":2,"title":"3. Chain","slug":"_3-chain","link":"#_3-chain","children":[{"level":3,"title":"3.1. What","slug":"_3-1-what","link":"#_3-1-what","children":[]},{"level":3,"title":"3.2. Chain的属性","slug":"_3-2-chain的属性","link":"#_3-2-chain的属性","children":[]},{"level":3,"title":"3.3. Chain的源码解读","slug":"_3-3-chain的源码解读","link":"#_3-3-chain的源码解读","children":[]}]},{"level":2,"title":"4. AgentExecutor","slug":"_4-agentexecutor","link":"#_4-agentexecutor","children":[{"level":3,"title":"4.1. What","slug":"_4-1-what","link":"#_4-1-what","children":[]},{"level":3,"title":"4.2. AgentExecutor的属性","slug":"_4-2-agentexecutor的属性","link":"#_4-2-agentexecutor的属性","children":[]},{"level":3,"title":"4.3. AgentExecutor的源码解读","slug":"_4-3-agentexecutor的源码解读","link":"#_4-3-agentexecutor的源码解读","children":[]},{"level":3,"title":"4.4. AgentExecutor的源码总结","slug":"_4-4-agentexecutor的源码总结","link":"#_4-4-agentexecutor的源码总结","children":[]}]}],"git":{"createdTime":1706543860000,"updatedTime":1709181355000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":3}]},"readingTime":{"minutes":5.35,"words":1606},"filePathRelative":"zh/posts/LLM/langchain_source_code.md","localizedDate":"2024年1月29日","excerpt":"<h1> 从源码视角，窥探LangChain的运行逻辑</h1>\\n<blockquote>\\n<p>通过解读Chain的源码和AgentExecutor的源码，带你了解各个模块是如何关联在一起的</p>\\n</blockquote>\\n<ul>\\n<li>\\n<ol>\\n<li>LangChain的基类</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"2\\">\\n<li>LCEL与Runnable</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"3\\">\\n<li>Chain</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"4\\">\\n<li>AgentExecutor</li>\\n</ol>\\n</li>\\n</ul>\\n","autoDesc":true}');export{e as data};