<template>
  <div class="container">
    <h2 class="title">Skills</h2>

    <div class="skills">
      <a v-for="skill in skills" :href="skill.URL" target="_blank" class="skill"  :key="skill.name">
        <div class="content">
          <img :src="skill.image" :alt="skill.name" class="img" />

          <div class="d-flex">
            <h3>{{ skill.name }}</h3>
            <span>{{ skill.degree * 10 }}%</span>
          </div>
        </div>


        <div class="title">{{ skill.name }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileSkils',
  props: ['skills'],
}
</script>

<style scoped lang="scss">
.skills {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 100px;
  flex-wrap: wrap;

  &:hover .skill {
    opacity: 0.2;
  }

  .skill {
    transition: 0.2s;
    width: 220px;
    align-self: stretch;
    opacity: 1;
    position: relative;

    .content {
      padding: 10px;
      background-color: #c721df77;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      * {
        z-index: 2;
        position: relative;
      }

      &::after,
      &::before {
        content: '';
        position: absolute;
        height: 100px;
        width: 100px;
        border-radius: 50px;
        background: #c721df77;
        top: -40px;
        left: -50px;
        z-index: 1;
      }
      &::after {
        background: linear-gradient(100deg, #fff7, transparent);
        top: auto;
        left: auto;
        bottom: -10px;
        right: -10px;
      }
    }
      .title {
        position: absolute;

        width: 100%;
        text-align: center;
        background: black;
        color: wheat;
        padding: 10px;
        border-radius: 3px;
        left: 0;
        top: calc(100% + 10px);
        text-shadow: none;
        display: none;
        font-family: sans-serif;

      }

    &:hover {
      opacity: 1;

      .content {

        box-shadow: 0 0 12px rgb(140, 126, 126);
      }

      .title {
        display: block;
      }
    }

    .img {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      max-height: 100px;
      object-fit: contain;
    }

    .d-flex {
      display: flex;
      justify-content: space-between;

      h3 {
        font-weight: normal;
      }
    }
  }
}
</style>
