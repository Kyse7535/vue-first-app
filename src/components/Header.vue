<template>
<div id="mobile">
    <svg v-if="!menuIsOpened" @click="open" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
    <svg v-else @click="close" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
    <h2>Fleuriste</h2>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
</svg>
</div>
<div id="desktop">
    <span>FLORA ROSE</span>
    <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="about">A propos</router-link></li>
        <li><router-link to="shop">Boutique</router-link></li>
        <li><router-link to="contact">Contact</router-link></li>
    </ul>
     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
</svg>
</div>
<div id="mobile-dropdown" v-if="menuIsOpened">
    <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="about">A propos</router-link></li>
        <li><router-link to="shop">Boutique</router-link></li>
        <li><router-link to="contact">Contact</router-link></li>
    </ul>
</div>
</template>
<script>
export default {
    name: 'header-page',
    data() {
        return {
            menuIsOpened: false
        }
    },
    methods: {
        open() {
            this.menuIsOpened = true
        },
        close() {
            this.menuIsOpened = false
        }
    }
}
</script>
<style>
#mobile  {
    color: #fff;
    background-color: #000;
    padding: 15px;
    display: flex;
    justify-content: space-between;

}

#mobile h2 {
    margin: 0;

}

#mobile-dropdown {
    background-color: #000;
    color: #fff;
    padding: 15px;
}

#mobile-dropdown ul {
    margin: 0;
}

#mobile-dropdown li {
    list-style: none;
    font-size: 18px;
}

#mobile-dropdown a {
    display: inline-block;
    height: 100%;
    padding: 5px;
    text-decoration: underline;
    color: #fff;
}

#desktop {
    display: none;
}

@media(min-width: 768px) {
    #mobile {
        display: none;
    }
    #desktop {
        display: flex;
        justify-content: space-between;
        padding: 20px ;
    }

    #desktop ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        margin: 0;
    }

    #desktop svg {

        align-self: center;
    }

    #desktop li {
        list-style: none;

    }

    #desktop li a {
        display: inline-block;
        text-decoration: none;
        height: 100%;
    }

    #desktop span {
        font-size: 32px;

    }
}
</style>