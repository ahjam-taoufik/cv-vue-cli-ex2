import Accueil from './components/Accueil.vue'
import Page1 from './components/Page1.vue'
import Article from './components/Article-item.vue'

export default [

    {path:'/',component:Accueil},
    {path:'/p1',component:Page1},
   
    {path:'/article/:id',component:Article}
]