<template>
  <div class="m-2 table-search-box">

    <div class="table-thead-box">

      <div class="aria-colindex-1 aria-colindex"><b-input-group class="input-group-merge">
        <b-form-input
          v-model="search"
          placeholder="Поиск"
        />
        <b-input-group-append is-text>
          <feather-icon
            size="15"
            icon="SearchIcon"
          />
        </b-input-group-append>
      </b-input-group>
      </div>

      <div class="aria-colindex-2 aria-colindex">
        <b-input-group class="input-group-merge flat-pickr">
          <flat-pickr
            v-model="datestart"
            class="form-control"
            placeholder="От"
            :config="{ enableTime: true, locale: Russian, time_24hr:true, dateFormat: 'Y-m-d H:i'}"
          />
          <b-input-group-append is-text>
            <feather-icon
              size="16"
              icon="CalendarIcon"
            />
          </b-input-group-append>
        </b-input-group>

      </div>

      <div class="aria-colindex-3 aria-colindex">
        <b-input-group class="input-group-merge flat-pickr">

          <flat-pickr
            v-model="dateend"
            placeholder="До"
            class="form-control"
            :config="{ enableTime: true, time_24hr:true, locale: Russian, dateFormat: 'Y-m-d H:i'}"
          />
          <b-input-group-append is-text>
            <feather-icon
              size="16"
              icon="CalendarIcon"
            />
          </b-input-group-append>
        </b-input-group>
      </div>

      <div class="aria-colindex-4 aria-colindex">
        <v-select
          v-model="selectedtype"
          class="search-table-select"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          multiple
          placeholder="Тип операций"
          :options="optionelected"
        />

      </div>

      <div class="aria-colindex-5 aria-colindex">
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          variant="outline-primary"
        >Очистить</b-button>
      </div>
      <div class="aria-colindex-6 aria-colindex" />
      <div class="aria-colindex-7 aria-colindex">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="outline-primary"
          class="mt-1 mr-1"
        >
          <feather-icon
            icon="SaveIcon"
            class="mr-50"
            size="14"
          />
          Экспорт в CSV
        </b-button>

      </div>

    </div>

  </div>
</template>
<script>
import {
  VBTooltip,
  BButton,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
} from 'bootstrap-vue'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import { Russian } from '../../../node_modules/flatpickr/dist/l10n/ru'

export default {
  directives: {
    'b-tooltip': VBTooltip,
    Ripple,
  },
  components: {
    BButton,
    BFormInput,
    vSelect,
    flatPickr,
    BInputGroup,
    BInputGroupAppend,
  },
  setup() {
    const selectedtype = ref()
    const search = ref()
    const optionelected = [{ title: 'Перевод' }, { title: 'Пополнение' }, { title: 'Вывод' }]
    const datestart = ref()
    const dateend = ref()

    return {
      search,
      selectedtype,
      optionelected,
      datestart,
      dateend,
      Russian,
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
