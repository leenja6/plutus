<template>
  <b-card>
    <!-- form -->
    <b-form>
      <b-row>
        <b-col
          md="6"
          class="text-api"
        >
          <p>Библиотека для PHP (.zip)</p>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="outline-primary"
            class="mt-1 mr-1"
          >
            <feather-icon
              icon="SaveIcon"
              class="mr-50"
            />
            Скачать
          </b-button>
        </b-col>
        <b-col md="6" />
        <b-col md="6">
          <b-form-group
            class="form-telegram"
            label-for="encryptionkey"
            label="Ключ шифрования API"
          >
            <b-form-input
              id="encryptionkey"
              v-model="encryptionkey"
              placeholder="Нет"
            />
          </b-form-group>
          <p class="form-telegram-text">
            Назначается однократно и не требует замены
          </p>
        </b-col>

        <b-col md="6" />

        <b-col md="6">
          <b-form-group
            class="form-telegram"
            label-for="connectioncode"
            label="Код подключения"
          >
            <b-form-input
              id="connectioncode"
              v-model="connectioncode"
              placeholder="Нет"
            />
          </b-form-group>
          <p class="form-telegram-text">
            В случае смены старый код будет аннулирован
          </p>
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
          <b-form-group
            class="form-telegram"
            label-for="token"
            label="API Token"
          >
            <b-form-input
              id="token"
              v-model="token"
              placeholder="Нет"
            />
          </b-form-group>
          <p class="form-telegram-text ">
            Новый Token будет отправлен в jabber, старый – аннулируется
          </p>
        </b-col>
        <!--/ website -->

        <!-- phone -->
        <b-col md="6">
          <b-form-group class="btn-profile">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="outline-primary"
              class="mt-1 mr-1"
            >{{ token ? 'Обновить' : 'Получить' }}

            </b-button>

          </b-form-group></b-col>

        <b-col md="6">
          <b-form-group
            class="form-telegram"
            label-for="direct-ip"
            label="Прямой IP адрес"
          >
            <b-form-input
              id="direct-ip"
              v-model="directip"
              placeholder="Нет"
            />
          </b-form-group>
          <p class="form-telegram-text ">
            Включите, чтобы установить ограничение по IP вашего сервера
          </p>
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
          <b-form-group
            class="form-telegram"
            label-for="return-url"
            label="Обратный URL-адрес"
          >
            <b-form-input
              id="return-url"
              v-model="returnurl"
              placeholder="Нет"
            />
          </b-form-group>
          <p class="form-telegram-text ">
            Установите, чтобы получать уведомления о событиях API
          </p>
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
    const encryptionkey = ref('0VQZP2RH2D3WQEZPO')
    const connectioncode = ref('35696552489')
    const token = ref()
    const directip = ref()
    const returnurl = ref()
    return {
      encryptionkey, connectioncode, token, directip, returnurl,
    }
  },

}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
