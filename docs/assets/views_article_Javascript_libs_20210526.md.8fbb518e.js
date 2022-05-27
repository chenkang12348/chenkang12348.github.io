import{_ as n,c as a,o as s,e as p}from"./app.5f77e5d0.js";const g='{"title":"array.groupBy","description":"","frontmatter":{"title":"array.groupBy","theme":"default","tag":"Javascript","time":"2021.05.26"},"headers":[{"level":2,"title":"array.groupBy","slug":"array-groupby"},{"level":2,"title":"END","slug":"end"}],"relativePath":"views/article/Javascript/libs/20210526.md"}',t={},e=p(`<h2 id="array-groupby" tabindex="-1">array.groupBy <a class="header-anchor" href="#array-groupby" aria-hidden="true">#</a></h2><blockquote><p>\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u5458\u5DE5\u5217\u8868\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5458\u5DE5\u90FD\u662F\u4E00\u4E2A\u5177\u6709 2 \u4E2A\u5C5E\u6027\u7684\u5BF9\u8C61\uFF1Aname \u548C age\u3002</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> people <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Max&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jane&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u6309 age \u5206\u7C7B\uFF0C\u6700\u7EC8\u5B9E\u73B0\u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\uFF1A</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> groupedPeople <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">20</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Max&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Jane&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token number">21</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>\u901A\u5E38\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 array.reduce()\uFF0Creduce() \u65B9\u6CD5\u5BF9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u6309\u5E8F\u6267\u884C\u4E00\u4E2A\u7531\u60A8\u63D0\u4F9B\u7684 reducer \u51FD\u6570\uFF0C\u6BCF\u4E00\u6B21\u8FD0\u884C reducer \u4F1A\u5C06\u5148\u524D\u5143\u7D20\u7684\u8BA1\u7B97\u7ED3\u679C\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165\uFF0C\u6700\u540E\u5C06\u5176\u7ED3\u679C\u6C47\u603B\u4E3A\u5355\u4E2A\u8FD4\u56DE\u503C\u3002\u9274\u4E8E\u6B64\uFF0C\u53EF\u4EE5\u501F\u5176\u5B9E\u73B0\u4E00\u4E2A groupBy \u51FD\u6570\uFF1A</p></blockquote><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token parameter">objectArray<span class="token punctuation">,</span> property</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> objectArray<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> key <span class="token operator">=</span> obj<span class="token punctuation">[</span>property<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>acc<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      acc<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    acc<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token keyword">return</span> acc
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> groupedPeople <span class="token operator">=</span> <span class="token function">groupBy</span><span class="token punctuation">(</span>people<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>groupedPeople<span class="token punctuation">)</span>
<span class="token comment">// {</span>
<span class="token comment">//   20: [</span>
<span class="token comment">//     { name: &#39;Max&#39;, age: 20 },</span>
<span class="token comment">//     { name: &#39;Jane&#39;, age: 20 }</span>
<span class="token comment">//   ],</span>
<span class="token comment">//   21: [</span>
<span class="token comment">//    { name: &#39;Alice&#39;, age: 21 }</span>
<span class="token comment">//   ]</span>
<span class="token comment">// }</span>
</code></pre></div><blockquote><p>\u4E3A\u4E86\u7B80\u5316\u6211\u4EEC\u7684\u4EE3\u7801\uFF0C\u6570\u7EC4\u53C8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B0\u7684\u65B9\u6CD5\u6765\u5BF9\u6570\u7EC4\u6309\u5C5E\u6027\u8FDB\u884C\u5206\u7C7B\uFF1AArray.prototype.groupBy()\u3002</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> groupedPeople <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> age<span class="token punctuation">)</span>
<span class="token comment">// groupedPeople is:</span>
<span class="token comment">// {</span>
<span class="token comment">//   20: [</span>
<span class="token comment">//     { name: &#39;Max&#39;, age: 20 },</span>
<span class="token comment">//     { name: &#39;Jane&#39;, age: 20 }</span>
<span class="token comment">//   ],</span>
<span class="token comment">//   21: [</span>
<span class="token comment">//    { name: &#39;Alice&#39;, age: 21 }</span>
<span class="token comment">//   ]</span>
<span class="token comment">// }</span>
</code></pre></div><blockquote><p>\u540C\u65F6\u4E5F\u652F\u6301\u6309\u6761\u4EF6\u81EA\u5B9A\u4E49\u5206\u7C7B\uFF1A</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> groupedPeople <span class="token operator">=</span> people<span class="token punctuation">.</span><span class="token function">groupBy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> age <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token operator">?</span> <span class="token string">&#39;a&#39;</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// groupedPeople is:</span>
<span class="token comment">// {</span>
<span class="token comment">//   &#39;a&#39;: [</span>
<span class="token comment">//     { name: &#39;Max&#39;, age: 20 },</span>
<span class="token comment">//     { name: &#39;Jane&#39;, age: 20 }</span>
<span class="token comment">//   ],</span>
<span class="token comment">//   &#39;b&#39;: [</span>
<span class="token comment">//    { name: &#39;Alice&#39;, age: 21 }</span>
<span class="token comment">//   ]</span>
<span class="token comment">// }</span>
</code></pre></div><p>\u975E\u5E38\u597D\u7528~\uFF01</p><h2 id="end" tabindex="-1">END <a class="header-anchor" href="#end" aria-hidden="true">#</a></h2><hr>`,14),o=[e];function c(l,r,u,k,i,m){return s(),a("div",null,o)}var y=n(t,[["render",c]]);export{g as __pageData,y as default};
