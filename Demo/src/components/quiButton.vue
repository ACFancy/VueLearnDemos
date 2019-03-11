<template>
  <button class="qui-btn" v-on:click="btnClickEvent" >
    <span> {{msg}}</span>
  </button>
</template>

// 按钮组件很简单，就是一个正常的button标签，script标签中暴露这个组件的data属性（data是Vue的属性值，不是乱写的~~）。当按钮组件被初始化的时候，msg自定义属性会被绑定到<span>标签中的{{msg}}中，两个花括号用来绑定属性，这种写法学过模版化前端代码的人应该都比较熟悉。这里需要注意一个地方，如果不是组件的话，正常data的写法可以直接写一个对象，比如data：{ msg ： ' 下载 ' }，但由于组件是会在多个地方引用的，JS中直接共享对象会造成引用传递，也就是说修改了msg后所有按钮的msg都会跟着修改，所以这里用function来每次返回一个对象实例。
// <script>
// export default {
//     data: function() {
//         return {
//             msg: '下载'
//         }
//     }
// }
// </script>

<script>
export default {
  props: {
    msg: {
      default: '下载'
    }
  },
  methods: {
    btnClickEvent: function() {
      //绑定事件关键code
      alert('默认alert')
      /* 这里的关键代码就是$emit，也叫触发机制，父组件监听，子组件触发。如果觉得绕，以下描述可能会比较好理解：小B（子组件）有一个电话号码（子组件注册的事件），有一天小B把电话号码告诉了小A（父组件），让小A打电话给他，于是小A就拨打了小B的电话号码（监听），这时候整个沟通流程没有结束，必须要小B接听了电话（触发），两人之间才算完成了打电话这件事情 */
      // alert('你点击了组件的click:btnClickEvent');
      /* 关键代码父组件触发自定义事件 */
      this.$emit('btnClickEvent')
    }
  },
}
</script>

<style scoped>
  @import './css/reset.import.css';
  @import './css/qui-btn.import.css';
</style>

//把属性写在props里面，就可以暴露给其他页面调用了，在组件中，props是专门用来暴露组件的属性接口的，这里给了一个默认值‘下载’，后面我们要使用的话，只需要<btn msg="确认"></btn> 就可以修改按钮的默认文案了。
//Vue是数据驱动模式的，当我在btn结构写上msg="确认"的时候，对应script里面的msg属性就会自动修改了
// <script>
//   export default {
//     props: {
//       msg: {
//         default: '下载'
//       }
//     }
//   }
// </script>
