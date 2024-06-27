<template>
  <div class="container">
    <h2 class="title">Skills</h2>

    <div class="skills" @mousemove="parent_mousemove">
      <a
        @mousemove="mouseMove"
        v-for="skill in skills"
        :href="skill.URL"
        target="_blank"
        class="skill"
        :key="skill.name"
      >
        <div class="border"></div>
        <div class="content">
          <img
            :src="skill.image"
            :alt="skill.name"
            class="img"
            loading="lazy"
          />

          <div class="d-flex">
            <h3>{{ skill.name }}</h3>
            <span>{{ skill.degree * 10 }}%</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSkills",
  props: ["skills"],
  methods: {
    mouseMove(e) {
      const { currentTarget: target } = e;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    },
    parent_mousemove(e) {
      const { currentTarget: target } = e;

      for (const skill of target.querySelectorAll(".skill")) {
        const rect = skill.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        skill.style.setProperty("--mouse-x", `${x}px`);
        skill.style.setProperty("--mouse-y", `${y}px`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.skills {
  margin-bottom: 50px;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;

  .skill {
    display: block;
    width: 320px;
    height: 200px;
    background-color: rgba($color: #000, $alpha: 0.1);
    border-radius: 10px;
    position: relative;

    .border,
    &::before {
      content: "";
      border-radius: inherit;
      height: 100%;
      width: 100%;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;

      opacity: 0;
      transition: opacity 500ms;
    }
    .border {
      background-image: radial-gradient(
        400px circle at var(--mouse-x) var(--mouse-y),
        rgba($color: #fdffff, $alpha: 1),
        transparent 40%
      );
      z-index: 1;
    }

    &::before {
      background-image: radial-gradient(
        100px circle at var(--mouse-x) var(--mouse-y),
        rgba($color: #fafafa, $alpha: 0.1),
        transparent
      );
      z-index: 3;
    }
    &:hover::before {
      opacity: 1;
    }
    .content {
      height: calc(100% - 2px);
      position: relative;
      width: calc(100% - 2px);
      background-color: rgba($color: #483b5d, $alpha: 0.95);
      border-radius: inherit;
      margin: 1px;
      overflow: hidden;
      z-index: 2;

      .img {
        width: 80%;
        height: 80%;
        object-fit: contain;
        display: grid;
        align-items: center;
        font-size: 4em;
        opacity: 0.7;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        text-align: center;
        position: absolute;
      }

      .d-flex {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        flex-direction: column;
        height: 100%;
        background-image: linear-gradient(
          transparent 60%,
          rgba($color: #926acd, $alpha: 0.5)
        );
        transition: transform 0.4s;
        transform: translateY(100%);
        position: relative;
        color: #27072b;

        h3 {
          margin-bottom: 0.6em;
          color: white;
          font-weight: 100;
        }
      }

      &:hover .d-flex {
        transform: translateY(0);
      }
    }
  }
  // &:hover > .skill::before {
  &:hover > .skill > .border {
    opacity: 1;
  }
}
</style>
