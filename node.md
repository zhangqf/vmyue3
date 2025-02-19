# vue3 相比vue2 的区别

## 性能提升

- 打包大小减少了`41%`
- 初次渲染快`55%`，更新渲染快`133%`
- 内存减少`54%`

## 源码升级

- 使用`proxy` 代替`defineProperty`实现响应式
  *vue2,对于对象属性的添加或删除，可能需要使用vue.set或者vue.delete，因为Object.defineProperty无法检测到这些变化。而Proxy可以监听整个对象。*
- 重新虚拟`DOM`的实现和`Tree-Shaking`

## 拥抱TypeScript

- `vue3` 可以更好的支持`TypeScript`

## 新的特性

- Composition API（组合API）
  *vue2用的是选项式API，如data，methods，computed这些分开写。vue3引入了setup函数，还有ref、reactive这些函数，可以让代码按功能组织，而不是分散在各个选项里。这样逻辑复用更方便。如用Composition API 写hook，类似React的Hooks*
  - setup
  - ref和reactive
  - computed于watch

- 新的内置组件
  - Fragment
  - Teleport
  - Suspense

- 其他改变
  - 新的生命周期钩子
  - data选项应始终被声明为一个函数
  - 移除keyCode支持作为 v—on的修饰符

---

## Vue 3 和 Vue 2 的主要区别可以从以下几个方面进行总结

### 响应式系统

- Vue 2：使用 Object.defineProperty 实现响应式，无法检测对象属性的添加/删除，需通过 Vue.set 或 Vue.delete 操作。

- Vue 3：基于 Proxy 重构响应式系统，支持动态属性增删、数组索引修改等场景，性能更高且无需额外 API。

---

### 组合式 API（Composition API）

- Vue 2：采用选项式 API（data, methods, computed 等），逻辑分散在不同选项中。

- Vue 3：引入组合式 API（setup 函数 + ref/reactive），允许按功能组织代码，提升逻辑复用性（类似 React Hooks）。

---

### 性能优化

- 虚拟 DOM 优化：

  - 静态节点提升（静态内容跳过 diff 比较）。

  - 编译时标记动态节点（patchFlag），减少运行时比对。

- Tree-shaking 支持：按需引入模块，减小打包体积（Vue 3 仅打包被使用的功能）。

- 响应式系统优化：依赖追踪更高效，内存占用更低。

---

### 生命周期钩子

- Vue 3：

  - beforeCreate 和 created 被 setup 替代。

  - 其他钩子名添加 on 前缀（如 onMounted、onUpdated）。

  - 新增 onRenderTracked 和 onRenderTriggered 用于调试。

---

### 模板特性

- 多根节点支持：Vue 3 支持模板中多个根元素（无需包裹 <div>）。

- v-model 改进：

  - 支持多个 v-model（如 v-model:title）。

  - 默认使用 modelValue 和 update:modelValue 替代 value 和 input。

- key 使用调整：v-if/v-else 不再强制要求 key。

---

### TypeScript 支持

- Vue 3：使用 TypeScript 重写，提供更好的类型推断和开发体验。

- Vue 2：需借助 vue-class-component 或 vue-property-decorator 实现类型支持。

---

### 新组件与 API

- Teleport：将组件渲染到 DOM 任意位置（类似 React Portal）。

- Suspense：处理异步组件加载状态（如加载中、错误）。

- Fragment：支持多根节点组件。

- 自定义渲染器：允许渲染到非 DOM 环境（如 Canvas、Native）。

---

### 全局 API 调整

- Vue 3：通过 createApp 创建实例，避免全局配置污染（如 Vue.use 改为 app.use）。

- 移除部分 API：如 $on、$off（事件总线模式被废弃），推荐使用 mitt 等库替代。

---

### 其他变化

- 过滤器（Filter）移除：建议用计算属性或方法替代。

- 事件监听：支持绑定多个同名事件（Vue 2 会覆盖）。

- 构建工具：推荐使用 Vite（基于原生 ES 模块，启动更快）。

---

### 总结

