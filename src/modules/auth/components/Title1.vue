<template>
    <p class="title">{{TitleText}}</p>
</template>

<script>
    

export default ({
    props:{
        TitleText:String
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