<template>
  <div class="profile">
    <a
      class="title"
      v-for="link in links"
      :key="link"
      :href="'/profile/' + link"
      :ref="link"
      @click.prevent="startAnmation(link)"
      @transitionend="goTo()"
    >
      {{ link }}
    </a>
  </div>
</template>

<script>
export default {
  layout: "none",
  data() {
    return {
      toGo: "",
      links: ["personal", "technical"],
    };
  },
  head() {
    return {
      link: [
        {
          href: "https://fonts.googleapis.com/css?family=Arbutus+Slab|Lora:400,400i,700,700i",
          rel: "stylesheet",
        },
      ],
    };
  },
  methods: {
    startAnmation(v) {
      this.$refs[v][0].classList.add("active");
      this.$refs[v][0].parentElement.classList.add("active");
      this.toGo = this.$refs[v][0].getAttribute("href");
    },
    goTo() {
      this.$router.push(this.toGo);
    },
  },
};
</script>

<style scoped lang="scss">
.profile {
  height: 100dvh;
  display: flex;

  background: linear-gradient(rgb(201, 32, 223), rgb(32, 153, 223));

  // background styles
  a {
    background-attachment: fixed;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    text-transform: capitalize;
    height: 100%;

    &:first-of-type {
      background-image: url("~assets/imgs/profile/personal.png");
    }
    &:last-of-type {
      background-image: url("~assets/imgs/profile/technical.png");
    }
  }

  a {
    transition: 0.2s;
    width: 50%;

    &:hover {
      width: calc(50% + 13em);
      flex: auto;
    }
  }

  a {
    display: grid;
    place-items: center;
    font-size: 3em;
    font-weight: bold;
  }
  &.active {
    a {
      transition: 0.6s linear;
      width: 0;
      opacity: 0;

      &.active {
        width: 100%;
        opacity: 1;
      }
    }
  }
}
</style>
