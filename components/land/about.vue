<template>
  <section id="about" :class="{ active: $route.hash == '#about' }">
    <div class="text">
      <h1 @animationend="animationend">about me</h1>
      <p>I love Design, Technology, <br />and Programming.</p>
      <nuxt-link to="/profile" class="btn">Let's see more</nuxt-link>
    </div>

    <div class="img">
      <div class="img-container">
        <img src="~assets/imgs/about.png" alt="about me" />
      </div>
      <span class="b" data-n="02" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    animationend() {
      this.$emit('animation')
    },
  },
}
</script>
