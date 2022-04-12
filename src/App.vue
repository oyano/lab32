<template>
  <div id="app">
    <h1 v-mydirective:background.font="'pink'" v-if='flag'>
      {{msg}}
    </h1>
    <button @click='flag = !flag' v-mydirective:color="'red'">
      {{flag}}
    </button>
    <input type="text" v-model='msg' v-mydirective:background="'green'">
  </div>
</template>

<script>
import MyDirective from './mydirective';

export default {
  name: 'app',
  data() {
    return{
      msg: 'Welcome',
      flag: true,
    }
  },
  directives: {
    mydirective: MyDirective,
  }
}
</script>
