<template>
  <div class="profile_interface" ref="intro" @click="scroll">
    <div class="img-content" :style="`background-image: url(${path}) ;`"></div>

    <Scroller />
  </div>
</template>

<script>
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
};
</script>

<style lang="scss" scoped>
.profile_interface {
  position: relative;
  height: 100dvh;
  background: linear-gradient(#c920df, #2099df);

  // background styles
  .img-content {
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    text-transform: capitalize;
    height: 100%;
  }
}
</style>
