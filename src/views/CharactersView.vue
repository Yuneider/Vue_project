<template>
<div>
    <CharacterFilter @filter="searchData"/>
    <div class="grid" >
        <CharacterCard v-for="(character, index) in characters" :key="index"
            :id=character.id
            :name=character.name
            :specie=character.species
            :image=character.image
            :gender=character.gender
            :status=character.status
            :location=character.location.name
            :origin=character.origin.name 
        />
    </div>
    <div class="paginationContainer">
        <va-pagination
            :visible-pages="7"
            color="#83BE1F"
            v-model="page"
            :pages="info.pages"
            :flat=true 
            boundary-numbers
            @click="getData()"
        />
    </div>
</div>
</template>

<script>
import CharacterCard from '@/components/Character/CharacterCard.vue';
import CharacterFilter from '@/components/Character/CharacterFilter.vue';
export default {
    data() {
        return {
            characters: [],
            info: "",
            page: 1,
            filters:{
                name:"",
                status:"",
                species:"",
                gender:""
            },
        };
    },
    methods: {
        getData() {
            const parameters = new URLSearchParams;
            parameters.append("name",this.filters.name);
            parameters.append("status",this.filters.status);
            parameters.append("species",this.filters.species);
            parameters.append("gender",this.filters.gender);
            parameters.append("page",this.page);
            this.axios({
                method: "get",
                url: "https://rickandmortyapi.com/api/character/",
                params: parameters
            }).then((response) => {
                this.characters = response.data.results;
                this.info = response.data.info;
                console.log(response.data);
            });
        },
        searchData(data){
            this.filters.name = data.name;
            this.filters.status = data.status;
            this.filters.species = data.species;
            this.filters.gender = data.gender;
            this.getData();            
        }
    },
    mounted() {
        this.getData();
    },
    components: { CharacterCard, CharacterFilter }
}
</script>

<style scoped>
.characters{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%,1fr));
    gap: 3rem;

    margin: 3rem;
}
</style>
