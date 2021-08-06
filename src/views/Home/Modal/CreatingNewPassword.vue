<template>
  <div class="modal-box-form">
    <p class="modal-box-form-title">
      Создание нового пароля
    </p>
    <p class="modal-box-form-subtitle">
      Новый пароль должен отличаться от старого
    </p>
    <b-form>
      <div class="modal-box-form-control">
        <b-form-group
          :class="pVal ? '' : 'good'"
          label="Новый пароль"
          label-for="account-password"
        >
          <b-input-group class="input-group-merge pass">
            <b-form-input
              id="account-password"
              v-model="password"
              name="password"
              :class="pError ? 'Error' : ''"
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
      <div class="modal-box-form-control">
        <b-form-group
          :class="ppVal ? '' : 'good'"
          label="Подтверждение пароля"
          label-for="account-password-confirmation"
        >
          <b-input-group class="input-group-merge pass">
            <b-form-input
              id="account-password-confirmation"
              v-model="passwordConfirmation"
              name="password"
              :class="ppError ? 'Error' : ''"
              :type="passwordToggleConfirmation"
            />
            <b-input-group-append
              :class="ppError ? 'Error' : ''"
              is-text
            >
              <feather-icon
                :icon="passwordToggleConfirmationIcon"
                class="cursor-pointer"
                @click="ToggleConfirmation"
              />
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <small v-if="ppError">{{ ppError }}</small>
      </div>
      <div class="modal-box-form-control button">
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="submit"
          variant="primary"
          class="btn-modal"
          @click.prevent="onSubmit"
        >
          Сохранить пароль
        </b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
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

  },
  setup(_, { emit }) {
    const ppError = ref()
    const pError = ref()
    const pVal = ref(true)
    const ppVal = ref(true)
    const password = ref()
    const passwordConfirmation = ref()
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

    function onSubmit() {
      if (password.value === undefined || password.value.length < 7) {
        pError.value = 'Пароль не может быть меньше 7 символов'
      } else if (password.value !== passwordConfirmation.value) {
        ppError.value = 'Пароли не совпадают'
        ppVal.value = true
      } else {
        console.log(password.value, passwordConfirmation.value)
        console.log(4)
        emit('closeForm')
      }
    }

    watch([passwordConfirmation, password], val => {
      if (val[1] !== undefined && val[1].length < 100000000) { pError.value = false }
      if (val[1] !== undefined && val[1].length > 7) { pVal.value = false } else { pVal.value = true }
      if (val[0] !== undefined && val[0].length < 100000000) { ppError.value = false }
      if (val[0] !== undefined && val[0] === val[1] && val[0].length > 7) { ppVal.value = false } else { ppVal.value = true }
    })

    return {
      password, onSubmit, ppError, pError, pVal, ppVal, togglePassword, passwordToggle, passwordToggleConfirmation, ToggleConfirmation, passwordConfirmation, passwordToggleIcon, passwordToggleConfirmationIcon,
    }
  },
}
</script>
