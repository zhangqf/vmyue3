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

## ref 和reactive

1. 数据类型

- ref
    适用于基本类型（string number boolean），可以用于对象和数组。当传递对象和数组时，内部会自动调用`reactive`进行深层响应式转换
- reactive
  仅适用于对象类型（对象 数组 集合类型Map Set），对基本类型无效

2.访问方式

- ref
  通过`.value`访问或修改值（模版中自动解包，无需`.value`）

- reactive
  直接访问属性

3.重新赋值

- ref
  允许直接替换整个对象，保持响应性

- reactive
  重新赋值会失去响应性（本质是Proxy代理原始对象，而非变量本身）

4.解构响应性

- ref
  解构时需要保持对`.value`的引用，否则失去响应性

  ```js
  const state = ref({a:1})
  const a = state.value.a // 普通值，无响应性
  ```

- reactive
  解构需用`toRefs`维持响应性

  ```js
  const state = reactive({a:1})
  const {a} = toRefs(state)
  ```

5.使用场景

- ref 适用场景
  - 基本类型数据
  - 需要替换整个对象/数组的响应式变量（如接口返回的数据替换）
  - 组合函数中返回响应式变量，便于解构使用
  
  ```js
  // usePerson.js
  export function usePerson() {
    const personRef = ref({
      name: "Alice",
      age: 11
    })
    const updatePerson = (name, age) => {
      personRef.value.name = name
      personRef.value.age = age
    }

    return {
      person: personRef
      updatePerson
    }
  }
  ```

  ```jsx
  // vue
  <template>
    <div>
      <p>Name: {{ person.name }}</p>
      <p>Age: {{ person.age }}</p>
      <button @click="updatePerson('Bob', 30)">Change Person</button>
    </div>
  </template>

  <script>
  import { usePerson } from "./usePerson"

  export default {
    setup() {
      const {person, updatePerson} = userPerson()
      return {
        person,
        updatePerson
      }
    }
  }
  <script>
  ```

- reactive 适用场景
  - 复杂的嵌套对象或需保持引用一致的数据结构
  - 无需重新赋值，仅需修改属性的对象

6.TypeScript类型推断

- ref
  自动推断包裹类型， 如`Ref<number>`
- reactive
  更精准推断对象属性类型，适合复杂的结构

|特性|ref|reactive|
|---|---|---|
|数据类型|基本类型+对象/数组|仅对象/数组|
|访问方式|.value (模版自动解包）|直接访问属性|
|重新赋值|支持（通过.value替换）|不支持（需保持对象引用一致）|
|解构响应性|需保持.value引用|需toRefs转换|
|适用场景|基本类型、需替换整体的数据|复杂对象、无需重新赋值的解构|

## 计算属性

计算属性是一种`基于响应式依赖进行缓存的属性`。它们会根据依赖的响应式数据自动更新，并且只有在依赖发生变化时才会重新计算。计算属性非常适合用于处理复杂的逻辑或需要频繁计算的场景

**总结**
计算属性是基于响应式依赖进行缓存的属性。

计算属性可以通过 computed 函数定义，并且可以是只读的或可写的。

计算属性适合用于处理复杂的逻辑或需要频繁计算的场景。

计算属性和方法的主要区别在于缓存机制，计算属性会缓存结果，而方法每次调用都会执行。

## watch

- 基本用法

  1. 监听ref定义的响应式数据

  *直接传入ref变量，可获取新旧值*

  ```js
  import {ref, watch} form 'vue'
  const count = ref(0)
  watch(count, (newVal, oldVal) => {
    console.log(`新值：${newVal}, 旧值：${oldVal}`)
  })
  ```

  2. 监听reactive定义的响应式数据

    *默认强制开启深度监听，但无法正确获取旧值（oldVal与newVal相同）*

    ```js
    const state = reactive({count:0})
    watch(state,(newVal, oldVal)=> {
      console.log(`新值：`, newVal.count)
    })
    ```

- 进阶配置

  1. 监听对象中的特定属性

  *使用函数式参数监听reactive对象的某个属性，可获取新旧值*

  ```js
  watch(() => state.count, (newVal, oldVal) => {
    console.log(`新值：${newVal}, 旧值：${oldVal}`)
  })
  ```

  2. 监听多个数据源

  *使用数组形式监听多个数据，参数按顺序对应*

  ```js
  watch([count, () => state.name], ([newCount, newName], [oldCount, oldName]) => {
    console.log('多个数据变化'， newCount, newName)
  })
  ```

  *任一数据变化都会触发回调*
  3. 配置选项

  - `deep：true`：深度监听对象内部变化（对ref对象有效）
  - `immediate: true`：立即执行回调（初始值触发）
  - `flush: 'post'`： DOM更新后执行回调（避免操作未渲染的DOM）

  ```js
  watch(sourc, callback, { deep: true, immediate: true, flush: 'post'})
  ```

- 特殊场景与注意事项

  1. 停止监听

  *watch返回一个停止函数，调用即可终止监听*

  ```js
  const stop = watch(count, callback)
  stop()
  ```

  2. watch与watchEffect的区别

  - `watch`： 需显式指定监听源，可获取新旧值，适合精确控制
  - `watchEffect`：自动追踪依赖，无新旧值，适合依赖多个数据的副作用

  ```js
  watchEffect(() => {
    console.log('自动追踪：', count.value, state.name)
  })
  ```

  3. 监听ref的深拷贝对象

  *若需获取引用类型数据的旧值，可监听其深拷贝*

  ```js
  const obj = ref({a:1})
  watch(()=> ({...obj.value}), (newVal, oldVal) => {
    console.log('新旧值不同：', newVal, oldVal)
  }, {deep: true})
  ```

- 常见问题

  1. reactive对象无法获取旧值
  *Vue3的响应式系统导致`oldVal`与`newVal`指向同一代理对象，需通过函数式监听属性或深拷贝解决*
  2. 深度监听无效
  *`reactive`对象默认深度监听，`deep`配置对其无效*

**Vue 3 的 watch 提供了灵活的数据监听能力，适用于不同响应式数据类型（ref/reactive）和复杂场景（多数据源、深度监听）。合理使用配置选项（如 immediate、flush）可优化性能与行为。若需简化依赖追踪，可结合 watchEffect 使用**

---

## watchEffect

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数

watchEffect不用明确指出监视的数据（函数中用到了哪些属性，就监听哪些属性）

---

## 标签的ref属性

用于注册模版引用

- 用在普通`DOM`标签上，获取的是`DOM`节点
- 用在组件标签上，获取的是组件的实例对象
