<template>
  <div class="menu" @click="open = !open">
    <button :class="{ open }"></button>

    <menu v-if="open">
      <ul>
        <li v-for="link in links" :key="link">
          <nuxt-link :to="'/#' + link">{{ link }}</nuxt-link>
        </li>
      </ul>
    </menu>
  </div>
</template>

<script>
// vuex
import { mapState } from 'vuex'

export default {
  name: 'MenuComponent',
  data: () => ({ open: false }),
  computed: mapState(['links']),
}
</script>

<style lang="scss" scoped>
.menu {
  button {
    background: none;
    border: none;
    display: block;
    cursor: pointer;
    z-index: 3;
    position: relative;

    &::before,
    &::after {
      content: '';
      width: 30px;
      display: block;
      height: 4px;
      background: white;
      transform-origin: center;
      transition: 0.3s;
    }

    &::before {
      transform: translate(0, 8px);
    }
    &::after {
      transform: translate(0, -8px);
    }

    &.open {
      &::before {
        transform: translate(0, 2px) rotate(45deg);
      }
      &::after {
        transform: translate(0, -2px) rotate(-45deg);
      }
    }
  }
  menu {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #072142, #8c2b7a 42%, #ff4d5a);
    z-index: 2;
    padding: 40px;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    animation: openMenu 0.5s ease forwards;

    ul {
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 10px;
      padding: 40px;

      li {
        overflow: hidden;
        text-align: center;
        overflow: hidden;
        flex: 1;

        a {
          font-size: 70px;
          line-height: 1;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 10px;
          animation: aAnmation 0.5s ease 0.4s forwards;
          position: relative;
          display: inline-block;
          height: 100%;
          transform: translateY(100%);

          &::before {
            content: '';
            width: 0;
            height: 4px;
            background-image: linear-gradient(
              to left,
              #072142,
              #8c2b7a 42%,
              #ff4d5a
            );

            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            transition: 0.3s ease;
          }
          &:hover:before {
            width: 100%;
            left: auto;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
