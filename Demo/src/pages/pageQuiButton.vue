<template>
  <div id="pageQuiButton">
   <!-- 使用 -->
   <qui-btn v-on:btnClickEvent="doSth" msg="我可以点击"></qui-btn>
   <qui-btn v-on:btnClickEvent="doSth1" msg="确定"></qui-btn>
   <qui-btn v-on:btnClickEvent="doSth2" msg="取消"></qui-btn>
   <!-- <qui-btn msg="确定" class="small"></qui-btn> -->
  </div>
</template>

<script>
import quiBtn from '../components/quiButton.vue'
export default {
  name: 'pageQuiButton',
  components: {
    'qui-btn': quiBtn /* 注册自定义标签 */
  },
  methods: {
    doSth: function () {
      alert('你点击了组件的click:btnClickEvent')
    },
    doSth1: function () {
      alert('111')
    },
    doSth2: function () {
      alert('2222')
    }

  }
}
</script>
