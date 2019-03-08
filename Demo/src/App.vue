<!-- 单页面组件 -->
<template>
  <div id="app">
    <h1 class="page-title"><a href="#/"> 开发组件库 </a> </h1>
    <img src="./assets/logo.png"> <!-- 共用部分 -->
    <router-view/> <!-- 路由容器 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>

<style scoped>
@import './assets/css/App.css';
/* 这里值得关注的地方是style标签
，我们可以在style标签里面直接写样式，
也可以直接引入一个样式文件，
scoped关键字表示这个样式是私有的，
也就是说，即使两个组件写着一样的#app{}样式也不会冲突
，程序会加上命名空间，这也就是为什么在script标签中有个name参数 */
</style>
