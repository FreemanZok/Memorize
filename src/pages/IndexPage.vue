<template>
  <div class="indexPage">
    <div class="startButton-wrap">
      <div class="">
        <q-btn color="cyan-10" @click="dialog = true" padding="xl" round icon="eco" />
      </div>
    </div>
    <div class="carousel-wrap">
      <q-carousel v-model="slide" infinite autoplay="true" dark="false" transition-prev="scale" transition-next="scale"
        swipeable animated control-color="white" navigation padding arrows height="100vh"
        class="bg-primary text-white shadow-1 rounded-borders">
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
          </q-img>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-img src="https://picsum.photos/500/300">
            <div class="absolute-bottom text-subtitle1 text-center">
              Caption
            </div>
            <audio controls autoplay>
              <source src="horse.ogg" type="audio/ogg">
              <!-- <source src="../assets/Holy_Ghost_Hold_On_We_re_Going_Home_Cover_.mp3" type="audio/mpeg"> -->
              Your browser does not support the audio element.
            </audio>
          </q-img>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="dialog">
      <q-dialog v-model="dialog" persistent :maximized="maximizedToggle" transition-show="slide-up"
        transition-hide="slide-down">
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-space />

            <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
              <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
              <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6 text-center">Alert</div>
          </q-card-section>

          <div>

          </div>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>

import { defineComponent, ref, } from "vue";
export default defineComponent({
  name: "IndexPage",

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
.carousel-wrap {
  height: 90vh;

  .q-carousel.q-panel-parent.q-carousel--with-padding {
    height: 100% !important;
  }
}
</style>
