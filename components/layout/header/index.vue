<template>
  <header>
    <div class="logo">
      <nuxt-link to="/#home">Mohamed Ibrahem</nuxt-link>
    </div>

    <MenuComponent />
  </header>
</template>

<script>
// components
import MenuComponent from '@/components/layout/header/menu'

export default {
  name: 'HeaderComponent',
  components: { MenuComponent },
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  padding: 30px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100%;
  top: 0;
  z-index: 3;
  left: 0;

  > * {
    display: block;
  }

  .logo {
    z-index: 3;
  }

  > a:hover {
    opacity: 0.8;
  }
}
</style>
