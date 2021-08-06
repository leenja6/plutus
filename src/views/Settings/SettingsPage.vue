<template>
  <div>
    <section id="faq-tabs">
      <p class="faq-tabs-title">
        Настройки
      </p>
      <b-tabs
        vertical
        content-class="col-12 col-md-9 mt-1 mt-md-0"
        pills
        nav-wrapper-class="col-md-3 col-12 faq-navigation"
        nav-class="nav-left"
      >

        <!-- general tab -->
        <b-tab active>

          <!-- title -->
          <template #title>
            <feather-icon
              icon="UserIcon"
              size="20"
              class="mr-50"
            />
            <span class="font-weight-bold">Профиль</span>
          </template>

          <account-setting-profile />
        </b-tab>
        <!--/ general tab -->

        <!-- change password tab -->
        <b-tab>

          <!-- title -->
          <template #title>
            <feather-icon
              icon="LockIcon"
              size="20"
              class="mr-50"
            />
            <span class="font-weight-bold">Пароль</span>
          </template>

          <account-setting-password />
        </b-tab>
        <!--/ change password tab -->

        <!-- info -->
        <b-tab>

          <!-- title -->
          <template #title>
            <svg
              class="img-telegram"
              stroke-width="1"
              width="20"
              fill="none"
              height="18"
              viewBox="0 0 18 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.7946 0C17.1729 0 17.5022 0.146603 17.722 0.412882C17.975 0.719144 18.059 1.15759 17.9588 1.64759L15.4623 13.8551C15.31 14.5998 14.7872 15.0811 14.1306 15.0811H14.1305C13.7944 15.0809 13.4504 14.9531 13.1353 14.711L13.1277 14.7052L13.1008 14.6837L13.0998 14.683L10.2644 12.4221L8.30952 14.2046C7.97883 14.506 7.60104 14.6653 7.21693 14.6653C6.60774 14.6653 6.08465 14.2555 5.85161 13.5956L4.14241 8.75552L0.981929 7.85986L0.967097 7.85551C0.142301 7.59562 0.00730667 7.14384 0.000302908 6.89769C-0.00670085 6.65154 0.102201 6.19296 0.910793 5.88738L16.1474 0.127564C16.3713 0.0428386 16.5891 0 16.7946 0ZM11.2972 5.50061L5.19971 8.58539L6.64042 12.6651L7.37252 9.72844C7.39422 9.64126 7.4383 9.56116 7.50051 9.49575L11.2972 5.50061ZM7.595 13.4362C7.56973 13.4592 7.54432 13.4797 7.51892 13.4986L8.19814 10.7744L9.43369 11.7597L7.595 13.4362ZM14.4286 13.6478L16.9251 1.44019C16.9693 1.22355 16.9336 1.10809 16.9056 1.07423C16.8843 1.04825 16.8269 1.04445 16.7946 1.04445C16.7421 1.04445 16.6522 1.05464 16.5236 1.10333L1.29161 6.86138L4.49507 7.76901L13.5255 3.20038C13.7539 3.08478 14.0331 3.1487 14.1872 3.35188C14.3411 3.55506 14.3252 3.83834 14.1494 4.02329L8.65888 9.80079L10.5706 11.3253C10.5712 11.3256 10.5717 11.326 10.5721 11.3264L13.7851 13.8883C13.9105 13.9839 14.033 14.0365 14.1305 14.0365C14.3278 14.0365 14.4046 13.7646 14.4286 13.6478Z"
                stroke="#5e5873"
                stroke-width="0.1"
                fill="#5e5873"
              />
            </svg>

            <span class="font-weight-bold">Telegram</span>
          </template>

          <account-setting-telegram />
        </b-tab>

        <b-tab>
          <template #title>
            <feather-icon
              icon="UploadCloudIcon"
              size="20"
              class="mr-50"
            />
            <span class="font-weight-bold">API</span>
          </template>

          <account-setting-api />
        </b-tab>
      </b-tabs>
    </section>
  </div>
</template>
<script>
import { BTabs, BTab } from 'bootstrap-vue'
import AccountSettingProfile from './AccountSettingProfile.vue'
import AccountSettingPassword from './AccountSettingPassword.vue'
import AccountSettingTelegram from './AccountSettingTelegram.vue'
import AccountSettingApi from './AccountSettingApi.vue'

export default {
  components: {
    BTabs,
    BTab,
    AccountSettingProfile,
    AccountSettingPassword,
    AccountSettingTelegram,
    AccountSettingApi,

  },
}
</script>
