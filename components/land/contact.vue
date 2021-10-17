<template>
  <section id="contact" :class="{ active: $route.hash == '#contact' }">
    <div class="text">
      <h1 @animationend="animationend">contact</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    animationend() {
      this.$emit('animation')
    },
  },
}
</script>
