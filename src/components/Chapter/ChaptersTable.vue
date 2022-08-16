<template>
<div class="va-table-responsive paginationContainer">
    <table class="va-table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Code</th>
            <th>Characters</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(chapter, index) in data" :key="index">
            <td>{{chapter.id}}</td>
            <td>{{chapter.name}}</td>
            <td>{{chapter.episode}}</td>
            <td>
                <va-dropdown>
                    <template #anchor>
                    <va-button flat color="#219AAF">
                        View Characters
                    </va-button>
                    </template>
                    <CharacterList v-for="(character, index) in chapter.characters" :key="index"
                        :link=character
                    />
                </va-dropdown>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import CharacterList from '@/components/Character/CharacterList.vue';
export default {
    props:{
        data: "",
    },
    components: { CharacterList }
}
</script>

<style scoped>
</style>