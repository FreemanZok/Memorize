<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn class="side-menu-button" flat dense color="cyan-10" round icon="menu" aria-label="Menu"
          @click="drawer = !drawer" />
        <q-toolbar-title> Memorize</q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss">
.q-layout__section--marginal {
  background-color: #164b54;
}
</style>
<script>
import { defineComponent, ref, watch } from "vue";
import { myStore } from "../store/myStore";

export default defineComponent({
  name: "MainLayout",

  components: {
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
