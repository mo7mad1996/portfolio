<template>
  <footer class="Custemfooter">
    <div class="container flex">
      <span>
        Mohamed Ibrahim
      </span>

      <span>
        &copy;
        All copy right reseved
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Custemfooter'
  }
</script>

<style lang="scss" scoped>
.Custemfooter {
  background: #300505;
  color: white ;
  padding: 10px;

  .flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>