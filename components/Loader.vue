<template>
    <div v-if="!show" id="p1" class="loaders">
        <vue-loaders name="line-scale" color="orange" scale="1"></vue-loaders>        
    </div>
</template>


<script>

export default {
    props: ['show'],
};
</script>

<style lang="scss" scoped>
    .loaders{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index:1000;
    }
</style>