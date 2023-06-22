<template>
  <div class="indexPage">
    <CarouselMain />
    <div class="startButton-wrap">
      <div class="">
        <q-btn color="cyan-10" @click="dialog = true" padding="xl" round icon="eco" />
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent, ref, } from "vue";
import CarouselMain from "../components/CarouselMain.vue"
export default defineComponent({
  name: "IndexPage",
  components: { CarouselMain },
  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
      slide: ref("style"),
      lorem: "bagher",
    };
  },
  mounted() {
    this.$ali.alizoka = "نادر ";
  },
});
</script>
<style lang="scss" scoped>
.indexPage {
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
.indexPage {

  .q-btn-item.non-selectable {
    height: 100%;
    border-radius: 0;
    background: #033738a3;
    width: 100%;
  }

  .q-carousel__prev-arrow--horizontal {
    left: 0;
  }

  .q-carousel__next-arrow--horizontal {
    right: 0;
  }

  .q-carousel__control.q-carousel__arrow {
    height: 100%;
    top: 0;
    width: 5vw;
  }
}

.carousel-wrap {
  height: 90vh;

  .q-carousel.q-panel-parent.q-carousel--with-padding {
    height: 100% !important;
  }
}
</style>
