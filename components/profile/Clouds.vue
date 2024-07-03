<template>
  <div class="Clouds" @mousemove="mouseMove">
    <div class="cloud"><img src="/land/cloud1.svg" /></div>
    <div class="cloud"><img src="/land/cloud2.svg" /></div>
    <slot></slot>
    <div class="cloud"><img src="/land/cloud3.svg" /></div>
  </div>
</template>

<script>
export default {
  name: "Clouds",
  methods: {
    mouseMove(e) {
      const element = e.target;
      const rect = element.getClientRects()[0];

      let x = e.clientX - rect.width / 2;
      let y = e.clientY - rect.height / 2;

      element.style.setProperty("--position-x", x / 15 + "px");
      element.style.setProperty("--position-y", y / 15 + "px");
    },
  },
};
</script>

<style lang="scss" scoped>
.Clouds {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;

  // variables
  --position-x: 0;
  --position-y: 0;

  .cloud {
    display: grid;
    place-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    pointer-events: none;
    left: 0;
    // display: none;

    &:nth-of-type(1) {
      transition: 1s;
      transform: translate(
          var(--position-x, 0),
          calc(-1 * var(--position-y, 0))
        )
        translate(8vw, 15vw);
    }
    &:nth-of-type(2) {
      transition: 0.3s;
      transform: translate(
          calc(-1 * var(--position-x, 0)),
          var(--position-y, 0)
        )
        translate(10vw, -12vw);
    }

    &:last-of-type {
      filter: blur(2px);
      opacity: 0.8;
      transition: 1.2s;
      transform: translate(
          calc(-1 * var(--position-x, 0)),
          calc(-1 * var(--position-y, 0))
        )
        translate(-16vh, 7vw);
      z-index: 3;
    }

    img {
      display: block;
      height: 30vh;
      //   width: 30vw;
      object-fit: contain;
    }
  }
}
</style>
