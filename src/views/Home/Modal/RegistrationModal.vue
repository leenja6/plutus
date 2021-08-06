<template>
  <div class="modal-box-form">
    <p class="modal-box-form-title">
      Регистрация
    </p>
    <p class="modal-box-form-subtitle">
      Введите имя пользователя и пароль <br>для вашей учетной записи
    </p>
    <b-form>
      <div class="modal-box-form-control">
        <b-form-group
          :class="eVal ? '' : 'good'"
          label-for="email"
          label="E-mail"
        >
          <b-form-input
            id="email"
            v-model="email"
            :class="eError ? 'Error' : ''"
            placeholder="user@gmail.com"
          />
        </b-form-group>
        <small v-if="eError">{{ eError }}</small>
      </div>
      <div
        v-if="confirmationAdd"
        class="modal-box-form-control confirmation"
      >
        <b-form-group
          :class="cVal ? '' : 'good'"
          label-for="confirmation"
          label="Код подтверждения"
        >
          <b-form-input
            id="confirmation"
            v-model="confirmation"
            v-mask="'######'"
            :class="cError ? 'Error' : ''"
            placeholder=""
          />
        </b-form-group>
        <small v-if="cError">{{ cError }}</small>

      </div>
      <div v-if="loginAdd">
        <div class="modal-box-form-control">
          <b-form-group
            label-for="login"
            label="Логин (имя пользователя)"
          >
            <b-form-input
              id="login"
              v-model="login"
              placeholder="user@gmail.com"
            />
          </b-form-group>
        </div>
        <div class="modal-box-form-control">
          <b-form-group
            label="Пароль"
            label-for="account-password"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-password"
                v-model="password"
                name="password"
                :type="passwordToggle"
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIcon"
                  class="cursor-pointer"
                  @click="togglePassword"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </div>
        <div class="modal-box-form-control">
          <b-form-group
            label="Подтверждение пароля"
            label-for="account-password-confirmation"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-password-confirmation"
                v-model="passwordConfirmation"
                name="password"
                :type="passwordToggleConfirmation"
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleConfirmationIcon"
                  class="cursor-pointer"
                  @click="ToggleConfirmation"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </div>
      </div>
      <div
        v-if="!confirmationAdd"
        class="modal-box-form-control button"
      >
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="submit"
          variant="primary"
          class="btn-modal"
          @click.prevent="onSubmitAdd"
        >
          Далее
        </b-button>
      </div>
      <div
        v-else
        class="modal-box-form-control button"
      >
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="submit"
          variant="primary"
          class="btn-modal"
          @click.prevent="registrationOpen"
        >
          Зарегистрироватся
        </b-button>
      </div>

    </b-form>

    <div
      v-if="!confirmationAdd"
      class="modal-bottom-info"
    >
      <div>
        <p class="modal-bottom-info-one">
          Уже есть учетная запись?
        </p>
        <p class="modal-bottom-info-two">
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="submit"
            variant="outline-primary"
            class="btn-bottom"
            @click="authorizationOpen"
          >
            Войти
          </b-button></p>
      </div>
    </div>
  </div>

</template>
<script>
import { mask } from 'vue-the-mask'
import {
  computed,
  ref,
  watch,
} from '@vue/composition-api'
import {
  BForm, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BButton,

} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BButton,

  },
  directives: {
    Ripple,
    mask,
  },
  setup(_, { emit }) {
    const reg = new RegExp(String.raw`^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$`)
    const cVal = ref(true)
    const eVal = ref(true)
    const cError = ref()
    const eError = ref()
    const confirmationAdd = ref(false)
    const loginAdd = ref(false)
    const titleButton = ref('Далее')
    const email = ref()
    const password = ref()
    const passwordConfirmation = ref()
    const login = ref()
    const confirmation = ref()
    const passwordToggle = ref('password')
    const passwordToggleConfirmation = ref('password')
    const passwordToggleIcon = computed(() => (passwordToggle.value === 'password' ? 'EyeIcon' : 'EyeOffIcon'))
    const passwordToggleConfirmationIcon = computed(() => (passwordToggleConfirmation.value === 'password' ? 'EyeIcon' : 'EyeOffIcon'))
    function togglePassword() {
      passwordToggle.value = passwordToggle.value === 'password' ? 'text' : 'password'
    }
    function ToggleConfirmation() {
      passwordToggleConfirmation.value = passwordToggleConfirmation.value === 'password' ? 'text' : 'password'
    }
    function authorizationOpen() {
      emit('authorizationOpen')
    }

    function onSubmitAdd() {
      if (email.value === undefined || email.value === '') {
        eError.value = 'Поле не может быть пустым'
      } else if (!reg.test(email.value)) {
        eError.value = 'Некорректный e-mail'
      } else {
        confirmationAdd.value = true
      }
    }

    function registrationOpen() {
      if (confirmation.value === undefined || confirmation.value === '') {
        cError.value = 'Некорректный код подтверждения'
      } else if (confirmation.value.length < 6) {
        cError.value = 'Некорректный код подтверждения'
      } else {
        console.log(2)
        emit('closeForm')
      }
    }

    watch(email, val => {
      if (val.length < 100000000) { eError.value = false }
      if (reg.test(val)) { eVal.value = false } else { eVal.value = true }
    })

    watch(confirmation, val => {
      if (val.length < 100000000) { cError.value = false }
      if (val.length === 6) {
        cVal.value = false
        loginAdd.value = true
      } else {
        cVal.value = true
      }
    })

    return {
      email, registrationOpen, onSubmitAdd, loginAdd, cError, eError, cVal, eVal, authorizationOpen, ToggleConfirmation, passwordToggleConfirmationIcon, passwordToggleConfirmation, passwordConfirmation, login, titleButton, confirmationAdd, password, confirmation, passwordToggle, passwordToggleIcon, togglePassword,
    }
  },
}
</script>
