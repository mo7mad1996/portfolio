<template>
  <div>
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
    <hr class="container" />
  </div>
</template>

<script>
export default {
  props: ["data", "info"],
  name: "Info",
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  padding-left: 3em;
  overflow-y: hidden;
  position: relative;
  font-size: 1.2em;
  @media (max-width: 626px) {
    padding-left: 1em;
  }

  .table {
    border-collapse: collapse;

    .list-item {
      background: white;
    }

    tr {
      height: 2.2em;
    }
    td,
    th {
      padding: 0.3em;

      @media (max-width: 626px) {
        padding: 0.1em;
      }
    }
  }
}

hr {
  margin: 30px auto !important;
  opacity: 0.5;
  height: 1px;
  padding: 0;
}
</style>
