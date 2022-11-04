<template>
  <div class="loading-page" v-if="loading">
    <div class="loading">
      <LogoPath :dasharray="dasharray" />

      <div class="progress">
        <div :style="`width: ${dasharray}%`"></div>
      </div>
      <div class="value">{{ dasharray }}%</div>
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
      // padding: 0 10px;
      background: #ff4d5a;
      border-radius: 20px;

      div {
        padding: 12px;
        background: #072142;
        transition: width 0.2s;
        // margin: 0 -10px;
        border-radius: 20px;
        position: relative;

        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 5px;
          padding: 3px;
          background: #fff2;
          border-radius: 5px;
        }
        &::after {
          right: 20px;
          left: 10px;
        }
        &::before {
          right: 10px;
        }
      }
    }

    .value {
      font-weight: bold;
    }
  }
}
</style>
