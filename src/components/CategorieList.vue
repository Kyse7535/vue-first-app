<template>
<div id="categories">
        <ul>
            <li>Categories</li>
            <li @click="setCategory(-1)" class="categorie-item">Tous</li>
            <li v-for="(categorie, index) in categories" :key="index" class="categorie-item"
            @click="setCategory(index)">
            {{categorie}}</li>
             
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            categories: [],
             selectedCategory: ''
        }
    },
    created() {
        this.initCategory()
    },
    methods: {
        initCategory() {
            this.$store.dispatch('fetchCategories')
            this.categories = this.$store.getters.getAllCategories
        },
        setCategory(categoryId) {
            this.$store.dispatch('selectedCategoryActions', categoryId)
        }
    }
}
</script>
<style>
#categories {
    border-right: 1px solid #000;
    width: 20%;
}

#categories li{
    list-style: none;
}

.categorie-item {
    cursor: pointer;
}</style>