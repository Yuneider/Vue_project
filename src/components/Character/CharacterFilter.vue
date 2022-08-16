<template>
<div class="filter">
    <va-button flat  @click="showModal = !showModal">
        <va-icon name="filter_alt" color="#66BFB5" size="large"/>
    </va-button>
    <va-modal v-model="showModal" title="Overview">
        <template #content="">
            <va-card-content>
                <va-input
                    color="#83BE1F"
                    class="mb-4"
                    v-model="filters.name"
                    label="Name"
                    placeholder="Name"
                /> 
            </va-card-content>
            <va-card-content>
                <va-input
                    color="#83BE1F"
                    class="mb-4"
                    v-model="filters.status"
                    label="Status"
                    placeholder="Status"
                />
            </va-card-content>
            <va-card-content>
                <va-input
                    color="#83BE1F"
                    class="mb-4"
                    v-model="filters.specie"
                    label="Specie"
                    placeholder="Specie"
                />
            </va-card-content>
            <va-card-content>
                <va-input
                    color="#83BE1F"
                    class="mb-4"
                    v-model="filters.gender"
                    label="Gender"
                    placeholder="Gender"
                />
            </va-card-content>
            <va-card-content>
                <div class="center">
                    <va-button @click="sendResponse()" color="#66BFB5" :rounded="false" class="mr-4 mb-2">
                        <va-icon name="edit"/>
                    </va-button>
                </div>
            </va-card-content>
        </template>
    </va-modal>
</div>
</template>

<script>
export default {
    data(){
        return {
            showModal: false,
            filters:{
                name:"",
                status:"",
                species:"",
                gender:""
            },
        }
    },
    methods: {
        sendResponse(){
            this.$emit("filter",this.filters);
        }
    }
}
</script>

<style>

</style>