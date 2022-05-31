import{_ as n,c as s,o as a,e as t}from"./app.5f77e5d0.js";const f='{"title":"Promise\u590D\u4E60\u9898","description":"","frontmatter":{"itle":"Promise\u590D\u4E60\u9898","theme":"default","tag":"Javascript","time":"2021.11.18"},"headers":[{"level":2,"title":"Promise\u590D\u4E60\u9898","slug":"promise\u590D\u4E60\u9898"},{"level":2,"title":"END","slug":"end"}],"relativePath":"views/article/Javascript/libs/20211118.md"}',p={},o=t(`<h2 id="promise\u590D\u4E60\u9898" tabindex="-1">Promise\u590D\u4E60\u9898 <a class="header-anchor" href="#promise\u590D\u4E60\u9898" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">//----------  1 --------------------------</span>
<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token comment">// \u89E3\u6790\uFF1A</span>
<span class="token comment">// Promise \u6784\u9020\u51FD\u6570\u662F\u540C\u6B65\u6267\u884C\u7684\uFF0Cpromise.then \u4E2D\u7684\u51FD\u6570\u662F\u5F02\u6B65\u6267\u884C\u7684\u3002</span>
<span class="token comment">// \u8FD0\u884C\u7ED3\u679C</span>
<span class="token comment">// =&gt; 1</span>
<span class="token comment">// =&gt; 2</span>
<span class="token comment">// =&gt; 4</span>
<span class="token comment">// =&gt; 3</span>

<span class="token comment">//----------  2 --------------------------</span>
<span class="token keyword">const</span> <span class="token function-variable function">first</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
\u89E3\u6790\uFF1A

\u8FD9\u9053\u9898\u4E3B\u8981\u7406\u89E3js\u6267\u884C\u673A\u5236\u3002

\u7B2C\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5148\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u4E3Bscript\uFF0Cnew Promise\u7ACB\u5373\u6267\u884C\uFF0C\u8F93\u51FA 3\uFF0C\u6267\u884Cp\u8FD9\u4E2Anew Promise\u64CD\u4F5C\uFF0C\u8F93\u51FA 7\uFF0C\u53D1\u73B0setTimeout\uFF0C\u5C06\u56DE\u8C03\u51FD\u6570\u653E\u5165\u4E0B\u4E00\u8F6E\u4EFB\u52A1\u961F\u5217\uFF08Event Quene\uFF09\uFF0Cp\u7684then\uFF0C\u6682\u4E14\u547D\u540D\u4E3Athen1\uFF0C\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u4E14first\u4E5F\u6709then\uFF0C\u547D\u540D\u4E3Athen2\uFF0C\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\u3002\u6267\u884Cconsole.log(4),\u8F93\u51FA 4\uFF0C\u5B8F\u4EFB\u52A1\u6267\u884C\u7ED3\u675F\u3002

\u518D\u6267\u884C\u5FAE\u4EFB\u52A1\uFF0C\u6267\u884Cthen1,\u8F93\u51FA 1\uFF0C\u6267\u884Cthen2,\u8F93\u51FA 3.

\u7B2C\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F\uFF0C\u5F00\u59CB\u6267\u884C\u7B2C\u4E8C\u8F6E\u3002\u7B2C\u4E8C\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u5148\u6267\u884C\u5B8F\u4EFB\u52A1\u91CC\u9762\u7684\uFF0C\u4E5F\u5C31\u662FsetTimeout\u7684\u56DE\u8C03\uFF0C\u8F93\u51FA 5.resolve(6)\u4E0D\u4F1A\u751F\u6548\uFF0C\u56E0\u4E3Ap\u7684Promise\u72B6\u6001\u4E00\u65E6\u6539\u53D8\u5C31\u4E0D\u4F1A\u518D\u53D8\u5316\u4E86\u3002
*/</span>
<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// =&gt; 3</span>
<span class="token comment">// =&gt; 7</span>
<span class="token comment">// =&gt; 4</span>
<span class="token comment">// =&gt; 1</span>
<span class="token comment">// =&gt; 2</span>
<span class="token comment">// =&gt; 5</span>

<span class="token comment">//----------  3 --------------------------</span>
<span class="token keyword">const</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> promise2 <span class="token operator">=</span> promise1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error!!!&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">,</span> promise1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">,</span> promise2<span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">,</span> promise1<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">,</span> promise2<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token comment">/*
\u89E3\u91CA\uFF1Apromise \u6709 3 \u79CD\u72B6\u6001\uFF1Apending\u3001fulfilled \u6216 rejected\u3002\u72B6\u6001\u6539\u53D8\u53EA\u80FD\u662F pending-&gt;fulfilled \u6216\u8005 pending-&gt;rejected\uFF0C\u72B6\u6001\u4E00\u65E6\u6539\u53D8\u5219\u4E0D\u80FD\u518D\u53D8\u3002\u4E0A\u9762 promise2 \u5E76\u4E0D\u662F promise1\uFF0C\u800C\u662F\u8FD4\u56DE\u7684\u4E00\u4E2A\u65B0\u7684 Promise \u5B9E\u4F8B\u3002*/</span>
<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// promise1 Promise {&lt;pending&gt;}</span>
<span class="token comment">// promise2 Promise {&lt;pending&gt;}</span>
<span class="token comment">// Uncaught (in promise) Error: error!!!</span>
<span class="token comment">//     at &lt;anonymous&gt;</span>
<span class="token comment">// promise1 Promise {&lt;resolved&gt;: &quot;success&quot;}</span>
<span class="token comment">// promise2 Promise {&lt;rejected&gt;: Error: error!!!</span>
<span class="token comment">//     at &lt;anonymous&gt;}</span>


<span class="token comment">//----------  4 --------------------------</span>

<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;success1&#39;</span><span class="token punctuation">)</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;success2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

promise
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then: &#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;catch: &#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/*
\u89E3\u6790\uFF1A

\u6784\u9020\u51FD\u6570\u4E2D\u7684 resolve \u6216 reject \u53EA\u6709\u7B2C\u4E00\u6B21\u6267\u884C\u6709\u6548\uFF0C\u591A\u6B21\u8C03\u7528\u6CA1\u6709\u4EFB\u4F55\u4F5C\u7528\uFF0C\u547C\u5E94\u4EE3\u7801\u4E8C\u7ED3\u8BBA\uFF1Apromise \u72B6\u6001\u4E00\u65E6\u6539\u53D8\u5219\u4E0D\u80FD\u518D\u53D8\u3002*/</span>
<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// then: success1</span>

<span class="token comment">//----------  5 --------------------------</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">/*
\u89E3\u6790\uFF1A

promise \u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528\u3002\u63D0\u8D77\u94FE\u5F0F\u8C03\u7528\u6211\u4EEC\u901A\u5E38\u4F1A\u60F3\u5230\u901A\u8FC7 return this \u5B9E\u73B0\uFF0C\u4E0D\u8FC7 Promise \u5E76\u4E0D\u662F\u8FD9\u6837\u5B9E\u73B0\u7684\u3002promise \u6BCF\u6B21\u8C03\u7528 .then \u6216\u8005 .catch \u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 promise\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u94FE\u5F0F\u8C03\u7528\u3002
*/</span>
<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>

<span class="token comment">//----------  6 --------------------------</span>

<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;once&#39;</span><span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">/*
\u89E3\u6790\uFF1A

promise \u7684 .then \u6216\u8005 .catch \u53EF\u4EE5\u88AB\u8C03\u7528\u591A\u6B21\uFF0C\u4F46\u8FD9\u91CC Promise \u6784\u9020\u51FD\u6570\u53EA\u6267\u884C\u4E00\u6B21\u3002\u6216\u8005\u8BF4 promise \u5185\u90E8\u72B6\u6001\u4E00\u7ECF\u6539\u53D8\uFF0C\u5E76\u4E14\u6709\u4E86\u4E00\u4E2A\u503C\uFF0C\u90A3\u4E48\u540E\u7EED\u6BCF\u6B21\u8C03\u7528 .then \u6216\u8005 .catch \u90FD\u4F1A\u76F4\u63A5\u62FF\u5230\u8BE5\u503C\u3002*/</span>

<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// once</span>
<span class="token comment">// success 1005</span>
<span class="token comment">// success 1007</span>

<span class="token comment">//----------  7 --------------------------</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error!!!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then: &#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;catch: &#39;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token comment">/*
 \u89E3\u6790\uFF1A

.then \u6216\u8005 .catch \u4E2D return \u4E00\u4E2A error \u5BF9\u8C61\u5E76\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u88AB\u540E\u7EED\u7684 .catch \u6355\u83B7\uFF0C\u9700\u8981\u6539\u6210\u5176\u4E2D\u4E00\u79CD\uFF1A

return Promise.reject(new Error(&#39;error!!!&#39;))

throw new Error(&#39;error!!!&#39;)

\u56E0\u4E3A\u8FD4\u56DE\u4EFB\u610F\u4E00\u4E2A\u975E promise \u7684\u503C\u90FD\u4F1A\u88AB\u5305\u88F9\u6210 promise \u5BF9\u8C61\uFF0C\u5373 return new Error(&#39;error!!!&#39;) \u7B49\u4EF7\u4E8E return Promise.resolve(new Error(&#39;error!!!&#39;))\u3002
 */</span> 

<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// then:  Error: error!!!</span>
<span class="token comment">//     at &lt;anonymous&gt;</span>

<span class="token comment">//----------  8 --------------------------</span>
<span class="token keyword">const</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> promise
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
promise<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span>

<span class="token comment">/*
\u89E3\u6790\uFF1A.then \u6216 .catch \u8FD4\u56DE\u7684\u503C\u4E0D\u80FD\u662F promise \u672C\u8EAB\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u6B7B\u5FAA\u73AF\u3002\u7C7B\u4F3C\u4E8E\uFF1A
*/</span>
process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">tick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;tick&#39;</span><span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span>tick<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// TypeError: Chaining cycle detected for promise #&lt;Promise&gt;</span>

<span class="token comment">//----------  9 --------------------------</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>


  <span class="token comment">/*
  \u89E3\u6790\uFF1A

.then \u6216\u8005 .catch \u7684\u53C2\u6570\u671F\u671B\u662F\u51FD\u6570\uFF0C\u4F20\u5165\u975E\u51FD\u6570\u5219\u4F1A\u53D1\u751F\u503C\u7A7F\u900F\u3002*/</span>

<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// 1</span>

<span class="token comment">//----------  10 --------------------------</span>

Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">success</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">fail1</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;fail1: &#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fail2</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;fail2: &#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">/*
  \u89E3\u6790\uFF1A

.then \u53EF\u4EE5\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F\u5904\u7406\u6210\u529F\u7684\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u5904\u7406\u9519\u8BEF\u7684\u51FD\u6570\u3002

.catch \u662F .then \u7B2C\u4E8C\u4E2A\u53C2\u6570\u7684\u7B80\u4FBF\u5199\u6CD5\uFF0C\u4F46\u662F\u5B83\u4EEC\u7528\u6CD5\u4E0A\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF1A.then \u7684\u7B2C\u4E8C\u4E2A\u5904\u7406\u9519\u8BEF\u7684\u51FD\u6570\u6355\u83B7\u4E0D\u4E86\u7B2C\u4E00\u4E2A\u5904\u7406\u6210\u529F\u7684\u51FD\u6570\u629B\u51FA\u7684\u9519\u8BEF\uFF0C\u800C\u540E\u7EED\u7684 .catch \u53EF\u4EE5\u6355\u83B7\u4E4B\u524D\u7684\u9519\u8BEF\u3002*/</span>

<span class="token comment">// \u5F53\u7136\u4EE5\u4E0B\u4EE3\u7801\u4E5F\u53EF\u4EE5\uFF1A</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">success1</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">fail1</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;fail1: &#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">success2</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">fail2</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;fail2: &#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// fail2:  Error: error</span>
<span class="token comment">//     at success (&lt;anonymous&gt;)</span>

<span class="token comment">//----------  11 --------------------------</span>

process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;then&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setImmediate&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/*
\u89E3\u6790\uFF1A

process.nextTick \u548C promise.then \u90FD\u5C5E\u4E8E microtask\uFF0C\u800C setImmediate \u5C5E\u4E8E macrotask\uFF0C\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684 check \u9636\u6BB5\u6267\u884C\u3002\u4E8B\u4EF6\u5FAA\u73AF\u7684\u6BCF\u4E2A\u9636\u6BB5\uFF08macrotask\uFF09\u4E4B\u95F4\u90FD\u4F1A\u6267\u884C microtask\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u7684\u5F00\u59CB\u4F1A\u5148\u6267\u884C\u4E00\u6B21 microtask\u3002
*/</span>

<span class="token comment">// \u8FD0\u884C\u7ED3\u679C\uFF1A</span>
<span class="token comment">// end</span>
<span class="token comment">// nextTick</span>
<span class="token comment">// then</span>
<span class="token comment">// setImmediate</span>


<span class="token comment">//----------  12 --------------------------</span>
<span class="token comment">// \u7EA2\u706F3\u79D2\u4EAE\u4E00\u6B21\uFF0C\u7EFF\u706F1\u79D2\u4EAE\u4E00\u6B21\uFF0C\u9EC4\u706F2\u79D2\u4EAE\u4E00\u6B21\uFF1B\u5982\u4F55\u4F7F\u7528Promise\u8BA9\u4E09\u4E2A\u706F\u4E0D\u65AD\u4EA4\u66FF\u91CD\u590D\u4EAE\u706F\uFF1F\uFF08\u6D77\u5EB7\u5A01\u89C6\u7B14\u8BD5\u9898\uFF09</span>
<span class="token keyword">function</span> <span class="token function">red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">yellow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
\u5206\u6790\uFF1A

\u5148\u770B\u9898\u76EE\uFF0C\u9898\u76EE\u8981\u6C42\u7EA2\u706F\u4EAE\u8FC7\u540E\uFF0C\u7EFF\u706F\u624D\u80FD\u4EAE\uFF0C\u7EFF\u706F\u4EAE\u8FC7\u540E\uFF0C\u9EC4\u706F\u624D\u80FD\u4EAE\uFF0C\u9EC4\u706F\u4EAE\u8FC7\u540E\uFF0C\u7EA2\u706F\u624D\u80FD\u4EAE\u2026\u2026\u6240\u4EE5\u600E\u4E48\u901A\u8FC7Promise\u5B9E\u73B0\uFF1F

\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5C31\u662F\u7EA2\u706F\u4EAE\u8D77\u65F6\uFF0C\u627F\u8BFA2s\u79D2\u540E\u4EAE\u7EFF\u706F\uFF0C\u7EFF\u706F\u4EAE\u8D77\u65F6\u627F\u8BFA1s\u540E\u4EAE\u9EC4\u706F\uFF0C\u9EC4\u706F\u4EAE\u8D77\u65F6\uFF0C\u627F\u8BFA3s\u540E\u4EAE\u7EA2\u706F\u2026\u2026\u8FD9\u663E\u7136\u662F\u4E00\u4E2APromise\u94FE\u5F0F\u8C03\u7528\uFF0C\u770B\u5230\u8FD9\u91CC\u4F60\u5FC3\u91CC\u6216\u8BB8\u5C31\u6709\u601D\u8DEF\u4E86\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u6211\u4EEC\u7684\u6BCF\u4E00\u4E2A\u4EAE\u706F\u52A8\u4F5C\u5199\u5728then()\u65B9\u6CD5\u4E2D\uFF0C\u540C\u65F6\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684Promise\uFF0C\u5E76\u5C06\u5176\u72B6\u6001\u7531pending\u8BBE\u7F6E\u4E3Afulfilled\uFF0C\u5141\u8BB8\u4E0B\u4E00\u76CF\u706F\u4EAE\u8D77\u3002
*/</span>

<span class="token keyword">function</span> <span class="token function">red</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">green</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;green&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">yellow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">let</span> <span class="token function-variable function">myLight</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">timer<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


<span class="token keyword">let</span> <span class="token function-variable function">myStep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">myLight</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">myLight</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">myLight</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">myStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">myStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// output:</span>
<span class="token comment">// =&gt; red</span>
<span class="token comment">// =&gt; green</span>
<span class="token comment">// =&gt; yellow</span>
<span class="token comment">// =&gt; red</span>
<span class="token comment">// =&gt; green</span>
<span class="token comment">// =&gt; yellow</span>
<span class="token comment">// =&gt; red</span>
<span class="token comment">//----------  13 --------------------------</span>
<span class="token comment">// \u8BF7\u5B9E\u73B0\u4E00\u4E2AmergePromise\u51FD\u6570\uFF0C\u628A\u4F20\u8FDB\u53BB\u7684\u6570\u7EC4\u6309\u987A\u5E8F\u5148\u540E\u6267\u884C\uFF0C\u5E76\u4E14\u628A\u8FD4\u56DE\u7684\u6570\u636E\u5148\u540E\u653E\u5230\u6570\u7EC4data\u4E2D\u3002</span>
<span class="token keyword">const</span> <span class="token function-variable function">timeout</span> <span class="token operator">=</span> <span class="token parameter">ms</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ajax1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ajax2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ajax3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">mergePromise</span> <span class="token operator">=</span> <span class="token parameter">ajaxArray</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u8FD9\u91CC\u5B9E\u73B0\u4F60\u7684\u4EE3\u7801</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">mergePromise</span><span class="token punctuation">(</span><span class="token punctuation">[</span>ajax1<span class="token punctuation">,</span> ajax2<span class="token punctuation">,</span> ajax3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// data \u4E3A [1, 2, 3]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8981\u6C42\u5206\u522B\u8F93\u51FA</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
<span class="token comment">// done</span>
<span class="token comment">// [1, 2, 3]</span>

<span class="token comment">/*
\u5206\u6790\uFF1A

\u8FD9\u9053\u9898\u4E3B\u8981\u8003\u5BDF\u7528Promise\u63A7\u5236\u5F02\u6B65\u6D41\u7A0B\uFF0C\u9996\u5148ajax1\uFF0Cajax2\uFF0Cajax3\u90FD\u662F\u51FD\u6570\uFF0C\u53EA\u662F\u8FD9\u4E9B\u51FD\u6570\u6267\u884C\u540E\u4F1A\u8FD4\u56DE\u4E00\u4E2APromise\uFF0C\u6309\u7167\u9898\u76EE\u8981\u6C42\u53EA\u8981\u987A\u5E8F\u6267\u884C\u8FD9\u4E09\u4E2A\u51FD\u6570\u5C31\u597D\u4E86\uFF0C\u7136\u540E\u628A\u7ED3\u679C\u653E\u5230data\u4E2D;
*/</span>
<span class="token comment">// \u7B54\u6848\uFF1A</span>
<span class="token keyword">const</span> <span class="token function-variable function">mergePromise</span> <span class="token operator">=</span> <span class="token parameter">ajaxArray</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u8FD9\u91CC\u5B9E\u73B0\u4F60\u7684\u4EE3\u7801</span>
  <span class="token comment">// \u4FDD\u5B58\u6570\u7EC4\u4E2D\u7684\u51FD\u6570\u6267\u884C\u540E\u7684\u7ED3\u679C</span>
  <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// Promise.resolve\u65B9\u6CD5\u8C03\u7528\u65F6\u4E0D\u5E26\u53C2\u6570\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2Aresolved\u72B6\u6001\u7684 Promise \u5BF9\u8C61\u3002</span>
  <span class="token keyword">var</span> sequence <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  ajaxArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B2C\u4E00\u6B21\u7684 then \u65B9\u6CD5\u7528\u6765\u6267\u884C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u51FD\u6570\uFF0C</span>
    <span class="token comment">// \u7B2C\u4E8C\u6B21\u7684 then \u65B9\u6CD5\u63A5\u53D7\u6570\u7EC4\u4E2D\u7684\u51FD\u6570\u6267\u884C\u540E\u8FD4\u56DE\u7684\u7ED3\u679C\uFF0C</span>
    <span class="token comment">// \u5E76\u628A\u7ED3\u679C\u6DFB\u52A0\u5230 data \u4E2D\uFF0C\u7136\u540E\u628A data \u8FD4\u56DE\u3002</span>
    sequence <span class="token operator">=</span> sequence<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u904D\u5386\u7ED3\u675F\u540E\uFF0C\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u4E5F\u5C31\u662F sequence\uFF0C \u4ED6\u7684 [[PromiseValue]] \u503C\u5C31\u662F data\uFF0C</span>
<span class="token comment">// \u800C data\uFF08\u4FDD\u5B58\u6570\u7EC4\u4E2D\u7684\u51FD\u6570\u6267\u884C\u540E\u7684\u7ED3\u679C\uFF09 \u4E5F\u4F1A\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F20\u5165\u4E0B\u6B21\u8C03\u7528\u7684 then \u65B9\u6CD5\u4E2D\u3002</span>
  <span class="token keyword">return</span> sequence<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//----------  14 --------------------------</span>
<span class="token comment">// \u73B0\u67098\u4E2A\u56FE\u7247\u8D44\u6E90\u7684url\uFF0C\u5DF2\u7ECF\u5B58\u50A8\u5728\u6570\u7EC4urls\u4E2D\uFF0C\u4E14\u5DF2\u6709\u4E00\u4E2A\u51FD\u6570function loading\uFF0C\u8F93\u5165\u4E00\u4E2Aurl\u94FE\u63A5\uFF0C\u8FD4\u56DE\u4E00\u4E2APromise\uFF0C\u8BE5Promise\u5728\u56FE\u7247\u4E0B\u8F7D\u5B8C\u6210\u7684\u65F6\u5019resolve\uFF0C\u4E0B\u8F7D\u5931\u8D25\u5219reject\u3002</span>

<span class="token comment">// \u8981\u6C42\uFF1A\u4EFB\u4F55\u65F6\u523B\u540C\u65F6\u4E0B\u8F7D\u7684\u94FE\u63A5\u6570\u91CF\u4E0D\u53EF\u4EE5\u8D85\u8FC73\u4E2A\u3002</span>

<span class="token comment">// \u8BF7\u5199\u4E00\u6BB5\u4EE3\u7801\u5B9E\u73B0\u8FD9\u4E2A\u9700\u6C42\uFF0C\u8981\u6C42\u5C3D\u53EF\u80FD\u5FEB\u901F\u5730\u5C06\u6240\u6709\u56FE\u7247\u4E0B\u8F7D\u5B8C\u6210\u3002</span>
<span class="token keyword">var</span> urls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.kkkk1000.com/images/getImgData/gray.gif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.kkkk1000.com/images/getImgData/Particle.gif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.kkkk1000.com/images/getImgData/arithmetic.png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.kkkk1000.com/images/getImgData/arithmetic2.gif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.kkkk1000.com/images/getImgData/arithmetic.gif&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://www.kkkk1000.com/images/wxQrCode2.png&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E00\u5F20\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        img<span class="token punctuation">.</span>onerror <span class="token operator">=</span> reject<span class="token punctuation">;</span>
        img<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/*
\u89E3\u6790

\u9898\u76EE\u7684\u610F\u601D\u662F\u9700\u8981\u5148\u5E76\u53D1\u8BF7\u6C423\u5F20\u56FE\u7247\uFF0C\u5F53\u4E00\u5F20\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u53C8\u4F1A\u7EE7\u7EED\u53D1\u8D77\u4E00\u5F20\u56FE\u7247\u7684\u8BF7\u6C42\uFF0C\u8BA9\u5E76\u53D1\u6570\u4FDD\u6301\u57283\u4E2A\uFF0C\u76F4\u5230\u9700\u8981\u52A0\u8F7D\u7684\u56FE\u7247\u90FD\u5168\u90E8\u53D1\u8D77\u8BF7\u6C42\u3002

\u7528Promise\u6765\u5B9E\u73B0\u5C31\u662F\uFF0C\u5148\u5E76\u53D1\u8BF7\u6C423\u4E2A\u56FE\u7247\u8D44\u6E90\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5F97\u52303\u4E2APromise\uFF0C\u7EC4\u6210\u4E00\u4E2A\u6570\u7EC4promises\uFF0C\u7136\u540E\u4E0D\u65AD\u8C03\u7528Promise.race\u6765\u8FD4\u56DE\u6700\u5FEB\u6539\u53D8\u72B6\u6001\u7684Promise\uFF0C\u7136\u540E\u4ECE\u6570\u7EC4promises\u4E2D\u5220\u6389\u8FD9\u4E2APromise\u5BF9\u8C61\uFF0C\u518D\u52A0\u5165\u4E00\u4E2A\u65B0\u7684Promise\uFF0C\u76F4\u5230\u5168\u90E8\u7684url\u88AB\u53D6\u5B8C\uFF0C\u6700\u540E\u518D\u4F7F\u7528Promise.all\u6765\u5904\u7406\u4E00\u904D\u6570\u7EC4promises\u4E2D\u6CA1\u6709\u6539\u53D8\u72B6\u6001\u7684Promise\u3002
*/</span>

<span class="token keyword">function</span> <span class="token function">limitLoad</span><span class="token punctuation">(</span><span class="token parameter">urls<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u6570\u7EC4\u505A\u4E00\u4E2A\u62F7\u8D1D</span>
    <span class="token keyword">const</span> sequence <span class="token operator">=</span> <span class="token punctuation">[</span>\u2026urls<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


 <span class="token comment">//\u5E76\u53D1\u8BF7\u6C42\u5230\u6700\u5927\u6570</span>
  promises <span class="token operator">=</span> sequence<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> limit<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u8FD4\u56DE\u7684 index \u662F\u4EFB\u52A1\u5728 promises \u7684\u811A\u6807\uFF0C\u7528\u4E8E\u5728 Promise.race \u4E4B\u540E\u627E\u5230\u5B8C\u6210\u7684\u4EFB\u52A1\u811A\u6807</span>
    <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5229\u7528\u6570\u7EC4\u7684 reduce \u65B9\u6CD5\u6765\u4EE5\u961F\u5217\u7684\u5F62\u5F0F\u6267\u884C</span>
  <span class="token keyword">return</span> sequence<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">last<span class="token punctuation">,</span> url<span class="token punctuation">,</span> currentIndex</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> last<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FD4\u56DE\u6700\u5FEB\u6539\u53D8\u72B6\u6001\u7684 Promise</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FD9\u91CC\u7684 catch \u4E0D\u4EC5\u7528\u6765\u6355\u83B7\u524D\u9762 then \u65B9\u6CD5\u629B\u51FA\u7684\u9519\u8BEF</span>
      <span class="token comment">// \u66F4\u91CD\u8981\u7684\u662F\u9632\u6B62\u4E2D\u65AD\u6574\u4E2A\u94FE\u5F0F\u8C03\u7528</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7528\u65B0\u7684 Promise \u66FF\u6362\u6389\u6700\u5FEB\u6539\u53D8\u72B6\u6001\u7684 Promise</span>
      promises<span class="token punctuation">[</span>res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>sequence<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token function">limitLoad</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> loadImg<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
\u56E0\u4E3A limitLoad \u51FD\u6570\u4E5F\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0C\u6240\u4EE5\u5F53 \u6240\u6709\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u94FE\u5F0F\u8C03\u7528*/</span>

<span class="token function">limitLoad</span><span class="token punctuation">(</span>urls<span class="token punctuation">,</span> loadImg<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6240\u6709\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//----------  15 --------------------------</span>
<span class="token comment">// \u5C01\u88C5\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u56FE\u7247\u7684\u65B9\u6CD5</span>

<span class="token keyword">function</span> <span class="token function">loadImageAsync</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span> 
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Could not load image at&#39;</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        image<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="end" tabindex="-1">END <a class="header-anchor" href="#end" aria-hidden="true">#</a></h2><hr>`,4),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var d=n(p,[["render",e]]);export{f as __pageData,d as default};
