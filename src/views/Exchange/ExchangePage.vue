<template>
  <div class="topup">
    <h1 class="title-h1">
      Обменять
    </h1>
    <div

      class="topup-box"
    >

      <div class="topup-box-left">

        <div class="topup-box-left-score topup-box-content">
          <div class="topup-box-left-title">
            <p>Со счета</p>
          </div>
          <select-score-currency
            :carditems="scoredefault"
            :selectarrayone="fiatcurrency"
            titleone="Фиатные счета"
            titletwo="Криптовалютные счета"
            :selectarraytwo="cryptocurrency"
            :systemcontrolvalidate="false"
            @curencyvalue="scoreAddOne($event)"
          />
        </div>
        <div class="topup-box-left-system topup-box-content">
          <div class="topup-box-left-title">
            <p>На счет</p>
          </div>
          <select-score-currency
            :carditems="scoredefaulttwo"
            :selectarrayone="fiatcurrency"
            titleone="Фиатные счета"
            titletwo="Криптовалютные счета"
            :selectarraytwo="cryptocurrency"
            :systemcontrolvalidate="false"
            @curencyvalue="scoreAddTwo($event)"
          />
        </div>

        <div class="topup-box-left-sum topup-box-content">
          <div class="topup-box-left-title">
            <p>Списано</p>
          </div>
          <div class="topup-box-left-sum-form Exchange">
            <div
              class="topup-box-input"
            ><p>
              <span class="amount-abs">{{ tokenOne }}</span>
              <b-form-input
                id="amount"
                v-model="amount"
                v-mask="totalMaskAmount"
                placeholder="0.00"
                :class="amoutcontrolvalidate ? 'alert-amout':''"
                @keypress="NumbersOnly"
              /></p><span v-if="amoutcontrolvalidate">{{ textcontrolvalidate }}</span></div>
          </div>
        </div>

        <div class="topup-box-left-total topup-box-content">
          <div class="topup-box-left-title">
            <p>Получено</p>
          </div>
          <div class="topup-box-left-sum-form Exchange">
            <div class="topup-box-input"><p>
              <span class="amount-abs">{{ tokentwo }}</span>
              <b-form-input
                id="Total"
                v-model="total"
                v-mask="totalmask"
                placeholder="0.00"
                @keypress="NumbersOnly"
              /></p></div>
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
              >Обменять</b-button>
            </div>
            <div />
          </div>
        </div>

      </div>
      <div class="topup-box-right">
        <div class="topup-box-right-title">
          <p>Условия обмена</p>
        </div>
        <div class="topup-box-right-text">
          <div>
            <p
              class="topup-box-right-text-title"
            >
              Внутренний перевод средств со счета {{ tokenOne }} на счет {{ tokentwo }}
            </p>
            <p class="topup-box-right-list-title">
              Комиссия операции
            </p>
            <p class="topup-box-right-list-title pd">
              1.25%
            </p>
            <p class="topup-box-right-list-title">
              Минимальная сумма операции
            </p>
            <p class="topup-box-right-list-title pd">
              $1  /  €1  /  ₽100
            </p>
            <p class="topup-box-right-list-title">
              Максимальная сумма операции
            </p>
            <p class="topup-box-right-list-title pd">
              $100 000  /  €100 000  /  ₽10 000 000
            </p>
            <p class="topup-box-right-list-title">
              Срок выполнения операции
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
  computed,
  ref, watch,
} from '@vue/composition-api'
import store from '@/store'
import Ripple from 'vue-ripple-directive'
import CurrencyToken from '@/utils/currencytoken'
import SelectScoreCurrency from '@/components/ui/selectScoreCurrency.vue'

