<template>
  <div class="profile_interface" ref="intro" @click="scroll">
    <div class="img-content" :style="`background-image: url(${path}) ;`"></div>

    <div class="scroll">
      <fa :icon="['fas', 'angle-double-down']" class="icon" />
    </div>
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
  background: linear-gradient(rgb(201, 32, 223), rgb(32, 153, 223));

  // background styles
  .img-content {
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    text-transform: capitalize;
    height: 100%;
  }

  .scroll {
    position: absolute;
    bottom: 0;
    padding-bottom: 2em;
    width: 100%;

    display: flex;
    justify-content: center;
    filter: drop-shadow(0 0 1em #072142);

    .icon {
      font-size: 3rem;
      color: #c721df;

      animation: scroll 1s linear infinite;
    }
  }
}
</style>
