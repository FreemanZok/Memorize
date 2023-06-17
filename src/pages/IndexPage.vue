<template>
  <div class="indexPage">
    <div class="startButton-wrap">
      <div class="">
        <q-btn
          color="cyan-10"
          @click="dialog = true"
          padding="xl"
          round
          icon="eco"
        />
      </div>
    </div>
    <div class="carousel-wrap">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ myStore.alizoka }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
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
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-space />

            <q-btn
              dense
              flat
              icon="minimize"
              @click="maximizedToggle = false"
              :disable="!maximizedToggle"
            >
              <q-tooltip v-if="maximizedToggle" class="bg-white text-primary"
                >Minimize</q-tooltip
              >
            </q-btn>
            <q-btn
              dense
              flat
              icon="crop_square"
              @click="maximizedToggle = true"
              :disable="maximizedToggle"
            >
              <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary"
                >Maximize</q-tooltip
              >
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            this is ali fuckin zokaei
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
import { myStore } from "../store/myStore";
import { defineComponent, ref, } from "vue";
export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
      slide: ref("style"),
      lorem: "bagher",
      myStore,
    };
  },
  mounted() {
    this.myStore.alizoka = "bagher";
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

    .startButton {
    }
  }
}
</style>
