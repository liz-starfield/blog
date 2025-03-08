const e=JSON.parse('{"key":"v-7246125c","path":"/zh/posts/llm/028_distribution_and_parallelism_4.html","title":"分布式训练之五：GPU入门","lang":"zh-CN","frontmatter":{"icon":"lightbulb","sidebar":false,"date":"2025-03-06T00:00:00.000Z","prev":false,"next":"./027_distribution_and_parallelism_3","category":["LLM"],"tag":["分布式","并行"],"description":"分布式训练之五：GPU入门","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://liz-in-tech.github.io/blog/posts/llm/028_distribution_and_parallelism_4.html"}],["meta",{"property":"og:url","content":"https://liz-in-tech.github.io/blog/zh/posts/llm/028_distribution_and_parallelism_4.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"分布式训练之五：GPU入门"}],["meta",{"property":"og:description","content":"分布式训练之五：GPU入门"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-08T14:32:06.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:tag","content":"并行"}],["meta",{"property":"article:published_time","content":"2025-03-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-08T14:32:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式训练之五：GPU入门\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-03-08T14:32:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-in-tech\\"}]}"]]},"headers":[{"level":2,"title":"1. GPU 架构","slug":"_1-gpu-架构","link":"#_1-gpu-架构","children":[]},{"level":2,"title":"2. 如何通过 kernel 提升性能","slug":"_2-如何通过-kernel-提升性能","link":"#_2-如何通过-kernel-提升性能","children":[{"level":3,"title":"2.1. 编写Kernels代码的工具","slug":"_2-1-编写kernels代码的工具","link":"#_2-1-编写kernels代码的工具","children":[]},{"level":3,"title":"2.2. torch.compile装饰器","slug":"_2-2-torch-compile装饰器","link":"#_2-2-torch-compile装饰器","children":[]},{"level":3,"title":"2.3. 实现 Triton Kernels","slug":"_2-3-实现-triton-kernels","link":"#_2-3-实现-triton-kernels","children":[]},{"level":3,"title":"2.4. 实现 CUDA Kernels","slug":"_2-4-实现-cuda-kernels","link":"#_2-4-实现-cuda-kernels","children":[]}]},{"level":2,"title":"3. Fused Kernels 融合内核","slug":"_3-fused-kernels-融合内核","link":"#_3-fused-kernels-融合内核","children":[]},{"level":2,"title":"4. Flash Attention","slug":"_4-flash-attention","link":"#_4-flash-attention","children":[{"level":3,"title":"4.1. 优化前","slug":"_4-1-优化前","link":"#_4-1-优化前","children":[]},{"level":3,"title":"4.2. Flash Attention 优化","slug":"_4-2-flash-attention-优化","link":"#_4-2-flash-attention-优化","children":[]}]}],"git":{"createdTime":1741444326000,"updatedTime":1741444326000,"contributors":[{"name":"liz","email":"liz@MacBook-Pro.local","commits":1}]},"readingTime":{"minutes":9.18,"words":2755},"filePathRelative":"zh/posts/llm/028_distribution_and_parallelism_4.md","localizedDate":"2025年3月6日","excerpt":"<h1> 分布式训练之五：GPU入门</h1>\\n","autoDesc":true}');export{e as data};
