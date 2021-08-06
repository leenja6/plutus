<template>
  <div class="modal-box-form">
    <p class="modal-box-form-title">
      Забыли пароль?
    </p>
    <p class="modal-box-form-subtitle">
      Введите адрес электронной почты<br> для восстановления пароля
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
      <div class="modal-box-form-control button">
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="submit"
          variant="primary"
          class="btn-modal"
          @click.prevent="onSubmit"
        >
          Сбросить пароль
        </b-button>
      </div>
    </b-form>
  </div>
</template>
<script>
import {
  ref, watch,
} from '@vue/composition-api'
import {
  BForm, BFormGroup, BFormInput, BButton,

} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,

  },
  directives: {
    Ripple,
  },
  setup(_, { emit }) {
    const reg = new RegExp(String.raw`^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$`)
    const eVal = ref(true)
    const eError = ref()
    const email = ref()

    function onSubmit() {
      if (email.value === undefined || email.value === '') {
        eError.value = 'Поле не может быть пустым'
      } else if (!reg.test(email.value)) {
        eError.value = 'Некорректный e-mail'
      } else {
        console.log(3)
        emit('closeForm')
      }
    }
    watch(email, val => {
      if (val.length < 100000000) { eError.value = false }
      if (reg.test(val)) { eVal.value = false } else { eVal.value = true }
    })

    return {
      email, onSubmit, eVal, eError, reg,
    }
  },
}
</script>
