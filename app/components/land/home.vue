<template>
  <section id="home" :class="{ active: $route.query.section == 'home' }">
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

    <div class="moon-img">
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

      <!-- start word -->
      <span
        :style="`transform: translate(${mouse.x / 100}px, ${mouse.y / 100}px)`"
        class="t"
      >
        portfolio
      </span>
      <!-- end word -->

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
  props: ["mouse"],
  name: "Home",
  methods: {
    animationend() {
      this.$emit("animation");
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 0;
  overflow: visible;

  .text h1 {
    @media (max-width: 578px) {
      text-shadow: 0 0 4px #333;
    }
  }
}

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
  top: 6vw;

  @media (max-width: 578px) {
    top: 1vw;
    width: 100vw;
    height: 100%;
    right: 0;
  }

  .moon {
    height: 30vw;
    position: relative;
    top: 42px;

    img {
      height: 100%;
      display: block;

      @media (max-width: 578px) {
        position: absolute;
        left: 50%;
        height: 100%;
        transform: translatex(-50%);
      }
    }
  }
}

.moon-img {
  flex: 1;

  @media (max-width: 578px) {
    position: absolute;
    height: 100dvh;
    width: 100%;
  }

  .cloud {
    position: absolute;
    width: 40vw;
    transition: 0.3s ease-out;

    @media (max-width: 578px) {
      display: block;

      img {
        height: 140px;
      }
    }

    @media (max-width: 420px) {
      img {
        height: 90px;
      }
    }

    &.one {
      top: 10vw;
      right: 30dvh;
    }

    &.two {
      bottom: 0;
      right: 0;
      filter: contrast(0.6);

      @media (max-width: 578px) {
        right: 30%;
        bottom: auto;
        top: 40dvh;
      }
    }

    &.three {
      top: 1px;
      right: 20px;
      filter: contrast(0.3);

      @media (max-width: 578px) {
        top: 30dvh;
        right: 20vw;
      }

      @media (max-width: 420px) {
        top: 15dvh;
        right: 15vw;
      }
    }
  }
}

span.t {
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  color: #ff4d5a;
  font-weight: 800;
  // background: blue;
  letter-spacing: 1.5px;
  font-size: 30px;
  z-index: 2;
  text-transform: uppercase;

  @media (max-width: 578px) {
    justify-content: end;
    padding: 10px;
    font-size: 20px;

    height: 40%;
    bottom: 0;
    justify-content: start;
    width: 100dvw;
    position: absolute;
  }
  @media (max-width: 370px) {
    display: none;
  }
}
</style>
