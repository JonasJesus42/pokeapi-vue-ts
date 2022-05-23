import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Team from '@/views/team.vue'
import Pokemons from '@/views/pokemons.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/team', name: 'Team', component: Team},
        {path: '/pokemon/:id', name: 'Pokemons', component: Pokemons}
    ]
})

export default router
