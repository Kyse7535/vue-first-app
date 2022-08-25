<template>
<div class="panier" v-if="cartIsEmpty">Votre panier est vide</div>
<ul id="cart-list" class="panier" v-else>
    <li v-for="product in cart" :key="product.id">
        <router-link :to="{name: 'productDetail', id: product.id}">
        <img :src="product.image" />
        </router-link>
        <div>
            <p>{{product.title}}</p>
            <p class="qtity">{{product.quantity}}</p>
        </div>
        <div>
            <p class="prix">Prix unitaire</p>
            <p class="prix">{{product.price}}</p>
        </div>
    </li>
</ul>
</template>
<script>
export default {
    name: 'cart-detail',
    data() {
        return {
            cart: []
        }
    },
    created() {
        this.cart = this.$store.getters.getCartDetails
    },
    computed: {
        cartIsEmpty() {
            return this.cart.length === 0
        }
    }
}

</script>
<style>
img {
    width: 40px;
    height: auto;
}

.panier {
    position: absolute;
    top: 100%;
    right: 7%;
    border: 1px solid #000;
    width: 350px;
    text-align: center;
    padding: 8px 10px;
}
</style>