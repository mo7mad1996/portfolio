<template>
<div class="container">
  <h2 class="title">Skills</h2>

  
  <div class=" skills">
    <div class="skill" v-for="skill in skills" :key="skill.name">
      <img :src="skill.image" :alt="skill.name" class="img">

      <div class="d-flex">

        <h5>{{skill.name}}</h5>
        <span>{{skill.degree * 10}}%</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProfileSkils',
  props: ['skills']
}
</script>

<style scoped lang="scss">
.skills {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  .skill {
    width: 320px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #e8dc71 ;
    background-color: #e8dc7152 ;
    align-self: stretch;

    .img {
      display: block;
      width: 100%;
      margin-bottom: 10px;
    }

    .d-flex {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>