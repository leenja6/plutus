<template>
  <div>
    <h1 class="title-h1 logs-title">
      Логи
    </h1>
    <b-card
      class="logs-box"
      no-body
    >
      <logs-table
        :fetch="fetchInvoices"
        :per="perPage"
        :current="currentPage"
      />
      <logs-per-page
        :total="fetchInvoices.length"
      />
    </b-card>
  </div>
</template>
<script>
import {
  BCard,
} from 'bootstrap-vue'
import { computed } from '@vue/composition-api'
import store from '@/store'
import LogsTable from './LogsTable.vue'
import LogsPerPage from './LogsPerPage.vue'

export default {
  components: {
    BCard,
    LogsTable,
    LogsPerPage,

  },
  setup() {
    const fetchInvoices = computed(() => store.state.viewsLogs.LogsItems)
    const perPage = computed(() => store.state.viewsLogs.pagination.perPage)
    const currentPage = computed(() => store.state.viewsLogs.pagination.currentPage)
    return {
      fetchInvoices, perPage, currentPage,
    }
  },
}
</script>
