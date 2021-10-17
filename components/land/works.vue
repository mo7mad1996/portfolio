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
        <img src="" alt="" />
      </div>
      <span>01</span>
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