export default {
  components: {
    BFormInput, BButton, SelectScoreCurrency,
  },
  directives: {
    Ripple,
    mask,
  },

  setup() {
    const amoutcontrolvalidate = ref(false)
    const amount = ref()
    const total = ref()
    const textcontrolvalidate = ref('')
    const tokenOne = ref('USD')
    const tokentwo = ref('BTC')
    const cryptocurrency = ref(store.state.viewsBalance.cryptocurrency)
    const fiatcurrency = ref(store.state.viewsBalance.fiatcurrency)
    const totalMaskAmount = computed(() => {
      if (tokenOne.value === 'USD' || tokenOne.value === 'EUR' || tokenOne.value === 'RUB') {
        return ['#.##', '##.##', '###.##', '####.##', '# ###.##', '## ###.##', '### ####.##', '# ### ###.##', '## ### ###.##']
      }
      return ['#.########', '##.########', '###.########', '####.########', '# ###.########', '## ###.########', '### ####.########', '# ### ###.########', '## ### ###.########']
    })
    const totalmask = computed(() => {
      if (tokentwo.value === 'USD' || tokentwo.value === 'EUR' || tokentwo.value === 'RUB') {
        return ['#.##', '##.##', '###.##', '####.##', '# ###.##', '## ###.##', '### ####.##', '# ### ###.##', '## ### ###.##']
      }
      return ['#.########', '##.########', '###.########', '####.########', '# ###.########', '## ###.########', '### ####.########', '# ### ###.########', '## ### ###.########']
    })

    const scoredefault = computed(() => {
      if (tokenOne.value === 'USD' || tokenOne.value === 'EUR' || tokenOne.value === 'RUB') {
        return store.state.viewsBalance.fiatcurrency.filter(c => c.token === tokenOne.value)
      } return store.state.viewsBalance.cryptocurrency.filter(c => c.token === tokenOne.value)
    })
    const scoredefaulttwo = computed(() => {
      if (tokentwo.value === 'USD' || tokentwo.value === 'EUR' || tokentwo.value === 'RUB') {
        return store.state.viewsBalance.fiatcurrency.filter(c => c.token === tokentwo.value)
      } return store.state.viewsBalance.cryptocurrency.filter(c => c.token === tokentwo.value)
    })

    watch([tokenOne, tokentwo, amount], (values, val) => {
      if (values[2] !== undefined) { if (Number(values[2].replace(/\s/g, '')) < 100000000) amoutcontrolvalidate.value = false }
      const fiatcurrencyindex = store.state.viewsBalance.fiatcurrency.findIndex(c => c.token === tokentwo.value)
      const cryptocurrencyindex = store.state.viewsBalance.cryptocurrency.findIndex(c => c.token === tokentwo.value)
      const fiatcurrencyOneindex = store.state.viewsBalance.fiatcurrency.findIndex(c => c.token === tokenOne.value)
      const cryptocurrencyOneindex = store.state.viewsBalance.cryptocurrency.findIndex(c => c.token === tokenOne.value)
      const fiatcurrencylength = store.state.viewsBalance.fiatcurrency.length
      const cryptocurrencylength = store.state.viewsBalance.cryptocurrency.length
      if (values[0] === val[0]) {
        console.log()
      } else if (values[0] === values[1]) {
        if (fiatcurrencyindex !== -1) {
          if (fiatcurrencylength !== fiatcurrencyindex + 1) {
            tokentwo.value = store.state.viewsBalance.fiatcurrency[fiatcurrencyindex + 1].token
          } else { tokentwo.value = store.state.viewsBalance.fiatcurrency[0].token }
        } else if (cryptocurrencylength !== cryptocurrencyindex + 1) {
          tokentwo.value = store.state.viewsBalance.cryptocurrency[cryptocurrencyindex + 1].token
        } else { tokentwo.value = store.state.viewsBalance.cryptocurrency[0].token }
      }
      if (values[1] === val[1]) {
        console.log()
      } else if (values[0] === values[1]) {
        if (fiatcurrencyOneindex !== -1) {
          if (fiatcurrencylength !== fiatcurrencyOneindex + 1) {
            tokenOne.value = store.state.viewsBalance.fiatcurrency[fiatcurrencyOneindex + 1].token
          } else { tokenOne.value = store.state.viewsBalance.fiatcurrency[0].token }
        } else if (cryptocurrencylength !== cryptocurrencyOneindex + 1) {
          tokenOne.value = store.state.viewsBalance.cryptocurrency[cryptocurrencyOneindex + 1].token
        } else { tokenOne.value = store.state.viewsBalance.cryptocurrency[0].token }
      }
    })

    function TopUpAdd() {
      const min = tokenOne.value === 'USD' || tokenOne.value === 'EUR' ? 1 : 100
      const max = tokenOne.value === 'USD' || tokenOne.value === 'EUR' ? 100000 : 10000000

      if (amount.value === undefined || amount.value === '') {
        amoutcontrolvalidate.value = true
        textcontrolvalidate.value = 'Поле не может быть пустым'
      } else if (Number(amount.value.replace(/\s/g, '')) > max) {
        amoutcontrolvalidate.value = true
        textcontrolvalidate.value = 'Сумма больше максимальной'
      } else if (Number(amount.value.replace(/\s/g, '')) < min) {
        amoutcontrolvalidate.value = true
        textcontrolvalidate.value = 'Сумма меньше минимальной'
      } else {
        console.log(
          {
            fromAnAccount: tokenOne.value,
            intoAnAccount: tokentwo.value,
            writtenOff: Number(amount.value.replace(/\s/g, '')),
            received: Number(total.value.replace(/\s/g, '')),
          },
        )
      }
    }

    function scoreAddOne(event) {
      tokenOne.value = event.token
    }
    function scoreAddTwo(event) {
      tokentwo.value = event.token
    }

    function NumbersOnly(evt) {
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    }

    return {
      CurrencyToken, totalMaskAmount, totalmask, scoreAddTwo, scoreAddOne, tokenOne, tokentwo, cryptocurrency, fiatcurrency, scoredefault, amoutcontrolvalidate, amount, total, TopUpAdd, NumbersOnly, textcontrolvalidate, scoredefaulttwo,
    }
  },
}
</script>
