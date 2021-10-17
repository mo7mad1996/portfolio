<template>
  <aside>
    <nav>
      <nuxt-link
        v-for="link in links"
        :key="link"
        :class="{ active: '#' + link == $route.hash }"
        :to="'/#' + link"
        :title="link.toUpperCase()"
      />
    </nav>
  </aside>
</template>

<script>
// vuex
import { mapState } from 'vuex'

export default {
  name: 'AsideComponent',
  computed: mapState(['links']),
}
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 3vw;

  nav {
    width: 50px;

    a {
      display: block;
      width: 30px;
      height: 3px;
      margin: 30px 0;
      background: white;
      transition: 0.3s;

      &.active {
        width: 50px;
      }
    }
  }
}
</style>
