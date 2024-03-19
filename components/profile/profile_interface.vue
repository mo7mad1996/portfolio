<template>
  <div class="profile_interface" ref="intro" @click="scroll">
    <div class="img">
      <svg viewBox="-20 -32 100 90">
        <defs>
          <path
            id="p"
            fill="none"
            stroke="red"
            d="
        M -5,65
        A 50,50 0 1,1 65,65
        "
          ></path>
          <!--  -->
        </defs>

        <text>
          <textPath href="#p">
            {{ "⋆".repeat(35) }}
          </textPath>
        </text>
        <image :href="path" y="-30" x="-20"></image>
      </svg>
      <div class="awesome"><span>Mohamed Ibrehim</span></div>
    </div>

    <Scroller />
  </div>
</template>

<script>
export default {
  name: "ProfileInterface",
  props: ["path"],
  methods: {
    scroll() {
      if (process.client) {
        this.$refs.intro.nextElementSibling.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile_interface {
  position: relative;
  background: linear-gradient(#c920df, #2099df);
  height: 100dvh;
  display: flex;
  align-items: flex-end;

  .img {
    position: sticky;
    margin: auto;
    display: block;
    width: 100%;
    max-width: 620px;
    text-align: center;

    svg {
      aspect-ratio: 1.5/1;
    }

    image {
      width: 100%;
      height: 100%;
    }

    .awesome {
      text-align: center;
      position: relative;
      perspective: 100px;
      scale: 0.8;
      font-size: 14px;
      margin: -20px auto auto;

      span {
        background-color: #333;
        color: #eee;
        padding: 10px 20px;
        display: block;
        position: relative;
        z-index: 2;
        font-size: max(2vw, 18px);
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: -20px;
        border: 20px solid #333;
        border-left-color: rgb(51, 51, 51);
        width: 30px;
      }
      &::before {
        left: -40px;
        border-left-color: transparent;
        transform: skewX(10deg) skewY(-5deg);
      }
      &::after {
        right: -40px;
        border-right-color: transparent;
        transform: skewX(-10deg) skewY(5deg);
      }
    }
  }
}
</style>
