<template>
  <div>
      <img ref="target" :src="loadingImg" :data-src="src" :data-error="errorImg">
  </div>
</template>

<script>
  export default {
    name: 'img-lazyload',
    props: {
      src: {
        type: String,
        default: ''
      },
      loadingImg: {
        type: String,
        default: ''
      },
      errorImg: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
    methods: {
      init () {
        this.loadImg()
        var _this = this
        window.addEventListener('scroll', () => {
          _this.throttle(_this.loadImg, _this, 300)
        })
        window.addEventListener('resize', () => {
          _this.throttle(_this.loadImg, _this, 300)
        })
      },
      loadImg () {
        let image = this.$refs.target
        if(this.isInSight(image)) {
          if (image.src !== image.dataset.src) {
            image.src = image.dataset.src
          }
        }
        image.onerror = function() {
          // console.log(image.dataset.error)
          image.src = image.dataset.error
        }
      },
      isInSight (el) {
        let windowHeight = window.innerHeight
        let top = el.getBoundingClientRect().top
        if(top < windowHeight-50) {
          return true
        }
      },
      throttle (method, context, delay) {
        clearTimeout(method.tId)
        method.tId = setTimeout(() => {
          method.call(context)
        }, delay)
      }
    },
    mounted () {
      this.init()
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>