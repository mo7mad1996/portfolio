<template>
  <div
    class="portfolio"
    @mousemove="mousemove"
    @touchstart="touchstart"
    @touchend="touchend"
    @wheel="scroll"
  >
    <div class="bg">
      <div
        class="stars"
        :style="`transform: translate(${mouse.x / 100}px, ${mouse.y / 100}px)`"
      >
        <img src="/background/star.svg" class="stars" alt="" />
      </div>
      <div
        class="moonlight"
        :style="`transform: translate(${-mouse.x / 50}px, ${-mouse.y / 50}px)`"
      >
        <img src="/background/moonlight.svg" alt="moonlight" />
      </div>
    </div>

    <!-- start contant -->
    <div class="contant">
      <AsideComponent />

      <main ref="content">
        <Home :mouse="mouse" @animation="animationend" />
        <Works @animation="animationend" />
        <About @animation="animationend" />
        <Contact @animation="animationend" />
      </main>
    </div>
  </div>
</template>

<script>
// componens
import Home from '@/components/land/home'
import Works from '@/components/land/works'
import About from '@/components/land/about'
import Contact from '@/components/land/contact'
import AsideComponent from '@/components/layout/aside/index'

// vuex
import { mapState } from 'vuex'

export default {
  scrollToTop: true,
  data() {
    return {
      mouse: {
        x: 0,
        y: 0,
      },
      is_in_anmation: true,
      Touch: {
        start: 0,
        end: 0,
      },
    }
  },
  computed: {
    ...mapState(['links']),
    hash: function () {
      return this.$route.hash
    },
  },
  methods: {
    mousemove(e) {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
    },

    scroll(e) {
      if (e.wheelDeltaY < 0) {
        this.scroll_down()
      } else if (e.wheelDeltaY > 0) {
        this.scroll_up()
      }
    },
    touchstart(e) {
      var o = e.touches[0]
      this.Touch.start = o.clientY
    },
    touchend(e) {
      this.Touch.end = e.changedTouches[0].pageY

      if (this.Touch.end - this.Touch.start > 0) {
        this.scroll_up()
      } else if (this.Touch.end - this.Touch.start < 0) {
        this.scroll_down()
      }
    },
    scroll_down() {
      if (
        this.is_in_anmation &&
        this.hash != '#' + this.links[this.links.length - 1]
      ) {
        this.$router.push(
          '#' + this.links[this.links.indexOf(this.hash.substring(1)) + 1]
        )
        this.is_in_anmation = false
      }
    },
    scroll_up() {
      if (this.is_in_anmation && this.hash != '#' + this.links[0]) {
        this.$router.push(
          '#' + this.links[this.links.indexOf(this.hash.substring(1)) - 1]
        )
        this.is_in_anmation = false
      }
    },
    animationend() {
      this.is_in_anmation = true
    },
  },
  mounted() {
    if (this.hash == '') {
      this.$router.push('#home')
    }
  },
  watch: {
    hash() {
      // document.querySelector(this.hash).scrollIntoView()

      let scroll_to = document.getElementById(this.hash.substring(1)).offsetTop
      // this.$refs.content.scrollTo(0, scroll_to)
      this.$refs.content.scrollTop = scroll_to
    },
  },

  components: {
    AsideComponent,
    Home,
    Works,
    About,
    Contact,
  },
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>

<style lang="scss" scoped>
.portfolio {
  color: white;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );

  .bg {
    height: 100vh;
    top: 0;
    right: 0;
    position: fixed;
    pointer-events: none;

    @media (max-width: 578px) {
      right: 50%;
      transform: translateX(25%);
      width: 100%;
    }

    img {
      right: -20vw;
      position: fixed;
      top: -20vw;
      height: 90vw;

      // @media (max-width: 578px) {
      //   height: 100vw;
      //   max-width: 100vh;
      //   width: 100vw;
      //   right: 50%;
      // }

      &.stars {
        height: 100vh;
        width: 100vw;
        max-width: none;
        opacity: 1;
        top: 0;
        right: 0;
        object-fit: cover;
        opacity: 0.5;
        transform-origin: center;

        img {
          max-width: none;
        }
      }
    }
  }

  .contant {
    display: flex;
    height: 100%;

    main {
      flex: 1;
      overflow: hidden;

      scroll-behavior: smooth;
    }
  }
}
</style>
