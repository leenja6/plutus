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
      class="position-relative table-history"
    >

      <template #head(data)>
        <span>Дата</span>
      </template>
      <template #head(score)>
        <span>Счет</span>
      </template>
      <template #head(type)>
        <span>Тип операции</span>
      </template>
      <template #head(yield)>
        <span>ДОХОД</span>
      </template>
      <template #head(expenses)>
        <span>РАСХОД</span>
      </template>
      <template #head(commission)>
        <span>КОМИССИЯ</span>
      </template>
      <template #head(status)>
        <span>СТАТУС</span>
      </template>

      <template #cell(data)="data">
        <b-link class="font-weight-bold">
          {{ data.value }}
        </b-link>
      </template>
      <template #cell(score)="data">
        <div class="score-box">
          <p class="current-bg">
            <span
              :data-ref="data.item.score.token"
            ><img
              width="32"
              :src="
                require(`@/assets/images/icons/${data.item.score.token}.svg`)
              "
            ></span>
          </p>
          <p class="current-text">
            <span class="current-text-token">{{ data.item.score.token }}</span>
            <span class="current-text-wallet">{{ data.item.score.title }}</span>
          </p>
        </div>
      </template>
      <template
        #cell(type)="data"
      ><p class="status-box">
        <span
          class="status-box-color"
          :class="Status(data.item.type)"
        >{{ data.item.type }}</span>
      </p>
      </template>

      <template #cell(yield)="data">
        <p
          v-if="data.item.yield !== 0"
          class="cost-table"
          :class="data.item.score.token === 'RUB' ? 'rub-icon' : 'usd-icon'"
        >
          {{ CurrencyToken(data.item.yield) }}
        </p>
        <p
          v-else
          class="cost-table dash"
        >
          -
        </p>
      </template>
      <template #cell(expenses)="data">
        <p
          v-if="data.item.expenses !== 0"
          class="cost-table"
          :class="data.item.score.token === 'RUB' ? 'rub-icon' : 'usd-icon'"
        >
          {{CurrencyToken(data.item.expenses) }}
        </p>
        <p
          v-else
          class="cost-table dash"
        >
          -
        </p>
      </template>
      <template #cell(commission)="data">
        <p
          v-if="data.item.commission !== 0"
          class="cost-table"
          :class="data.item.score.token === 'RUB' ? 'rub-icon' : 'usd-icon'"
        >
          {{ CurrencyToken(data.item.commission) }}
        </p>
        <p
          v-else
          class="cost-table dash"
        >-</p></template>

      <template #cell(status)="data">
        <div class="text-table-status">
          <p class="status-table">
            <span
              v-b-tooltip.hover.v-primary.bottom="data.item.status"
              :class="operationStatus(data.item.status)"
            />
          </p>
        </div>
      </template>
    </b-table>

  </div>
</template>
<script>
import {
  VBTooltip,
  BTable,
  BLink,

} from 'bootstrap-vue'
import Currency from '../../utils/currency'
import Status from '../../utils/status'
import operationStatus from '../../utils/operationstatus'
import CurrencyToken from '../../utils/currencytoken'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BTable,
    BLink,

  },
  props: ['fetch', 'per', 'current'],
  setup() {
    const tableColumns = [
      { key: 'data', sortable: true },
      { key: 'score', sortable: true },
      { key: 'type', sortable: true },
      { key: 'yield', sortable: true },
      { key: 'expenses', sortable: true },
      { key: 'commission', sortable: true },
      { key: 'status', sortable: true },
    ]

    return {
      tableColumns,
      operationStatus,
      Currency,
      Status,
      CurrencyToken,

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
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
