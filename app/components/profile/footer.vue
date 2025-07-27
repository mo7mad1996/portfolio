<template>
  <footer class="Custemfooter">
    <div class="container flex">
      <nuxt-link to="/"> Mohamed Ibrahim </nuxt-link>

      <span> &copy; All rights reserved {{ new Date().getFullYear() }} </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Custemfooter",
};
</script>

<style lang="scss" scoped>
.Custemfooter {
  background: #08162b;
  color: white;
  padding: 10px;
  padding-top: 100px;
  clip-path: polygon(0px 50px, 0 100%, 100% 100%, 100% 60px, 75% 0);
  .flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>
