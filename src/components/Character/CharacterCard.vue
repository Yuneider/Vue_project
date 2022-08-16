<template>
<va-card 
    @click="$refs.modal.show()" 
    stripe :stripe-color="data[`${status}`]">
    <va-image
    :src="image"
    />
    <va-card-title>{{name}}</va-card-title>
    <va-modal 
    ref="modal" 
    stateful 
    hide-default-actions
    >
        <template #content="">
            <va-card-content>
                Gender: {{gender}} 
            </va-card-content>
            <va-card-content>
                Location: {{location}} 
            </va-card-content>
            <va-card-content>
                <va-badge dot :color="data[`${status}`]">
                    Status: {{status}}
                </va-badge> 
            </va-card-content>
            <va-card-content>
                Origin: {{origin}} 
            </va-card-content>
        </template>
    </va-modal>
</va-card>
</template>

<script>
export default {
    data(){
        return{
            data:{Alive: "success", Dead: "danger", unknown: "warning"},
        }
    },
    methods:{
        
    },
    props:{
        id: "",
        name: "",
        specie: "",
        image: "",
        gender: "",
        status: "",
        location: "",
        origin: "",
    },
}
</script>

<style scoped>
</style>