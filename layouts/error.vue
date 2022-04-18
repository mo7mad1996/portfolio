<template>
  <div @mousemove="mousemove">
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>
            <span  :style="`transform: translate(${mouse.x}px, ${mouse.y}px)`">
              {{error.statusCode}}
              </span>
              </h1>
          <h2 v-if="error.statusCode == 404">Page Not found</h2>
          <h2 v-else>{{error.message}}</h2>
        </div>
        <nuxt-link to="/">Homepage</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head: () => ({
    title: 'Opps, NotFound',
  }),
  data(){
    return {mouse: {x: 0, y:0}}
  },
  layout: 'blog',
  methods: {
    mousemove(e) {
      this.mouse.x = -e.x  / 80
      this.mouse.y = -e.y  / 80 
    }
  }
}
</script>

<style lang="scss" scoped>
#notfound {
  color: black;
  position: relative;
  height: 100vh;
  background: #030005;

  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    text-align: center;

    .notfound-404 {
      position: relative;
      height: 180px;
      margin-bottom: 20px;
      z-index: -1;

      h1 {
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 224px;
        font-weight: 900;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: -12px;
        color: #030005;
        text-transform: uppercase;
        text-shadow: -1px -1px 0px #8400ff, 1px 1px 0px #ff005a;
        letter-spacing: -20px;

        span {
          display: block;
        }
      }

      h2 {
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        left: 0;
        right: 0;
        top: 110px;
        font-size: 42px;
        font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        text-shadow: 0px 2px 0px #8400ff;
        letter-spacing: 13px;
        margin: 0;
      }
    }

    a {
      font-family: 'Montserrat', sans-serif;
      display: inline-block;
      text-transform: uppercase;
      color: #ff005a;
      text-decoration: none;
      border: 2px solid;
      background: transparent;
      padding: 10px 40px;
      font-size: 14px;
      font-weight: 700;
      transition: 0.2s all;
      &:hover {
        color: #8400ff;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .notfound .notfound-404 h2 {
    font-size: 24px;
  }
}

@media only screen and (max-width: 480px) {
  .notfound .notfound-404 h1 {
    font-size: 182px;
  }
}
</style>
