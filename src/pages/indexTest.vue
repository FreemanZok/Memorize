<template>
  <div class="indexTest">
    <h3>fuck test layout</h3>
    <q-carousel v-model="curSlide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
      :arrows="arrows" :padding="padding" control-color="dark" class="bg-white">
      <q-carousel-slide v-for="(compliment, i) in compliments" :key="i" :name='i + 1' v-ripple class="row content-center">
        <div class="col-12 row justify-center">
          {{ compliment.content }}
        </div>
        <div class="col-12 row justify-center">
          {{ compliment.date }}
        </div>
      </q-carousel-slide>
    </q-carousel>

  </div>
</template>

<script>

import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "indexTest",
  components: {},
  setup() {
    const curSlide = ref(1),
      compliments = reactive([
        {
          content: 'Hoihoihh',
          data: "abgehr"
        },
        {
          content: 'Haiahai',
          date: '12 mei 2011'
        },
        {
          content: 'hakhakahak',
          date: '5 oktober 1989'
        },
        {
          content: 'one more',
          date: '9 oktober 2021'
        }
      ])


    return {
      curSlide,
      compliments
    };
  },
  mounted() {
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
