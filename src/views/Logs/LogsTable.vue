<template>
  <div>
    <b-table
      :items="fetch"
      responsive
      :fields="tableColumns"
      :per-page="per"
      :current-page="current"
      primary-key="id"
      show-empty
      empty-text="Данные не найдены"
      class="position-relative table-logs"
    >
      <template #head(data)>
        <span>Дата</span>
      </template>
      <template #head(ip)>
        <span>IP AДРЕС</span>
      </template>
      <template #head(action)>
        <span>ДЕЙСТВИЕ</span>
      </template>

      <template #cell(data)="data">
        <b-link class="font-weight-bold">
          {{ data.value }}
        </b-link>
      </template>

      <template #cell(ip)="data">
        <p>{{ data.item.ip }}</p>
      </template>
      <template #cell(action)="data">
        <p>{{ data.item.title }}</p>
      </template>

    </b-table>
  </div>
</template>
<script>
import {
  BTable,
  BLink,

} from 'bootstrap-vue'

export default {
  components: {
    BTable,
    BLink,
  },
  props: ['fetch', 'per', 'current'],
  setup() {
    const tableColumns = [
      { key: 'data', sortable: false },
      { key: 'ip', sortable: false },
      { key: 'action', sortable: false },
    ]

    return { tableColumns }
  },
}
</script>
<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}

.invoice-filter-select {
  min-width: 190px;

  ::v-deep .vs__selected-options {
    flex-wrap: nowrap;
  }

  ::v-deep .vs__selected {
    width: 100px;
  }
}
</style>
