import AboutVue from '@/components/About.vue'
import ContactVue from '@/components/Contact.vue'
import Home from '@/components/Home.vue'
import productDetailVue from '@/components/productDetail.vue'
import SHopVue from '@/components/Shop.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: "/", name: 'home', component: Home},
    {path: "/about", name: 'about', component: AboutVue},
    {path: "/shop", name: 'shop', component: SHopVue},
    {path: "/contact", name: 'contact', component: ContactVue},
    {path: "/shop/:id", component: productDetailVue}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router