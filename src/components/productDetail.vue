<template>
<p id="title"><router-link v-if="product.title" :to="{name: 'shop'}">Boutique</router-link> > {{product.title}}</p>

<div id="product" v-if="product.title">
    <img :src="product.image" class="contain" :alt="product.title" />
    <div id="details">
        <h3>{{product.title}}</h3>
        <p class="titre">{{product.price}}$</p>
        <form @submit.prevent="onSubmit">
            <label>Quantite</label><br>
            <input type="number" min="1" v-model.number="quantity" name="quantity" class="quantity" />
            <p v-if="inStock" class="inStock">En stock</p>
            <p v-else>Stock epuise</p>
            <input type="submit" :disabled="!inStock" @click="addToCart" 
             class="submit-btn" v-bind:class="{active: !inStock}" value="AJOUTER AU PANIER" />
        </form>
    </div>
</div>
<div id="description">
    <h3>Description</h3>
    <p>{{product.description}}</p>
</div>
</template>
<script>
export default {
    data() {
        return {
            product:  {
                    id: null,
                    title:'',
                    price:'',
                    category:'',
                    description:'',
                    image:'',
                    quantity: null
                },
            quantity: 1
        }
    },
    created() {
        const productId = parseInt(this.$route.params.id)
        this.product = this.$store.getters.getProductById(productId)
    },
    computed: {
        inStock() {
            return this.product.quantity - this.quantity >= 0
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', {id: this.product.id, quantity: this.quantity})
        }
    }
}
</script>
<style>

p {
    margin: 20px 0;
}
a{
    color: #ff2d59;
}

.contain {
    width: 400px;
    height: auto;
}
#product {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
}
#details {
    padding: 40px;
}

.quantity {
    width: 50px;
    height: 30px;
}

.inStock {
    color: #07a907;
}

.submit-btn {
    color: #fff;
    background-color: #ff2d59;
    border: none;
    width: 60%;
    height: 50px;
}

#description {
    width: 75%;
    padding: 20px 40px;
}

.active:disabled {
    background-color: #ccc;
}
</style>