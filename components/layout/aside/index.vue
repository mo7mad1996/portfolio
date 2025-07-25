<template>
  <aside>
    <nav>
      <nuxt-link
        v-for="(link, n) in links"
        :key="link"
        :class="{
          active: $route.query.section ? link == $route.query.section : n == 0,
        }"
        :to="'/?section=' + link"
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
      display: flex;
      align-items: center;
      padding: 15px 0;

      &::after {
        content: "";
        transition: 0.3s;
        width: 30px;
        height: 3px;
        display: block;
        border-radius: 30px;
        background: white;
      }
      &.active::after {
        width: 50px;
      }
      &:hover::after {
        opacity: 0.6;
      }
    }
  }
}
</style>
