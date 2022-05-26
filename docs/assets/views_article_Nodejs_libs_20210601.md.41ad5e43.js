import{_ as n,c as s,o as a,e as t}from"./app.5f77e5d0.js";const m='{"title":"ssh2-sftp-client","description":"","frontmatter":{"title":"ssh2-sftp-client","theme":"default","tag":"Nodejs","time":"2020.09.26"},"headers":[{"level":2,"title":"\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177: ssh2-sftp-client","slug":"\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177-ssh2-sftp-client"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u5E38\u7528API","slug":"\u5E38\u7528api"},{"level":3,"title":"demo","slug":"demo"},{"level":2,"title":"END","slug":"end"}],"relativePath":"views/article/Nodejs/libs/20210601.md"}',p={},o=t(`<h2 id="\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177-ssh2-sftp-client" tabindex="-1">\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177: ssh2-sftp-client <a class="header-anchor" href="#\u81EA\u52A8\u90E8\u7F72\u5DE5\u5177-ssh2-sftp-client" aria-hidden="true">#</a></h2><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> ssh2-sftp-client
</code></pre></div><h3 id="\u5E38\u7528api" tabindex="-1">\u5E38\u7528API <a class="header-anchor" href="#\u5E38\u7528api" aria-hidden="true">#</a></h3><ul><li>rmdir(romotePath, true) \u9012\u5F52\u5220\u9664\u670D\u52A1\u5668\u6587\u4EF6\u5939</li><li>uploadDir(localPath, romotePath) \u9012\u5F52\u4E0A\u4F20\u6587\u4EF6\u5939</li><li>put(localPath, romotePath)</li><li>get(romotePath, localPath)</li></ul><h3 id="demo" tabindex="-1">demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">const</span> Client <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ssh2-sftp-client&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// const path = require(&#39;path&#39;)</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FDC\u7A0B\u5730\u5740</span>
    romotePath<span class="token punctuation">,</span>
    <span class="token comment">// \u672C\u5730\u5730\u5740</span>
    localPath<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">romote</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u670D\u52A1\u5668 ip \u5730\u5740</span>
    host<span class="token punctuation">,</span>
    <span class="token comment">// \u7AEF\u53E3\u53F7,\u9ED8\u8BA4\u662F 22</span>
    port<span class="token punctuation">,</span>
    <span class="token comment">// \u767B\u5F55\u7684\u7528\u6237\u540D</span>
    username<span class="token punctuation">,</span>
    <span class="token comment">// \u767B\u5F55\u5BC6\u7801</span>
    password<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u4E3B\u65B9\u6CD5
 * @method main
 * @param{String} localPath \u672C\u5730\u8DEF\u5F84,\u4E0D\u7528 path \u6A21\u5757,\u76F4\u63A5\u5B57\u7B26\u4E32\u5C31\u597D\u4E86,\u8FD9\u4E2A\u5305\u81EA\u5DF1\u6709\u683C\u5F0F\u5316\u7684
 * @param{String} romotePath \u8FDC\u7A0B\u8DEF\u5F84
 * @return{undefined} \u8FD4\u56DE\u4E2A*
*/</span>

<span class="token keyword">function</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">localPath<span class="token punctuation">,</span> romotePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B9E\u4F8B\u5316</span>
  <span class="token keyword">const</span> sftp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  sftp
    <span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>romote<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------------------------- \u8FDE\u63A5\u6210\u529F,\u4E0A\u4F20\u4E2D... -----------------------------&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> sftp<span class="token punctuation">.</span><span class="token function">uploadDir</span><span class="token punctuation">(</span>localPath<span class="token punctuation">,</span> romotePath<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------------------------- \u4E0A\u4F20\u5B8C\u6210,\u53CA\u65F6\u6E05\u9664\u7F13\u5B58 ----------------------------&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------------------------- \u51FA\u9519\u4E86\uFF01\uFF01 -----------------------------&#39;</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u65AD\u5F00\u8FDE\u63A5</span>
      sftp<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">main</span><span class="token punctuation">(</span>
  config<span class="token punctuation">.</span>path<span class="token punctuation">.</span>localPath<span class="token punctuation">,</span>
  config<span class="token punctuation">.</span>path<span class="token punctuation">.</span>romotePath<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="end" tabindex="-1">END <a class="header-anchor" href="#end" aria-hidden="true">#</a></h2><hr>`,9),e=[o];function c(l,u,i,k,r,h){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
