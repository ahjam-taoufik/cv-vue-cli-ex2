import Accueil from './components/Accueil.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

export default [

    {path:'/',component:Accueil},
    {path:'/p1',component:Page1},
    {path:'/p2/:id?',component:Page2}
]