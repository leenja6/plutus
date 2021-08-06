<template>
  <div class="home-box">
    <h1 class="title-h1">
      Главная
    </h1>
    <div class="home-box-btn">
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        type="reset"
        variant="outline-primary"
        class="mt-1"
        @click="AuthorizationOpenModal"
      >Авторизация</b-button>
      <br>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        type="reset"
        variant="outline-primary"
        class="mt-1"
        @click="RegistrationOpenModal"
      >Регистрация</b-button>
      <br>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        type="reset"
        variant="outline-primary"
        class="mt-1"
        @click="forgotOpenModal"
      >Забыли пароль?</b-button>
      <br>
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        type="reset"
        variant="outline-primary"
        class="mt-1"
        @click="NewPasswordOpenModal"
      >Создание нового пароля</b-button>

    </div>

    <b-modal
      id="modal-20"
      v-model="show"
      :hide-footer="true"
      :hide-header="true"
      centered
    >
      <div class="modal-box">
        <p class="modal-box-img">
          <img src="@/assets/images/icons/Logo.svg"></p>
        <component
          :is="layout +'-modal'"
          @showClose="show = false"
          @closeForm="show = false"
          @forgotPassword="forgotOpenModal"
          @registrationOpen="RegistrationOpenModal"
          @authorizationOpen="AuthorizationOpenModal"
        />
      </div>
    </b-modal>

  </div>

</template>

<script>
import {
  BButton,
  VBModal,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import {
  ref,
} from '@vue/composition-api'
import AuthorizationModal from './Modal/AuthorizationModal.vue'
import RegistrationModal from './Modal/RegistrationModal.vue'
import ForgotPasswordModal from './Modal/ForgotPasswordModal.vue'
import CreatingNewPasswordModal from './Modal/CreatingNewPassword.vue'

export default {
  components: {
    BButton,
    VBModal,
    AuthorizationModal,
    RegistrationModal,
    ForgotPasswordModal,
    CreatingNewPasswordModal,

  },
  directives: {
    Ripple,
  },
  setup() {
    const layout = ref('')
    const show = ref(false)

    function AuthorizationOpenModal() {
      layout.value = 'authorization'
      show.value = true
    }

    function RegistrationOpenModal() {
      layout.value = 'registration'
      show.value = true
    }

    function forgotOpenModal() {
      layout.value = 'forgot-password'
      show.value = true
    }

    function NewPasswordOpenModal() {
      layout.value = 'creating-new-password'
      show.value = true
    }
    return {
      layout, show, AuthorizationOpenModal, NewPasswordOpenModal, RegistrationOpenModal, forgotOpenModal,
    }
  },
}
</script>

<style>

</style>
