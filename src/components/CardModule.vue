<template>
    <a class="card-model">
        <div class="container-icon" onclick="ViewForm('new-company')">
            <svg class="icon" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512"
                width="512" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        d="m1 135v362c0 8.284 6.716 15 15 15h22.5v-77c0-8.284 6.716-15 15-15s15 6.716 15 15v77h37.5v-392h-90c-8.284 0-15 6.716-15 15zm52.5 45c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 60c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 60c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 60c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15z" />
                    <path
                        d="m496 120h-90v392h37.5v-77c0-8.284 6.716-15 15-15s15 6.716 15 15v77h22.5c8.284 0 15-6.716 15-15v-362c0-8.284-6.716-15-15-15zm-37.5 270c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z" />
                    <path d="m211 450h30v62h-30z" />
                    <path d="m271 450h30v62h-30z" />
                    <path
                        d="m361 0h-210c-8.284 0-15 6.716-15 15v497h45v-77c0-8.284 6.716-15 15-15h120c8.284 0 15 6.716 15 15v77h45v-497c0-8.284-6.716-15-15-15zm-165 390c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm60 300c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm60 300c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15zm0-60c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z" />
                </g>
            </svg>
        </div>
        <div class="container-description">
            <p class="title-card">Empresas</p>
            <p class="description">
                Gestiona a tus clientes
            </p>
        </div>
    </a>
</template>
<script>


export default({
    props:{

    },
    setup() {
        return 
    },
})
</script>

<style scoped>


.card-model{
    display: flex;
    width: 20%;
    justify-content: space-between;
    background-color: #C4AFFF;
    height: 80px;
    padding: 20px;
    border-radius: .9rem;
    cursor: pointer;
    margin: 0px 5px 0px 5px;
}
.card-model:hover{
    transition: all .4s ease-in-out;
    box-shadow:  0px 0px 15px 5px #0381f079;
}

.container-icon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 100%;
    background-color: #D4C4FF;
    border-radius: .9rem;

} 

.container-icon .icon{
    fill: white;
    width: 60%;
    height: 60%;
}

.container-description {
    display: block;
    width:45%;
}

.container-description .title-card{
    font-size: 1.4rem;
    font-family: var(--font-primary);
    color: white;

}

.container-description .description{
    font-size: 1.0rem;
    font-family: var(--font-secondary);
    color: white;
    text-align: left;
}


</style>