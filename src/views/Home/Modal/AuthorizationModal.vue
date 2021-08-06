<template>
  <div class="modal-box-form">
    <p class="modal-box-form-title">
      Авторизация
    </p>
    <p class="modal-box-form-subtitle">
      Введите данные для входа в систему
    </p>
    <b-form>
      <div
        class="modal-box-form-control"
      >
        <b-form-group
          :class="eVal ? '' : 'good'"
          label-for="email"
          label="Логин / E-mail"
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
        class="modal-box-form-control"
      >
        <a
          href="#"
          @click.prevent="forgotPassword"
        >Забыли пароль?</a>
        <b-form-group
          :class="pVal ? '' : 'good'"
          label="Пароль"
          label-for="account-password"
        >
          <b-input-group class="input-group-merge pass">
            <b-form-input
              id="account-password"
              v-model="password"
              :class="pError ? 'Error' : ''"
              name="password"
              :type="passwordToggle"
            />
            <b-input-group-append
              :class="pError ? 'Error' : ''"
              is-text
            >
              <feather-icon
                :icon="passwordToggleIcon"
                class="cursor-pointer"
                @click="togglePassword"
              />
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <small v-if="pError">{{ pError }}</small>
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
      <div class="modal-box-form-control button">
        <b-button
          v-if="!confirmationAdd"
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="submit"
          variant="primary"
          class="btn-modal"
          @click.prevent="onSubmit"
        >
          Далее
        </b-button>
        <b-button
          v-else
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="submit"
          variant="primary"
          class="btn-modal"
          @click.prevent="onSubmitAdd"
        >
          Войти
        </b-button>
      </div>

    </b-form>

    <div
      v-if="!confirmationAdd"
      class="modal-bottom-info"
    >
      <div>
        <p class="modal-bottom-info-one">
          Нет учетной записи?
        </p>
        <p class="modal-bottom-info-two">
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="submit"
            variant="outline-primary"
            class="btn-bottom"
            @click="registrationOpen"
          >
            Создать
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
    const cVal = ref(true)
    const eVal = ref(true)
    const pVal = ref(true)
    const reg = new RegExp(String.raw`^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$`)
    const cError = ref()
    const pError = ref()
    const eError = ref()
    const email = ref()
    const password = ref()
    const confirmation = ref()
    const confirmationAdd = ref(false)
    const passwordToggle = ref('password')
    const passwordToggleIcon = computed(() => (passwordToggle.value === 'password' ? 'EyeIcon' : 'EyeOffIcon'))
    function togglePassword() {
      passwordToggle.value = passwordToggle.value === 'password' ? 'text' : 'password'
    }
    function forgotPassword() {
      emit('forgotPassword')
    }
    function registrationOpen() {
      emit('registrationOpen')
    }
    function onSubmit() {
      if (email.value === undefined || email.value === '') {
        eError.value = 'Поле не может быть пустым'
      } else if (!reg.test(email.value)) {
        eError.value = 'Некорректный e-mail'
      } else if (password.value === undefined || password.value.length < 7) {
        pError.value = 'Пароль не может быть меньше 7 символов'
      } else {
        confirmationAdd.value = true
      }
    }

    function onSubmitAdd() {
      if (confirmation.value === undefined || confirmation.value === '') {
        cError.value = 'Некорректный код подтверждения'
      } else if (confirmation.value.length < 6) {
        cError.value = 'Некорректный код подтверждения'
      } else {
        console.log(1)
        emit('closeForm')
      }
    }

    watch(email, val => {
      if (val.length < 100000000) { eError.value = false }
      if (reg.test(val)) { eVal.value = false } else { eVal.value = true }
    })

    watch(password, val => {
      if (val.length < 100000000) { pError.value = false }
      if (val.length > 7) { pVal.value = false } else { pVal.value = true }
    })

    watch(confirmation, val => {
      if (val.length < 100000000) { cError.value = false }
      if (val.length === 6) { cVal.value = false } else { cVal.value = true }
    })

    return {
      email, cVal, pVal, eVal, reg, onSubmitAdd, password, confirmation, cError, eError, pError, onSubmit, registrationOpen, confirmationAdd, passwordToggle, passwordToggleIcon, togglePassword, forgotPassword,
    }
  },
}
</script>
