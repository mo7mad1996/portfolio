<template>
  <main>
    <section
      class="proj"
      v-for="proj in workes"
      :key="proj.name"
      :style="`--color-1: ${proj.color1};
      --color-2: ${proj.color2};
      `"
    >
      <div class="disc">
        <div class="bg text">
          <img :src="proj.logo" :alt="proj.name" />
          <h2 class="title">{{ proj.name }}</h2>

          <p v-html="nl2br(proj.description)" />

          <a target="_blank" v-if="proj.link" :href="proj.link" class="btn"
            >عرض حي</a
          >
          <span v-else>
            <font-awesome-icon :icon="['fab', 'buffer']" />
            البرنامج موجود بالمكان</span
          >
        </div>
      </div>
      <div class="imgs">
        <SwiperComponent :images="proj.images" />
      </div>
    </section>
  </main>
</template>

<script>
import SwiperComponent from '@/components/lastworks/SwiperComponent.vue'

export default {
  name: 'last-works',
  head: {
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js',
      },
    ],
  },
  data: () => ({
    workes: [
      {
        logo: 'https://eltorgman.onrender.com/images/general/logo.svg',
        images: [
          '/proj1/1.png',
          '/proj1/2.png',
          '/proj1/3.png',
          '/proj1/4.png',
          '/proj1/5.png',
          '/proj1/6.png',
        ],
        name: 'الترجمان',
        description: `موقغ متخصص في كتابة المقالات والمواضيع والحكايات المختلفه،
        في مجالات متنوعه بطابع عصري،
        مع امكانيه متابعة اخر اسعار السوق في بعض السلع`,
        link: 'https://eltorgman.onrender.com/',
        color1: '#f3f3f3',
        color2: '#1a2b6e',
      },
      {
        logo: require('~/assets/imgs/projects/proj2/snakebar.svg'),
        images: [
          '/proj2/1.png',
          '/proj2/2.png',
          '/proj2/3.png',
          '/proj2/4.png',
          '/proj2/5.png',
        ],
        name: 'SNAKEBAR',
        description: `هي لعبة بسيطه هي لعبة الثعبان،
        والتي طالما اعتدنا عليها لكن هذه المره هي متعددة اللاعبين`,
        link: 'https://snakebar.netlify.app/',
        color1: '#42158f',
        color2: '#9175bf',
      },
      {
        logo: require('~/assets/imgs/projects/proj3/chat.avif'),
        images: ['/proj3/1.png', '/proj3/2.png', '/proj3/3.png'],
        name: 'دردشة',
        description: `تطبيق دردشة لا يحتاج لتسجيل دخول،
        سري جداً ولا يقوم بحفظ الدردشات،
        يمكن انشاء دردشة جديده او الدخول لدردشة موجوده`,
        link: 'https://caht.onrender.com/',
        color1: '#ffc1c2',
        color2: '#e3e3e3',
      },
      {
        logo: 'https://aimm-2.netlify.app/favicon.ico',
        images: [
          '/proj4/1.png',
          '/proj4/2.png',
          '/proj4/3.png',
          '/proj4/4.png',
          '/proj4/5.png',
        ],
        name: 'aimm',
        description: `simple CSS project`,
        link: 'https://aimm-2.netlify.app/',
        color1: '#c1a5d3',
        color2: '#66afe0',
      },
      {
        logo: 'https://isometric.netlify.app/img/isometric__logo.png',
        images: [
          '/proj5/1.png',
          '/proj5/2.png',
          '/proj5/3.png',
          '/proj5/4.png',
        ],
        name: 'isometric',
        description: `simple CSS project`,
        link: 'https://isometric.netlify.app/',
        color1: '#b4b4ff',
        color2: '#031cb1',
      },
      {
        logo: 'https://admiring-khorana-290474.netlify.app//Integration-logo.png',
        images: ['/proj6/1.png', '/proj6/2.png', '/proj6/3.png'],
        name: 'Integration',
        description: `Integration for courses,
        using 3D moudles`,
        link: 'https://admiring-khorana-290474.netlify.app/',
        color1: '#034047',
        color2: '#261e23',
      },
      {
        logo: require('~/assets/imgs/projects/proj7/trueemit.png'),
        images: [
          '/proj7/1.jpeg',
          '/proj7/2.jpeg',
          '/proj7/3.jpeg',
          '/proj7/4.jpeg',
          '/proj7/5.jpeg',
          '/proj7/6.jpeg',
          '/proj7/7.jpeg',
          '/proj7/8.jpeg',
        ],
        name: 'برنامج الفحص',
        description: `برنامج متخصص في تسجيل تقرير فحص السيارات،
        ومتابعه حركه السيارات`,
        color1: '#01bebb',
        color2: '#323298',
      },
    ],
  }),
  methods: {
    nl2br(str) {
      return str ? String(str).replaceAll('\n', '<br />') : str
    },
  },
  components: {
    SwiperComponent,
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo+Play:wght@400;700&family=Cairo:wght@400;600;900&display=swap');

main {
  background: #1a2b6e;
  scroll-snap-type: y mandatory;
}
.proj {
  align-items: center;
  min-height: 100vh;
  height: auto;
  background: linear-gradient(30deg, var(--color-1), var(--color-2));
  scroll-snap-align: center;
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  > div {
    flex: 1;
    width: 50%;
    @media (max-width: 1200px) {
      flex: auto;
      width: auto;
    }
  }
  .disc {
    padding: 2em;
    height: 100%;
    transform: translateX(120px);
    @media (max-width: 1200px) {
      transform: translateX(0px);
    }

    .bg {
      align-self: center;
      display: flex;
      justify-content: center;
      text-align: left;
      flex-direction: column;
      gap: 2em;
      background: linear-gradient(80deg, var(--color-1), #6e6e91bc);
      padding: 2em;
      border-radius: 50px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    > .bg * {
      font-family: 'Cairo Play', 'Cairo', sans-serif !important;
    }

    img {
      width: 200px;
      text-align: center;
      display: block;
      margin: auto !important ;

      @media (max-width: 550px) {
        width: 30%;
      }
    }

    h2 {
      margin: 0;
    }

    p {
      padding: 0;
      color: #a14673;
    }
    a {
      margin: auto;
    }
  }
}
</style>
