import{_ as n,c as s,o as a,f as p}from"./app.8d77b971.js";const y='{"title":"\u9F20\u6807\u62D6\u62FD\u5EFA\u7ACB\u9009\u533A\uFF0C\u9009\u4E2D\u5143\u7D20","description":"","frontmatter":{"title":"\u9F20\u6807\u62D6\u62FD\u5EFA\u7ACB\u9009\u533A\uFF0C\u9009\u4E2D\u5143\u7D20","theme":"default","tag":"Vuejs","time":"2021.7.14"},"headers":[{"level":3,"title":"\u6548\u679C\u5C55\u793A","slug":"\u6548\u679C\u5C55\u793A"},{"level":3,"title":"\u5EFA\u7ACB\u9009\u533A\u7EC4\u4EF6","slug":"\u5EFA\u7ACB\u9009\u533A\u7EC4\u4EF6"},{"level":3,"title":"\u5B8C\u6574\u4EE3\u7801\u9644\u4E0A","slug":"\u5B8C\u6574\u4EE3\u7801\u9644\u4E0A"}],"relativePath":"views/article/Vue/libs/select.md"}',t={},o=p(`<p>\u8FD1\u6BB5\u65F6\u95F4\u505A\u4E00\u4E2A\u7F16\u8F91\u5668\uFF0C\u5C31\u9700\u8981\u4E00\u4E2A\u9F20\u6807\u62D6\u62FD\u9009\u533A\u7684\u529F\u80FD\uFF0C\u65B9\u4FBF\u6279\u91CF\u9009\u4E2D\u5143\u7D20\uFF0C\u8FDB\u884C\u76F8\u5E94\u64CD\u4F5C\uFF0C\u6240\u6709\u5C31\u6709\u4E86\u8FD9\u7BC7\u6587\u7AE0\u3002</p><h3 id="\u6548\u679C\u5C55\u793A" tabindex="-1">\u6548\u679C\u5C55\u793A <a class="header-anchor" href="#\u6548\u679C\u5C55\u793A" aria-hidden="true">#</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24bade2b81104b6e8b2e874445214281~tplv-k3u1fbpfcp-watermark.image" alt=""><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af27fb546f2941ea8ebe7e12f656818b~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3 id="\u5EFA\u7ACB\u9009\u533A\u7EC4\u4EF6" tabindex="-1">\u5EFA\u7ACB\u9009\u533A\u7EC4\u4EF6 <a class="header-anchor" href="#\u5EFA\u7ACB\u9009\u533A\u7EC4\u4EF6" aria-hidden="true">#</a></h3><p>1\u3001\u8981\u60F3\u9009\u4E2D\u5143\u7D20\uFF0C\u80AF\u5B9A\u8981\u5148\u5EFA\u7ACB\u9009\u533A</p><ul><li>\u6839\u636E\u4E24\u4E2A\u5750\u6807\u70B9\u786E\u5B9A\u9009\u533A\u4F4D\u7F6E\uFF0C\u5E76\u7ED8\u5236\u51FA\u9009\u533A</li><li>\u6839\u636E\u4E24\u4E2A\u5750\u6807\u5220\u9664\u9009\u533A\u7684\u5BBD\u4E0E\u9AD8</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> width <span class="token operator">=</span>
    props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token number">0</span>
      <span class="token operator">?</span> <span class="token number">0</span>
      <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x <span class="token operator">-</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> height <span class="token operator">=</span>
    props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y <span class="token operator">===</span> <span class="token number">0</span>
      <span class="token operator">?</span> <span class="token number">0</span>
      <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y <span class="token operator">-</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    width<span class="token punctuation">,</span>
    height<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u786E\u5B9A\u8D77\u59CB\u5750\u6807\u70B9 <ul><li>\u4E0D\u7BA1\u4ECE\u4F55\u5904\u70B9\u51FB\u90FD\u9700\u8981\u627E\u5230\u4E24\u4E2A\u5750\u6807\u70B9\u6240\u7ED8\u5236\u7684\u77E9\u5F62\u7684\u5DE6\u4E0A\u89D2\u7684\u5750\u6807\u70B9\u3002</li><li>\u5DE6\u4E0A\u89D2\u7684\u5750\u6807\u70B9\uFF0C\u5F88\u660E\u663E\u662F\u6240\u6709\u5750\u6807\u7684\u6700\u5C0F\u503C\uFF0C\u4E5F\u5C31\u662F X,Y \u53D6\u6700\u5C0F\u7684\u503C\u7684\u70B9\uFF08\u5982\u4E0B\uFF09</li><li>\u8FD8\u9700\u8981\u8003\u8651\u7EC8\u70B9\u8FD8\u6CA1\u6709\u4EA7\u751F\u65F6\u7684\u60C5\u51B5\uFF0C\u4E5F\u5C31\u662F\u6392\u9664\u7EC8\u70B9\u4E3A\u521D\u59CB\u503C\u4E5F\u5C31\u662F 0 \u7684\u60C5\u51B5</li></ul></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> Point <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span>
    props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token number">0</span>
      <span class="token operator">?</span> props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x
      <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span>
    props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y <span class="token operator">===</span> <span class="token number">0</span>
      <span class="token operator">?</span> props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y
      <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y<span class="token punctuation">,</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">,</span>
    y<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u8FD9\u6837\u5C31\u53EF\u7ED8\u5236\u51FA\u4E00\u4E2A\u9009\u533A</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23bbd40e8ac84f689ca434e0df18fac9~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>2\u3001\u6839\u636E\u9009\u533A\uFF0C\u7B5B\u9009\u51FA\u9009\u4E2D\u7684\u5143\u7D20</p><ul><li>\u7B5B\u9009\u9009\u533A\u7684\u5143\u7D20\u4E3B\u8981\u662F\u6839\u636E nodeType \u9009\u4E2D\u51FA\u7F16\u8F91\u533A\u6240\u6709\u53EF\u9009\u62E9\u7684\u5143\u7D20\u8282\u70B9\u3002</li><li>\u600E\u4E48\u624D\u7B97\u53EF\u9009\u5143\u7D20\uFF0C\u8FD9\u5C31\u5F97\u770B\u81EA\u5DF1\u9700\u8981\uFF0C\u6211\u5728\u5143\u7D20\u8282\u70B9\u4E0A\u6807\u6CE8\u4E86 canChecked\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u5C5E\u6027\u6392\u9664\u975E\u53EF\u9009\u5143\u7D20</li></ul><div class="language-js"><pre><code><span class="token comment">/*
 * \u83B7\u53D6\u8BE5\u5143\u7D20\u4E0B\u53EF\u4EE5\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u96C6\u5408
 * @param parentElement \u7236\u5143\u7D20
 * @param keyCode \u53EF\u9009\u5143\u7D20\u6807\u8BC6
 * @returns
 */</span>
<span class="token keyword">function</span> <span class="token function">getChildrens</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">parentElement</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">keyCode</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> childs <span class="token operator">=</span> parentElement<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> childs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>childs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>keyCode<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ary<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>childs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ary <span class="token keyword">as</span> Array<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>3\u3001\u5224\u65AD\u8282\u70B9\u662F\u5426\u5728\u9009\u533A\u5185</p><ul><li>\u8FD9\u4E2A\u4E3B\u8981\u6839\u636E getBoundingClientRect \u65B9\u6CD5\u8FD4\u56DE\u7684\u4FE1\u606F</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62e7e3fc2e13479f980cebf410316f9e~tplv-k3u1fbpfcp-watermark.image" alt=""></p><ul><li>\u5F53\u9009\u533A\u7684 top \u4E0E left \u5C0F\u4E8E\u5224\u65AD\u5143\u7D20\uFF0Cbottom \u4E0E\u5927\u4E8E\u5224\u65AD\u5143\u7D20\uFF0C\u5373\u8BA4\u4E3A\u8BE5\u5143\u7D20\u5728\u9009\u533A\u5185\u3002</li></ul><div class="language-js"><pre><code><span class="token comment">/**
 * \u5224\u65AD\u5143\u7D20\u662F\u5426\u5728\u9009\u533A\u5185
 * @param selectBoxElement \u9009\u533A\u5143\u7D20
 * @param canCheckedElements  \u53EF\u9009\u4E2D\u5143\u7D20\u5217\u8868
 */</span>
<span class="token keyword">function</span> <span class="token function">judgeContainElement</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">selectBoxElement</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>
  <span class="token literal-property property">canCheckedElements</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">ContainElement</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> top <span class="token punctuation">}</span> <span class="token operator">=</span> selectBoxElement<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  canCheckedElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> child <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      child<span class="token punctuation">.</span>left <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span>
      child<span class="token punctuation">.</span>top <span class="token operator">&gt;</span> top <span class="token operator">&amp;&amp;</span>
      child<span class="token punctuation">.</span>bottom <span class="token operator">&lt;</span> bottom <span class="token operator">&amp;&amp;</span>
      child<span class="token punctuation">.</span>right <span class="token operator">&lt;</span> right
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ContainElement<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> ContainElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>4\u3001\u81F3\u6B64\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u83B7\u5F97\u5230\u9009\u533A\u5185\u9009\u4E2D\u5143\u7D20\u4E86\uFF0C\u7136\u540E\u5C31\u53EF\u5BF9\u9009\u4E2D\u5143\u7D20\u505A\u9700\u8981\u7684\u64CD\u4F5C\u4E86\uFF0C\u4E5F\u5C31\u662F\u5982\u6548\u679C\u56FE\u6240\u793A/</p><h3 id="\u5B8C\u6574\u4EE3\u7801\u9644\u4E0A" tabindex="-1">\u5B8C\u6574\u4EE3\u7801\u9644\u4E0A <a class="header-anchor" href="#\u5B8C\u6574\u4EE3\u7801\u9644\u4E0A" aria-hidden="true">#</a></h3><p>1\u3001\u7EC4\u4EF6\u57FA\u7840\u7ED3\u6784\u6587\u4EF6</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select-area<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select-area<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
      { width: size.width + <span class="token punctuation">&#39;</span>px<span class="token punctuation">&#39;</span> },
      { height: size.height + <span class="token punctuation">&#39;</span>px<span class="token punctuation">&#39;</span> },
      { top: Point.y + <span class="token punctuation">&#39;</span>px<span class="token punctuation">&#39;</span> },
      { left: Point.x + <span class="token punctuation">&#39;</span>px<span class="token punctuation">&#39;</span> },
    ]<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> PropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;SelectArea&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">startPoint</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Point<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">endPoint</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>Point<span class="token operator">&gt;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> Point <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> x <span class="token operator">=</span>
        props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token number">0</span>
          <span class="token operator">?</span> props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x
          <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x<span class="token punctuation">,</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> y <span class="token operator">=</span>
        props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y <span class="token operator">===</span> <span class="token number">0</span>
          <span class="token operator">?</span> props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y
          <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y<span class="token punctuation">,</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        x<span class="token punctuation">,</span>
        y<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> size <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> width <span class="token operator">=</span>
        props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token number">0</span>
          <span class="token operator">?</span> <span class="token number">0</span>
          <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x <span class="token operator">-</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> height <span class="token operator">=</span>
        props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y <span class="token operator">===</span> <span class="token number">0</span>
          <span class="token operator">?</span> <span class="token number">0</span>
          <span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y <span class="token operator">-</span> props<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        width<span class="token punctuation">,</span>
        height<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      Point<span class="token punctuation">,</span>
      size<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.select-area</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 192<span class="token punctuation">,</span> 203<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>2\u3001\u5BFC\u51FA\u7EC4\u4EF6\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createVNode<span class="token punctuation">,</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SelectAreaConstructor <span class="token keyword">from</span> <span class="token string">&#39;./SelectArea.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">instence</span><span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> instenceIsExit <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">SelectArea</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>instenceIsExit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>instence <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    instenceIsExit <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token function">createVNode</span><span class="token punctuation">(</span>SelectAreaConstructor<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>
  instence <span class="token operator">=</span> container<span class="token punctuation">.</span>firstElementChild <span class="token keyword">as</span> HTMLElement<span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>instence<span class="token punctuation">)</span><span class="token punctuation">;</span>
  instenceIsExit <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> instence<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>instenceIsExit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-unused-vars</span>
    instenceIsExit <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>instence <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    instence <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> SelectArea<span class="token punctuation">,</span> close <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div><p>3\u3001\u5E94\u7528\u6587\u4EF6 setup \u90E8\u5206</p><div class="language-js"><pre><code> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> selectProps <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">startPoint</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">endPoint</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> mouseKey <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u76D1\u542C\u9F20\u6807\u79FB\u52A8\uFF08\u79FB\u51FA\u7F16\u8F91\u533A\u8303\u56F4\uFF0C\u4E0D\u518D\u76D1\u542C\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6\uFF09</span>
    <span class="token keyword">let</span> mouseComplete <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6\u662F\u5426\u5B8C\u6210\uFF08\u9F20\u6807\u6309\u4E0B\u5230\u62AC\u8D77\u7684\u6D41\u7A0B\uFF09</span>
    <span class="token keyword">const</span> <span class="token function-variable function">headleMouseDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      selectProps<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span>
      selectProps<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY<span class="token punctuation">;</span>
      <span class="token function">SelectArea</span><span class="token punctuation">(</span>selectProps<span class="token punctuation">)</span><span class="token punctuation">;</span>
      mouseKey<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      mouseComplete<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">headleMouseMove</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>mouseKey<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>mouseComplete<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        selectProps<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">;</span>
        selectProps<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY<span class="token punctuation">;</span>
        <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#select-area&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> parent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.edit-area&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> containDiv <span class="token operator">=</span> <span class="token function">selectElement</span><span class="token punctuation">(</span>
          parent <span class="token keyword">as</span> HTMLElement<span class="token punctuation">,</span>
          div <span class="token keyword">as</span> HTMLElement<span class="token punctuation">,</span>
          <span class="token string">&#39;canChecked&#39;</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        containDiv<span class="token punctuation">.</span>canCheckedElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        containDiv<span class="token punctuation">.</span>containElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>border <span class="token operator">=</span> <span class="token string">&#39;1px solid red&#39;</span><span class="token punctuation">;</span>
          item<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token string">&#39;move&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">headleDrag</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9632\u6B62\u4E0E\u62D6\u52A8\u4E8B\u4EF6\u51B2\u7A81</span>
      e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">headleMouseUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      mouseKey<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      mouseComplete<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      selectProps<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      selectProps<span class="token punctuation">.</span>startPoint<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      selectProps<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      selectProps<span class="token punctuation">.</span>endPoint<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span> headleMouseDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> headleMouseMove<span class="token punctuation">)</span><span class="token punctuation">;</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> headleMouseUp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span> headleMouseDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> headleMouseMove<span class="token punctuation">)</span><span class="token punctuation">;</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> headleMouseUp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">saveWeekly</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      headleMouseDown<span class="token punctuation">,</span>
      headleMouseMove<span class="token punctuation">,</span>
      headleMouseUp<span class="token punctuation">,</span>
      headleDrag<span class="token punctuation">,</span>
      saveWeekly<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>4\u3001\u8F85\u52A9\u5DE5\u5177\u51FD\u6570\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token comment">/**
 * \u83B7\u53D6\u8BE5\u5143\u7D20\u4E0B\u53EF\u4EE5\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u96C6\u5408
 * @param parentElement \u7236\u5143\u7D20
 * @param selectBoxElement \u9009\u62E9\u6846\u5143\u7D20
 * @param keyCode \u53EF\u9009\u5143\u7D20\u6807\u8BC6
 * @returns
 */</span>
<span class="token keyword">function</span> <span class="token function">selectElement</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">parentElement</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>
  <span class="token literal-property property">selectBoxElement</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>
  <span class="token literal-property property">keyCode</span><span class="token operator">:</span> string</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canCheckedElements <span class="token operator">=</span> <span class="token function">getChildrens</span><span class="token punctuation">(</span>parentElement<span class="token punctuation">,</span> keyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> containElements <span class="token operator">=</span> <span class="token function">judgeContainElement</span><span class="token punctuation">(</span>
    selectBoxElement<span class="token punctuation">,</span>
    canCheckedElements
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    containElements<span class="token punctuation">,</span>
    canCheckedElements<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> selectElement <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">/**
 *
 * \u83B7\u53D6\u8BE5\u5143\u7D20\u4E0B\u53EF\u4EE5\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u96C6\u5408
 * @param parentElement \u7236\u5143\u7D20
 * @param keyCode \u53EF\u9009\u5143\u7D20\u6807\u8BC6
 * @returns
 */</span>
<span class="token keyword">function</span> <span class="token function">getChildrens</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">parentElement</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span> <span class="token literal-property property">keyCode</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> childs <span class="token operator">=</span> parentElement<span class="token punctuation">.</span>childNodes<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> childs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>nodeType <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>childs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span>keyCode<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ary<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>childs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> ary <span class="token keyword">as</span> Array<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">judgeContainElement</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">selectBoxElement</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">,</span>
  <span class="token literal-property property">canCheckedElements</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">ContainElement</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> left<span class="token punctuation">,</span> right<span class="token punctuation">,</span> bottom<span class="token punctuation">,</span> top <span class="token punctuation">}</span> <span class="token operator">=</span> selectBoxElement<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  canCheckedElements<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> child <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      child<span class="token punctuation">.</span>left <span class="token operator">&gt;</span> left <span class="token operator">&amp;&amp;</span>
      child<span class="token punctuation">.</span>top <span class="token operator">&gt;</span> top <span class="token operator">&amp;&amp;</span>
      child<span class="token punctuation">.</span>bottom <span class="token operator">&lt;</span> bottom <span class="token operator">&amp;&amp;</span>
      child<span class="token punctuation">.</span>right <span class="token operator">&lt;</span> right
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      ContainElement<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> ContainElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div>`,29),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{y as __pageData,f as default};
