<template>
    <p class="title">{{titleText}}</p>
</template>

<script>
    

export default ({
    props:{
        titleText:String
    },
    setup() {
    },
})
</script>
<style scoped>
    .title{
        color: var(--color-primary);
        font-family: var(--font-primary);
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 5px;

    }
</style>