<template>
<form @submit.prevent="onSubmit">
            <select name="sort" v-model.number="sort">
                <option value="1">Titre: de A à Z</option>
                <option value="2">Titre: de Z à A</option>
                <option value="3">Prix: Ascendant</option>
                <option value="4">Prix: descendant</option>
            </select>
            <div id="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
<input type="text" name="nom" v-model="nom" required />
<svg xmlns="http://www.w3.org/2000/svg" id="close" @click="deleteNom" v-if="!nomIsEmpty" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>

            </div>
            <input type="submit"  @click="search" />
        </form>
<ul id="product-list">
            <li v-for="(product, index) in products" :key="index">
            <img :src="product.image" :alt="product.title" />
            <p class="title">{{product.title}}</p>
            <p class="price">{{product.price}}€</p>
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
        category: {
            type: String,
            required: true
        },
        titre: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            products: [],
            sort: 1,
            selectedCategory: '',
            nom: ''
        }
    },
    created() {
        this.products = this.$store.getters.getAllProducts
        this.sort = this.sortId
        this.selectedCategory = this.category
        this.nom = this.titre
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
    },
    search() {
        this.products = this.$store.getters.getAllProducts.filter(product => product.title.toLowerCase().includes(this.nom))
    },
},
watch: {
    category() {
        this.$store.getters.getAllProducts.filter(product => product.category === this.selectedCategory)
        this.sortProducts()
    },
    sort() {
        this.sortProducts()
    }
}
}
</script>
<style></style>