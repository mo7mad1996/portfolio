<template>
  <div class="profile-page">
    <ProfileInterface path="/profile/technical" />
    <Resume />
    <Info :info="info" :data="data" />
    <ProfileSkils :skills="data.t_skills" />

  <Custemfooter />
  </div>
</template>

<script>
import ProfileInterface from '~/components/profile/profile_interface'
import Info from '~/components/profile/info'
import ProfileSkils from '~/components/profile/skills'
import Resume from '~/components/profile/resume'
import Custemfooter from '~/components/profile/footer'


export default {
  async asyncData({ $axios, req }) {
      
      const baseUrl = 'http://' + req.headers.host

      const res = await $axios.get( baseUrl +  '/data.json')


      let born = await new Date(res.data['Date of Birth']).getFullYear(),
          naw =  new Date().getFullYear()
        let Age = naw - born + ' Years',

        Total_Experiance = naw - res.data['Start learn'] + ' Years'


        const data = await Object.assign(res.data, {
          Age,
          "Total Experiance": Total_Experiance
        })
        return { data }
  },

  data: () => ({
    info: ['Name', 'Age', 'University degree', "Mobile num", "Total Experiance"],
    data: {
      t_skills: [],
      p_skills: []
    }
  }),
  components: {
    ProfileInterface,
    Info,
    ProfileSkils,
    Resume,
    Custemfooter
  },
  head() {
    return {
      title: 'Technical profile',
    }
  },
}
</script>

<style scoped lang="scss">
.profile-page {
  background: rgb(32, 153, 223);
      color: #0f1816;

}
</style>
