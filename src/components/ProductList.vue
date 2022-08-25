<template>
<ul id="product-list">
            <li v-for="(product, index) in products" :key="index" class="categorie-item">
            <router-link :to="`/shop/${product.id}`"><img :src="product.image" :alt="product.title" />
            <p class="title">{{product.title}}</p>
            <p class="price">{{product.price}}€</p></router-link>
            </li>
        </ul>
</template>
<script>

export default {
    props: {
        sortId: {
            type: Number,
            required: true
        },
        titre: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            sort: 1,
        }
    },
    created() {
        this.$store.dispatch('fetchProducts')
        this.sort = this.sortId
    },
    computed: {
        products() {
            return this.$store.getters.getProductByCategory
        },
        nom() {
            return this.titre
        }
    },
    methods: {
        sortProducts() {
        switch(this.sort) {
            case 1:
                this.products.sort((a, b) => a.title.localeCompare(b.title))
                break
            case 2:
                this.products.sort((a, b) => {
                    if ( a.title < b.title ){
                        return 1;
                    }
                    if ( a.title > b.title ){
                        return -1;
                    }
                    return 0;
                })
                break
            case 3:
                this.products.sort((a, b) => {
                    if ( a.price < b.price ){
                        return -1;
                    }
                    if ( a.price > b.price ){
                        return 1;
                    }
                    return 0;
                }) 
                break
            case 4:
                this.products.sort((a, b) => {
                    if ( a.price < b.price ){
                        return 1;
                    }
                    if ( a.price > b.price ){
                        return -1;
                    }
                    return 0;
                }) 
                break
        }
    }
},
watch: {
    sort() {
        this.sortProducts()
    }
}
}
</script>
<style>
a {
    text-decoration: none;
    color: #000;
}</style>