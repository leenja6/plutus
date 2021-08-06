<template>
  <div class="balance__contener">
    <h1 class="title-h1">
      Баланс <span
        class="info-icon-box"
        @mouseover="overtooltip"
        @mouseleave="leavetooltip"
      >i</span>
      <tool-tip-custom
        v-if="tool"
        :text="textinfo"
      />
    </h1>
    <p class="balance__contener__card__title one">
      Криптовалютные счета
    </p>
    <b-row>
      <b-col
        v-for="items in cryptocurrency"
        :key="items.id"
        xl="4"
        md="6"
      >
        <div class="card card-body">
          <div class="card-info">
            <div class="card-info-img">
              <span
                :data-ref="items.token"
              ><img
                :src="require(`@/assets/images/icons/${items.token}.svg`)"
              ></span>
            </div>
            <div class="card-info-text">
              <p>
                <span><img
                        height="12"
                        :src="require('@/assets/images/icons/iconrub.svg')"
                      >
                  <img
                    height="12"
                    :src="require('@/assets/images/icons/iconrubwithe.svg')"
                  ></span><span>{{ items.summ_rub.toFixed(2) }}</span>
              </p>
              <p>
                <span>{{ items.token }}</span><span>{{ items.summ_token.toFixed(8) }}</span>
              </p>
            </div>
          </div>
          <div class="card-btn">
            <p @click="transitionPage(items.token)">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="outline-primary"
                class="mt-1 mr-1"
                @click="DeleteModal(item)"
              >
                <feather-icon
                  icon="PlusCircleIcon"
                  class="mr-50"
                  size="17"
                />
                Пополнить
              </b-button>
            </p>
            <p @click="transitionPageTwo(items.token)">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="outline-primary"
                class="mt-1 mr-1"
                size="17"
                @click="showModal(item)"
              >
                <feather-icon
                  icon="ArrowRightCircleIcon"
                  class="mr-50"
                  size="17"
                />
                Перевести
              </b-button>
            </p>
          </div>
        </div>
      </b-col>
    </b-row>

    <p class="balance__contener__card__title">
      Фиатные счета
    </p>

    <b-row>
      <b-col
        v-for="items in fiatcurrency"
        :key="items.id"
        xl="4"
        md="6"
      >
        <div class="card card-body">
          <div class="card-info">
            <div class="card-info-img">
              <span
                :data-ref="items.token"
              ><img
                :src="require(`@/assets/images/icons/${items.token}.svg`)"
              ></span>
            </div>
            <div class="card-info-text">
              <p>
                <span v-if="items.token !== 'RUB'">
                  <img
                    height="12"
                    :src="require('@/assets/images/icons/iconrub.svg')"
                  >
                  <img
                    height="12"
                    :src="require('@/assets/images/icons/iconrubwithe.svg')"
                  ></span>
                <span
                  v-else
                  class="hidden-text"
                >0</span>

                <span v-if="items.token !== 'RUB'">{{ items.summ_rub.toFixed(2) }}</span>
                <span
                  v-else
                  class="hidden-text"
                >0</span>
              </p>
              <p>
                <span>{{ items.token }}</span><span>{{ items.summ_cost.toFixed(2) }}</span>
              </p>
            </div>
          </div>
          <div class="card-btn">
            <p @click="transitionPage(items.token)">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="outline-primary"
                class="mt-1 mr-1"
                @click="DeleteModal(item)"
              >
                <feather-icon
                  icon="PlusCircleIcon"
                  class="mr-50"
                  size="17"
                />
                Пополнить
              </b-button>
            </p>
            <p @click="transitionPageTwo(items.token)">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="outline-primary"
                class="mt-1 mr-1"
                size="17"
                @click="showModal(item)"
              >
                <feather-icon
                  icon="ArrowRightCircleIcon"
                  class="mr-50"
                  size="17"
                />
                Перевести
              </b-button>
            </p>
          </div>
        </div>
      </b-col>
    </b-row>

    <h2 class="balance__contener__card__title title">
      Последние операции
    </h2>
    <div class="balance-history-table">
      <b-card
        no-body
      >
        <history-table
          :fetch="fetchInvoices"
          per="10"
          current="1"
        />
      </b-card>
    </div>
    <div class="btn-box">
      <p><router-link to="/history">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="outline-primary"
          class="mt-1 mr-1"
        >
          <feather-icon
            icon="CalendarIcon"
            class="mr-50"
            size="17"
          />
          Все операции
        </b-button>

      </router-link>
      </p>
    </div>
  </div>
</template>
<script>
import {
  BRow,
  BCol,
  BCard,
  BButton,

} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import { computed, ref } from '@vue/composition-api'
import store from '@/store'
import router from '@/router'
import Ripple from 'vue-ripple-directive'
import HistoryTable from '../History/HistoryTable.vue'
import CurrencyToken from '../../utils/currencytoken'
import ToolTipCustom from '../../components/ui/ToolTipCustom.vue'

export default {

  components: {
    HistoryTable,
    BRow,
    BCol,
    ToolTipCustom,
    BCard,
    BButton,

  },
  directives: {
    Ripple,
  },
  setup() {
    const tool = ref(false)
    const textinfo = 'В данном разделе вы можете видеть актуальное состояние ваших кошельков в системе PLUTUS, а так же список последних выполненных операций'
    const statusOptions = [
      'Downloaded',
      'Draft',
      'Paid',
      'Partial Payment',
      'Past Due',
    ]
    const cryptocurrency = computed(() => store.state.viewsBalance.cryptocurrency)
    const fiatcurrency = computed(() => store.state.viewsBalance.fiatcurrency)
    const fetchInvoices = computed(() => store.state.viewsHistory.fetchInvoices)

    function transitionPage(item) {
      router.push({ name: 'topup', params: { token: item } })
    }

    function transitionPageTwo(item) {
      router.push({ name: 'transfer', params: { token: item } })
    }

    function overtooltip() {
      tool.value = true
    }

    function leavetooltip() {
      tool.value = false
    }

    return {
      CurrencyToken,
      cryptocurrency,
      fiatcurrency,
      fetchInvoices,
      statusOptions,
      avatarText,
      textinfo,
      transitionPage,
      overtooltip,
      leavetooltip,
      tool,
      transitionPageTwo,

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
