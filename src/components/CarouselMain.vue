<template>
  <div class="CarouselMain">
    <div class="carousel-wrap">
      <div v-for="slide in $myStore" :key="slide">
        {{ slide }}
      </div>
      <q-carousel v-model="slide" infinite autoplay="false" dark="false" transition-prev="scale" transition-next="scale"
        swipeable animated control-color="white" padding arrows height="100vh"
        class="bg-primary text-white shadow-1 rounded-borders">
        <q-carousel-slide v-for="slide in $myStore" :key="slide" name="tv" class="column no-wrap flex-center">
          <q-img src="https://picsum.photos/500/300">
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ slide }}
            </div>
            <!-- <audio controls autoplay>
              <source src="horse.ogg" type="audio/ogg">
              <source src="../assets/Holy_Ghost_Hold_On_We_re_Going_Home_Cover_.mp3" type="audio/mpeg">
            </audio> -->
          </q-img>
        </q-carousel-slide>
      </q-carousel>
    </div>

  </div>
</template>

<script>

import { defineComponent, ref, } from "vue";

export default defineComponent({
  name: "CarouselMain",

  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
      slide: ref("style"),
      lorem: "bagher",

    };
  },
  mounted() {
    console.log("thisismyStore:", this.$myStore)
  },
});
</script>
<style lang="scss" scoped>
.CarouselMain {
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
.CarouselMain {

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
