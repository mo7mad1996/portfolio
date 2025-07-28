<script setup>
// init
const api = useApi();

// data
const { data } = useAsyncData("data", () =>
  api
    .get("/data.json")
    .then((res) => res.data)
    .then((data) => {
      let born = new Date(data["Date of Birth"]).getFullYear(),
        naw = new Date().getFullYear(); // this year

      let Age = naw - born + " Years Old";
      let Experience = naw - data["Start learn"] + " Years";

      return Object.assign(data, {
        Age,
        "Total Experience": Experience,
      });
    })
);

const img = await useAsset("~/assets/imgs/profile/technical.png");

const info = [
  "Name",
  "Age",
  "University degree",
  "Mobile num",
  "Total Experience",
];

// meta tags
definePageMeta({
  title: "Profile",
});
</script>

<template>
  <div class="profile-page">
    <LazyProfileInterface :path="img" />
    <ProfileResume />
    <ProfileInfo :info="info" :data="data" />
    <ProfileSkills :skills="data.t_skills" />
    <ProfileFooter />
  </div>
</template>

<style lang="scss">
.profile-page {
  background: #103f5a;
  color: #a1ffeb;

  h2.title {
    color: transparent;
    -webkit-text-stroke: 0.5px #68e9e9;
    font-family: sans-serif;
    font-family: "Noto Sans HK", sans-serif;

    text-shadow: 0 0 16px #9ceaea, 0 0 12px #b4ecec;
    font-weight: bold;
    margin: 0.3em 0;
    font-size: 5em;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media (max-width: 720px) {
      font-size: 2em;
    }
  }
}
</style>
