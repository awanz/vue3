<template>
    <button class="btn btn-primary">
        <span class="mr-2">
            <slot name="icon"></slot>
        </span>
        <span>
            <slot>
                Text Here
            </slot>
        </span>
    </button>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>