import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as d,a as e,b as r,e as s}from"./app-dpf1czaz.js";const l={},t=e("h1",{id:"图数据库-neo4j",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图数据库-neo4j","aria-hidden":"true"},"#"),r(" 图数据库 Neo4j")],-1),o=s(`<h2 id="_1-neo4j简介" tabindex="-1"><a class="header-anchor" href="#_1-neo4j简介" aria-hidden="true">#</a> 1. Neo4j简介</h2><p>Neo4j 是一款高性能的NoSQL图数据库，专注于存储和查询复杂关系数据。</p><p>图数据库是基于图论实现的一种NoSQL数据库，其数据存储结构和数据查询方式都是以图论为基础的。</p><p>特点</p><ul><li>数据模型：采用节点（Node）、关系（Relationship）和属性（Property）的图结构，能直观表示实体间的复杂连接</li><li>查询语言：支持 Cypher 声明式查询语言，简化图遍历操作</li><li>性能优势：通过免索引邻接等设计实现高效关系查询，尤其在深度遍历（如 K-Hop 查询）场景下，响应速度可比传统数据库快千倍</li><li>事务支持：完全兼容 ACID 事务，保障数据一致性</li></ul><h2 id="_2-mac-安装" tabindex="-1"><a class="header-anchor" href="#_2-mac-安装" aria-hidden="true">#</a> 2. Mac 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install neo4j
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-启动" tabindex="-1"><a class="header-anchor" href="#_3-启动" aria-hidden="true">#</a> 3. 启动</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>neo4j start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-重启" tabindex="-1"><a class="header-anchor" href="#_4-重启" aria-hidden="true">#</a> 4. 重启</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>neo4j restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-关闭" tabindex="-1"><a class="header-anchor" href="#_5-关闭" aria-hidden="true">#</a> 5. 关闭</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>neo4j stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-访问网页" tabindex="-1"><a class="header-anchor" href="#_6-访问网页" aria-hidden="true">#</a> 6. 访问网页</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost:7474/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认账户和密码均为neo4j</p><p>可自行设置新密码</p><h2 id="_7-安装apoc插件" tabindex="-1"><a class="header-anchor" href="#_7-安装apoc插件" aria-hidden="true">#</a> 7. 安装apoc插件</h2><p>1.查看版本，如版本2025.01.0</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>neo4j --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.在Github上下载对应版本的jar包 https://github.com/neo4j/apoc/releases</p><p>3.将jar包移到neo4j的plugins路径下面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Directories in use:
home:         /opt/homebrew/Cellar/neo4j/2025.01.0/libexec
config:       /opt/homebrew/Cellar/neo4j/2025.01.0/libexec/conf
logs:         /opt/homebrew/var/log/neo4j
plugins:      /opt/homebrew/Cellar/neo4j/2025.01.0/libexec/plugins
import:       /opt/homebrew/Cellar/neo4j/2025.01.0/libexec/import
data:         /opt/homebrew/var/neo4j/data
certificates: /opt/homebrew/Cellar/neo4j/2025.01.0/libexec/certificates
licenses:     /opt/homebrew/Cellar/neo4j/2025.01.0/libexec/licenses
run:          /opt/homebrew/Cellar/neo4j/2025.01.0/libexec/run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.修改conf路径下的neo4j.conf配置文件</p><p>添加如下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dbms.security.procedures.unrestricted=apoc.*
dbms.security.procedures.allowlist=apoc.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5.重启neo4j后验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RETURN apoc.version()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28);function c(u,v){return i(),n("div",null,[t,d(" more "),o])}const m=a(l,[["render",c],["__file","020_neo4j.html.vue"]]);export{m as default};
