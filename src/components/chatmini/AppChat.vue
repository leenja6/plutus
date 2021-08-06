<template>
  <div class="app-chat">
    <div
      v-if="items"
      class="app-chat-icon"
      @click="toggle(false)"
    >
      <feather-icon
        icon="MessageSquareIcon"
        size="25"
      />
    </div>

    <div
      v-else
      class="chat-application"
    >
      <div class="content-right chat-content-right">
        <section class="chat-app-window">
          <div class="active-chat">
            <div class="chat-navbar">
              <header class="chat-header">
                <div class="d-flex align-items-center">

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
                    {{ activeChat.contact.fullName }}
                  </h6>

                </div>
                <span @click="toggle(true)"><feather-icon
                  icon="XIcon"
                  class="cursor-pointer"
                  size="21"
                /></span>
              </header>
            </div>
            <vue-perfect-scrollbar
              ref="refChatLogPS"
              :settings="perfectScrollbarSettings"
              class="user-chats scroll-area"
              :class="chatheight <= 570 ? 'min-height-chat' : ''"
            >
              <chat-log
                :chat-data="activeChat"
                :profile-user-avatar="profileUserDataMinimal.avatar"
              />

            </vue-perfect-scrollbar>
            <!-- Message Input -->
            <b-form @keyup.enter="sendMessage">
              <div class="form-chat">
                <p class="chat-manager-message">
                  Менеджер печатает...
                </p>
                <div class="form-chat-text">
                  <b-form-textarea
                    ref="focus"
                    v-model="chatInputMessage"
                    type="text"
                    placeholder="Сообщение..."
                    rows="1"
                    max-rows="6"
                    :class="chatInputMessage.length >= 32 ? '': 'chat-length' "
                    style="overflow-y: auto"
                  />

                </div>
                <div class="form-chat-btn">

                  <div class="smile-icon">

                    <feather-icon
                      icon="SmileIcon"
                      class="cursor-pointer"
                      size="21"
                      @click.prevent.stop="smallicon = !smallicon"
                    />
                    <p
                      v-if="smallicon"
                      v-click-outside="hide"
                      class="smile-icon-emoji"
                    >
                      <span class="input-group-smile"><b-input-group class="input-group-smile-search">
                        <b-input-group-prepend is-text>
                          <feather-icon
                            size="15"
                            icon="SearchIcon"
                          />
                        </b-input-group-prepend>

                        <b-form-input
                          v-model="smileSearch"
                          placeholder="Поиск"
                        />

                      </b-input-group></span>
                      <span
                        v-for="small in emojiSearch"
                        :key="small"
                        @click.stop="smalliconAdd(small.icon)"
                      >{{ small.icon }}</span>
                      <span
                        v-if="emojiSearch.length === 0"
                        class="emoji-none"
                      >Не найдено</span>
                      <span class="position-small">▼</span>
                    </p>
                  </div>
                  <div
                    class="paperclip-icon"
                  >
                    <feather-icon
                      icon="PaperclipIcon"
                      class="cursor-pointer"
                      size="21"
                    />
                    <b-form-file :accept="require('@/assets/images/icons/Iconimg.svg')" />
                  </div>
                </div>

              </div>
            </b-form>
          </div></section>
      </div>
    </div>
  </div>

