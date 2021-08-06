<template>

  <div

    class="modal-body-form"
  >
    <p class="modal-body-title">
      Редактировать карту
    </p>
    <b-form
      v-for="item in cardvalue"
      :key="item.id"
    >
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
              maxlength="19"
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
          >Срок действия карты истек</span>
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
              v-model="nameCard"
              :placeholder="item.name"
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
              v-model="namedCard"
              :placeholder="item.namecard"
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
            :curencydefault="item.type"
            @selectcurency="curencyType($event)"
          /></div>
      </div>

      <div class="modal-form-control control-btn">
        <div class="modal-control control-70 button-control">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            @click="editCards(item.id)"
          >
            Сохранить
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
  props: ['cardvalue'],

  setup(props, { emit }) {
    const namedcardvalidate = ref(false)
    const namecardvalidate = ref(false)
    const numbercardvalidate = ref(false)
    const datecardvalidate = ref(false)
    const type = ref(props.cardvalue[0].type)
    const numberCard = ref(props.cardvalue[0].number)
    const validMonthCard = ref(props.cardvalue[0].expiration.from)
    const validYearCard = ref(props.cardvalue[0].expiration.to)
    const nameCard = ref(props.cardvalue[0].name)
    const namedCard = ref(props.cardvalue[0].namecard)
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

    function editCards(item) {
      if (String(numberCard.value).length !== 19 || String(numberCard.value) === undefined || String(numberCard.value) === '') {
        numbercardvalidate.value = true
      } else if (validYearCard.value === g) {
        if (validMonthCard.value < m) {
          datecardvalidate.value = true
        } else if (nameCard.value === undefined || nameCard.value === '') {
          namecardvalidate.value = true
        } else if (namedCard.value === undefined || namedCard.value === '') {
          namedcardvalidate.value = true
        } else {
          store.commit('viewsCards/editCard',
            {
              id: item,
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
      } else if (nameCard.value === undefined || nameCard.value === '') {
        namecardvalidate.value = true
      } else if (datecardvalidate.value) {
        datecardvalidate.value = true
      } else if (namedCard.value === undefined || namedCard.value === '') {
        namedcardvalidate.value = true
      } else {
        store.commit('viewsCards/editCard',
          {
            id: item,
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
      if (values[1] === g) {
        if (Number(values[0]) >= m) { datecardvalidate.value = false } else { datecardvalidate.value = true }
      } else if (Number(values[0]) > m || values[1] >= g) { datecardvalidate.value = false } else { datecardvalidate.value = true }
    })

    watch([numberCard, nameCard, namedCard], values => {
      if (String(values[0]).length === 19) numbercardvalidate.value = false
      if (nameCard.value !== undefined || nameCard.value !== '') namecardvalidate.value = false
      if (namedCard.value !== undefined || namedCard.value !== '') namedcardvalidate.value = false
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
      numberCard,
      validMonthCard,
      validYearCard,
      nameCard,
      namedCard,
      validCardOption,
      cardYearOption,
      curencyType,
      editCards,
      numbercardvalidate,
      datecardvalidate,
      namecardvalidate,
      namedcardvalidate,
      NumbersOnly,
      Letter,
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
