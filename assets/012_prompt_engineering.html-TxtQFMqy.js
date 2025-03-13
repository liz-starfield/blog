import{_ as a,a as o}from"./012_iterative_prompt-G1vt2s1h.js";import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as s,c as u,f as d,a as e,b as i,d as c,e as t}from"./app-cafaW3Tc.js";const p={},h=t('<h1 id="prompt-engineering" tabindex="-1"><a class="header-anchor" href="#prompt-engineering" aria-hidden="true">#</a> Prompt Engineering</h1><blockquote><p>No matter what AI tools you use, it&#39;s essential to leverage LLMs effectively, with the key point being writing good prompts.</p></blockquote><ul><li><ol><li>Structure of Prompts</li></ol></li><li><ol start="2"><li>Two Key Principles of Prompting</li></ol></li><li><ol start="3"><li>Iterative Prompt Optimization</li></ol></li><li><ol start="4"><li>Prompt Engineering Techniques</li></ol></li></ul>',3),m=t('<h2 id="_1-structure-of-prompts" tabindex="-1"><a class="header-anchor" href="#_1-structure-of-prompts" aria-hidden="true">#</a> 1. Structure of Prompts</h2><ul><li>Instruction: Describe what you want the model to do. <ul><li>Persona: Role, behavior, areas of expertise</li><li>Task</li><li>Considerations: What can be done, what cannot be done</li></ul></li><li>Context: <ul><li>Provide background information relevant to the task</li><li>Retrieval: Information retrieved in a RAG scenario</li><li>History: History of multi-turn dialogues</li></ul></li><li>Examples: Provide examples to guide the model&#39;s responses</li><li>Input: The input information for the task (Query)</li><li>Output: The format of the output, what type of output is desired</li></ul><h2 id="_2-two-key-principles-of-prompting" tabindex="-1"><a class="header-anchor" href="#_2-two-key-principles-of-prompting" aria-hidden="true">#</a> 2. Two Key Principles of Prompting</h2><h3 id="principle-1-write-clear-and-specific-instructions" tabindex="-1"><a class="header-anchor" href="#principle-1-write-clear-and-specific-instructions" aria-hidden="true">#</a> Principle 1：Write clear and specific instructions</h3><ul><li>Write clear and specific instructions, avoiding any ambiguity for the LLM, and provide details. <ul><li>Tip 1: Use delimiters or headings to clearly indicate different parts of the input. <ul><li>This makes instructions clear and avoids conflicts.</li><li>Avoiding prompt instruction injection, such as user inputs like &quot;forget previous instructions.&quot;</li><li>examples: <ul><li>Titles: ###</li><li>Triple quotes: &quot;&quot;&quot;</li><li>Triple backticks: ```</li><li>Triple dashes: ---</li><li>Angle brackets: &lt;&gt;</li><li>XML tags: &lt;tag&gt;&lt;/tag&gt;</li></ul></li></ul></li><li>Tip 2: Ask for structured output <ul><li>examples: <ul><li>HTML</li><li>JSON</li><li>Markdown</li></ul></li></ul></li><li>Tip 3: Few-shot prompting <ul><li>Give successful examples of completing tasks</li><li>Specify the desired outcomes (acceptance criteria)</li></ul></li></ul></li></ul><figure><img src="'+a+'" alt="Avoiding Prompt Injection" tabindex="0" loading="lazy"><figcaption>Avoiding Prompt Injection</figcaption></figure><h3 id="principle-2-give-the-model-time-to-think" tabindex="-1"><a class="header-anchor" href="#principle-2-give-the-model-time-to-think" aria-hidden="true">#</a> Principle 2：Give the model time to think</h3><ul><li>Give the model time to think <ul><li>Tip 1: Provide each specific step to complete a task <ul><li>example: <ul><li>step 1:... step 2:... step N:...</li></ul></li></ul></li><li>Tip 2: Instruct the model to decompose the task into subtasks and outline the thought process, thinking through each step</li></ul></li></ul><h2 id="_3-iterative-prompt-optimization" tabindex="-1"><a class="header-anchor" href="#_3-iterative-prompt-optimization" aria-hidden="true">#</a> 3. Iterative Prompt Optimization</h2><blockquote><p>Good prompts need continuous refinement.</p></blockquote><blockquote><p>There is no perfect prompt that fits all scenarios; it requires repeated attempts to optimize for specific contexts.</p></blockquote><ul><li>Try: start by writing a prompt and see what happens</li><li>Analyze: analyze why result dose not give desired output <ul><li>clarify instructions?</li><li>give more time to think?</li></ul></li><li>Refine: Gradually improve the prompt to get closer to the desired result, even changing the approach or method to solving the problem.</li><li>Evaluate: Assess based on a batch of cases.</li><li>Repeat: Iterate multiple times until a suitable prompt is found.</li></ul><figure><img src="'+o+`" alt="Iterative Prompt Optimization" tabindex="0" loading="lazy"><figcaption>Iterative Prompt Optimization</figcaption></figure><h2 id="_4-prompt-engineering-techniques" tabindex="-1"><a class="header-anchor" href="#_4-prompt-engineering-techniques" aria-hidden="true">#</a> 4. Prompt Engineering Techniques</h2><h3 id="_4-1-xxx-shot-providing-examples" tabindex="-1"><a class="header-anchor" href="#_4-1-xxx-shot-providing-examples" aria-hidden="true">#</a> 4.1. xxx-shot: Providing Examples</h3><p>Use a few examples to fine-tune the LLM.</p><ul><li>Zero-shot learning: No examples given.</li><li>One-shot learning: Only one example provided.</li><li>Few-shot learning: Multiple examples provided.</li></ul><p>Considerations:</p><ul><li>How many examples should be provided? It is recommended not to exceed 5-10 examples.</li><li>What if many examples do not work? Consider fine-tuning, which can also be viewed as using many examples to alter the behavior of the LLM.</li></ul><h3 id="_4-2-chain-of-thoughts-cot" tabindex="-1"><a class="header-anchor" href="#_4-2-chain-of-thoughts-cot" aria-hidden="true">#</a> 4.2. Chain of Thoughts (CoT)</h3><p>Guide the model to think step by step through the analysis.</p><p>Encourage the model to analyze by breaking down large problems into smaller ones:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Let&#39;s think step by step.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is particularly important for problems that require reasoning.</p><h3 id="_4-3-few-shot-cot" tabindex="-1"><a class="header-anchor" href="#_4-3-few-shot-cot" aria-hidden="true">#</a> 4.3. Few-shot + CoT</h3><p>For examples that require reasoning—those that are not immediately clear—it&#39;s best to provide an analysis process and additional guidance, rather than just presenting the result. This can enhance performance.</p><h3 id="_4-4-self-consistency" tabindex="-1"><a class="header-anchor" href="#_4-4-self-consistency" aria-hidden="true">#</a> 4.4. Self-consistency</h3><p>Few-shot + CoT + multi-path reasoning consistency.</p><p>Sample multiple different reasoning paths and choose the most consistent answer based on generated results.</p><h2 id="_5-accumulation" tabindex="-1"><a class="header-anchor" href="#_5-accumulation" aria-hidden="true">#</a> 5. Accumulation</h2><ul><li>Represent varying parts of the prompt with variables. <ul><li>Use delimiters or headings to organize content into sections, making it easier for the model to understand:</li></ul></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{instruction}

### Context
&quot;&quot;&quot;{context}&quot;&quot;&quot;

### Query
&quot;&quot;&quot;{query}&quot;&quot;&quot;

### Output
&quot;&quot;&quot;{output}&quot;&quot;&quot;

### Examples
&quot;&quot;&quot;{examples}&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>To reduce hallucinations, provide specific instructions in the prompt:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>If you are unsure of the answer, please respond with &quot;I am not sure.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Use &quot;you&quot; to define the model&#39;s role and behavior:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>You are an expert in xxx, proficient in xxx.

You have the following skills in xxx:
1.xxx
2.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Set up a dialogue flow that goes beyond a single turn of conversation, such as simulating an interview, establishing a series of steps for the dialogue:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### Pre-conversation Questions
1.Ask the user to provide their resume.
2.Ask the user for the position they are interviewing for.
3.Ask the user for the role of the interviewer.
4.Inquire how many questions the user wants to ask.
5. ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-high-quality-prompts" tabindex="-1"><a class="header-anchor" href="#_6-high-quality-prompts" aria-hidden="true">#</a> 6. High Quality Prompts</h2>`,39),g={href:"https://smith.langchain.com/hub",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"_7-reference",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_7-reference","aria-hidden":"true"},"#"),i(" 7. Reference")],-1),f=e("p",null,"https://www.promptingguide.ai/",-1);function b(x,_){const n=r("ExternalLinkIcon");return s(),u("div",null,[h,d(" more "),m,e("p",null,[e("a",g,[i("LangChain Hub Prompts：https://smith.langchain.com/hub"),c(n)])]),v,f])}const w=l(p,[["render",b],["__file","012_prompt_engineering.html.vue"]]);export{w as default};
