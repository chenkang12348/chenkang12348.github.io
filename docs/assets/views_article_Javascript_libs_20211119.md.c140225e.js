import{_ as n,c as a,o as s,e as t}from"./app.5f77e5d0.js";const m='{"title":"\u5DE7\u7528Math","description":"","frontmatter":{"itle":"\u5DE7\u7528Math","theme":"default","tag":"Javascript","time":"2021.11.19"},"headers":[{"level":2,"title":"\u5DE7\u7528Math","slug":"\u5DE7\u7528math"},{"level":3,"title":"\u5C0F\u6570\u56DB\u820D\u4E94\u5165","slug":"\u5C0F\u6570\u56DB\u820D\u4E94\u5165"},{"level":3,"title":"\u6574\u6570\u56DB\u820D\u4E94\u5165","slug":"\u6574\u6570\u56DB\u820D\u4E94\u5165"},{"level":3,"title":"\u6574\u6570\u4E2A\u4F4D\u6709\u503C\u5341\u8FDB\u4E00","slug":"\u6574\u6570\u4E2A\u4F4D\u6709\u503C\u5341\u8FDB\u4E00"},{"level":2,"title":"END","slug":"end"}],"relativePath":"views/article/Javascript/libs/20211119.md"}',p={},e=t(`<h2 id="\u5DE7\u7528math" tabindex="-1">\u5DE7\u7528Math <a class="header-anchor" href="#\u5DE7\u7528math" aria-hidden="true">#</a></h2><h3 id="\u5C0F\u6570\u56DB\u820D\u4E94\u5165" tabindex="-1">\u5C0F\u6570\u56DB\u820D\u4E94\u5165 <a class="header-anchor" href="#\u5C0F\u6570\u56DB\u820D\u4E94\u5165" aria-hidden="true">#</a></h3><p>\u56DB\u820D\u4E94\u5165\u53EF\u4EE5\u4F7F\u7528 toFixed() \u65B9\u6CD5\uFF0CtoFixed() \u65B9\u6CD5\u53EF\u628A Number \u56DB\u820D\u4E94\u5165\u4E3A\u6307\u5B9A\u5C0F\u6570\u4F4D\u6570\u7684\u6570\u5B57\u3002</p><div class="language-js"><pre><code><span class="token keyword">var</span> num <span class="token operator">=</span><span class="token number">2.446242342</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u8F93\u51FA\u7ED3\u679C\u4E3A 2.45</span>
</code></pre></div><p>\u53E6\u5916\u50CF round()&lt;\u56DB\u820D\u4E94\u5165&gt;\u3001floor()&lt;\u5411\u4E0B\u53D6\u6574&gt;\u3001ceil()&lt;\u5411\u4E0A\u53D6\u6574&gt; \u7B49\u90FD\u4E0D\u80FD\u771F\u6B63\u7684\u56DB\u820D\u4E94\u5165\uFF0C\u6709\u7CBE\u5EA6\u95EE\u9898\u3002</p><p>round() \u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u786E\u4FDD\u7CBE\u5EA6\u662F\u6B63\u786E\u7684\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> num <span class="token operator">=</span><span class="token number">2.446242342</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">;</span>  <span class="token comment">// \u8F93\u51FA\u7ED3\u679C\u4E3A 2.45</span>
</code></pre></div><h3 id="\u6574\u6570\u56DB\u820D\u4E94\u5165" tabindex="-1">\u6574\u6570\u56DB\u820D\u4E94\u5165 <a class="header-anchor" href="#\u6574\u6570\u56DB\u820D\u4E94\u5165" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">toCeil</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>num<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">else</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token number">1</span> <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6574\u6570\u4E2A\u4F4D\u6709\u503C\u5341\u8FDB\u4E00" tabindex="-1">\u6574\u6570\u4E2A\u4F4D\u6709\u503C\u5341\u8FDB\u4E00 <a class="header-anchor" href="#\u6574\u6570\u4E2A\u4F4D\u6709\u503C\u5341\u8FDB\u4E00" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">toCeil</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>num<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  <span class="token keyword">else</span> <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token number">1</span> <span class="token operator">+</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="end" tabindex="-1">END <a class="header-anchor" href="#end" aria-hidden="true">#</a></h2><hr>`,13),o=[e];function c(l,u,r,i,k,d){return s(),a("div",null,o)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
