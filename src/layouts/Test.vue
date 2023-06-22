<template>
  <q-layout view="lHh Lpr lFf">
    <div class="Test">
      <q-page-container>
        <router-view />
      </q-page-container>
      Test.vue
    </div>
  </q-layout>
</template>
<style lang="scss" scoped></style>
<style lang="scss">
.CreatePlayList {}
</style>
<script>
import { defineComponent, ref, watch } from "vue";
import { myStore } from "../store/myStore";


export default defineComponent({
  name: "Test",

  components: {
  },

  setup() {

    const drawer = ref(false)
    return {
      myStore,
      drawer,
      miniState: ref(true)
    };

  },

});
</script>
