<template>
  <section id="contact" :class="{ active: $route.hash == '#contact' }">
    <div class="text">
      <h1 @animationend="animationend">contact</h1>
      <p>
        <a href="mailto:mo7mad369@gmail.com">
          <fa icon="envelope-open-text" class="svg" />
          mo7mad369@gmail.com </a
        ><br />
        <a href="tel:+201063525389">
          <fa icon="mobile-alt" class="svg" />
          0106 352 5389
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
  name: "Contact",
  data: () => ({
    social: [
      {
        icon: "github",
        link: "https://www.github.com/mo7mad1996",
      },
      {
        icon: "whatsapp",
        link: "https://wa.me/201063525389",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/mo7mad1996",
      },
    ],
  }),
  methods: {
    animationend() {
      this.$emit("animation");
    },
  },
};
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
