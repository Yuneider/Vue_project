<template>
<va-card>
    <va-card-title>{{name}}</va-card-title>
    <va-card-content>
        Type: {{type}}
    </va-card-content>
    <va-card-content>
        Dimension: {{dimension}} 
    </va-card-content>
    <va-card-content>
        <va-dropdown>
            <template #anchor>
                <va-button flat color="#219AAF">
                    View Residents
                </va-button>
            </template>
            <CharacterList v-for="(character, index) in residents" :key="index"
                        :link=character
            />
        </va-dropdown>
    </va-card-content>
</va-card>
</template>

<script>
import CharacterList from '@/components/Character/CharacterList.vue';
export default {
    data(){
        return{
        }
    },
    props:{
        id: "",
        name: "",
        type: "",
        dimension: "",
        residents: "",
    },
    components: { CharacterList }
}
</script>

<style scoped>
.va-card{
    padding: 1rem;
    width: 15vw;
    height: 15vw;
}

.va-card__title{
    text-align: center;
    justify-content: center;
    font-size: 1rem;
}
</style>