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

    <!-- start content -->
    <div class="content">
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
// components
import Home from "@/components/land/home";
import Works from "@/components/land/works";
import About from "@/components/land/about";
import Contact from "@/components/land/contact";
import AsideComponent from "@/components/layout/aside/index";

// vuex
import { gsap } from "gsap";

export default {
  scrollToTop: true,
  data() {
    const links = ["home", "works", "about", "contact"];
    return {
      mouse: {
        x: -1,
        y: -1,
      },
      is_in_animation: false,
      Touch: {
        start: 0,
        end: 0,
      },
      links,
      section: Math.max(0, links.indexOf(this.$route.query.section)),
    };
  },
  computed: {
    target_id() {
      return this.links[this.section];
    },
  },
  methods: {
    // mouse events
    mousemove(e) {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    },

    scroll(e) {
      if (e.wheelDeltaY < 0) {
        this.scroll_down();
      } else if (e.wheelDeltaY > 0) {
        this.scroll_up();
      }
    },
    touchstart(e) {
      var o = e.touches[0];
      this.Touch.start = o.clientY;
    },
    touchend(e) {
      this.Touch.end = e.changedTouches[0].pageY;

      if (this.Touch.end - this.Touch.start > 0) {
        this.scroll_up();
      } else if (this.Touch.end - this.Touch.start < 0) {
        this.scroll_down();
      }
    },
    scroll_down() {
      if (this.is_in_animation) return;

      if (this.section < this.links.length - 1) {
        this.section += 1;
        this.is_in_animation = true;
      }
    },
    scroll_up() {
      if (this.is_in_animation) return;

      if (this.section) {
        this.is_in_animation = true;
        this.section -= 1;
      } else {
        this.is_in_animation = true; // to stop many times reload
        window.location.reload();
      }
    },
    animationend() {
      this.is_in_animation = false;
    },
    startScroll() {
      if (!process.client) return;
      const target_section = document.getElementById(this.target_id);

      if (!target_section) return;
      const scroll_to = target_section.offsetTop;

      // this.$refs.content.scrollTo(0, scroll_to);
      gsap.to(this.$refs.content, {
        scrollTop: scroll_to,
        duration: 0.5,
        ease: "expoScale(0.5,7,none)",
      });
    },
    changeQuery() {
      const currentQuery = this.$route.query.section;
      const newQuery = this.links[this.section];

      if (currentQuery == newQuery) return;
      this.$router.replace({
        query: {
          section: this.links[this.section],
        },
      });
    },
  },
  mounted() {
    this.mouse = {
      x: 0,
      y: 0,
    };
  },
  watch: {
    section: {
      handler() {
        this.changeQuery();
        this.startScroll();
      },
      immediate: true,
    },
    $route: {
      handler(v) {
        if (!v || !v.query.section) return;

        const section = v.query.section;
        this.section = this.links.indexOf(section);
      },
      immediate: true,
      deep: true,
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
      title: "Home",
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  color: white;
  width: 100vw;
  height: 100dvh;
  overscroll-behavior: contain;
  background-image: linear-gradient(
    to bottom,
    #072142,
    #061c37,
    #07182b,
    #061220,
    #020b16
  );

  .bg {
    height: 100dvh;
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
      //   max-width: 100dvh;
      //   width: 100vw;
      //   right: 50%;
      // }

      &.stars {
        height: 100dvh;
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

  .content {
    display: flex;
    height: 100%;

    main {
      flex: 1;
      overflow: hidden;
      overscroll-behavior: contain;
      // scroll-behavior: smooth;
    }
  }
}
</style>
