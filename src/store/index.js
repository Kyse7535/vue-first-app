
import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            products: [],
            cart: [],
            categories: [],
            selectedCategory: ''
        }
    },

    getters: {
        getAllProducts(state) {
            return state.products
        },
        getAllCategories(state) {
            return state.categories
        },
        getProductByCategory(state) {
            return state.selectedCategory !== "" ? 
            state.products.filter(product => product.category === state.selectedCategory) :
            state.products
        },
        getProductById: state => id => {
            return state.products.find(product => product.id === id)
        },
        getCartLength(state) {
            return state.cart.reduce((prev, curr) => prev + curr.quantity, 0)
        },
        getCart(state) {
            return state.cart
        },
        getCartDetails(state, getters) {
            if (state.cart === []) {
                return []
            }
            return state.cart.map(item => {
                const product = getters.getProductById(item.id)
                return {...product, quantity: item.quantity}
            })
        }
    },

    mutations: {
        loadProducts(context, products) {
            context.products = products
        },
        loadCategories(context, categories) {
            context.categories = categories
        },
        setCategory(context, category) {
            context.selectedCategory = category
        },
        incrementCartItem(context, item) {
            const index = context.cart.findIndex(product => product.id === item.id)
            context.cart[index].quantity += item.quantity
        },
        addItem(context, item) {
            context.cart.push(item)
        },
        decrementProductQuantity(context, item) {
            const index = context.products.findIndex(product => product.id === item.id)
            context.products[index].quantity -= item.quantity
        }
    },

    actions: {
        async fetchProducts(context) {
            const response = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res => res.map(product => {return {...product, quantity: Math.floor(Math.random() * (10 - 0))}}))
            .then(res => res.sort((a, b) => a.title.localeCompare(b.title)))
            context.commit('loadProducts', response)
        },
        async fetchCategories(context) {
            const response = await fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            context.commit('loadCategories', response)
        },
        selectedCategoryActions(context, categoryId) {
            if (categoryId >= 0){
                const category = context.getters.getAllCategories[categoryId]
                context.commit('setCategory', category)
            }
            else {
                context.commit('setCategory', '')
            }
        },
        addToCart(context, item) {
            if(context.state.cart.find(product => product.id === item.id)) {
                context.commit('incrementCartItem', item)  
            }
            else {
                context.commit('addItem', item)
            }
            context.commit('decrementProductQuantity', item)
        }
    }
})

export default store