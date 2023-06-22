<template>
  <div class="CreatePlayList">
    salam CreatePlayList
    {{ myStore.alizoka }}
  </div>
</template>
<style lang="scss" scoped></style>
<style lang="scss">
.CreatePlayList {}
</style>
<script>
import { defineComponent, ref, watch } from "vue";
import { myStore } from "../store/myStore";


export default defineComponent({
  name: "CreatePlayList",

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
