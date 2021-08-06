<template>

  <div

    class="modal-body-form"
  >
    <p class="modal-body-title">
      Добавить карту
    </p>
    <b-form>
      <div class="modal-form-control one">
        <div class="modal-control control-50">
          <p class="control-title">
            Номер карты
          </p>
          <p>
            <b-form-input
              id="number-card"
              v-model="numberCard"
              v-mask="'#### #### #### ####'"
              :class="numbercardvalidate ? 'active' : ''"
              @keypress="NumbersOnly"
            />
          </p>
          <span
            v-if="numbercardvalidate"
            class="valid-control"
          >Введите номер карты</span>
        </div>
        <div class="modal-control control-50">
          <p class="control-title">
            Действительна до
          </p>
          <div class="modal-control-select">
            <p>
              <v-select
                id="valid-card"
                v-model="validMonthCard"
                :class="datecardvalidate ? 'active' : ''"
                taggable
                class="notifications-select cards"
                :options="validCardOption"
              />
            </p>
            <p>
              <v-select
                id="valid-year-card"
                v-model="validYearCard"
                :class="datecardvalidate ? 'active' : ''"
                class="notifications-select cards"
                :options="cardYearOption"
              />
            </p>
          </div>
          <span
            v-if="datecardvalidate"
            class="valid-control"
          >{{ datecardvalidate }}</span>

        </div>
      </div>
      <div class="modal-form-control">
        <div class="modal-control control-100">
          <p class="control-title">
            Имя держателя карты
          </p>
          <p>
            <b-form-input
              id="name-card"
              v-model.trim.lazy="nameCard"
              :class="namecardvalidate ? 'active' : ''"
              @keypress="Letter($event)"
            />
          </p>
          <span
            v-if="namecardvalidate"
            class="valid-control"
          >Введите имя держателя карты</span>
        </div>
      </div>
      <div class="modal-form-control">
        <div class="modal-control control-70">
          <p class="control-title">
            Название карты
          </p>
          <p>
            <b-form-input
              id="named-card"
              v-model.trim.lazy="namedCard"
              :class="namedcardvalidate ? 'active' : ''"
              @keypress="Letter($event)"
            />
          </p>
          <span
            v-if="namedcardvalidate"
            class="valid-control"
          >Введите название карты</span>

        </div>
        <div class="modal-control control-30">
          <p class="control-title">
            Тип валюты
          </p>

          <select-currency
            :curencyarray="curencyArr"
            curencydefault="USD"
            @selectcurency="curencyType($event)"
          /></div>
      </div>
      <div class="modal-form-control control-btn">
        <div class="modal-control control-70 button-control">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            @click.prevent="AddCards"
          >
            Добавить
          </b-button>
        </div>
        <div class="modal-control control-30 button-control">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="outline-primary"
            @click="$emit('showClose')"
          >
            Отмена
          </b-button>
        </div>
      </div></b-form>
  </div>
</template>
<script>
import SelectCurrency from '@/components/ui/selectCurrency.vue'
import { ref, watch } from '@vue/composition-api'
import {
  BFormInput,
  BForm,
  BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import { mask } from 'vue-the-mask'

export default {
  emits: ['showClose'],
  components: {
    SelectCurrency,
    BFormInput,
    BForm,
    BButton,
    vSelect,
  },
  directives: {
    Ripple,
    mask,
  },
  setup(_, { emit }) {
    const namedcardvalidate = ref(false)
    const namecardvalidate = ref(false)
    const numbercardvalidate = ref(false)
    const datecardvalidate = ref(false)
    const type = ref('USD')
    const numberCard = ref()
    const validMonthCard = ref()
    const validYearCard = ref()
    const nameCard = ref()
    const namedCard = ref()
    const validCardOption = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const cardYearOption = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
    const date = new Date()
    const m = date.getMonth() + 1
    const g = date.getFullYear()

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

    function curencyType(item) {
      type.value = item
    }

    function AddCards() {
      if (String(numberCard.value).length !== 19 || String(numberCard.value) === undefined || String(numberCard.value) === '') {
        numbercardvalidate.value = true
      } else if (validMonthCard.value === undefined || validYearCard.value === undefined) {
        datecardvalidate.value = 'Введите срок действия'
      } else if (validYearCard.value === g) {
        if (validMonthCard.value >= m) {
          if (nameCard.value === undefined || nameCard.value === '') {
            namecardvalidate.value = true
          } else if (namedCard.value === undefined || namedCard.value === '') {
            namedcardvalidate.value = true
          } else {
            store.commit('viewsCards/addCard',
              {
                id: (Math.random() * 1000).toFixed(0),
                type: type.value,
                number: numberCard.value,
                expiration:
                {
                  from: validMonthCard.value,
                  to: validYearCard.value,
                },
                name: nameCard.value,
                namecard: namedCard.value,

              })
            emit('showClose')
          }
        } else {
          datecardvalidate.value = 'Срок действия карты истек'
        }
      } else if (nameCard.value === undefined || nameCard.value === '') {
        namecardvalidate.value = true
      } else if (namedCard.value === undefined || namedCard.value === '') {
        namedcardvalidate.value = true
      } else {
        store.commit('viewsCards/addCard',
          {
            id: (Math.random() * 1000).toFixed(0),
            type: type.value,
            number: numberCard.value,
            expiration:
                {
                  from: validMonthCard.value,
                  to: validYearCard.value,
                },
            name: nameCard.value,
            namecard: namedCard.value,

          })
        emit('showClose')
      }
    }

    watch([validMonthCard, validYearCard], values => {
      if (values[0] !== undefined && values[0].length > 0) { datecardvalidate.value = false }
      if (values[1] !== undefined && values[1].length > 0) { datecardvalidate.value = false }
    })

    watch([numberCard, nameCard, namedCard], values => {
      if (String(values[0]).length === 19) numbercardvalidate.value = false
      if (values[1] !== undefined || values[1] !== '') namecardvalidate.value = false
      if (values[2] !== undefined || values[2] !== '') namedcardvalidate.value = false
    })

    function NumbersOnly(evt) {
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    }

    function Letter(evt) {
      const char = String.fromCharCode(evt.keyCode)
      if (/^[A-zА-яЁё-\s]+$/.test(char)) return true
      evt.preventDefault()
    }
    return {
      curencyArr,
      NumbersOnly,
      numberCard,
      validMonthCard,
      validYearCard,
      nameCard,
      namedCard,
      validCardOption,
      cardYearOption,
      curencyType,
      Letter,
      AddCards,
      numbercardvalidate,
      datecardvalidate,
      namecardvalidate,
      namedcardvalidate,
      type,
      date,
      m,
      g,

    }
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
