import{_ as a,c as n,o as s,e as p}from"./app.5f77e5d0.js";const f='{"title":"array.flatMap()","description":"","frontmatter":{"title":"array.flatMap()","theme":"default","tag":"Javascript","time":"2021.05.24"},"headers":[{"level":2,"title":"array.flatMap()","slug":"array-flatmap"},{"level":2,"title":"END","slug":"end"}],"relativePath":"views/article/Javascript/libs/20210524.md"}',t={},o=p(`<h2 id="array-flatmap" tabindex="-1">array.flatMap() <a class="header-anchor" href="#array-flatmap" aria-hidden="true">#</a></h2><blockquote><p>map() \u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u8FD9\u4E2A\u65B0\u6570\u7EC4\u7531\u539F\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u8C03\u7528\u4E00\u6B21\u63D0\u4F9B\u7684\u51FD\u6570\u540E\u7684\u8FD4\u56DE\u503C\u7EC4\u6210\u3002</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// pass a function to map</span>
<span class="token keyword">const</span> map1 <span class="token operator">=</span> array1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: Array [2, 8, 18, 32]</span>
</code></pre></div><blockquote><p>\u4F46\u6709\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u8DF3\u8FC7\u6570\u7EC4\u4E2D\u7684\u67D0\u4E9B\u5143\u7D20\uFF0C\u4EE5\u4E0A\u9762\u7684\u4F8B\u5B50\u4E3A\u4F8B\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u8DF3\u8FC7\u5143\u7D20 1 \u65F6\uFF0C\u53EF\u4EE5\u7ED3\u5408 filter \u65B9\u6CD5\uFF1A</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// pass a function to map</span>
<span class="token keyword">const</span> map1 <span class="token operator">=</span> array1
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">!==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: Array [8, 18, 32]</span>
</code></pre></div><p><strong><mark>flatMap</mark></strong></p><blockquote><p>flatMap() \u65B9\u6CD5\u9996\u5148\u4F7F\u7528\u6620\u5C04\u51FD\u6570\u6620\u5C04\u6BCF\u4E2A\u5143\u7D20\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u538B\u7F29\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002\u5B83\u4E0E map \u8FDE\u7740\u6DF1\u5EA6\u503C\u4E3A 1 \u7684 flat \u51E0\u4E4E\u76F8\u540C\uFF0C\u4F46 flatMap \u901A\u5E38\u5728\u5408\u5E76\u6210\u4E00\u79CD\u65B9\u6CD5\u7684\u6548\u7387\u7A0D\u5FAE\u9AD8\u4E00\u4E9B\u3002</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// pass a function to map</span>
<span class="token keyword">const</span> map1 <span class="token operator">=</span> array1<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">===</span> <span class="token number">1</span><span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span><span class="token punctuation">[</span> x<span class="token operator">*</span><span class="token number">2</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: Array [8, 18, 32]</span>
</code></pre></div><blockquote><p>flatMap \u80FD\u7528\u4E8E\u5728map\u671F\u95F4\u589E\u5220\u9879\u76EE\uFF08\u4E5F\u5C31\u662F\u4FEE\u6539items\u7684\u6570\u91CF\uFF09\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5B83\u5141\u8BB8\u4F60\u904D\u5386\u5F88\u591A\u9879\u4F7F\u4E4B\u6210\u4E3A\u53E6\u4E00\u4E9B\u9879\uFF08\u9760\u5206\u522B\u628A\u5B83\u4EEC\u653E\u8FDB\u53BB\u6765\u5904\u7406\uFF09\uFF0C\u800C\u4E0D\u662F\u603B\u662F\u4E00\u5BF9\u4E00\u3002\u4ECE\u8FD9\u4E2A\u610F\u4E49\u4E0A\u8BB2\uFF0C\u5B83\u7684\u4F5C\u7528\u7C7B\u4F3C\u4E8E filter\u7684\u5BF9\u7ACB\u9762\u3002\u53EA\u9700\u8FD4\u56DE\u4E00\u4E2A1\u9879\u5143\u7D20\u6570\u7EC4\u4EE5\u4FDD\u7559\u8BE5\u9879\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u591A\u5143\u7D20\u6570\u7EC4\u4EE5\u6DFB\u52A0\u9879\uFF0C\u6216\u8FD4\u56DE\u4E00\u4E2A0\u9879\u5143\u7D20\u6570\u7EC4\u4EE5\u5220\u9664\u8BE5\u9879</p></blockquote><h2 id="end" tabindex="-1">END <a class="header-anchor" href="#end" aria-hidden="true">#</a></h2><hr>`,11),e=[o];function c(l,u,r,k,i,m){return s(),n("div",null,e)}var b=a(t,[["render",c]]);export{f as __pageData,b as default};
