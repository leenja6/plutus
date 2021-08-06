<template>
  <div class="topup">
    <h1 class="title-h1">
      Пополнить
    </h1>
    <div

      class="topup-box"
    >

      <div class="topup-box-left">

        <div class="topup-box-left-score topup-box-content">
          <div class="topup-box-left-title">
            <p>Cчет</p>
          </div>
          <select-score-currency
            :carditems="scoredefault"
            :selectarrayone="fiatcurrency"
            titleone="Фиатные счета"
            titletwo="Криптовалютные счета"
            :selectarraytwo="cryptocurrency"
            :systemcontrolvalidate="false"
            @curencyvalue="scoreAdd($event)"
          />
        </div>
        <div class="topup-box-left-system topup-box-content">
          <div class="topup-box-left-title">
            <p>Cистема</p>
          </div>
          <select-score-currency
            :carditems="scoredefaulttwo"
            :selectarrayone="system[0].card"
            titleone="Банковские карты"
            titletwo="Платежные системы"
            :selectarraytwo="system[0].paymentsystems"
            :systemcontrolvalidate="systemcontrolvalidate"
            @curencyvalue="systemAdd($event)"
          />
        </div>

        <div class="topup-box-left-sum topup-box-content">
          <div class="topup-box-left-title">
            <p>Cумма</p>
          </div>
          <div class="topup-box-left-sum-form">
            <div
              class="topup-box-input"
            ><p><b-form-input
              id="amount"
              v-model="amount"
              v-mask="['#.##', '##.##', '###.##' , '####.##','# ###.##', '## ###.##', '### ####.##' , '# ### ###.##' , '## ### ###.##']"
              placeholder="0.00"
              :class="amoutcontrolvalidate ? 'alert-amout':''"
              @keypress="NumbersOnly"
            /></p><span v-if="amoutcontrolvalidate">{{ textcontrolvalidate }}</span></div>

            <select-currency
              :curencyarray="curencyArr"
              curencydefault="USD"
              @selectcurency="toggleBoxAmount($event)"
            />
          </div>
        </div>

        <div class="topup-box-left-total topup-box-content">
          <div class="topup-box-left-title">
            <p>Итого</p>
          </div>
          <div class="topup-box-left-sum-form">
            <div class="topup-box-input"><p><b-form-input
              id="Total"
              v-model="total"
              v-mask="['#.##', '##.##', '###.##' , '####.##','# ###.##', '## ###.##', '### ####.##' , '# ### ###.##' , '## ### ###.##']"
              placeholder="0.00"
              @keypress="NumbersOnly"
            /></p></div>

            <select-currency
              :curencyarray="curencyArr"
              curencydefault="USD"
              @selectcurency="toggleBoxTotal($event)"
            />

          </div>
        </div>

        <div class="topup-box-left-total topup-box-content">
          <div class="topup-box-left-title" />
          <div class="topup-box-left-sum-form">
            <div class="topup-box-input">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mt-1 mr-1"
                @click="TopUpAdd"
              >Пополнить</b-button>
            </div>
            <div />
          </div>
        </div>

      </div>
      <div class="topup-box-right">
        <div class="topup-box-right-title">
          <p>Условия пополнения</p>
        </div>
        <div class="topup-box-right-text">
          <div v-if="!carditems.length">
            <p
              class="topup-box-right-text-title"
            >
              Выберите платежную систему
            </p>

            <p class="topup-box-right-list-title">
              Условия и сроки пополнения счета зависят от следующих факторов:
            </p>
            <ul class="topup-box-right-list">
              <li><span>1.</span><span>Тип пополняемого счета (фиатный или криптовалютный)</span></li>
              <li><span>2.</span><span>Тип системы пополнения</span></li>
              <li><span>3.</span><span>Загруженность системы</span></li>
            </ul>
          </div>
          <div v-else>
            <p
              class="topup-box-right-text-title"
            >
              Пополнение счета {{ carditems[0].system === 1 ? 'картой': 'в платежной системе' }} {{ carditems[0].title }}
            </p>
            <p class="topup-box-right-list-title">
              Минимальная сумма пополнения
            </p>
            <p class="topup-box-right-list-title pd">
              ${{ CurrencyToken(carditems[0].min_summ[0].value) }}  /  €{{ CurrencyToken(carditems[0].min_summ[1].value) }}  /  ₽{{ CurrencyToken(carditems[0].min_summ[2].value) }}
            </p>
            <p class="topup-box-right-list-title">
              Максимальная сумма пополнения
            </p>
            <p class="topup-box-right-list-title pd">
              ${{ CurrencyToken(carditems[0].max_summ[0].value) }}  /  €{{ CurrencyToken(carditems[0].max_summ[1].value) }}  /  ₽{{ CurrencyToken(carditems[0].max_summ[2].value) }}
            </p>
            <p class="topup-box-right-list-title">
              Срок пополнения
            </p>
            <p class="topup-box-right-list-title">
              От 2 минут до 3 суток
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>
<script>
import {
  BFormInput, BButton,

} from 'bootstrap-vue'
import { mask } from 'vue-the-mask'

