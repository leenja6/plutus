<template>
  <!-- Need to add height inherit because Vue 2 don't support multiple root ele -->
  <div style="height: inherit">
    <div
      class="body-content-overlay"
      :class="{'show': shallShowUserProfileSidebar || shallShowActiveChatContactSidebar || mqShallShowLeftSidebar}"
      @click="mqShallShowLeftSidebar=shallShowActiveChatContactSidebar=shallShowUserProfileSidebar=false"
    />
    <!-- Main Area -->
    <section class="chat-app-window">
      <!-- Start Chat Logo -->
      <div
        v-if="!activeChat.contact"
        class="start-chat-area"
      >
        <div class="mb-1 start-chat-icon">
          <feather-icon
            icon="MessageSquareIcon"
            size="56"
          />
        </div>
        <h4
          class="sidebar-toggle start-chat-text"
        >
          Начать разговор
        </h4>

      </div>

      <!-- Chat Content -->
      <div
        v-else
        class="active-chat"
      >
        <!-- Chat Navbar -->
        <div class="chat-navbar">
          <header class="chat-header">

            <!-- Avatar & Name -->
            <div class="d-flex align-items-center">

              <!-- Toggle Icon -->
              <div class="sidebar-toggle d-block d-lg-none mr-1">
                <feather-icon
                  icon="MenuIcon"
                  class="cursor-pointer"
                  size="21"
                />
              </div>

              <b-avatar
                size="36"
                :src="require(`@/assets/images/avatars/${activeChat.contact.avatar}`)"
                class="mr-1 cursor-pointer badge-minimal"
              />
              <h6 class="mb-0">
                {{ contenttitle.role }}
              </h6>
            </div>

            <!-- Contact Actions -->

          </header>
        </div>

        <!-- User Chat Area -->
        <vue-perfect-scrollbar
          ref="refChatLogPS"
          :settings="perfectScrollbarSettings"
          class="user-chats scroll-area"
        >
          <chat-log
            :chat-data="activeChat"
            :profile-user-avatar="profileUserDataMinimal.avatar"
          />
        </vue-perfect-scrollbar>

        <!-- Message Input -->
        <b-form
          v-if="activeChat.chat.statusform"
          class="chat-app-form"
          @submit.prevent="sendMessage"
        >
          <b-input-group class="input-group-merge form-send-message mr-1">
            <b-form-input
              v-model="chatInputMessage"
              type="text"
              placeholder="Enter your message"
            />
            <b-form-file :accept="require('@/assets/images/icons/Iconimg.svg')" />
          </b-input-group>
          <b-button
            variant="primary"
            type="submit"
          >
            Отправить
          </b-button>
        </b-form>
      </div>
    </section>

    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-left">
      <chat-left-sidebar
        :chats-contacts="chatsContacts"
        :resolved-contacts="resolvedContacts"
        :contacts="contacts"
        :resolvedcont="resolvedcont"
        :active-chat-contact-id="activeChat.contact ? activeChat.contact.id : null"
        :shall-show-user-profile-sidebar.sync="shallShowUserProfileSidebar"
        :profile-user-data="profileUserData"
        :profile-user-minimal-data="profileUserDataMinimal"
        :mq-shall-show-left-sidebar.sync="mqShallShowLeftSidebar"
        @open-chat="openChatOfContact"
        @open-chat-res="resolveOpenChatOfContact"
      />
    </portal>
  </div>
</template>

