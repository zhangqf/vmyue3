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