import {
  computed, ref, watch,
} from '@vue/composition-api'
import store from '@/store'
import Ripple from 'vue-ripple-directive'
import CurrencyToken from '@/utils/currencytoken'
import SelectCurrency from '@/components/ui/selectCurrency.vue'
import SelectScoreCurrency from '@/components/ui/selectScoreCurrency.vue'
import route from '@/router'

export default {
  components: {
    BFormInput, BButton, SelectCurrency, SelectScoreCurrency,
  },
  directives: {
    Ripple,
    mask,
  },

  setup() {
    console.log(route)
    const textcontrolvalidate = ref('')
    const systemcontrolvalidate = ref(false)
    const amoutcontrolvalidate = ref(false)
    const totalitem = ref('USD')
    const amountitem = ref('USD')
    const tokenOne = ref('USD')
    const tokentwo = ref('BTC')
    const selecttotal = ref(false)
    const selectamount = ref(false)
    const carditems = ref([])
    const scoreitems = ref([])
    const scoredefault = computed(() => {
      if (store.state.viewsBalance.fiatcurrency.filter(c => c.token === route.history.current.params.token).length !== 0) {
        return store.state.viewsBalance.fiatcurrency.filter(c => c.token === route.history.current.params.token)
      } if (store.state.viewsBalance.cryptocurrency.filter(c => c.token === route.history.current.params.token).length !== 0) {
        return store.state.viewsBalance.cryptocurrency.filter(c => c.token === route.history.current.params.token)
      } if (tokenOne.value === 'USD' || tokenOne.value === 'EUR' || tokenOne.value === 'RUB') {
        return store.state.viewsBalance.fiatcurrency.filter(c => c.token === tokenOne.value)
      }
      return store.state.viewsBalance.cryptocurrency.filter(c => c.token === tokenOne.value)
    })

    const scoredefaulttwo = computed(() => {
      if (tokentwo.value === 'VISA' || tokentwo.value === 'MasterCard' || tokentwo.value === 'Maestro') {
        return store.state.viewsBalance.system[0].card.filter(c => c.title === tokentwo.value)
      } return store.state.viewsBalance.system[0].paymentsystems.filter(c => c.title === tokentwo.value)
    })

    const amount = ref()
    const total = ref()
    const cryptocurrency = computed(() => store.state.viewsBalance.cryptocurrency)
    const fiatcurrency = computed(() => store.state.viewsBalance.fiatcurrency)
    const system = computed(() => store.state.viewsBalance.system)

    const curencyArr = [
      {
        title: 'USD',
        img: 'iconusd',
      },
      {
        title: 'EUR',
        img: 'iconeuro',
      },
      {
        title: 'RUB',
        img: 'iconrub',
      },
    ]

    function systemAdd(item) {
      carditems.value = [item]
      tokentwo.value = item.title
    }

    function scoreAdd(item) {
      scoreitems.value = [item]
      tokenOne.value = item.token
    }

    function SelectTotal() {
      selecttotal.value = !selecttotal.value
    }

    function SelectAmount() {
      selectamount.value = !selectamount.value
    }

    function toggleBoxTotal(item) {
      totalitem.value = item
      selecttotal.value = false
    }
    function toggleBoxAmount(item) {
      amountitem.value = item
      selectamount.value = false
    }

    function TopUpAdd() {
      const min = carditems.value.length ? carditems.value[0].min_summ.filter(c => c.item === amountitem.value.toLowerCase())[0].value : 0
      const max = carditems.value.length ? carditems.value[0].max_summ.filter(c => c.item === amountitem.value.toLowerCase())[0].value : 0

      if (carditems.value.length === 0) {
        systemcontrolvalidate.value = true
      } else if (amount.value === undefined || amount.value === '') {
        amoutcontrolvalidate.value = true
        textcontrolvalidate.value = 'Поле не может быть пустым'
      } else if (Number(amount.value.replace(/\s/g, '')) > max) {
        amoutcontrolvalidate.value = true
        textcontrolvalidate.value = 'Сумма больше максимальной'
      } else if (Number(amount.value.replace(/\s/g, '')) < min) {
        amoutcontrolvalidate.value = true
        textcontrolvalidate.value = 'Сумма меньше минимальной'
      } else {
        console.log('sdfsdfsdf')
      }
    }

    watch([amount, carditems], values => {
      if (values[0] < 100000000) amoutcontrolvalidate.value = false
      if (values[1] !== 0) systemcontrolvalidate.value = false
    })

    function NumbersOnly(evt) {
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    }

    return {
      curencyArr, NumbersOnly, scoredefaulttwo, tokenOne, tokentwo, scoredefault, scoreAdd, systemAdd, textcontrolvalidate, amoutcontrolvalidate, systemcontrolvalidate, TopUpAdd, CurrencyToken, amountitem, totalitem, SelectTotal, selecttotal, selectamount, SelectAmount, system, carditems, toggleBoxTotal, scoreitems, total, amount, cryptocurrency, fiatcurrency, toggleBoxAmount,
    }
  },
}
</script>
