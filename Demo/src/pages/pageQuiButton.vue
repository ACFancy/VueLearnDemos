<template>
  <button class="qui-btn">
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  data: function () {
    return {
      msg: '下载'
    }
  }
}
</script>

<style scoped>
@import "./css/reset.import.css";
@import "./css/qui-btn.import.css";
</style>
// script标签中暴露这个组件的data属性（data是Vue的属性值，不是乱写的~~）。当按钮组件被初始化的时候，msg自定义属性会被绑定到<span>标签中的{{msg}}中，两个花括号用来绑定属性，这种写法学过模版化前端代码的人应该都比较熟悉。这里需要注意一个地方，如果不是组件的话，正常data的写法可以直接写一个对象，比如data：{ msg ： ' 下载 ' }，但由于组件是会在多个地方引用的，JS中直接共享对象会造成引用传递，也就是说修改了msg后所有按钮的msg都会跟着修改，所以这里用function来每次返回一个对象实例。
