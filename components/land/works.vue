<template>
  <section
    id="works"
    :class="{ active: $route.hash == '#works' }"
    @animationend="animationend"
  >
    <div class="text">
      <h1>
        last <br />
        works
      </h1>
      <p>there are a lots of works <br />you will find it in...</p>
      <nuxt-link to="/works" class="btn">See all works</nuxt-link>
    </div>

    <div class="img">
      <div class="img-container">
        <img src="/land/works.jpg" alt="lastworks" />
      </div>
      <span data-n="01" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Works',
  methods: {
    animationend() {
      this.$emit('animation')
    },
  },
}
</script>
