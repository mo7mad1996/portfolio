<template>
  <div @mousemove="mousemove">
    <Pointer>
      <div id="notfound" class="text-white relative h-dvh bg-[#030005]">
        <div
          class="text-center flex flex-col justify-center items-center h-full gap-5"
        >
          <div class="notfound-404">
            <h1 class="">
              <div :style="`transform: translate(${mouse.x}px, ${mouse.y}px)`">
                {{ error.statusCode }}
              </div>
            </h1>
            <div class="!text-md">{{ error.statusMessage }}</div>
          </div>
          <h2 v-if="error.statusCode == 404">Page Not found</h2>
          <h2 v-else>{{ error.message }}</h2>
          <nuxt-link to="/">Homepage</nuxt-link>

          <DevOnly>
            <div class="rounded overflow-hidden max-w-screen-md bg-gray-900">
              <div class="flex gap-1.5 justify-end p-3">
                <div class="bg-red-800 p-1.5 rounded-full"></div>
                <div class="bg-yellow-800 p-1.5 rounded-full"></div>
                <div class="bg-green-800 p-1.5 rounded-full"></div>
              </div>
              <div class="hr"></div>
              <pre
                class="text-left p-5 shadow w-full overflow-auto"
                v-html="error.stack"
              ></pre>
            </div>
          </DevOnly>
        </div>
      </div>
    </Pointer>
  </div>
</template>

<script>
// mouse
import Pointer from "@/components/layout/Pointer";

export default {
  props: ["error"],
  head: () => ({
    title: "Opps, NotFound",
  }),
  data() {
    return { mouse: { x: 0, y: 0 } };
  },
  layout: "blog",
  methods: {
    mousemove(e) {
      this.mouse.x = (innerWidth / 2 - e.x) / 80;
      this.mouse.y = (innerHeight / 2 - e.y) / 80;
    },
  },
  components: { Pointer },
};
</script>

<style lang="scss" scoped>
.notfound-404 {
  h2,
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 224px;
    font-weight: 900;
    color: #030005;
    // text-transform: uppercase;
    text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
    letter-spacing: -20px;

    @media only screen and (max-width: 480px) {
      font-size: 182px;
    }
  }

  h2 {
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0px 2px 0px #8400ff;
    letter-spacing: 13px;
    margin: 0;

    @media only screen and (max-width: 767px) {
      font-size: 24px;
    }
  }
}

a {
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  text-transform: uppercase;
  color: #ff005a;

  text-shadow: 0 0 22px #ff005a;
  text-decoration: none;
  background: transparent;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  border: 2px solid transparent;
  border-image: linear-gradient(-40deg, #ff005a, #8400ff);
  border-image-slice: 1;
  transition: 0.2s all;

  &:hover {
    text-shadow: 0 0 12px #8400ff;

    color: #8400ff;
  }
}

.hr {
  height: 1px;
  background: linear-gradient(
    to left,
    transparent,
    #ff005a,
    // #8400ff,
    transparent
  );
}
</style>
