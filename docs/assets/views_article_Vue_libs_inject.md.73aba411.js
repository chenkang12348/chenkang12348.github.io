import{_ as n,c as a,o as s,f as t}from"./app.906f0cb7.js";const g='{"title":"vue\u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165 provide \u548C inject","description":"","frontmatter":{"title":"vue\u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165 provide \u548C inject","theme":"default","tag":"Vuejs","time":"2020.10.11"},"headers":[{"level":2,"title":"vue \u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165 provide \u548C inject","slug":"vue-\u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165-provide-\u548C-inject"}],"relativePath":"views/article/Vue/libs/inject.md"}',e={},p=t(`<h2 id="vue-\u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165-provide-\u548C-inject" tabindex="-1">vue \u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165 provide \u548C inject <a class="header-anchor" href="#vue-\u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165-provide-\u548C-inject" aria-hidden="true">#</a></h2><p><img src="//p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3167467ed314cf88e3766c92629e8d7~tplv-k3u1fbpfcp-zoom-1.image" alt=""> provide \u9009\u9879\u5141\u8BB8\u6211\u4EEC\u6307\u5B9A\u6211\u4EEC\u60F3\u8981\u63D0\u4F9B\u7ED9\u540E\u4EE3\u7EC4\u4EF6\u7684\u6570\u636E/\u65B9\u6CD5\u3002</p><p><strong>\u4E0B\u9762\u662F\u4E00\u4E2A\u7EC4\u4EF7\u5237\u65B0\u7684\u6848\u5217</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isRouterAlive<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
export default {
  data() {
    return {
      isRouterAlive: true
    }
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}

</code></pre></div><p>\u7136\u540E\u5728\u4EFB\u4F55\u540E\u4EE3\u7EC4\u4EF6\u91CC\uFF0C\u6211\u4EEC\u90FD\u53EF\u4EE5\u4F7F\u7528 inject \u9009\u9879\u6765\u63A5\u6536\u6307\u5B9A\u7684\u6211\u4EEC\u60F3\u8981\u6DFB\u52A0\u5728\u8FD9\u4E2A\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\uFF1A</p><div class="language-"><pre><code>inject: [&#39;reload&#39;]
</code></pre></div><p>\u6CE8\uFF1A\u4F9D\u8D56\u6CE8\u5165\u6240\u63D0\u4F9B\u7684\u5C5E\u6027\u662F\u975E\u54CD\u5E94\u5F0F</p>`,7),o=[p];function c(i,l,u,r,k,d){return s(),a("div",null,o)}var _=n(e,[["render",c]]);export{g as __pageData,_ as default};
