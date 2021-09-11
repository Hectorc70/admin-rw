<template>
    <button class="button-submit" @click="functionButton">{{textButton}}</button>
</template>
<script>


export default({
    props:{
        textButton:{
            type:String,
            required:true,
        },
        functionButton:{
            required: false,
        }
    },
    setup() {
        
    },
})
</script>

<style scoped>
    .button-submit{
    display: block;
    text-align: center;
    width: 100%;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    color: white;
    background-color:  var(--color-primary);
    border-radius: .5em ; 
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
}

.button-submit:hover{
    background-color: var(--color-resalte);
    box-shadow: 0px 3px 10px 0px var(--color-sombra-cards);
}
</style>