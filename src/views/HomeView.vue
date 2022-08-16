<template>
<div class="grid">
    <HomeCard v-for="(image, index) in images" :key="index"
    :image="image.url"
    :text="image.text"/>
</div>
</template>

<script>
import HomeCard from '@/components/home/HomeCard.vue';
import {ref} from 'vue'

export default {
    data(){
        return{
        }
    },
    setup(){
        const images = ref([
            {url: require('@/assets/images/html.png'), text: 'Html'},
            {url: require('@/assets/images/css.png'), text: 'Css'},
            {url: require('@/assets/images/js.png'), text: 'JavaScript'},
            {url: require('@/assets/images/vue.png'), text: 'Vue'},
            {url: require('@/assets/images/vuestic.png'), text: 'Vuestic UI'},
            {url: require('@/assets/images/rickandmorty.png'), text: 'The Rick and Morty API'},
            {url: require('@/assets/images/netlify.png'), text: 'Netlify'},
            {url: require('@/assets/images/github.png'), text: 'GitHub'},
            {url: require('@/assets/images/ud.png'), text: 'Yuneider Parada cod:20191020058'},
        ])
        return {images}
    },
    components: { HomeCard }
}
</script>
