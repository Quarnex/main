<template>

  <div id="app">


    <input v-model="menu_layers">


    <button>2131</button>

    <div class="menu">


      <label @click="menu_layers=!menu_layers">Конструктор</label>{{amper}}<br><br>

      <transition name="slide-fade">
          <sidepanel v-if="menu_layers==true" />
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

          menu_layers:false,

          amper:'&'
      }
    },
    components: {
      sidepanel,
    },
    methods:{
    
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
    box-sizing: border-box;
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

  .menu {
    width: 20%;
    background: #f2f2f2;         
  } 

</style>
