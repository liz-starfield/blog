import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,f as e,e as s}from"./app-X4vcxH6J.js";const p={},o=s('<h1 id="building-conversational-applications-with-streamlit" tabindex="-1"><a class="header-anchor" href="#building-conversational-applications-with-streamlit" aria-hidden="true">#</a> Building Conversational Applications with Streamlit</h1><ul><li><ol><li>Components Required for Constructing a Dialogue Interface</li></ol></li><li><ol start="2"><li>Complete Process of Dialogue Interface</li></ol></li><li><ol start="3"><li>Refactoring for Streaming Output of Assistant Messages</li></ol></li><li><ol start="4"><li>Building an Application that Encapsulates ChatGPT</li></ol></li></ul>',2),i=s(`<h2 id="_1-components-required-for-constructing-a-dialogue-interface" tabindex="-1"><a class="header-anchor" href="#_1-components-required-for-constructing-a-dialogue-interface" aria-hidden="true">#</a> 1. Components Required for Constructing a Dialogue Interface</h2><ul><li><ol><li>Two chat message containers: to display messages from the user and the robot respectively.</li></ol></li><li><ol start="2"><li>Chat input widget: for the user to input messages.</li></ol></li><li><ol start="3"><li>A list to store chat history messages: appended to this list each time a message is sent by the user or the robot.</li></ol></li></ul><h3 id="_1-1-st-chat-message-chat-message-container-displays-chat-messages-from-both-parties" tabindex="-1"><a class="header-anchor" href="#_1-1-st-chat-message-chat-message-container-displays-chat-messages-from-both-parties" aria-hidden="true">#</a> 1.1. st.chat_message Chat message container, displays chat messages from both parties</h3><ul><li>Can include any Streamlit elements, including charts, tables, text, etc.</li><li>To add elements to the returned container, you can use the <code>with</code> statement or call methods directly.</li></ul><h3 id="_1-2-st-chat-input-chat-input-component-user-inputs-messages" tabindex="-1"><a class="header-anchor" href="#_1-2-st-chat-input-chat-input-component-user-inputs-messages" aria-hidden="true">#</a> 1.2. st.chat_input Chat input component, user inputs messages</h3><ul><li>The return value is the user&#39;s input.</li><li>A default prompt can be passed to display in the input box.</li></ul><h3 id="_1-3-st-session-state-messages-chat-history-message-list" tabindex="-1"><a class="header-anchor" href="#_1-3-st-session-state-messages-chat-history-message-list" aria-hidden="true">#</a> 1.3. st.session_state.messages Chat history message list</h3><ul><li>Each entry in the list contains two pieces of information: role and message content.</li></ul><h2 id="_2-complete-process-of-dialogue-interface" tabindex="-1"><a class="header-anchor" href="#_2-complete-process-of-dialogue-interface" aria-hidden="true">#</a> 2. Complete Process of Dialogue Interface</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> streamlit <span class="token keyword">as</span> st

st<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;Chat Bot&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Initialize chat history</span>
<span class="token keyword">if</span> <span class="token string">&quot;messages&quot;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> st<span class="token punctuation">.</span>session_state<span class="token punctuation">:</span>
    st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment"># Display chat messages from history</span>
<span class="token keyword">for</span> message <span class="token keyword">in</span> st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages<span class="token punctuation">:</span>
    <span class="token keyword">with</span> st<span class="token punctuation">.</span>chat_message<span class="token punctuation">(</span>message<span class="token punctuation">[</span><span class="token string">&#39;role&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        st<span class="token punctuation">.</span>markdown<span class="token punctuation">(</span>message<span class="token punctuation">[</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># React to user input</span>
<span class="token keyword">if</span> prompt <span class="token operator">:=</span> st<span class="token punctuation">.</span>chat_input<span class="token punctuation">(</span><span class="token string">&quot;Ask me anything!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Display user message in chat message container</span>
    <span class="token keyword">with</span> st<span class="token punctuation">.</span>chat_message<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        st<span class="token punctuation">.</span>markdown<span class="token punctuation">(</span>prompt<span class="token punctuation">)</span>

    <span class="token comment"># Add user message to chat history</span>
    st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> prompt<span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    response <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;Echo: </span><span class="token interpolation"><span class="token punctuation">{</span>prompt<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>

    <span class="token comment"># Display assistant response in chat message container</span>
    <span class="token keyword">with</span> st<span class="token punctuation">.</span>chat_message<span class="token punctuation">(</span><span class="token string">&quot;assistant&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        st<span class="token punctuation">.</span>markdown<span class="token punctuation">(</span>response<span class="token punctuation">)</span>

    <span class="token comment"># Add assistant response to chat history</span>
    st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;assistant&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;response&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-refactoring-for-streaming-output-of-assistant-messages" tabindex="-1"><a class="header-anchor" href="#_3-refactoring-for-streaming-output-of-assistant-messages" aria-hidden="true">#</a> 3. Refactoring for Streaming Output of Assistant Messages</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Streamd response emulator</span>
<span class="token keyword">def</span> <span class="token function">response_generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># response example</span>
    response <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;Streamlit is an open-source Python library that makes it easy to create and share beautiful, custom web apps for machine learning and data science. In just a few minutes you can build and deploy powerful data apps. So let&#39;s get started!&quot;</span></span>

    <span class="token keyword">for</span> word <span class="token keyword">in</span> response<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> word <span class="token operator">+</span> <span class="token string">&quot; &quot;</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Display assistant response in chat message container</span>
<span class="token keyword">with</span> st<span class="token punctuation">.</span>chat_message<span class="token punctuation">(</span><span class="token string">&quot;assistant&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> st<span class="token punctuation">.</span>write_stream<span class="token punctuation">(</span>response_generator<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-building-an-application-that-encapsulates-chatgpt" tabindex="-1"><a class="header-anchor" href="#_4-building-an-application-that-encapsulates-chatgpt" aria-hidden="true">#</a> 4. Building an Application that Encapsulates ChatGPT</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> openai <span class="token keyword">import</span> OpenAI
<span class="token keyword">import</span> streamlit <span class="token keyword">as</span> st

st<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;ChatGPT-like clone&quot;</span><span class="token punctuation">)</span>

client <span class="token operator">=</span> OpenAI<span class="token punctuation">(</span>api_key<span class="token operator">=</span>st<span class="token punctuation">.</span>secrets<span class="token punctuation">[</span><span class="token string">&quot;OPENAI_API_KEY&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token string">&quot;openai_model&quot;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> st<span class="token punctuation">.</span>session_state<span class="token punctuation">:</span>
    st<span class="token punctuation">.</span>session_state<span class="token punctuation">[</span><span class="token string">&quot;openai_model&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;gpt-3.5-turbo&quot;</span>

<span class="token keyword">if</span> <span class="token string">&quot;messages&quot;</span> <span class="token keyword">not</span> <span class="token keyword">in</span> st<span class="token punctuation">.</span>session_state<span class="token punctuation">:</span>
    st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> message <span class="token keyword">in</span> st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages<span class="token punctuation">:</span>
    <span class="token keyword">with</span> st<span class="token punctuation">.</span>chat_message<span class="token punctuation">(</span>message<span class="token punctuation">[</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        st<span class="token punctuation">.</span>markdown<span class="token punctuation">(</span>message<span class="token punctuation">[</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> prompt <span class="token operator">:=</span> st<span class="token punctuation">.</span>chat_input<span class="token punctuation">(</span><span class="token string">&quot;What is up?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> prompt<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">with</span> st<span class="token punctuation">.</span>chat_message<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        st<span class="token punctuation">.</span>markdown<span class="token punctuation">(</span>prompt<span class="token punctuation">)</span>

    <span class="token keyword">with</span> st<span class="token punctuation">.</span>chat_message<span class="token punctuation">(</span><span class="token string">&quot;assistant&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        stream <span class="token operator">=</span> client<span class="token punctuation">.</span>chat<span class="token punctuation">.</span>completions<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
            model<span class="token operator">=</span>st<span class="token punctuation">.</span>session_state<span class="token punctuation">[</span><span class="token string">&quot;openai_model&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            messages<span class="token operator">=</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> m<span class="token punctuation">[</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> m<span class="token punctuation">[</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
                <span class="token keyword">for</span> m <span class="token keyword">in</span> st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            stream<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>
        response <span class="token operator">=</span> st<span class="token punctuation">.</span>write_stream<span class="token punctuation">(</span>stream<span class="token punctuation">)</span>
    st<span class="token punctuation">.</span>session_state<span class="token punctuation">.</span>messages<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;assistant&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> response<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function c(l,u){return a(),t("div",null,[o,e(" more "),i])}const k=n(p,[["render",c],["__file","003_streamlit.html.vue"]]);export{k as default};
