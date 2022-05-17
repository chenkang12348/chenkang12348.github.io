import{_ as n,c as s,o as a,b as t}from"./app.4f7a7dfd.js";const y='{"title":"vue\u81EA\u5B9A\u4E49\u6307\u4EE4\u4E4Bv-loading\uFF08\u9644\u6E90\u7801\uFF0C\u53EFCV\uFF09","description":"","frontmatter":{"title":"vue\u81EA\u5B9A\u4E49\u6307\u4EE4\u4E4Bv-loading\uFF08\u9644\u6E90\u7801\uFF0C\u53EFCV\uFF09","theme":"default","tag":"Vuejs","time":"2021.4.3"},"headers":[{"level":3,"title":"\u6548\u679C\u56FE","slug":"\u6548\u679C\u56FE"},{"level":3,"title":"\u7ED3\u6784","slug":"\u7ED3\u6784"},{"level":3,"title":"\u670D\u52A1\u5F00\u542F\u6A21\u5F0F","slug":"\u670D\u52A1\u5F00\u542F\u6A21\u5F0F"},{"level":3,"title":"\u6307\u4EE4\u5F00\u542F\u6A21\u5F0F","slug":"\u6307\u4EE4\u5F00\u542F\u6A21\u5F0F"}],"relativePath":"views/article/Vuejs/libs/loadong.md"}',p={},o=t(`<p>\u7EC4\u4EF6 API\uFF1A<a href="http://tigerui.xkongkeji.com/#loading-%E5%8A%A0%E8%BD%BD" target="_blank" rel="noopener noreferrer">TigerUi\uFF1Ahttp://tigerui.xkongkeji.com</a></p><h3 id="\u6548\u679C\u56FE" tabindex="-1">\u6548\u679C\u56FE <a class="header-anchor" href="#\u6548\u679C\u56FE" aria-hidden="true">#</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fda944b6929146fd86076ec5412e6e97~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34d8e9b2026041f4a1fffd87127f0185~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="\u7ED3\u6784" tabindex="-1">\u7ED3\u6784 <a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[<span class="token punctuation">&#39;</span>ti-loading<span class="token punctuation">&#39;</span>, <span class="token punctuation">&#39;</span>ti-<span class="token punctuation">&#39;</span> + type]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-inner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loader-line<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;TiLoading&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.ti-service</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 99999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ti-directive</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 99999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.ti-loading</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>#222<span class="token punctuation">,</span> #000<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.loader-inner</span> <span class="token punctuation">{</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loading-text</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> -70px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #409eff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> spin 2000ms <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0.175<span class="token punctuation">,</span> 0.885<span class="token punctuation">,</span> 0.32<span class="token punctuation">,</span> 1.275<span class="token punctuation">)</span> infinite<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 50% 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 4px solid transparent<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(1)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -50ms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(2)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -100ms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(3)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -150ms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(4)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -200ms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(5)</span> <span class="token punctuation">{</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> -250ms<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.loader-line-wrap:nth-child(1) .loader-line</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 80%<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 7px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(2) .loader-line</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span> 80%<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 76px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 76px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(3) .loader-line</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 80%<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 62px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 62px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 21px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(4) .loader-line</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>180<span class="token punctuation">,</span> 80%<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 48px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.loader-line-wrap:nth-child(5) .loader-line</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>240<span class="token punctuation">,</span> 80%<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 34px<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> spin</span> <span class="token punctuation">{</span>
  <span class="token selector">0%,
  15%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u670D\u52A1\u5F00\u542F\u6A21\u5F0F" tabindex="-1">\u670D\u52A1\u5F00\u542F\u6A21\u5F0F <a class="header-anchor" href="#\u670D\u52A1\u5F00\u542F\u6A21\u5F0F" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> loadingBase <span class="token keyword">from</span> <span class="token string">&#39;./main.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> loadingConstructor <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>loadingBase<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/**
 * @Function open \u6253\u5F00loading
 * @Function close \u5173\u95EDlading
 */</span>
<span class="token keyword">class</span> <span class="token class-name">serviceLoading</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_instance_ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_parent_ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u5224\u65AD\u6EDA\u52A8\u6761\u662F\u5426\u5904\u4E8E\u7981\u7528\u72B6\u6001</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/**
   * @param {string} options  \u52A0\u8F7D\u4FE1\u606F\uFF08\u53EF\u9009\uFF09
   * @param {string} el  loading\u6302\u8F7D\u7684\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u6302\u8F7D\u5728body
   */</span>
  <span class="token function">open</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> el <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_parent_ <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isHTMLElement</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_parent_ <span class="token operator">=</span> el<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_parent_ <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>type<span class="token punctuation">)</span> options<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;service&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_instance_ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">loadingConstructor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">propsData</span><span class="token operator">:</span> options<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;service&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_parent_<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_instance_<span class="token punctuation">.</span>$el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
      <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_parent_<span class="token punctuation">,</span>
      <span class="token literal-property property">_instance</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_instance_<span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> options<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_parent_ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_instance_ <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> id<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/**
   *
   * @param {number} num loading\u6807\u8BC6\u6570\u5B57
   */</span>
  <span class="token function">close</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">||</span> <span class="token operator">!</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>_instance<span class="token punctuation">.</span>$el
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>overflow <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;service&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">;</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_loadingList_<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">isHTMLElement</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>nodeType <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">serviceLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u6307\u4EE4\u5F00\u542F\u6A21\u5F0F" tabindex="-1">\u6307\u4EE4\u5F00\u542F\u6A21\u5F0F <a class="header-anchor" href="#\u6307\u4EE4\u5F00\u542F\u6A21\u5F0F" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> serviceLoading <span class="token keyword">from</span> <span class="token string">&#39;./service&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> directiveLoading <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;loading&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bindFunctions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;ti-loading-parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> text <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;ti-loading-text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> id <span class="token operator">=</span> serviceLoading<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;directive&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> text<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          el
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;loadingId&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>binding<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;ti-loading-parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> id <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;loadingId&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          serviceLoading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;ti-loading-parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> text <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;ti-loading-text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> id <span class="token operator">=</span> serviceLoading<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;directive&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> text<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          el
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;loadingId&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> directiveLoading<span class="token punctuation">;</span>
</code></pre></div>`,10),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(p,[["render",e]]);export{y as __pageData,h as default};
