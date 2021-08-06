<template>
  <b-card>
    <!-- form -->
    <b-form>
      <b-row>

        <b-col md="6">
          <b-form-group class="form-telegram"
            label-for="NickTelegram"
            label="Telegram"
          >
            <b-form-input
              id="NickTelegram"
              v-model="nickTelegram"
              placeholder="Не подключен"
            />
          </b-form-group>
          <p class="form-telegram-text">Telegram пользователя, для доступа к Telegram Bot</p>
        </b-col>
        <!--/ website -->

        <!-- phone -->
        <b-col md="6">
          <b-form-group class="btn-profile">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="outline-primary"
              class="mt-1 mr-1"
            >
              {{nickTelegram ? 'Отключить' : 'Подключить' }}
            </b-button>

          </b-form-group></b-col>

        <b-col md="6">
          <b-form-group class="form-telegram"
            label-for="secret-text"
            label="Секретное слово"
          >
            <b-form-input
              id="secret-text"
              v-model="secrettext"
              placeholder="Нет"
            />
          </b-form-group>
          <p class="form-telegram-text">Секретное слово для Telegram Bot</p>
        </b-col>
        <!--/ website -->

        <!-- phone -->
        <b-col md="6">
          <b-form-group class="btn-profile">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="outline-primary"
              class="mt-1 mr-1"
            >
              Изменить
            </b-button>

          </b-form-group></b-col>

        <b-col md="6">
          <b-form-group class="form-telegram"
            label-for="pin"
            label="PIN"
          >
            <b-form-input
              id="pin"
              v-model="pin"
              placeholder="Нет"
            />
          </b-form-group>
          <p class="form-telegram-text ">ПИН-код для подтверждения операций через Telegram Bot</p>
        </b-col>
        <!--/ website -->

        <!-- phone -->
        <b-col md="6">
          <b-form-group class="btn-profile">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="outline-primary"
              class="mt-1 mr-1"
            >
              Изменить
            </b-button>

          </b-form-group></b-col>

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-1 mr-1"
          >
            Сохранить
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-primary"
            class="mt-1"
          >
            Отмена
          </b-button>
        </b-col>
        <!--/ buttons -->
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,

  },
  directives: {
    Ripple,
  },
  setup() {
    const nickTelegram = ref()
    const secrettext = ref()
    const pin = ref()
    return { nickTelegram, secrettext, pin }
  },

}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
