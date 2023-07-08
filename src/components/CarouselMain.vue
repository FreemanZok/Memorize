<template>
  <div class="CarouselMain">
    <div>
      <div>
        bagher
      </div>
    </div>
    <q-carousel v-if="$myStore.length" v-model="slide" infinite autoplay="false" dark="false" transition-prev="scale"
      transition-next="scale" swipeable animated control-color="white" padding arrows height="100vh"
      class="bg-primary text-white shadow-1 rounded-borders">
      <q-carousel-slide v-for="mySlide in $myStore" :name="mySlide.word" :key="mySlide.word"
        class="column no-wrap flex-center">
        <div class="my-slide">
          <div class="">
            <audio controls autoplay>
              <source :src="'../assets/Voices/' + mySlide.voice_en" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
          <div class="q-mt-md text-center">
            {{ mySlide.word }}
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
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
      lorem: ref("salam ast"),
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
