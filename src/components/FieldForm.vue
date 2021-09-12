<template>
    <div class="container-field">
        <label class="labe-field" for="{{textLabel}}">{{textLabel}}</label>
        <input :value = "value" @input="$emit('input', $event.target.value)" class="input-field" type="text" :placeholder="textInt">
    </div>
    
</template>
<script>

export default {
    props: {
    textLabel:String,
    textInt:String,
    value:String
    
},
    setup() {
    },
}
</script>
<style scoped>
.container-field{
    display: block;
    width: 100%;
    margin-bottom: 15px;
}

.labe-field{
    color: var(--color-texto);
    font-size: 1.0rem;
    font-family: var(--font-secondary);
    margin-bottom: 5px;
}
.input-field{
    display: block;
    background-color: var(--color-secondary);
    width: 95%;
    height: 25px;
    padding: 2px;
    padding-left: 10px;
    border-radius: .5em;
    text-align: left; 
    border:none;
    color: var(--color-primary);
    font-size: 1.0rem;
}

.input-field::placeholder{
    color: var(--color-texto);
    font-size: .8rem;
    font-family: 'Poppins';
    font-weight:100
}

</style>
