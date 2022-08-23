<template>
<div id="part-1-shop">
    <h2>LIVRAISON GRATUITE POUR TOUTE COMMANDE DE 30€ ET PLUS</h2>
</div>
<div id="part-2-shop">
    <div id="categories">
        <ul>
            <li>Categories</li>
            <li @click="setCategory(-1)">Tous</li>
            <li v-for="(categorie, index) in categories" :key="index" class="categorie-item"
            @click="setCategory(index)">
            {{categorie}}</li>
            
        </ul>
    </div>
    <div id="products-list">
        <ProductList :category="selectedCategory" :titre="nom" :sortId="sort" />
    </div>
</div>
</template>
<script>
import ProductList from "./ProductList.vue";

export default {
    name: 'shop-vue',
    components: {
    ProductList
},
    data() {
        return {
            categories: [],
            nom: '',
            sort: 1,
            selectedCategory: ''
        }
    },
     created() {
        this.initData()
    },
    computed: {
        nomIsEmpty() {
            return this.nom === ''
        }
    },
    methods: {
        initData() {
            this.$store.dispatch('fetchCategories')
            this.$store.dispatch('fetchProducts')
            this.categories = this.$store.getters.getAllCategories

        },
        deleteNom() {
            this.nom = ''

        },
       
        setCategory(categoryId) {
            if (categoryId < 0) {
                this.products = this.$store.getters.getAllProducts
            }
            else {
                this.selectedCategory = this.categories[categoryId]
            }
            
        }
    }
}
</script>

<style>
#part-1-shop {
    height: 200px;
    background: url('../../public/rose-.jpg') center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

}

#part-2-shop {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0 auto;

}

#categories {
    border-right: 1px solid #000;
    width: 20%;
}

#categories li{
    list-style: none;
}

.categorie-item {
    cursor: pointer;
}

#search input {
    border: none;
    outline: none;
    margin-left: 5px;
    width: 85%;
}

#search input[type="submit"] {
    display: inline-block;
}

#search {
    border: 1px solid #000;
    padding: 2px;
    display: flex;
    width: 250px;
}


#products-list  {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 75%;
}

#products-list img {
    width: 100%;
    height: auto;
}

#products-list li {
    display: inline-block;
    width: 30%;
    word-break: break-all;
}
</style>