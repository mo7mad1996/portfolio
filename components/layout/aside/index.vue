<template>
  <aside>
    <nav>
      <nuxt-link
        v-for="(link, n) in links"
        :key="link"
        :class="{ active: $route.hash ? '#' + link == $route.hash : n == 0 }"
        :to="'/#' + link"
        :title="link.toUpperCase()"
      />
    </nav>
  </aside>
</template>

<script>
// vuex

export default {
  name: "AsideComponent",
  data: () => ({
    links: ["home", "works", "about", "contact"],
  }),
};
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
      height: 30px;
      transition: 0.3s;

      &::after {
        content: "";
        height: 3px;
        display: block;
        background: white;
        width: 100%;
      }
      &.active {
        width: 50px;
      }
    }
  }
}
</style>
