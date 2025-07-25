<template>
  <main class="bg-red-300 h-screen">
    <section
      v-for="proj in projects"
      :key="proj.name"
      :style="`
      // --color-1: ${proj.color1};
      // --color-2: ${proj.color2};
      `"
    >
      <div class="disc">
        <div class="bg text">
          <!-- logo -->
          <!-- <img :src="require(`~/${proj.logo}`)" loading="lazy" /> -->

          <!-- data -->
          <h2 class="title">{{ proj.name }}</h2>
          <p v-html="nl2br(proj.description)" />

          <!-- actions -->
          <a target="_blank" v-if="proj.link" :href="proj.link" class="btn">
            <span> عرض حي </span>
          </a>
          <span v-else>
            <fa :icon="['fab', 'buffer']" />
            البرنامج موجود بالمكان
          </span>
        </div>
      </div>
      <div class="imgs">
        <SwiperComponent :images="proj.images" />
      </div>
    </section>
  </main>
</template>

<script>
import SwiperComponent from "@/components/lastWorks/SwiperComponent.vue";

export default {
  name: "last-works",
  async asyncData({ $axios }) {
    const { projects } = await $axios.$get("/data.json");

    return { projects };
  },
  methods: {
    nl2br(str) {
      return str ? String(str).replaceAll("\n", "<br />") : str;
    },
  },
  components: {
    SwiperComponent,
  },

  head() {
    return {
      title: "Best web projects",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `
          portfolio Mohamed Ibrahim, Professional web developer works, best designs for web site portfolio,
سابقة اعمال محمد ابراهيم،  اعمال مطور ويب محترف ، افضل التصاميم لبناء المواقع
          `,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&family=Cairo:wght@400;600;900&display=swap");

// main {
//   background: #1a2b6e;
//   height: 100dvh;
//   overflow-x: hidden;
//   overflow-y: scroll;
//   scroll-snap-type: y mandatory;
// }
// .proj {
//   align-items: center;
//   min-height: 100dvh;
//   height: auto;
//   background: linear-gradient(30deg, var(--color-1), var(--color-2));
//   display: flex;
//   scroll-snap-align: start;
//   scroll-margin-block-start: 0px;

//   @media (max-width: 1200px) {
//     flex-direction: column;
//   }

//   > div {
//     flex: 1;
//     width: 50%;

//     @media (max-width: 1200px) {
//       flex: auto;
//       width: auto;
//     }
//   }
//   .disc {
//     padding: 2em;
//     height: 100%;
//     transform: translateX(120px);

//     @media (max-width: 1200px) {
//       transform: translateX(0px);
//     }

//     .bg {
//       align-self: center;
//       display: flex;
//       justify-content: center;
//       text-align: left;
//       flex-direction: column;
//       gap: 2em;
//       background: linear-gradient(80deg, var(--color-1), #6e6e91bc);
//       padding: 2em;
//       border-radius: 50px;
//       box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
//       min-width: min(90vw, 350px);
//     }

//     > .bg * {
//       font-family: "Cairo Play", "Cairo", sans-serif !important;
//     }

//     img {
//       width: 200px;
//       text-align: center;
//       display: block;
//       margin: auto !important ;

//       @media (max-width: 550px) {
//         width: 30%;
//       }
//     }

//     h2 {
//       margin: 0;
//     }

//     p {
//       padding: 0;
//       color: #a14673;
//     }
//     a {
//       margin: auto;
//     }
//   }
// }
</style>
