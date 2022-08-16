<template>
<va-card>
    <va-image contain :src="image"/>
    <va-card-content>
        {{text}}
    </va-card-content>
</va-card>
</template>

<script>
export default {
    props:{
        image: "",
        text: ""
    },
}
</script>

<style>

</style>