- 性能：更高效的响应式系统、虚拟 DOM 优化、Tree-shaking。

- 开发体验：组合式 API 提升代码组织、TypeScript 原生支持。

- 灵活性：Fragment、Teleport、自定义渲染器等新特性。

- 兼容性：Vue 3 支持大多数 Vue 2 特性，但部分 API 需调整。

**Vue 3 在性能、代码组织和可维护性上均有显著提升，适合新项目或对复杂场景有更高要求的应用。**

---

## vite

vite是新一代的前端构建工具，

优势：

- 轻量快速的热重载（HMR），能实现极速的服务启动
- 对Typescript、JSX、 CSS 等支持开箱即用
  *webpack需要对应的loader，webpack 只能处理js文件，*
- 真正的按需编译，不再等待整个应用编译完成

---

## webpack 和 vite 区别

### 设计理念

- webpack：
  - 是一个大包工具，专注于将项目中的所有资源（javascript css 图片等）打包成一个或多个文件
  - 采用`基于依赖图的打包方式`，通过解析模块依赖关系，生成最终的打包文件
  - 设计初衷是为了解决复杂项目的模块化问题，支持丰富的插架和加载器
- vite：
  - 是一个开发服务器 + 构建工具，专注于提升开发体验和构建效率
  - 采用`基于原生ES模块的开发模式`，利用现代浏览器的原生模块加载能力，实现快速的开发服务器启动和热更新
  - 设计初衷是为了解决Webpack在大型项目中开发启动慢，热更新慢点问题

### 性能

- webpack：
  - 开发模式： 启动较慢，因为需要先构建整个项目的依赖图
  - 热更新： 热更新速度较慢，尤其是大型项目
  - 生产模式： 打包优化成熟，支持代码分割，Tree-Shaking等高级功能

- vite：
  - 开发模式： 启动较快，因为直接利用浏览器的ES模块加载能力，无需预先打包
  - 热更新： 热更新速度快，只更新修改的部分
  - 生产模式： 使用Rollup进行打包，打包效率高，但生态和插架相对webpack较少

### 开发体验

- webpack：
  - 配置复杂，尤其是大型项目，需要手动配置加载器，插架等
  - 开发体验较为传统，启动和热更新速度较慢

- vite：
  - 配置简单，开箱即用，适合现代前端框架（vue3， React）
  - 开发体验极佳，启动和热更新速度快，支持按需加载

### 生态和插架

- webpack：
  - 生态极其丰富，支持大量插架和加载器，适用于各种复杂场景
  - 社区成熟，文档和教程丰富
- vite：
  - 生态相对较新，但发展迅速，支持主流框架（vue，React svelte）
  - 插架和工具链相对较少，但足以满足大多数现代前端开发需求。

### 适用场景

- webpack：
  - 适合`复杂的大型项目`,尤其是需要高度定制化打包流程的场景
  - 适合需要兼容旧版浏览器的项目
- vite：
  - 适合`现代前端项目`，尤其是追求开发效率和体验的场景
  - 适合使用Vue3、React等现代框架的项目

### 优缺点对比

|特性|Webpack|Vite｜
|---|---|---|
|启动速度|慢（需构建依赖图）|快（基于ES模块）|
|热更新速度|慢（需重新构建）|快（按需更新）|
|配置复杂度|复杂（虚手动配置）|简单（开箱即用）|
|生态和插架|丰富（插架和加载器多）|较少（但发展迅速）|
|生产打包|成熟（支持代码分割，Tree Shaking）|高效（基于Rollup）|
|使用场景|复杂大型项目、兼容旧浏览器|现代前端项目、追求开发效率 |

### 总结

- webpack是一个成熟且功能强大的打包工具，适合复杂项目和需要高度定制的场景，但开发体验较慢
- vite是一个现代化的开发工具，专注于提升开发效率和体验，适合现代前端项目，但在生态和插架方面相对较弱

**如果需要兼容旧浏览器或处理复杂项目是，选择webpack**
**如果追求开发效率和现代化前端开发体验，选择vite**
