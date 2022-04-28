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
  margin-bottom: 50px;



    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

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
        background: 
         linear-gradient(0deg, #a708c077, transparent);
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
      position: relative;

      .content {
        box-shadow: 0 0 12px rgb(140, 126, 126);
      }
      .img{
        opacity: .8;
      }

      .title {
        display: block;
        z-index: 3;
      }
    .d-flex {
      bottom: 0;
    }
    }

    .img {
      display: flex;
      width: 100%;
      margin-bottom: 10px;
      height: 100px;
      object-fit: contain;

      // placeholder
      align-items: center;
      justify-content: center;
      font-size: 2em;
      font-weight: 700;
      color: #d111a7;
      text-shadow: 0 0 10px  black;

    }

    .d-flex {
      display: flex;
      justify-content: space-between;
      position: absolute;
      width: 100%;
      left: 0;
      padding: 0 10px;
      bottom: -100%;
      transition: .3s;
      padding: 10px;
      background-image: linear-gradient(to top, #8711d1 ,transparent) ;

      h3 {
        font-weight: normal;
      }
    }
    }
  }
</style>
