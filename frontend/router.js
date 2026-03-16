import { createRouter, createWebHistory } from "vue-router"

import ReaderPage from "../src/features/reader/ReaderPage.vue"
import MakerPage from "../src/features/maker/MakerPage.vue"
import DownloadPage from "../src/features/archive/DownloadPage.vue"
import FeatureHomePage from "../src/features/features-home/FeatureHomePage.vue"

const routes = [

  {
    path: "/",
    redirect: "/reader"
  },
  {
    path: "/my-litebooks",
    redirect: "/home"
  },
  

  {
    path: "/reader",
    component: ReaderPage
  },
  

  {
    path: "/home",
    component: FeatureHomePage
  },

  {
    path: "/maker",
    component: MakerPage
  },

  {
    path: "/download-litebook/:name",
    component: DownloadPage
  }

]

export default createRouter({
  history: createWebHistory(),
  routes
})