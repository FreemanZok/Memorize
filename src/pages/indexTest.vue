<template>
  <div class="indexTest">
    <div>
      من جابر هستم
    </div>
  </div>
</template>

<script>

import { defineComponent, ref, } from "vue";

export default defineComponent({
  name: "indexTest",
  components: {},
  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
      slide: ref("style"),
      lorem: "bagher",
    };
  },
  mounted() {
    alert("this is IndexTest.vue")
  },
});
</script>
<style lang="scss" scoped>
.indexTest {
  position: relative;
  min-height: 88vh;

  .startButton-wrap {
    position: absolute;
    bottom: 2vh;
    right: 2vw;

    .startButton {}
  }
}
</style>
<style lang="scss">
.indexTest {}
</style>
