import{_ as n,c as s,o as a,e as p}from"./app.8bacf833.js";const m='{"title":"Vue\u9AD8\u7EA7\u5B9E\u6218\u6280\u5DE7","description":"","frontmatter":{"title":"Vue\u9AD8\u7EA7\u5B9E\u6218\u6280\u5DE7","theme":"default","tag":"Vue","time":"2021.10.20"},"headers":[{"level":2,"title":"Vue\u9AD8\u7EA7\u5B9E\u6218\u6280\u5DE7","slug":"vue\u9AD8\u7EA7\u5B9E\u6218\u6280\u5DE7"},{"level":3,"title":"\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6","slug":"\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6"},{"level":3,"title":"\u81EA\u52A8\u6CE8\u518C\u8DEF\u7531","slug":"\u81EA\u52A8\u6CE8\u518C\u8DEF\u7531"},{"level":3,"title":"\u6743\u9650\u81EA\u5B9A\u4E49\u6307\u4EE4","slug":"\u6743\u9650\u81EA\u5B9A\u4E49\u6307\u4EE4"},{"level":3,"title":"render\u6E32\u67D3\u51FD\u6570","slug":"render\u6E32\u67D3\u51FD\u6570"},{"level":3,"title":"\u5C40\u90E8\u5F15\u5165\u7B2C\u4E09\u65B9UI\u6846\u67B6\u4F18\u5316","slug":"\u5C40\u90E8\u5F15\u5165\u7B2C\u4E09\u65B9ui\u6846\u67B6\u4F18\u5316"},{"level":2,"title":"END","slug":"end"}],"relativePath":"views/article/Vue/libs/20211020.md"}',t={},o=p(`<h2 id="vue\u9AD8\u7EA7\u5B9E\u6218\u6280\u5DE7" tabindex="-1">Vue\u9AD8\u7EA7\u5B9E\u6218\u6280\u5DE7 <a class="header-anchor" href="#vue\u9AD8\u7EA7\u5B9E\u6218\u6280\u5DE7" aria-hidden="true">#</a></h2><h3 id="\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6" tabindex="-1">\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6 <a class="header-anchor" href="#\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u5E73\u65F6\u53EF\u80FD\u8FD9\u6837\u5F15\u5165\u6CE8\u518C\u7EC4\u4EF6\u3002\u6BCF\u6B21\u90FD\u5F97\u9700\u8981\u5728\u5934\u90E8\u5F15\u5165\uFF0C\u7136\u540E\u6CE8\u518C\uFF0C\u6700\u540E\u5728\u6A21\u677F\u4E0A\u4F7F\u7528\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span> <span class="token attr-name">msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Welcome to Your Vue.js App<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;./components/HelloWorld.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    HelloWorld
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u90A3\u4E48\uFF0C\u6709\u6CA1\u6709\u66F4\u52A0\u65B9\u4FBF\u5FEB\u6377\u7684\u65B9\u6CD5\u5462\uFF1F\u6211\u4EEC\u4E0D\u59A8\u8FD9\u6837\u3002</p><p>\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3AglobalRC.js\u6587\u4EF6\uFF0C\u5047\u8BBE\u6211\u4EEC\u8FD9\u91CC\u4E0E\u7EC4\u4EF6\u5E73\u7EA7\uFF0C\u5373\u5B58\u653E\u5728\u7EC4\u4EF6\u6587\u4EF6\u5939\u4E2D\u3002</p><p>\u76EE\u5F55\u7ED3\u6784\u5982</p><div class="language-"><pre><code>-src
--components
---component1.vue
---globalRC.js
</code></pre></div><p>globalRC.js:</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">function</span> <span class="token function">changeStr</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> requireComponent <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;./&#39;\u64CD\u4F5C\u5BF9\u8C61\u4E3A\u5F53\u524D\u76EE\u5F55</span>

requireComponent<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">requireComponent</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> componentName <span class="token operator">=</span> <span class="token function">changeStr</span><span class="token punctuation">(</span>
        element<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>componentName<span class="token punctuation">,</span> config<span class="token punctuation">.</span>default <span class="token operator">||</span> config<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u7136\u540E\uFF0C\u6211\u4EEC\u9700\u8981\u5728main.js\u6587\u4EF6\u4E2D\u5F15\u5165\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;./components/globalRC.js&#39;</span>
</code></pre></div><p>\u6700\u540E\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u6A21\u677F\u76F4\u63A5\u4F7F\u7528\u5C31\u53EF\u4EE5\u4E86</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component1</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;App&#39;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\u610F\uFF0Crequire.context\u662Fwebpack\u7684\u4E00\u4E2AAPI\uFF0C\u6240\u4EE5\uFF0C\u9700\u8981\u57FA\u4E8Ewebpack\u73AF\u5883\u624D\u53EF\u4EE5\u4F7F\u7528\u3002</p><h3 id="\u81EA\u52A8\u6CE8\u518C\u8DEF\u7531" tabindex="-1">\u81EA\u52A8\u6CE8\u518C\u8DEF\u7531 <a class="header-anchor" href="#\u81EA\u52A8\u6CE8\u518C\u8DEF\u7531" aria-hidden="true">#</a></h3><p>\u8FD9\u662F\u6211\u4EEC\u4E4B\u524D\u6CE8\u518C\u8DEF\u7531\u7684\u65B9\u5F0F\u3002\u5982\u679C\u8DEF\u7531\u6587\u4EF6\u591A\u4E86\uFF0C\u4F1A\u663E\u5F97\u7279\u522B\u81C3\u80BF\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F15\u5165\u7EC4\u4EF6</span>
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">&quot;../views/home.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> about <span class="token keyword">from</span> <span class="token string">&quot;../views/about.vue&quot;</span><span class="token punctuation">;</span>
 
<span class="token comment">// \u8981\u544A\u8BC9 vue \u4F7F\u7528 vueRouter</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> home
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> about
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
 
<span class="token keyword">var</span> router <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u4F18\u5316\u4E00\u4E0B\u3002 \u5728\u8DEF\u7531\u6587\u4EF6\u5939\u4E0B\uFF0C\u8FD9\u91CC\u5047\u8BBE\u662F\u540D\u4E3Arouter\u6587\u4EF6\u5939\u4E0B\uFF0C\u521B\u5EFA\u4E00\u4E2ArouteModule.js\u6587\u4EF6\u3002 \u76EE\u5F55\u7ED3\u6784\u5982\uFF1A</p><div class="language-"><pre><code>-src
--router
---index.js
---login.module.js
---routeModule.js
</code></pre></div><p>routeModule.js:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">importAll</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    r<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        routerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">r</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span>default<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">importAll</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.module\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u8FD9\u91CC\u81EA\u5B9A\u4E49\u4E3A.module.js \u7ED3\u5C3E\u7684\u6587\u4EF6</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> routerList
</code></pre></div><p>\u7136\u540E\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u521B\u5EFA\u5BF9\u5E94\u7684\u8DEF\u7531\u6587\u4EF6\uFF0C\u5982\uFF1Alogin.module.js\u3002</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../views/login.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u540E\uFF0C\u5728\u8DEF\u7531\u914D\u7F6E\u6587\u4EF6index.js\u4E2D\u5F15\u5165routeModule.js\u6587\u4EF6\u5373\u53EF\uFF0C</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> routerList <span class="token keyword">from</span> <span class="token string">&#39;./routeModule.js&#39;</span>
 
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
<span class="token keyword">var</span> router <span class="token operator">=</span>  <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routerList
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router<span class="token punctuation">;</span>
</code></pre></div><p>\u6CE8\u610F\uFF0Crequire.context\u662Fwebpack\u7684\u4E00\u4E2AAPI\uFF0C\u6240\u4EE5\uFF0C\u9700\u8981\u57FA\u4E8Ewebpack\u73AF\u5883\u624D\u53EF\u4EE5\u4F7F\u7528\u3002</p><h3 id="\u6743\u9650\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1">\u6743\u9650\u81EA\u5B9A\u4E49\u6307\u4EE4 <a class="header-anchor" href="#\u6743\u9650\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a></h3><p>\u5E73\u5E38\uFF0C\u6211\u4EEC\u53EF\u80FD\u4F1A\u9047\u5230\u6309\u94AE\u7EA7\u522B\u6216\u8005\u9875\u9762\u5185\u64CD\u4F5C\u6743\u9650\u7684\u9700\u6C42\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5199\u4E00\u4E2A\u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4\u3002\u9996\u5148\uFF0C\u53EF\u4EE5\u5728\u5165\u53E3\u6587\u4EF6main.js\u6587\u4EF6\u4E2D\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">function</span> <span class="token function">checkArray</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u81EA\u5B9A\u4E49\u6743\u9650\u5217\u8868</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;auth-key&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> displayKey <span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>displayKey<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> hasPermission <span class="token operator">=</span> <span class="token function">checkArray</span><span class="token punctuation">(</span>displayKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>hasPermission<span class="token punctuation">)</span><span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u9700\u8981key&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u9875\u9762\u4E2D\u4F7F\u7528\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-auth-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>btn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span> 
</code></pre></div><h3 id="render\u6E32\u67D3\u51FD\u6570" tabindex="-1">render\u6E32\u67D3\u51FD\u6570 <a class="header-anchor" href="#render\u6E32\u67D3\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u9996\u5148\u6765\u770B\u4E0B\u8FD9\u6837\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u4F1A\u770B\u5230\u6A21\u677F\u4E0A\u7279\u522B\u591A\u7684\u6761\u4EF6\u5224\u65AD\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>level === 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>level === 2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>level === 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>level === 4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u600E\u4E48\u624D\u80FD\u4F18\u5316\u5462\uFF1F\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528render\u6E32\u67D3\u51FD\u6570\u3002</p><div class="language-js"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;anchored-heading&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
      <span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span>   <span class="token comment">// \u6807\u7B7E\u540D\u79F0</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default <span class="token comment">// \u5B50\u8282\u70B9\u6570\u7EC4</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5C40\u90E8\u5F15\u5165\u7B2C\u4E09\u65B9ui\u6846\u67B6\u4F18\u5316" tabindex="-1">\u5C40\u90E8\u5F15\u5165\u7B2C\u4E09\u65B9UI\u6846\u67B6\u4F18\u5316 <a class="header-anchor" href="#\u5C40\u90E8\u5F15\u5165\u7B2C\u4E09\u65B9ui\u6846\u67B6\u4F18\u5316" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528UI\u6846\u67B6\uFF0C\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u6309\u9700\u52A0\u8F7D\u7684\u8BDD\uFF0C\u9700\u8981\u6BCF\u6B21\u90FD\u8981\u6CE8\u518C\u4F7F\u7528\u4E00\u4E0B\u3002\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Button<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Button<span class="token punctuation">)</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>Select<span class="token punctuation">.</span>name<span class="token punctuation">,</span> Select<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* \u6216\u5199\u4E3A
 * Vue.use(Button)
 * Vue.use(Select)
 */</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u4F18\u5316\u4E00\u4E0B\uFF0C\u521B\u5EFA\u4E00\u4E2AuIcompontents.js\u6587\u4EF6\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u6BCF\u6B21\u53EA\u9700\u8981\u5728\u8FD9\u6DFB\u52A0\u7EC4\u4EF6\u5373\u53EF</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>components<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> install <span class="token punctuation">}</span>

</code></pre></div><p>\u7136\u540E\uFF0C\u5728main.js\u6587\u4EF6\u4E2D\u5F15\u5165\u3002</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> uIcompontents <span class="token keyword">from</span> <span class="token string">&quot;./uIcompontents.js&quot;</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>uIcompontents<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="end" tabindex="-1">END <a class="header-anchor" href="#end" aria-hidden="true">#</a></h2><hr>`,46),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{m as __pageData,y as default};
