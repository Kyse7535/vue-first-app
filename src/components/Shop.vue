<template>
<div id="part-1-shop">
    <h2>LIVRAISON GRATUITE POUR TOUTE COMMANDE DE 30€ ET PLUS</h2>
</div>
<div id="part-2-shop">
    <CategorieList />
    <div id="products-list">
       
        <ProductList :titre="nom" :sortId="sort" />
    </div>
</div>
</template>
<script>

import ProductList from "./ProductList.vue";
import CategorieList from "./CategorieList.vue";
export default {
    name: 'shop-vue',
    components: {
    ProductList,
    CategorieList,
},
    data() {
        return {
            nom: '',
            sort: 1,
           
        }
    },
    computed: {
        nomIsEmpty() {
            return this.nom === ''
        }
    },
    methods: {
        deleteNom() {
            this.nom = ''
        }, 
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