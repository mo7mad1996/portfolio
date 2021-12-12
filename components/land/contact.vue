<template>
  <section id="contact" :class="{ active: $route.hash == '#contact' }">
    <div class="text">
      <h1 @animationend="animationend">contact</h1>
      <p>
        <a href="mailto:mo7mad369@gmail.com">
          <fa icon="envelope-open-text" class="svg" />
          mo7mad369@gmail.com </a
        ><br />
        <a href="tel:201090524505">
          <fa icon="mobile-alt" class="svg" />
          01090 524 505
        </a>
      </p>
      <div class="social">
        <a
          v-for="link in social"
          :key="link.icon"
          :href="link.link"
          target="_blank"
        >
          <fa :icon="['fab', link.icon]" class="fa-2x" />
        </a>
      </div>
    </div>

    <div class="img">
      <div class="img-container">
        <img src="~assets/imgs/contact.jpg" alt="contact with me" />
      </div>
      <span data-n="03" class="b" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
    social: [
      {
        icon: 'facebook-f',
        link: 'https://web.facebook.com/Mo7mad1996',
      },
      {
        icon: 'whatsapp',
        link: 'https://web.whatsapp.com/send?phone=+201090524505',
      },
      {
        icon: 'twitter',
        link: 'https://www.twitter.com/mo7mad369',
      },
    ],
  }),
  methods: {
    animationend() {
      this.$emit('animation')
    },
  },
}
</script>

<style lang="scss" scoped>
.svg {
  width: 2em;
  display: inline-block;
}

.social {
  margin-top: 2em;
  display: flex;
  gap: 1.5em;
}
</style>
