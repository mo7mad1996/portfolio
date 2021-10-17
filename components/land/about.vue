<template>
  <section id="about" :class="{ active: $route.hash == '#about' }">
    <div class="text">
      <h1 @animationend="animationend">about me</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    animationend() {
      this.$emit('animation')
      console.log('fkag')
    },
  },
}
</script>
