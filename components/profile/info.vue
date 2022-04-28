<template>
  <div class="container">
    <h2 class="title">Info</h2>

    <div class="content">
      <div>

      <table class="table">
        <tbody>
          <tr v-for="key in info" :key="key">
            <td>{{ key }}</td>

            <td>: {{ data[key] }}</td>
          </tr>
        </tbody>
      </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'info'],
  name: 'Info',
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: space-between;
    padding-left: 3em;
    overflow-y: hidden;
    position: relative;
    

    .table {
      border-collapse: collapse;

      .list-item {
        background: white;
      }

      tr {
        height: 2.2em;
      }
    }

  }
</style>
