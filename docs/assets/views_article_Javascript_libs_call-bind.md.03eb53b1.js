import{_ as n,c as s,o as a,b as p}from"./app.d57216e0.js";const h='{"title":"call\u3001apply\u3001bind\u8BE6\u89E3","description":"","frontmatter":{"title":"call\u3001apply\u3001bind\u8BE6\u89E3","theme":"default","tag":"Javascript","time":"2020.10.18"},"headers":[{"level":2,"title":"call\u3001apply\u3001bind \u8BE6\u89E3","slug":"call\u3001apply\u3001bind-\u8BE6\u89E3"},{"level":3,"title":"call(obj,arg1,arg2) //call()\u7684\u53C2\u6570\u4E00\u4E2A\u4E00\u4E2A\u7684\u4F20","slug":"call-obj-arg1-arg2-call-\u7684\u53C2\u6570\u4E00\u4E2A\u4E00\u4E2A\u7684\u4F20"},{"level":3,"title":"apply(obj,[arg1,arg2] //apply()\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5219\u662F\u4E00\u4E2A\u6570\u7EC4","slug":"apply-obj-arg1-arg2-apply-\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5219\u662F\u4E00\u4E2A\u6570\u7EC4"},{"level":3,"title":"bind(this) // bind()\u8FD4\u56DE\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\u3002","slug":"bind-this-bind-\u8FD4\u56DE\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\u3002"},{"level":2,"title":"\u624B\u5199\u5B9E\u73B0 call","slug":"\u624B\u5199\u5B9E\u73B0-call"},{"level":2,"title":"\u624B\u5199\u5B9E\u73B0 apply","slug":"\u624B\u5199\u5B9E\u73B0-apply"},{"level":2,"title":"\u624B\u5199\u5B9E\u73B0 bind","slug":"\u624B\u5199\u5B9E\u73B0-bind"}],"relativePath":"views/article/Javascript/libs/call-bind.md"}',t={},o=p(`<h2 id="call\u3001apply\u3001bind-\u8BE6\u89E3" tabindex="-1">call\u3001apply\u3001bind \u8BE6\u89E3 <a class="header-anchor" href="#call\u3001apply\u3001bind-\u8BE6\u89E3" aria-hidden="true">#</a></h2><p>\u4E09\u8005\u90FD\u662F\u6539\u53D8\u51FD\u6570\u6267\u884C\u65F6\u7684\u4E0A\u4E0B\u6587\uFF0C\u4E5F\u5C31\u662F\u5C31\u662F\u6539\u53D8 this \u7684\u6307\u5411\u3002</p><h3 id="call-obj-arg1-arg2-call-\u7684\u53C2\u6570\u4E00\u4E2A\u4E00\u4E2A\u7684\u4F20" tabindex="-1">call(obj,arg1,arg2) //call()\u7684\u53C2\u6570\u4E00\u4E2A\u4E00\u4E2A\u7684\u4F20 <a class="header-anchor" href="#call-obj-arg1-arg2-call-\u7684\u53C2\u6570\u4E00\u4E2A\u4E00\u4E2A\u7684\u4F20" aria-hidden="true">#</a></h3><p>\u51FD\u6570.call(\u7B2C\u4E00\u4E2A\u53C2\u6570:\u60F3\u8BA9\u51FD\u6570\u4E2D this \u6307\u5411\u8C01,\u5C31\u4F20\u8C01\u8FDB\u6765, \u540E\u9762\u7684\u53C2\u6570:\u672C\u8EAB\u51FD\u6570\u9700\u8981\u4F20\u9012\u5B9E\u53C2,\u9700\u8981\u51E0\u4E2A\u5B9E\u53C2,\u5C31\u4E00\u4E2A\u4E00\u4E2A\u7684\u4F20\u9012\u5373\u53EF); call \u7684\u4F5C\u7528: 1. \u8C03\u7528\u51FD\u6570 2.\u6307\u5B9A\u51FD\u6570\u4E2D this \u6307\u5411</p><h3 id="apply-obj-arg1-arg2-apply-\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5219\u662F\u4E00\u4E2A\u6570\u7EC4" tabindex="-1">apply(obj,[arg1,arg2] //apply()\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5219\u662F\u4E00\u4E2A\u6570\u7EC4 <a class="header-anchor" href="#apply-obj-arg1-arg2-apply-\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5219\u662F\u4E00\u4E2A\u6570\u7EC4" aria-hidden="true">#</a></h3><p>\u51FD\u6570.apply(\u7B2C\u4E00\u4E2A\u53C2\u6570:\u60F3\u8BA9\u51FD\u6570\u4E2D this \u6307\u5411\u8C01,\u5C31\u4F20\u8C01\u8FDB\u6765, \u7B2C\u4E8C\u4E2A\u53C2\u6570:\u8981\u6C42\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4,\u6570\u7EC4\u4E2D\u5305\u542B\u4E86\u51FD\u6570\u9700\u8981\u7684\u5B9E\u53C2) apply \u7684\u4F5C\u7528: 1. \u8C03\u7528\u51FD\u6570 2, \u6307\u5B9A\u51FD\u6570\u4E2D this \u7684\u6307\u5411</p><h3 id="bind-this-bind-\u8FD4\u56DE\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\u3002" tabindex="-1">bind(this) // bind()\u8FD4\u56DE\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\u3002 <a class="header-anchor" href="#bind-this-bind-\u8FD4\u56DE\u7684\u5176\u5B9E\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\u3002" aria-hidden="true">#</a></h3><p>\u51FD\u6570.bind(\u7B2C\u4E00\u4E2A\u53C2\u6570:\u60F3\u8BA9\u51FD\u6570\u4E2D this \u6307\u5411\u8C01,\u5C31\u4F20\u8C01\u8FDB\u6765, \u540E\u9762\u7684\u53C2\u6570:\u672C\u8EAB\u51FD\u6570\u9700\u8981\u4F20\u9012\u5B9E\u53C2,\u9700\u8981\u51E0\u4E2A\u5B9E\u53C2,\u5C31\u4E00\u4E2A\u4E00\u4E2A\u7684\u4F20\u9012\u5373\u53EF) bind \u7684\u4F5C\u7528: 1. \u514B\u9686\u5F53\u524D\u51FD\u6570,\u8FD4\u56DE\u514B\u9686\u51FA\u6765\u7684\u65B0\u7684\u51FD\u6570 \u3000\u3000\u3000\u3000 2. \u65B0\u514B\u9686\u51FA\u6765\u7684\u51FD\u6570,\u8FD9\u4E2A\u51FD\u6570\u7684 this \u88AB\u6307\u5B9A\u4E86</p><p>\u770B\u4E0B\u9762\u4F8B\u5B50\u5C31\u660E\u767D\u4E86\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj  <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Thezero&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8424\u706B\u4E4B\u68EE&quot;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">/</span> <span class="token operator">/</span>\u8424\u706B\u4E4B\u68EE
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  \u8424\u706B\u4E4B\u68EE</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function(){return this.age}</span>
</code></pre></div><h2 id="\u624B\u5199\u5B9E\u73B0-call" tabindex="-1">\u624B\u5199\u5B9E\u73B0 call <a class="header-anchor" href="#\u624B\u5199\u5B9E\u73B0-call" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">myThis<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;not a function!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  myThis <span class="token operator">=</span> myThis <span class="token operator">||</span> window<span class="token punctuation">;</span>
  myThis<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token comment">// this\u6307\u5411\u8C03\u7528call\u7684\u5BF9\u8C61,\u5373\u6211\u4EEC\u8981\u6539\u53D8this\u6307\u5411\u7684\u51FD\u6570</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> myThis<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6267\u884C\u5F53\u524D\u51FD\u6570</span>
  <span class="token keyword">delete</span> myThis<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5220\u9664\u6211\u4EEC\u58F0\u660E\u7684fn\u5C5E\u6027</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE\u51FD\u6570\u6267\u884C\u7ED3\u679C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u624B\u5199\u5B9E\u73B0-apply" tabindex="-1">\u624B\u5199\u5B9E\u73B0 apply <a class="header-anchor" href="#\u624B\u5199\u5B9E\u73B0-apply" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">myThis<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;not a function!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  myThis <span class="token operator">=</span> myThis <span class="token operator">||</span> window<span class="token punctuation">;</span>
  myThis<span class="token punctuation">[</span>fn<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token comment">// this\u6307\u5411\u8C03\u7528call\u7684\u5BF9\u8C61,\u5373\u6211\u4EEC\u8981\u6539\u53D8this\u6307\u5411\u7684\u51FD\u6570</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> myThis<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6267\u884C\u5F53\u524D\u51FD\u6570</span>
  <span class="token keyword">delete</span> myThis<span class="token punctuation">[</span>fn<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5220\u9664\u6211\u4EEC\u58F0\u660E\u7684fn\u5C5E\u6027</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE\u51FD\u6570\u6267\u884C\u7ED3\u679C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u624B\u5199\u5B9E\u73B0-bind" tabindex="-1">\u624B\u5199\u5B9E\u73B0 bind <a class="header-anchor" href="#\u624B\u5199\u5B9E\u73B0-bind" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">myThis<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;not a function!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">fbound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">self</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> myThis<span class="token punctuation">,</span>
      args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7EE7\u627F\u539F\u578B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</span>
  fbound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> fbound<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,16),c=[o];function e(l,u,i,k,r,d){return a(),s("div",null,c)}var f=n(t,[["render",e]]);export{h as __pageData,f as default};
