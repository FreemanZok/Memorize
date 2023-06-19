<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn class="side-menu-button" flat dense color="cyan-10" round icon="menu" aria-label="Menu"
          @click="drawer = !drawer" />

        <q-toolbar-title> Memorize {{ myStore.alizoka }}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawer" show-if-above  :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true"
      :width="200" :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
      <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section>
              Star
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>
              Send
            </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>
              Drafts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss">
.q-layout__section--marginal {
  background-color: #057d83;
}
</style>
<script>
import { defineComponent, ref, watch } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { myStore } from "../store/myStore";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {

    const drawer = ref(false)
    watch(drawer, (hi, newX) => {
      console.log(`x is ${newX} and ${hi}`)
    })
    return {
      myStore,
      drawer,
      miniState: ref(true)
    };

  },

});
</script>
