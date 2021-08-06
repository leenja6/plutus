<template>
  <b-card>
    <!-- form -->
    <b-form>
      <b-row>

        <b-col md="6">
          <b-form-group
            label-for="Nickname"
            label="Ник"
          >
            <b-form-input
              id="Nickname"
              v-model="nickname"
              placeholder="Нет"
            />
          </b-form-group>
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
            label-for="Email"
            label="E-mail"
          >
            <b-form-input
              id="Email"
              v-model="email"
              placeholder="Нет"
            />
          </b-form-group>
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
            label-for="Jabber"
            label="Jabber"
          >
            <b-form-input
              id="Jabber"
              v-model="jabber"
              placeholder="Не подключен"
            />
          </b-form-group>
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
              {{ jabber ? 'Отключить' : 'Подключить' }}

            </b-button>

          </b-form-group></b-col>

        <b-col md="3">
          <b-form-group
            label-for="sendingnotifications"
            label="Отправка уведомлений"
          >
            <v-select
              id="sendingnotifications"
              v-model="notifications"
              class="notifications-select"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="notificationsOption"
            />
          </b-form-group>
        </b-col>

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
import vSelect from 'vue-select'
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
    vSelect,

  },
  directives: {
    Ripple,
  },
  setup() {
    const nickname = ref('ivan-nikitin')
    const email = ref()
    const jabber = ref()
    const notificationsOption = ['E-mail', 'Jabber', 'Telegram']
    const notifications = ref('E-mail')
    return {
      notificationsOption, notifications, nickname, email, jabber,
    }
  },

}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
