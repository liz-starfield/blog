const l=JSON.parse('{"key":"v-5bcfad2a","path":"/zh/posts/LLM/llama.html","title":"Llama源码解读","lang":"zh-CN","frontmatter":{"icon":"lightbulb","date":"2024-06-01T00:00:00.000Z","sticky":true,"star":true,"category":["LLM"],"tag":["LLM"],"description":"Llama源码解读 About 模型总体架构 超参数 张量维度转换 可训练参数量 源码","head":[["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/zh/posts/LLM/llama.html"}],["meta",{"property":"og:site_name","content":"莉芝"}],["meta",{"property":"og:title","content":"Llama源码解读"}],["meta",{"property":"og:description","content":"Llama源码解读 About 模型总体架构 超参数 张量维度转换 可训练参数量 源码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T01:33:06.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"LLM"}],["meta",{"property":"article:published_time","content":"2024-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-03T01:33:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Llama源码解读\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-03T01:33:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"1. About","slug":"_1-about","link":"#_1-about","children":[]},{"level":2,"title":"2. 模型总体架构","slug":"_2-模型总体架构","link":"#_2-模型总体架构","children":[]},{"level":2,"title":"3. 超参数","slug":"_3-超参数","link":"#_3-超参数","children":[]},{"level":2,"title":"4. 张量维度转换","slug":"_4-张量维度转换","link":"#_4-张量维度转换","children":[]},{"level":2,"title":"5. 可训练参数量","slug":"_5-可训练参数量","link":"#_5-可训练参数量","children":[]},{"level":2,"title":"6. 源码","slug":"_6-源码","link":"#_6-源码","children":[{"level":3,"title":"6.1. 入口","slug":"_6-1-入口","link":"#_6-1-入口","children":[]},{"level":3,"title":"6.2. GenerationMixin","slug":"_6-2-generationmixin","link":"#_6-2-generationmixin","children":[]},{"level":3,"title":"6.3. LlamaForCausalLM","slug":"_6-3-llamaforcausallm","link":"#_6-3-llamaforcausallm","children":[]},{"level":3,"title":"6.4. LlamaModel","slug":"_6-4-llamamodel","link":"#_6-4-llamamodel","children":[]},{"level":3,"title":"6.5. LlamaDecoderLayer","slug":"_6-5-llamadecoderlayer","link":"#_6-5-llamadecoderlayer","children":[]},{"level":3,"title":"6.6. LlamaRMSNorm","slug":"_6-6-llamarmsnorm","link":"#_6-6-llamarmsnorm","children":[]},{"level":3,"title":"6.7. LlamaSdpaAttention","slug":"_6-7-llamasdpaattention","link":"#_6-7-llamasdpaattention","children":[]},{"level":3,"title":"6.8. LlamaRotaryEmbedding","slug":"_6-8-llamarotaryembedding","link":"#_6-8-llamarotaryembedding","children":[]},{"level":3,"title":"6.9. LlamaMLP","slug":"_6-9-llamamlp","link":"#_6-9-llamamlp","children":[]}]}],"git":{"createdTime":1717378386000,"updatedTime":1717378386000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":5.87,"words":1761},"filePathRelative":"zh/posts/LLM/llama.md","localizedDate":"2024年6月1日","excerpt":"<h1> Llama源码解读</h1>\\n<ul>\\n<li>\\n<ol>\\n<li>About</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"2\\">\\n<li>模型总体架构</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"3\\">\\n<li>超参数</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"4\\">\\n<li>张量维度转换</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"5\\">\\n<li>可训练参数量</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"6\\">\\n<li>源码</li>\\n</ol>\\n</li>\\n</ul>\\n","autoDesc":true}');export{l as data};
