<template>
  <div class="profile_interface">
    <div
      class="img-content"
      :style="`background-image: url(${path}.png) ;`"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInterface',
  props: ['path'],
}
</script>

<style lang="scss" scoped>
.profile_interface {
  height: 100vh;
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
}
</style>
