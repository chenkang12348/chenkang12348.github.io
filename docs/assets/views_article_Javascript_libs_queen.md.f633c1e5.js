import{_ as n,c as s,o as a,f as t}from"./app.906f0cb7.js";const y='{"title":"\u624B\u6495\u6570\u636E\u7ED3\u6784----\u961F\u5217\u4E0E\u4F18\u5148\u961F\u5217","description":"","frontmatter":{"title":"\u624B\u6495\u6570\u636E\u7ED3\u6784----\u961F\u5217\u4E0E\u4F18\u5148\u961F\u5217","theme":"default","tag":"Javascript","time":"2020.10.28"},"headers":[{"level":2,"title":"\u624B\u6495\u6570\u636E\u7ED3\u6784----\u961F\u5217\u4E0E\u4F18\u5148\u961F\u5217","slug":"\u624B\u6495\u6570\u636E\u7ED3\u6784-\u961F\u5217\u4E0E\u4F18\u5148\u961F\u5217"},{"level":3,"title":"\u4EC0\u4E48\u662F\u961F\u5217\uFF08\u5148\u8FDB\u5148\u51FA\uFF09","slug":"\u4EC0\u4E48\u662F\u961F\u5217\uFF08\u5148\u8FDB\u5148\u51FA\uFF09"},{"level":3,"title":"\u666E\u901A\u961F\u5217","slug":"\u666E\u901A\u961F\u5217"},{"level":3,"title":"\u4F18\u5148\u961F\u5217","slug":"\u4F18\u5148\u961F\u5217"}],"relativePath":"views/article/Javascript/libs/queen.md"}',p={},o=t(`<h2 id="\u624B\u6495\u6570\u636E\u7ED3\u6784-\u961F\u5217\u4E0E\u4F18\u5148\u961F\u5217" tabindex="-1">\u624B\u6495\u6570\u636E\u7ED3\u6784----\u961F\u5217\u4E0E\u4F18\u5148\u961F\u5217 <a class="header-anchor" href="#\u624B\u6495\u6570\u636E\u7ED3\u6784-\u961F\u5217\u4E0E\u4F18\u5148\u961F\u5217" aria-hidden="true">#</a></h2><h3 id="\u4EC0\u4E48\u662F\u961F\u5217\uFF08\u5148\u8FDB\u5148\u51FA\uFF09" tabindex="-1">\u4EC0\u4E48\u662F\u961F\u5217\uFF08\u5148\u8FDB\u5148\u51FA\uFF09 <a class="header-anchor" href="#\u4EC0\u4E48\u662F\u961F\u5217\uFF08\u5148\u8FDB\u5148\u51FA\uFF09" aria-hidden="true">#</a></h3><p>\u961F\u5217\uFF0C\u548C\u6808\u6709\u70B9\u7C7B\u4F3C\uFF0C\u4F46\u662F\u53C8\u4E0D\u592A\u4E00\u6837\uFF0C\u961F\u5217\u9075\u5FAA\u5148\u8FDB\u5148\u51FA\u7684\u539F\u5219\u3002 \u5217\u5C31\u662F\u6392\u961F\uFF0C\u5728\u524D\u9762\u7684\u4EBA\u5148\u4EAB\u53D7\u670D\u52A1\uFF0C\u5B8C\u540E\u524D\u9762\u7684\u4EBA\u5148\u8D70\u3002</p><h3 id="\u666E\u901A\u961F\u5217" tabindex="-1">\u666E\u901A\u961F\u5217 <a class="header-anchor" href="#\u666E\u901A\u961F\u5217" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * \u666E\u901A\u961F\u5217
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">peck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4F18\u5148\u961F\u5217" tabindex="-1">\u4F18\u5148\u961F\u5217 <a class="header-anchor" href="#\u4F18\u5148\u961F\u5217" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">/**
 * \u961F\u5217\u8282\u70B9
 */</span>
<span class="token keyword">class</span> <span class="token class-name">QueueNode</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> priority</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * \u5E26\u6709\u4F18\u5148\u7EA7\u7684\u961F\u5217
 */</span>
<span class="token keyword">class</span> <span class="token class-name">PriorityQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/**
   *
   * @param  val \u503C
   * @param {Number} priority \u4F18\u5148\u7EA7(\u9ED8\u8BA4\u4E3A0)
   */</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> priority <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>val<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;need a parameter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> newnode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueueNode</span><span class="token punctuation">(</span>val<span class="token punctuation">,</span> priority<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>priority <span class="token operator">&lt;</span> priority<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> newnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
        flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newnode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      result <span class="token operator">+=</span> <span class="token string">&#39;{data:&#39;</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>data <span class="token operator">+</span> <span class="token string">&#39;,priority:&#39;</span> <span class="token operator">+</span> item<span class="token punctuation">.</span>priority <span class="token operator">+</span> <span class="token string">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{y as __pageData,w as default};
