import {createRouter, createWebHistory} from 'vue-router'
import routes from '~pages'

const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router;  


// Kalo mau manggil manual 


// import LongTime from '../pages/longtime/index.vue'
// import CostReport from '../pages/cost-report/index.vue'

// const routes = [
//    { name: 'LongTime', path: '/longtime', component: LongTime },
//   { name: 'CostReport',path: '/cost-report', component: CostReport }
//]