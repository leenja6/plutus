<template>
  <div>
    <h1 class="title-h1">
      История операций
    </h1>
    <b-card
      no-body
    >
      <history-search />
      <history-table
        :fetch="fetchInvoices"
        :per="perPage"
        :current="currentPage"
      />
      <history-per-page
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
import HistorySearch from './HistorySearch.vue'
import HistoryTable from './HistoryTable.vue'
import HistoryPerPage from './HistoryPerPage.vue'

export default {
  components: {
    BCard,
    HistorySearch,
    HistoryTable,
    HistoryPerPage,
  },
  setup() {
    const fetchInvoices = computed(() => store.state.viewsHistory.fetchInvoices)
    const perPage = computed(() => store.state.viewsHistory.pagination.perPage)
    const currentPage = computed(() => store.state.viewsHistory.pagination.currentPage)
    return {
      fetchInvoices, perPage, currentPage,
    }
  },
}
</script>
