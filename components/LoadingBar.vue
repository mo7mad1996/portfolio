<template>
  <div class="loading-page" v-if="loading">
    <div class="loading">
      <LogoPath :dasharray="dasharray" />
      <div class="progress">
        <div :style="`width: ${dasharray}%`"></div>
      </div>
      <div>{{ dasharray }}%</div>
    </div>
  </div>
</template>

<script>
// components
import LogoPath from '@/components/logo/path'

export default {
  data: () => ({
    loading: false,
    dasharray: 0,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    increase(num) {
      this.dasharray = num
    },
  },
  components: {
    LogoPath,
  },
}
</script>

<style scoped lang="scss">
.loading-page {
  position: fixed;
  inset: 0;
  z-index: 200;
  background-image: linear-gradient(#072142, #8c2b7a 42%, #ff4d5a);
  display: flex;
  align-items: center;
  justify-content: center;

  .loading {
    text-align: center;
    font-size: 22px;
    color: #072142;

    .progress {
      width: 150px;
      border: 1px solid #8c2b7a;
      margin: 10px auto;
      background: #ff4d5a;

      div {
        height: 10px;
        background: #072142;
      }
    }
  }
}
</style>
