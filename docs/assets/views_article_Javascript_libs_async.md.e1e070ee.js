import{_ as n,c as a,o as s,b as t}from"./app.d57216e0.js";const f='{"title":"ES6\u5F02\u6B65\u89E3\u51B3\u65B9\u6848async\u51FD\u6570","description":"","frontmatter":{"title":"ES6\u5F02\u6B65\u89E3\u51B3\u65B9\u6848async\u51FD\u6570","theme":"default","tag":"Javascript","time":"2020.6.15"},"headers":[{"level":2,"title":"ES6 \u5F02\u6B65\u89E3\u51B3\u65B9\u6848 async \u51FD\u6570","slug":"es6-\u5F02\u6B65\u89E3\u51B3\u65B9\u6848-async-\u51FD\u6570"},{"level":3,"title":"Generator \u51FD\u6570","slug":"generator-\u51FD\u6570"},{"level":3,"title":"async \u51FD\u6570","slug":"async-\u51FD\u6570"},{"level":3,"title":"async \u51FD\u6570\u7B80\u5355\u7528\u6CD5","slug":"async-\u51FD\u6570\u7B80\u5355\u7528\u6CD5"},{"level":3,"title":"async \u51FD\u6570\u7B80\u5355\u5B9E\u73B0\uFF08Generator \u51FD\u6570\uFF09","slug":"async-\u51FD\u6570\u7B80\u5355\u5B9E\u73B0\uFF08generator-\u51FD\u6570\uFF09"},{"level":3,"title":"\u6CE8\u610F","slug":"\u6CE8\u610F"}],"relativePath":"views/article/Javascript/libs/async.md"}',p={},o=t(`<h2 id="es6-\u5F02\u6B65\u89E3\u51B3\u65B9\u6848-async-\u51FD\u6570" tabindex="-1">ES6 \u5F02\u6B65\u89E3\u51B3\u65B9\u6848 async \u51FD\u6570 <a class="header-anchor" href="#es6-\u5F02\u6B65\u89E3\u51B3\u65B9\u6848-async-\u51FD\u6570" aria-hidden="true">#</a></h2><h3 id="generator-\u51FD\u6570" tabindex="-1">Generator \u51FD\u6570 <a class="header-anchor" href="#generator-\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u8981\u8BF4\u5230 async \u51FD\u6570\u5C31\u5F97\u4ECE Generator \u51FD\u6570\u8BF4\u8D77\uFF0CGenerator \u51FD\u6570\u662F ES6 \u63D0\u4F9B\u7684\u4E00\u79CD\u5F02\u6B65\u7F16\u7A0B\u89E3\u51B3\u65B9\u6848\uFF0C\u8BED\u6CD5\u884C\u4E3A\u4E0E\u4F20\u7EDF\u51FD\u6570\u5B8C\u5168\u4E0D\u540C\u3002Generator \u51FD\u6570\u6709\u591A\u79CD\u7406\u89E3\u89D2\u5EA6\u3002\u4ECE\u8BED\u6CD5\u4E0A\uFF0C\u9996\u5148\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u6210\uFF0CGenerator \u51FD\u6570\u662F\u4E00\u4E2A\u72B6\u6001\u673A\uFF0C\u5C01\u88C5\u4E86\u591A\u4E2A\u5185\u90E8\u72B6\u6001\u3002\u6267\u884C Generator \u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u904D\u5386\u5668\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0CGenerator \u51FD\u6570\u9664\u4E86\u72B6\u6001\u673A\uFF0C\u8FD8\u662F\u4E00\u4E2A\u904D\u5386\u5668\u5BF9\u8C61\u751F\u6210\u51FD\u6570\u3002\u8FD4\u56DE\u7684\u904D\u5386\u5668\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F9D\u6B21\u904D\u5386 Generator \u51FD\u6570\u5185\u90E8\u7684\u6BCF\u4E00\u4E2A\u72B6\u6001\u3002</p><p>\u5F62\u5F0F\u4E0A\uFF0CGenerator \u51FD\u6570\u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0C\u4F46\u662F\u6709\u4E24\u4E2A\u7279\u5F81\u3002\u4E00\u662F\uFF0Cfunction \u5173\u952E\u5B57\u4E0E\u51FD\u6570\u540D\u4E4B\u95F4\u6709\u4E00\u4E2A\u661F\u53F7\uFF1B\u4E8C\u662F\uFF0C\u51FD\u6570\u4F53\u5185\u90E8\u4F7F\u7528 yield \u8BED\u53E5\uFF0C\u5B9A\u4E49\u4E0D\u540C\u7684\u5185\u90E8\u72B6\u6001\uFF08yield \u8BED\u53E5\u5728\u82F1\u8BED\u91CC\u7684\u610F\u601D\u5C31\u662F\u201C\u4EA7\u51FA\u201D\uFF09\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">ImGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&#39;ending&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> fun <span class="token operator">=</span> <span class="token function">ImGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u5B9A\u4E49\u4E86\u4E00\u4E2A<strong>Generator</strong>\u51FD\u6570 ImGenerator\uFF0C\u5B83\u5185\u90E8\u6709\u4E24\u4E2A<strong>yield</strong>\u8BED\u53E5\u201Chello\u201D\u548C\u201Cworld\u201D\uFF0C\u5373\u8BE5\u51FD\u6570\u6709\u4E09\u4E2A\u72B6\u6001\uFF1Ahello\uFF0Cworld \u548C return \u8BED\u53E5\uFF08\u7ED3\u675F\u6267\u884C\uFF09\u3002</p><div class="language-js"><pre><code>fun<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { value: &#39;hello&#39;, done: false }</span>

fun<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { value: &#39;world&#39;, done: false }</span>

fun<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { value: &#39;ending&#39;, done: true }</span>

fun<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { value: undefined, done: true }</span>
</code></pre></div><p>Generator \u51FD\u6570\u7684\u8C03\u7528\u65B9\u6CD5\u4E0E\u666E\u901A\u51FD\u6570\u4E00\u6837\uFF0C\u4E5F\u662F\u5728\u51FD\u6570\u540D\u540E\u9762\u52A0\u4E0A\u4E00\u5BF9\u5706\u62EC\u53F7\u3002\u4E0D\u540C\u7684\u662F\uFF0C\u8C03\u7528 Generator \u51FD\u6570\u540E\uFF0C\u8BE5\u51FD\u6570\u5E76\u4E0D\u6267\u884C\uFF0C\u8FD4\u56DE\u7684\u4E5F\u4E0D\u662F\u51FD\u6570\u8FD0\u884C\u7ED3\u679C\uFF0C\u800C\u662F\u4E00\u4E2A\u6307\u5411\u5185\u90E8\u72B6\u6001\u7684\u6307\u9488\u5BF9\u8C61\u5FC5\u987B\u8C03\u7528\u904D\u5386\u5668\u5BF9\u8C61\u7684 next \u65B9\u6CD5\uFF0C\u4F7F\u5F97\u6307\u9488\u79FB\u5411\u4E0B\u4E00\u4E2A\u72B6\u6001\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6BCF\u6B21\u8C03\u7528 next \u65B9\u6CD5\uFF0C\u5185\u90E8\u6307\u9488\u5C31\u4ECE\u51FD\u6570\u5934\u90E8\u6216\u4E0A\u4E00\u6B21\u505C\u4E0B\u6765\u7684\u5730\u65B9\u5F00\u59CB\u6267\u884C\uFF0C\u76F4\u5230\u9047\u5230\u4E0B\u4E00\u4E2A yield \u8BED\u53E5\uFF08\u6216 return \u8BED\u53E5\uFF09\u4E3A\u6B62\u3002\u6362\u8A00\u4E4B\uFF0CGenerator \u51FD\u6570\u662F\u5206\u6BB5\u6267\u884C\u7684\uFF0Cyield \u8BED\u53E5\u662F\u6682\u505C\u6267\u884C\u7684\u6807\u8BB0\uFF0C\u800C next \u65B9\u6CD5\u53EF\u4EE5\u6062\u590D\u6267\u884C\u3002</p><p><strong>yield \u8BED\u53E5</strong>,\u7531\u4E8E Generator \u51FD\u6570\u8FD4\u56DE\u7684\u904D\u5386\u5668\u5BF9\u8C61\uFF0C\u53EA\u6709\u8C03\u7528 next \u65B9\u6CD5\u624D\u4F1A\u904D\u5386\u4E0B\u4E00\u4E2A\u5185\u90E8\u72B6\u6001\uFF0C\u6240\u4EE5\u5176\u5B9E\u63D0\u4F9B\u4E86\u4E00\u79CD\u53EF\u4EE5\u6682\u505C\u6267\u884C\u7684\u51FD\u6570\u3002yield \u8BED\u53E5\u5C31\u662F\u6682\u505C\u6807\u5FD7\u3002</p><p>\uFF081\uFF09\u9047\u5230 yield \u8BED\u53E5\uFF0C\u5C31\u6682\u505C\u6267\u884C\u540E\u9762\u7684\u64CD\u4F5C\uFF0C\u5E76\u5C06\u7D27\u8DDF\u5728 yield \u540E\u9762\u7684\u90A3\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u4F5C\u4E3A\u8FD4\u56DE\u7684\u5BF9\u8C61\u7684 value \u5C5E\u6027\u503C\u3002</p><p>\uFF082\uFF09\u4E0B\u4E00\u6B21\u8C03\u7528 next \u65B9\u6CD5\u65F6\uFF0C\u518D\u7EE7\u7EED\u5F80\u4E0B\u6267\u884C\uFF0C\u76F4\u5230\u9047\u5230\u4E0B\u4E00\u4E2A yield \u8BED\u53E5\u3002</p><p>\uFF083\uFF09\u5982\u679C\u6CA1\u6709\u518D\u9047\u5230\u65B0\u7684 yield \u8BED\u53E5\uFF0C\u5C31\u4E00\u76F4\u8FD0\u884C\u5230\u51FD\u6570\u7ED3\u675F\uFF0C\u76F4\u5230 return \u8BED\u53E5\u4E3A\u6B62\uFF0C\u5E76\u5C06 return \u8BED\u53E5\u540E\u9762\u7684\u8868\u8FBE\u5F0F\u7684\u503C\uFF0C\u4F5C\u4E3A\u8FD4\u56DE\u7684\u5BF9\u8C61\u7684 value \u5C5E\u6027\u503C\u3002</p><p>\uFF084\uFF09\u5982\u679C\u8BE5\u51FD\u6570\u6CA1\u6709 return \u8BED\u53E5\uFF0C\u5219\u8FD4\u56DE\u7684\u5BF9\u8C61\u7684 value \u5C5E\u6027\u503C\u4E3A undefined\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token number">123</span> <span class="token operator">+</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0Cyield \u540E\u9762\u7684\u8868\u8FBE\u5F0F 123 + 456\uFF0C\u4E0D\u4F1A\u7ACB\u5373\u6C42\u503C\uFF0C\u53EA\u4F1A\u5728 next \u65B9\u6CD5\u5C06\u6307\u9488\u79FB\u5230\u8FD9\u4E00\u53E5\u65F6\uFF0C\u624D\u4F1A\u6C42\u503C\u3002yield \u8BED\u53E5\u540E\u9762\u7684\u8868\u8FBE\u5F0F\uFF0C\u53EA\u6709\u5F53\u8C03\u7528 next \u65B9\u6CD5\u3001\u5185\u90E8\u6307\u9488\u6307\u5411\u8BE5\u8BED\u53E5\u65F6\u624D\u4F1A\u6267\u884C\uFF0C\u56E0\u6B64\u7B49\u4E8E\u4E3A JavaScript \u63D0\u4F9B\u4E86\u624B\u52A8\u7684\u201C\u60F0\u6027\u6C42\u503C\u201D\uFF08Lazy Evaluation\uFF09\u7684\u8BED\u6CD5\u529F\u80FD\u3002</p><p>yield \u8BED\u53E5\u4E0E return \u8BED\u53E5\u65E2\u6709\u76F8\u4F3C\u4E4B\u5904\uFF0C\u4E5F\u6709\u533A\u522B\u3002\u76F8\u4F3C\u4E4B\u5904\u5728\u4E8E\uFF0C\u90FD\u80FD\u8FD4\u56DE\u7D27\u8DDF\u5728\u8BED\u53E5\u540E\u9762\u7684\u90A3\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u3002\u533A\u522B\u5728\u4E8E\u6BCF\u6B21\u9047\u5230 yield\uFF0C\u51FD\u6570\u6682\u505C\u6267\u884C\uFF0C\u4E0B\u4E00\u6B21\u518D\u4ECE\u8BE5\u4F4D\u7F6E\u7EE7\u7EED\u5411\u540E\u6267\u884C\uFF0C\u800C return \u8BED\u53E5\u4E0D\u5177\u5907\u4F4D\u7F6E\u8BB0\u5FC6\u7684\u529F\u80FD\u3002\u4E00\u4E2A\u51FD\u6570\u91CC\u9762\uFF0C\u53EA\u80FD\u6267\u884C\u4E00\u6B21\uFF08\u6216\u8005\u8BF4\u4E00\u4E2A\uFF09return \u8BED\u53E5\uFF0C\u4F46\u662F\u53EF\u4EE5\u6267\u884C\u591A\u6B21\uFF08\u6216\u8005\u8BF4\u591A\u4E2A\uFF09yield \u8BED\u53E5\u3002\u6B63\u5E38\u51FD\u6570\u53EA\u80FD\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u56E0\u4E3A\u53EA\u80FD\u6267\u884C\u4E00\u6B21 return\uFF1BGenerator \u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u7CFB\u5217\u7684\u503C\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u6709\u4EFB\u610F\u591A\u4E2A yield\u3002\u4ECE\u53E6\u4E00\u4E2A\u89D2\u5EA6\u770B\uFF0C\u4E5F\u53EF\u4EE5\u8BF4 Generator \u751F\u6210\u4E86\u4E00\u7CFB\u5217\u7684\u503C\uFF0C\u8FD9\u4E5F\u5C31\u662F\u5B83\u7684\u540D\u79F0\u7684\u6765\u5386\uFF08\u5728\u82F1\u8BED\u4E2D\uFF0Cgenerator \u8FD9\u4E2A\u8BCD\u662F\u201C\u751F\u6210\u5668\u201D\u7684\u610F\u601D\uFF09\u3002</p><p>Generator \u51FD\u6570\u53EF\u4EE5\u4E0D\u7528 yield \u8BED\u53E5\uFF0C\u8FD9\u65F6\u5C31\u53D8\u6210\u4E86\u4E00\u4E2A\u5355\u7EAF\u7684\u6682\u7F13\u6267\u884C\u51FD\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6267\u884C\u4E86\uFF01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> generator <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u51FD\u6570 f \u5982\u679C\u662F\u666E\u901A\u51FD\u6570\uFF0C\u5728\u4E3A\u53D8\u91CF generator \u8D4B\u503C\u65F6\u5C31\u4F1A\u6267\u884C\u3002\u4F46\u662F\uFF0C\u51FD\u6570 f \u662F\u4E00\u4E2A Generator \u51FD\u6570\uFF0C\u5C31\u53D8\u6210\u53EA\u6709\u8C03\u7528 next \u65B9\u6CD5\u65F6\uFF0C\u51FD\u6570 f \u624D\u4F1A\u6267\u884C\u3002</p><p>\u53E6\u5916\u9700\u8981\u6CE8\u610F\uFF0Cyield \u8BED\u53E5\u4E0D\u80FD\u7528\u5728\u666E\u901A\u51FD\u6570\u4E2D\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002</p><h3 id="async-\u51FD\u6570" tabindex="-1">async \u51FD\u6570 <a class="header-anchor" href="#async-\u51FD\u6570" aria-hidden="true">#</a></h3><p>ES7 \u63D0\u4F9B\u4E86 async \u51FD\u6570\uFF0C\u4F7F\u5F97\u5F02\u6B65\u64CD\u4F5C\u53D8\u5F97\u66F4\u52A0\u65B9\u4FBF\u3002async \u51FD\u6570\u662F\u4EC0\u4E48\uFF1F\u4E00\u53E5\u8BDD\uFF0Casync \u51FD\u6570\u5C31\u662F\u524D\u6587 Generator \u51FD\u6570\u7684\u8BED\u6CD5\u7CD6\u3002</p><p>\u524D\u6587\u6709\u4E00\u4E2A Generator \u51FD\u6570</p><div class="language-js"><pre><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">ImGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token function">Fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token function">Fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token function">Fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> fun <span class="token operator">=</span> <span class="token function">ImGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5199\u6210 async \u51FD\u6570\uFF0C\u5C31\u662F\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token function">ImGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">Fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">Fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">Fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> fun <span class="token operator">=</span> <span class="token function">ImGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E00\u6BD4\u8F83\u5C31\u4F1A\u53D1\u73B0\uFF0Casync \u51FD\u6570\u5C31\u662F\u5C06 Generator \u51FD\u6570\u7684\u661F\u53F7\uFF08*\uFF09\u66FF\u6362\u6210 async\uFF0C\u5C06 yield \u66FF\u6362\u6210 await\uFF0C\u4EC5\u6B64\u800C\u5DF2\u3002</p><p>async \u51FD\u6570\u5BF9 Generator \u51FD\u6570\u7684\u6539\u8FDB\uFF0C\u4F53\u73B0\u5728\u4EE5\u4E0B\u56DB\u70B9\u3002</p><p>\uFF081\uFF09\u5185\u7F6E\u6267\u884C\u5668\u3002Generator \u51FD\u6570\u7684\u6267\u884C\u5FC5\u987B\u9760\u6267\u884C\u5668\uFF0C\u800C async \u51FD\u6570\u81EA\u5E26\u6267\u884C\u5668\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0Casync \u51FD\u6570\u7684\u6267\u884C\uFF0C\u4E0E\u666E\u901A\u51FD\u6570\u4E00\u6A21\u4E00\u6837\uFF0C\u53EA\u8981\u4E00\u884C\u3002 (\u4E0A\u9762\u7684\u4EE3\u7801\u8C03\u7528\u4E86 ImGenerator \u51FD\u6570\uFF0C\u7136\u540E\u5B83\u5C31\u4F1A\u81EA\u52A8\u6267\u884C\uFF0C\u8F93\u51FA\u6700\u540E\u7ED3\u679C\u3002\u8FD9\u5B8C\u5168\u4E0D\u50CF Generator \u51FD\u6570\uFF0C\u9700\u8981\u8C03\u7528 next \u65B9\u6CD5\uFF0C\u624D\u80FD\u5F97\u5230\u771F\u6B63\u6267\u884C\uFF0C\u5F97\u5230\u6700\u540E\u7ED3\u679C\u3002)</p><p>\uFF082\uFF09\u66F4\u597D\u7684\u8BED\u4E49\u3002async \u548C await\uFF0C\u6BD4\u8D77\u661F\u53F7\u548C yield\uFF0C\u8BED\u4E49\u66F4\u6E05\u695A\u4E86\u3002async \u8868\u793A\u51FD\u6570\u91CC\u6709\u5F02\u6B65\u64CD\u4F5C\uFF0Cawait \u8868\u793A\u7D27\u8DDF\u5728\u540E\u9762\u7684\u8868\u8FBE\u5F0F\u9700\u8981\u7B49\u5F85\u7ED3\u679C\u3002</p><p>\uFF084\uFF09\u8FD4\u56DE\u503C\u662F Promise\u3002async \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F Promise \u5BF9\u8C61\uFF0C\u8FD9\u6BD4 Generator \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F Iterator \u5BF9\u8C61\u65B9\u4FBF\u591A\u4E86\u3002\u4F60\u53EF\u4EE5\u7528 then \u65B9\u6CD5\u6307\u5B9A\u4E0B\u4E00\u6B65\u7684\u64CD\u4F5C\u3002</p><p>\u8FDB\u4E00\u6B65\u8BF4\uFF0Casync \u51FD\u6570\u5B8C\u5168\u53EF\u4EE5\u770B\u4F5C\u591A\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5305\u88C5\u6210\u7684\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u800C await \u547D\u4EE4\u5C31\u662F\u5185\u90E8 then \u547D\u4EE4\u7684\u8BED\u6CD5\u7CD6\u3002</p><h3 id="async-\u51FD\u6570\u7B80\u5355\u7528\u6CD5" tabindex="-1">async \u51FD\u6570\u7B80\u5355\u7528\u6CD5 <a class="header-anchor" href="#async-\u51FD\u6570\u7B80\u5355\u7528\u6CD5" aria-hidden="true">#</a></h3><p>async \u51FD\u6570\u7684\u8BED\u6CD5\u89C4\u5219\u603B\u4F53\u4E0A\u6BD4\u8F83\u7B80\u5355\uFF0C\u96BE\u70B9\u662F\u9519\u8BEF\u5904\u7406\u673A\u5236</p><p>\uFF081\uFF09async \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61,async \u51FD\u6570\u5185\u90E8 return \u8BED\u53E5\u8FD4\u56DE\u7684\u503C\uFF0C\u4F1A\u6210\u4E3A then \u65B9\u6CD5\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u3002</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">Fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;hello world&quot;</span>
</code></pre></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u51FD\u6570 Fun \u5185\u90E8 return \u547D\u4EE4\u8FD4\u56DE\u7684\u503C\uFF0C\u4F1A\u88AB then \u65B9\u6CD5\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u5230\u3002</p><p>async \u51FD\u6570\u5185\u90E8\u629B\u51FA\u9519\u8BEF\uFF0C\u4F1A\u5BFC\u81F4\u8FD4\u56DE\u7684 Promise \u5BF9\u8C61\u53D8\u4E3A reject \u72B6\u6001\u3002\u629B\u51FA\u7684\u9519\u8BEF\u5BF9\u8C61\u4F1A\u88AB catch \u65B9\u6CD5\u56DE\u8C03\u51FD\u6570\u63A5\u6536\u5230\u3002</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u51FA\u9519\u4E86&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">Fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Error: \u51FA\u9519\u4E86</span>
</code></pre></div><p>\uFF082\uFF09async \u51FD\u6570\u8FD4\u56DE\u7684 Promise \u5BF9\u8C61\uFF0C\u5FC5\u987B\u7B49\u5230\u5185\u90E8\u6240\u6709 await \u547D\u4EE4\u7684 Promise \u5BF9\u8C61\u6267\u884C\u5B8C\uFF0C\u624D\u4F1A\u53D1\u751F\u72B6\u6001\u6539\u53D8\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EA\u6709 async \u51FD\u6570\u5185\u90E8\u7684\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5B8C\uFF0C\u624D\u4F1A\u6267\u884C then \u65B9\u6CD5\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><p>\uFF083\uFF09\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0Cawait \u547D\u4EE4\u540E\u9762\u662F\u4E00\u4E2A Promise \u5BF9\u8C61\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u4F1A\u88AB\u8F6C\u6210\u4E00\u4E2A\u7ACB\u5373 resolve \u7684 Promise \u5BF9\u8C61\u3002</p><h3 id="async-\u51FD\u6570\u7B80\u5355\u5B9E\u73B0\uFF08generator-\u51FD\u6570\uFF09" tabindex="-1">async \u51FD\u6570\u7B80\u5355\u5B9E\u73B0\uFF08Generator \u51FD\u6570\uFF09 <a class="header-anchor" href="#async-\u51FD\u6570\u7B80\u5355\u5B9E\u73B0\uFF08generator-\u51FD\u6570\uFF09" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B49\u540C\u4E8E</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6CE8\u610F" tabindex="-1">\u6CE8\u610F <a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a></h3><p>(1) await \u547D\u4EE4\u540E\u9762\u7684 Promise \u5BF9\u8C61\uFF0C\u8FD0\u884C\u7ED3\u679C\u53EF\u80FD\u662F rejected\uFF0C\u6240\u4EE5\u6700\u597D\u628A await \u547D\u4EE4\u653E\u5728 try...catch \u4EE3\u7801\u5757\u4E2D\u3002</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">somethingThatReturnsAPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53E6\u4E00\u79CD\u5199\u6CD5</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">somethingThatReturnsAPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>(2)\u591A\u4E2A await \u547D\u4EE4\u540E\u9762\u7684\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u7EE7\u53D1\u5173\u7CFB\uFF0C\u6700\u597D\u8BA9\u5B83\u4EEC\u540C\u65F6\u89E6\u53D1\u3002</p><p>(3) await \u547D\u4EE4\u53EA\u80FD\u7528\u5728 async \u51FD\u6570\u4E4B\u4E2D\uFF0C\u5982\u679C\u7528\u5728\u666E\u901A\u51FD\u6570\uFF0C\u5C31\u4F1A\u62A5\u9519\u3002</p>`,48),e=[o];function c(u,l,i,r,k,d){return s(),a("div",null,e)}var w=n(p,[["render",c]]);export{f as __pageData,w as default};
