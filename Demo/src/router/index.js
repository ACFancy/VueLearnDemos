import Vue from 'vue'
import Router from 'vue-router' /* 引入路由插件 */
import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index'
import pageQuiButton from '../pages/pageQuiButton'
import pageQuiList from '../pages/pageQuiList'
import pageQuiNav from '../pages/pageQuiNav'

Vue.use(Router) /* 显示声明要用路由 */

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld', /* name参数不重要指示用来做识别用的 */
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    }
  ]
})
