import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as e,b as n}from"./app-DNdO15IM.js";const a="/wr-web-docs.github.io/assets/001-VgBEmmX5.png",t="/wr-web-docs.github.io/assets/002-3Dl30sOe.png",l="/wr-web-docs.github.io/assets/003-D-OZ3Q4v.png",p="/wr-web-docs.github.io/assets/004-BkaoR4vu.png",r="/wr-web-docs.github.io/assets/005-Cz2YDxzr.png",h="/wr-web-docs.github.io/assets/006-DQdFOSZl.png",d="/wr-web-docs.github.io/assets/007-DknIyFQN.png",o="/wr-web-docs.github.io/assets/008-CIG6R1PK.png",c="/wr-web-docs.github.io/assets/009-C_VpI1DP.png",k="/wr-web-docs.github.io/assets/010-Ds_utJwW.png",g="/wr-web-docs.github.io/assets/011-kP2aS_V-.png",u="/wr-web-docs.github.io/assets/012-DX0CsLSV.png",B="/wr-web-docs.github.io/assets/013-BlkcutMd.png",v="/wr-web-docs.github.io/assets/014-B-Qqfjew.png",m="/wr-web-docs.github.io/assets/015-Mo-jKZtu.png",b={},y=n('<h1 id="项目的两种创建方式" tabindex="-1"><a class="header-anchor" href="#项目的两种创建方式"><span>项目的两种创建方式</span></a></h1><p><strong>uni-app</strong> 支持两种方式创建项目：</p><ol><li>通过 <strong>HBuilderX</strong> 创建。</li><li>通过 <strong>命令行</strong> 创建（不必依赖 <strong>HBuilderX</strong>）。</li></ol><h2 id="hbuilderx-创建" tabindex="-1"><a class="header-anchor" href="#hbuilderx-创建"><span>HBuilderX 创建</span></a></h2><p>通过 <strong>HbuilderX</strong> 创建 <strong>uni-app</strong> 的 <strong>vue3</strong> 项目：</p><p><img src="'+a+'" alt="001"></p><p><strong>vue2</strong> 同理，<strong>vue2</strong> 只需在上图中的第三步中，选择 <strong>vue2</strong> 版本即可。</p><p>安装 <strong>uni-app</strong> 的 <strong>vue3</strong> 编译器插件：</p><p><img src="'+t+'" alt="002"></p><p><strong>vue2</strong> 同理，<strong>vue2</strong> 只需要在上图的第四步中，装 <strong>vue2</strong> 对应的编译插件即可。</p><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span>安装依赖</span></a></h3><p>如果是直接通过 <strong>HBuilderx</strong> 创建的项目，想要安装依赖可以通过 <a href="https://ext.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">插件市场</a> 进行下载安装。</p><p>如果想要通过 <code>NPM</code> 的方式安装，因为通过 <strong>HBuilderx</strong> 创建的项目根目录中没有 <code>package.json</code> 文件，所以需要先 <strong>初始化 npm 工程</strong>：</p><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">npm </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">init</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="命令行创建" tabindex="-1"><a class="header-anchor" href="#命令行创建"><span>命令行创建</span></a></h2><p>具体流程查看：<a href="https://uniapp.dcloud.net.cn/quickstart-cli.html#%E5%88%9B%E5%BB%BAuni-app" target="_blank" rel="noopener noreferrer">官网链接</a>。</p><p>这里简单说一下 <code>vue3 + vite</code> 项目的创建：</p><p>使用 <code>Vue3/Vite</code> 版，创建以 <code>typescript</code> 开发的工程（如命令行创建失败，请直接访问 <a href="https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip" target="_blank" rel="noopener noreferrer">gitee</a> 下载模板）：</p><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">npx degit </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">dcloudio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uni</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">preset</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">vite</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ts</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> 项目名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用 <code>Vue3/Vite</code> 版，创建以 <code>javascript</code> 开发的工程（如命令行创建失败，请直接访问 <a href="https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite.zip" target="_blank" rel="noopener noreferrer">gitee</a> 下载模板）：</p><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">npx degit </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">dcloudio</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uni</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">preset</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">#vite 项目名称</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="vs-code-开发-uni-app-项目" tabindex="-1"><a class="header-anchor" href="#vs-code-开发-uni-app-项目"><span>VS Code 开发 uni-app 项目</span></a></h3><p>为什么选择 VS Code ？</p><ul><li><strong>HbuilderX</strong> 对 <code>TS</code> 类型支持暂不完善。</li><li><strong>VS Code</strong> 对 <code>TS</code> 类型支持友好，熟悉的编辑器。</li></ul><p><img src="'+l+'" alt="003"></p><h3 id="vs-code-安装相关拓展插件" tabindex="-1"><a class="header-anchor" href="#vs-code-安装相关拓展插件"><span>VS Code 安装相关拓展插件</span></a></h3><p><img src="'+p+'" alt="004"></p><h4 id="uni-create-view" tabindex="-1"><a class="header-anchor" href="#uni-create-view"><span>uni-create-view</span></a></h4><p>在没有安装 <code>uni-create-view</code> 拓展之前，我们在 <strong>VS Code</strong> 中 <strong>右键目录</strong> 是没有新建 <strong>uni-app</strong> 页面的选项的：</p><p><img src="'+r+'" alt="005"></p><p>当我们安装了 <code>uni-create-view</code> 拓展之后，右键目录，发现已经可以选择新建 <strong>uni-app</strong> 页面了：</p><p><img src="'+h+'" alt="006"></p><p>新建一个 <strong>uni-app</strong> 页面：</p><p><img src="'+d+'" alt="007"></p><p>通过该右键新建的页面，在 <strong>pages.json</strong> 也会帮我们自动注册：</p><p><img src="'+o+'" alt="008"></p><h4 id="uni-helper" tabindex="-1"><a class="header-anchor" href="#uni-helper"><span>uni-helper</span></a></h4><p>在安装 <code>uni-helper</code> 拓展之前，如果我们在 <strong>uni-app</strong> 项目中输入内容，发现没有对应的代码提示：</p><p><img src="'+c+'" alt="009"></p><p>当我们安装了 <code>uni-helper</code> 拓展后，我们在给 <code>navigationBarTextStyle</code> 设置对应的属性值的时候，会给我们对应的代码提示：</p><p><img src="'+k+'" alt="010"></p><h4 id="uniapp小程序拓展" tabindex="-1"><a class="header-anchor" href="#uniapp小程序拓展"><span>uniapp小程序拓展</span></a></h4><p>我们在没有安装 <strong>uniapp小程序拓展</strong> 前，我们鼠标悬停模板中的 <code>view</code> 标签，发现没有任何提示：</p><p><img src="'+g+'" alt="011"></p><p>而当我们安装了 <strong>uniapp小程序拓展</strong> 后，我们鼠标悬停对应标签是，会给我们对应的提示：</p><p><img src="'+u+'" alt="012"></p><h4 id="ts-类型校验" tabindex="-1"><a class="header-anchor" href="#ts-类型校验"><span>ts 类型校验</span></a></h4><p>如果没有 <code>ts</code> 类型检验，那么当我们在组件使用的过程中，如果输入了一些错误的属性，那么将不会给我们任何提示，如下图中，给 <code>image</code> 组件的 <code>mode</code> 属性设置了一个错误的值，但是 <strong>VS Code</strong> 没有给我们错误的提示：</p><p><img src="'+B+`" alt="013"></p><h5 id="安装类型声明文件" tabindex="-1"><a class="header-anchor" href="#安装类型声明文件"><span>安装类型声明文件</span></a></h5><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">pnpm </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">D</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">types</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">wechat</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">miniprogram</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uni</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">helper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">uni</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">types</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><code>@types/wechat-miniprogram</code>：微信小程序的类型声明文件。</li><li><code>@uni-helper/uni-app-types</code>：<strong>uniapp</strong> 的类型声明文件。</li></ul><h5 id="配置-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#配置-tsconfig-json"><span>配置 tsconfig.json</span></a></h5><p>修改项目根目录下的 <code>tsconfig.json</code> 文件：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{ </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // ...省略了其它</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ... 省略了其它</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 配置类型声明</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      &quot;@dcloudio/types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      &quot;@types/wechat-miniprogram&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      &quot;@uni-helper/uni-app-types&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 配置 vue 的编译器，校验标签类型</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;vueCompilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;plugins&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;@uni-helper/uni-app-types/volar-plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ul><li><code>vueCompilerOptions</code> 中的配置是搭配 <strong>VS Code</strong> 中 <code>Volar（最新版本是 Vue - Official）</code> 拓展插件的最新版本的写法。</li><li>目前 <strong>（24年5月后）</strong> 因为 <strong>VS Code</strong> 插件的更新，插件 <code>Vue Language Features (Volar)</code> 早已被废弃，<code>Volar</code> 版本随着使用最新的 <code>vue</code> 插件 <strong>Vue-Official</strong> 版本已经达到了 <code>v2.0.28</code>，因此配置 <code>&quot;vueCompilerOptions&quot;</code> 时就要写官网最新的版本。</li><li>如果你的 <strong>VS Code</strong> 仍在使用的是其它版本的 <code>Volar</code>，要根据 <a href="https://uni-helper.js.org/uni-app-types" target="_blank" rel="noopener noreferrer">文档</a> 进行对应的配置。并且不同版本的 <code>@uni-helper/uni-app-types</code> 所依赖的 <code>typescript</code> 版本也不同。</li></ul><p>我这里演示用到的版本如下，<code>package.json</code>：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // ...省略其它</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">  &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;@dcloudio/types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;^3.4.12&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;@uni-helper/uni-app-types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;^1.0.0-alpha.3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">    &quot;typescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;^5.5.4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...省略其它</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详情查看 <a href="https://uni-helper.js.org/uni-app-types" target="_blank" rel="noopener noreferrer">文档</a> 和 <a href="https://github.com/uni-helper/uni-types/tree/main/packages/uni-app-types" target="_blank" rel="noopener noreferrer">官网</a>。</p><h5 id="测试-ts-类型校验" tabindex="-1"><a class="header-anchor" href="#测试-ts-类型校验"><span>测试 ts 类型校验</span></a></h5><p>当我们安装对应声明文件，并且配置完成后，再回来看看之前的组件页面，可以发现组件会有对应的错误提示：</p><p><img src="`+v+'" alt="014"></p><p>当我们修改成正确的属性后，页面组件正常显示：</p><p><img src="'+m+'" alt="015"></p><h2 id="uni-app-和-原生小程序开发区别" tabindex="-1"><a class="header-anchor" href="#uni-app-和-原生小程序开发区别"><span>uni-app 和 原生小程序开发区别</span></a></h2><ol><li>属性绑定 <code>src=&quot;{{ url }}&quot;</code> 升级成 <code>:src=&quot;url&quot;</code>。</li><li>事件绑定 <code>bindtap=&quot;eventName&quot;</code> 升级成 <code>@tap=&quot;eventName&quot;</code>，支持 <code>( )</code> 传参。</li><li>支持 <code>Vue</code> 常用指令 <code>v-for</code>、 <code>v-if</code>、<code>v-show</code>、<code>v-model</code> 等。</li></ol><p>温馨提示：调用接口能力，<strong>建议前缀 <code>wx</code> 替换为 <code>uni</code></strong> ，养成好习惯，<strong>这样支持多端开发</strong>。</p>',68),E=[y];function f(A,C){return e(),i("div",null,E)}const w=s(b,[["render",f],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/%E6%A1%86%E6%9E%B6/UniApp/%E9%A1%B9%E7%9B%AE%E7%9A%84%E4%B8%A4%E7%A7%8D%E5%88%9B%E5%BB%BA%E6%96%B9%E5%BC%8F/","title":"项目的两种创建方式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"HBuilderX 创建","slug":"hbuilderx-创建","link":"#hbuilderx-创建","children":[{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]}]},{"level":2,"title":"命令行创建","slug":"命令行创建","link":"#命令行创建","children":[{"level":3,"title":"VS Code 开发 uni-app 项目","slug":"vs-code-开发-uni-app-项目","link":"#vs-code-开发-uni-app-项目","children":[]},{"level":3,"title":"VS Code 安装相关拓展插件","slug":"vs-code-安装相关拓展插件","link":"#vs-code-安装相关拓展插件","children":[{"level":4,"title":"uni-create-view","slug":"uni-create-view","link":"#uni-create-view","children":[]},{"level":4,"title":"uni-helper","slug":"uni-helper","link":"#uni-helper","children":[]},{"level":4,"title":"uniapp小程序拓展","slug":"uniapp小程序拓展","link":"#uniapp小程序拓展","children":[]},{"level":4,"title":"ts 类型校验","slug":"ts-类型校验","link":"#ts-类型校验","children":[{"level":5,"title":"安装类型声明文件","slug":"安装类型声明文件","link":"#安装类型声明文件","children":[]},{"level":5,"title":"配置 tsconfig.json","slug":"配置-tsconfig-json","link":"#配置-tsconfig-json","children":[]},{"level":5,"title":"测试 ts 类型校验","slug":"测试-ts-类型校验","link":"#测试-ts-类型校验","children":[]}]}]}]},{"level":2,"title":"uni-app 和 原生小程序开发区别","slug":"uni-app-和-原生小程序开发区别","link":"#uni-app-和-原生小程序开发区别","children":[]}],"git":{"createdTime":1721512247000,"updatedTime":1723912588000,"contributors":[{"name":"wr","email":"893634104@qq.com","commits":3}]},"readingTime":{"minutes":4.11,"words":1232},"filePathRelative":"前端/框架/UniApp/项目的两种创建方式/README.md","localizedDate":"2024年7月21日","excerpt":"\\n<p><strong>uni-app</strong> 支持两种方式创建项目：</p>\\n<ol>\\n<li>通过 <strong>HBuilderX</strong> 创建。</li>\\n<li>通过 <strong>命令行</strong> 创建（不必依赖 <strong>HBuilderX</strong>）。</li>\\n</ol>\\n<h2>HBuilderX 创建</h2>\\n<p>通过 <strong>HbuilderX</strong> 创建 <strong>uni-app</strong> 的 <strong>vue3</strong> 项目：</p>\\n<p></p>\\n<p><strong>vue2</strong> 同理，<strong>vue2</strong> 只需在上图中的第三步中，选择 <strong>vue2</strong> 版本即可。</p>"}');export{w as comp,q as data};
