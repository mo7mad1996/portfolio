<template>
  <swiper-container
    class="mySwiper"
    pagination="true"
    effect="coverflow"
    grab-cursor="true"
    centered-slides="true"
    slides-per-view="auto"
    coverflow-effect-rotate="50"
    coverflow-effect-stretch="0"
    coverflow-effect-depth="100"
    coverflow-effect-modifier="1"
    coverflow-effect-slide-shadows="true"
    autoplay-delay="2500"
    autoplay-disable-on-interaction="false"
  >
    <swiper-slide v-for="n in images" :key="n">
      <img :src="require(`~/assets/imgs/projects${n}`)" loading="lazy" />
    </swiper-slide>
  </swiper-container>
</template>

<script>
export default {
  name: "SwiperComponent",
  props: ["images"],
};
</script>

<style scoped>
swiper-container {
  padding-top: 50px;
  padding-bottom: 50px;
}

swiper-slide {
  background-position: center;
  background-size: cover;
  align-items: center;
  width: 70%;
}

swiper-slide img {
  display: block;
  width: 100%;
  object-fit: contain;
}
</style>
