<template>
  <section id="home" :class="{ active: $route.hash == '#home' }">
    <div class="text">
      <h1 @animationend="animationend">
        Mohamed <br />
        Ibrahim
      </h1>

      <p>
        web developer / <br />
        full stack web developer.
      </p>
    </div>
    <div class="img">
      <div
        class="cloud one"
        :style="`transform: translate(${mouse.x / 20}px, ${mouse.y / 20}px)`"
      >
        <img src="/land/cloud1.svg" alt="cloud" />
      </div>
      <div
        class="image"
        :style="`transform: translate(${-mouse.x / 50}px, ${-mouse.y / 50}px)`"
      >
        <div class="moon"><img src="/land/moon.svg" alt="moon" /></div>
      </div>
      <div
        class="cloud two"
        :style="`transform: translate(${-mouse.x / 20}px, ${mouse.y / 20}px)`"
      >
        <img src="/land/cloud2.svg" alt="cloud" />
      </div>
      <span
        :style="`transform: translate(${mouse.x / 100}px, ${mouse.y / 100}px)`"
        >portfolio</span
      >

      <div
        class="cloud three"
        :style="`transform: translate(${mouse.x / 30}px, ${-mouse.y / 30}px)`"
      >
        <img src="/land/cloud3.svg" alt="cloud" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['mouse'],
  name: 'Home',
  methods: {
    animationend() {
      this.$emit('animation')
    },
  },
}
</script>

<style lang="scss" scoped>
.active {
  .image {
    animation: fromRight 1.4s ease;
  }
  .cloud {
    animation: fromRight 1s ease;
  }
}

.image {
  height: 100%;
  position: absolute;

  right: 10vw;
  top: 10vw;

  .moon {
    height: 30vw;

    img {
      height: 100%;
      display: block;
    }
  }
}
.cloud {
  position: absolute;
  width: 40vw;
  transition: 1s ease-out;

  img {
    width: 100%;
  }

  &.one {
    top: 10vw;
    right: 30vh;
  }
  &.two {
    bottom: 0;
    right: 0;
    filter: contrast(0.6);
  }
  &.three {
    top: 1px;
    right: 20px;
    filter: contrast(0.3);
  }
}

.img {
  display: flex;
  align-items: center;
}

span {
  position: relative;
  color: #ff4d5a;
  font-weight: 800;
  letter-spacing: 1.5px;
  font-size: 30px;
  z-index: 2;
  text-transform: uppercase;
}
</style>
