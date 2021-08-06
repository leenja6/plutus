<template>
  <div class="mx-2 mb-2 table-per-pages">
    <b-row>

      <b-col
        cols="12"
        sm="4"
        class="  d-flex align-items-center justify-content-center justify-content-sm-start"
      >
        <span class="text-muted">Всего {{ total }} операций</span>
      </b-col>
      <!-- Pagination -->
      <b-col
        cols="12"
        sm="8"
        class="bottom-table d-flex align-items-center justify-content-center justify-content-sm-end"
      >
        <div class="select-perPage">
          <span class="select-label">Показать</span>
          <v-select
            v-model="perPage"
            :options="perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block ml-50 mr-1"
          />
        </div>

        <b-pagination
          v-model="currentPage"
          :total-rows="total"
          :per-page="perPage"
          first-number
          last-number
          class="mb-0 mt-1 mt-sm-0"
          prev-class="prev-item"
          next-class="next-item"
        >
          <template #prev-text>
            <feather-icon
              icon="ChevronLeftIcon"
              size="18"
            />
          </template>
          <template #next-text>
            <feather-icon
              icon="ChevronRightIcon"
              size="18"
            />
          </template>
        </b-pagination>

      </b-col>

    </b-row>
  </div>
</template>
<script>
import {

  BRow,
  BCol,
  BPagination,
} from 'bootstrap-vue'
import { ref, watch } from '@vue/composition-api'
import vSelect from 'vue-select'
import store from '@/store'

export default {
  components: {
    vSelect,
    BRow,
    BCol,
    BPagination,
  },
  props: ['total'],

  setup() {
    const perPageOptions = [10, 20, 50, 100]
    const currentPage = ref(1)
    const perPage = ref(10)

    watch([currentPage, perPage], values => {
      store.commit('viewsLogs/paginations', { perPage: values[1], currentPage: values[0] })
    })

    return {
      perPageOptions,
      currentPage,
      perPage,
    }
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

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
