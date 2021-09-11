<template>
    <div class="container-field">
        <label class="labe-field" for="{{textLabel}}">{{textLabel}}</label>
        <input class="input-field" type="text">
    </div>
    
</template>
<script>

export default {
    props: {
    textLabel:String,
    textInt:String
},
    setup() {
        
    },
}
</script>
<style scoped>
.container-field{
    display: block;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

.labe-field{
    color: var(--color-texto);
    font-size: 1.0rem;
    font-family: var(--font-secondary);
}
.input-field{
    display: block;
    background-color: #F7F7F7;
    width: 95%;
    height: 25px;
    padding: 2px;
    padding-left: 10px;
    border-radius: .5em;
    text-align: left; 
    border:none;
    color: #777777;
    font-size: 1.0rem;
    font-weight: bold;
}

</style>
