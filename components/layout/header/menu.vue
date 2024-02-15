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
import { mapState } from "vuex";

export default {
  name: "MenuComponent",
  data: () => ({ open: false }),
  computed: mapState(["links"]),
};
</script>

<style lang="scss" scoped>
.menu {
  button {
    background: none;
    border: none;
    display: block;
    z-index: 3;
    position: relative;

    &::before,
    &::after {
      content: "";
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
    height: 100dvh;
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
      align-items: center;
      height: 100%;
      gap: 10px;
      padding: 40px;

      li {
        overflow-y: hidden;
        text-align: center;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        a {
          font-size: 70px;
          line-height: 1;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          animation: aAnmation 0.5s ease 0.4s forwards;
          position: relative;
          display: inline-block;
          padding: 0 10px;
          transform: translateY(100%);

          &::after,
          &::before {
            content: "";
            width: 0;
            height: 4px;
            background-image: linear-gradient(
              to left,
              #072142,
              #8c2b7a 42%,
              #ff4d5a
            );

            position: absolute;
            top: 60%;
            left: 0;
            transition: 0.3s ease;
          }
          &::after {
            bottom: 60%;
            top: auto;
          }

          &:hover:after,
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
