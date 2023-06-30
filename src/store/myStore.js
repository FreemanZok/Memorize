// import { reactive } from "vue";

// const salam = reactive({
//   MainList: [
//     {
//       word: "erneut",
//       text_fa: "دوباره",
//       // text_en:"anew",
//       // voice_en:"دوباره",
//       voice_fa: "",
//       picture: "how-to-say-again-in-japanese.jpg",
//     },
//     {
//       word: "hochladen",
//       text_fa: "آپلود",
//       // text_en:"anew",
//       // voice_en:"دوباره",
//       voice_fa: "",
//       picture: "",
//     },
//     {
//       word: "herunterladen",
//       text_fa: "دانلود",
//       // text_en:"anew",
//       // voice_en:"دوباره",
//       voice_fa: "",
//       picture: "",
//     },
//     {
//       word: "Dorf",
//       text_fa: "روستا",
//       // text_en:"anew",
//       // voice_en:"دوباره",
//       voice_fa: "",
//       picture: "",
//     },
//     {
//       word: "Freunde",
//       text_fa: "دوستان",
//       // text_en:"anew",
//       // voice_en:"دوباره",
//       voice_fa: "",
//       picture: "",
//     },
//     {
//       word: "miteinander",
//       text_fa: "به اشتراک",
//       // text_en:"anew",
//       // voice_en:"دوباره",
//       voice_fa: "",
//       picture: "",
//     },
//   ],
// });

const MainList = [
  {
    word: "erneut",
    text_fa: "دوباره",
    // text_en:"anew",
    // voice_en:"دوباره",
    voice_fa: "",
    picture: "how-to-say-again-in-japanese.jpg",
  },
  {
    word: "hochladen",
    text_fa: "آپلود",
    // text_en:"anew",
    // voice_en:"دوباره",
    voice_fa: "",
    picture: "",
  },
  {
    word: "herunterladen",
    text_fa: "دانلود",
    // text_en:"anew",
    // voice_en:"دوباره",
    voice_fa: "",
    picture: "",
  },
  {
    word: "Dorf",
    text_fa: "روستا",
    // text_en:"anew",
    // voice_en:"دوباره",
    voice_fa: "",
    picture: "",
  },
  {
    word: "Freunde",
    text_fa: "دوستان",
    // text_en:"anew",
    // voice_en:"دوباره",
    voice_fa: "",
    picture: "",
  },
  {
    word: "miteinander",
    text_fa: "به اشتراک",
    // text_en:"anew",
    // voice_en:"دوباره",
    voice_fa: "",
    picture: "",
  },
];

export const myStore = new Proxy(MainList, {});
