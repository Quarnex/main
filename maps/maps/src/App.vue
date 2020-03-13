<template>
  <div id="app">
    <input v-model="asd">
      <button >2131</button>
          <div style="width: 190px;height: 400px;background: #F5F5F5;">
            <label v-on:click="testclick">Конструктор</label>{{amper}}<br><br>
              <transition name="slide-fade">
                  <sidepanel v-if="asd=='show'" />
              </transition>
            <label>Конструктор2</label>
          </div>
  </div>
 
</template>

<script>
import sidepanel from '@/components/sidepanel.vue'

export default {
  name: 'App',
  data(){
    return{
        asd:'dont-show',
        amper:'&'
    }
  },
  components: {
    sidepanel,
  },
  methods:{
    testclick(){
        this.asd='show'
        
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-leave-active {
  transition: all .12s cubic-bezier(1.2, 0.5, 0.8, 1.2);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