<script>
import store from '@/store'
import {
  ref, computed, onMounted, nextTick,
} from '@vue/composition-api'
import {
  BAvatar, BForm, BInputGroup, BFormInput, BFormFile, BButton,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
// import { formatDate } from '@core/utils/filter'
import { $themeBreakpoints } from '@themeConfig'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'
import ChatLeftSidebar from './ChatLeftSidebar.vue'
import ChatLog from './ChatLog.vue'

export default {
  components: {

    // BSV
    BAvatar,
    BFormFile,
    BForm,
    BInputGroup,
    BFormInput,
    BButton,

    // 3rd Party
    VuePerfectScrollbar,

    // SFC
    ChatLeftSidebar,

    ChatLog,
  },
  setup() {
    onMounted(() => {
      store.commit('viewschat/profileUsers')
    })

    // Scroll to Bottom ChatLog
    const refChatLogPS = ref(null)
    const scrollToBottomInChatLog = () => {
      const scrollEl = refChatLogPS.value.$el || refChatLogPS.value
      scrollEl.scrollTop = scrollEl.scrollHeight
      console.log(refChatLogPS.value.$el)
    }

    // ------------------------------------------------
    // Chats & Contacts
    // ------------------------------------------------
    const chatsContacts = computed(() => store.state.viewschat.chatsContacts)
    const resolvedContacts = computed(() => store.state.viewschat.resolvedchatsContacts)
    const contacts = computed(() => store.state.viewschat.data[0].contacts)
    const resolvedcont = computed(() => store.state.viewschat.data[0].resolvedcontacts)
    const profileUserDataMinimal = computed(() => store.state.viewschat.profileUser[0])
    // ------------------------------------------------
    // Single Chat
    // ------------------------------------------------
    const activeChat = ref({})
    const resolveactiveChat = ref({})
    const contenttitle = ref([])
    const chatInputMessage = ref('')

    function showUserProfileSidebar() {}
    function openChatOfContact(userid) {
      activeChat.value = { chat: store.state.viewschat.data[0].chats.find(c => c.userId === userid), contact: contacts.value.find(c => c.id === userid) }
      contenttitle.value = store.state.viewschat.data[0].contacts.find(c => c.id === userid)
      nextTick(() => { scrollToBottomInChatLog() })
    }

    function resolveOpenChatOfContact(userid) {
      activeChat.value = { chat: store.state.viewschat.data[0].resolvedchats.find(c => c.userId === userid), contact: resolvedContacts.value.find(c => c.id === userid) }
      contenttitle.value = store.state.viewschat.data[0].resolvedcontacts.find(c => c.id === userid)
    }

    function sendMessage() {
      store.dispatch('viewschat/sendMessage', { message: chatInputMessage.value, id: activeChat.value.chat.id })
      chatInputMessage.value = ''
      nextTick(() => { scrollToBottomInChatLog() })
    }

    // User Profile Sidebar
    // ? Will contain all details of profile user (e.g. settings, about etc.)
    const profileUserData = ref({})
    // ? Will contain id, name and avatar & status

    const shallShowUserProfileSidebar = ref(false)
    // Active Chat Contact Details
    const shallShowActiveChatContactSidebar = ref(false)
    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()

    const startConversation = () => {
      if (store.state.app.windowWidth < $themeBreakpoints.lg) {
        mqShallShowLeftSidebar.value = true
      }
    }
    const perfectScrollbarSettings = {
      maxScrollbarLength: 150,
    }
    // UI + SM Devices
    // Left Sidebar Responsiveness

    return {
      // Filters
      // formatDate,
      // useChat
      contenttitle,
      sendMessage,
      resolveOpenChatOfContact,
      resolvedContacts,
      resolvedcont,
      // Chat & Contacts
      chatsContacts,
      contacts,
      resolveactiveChat,

      // Single Chat
      refChatLogPS,
      activeChat,
      chatInputMessage,

      // Profile User Minimal Data
      profileUserDataMinimal,

      // User Profile Sidebar
      profileUserData,
      shallShowUserProfileSidebar,
      showUserProfileSidebar,
      openChatOfContact,

      // Active Chat Contact Details
      shallShowActiveChatContactSidebar,
      scrollToBottomInChatLog,
      // UI
      perfectScrollbarSettings,

      // UI + SM Devices
      startConversation,
      mqShallShowLeftSidebar,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
@import "~@core/scss/base/pages/app-chat.scss";
@import "~@core/scss/base/pages/app-chat-list.scss";
</style>
