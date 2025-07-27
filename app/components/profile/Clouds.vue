<template>
  <div class="Clouds">
    <div class="cloud"><img src="/land/cloud1.svg" /></div>
    <div class="cloud"><img src="/land/cloud2.svg" /></div>
    <slot></slot>
    <div class="cloud"><img src="/land/cloud3.svg" /></div>
  </div>
</template>

<script>
export default {
  name: "Clouds",
};
</script>

<style lang="scss" scoped>
.Clouds {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;

  .cloud {
    display: grid;
    place-content: center;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    pointer-events: none;
    left: 0;
    animation: hover linear 7s infinite alternate;
    // display: none;

    &:nth-of-type(1) {
      transform: translate(20%, 10%);
      animation-duration: 10s;
    }
    &:nth-of-type(2) {
      transform: translate(10%, -20%);
      animation-direction: alternate-reverse;
      animation-duration: 6s;
    }

    &:last-of-type {
      animation-duration: 8s;
      transform: translate(-10%, 20%);
    }

    img {
      display: block;
      height: 25vh;
      //   width: 30vw;

      object-fit: contain;
    }
  }
}

@keyframes hover {
  to {
    // 50% {
    translate: 0 10%;
  }
  // to,
  from {
    translate: 0 0;
  }
}
</style>
