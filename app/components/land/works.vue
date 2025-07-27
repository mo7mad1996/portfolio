<template>
  <section
    id="works"
    :class="{ active: $route.query.section == 'works' }"
    @animationend="animationend"
  >
    <div class="text">
      <h1>
        last <br />
        works
      </h1>
      <p>there are a lots of works <br />you will find it in...</p>
      <nuxt-link to="/works" class="btn">
        <span> See all works </span>
      </nuxt-link>
    </div>

    <div class="img">
      <div class="img-container">
        <img src="~assets/imgs/works.jpg" alt="last works" loading="lazy" />
      </div>
      <span data-n="01" class="b" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Works",
  methods: {
    animationend() {
      this.$emit("animation");
    },
  },
};
</script>
