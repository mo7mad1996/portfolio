<template>
  <div class="profile_interface" ref="intro" @click="scroll">
    <Clouds>
      <div
        class="img-content"
        :style="`background-image: url(${path}) ;`"
      ></div>
    </Clouds>

    <Scroller />
  </div>
</template>

<script>
import Clouds from "~/components/profile/Clouds";

export default {
  name: "ProfileInterface",
  props: ["path"],
  methods: {
    scroll() {
      if (process.client) {
        this.$refs.intro.nextElementSibling.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
  components: { Clouds },
};
</script>

<style lang="scss" scoped>
.profile_interface {
  position: relative;
  height: 100dvh;
  background: linear-gradient(#c920df, #103f5a);

  // background styles
  .img-content {
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    text-transform: capitalize;
    z-index: 0;
    position: relative;
    pointer-events: none;
    height: 100%;
  }

  &::after,
  &::before {
    content: "Mohamed";
    text-transform: uppercase;
    color: #fff2;
    font-family: sans-serif;
    font-size: 13em;
    font-weight: bolder;
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    width: 100%;
    height: 100%;

    @media (max-width: 1160px) {
      font-size: 10em;
    }
    @media (max-width: 760px) {
      display: none;
    }
  }
  &::after {
    color: transparent;
    -webkit-text-stroke: 1px #fff2;
    z-index: 2;
  }
}
</style>
