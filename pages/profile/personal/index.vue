<template>
  <div>
    <div class="profile"><div class="img-content"></div></div>
  </div>
</template>

<style scoped lang="scss">
.profile {
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
    background-image: url('/profile/personal.png');
  }
}
</style>
