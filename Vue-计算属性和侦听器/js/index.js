var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    //计算属性的getter
    //计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。
    reversedMessage: function () {
      // 'this' 指向 vm实例
      return this.message.split('').reverse().join('')
    },
    //计算属性将不再更新，因为 Date.now() 不是响应式依赖
    now: function () {
      return Date.now();
    }
  },
  //计算属性缓存 vs 方法
  //我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最
  //终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。
  //只在相关依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发
  //生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而
  //不必再次执行函数。
  methods: {
    reversedMessage2: function () {
      // 'this' 指向 vm实例
      return this.message.split('').reverse().join('')
    }
  },
});

// console.log(vm.reversedMessage)
// vm.message = 'GoodBye'
// console.log(vm.reversedMessage)

var app2 = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  //计算属性 vs 侦听属性
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
});

//上面代码是命令式且重复的。将它与计算属性的版本进行比较
var app3 = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    // fullName: function () {
    //   return this.firstName + ' ' + this.lastName
    // },
    //计算属性默认只有getter,需要时可以写一个setter
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
});

//侦听器
/*
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
*/
//在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
var app4 =  new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question'
  },
  watch: {  
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
     // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API' + error
        })
    }
  }
});



