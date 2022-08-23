
import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            products: [],
            cart: [],
            categories: []
        }
    },

    getters: {
        getAllProducts(state) {
            return state.products
        },
        getAllCategories(state) {
            return state.categories
        }
    },

    mutations: {
        loadProducts(context, products) {
            context.products = products
        },

        loadCategories(context, categories) {
            context.categories = categories
        }
    },

    actions: {
        async fetchProducts(context) {
            const response = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res => res.sort((a, b) => a.title.localeCompare(b.title)))
            context.commit('loadProducts', response)
        },
        async fetchCategories(context) {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            context.commit('loadCategories', response)
        }
    }
})

export default store