</template>
<script>
import {
  BAvatar, BFormTextarea, BForm, BFormFile, BInputGroup, BFormInput, BInputGroupPrepend,
} from 'bootstrap-vue'
import {
  computed, ref, watch, nextTick, reactive,
} from '@vue/composition-api'
import store from '@/store'
import ChatLog from '@/components/chatmini/ChatLog.vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { $themeBreakpoints } from '@themeConfig'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside,
  },
  components: {
    ChatLog, VuePerfectScrollbar, BAvatar, BFormTextarea, BForm, BFormFile, BInputGroup, BFormInput, BInputGroupPrepend,
  },

  setup() {
    const smileSearch = ref()
    const chatheight = computed(() => store.state.viewschats.chatheight)
    const focus = ref()
    const smallicon = ref(false)
    const emoji = reactive([
      { icon: '😀', title: 'Ухмыляясь лицо smile' },
      { icon: '😃', title: 'улыбающееся лицо с открытым ртом smiley' },
      { icon: '😄', title: 'Улыбающееся лицо с улыбающимися глазами grinning' },
      { icon: '😁', title: 'Сияющее лицо с улыбающимися глазами grin' },
      { icon: '😆', title: 'Ухмыляющееся щурящееся лицо laughing' },
      { icon: '😅', title: 'Ухмыляющееся лицо с каплей пота sweat smile' },
      { icon: '🤣', title: 'Валяюсь по полу от смеха joy' },
      { icon: '😂', title: 'Лицо со слезами радости joy' },
      { icon: '🙂', title: 'Слегка улыбающееся лицо slightly smiling face' },
      { icon: '🙃', title: 'Перевернутое лицо upside down face' },
      { icon: '😉', title: 'Подмигивающее лицо wink' },
      { icon: '😊', title: 'Улыбающееся лицо с улыбающимися глазами blush happy' },
      { icon: '😇', title: 'Улыбающееся лицо с гало halo' },
      { icon: '🥰', title: 'Улыбающееся лицо с сердечками smiling face hearts' },
      { icon: '😍', title: 'Улыбающееся лицо с глазами-сердечками heart eyes' },
      { icon: '😘', title: 'Воздушный поцелуй kissing heart' },
      { icon: '😗', title: 'Поцелуй kissing' },
      { icon: '😚', title: 'Лицо со скромной улыбкой kissing closed eyes' },
      { icon: '😙', title: 'Целующее лицо с закрытыми глазами kissing smiling eyes' },
      { icon: '😋', title: 'Как вкусно! yum' },
      { icon: '😛', title: 'Лицо с языком stuck out tongue' },
      { icon: '😜', title: 'Подмигивающее лицо с языком stuck out tongue winking eye' },
      { icon: '🤪', title: 'Шут stuck out tongue winking eye' },
      { icon: '😝', title: 'Прищурившееся лицом с языком stuck out tongue closed eyes' },
      { icon: '🤑', title: 'Лицо с жаждой наживы money mouth face' },
      { icon: '🤗', title: 'Обнимашки hugging face' },
      { icon: '🤭', title: 'Лицо с прикрывающей рот рукой thinking face' },
      { icon: '🤫', title: 'Шишикающее лицо bumping face' },
      { icon: '🤔', title: 'Задумчивое лицо thoughtful face' },
      { icon: '🤐', title: 'Лицо с ртом на замке zipper mouth face' },
      { icon: '🤨', title: 'Лицо с поднятой бровью face with a raised eyebrow' },
      { icon: '😐', title: 'Нейтральное лицо neutral face' },
      { icon: '😑', title: 'Лицо без эмоций expressionless' },
      { icon: '😶', title: 'Лицо без рта face without a mouth' },
      { icon: '😏', title: 'Ухмыляющееся лицо grinning face' },
      { icon: '😒', title: 'Лицо, которому не смешно face is not funny' },
      { icon: '🙄', title: 'Лицо с закатанными глазами face_with_rolling_eyes' },
      { icon: '😬', title: 'Лицо с гримасой grimacing' },
      { icon: '🤥', title: 'Врущее лицо lying face' },
      { icon: '😌', title: 'Умиротворенное лицо relieved' },
      { icon: '😔', title: 'Задумчивое лицо pensive' },
      { icon: '😪', title: 'Сонное лицо sleepy' },
      { icon: '🤤', title: 'Лицо, пускающее слюни drooling face' },
      { icon: '😴', title: 'Спящее лицо sleeping' },
      { icon: '😎', title: 'Лицо в солнцезащитных очках face with sunglasses' },
      { icon: '🥳', title: 'Вечеринка party' },
    ])

    const emojiSearch = computed(() => emoji.filter(request => {
      if (smileSearch.value) {
        return request.title.toLowerCase().includes(smileSearch.value.toLowerCase())
      }
      return request
    }))

    const refChatLogPS = ref(null)
    const scrollToBottomInChatLog = () => {
      const scrollEl = refChatLogPS.value.$el || refChatLogPS.value
      scrollEl.scrollTop = scrollEl.scrollHeight
    }
    const items = computed(() => store.state.viewschats.togg)

    const activeChat = computed(() => {
      const chat = store.state.viewschats.data[0].chats[0]
      const contact = store.state.viewschats.data[0].contacts[0]
      return { chat, contact }
    })
    const chatInputMessage = ref('')

    const profileUserDataMinimal = store.state.viewschats.data[0].profileUser

    function sendMessage() {
      if (chatInputMessage.value.length - 1 !== 0) {
        store.dispatch('viewschats/sendMessage', { message: chatInputMessage.value })
      }
      chatInputMessage.value = ''
      nextTick(() => { scrollToBottomInChatLog() })
    }

    function hide() {
      smallicon.value = false
      nextTick(() => focus.value.$el.focus())
    }

    function toggle(item) {
      store.commit('viewschats/toggle', item)
      if (!items.value) {
        nextTick(() => { scrollToBottomInChatLog() })
      }
      nextTick(() => focus.value.$el.focus())
    }
    watch(items, values => {
      if (!values) {
        nextTick(() => { toggle(false) })
      }
    })
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

    function smalliconAdd(item) {
      chatInputMessage.value = `${chatInputMessage.value}${item}`
      smallicon.value = false
      nextTick(() => focus.value.$el.focus())
    }
    return {
      shallShowActiveChatContactSidebar, emojiSearch, smileSearch, chatheight, hide, smalliconAdd, focus, smallicon, emoji, toggle, items, refChatLogPS, shallShowUserProfileSidebar, startConversation, activeChat, sendMessage, perfectScrollbarSettings, profileUserDataMinimal, chatInputMessage, scrollToBottomInChatLog,
    }
  },
}
</script>
<style lang="scss">
@import "~@core/scss/base/pages/app-chat.scss";
@import "~@core/scss/base/pages/app-chat-list.scss";
</style>
