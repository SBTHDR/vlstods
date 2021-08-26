<template>
    <div>
        <div class="bg-indigo-500 flex items-center rounded-md">
            <input type="text" v-model="item.name" class="border-2 rounded-md border-indigo-400 w-full p-3">
            <font-awesome-icon class="text-3xl m-2" icon="plus-square"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item: {
                name: ""
            }
        }
    }
}
</script>

<style>

</style>