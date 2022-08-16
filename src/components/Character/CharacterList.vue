<template>
<va-dropdown-content>
    {{character.name}}    
</va-dropdown-content>
</template>

<script>
export default {
    data() {
        return {
            character: [],
        };
    },
    methods: {
        getData() {
            this.axios.get(this.link).then((response) => {
                this.character = response.data;
            });
        },
    },
    mounted() {
        this.getData();
    },
    props:{
        link: "",
    },
}
</script>

<style scoped>
</style>