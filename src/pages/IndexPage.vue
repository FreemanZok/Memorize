<template>
  <div class="indexPage">
    <CarouselMain />
    <div class="startButton-wrap">
      <div class="">
        <q-btn color="cyan-10" @click="dialog = true" padding="xl" round icon="eco" />
      </div>
    </div>
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

        <div class="collapsTor">
          <q-expansion-item icon="perm_identity" label="Create Category">
            <div class="input-wrap">
              <q-input placeholder="The World" v-model="text" filled type="textarea" />
            </div>
            <div class="input-wrap">
              <q-input placeholder="Translate" v-model="text" filled type="textarea" />
            </div>
            <div class="uploader-image-wrap">
              <q-uploader url="http://localhost:4444/upload" color="teal" flat bordered style="" />
            </div>
            <div class="uploader-sound-wrap">
              <q-uploader url="http://localhost:4444/upload" color="teal" flat bordered style="" />
            </div>
          </q-expansion-item>
          <q-expansion-item icon="perm_identity" label="Click Me">
            <q-card class="bg-grey-9">
              <q-card-section>
                <q-card-section>
                  <div class="text-h6 text-center">
                    <div class="q-pa-md">
                      <q-table color="primary" card-class="bg-amber-5 text-brown" table-class="text-grey-8"
                        table-header-class="text-brown" flat bordered title="All Categories" :rows="rows"
                        :columns="columns" row-key="name" />
                    </div>
                  </div>
                </q-card-section>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
        <div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

import { defineComponent, ref, } from "vue";
import CarouselMain from "../components/CarouselMain.vue"
export default defineComponent({
  name: "IndexPage",
  components: { CarouselMain },
  setup() {
    const columns = [
      {
        name: 'name',
        required: true,
        label: 'Dessert (100g serving)',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true
      },
      { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
    ]

    const rows = [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: '2%',
        iron: '22%'
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: '12%',
        iron: '6%'
      }
    ]
    return {
      columns,
      rows,
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
// .q-dialog .q-card.bg-primary.text-white {
//   background: #006787 !important;
// }

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
