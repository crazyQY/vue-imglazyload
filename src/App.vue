<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <img-lazyload class="imglazy" v-for="img in images" :src="img.src" :loadingImg="loading" :errorImg="error"></img-lazyload>
  </div>
</template>

<script>
// import vueImgLazyLoad from './lib/vue-imglazyload'
// Vue.use(vueImgLazyLoad)
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: '../src/assets/loading.gif',
      error: '../src/assets/error.jpg',
      images: [
        {
          src: '../src/assets/1.jpg'
        },
        {
          src: '../src/assets/2.jpg'
        },
        {
          src: '../src/assets/3.jpg'
        },
        {
          src: '../src/assets/4.jpg'
        },
        {
          src: '../src/assets/5.jpg'
        },
        {
          src: '../src/assets/6.jpg'
        },
        {
          src: '../src/assets/7.jpg'
        },
        {
          src: '../src/assets/8.jpg'
        },
        {
          src: '../src/assets/91.jpg'
        }
      ]
    }
  },
  methods: {
    init () {
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.imglazy {
  width: 300px;
  height: 200px;
  margin: 20px auto;
}
</style>
