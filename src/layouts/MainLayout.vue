<template>
  <div class="HeaderMain">
    <q-layout view="lHh Lpr lFf">
      <HeaderMain />
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
<style lang="scss">
.q-layout__section--marginal {
  background-color: #164b54;
}
</style>
<script>
import { defineComponent, ref, watch } from "vue";
import { myStore } from "../store/myStore";
import HeaderMain from "../components/HeaderMain.vue"
export default defineComponent({
  name: "MainLayout",

  components: {
    HeaderMain
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
