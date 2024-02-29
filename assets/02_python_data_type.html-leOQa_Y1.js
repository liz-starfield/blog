const e=JSON.parse('{"key":"v-ce1d9382","path":"/zh/posts/python/02_python_data_type.html","title":"Python的数据类型","lang":"zh-CN","frontmatter":{"icon":"lightbulb","date":"2022-06-12T00:00:00.000Z","category":["Python"],"tag":["Python"],"description":"Python的数据类型 数据类型 String操作 List操作 Tuple操作 Set操作 Dictionary操作","head":[["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/zh/posts/python/02_python_data_type.html"}],["meta",{"property":"og:site_name","content":"莉芝"}],["meta",{"property":"og:title","content":"Python的数据类型"}],["meta",{"property":"og:description","content":"Python的数据类型 数据类型 String操作 List操作 Tuple操作 Set操作 Dictionary操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-29T04:35:55.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2022-06-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-29T04:35:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python的数据类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-29T04:35:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"1. 数据类型","slug":"_1-数据类型","link":"#_1-数据类型","children":[{"level":3,"title":"1.1. Number 数字","slug":"_1-1-number-数字","link":"#_1-1-number-数字","children":[]},{"level":3,"title":"1.2. String 字符串","slug":"_1-2-string-字符串","link":"#_1-2-string-字符串","children":[]},{"level":3,"title":"1.3. Boolean 布尔值","slug":"_1-3-boolean-布尔值","link":"#_1-3-boolean-布尔值","children":[]},{"level":3,"title":"1.4. 空值（None）","slug":"_1-4-空值-none","link":"#_1-4-空值-none","children":[]},{"level":3,"title":"1.5. 组合类型汇总:List&Tuple&Set&Dictionary","slug":"_1-5-组合类型汇总-list-tuple-set-dictionary","link":"#_1-5-组合类型汇总-list-tuple-set-dictionary","children":[]},{"level":3,"title":"1.6. List（有序，允许不同数据类型项）","slug":"_1-6-list-有序-允许不同数据类型项","link":"#_1-6-list-有序-允许不同数据类型项","children":[]},{"level":3,"title":"1.7. Tuple（创建后无法修改，有序，允许不同数据类型项）","slug":"_1-7-tuple-创建后无法修改-有序-允许不同数据类型项","link":"#_1-7-tuple-创建后无法修改-有序-允许不同数据类型项","children":[]},{"level":3,"title":"1.8. Set（唯一，无序，无索引）","slug":"_1-8-set-唯一-无序-无索引","link":"#_1-8-set-唯一-无序-无索引","children":[]},{"level":3,"title":"1.9. Dictionary（key value 对，无序）","slug":"_1-9-dictionary-key-value-对-无序","link":"#_1-9-dictionary-key-value-对-无序","children":[]}]},{"level":2,"title":"2. String操作","slug":"_2-string操作","link":"#_2-string操作","children":[{"level":3,"title":"2.1. 连接join","slug":"_2-1-连接join","link":"#_2-1-连接join","children":[]},{"level":3,"title":"2.2. 拆分split","slug":"_2-2-拆分split","link":"#_2-2-拆分split","children":[]},{"level":3,"title":"2.3. 格式化f-Strings","slug":"_2-3-格式化f-strings","link":"#_2-3-格式化f-strings","children":[]},{"level":3,"title":"2.4. String转字符","slug":"_2-4-string转字符","link":"#_2-4-string转字符","children":[]},{"level":3,"title":"2.5. 子串slice","slug":"_2-5-子串slice","link":"#_2-5-子串slice","children":[]},{"level":3,"title":"2.6. 反转","slug":"_2-6-反转","link":"#_2-6-反转","children":[]},{"level":3,"title":"2.7. 首字母大写","slug":"_2-7-首字母大写","link":"#_2-7-首字母大写","children":[]},{"level":3,"title":"2.8. 大小写替换swapcase","slug":"_2-8-大小写替换swapcase","link":"#_2-8-大小写替换swapcase","children":[]},{"level":3,"title":"2.9.全大写upper/全小写lower","slug":"_2-9-全大写upper-全小写lower","link":"#_2-9-全大写upper-全小写lower","children":[]},{"level":3,"title":"2.10. 替代replace","slug":"_2-10-替代replace","link":"#_2-10-替代replace","children":[]},{"level":3,"title":"2.11. 去掉头尾strip","slug":"_2-11-去掉头尾strip","link":"#_2-11-去掉头尾strip","children":[]},{"level":3,"title":"2.12. 统计出现次数count","slug":"_2-12-统计出现次数count","link":"#_2-12-统计出现次数count","children":[]},{"level":3,"title":"2.13. 查找find","slug":"_2-13-查找find","link":"#_2-13-查找find","children":[]},{"level":3,"title":"2.14. Tab扩大空格大小expandtabs","slug":"_2-14-tab扩大空格大小expandtabs","link":"#_2-14-tab扩大空格大小expandtabs","children":[]},{"level":3,"title":"2.15. 是否以xx开头startswith/结尾endswith","slug":"_2-15-是否以xx开头startswith-结尾endswith","link":"#_2-15-是否以xx开头startswith-结尾endswith","children":[]},{"level":3,"title":"2.16. 是否全是字母或数字isalnum","slug":"_2-16-是否全是字母或数字isalnum","link":"#_2-16-是否全是字母或数字isalnum","children":[]},{"level":3,"title":"2.17. 是否全是字母isalpha","slug":"_2-17-是否全是字母isalpha","link":"#_2-17-是否全是字母isalpha","children":[]},{"level":3,"title":"2.18. 是否全是数字","slug":"_2-18-是否全是数字","link":"#_2-18-是否全是数字","children":[]},{"level":3,"title":"2.19. 是否是合法变量名isidentifier","slug":"_2-19-是否是合法变量名isidentifier","link":"#_2-19-是否是合法变量名isidentifier","children":[]},{"level":3,"title":"2.20. 是否全是大写isupper/小写islower","slug":"_2-20-是否全是大写isupper-小写islower","link":"#_2-20-是否全是大写isupper-小写islower","children":[]}]},{"level":2,"title":"3. List操作","slug":"_3-list操作","link":"#_3-list操作","children":[{"level":3,"title":"3.1. Create","slug":"_3-1-create","link":"#_3-1-create","children":[]},{"level":3,"title":"3.2. Access&Modify","slug":"_3-2-access-modify","link":"#_3-2-access-modify","children":[]},{"level":3,"title":"3.3. Find Index","slug":"_3-3-find-index","link":"#_3-3-find-index","children":[]},{"level":3,"title":"3.4. Items","slug":"_3-4-items","link":"#_3-4-items","children":[]},{"level":3,"title":"3.5. Insert","slug":"_3-5-insert","link":"#_3-5-insert","children":[]},{"level":3,"title":"3.6. Remove","slug":"_3-6-remove","link":"#_3-6-remove","children":[]},{"level":3,"title":"3.7. Contain","slug":"_3-7-contain","link":"#_3-7-contain","children":[]},{"level":3,"title":"3.8. Copy","slug":"_3-8-copy","link":"#_3-8-copy","children":[]},{"level":3,"title":"3.9. Connect","slug":"_3-9-connect","link":"#_3-9-connect","children":[]},{"level":3,"title":"3.10. Count","slug":"_3-10-count","link":"#_3-10-count","children":[]},{"level":3,"title":"3.11. Reverse","slug":"_3-11-reverse","link":"#_3-11-reverse","children":[]},{"level":3,"title":"3.12. Sort","slug":"_3-12-sort","link":"#_3-12-sort","children":[]},{"level":3,"title":"3.13. index,item循环","slug":"_3-13-index-item循环","link":"#_3-13-index-item循环","children":[]},{"level":3,"title":"3.14. zip组合循环","slug":"_3-14-zip组合循环","link":"#_3-14-zip组合循环","children":[]}]},{"level":2,"title":"4. Tuple操作","slug":"_4-tuple操作","link":"#_4-tuple操作","children":[{"level":3,"title":"4.1. Access","slug":"_4-1-access","link":"#_4-1-access","children":[]},{"level":3,"title":"4.2. Unpack","slug":"_4-2-unpack","link":"#_4-2-unpack","children":[]},{"level":3,"title":"4.3. Slice","slug":"_4-3-slice","link":"#_4-3-slice","children":[]},{"level":3,"title":"4.4. ChangeType","slug":"_4-4-changetype","link":"#_4-4-changetype","children":[]},{"level":3,"title":"4.5. Contain","slug":"_4-5-contain","link":"#_4-5-contain","children":[]},{"level":3,"title":"4.6. Connect","slug":"_4-6-connect","link":"#_4-6-connect","children":[]},{"level":3,"title":"4.7. Delete","slug":"_4-7-delete","link":"#_4-7-delete","children":[]}]},{"level":2,"title":"5. Set操作","slug":"_5-set操作","link":"#_5-set操作","children":[{"level":3,"title":"5.1. Create","slug":"_5-1-create","link":"#_5-1-create","children":[]},{"level":3,"title":"5.2. Access","slug":"_5-2-access","link":"#_5-2-access","children":[]},{"level":3,"title":"5.3. Contain","slug":"_5-3-contain","link":"#_5-3-contain","children":[]},{"level":3,"title":"5.4. Add","slug":"_5-4-add","link":"#_5-4-add","children":[]},{"level":3,"title":"5.5. Remove","slug":"_5-5-remove","link":"#_5-5-remove","children":[]},{"level":3,"title":"5.6. ChangeType","slug":"_5-6-changetype","link":"#_5-6-changetype","children":[]},{"level":3,"title":"5.7. 交集 Intersection","slug":"_5-7-交集-intersection","link":"#_5-7-交集-intersection","children":[]},{"level":3,"title":"5.8. 差集 Difference","slug":"_5-8-差集-difference","link":"#_5-8-差集-difference","children":[]},{"level":3,"title":"5.9. 是否是子集/父集","slug":"_5-9-是否是子集-父集","link":"#_5-9-是否是子集-父集","children":[]},{"level":3,"title":"5.10. 是否互斥","slug":"_5-10-是否互斥","link":"#_5-10-是否互斥","children":[]}]},{"level":2,"title":"6. Dictionary操作","slug":"_6-dictionary操作","link":"#_6-dictionary操作","children":[{"level":3,"title":"6.1. Create","slug":"_6-1-create","link":"#_6-1-create","children":[]},{"level":3,"title":"6.2. Access & Add & Update","slug":"_6-2-access-add-update","link":"#_6-2-access-add-update","children":[]},{"level":3,"title":"6.3. Contain","slug":"_6-3-contain","link":"#_6-3-contain","children":[]},{"level":3,"title":"6.4. Remove","slug":"_6-4-remove","link":"#_6-4-remove","children":[]},{"level":3,"title":"6.5. ChangeType","slug":"_6-5-changetype","link":"#_6-5-changetype","children":[]},{"level":3,"title":"6.6. Copy","slug":"_6-6-copy","link":"#_6-6-copy","children":[]},{"level":3,"title":"6.7. Unpack","slug":"_6-7-unpack","link":"#_6-7-unpack","children":[]}]}],"git":{"createdTime":1706776523000,"updatedTime":1709181355000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":2}]},"readingTime":{"minutes":13.97,"words":4192},"filePathRelative":"zh/posts/python/02_python_data_type.md","localizedDate":"2022年6月12日","excerpt":"<h1> Python的数据类型</h1>\\n<ul>\\n<li>\\n<ol>\\n<li>数据类型</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"2\\">\\n<li>String操作</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"3\\">\\n<li>List操作</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"4\\">\\n<li>Tuple操作</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"5\\">\\n<li>Set操作</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"6\\">\\n<li>Dictionary操作</li>\\n</ol>\\n</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
