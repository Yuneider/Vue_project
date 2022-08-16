<template>
<div>
    <ChapterFilter @filter="searchData"/>
    <ChaptersTable
        :data=chapters
    />
    <div class="paginationContainer">
        <va-pagination
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
import ChaptersTable from '@/components/Chapter/ChaptersTable.vue';
import ChapterFilter from '@/components/Chapter/ChapterFilter.vue';
export default {
    data() {
        return {
            chapters: [],
            info: "",
            page: 1,
            filters:{
                name:"",
                episode:""
            },
        };
    },
    methods: {
        getData() {
            const parameters = new URLSearchParams;
            parameters.append("name",this.filters.name);
            parameters.append("episode",this.filters.episode);
            parameters.append("page",this.page);
            this.axios({
                method: "get",
                url: "https://rickandmortyapi.com/api/episode/",
                params: parameters
            }).then((response) => {
                this.chapters = response.data.results;
                this.info = response.data.info;
            });
        },
        searchData(data){
            this.filters.name = data.name;
            this.filters.episode = data.episode;
            this.getData();            
        }
    },
    mounted() {
        this.getData();
    },
    components: { ChaptersTable, ChapterFilter }
}
</script>

<style>

</style>