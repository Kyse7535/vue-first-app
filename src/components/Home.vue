<template>
<div id="part-1"><h1>Home</h1></div>
<div id="part-2">
    <h1>FLORA ROSE</h1>
    <h2>FLEURISTE A CALAIS</h2>
</div>

<div id="part-3">
    <h2>UNE PRATIQUE ECO-RESPONSABLE DEPUIS 2008</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure excepturi debitis officiis laudantium perferendis doloremque
         dicta aspernatur exercitationem dolores labore voluptatem reprehenderit voluptates, ad laborum maiores et, mollitia dolor eum?
    </p>
</div>
<div id="services">
    <h2>NOS SERVICES</h2>
    <ul>
        <li v-for="(service, index) in services" :key="index">
        <img :src="service.image" :alt="service.nom"/>
        <h3>{{service.nom}}</h3>

        <p>{{service.description}}</p>
        </li>
    </ul>
</div>
</template>
<script>

export default {
    name: "home-page",
    data() {
        return {
            services: [
        {nom: 'mariage',
        image: 'couple.jpg',
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure excepturi debitis officiis laudantium perferendis ?"},
         {nom: 'livraison',
         image: 'bouquet.jpg',
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure excepturi debitis officiis laudantium perferendis ?"},
         {nom: 'evenements',
         image: 'blue-flower.jpg',
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure excepturi debitis officiis laudantium perferendis ?"}
    ]
        }
    }
}
</script>
<style>
#part-1 h1 {
    color: #ff2d59;
    padding: 10px 15px;
}

#part-2 {
    background: url('../../public/flower.jpg') center no-repeat;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#part-2 h1 {
    font-size: 56px;
    padding: 15px 0;
}
#part-2 h2{
    color: #ff2d59;
}

#part-3 {
    background-color: rgb(255, 121, 146);
    color: #fff;
    padding: 15px;
    text-align: center;
    line-height: 1.3;
}

#part-3 h2 {
    font-size: 32px;
    letter-spacing: 3px;
    padding: 5px 15px;
    
}

#services {
    text-align: center;
    padding: 15px;
    color: #ff2d59;
}
#services h2 {
    font-size: 32px;
    letter-spacing: 3px;
}

#services li {
    list-style: none;
    color: #010101;
    margin: 15px 0;
    font-size: 14px;
}

#services ul {
    padding: 5px 0;
}

#services h3 {
    font-size: 20px;
    text-transform: uppercase;
}

#services img {
    width: 75%;
    height: auto;
}

#services h3, #services p {
    color: #7e7e7e;
}

@media (min-width: 768px) {
    #services ul {
        display: flex;
    }

    #part-3 h2, #part-3 p{
        width: 40%;
        margin: 0 auto;
    }
}
</style>