<template>
  <div class="container">
    <h2 class="title">Info</h2>

      <table class="table ">
        <tbody>
          <tr v-for="key in info" :key="key">
            <td>{{ key }}</td>

            <td>: {{ data[key] }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  props: ['data', 'info'],
  name: 'Info',
}
</script>

<style lang="scss" scoped>


section {
  height: auto;
}
  .table {
  border-collapse: collapse;
  flex: 1;

  .list-item {
    background: white;
  }

  tr {
    height: 2.2em;
  }
}
</style>
