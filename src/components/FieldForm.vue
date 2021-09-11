<template>
    <label for="{{textLabel}}">{{textLabel}}</label>
    <input type="text">
</template>
<script>

export default{
    props: {
    textLabel:String,
    textInt:String
},
    setup() {
        
    },
}
</script>
