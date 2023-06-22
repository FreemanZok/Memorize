<template>
  <div class="indexTest">
   hello from page indexTest
  </div>
</template>

<script>

import { defineComponent, ref, } from "vue";

export default defineComponent({
  name: "indexTest",
  components: {},
  setup() {
    return {

    };
  },
  mounted() {
    // alert("this is IndexTest.vue")
  },
});
</script>
<style lang="scss" scoped>
.indexTest {
  position: relative;


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
