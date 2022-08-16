<template> 
<div>
    <LocationFilter @filter="searchData" />
    <div class="grid aux">
        <LocationCard v-for="(location, index) in locations" :key="index"
            :id=location.id
            :name=location.name
            :type=location.type
            :dimension=location.dimension
            :residents=location.residents
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
import LocationCard from '@/components/Location/LocationCard.vue';
import LocationFilter from '@/components/Location/LocationFilter.vue';
export default {
    data() {
        return {
            locations: [],
            info: "",
            page: 1,
            filters: {
                name: "",
                type: "",
                dimension: ""
            },
        };
    },
    methods: {
        getData(data) {
            const parameters = new URLSearchParams;
            parameters.append("name", this.filters.name);
            parameters.append("type", this.filters.type);
            parameters.append("dimension", this.filters.dimension);
            parameters.append("page", this.page);
            this.axios({
                method: "get",
                url: "https://rickandmortyapi.com/api/location/",
                params: parameters
            }).then((response) => {
                this.locations = response.data.results;
                this.info = response.data.info;
            });
        },
        searchData(data) {
            if(data.name !== null && data.name !== ''){
                this.filters.name = data.name;
            }
            if(data.type !== null && data.type !== ''){
                this.filters.type = data.type;
            }
            if(data.dimension !== null && data.dimension !==''){
                this.filters.dimension = data.dimension;
            }
            this.getData();
        }
    },
    mounted() {
        this.getData();
    },
    components: { LocationCard, LocationFilter }
}
</script>

<style scoped>
.aux{
    justify-items: center;
    align-items: center;
}
</style>