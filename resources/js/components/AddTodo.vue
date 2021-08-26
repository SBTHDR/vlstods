<template>
    <div>
        <div class="bg-indigo-500 flex items-center rounded-md">
            <input type="text" v-model="item.name" class="border-2 rounded-md border-indigo-400 w-full p-3">
            <font-awesome-icon class="text-3xl m-2" @click="addItem()" :class="[ item.name ? 'text-white' : 'text-indigo-800' ]" icon="plus-square"/>
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
    },
    methods: {
        addItem() {
            if (this.item.name === '') {
                return;
            }

            axios.post('api/item/store', {
                item: this.item
            })
            .then(res => {
                if (res.status === 201) {
                    this.item.name = ""
                    this.$emit('dataupdate')
                }
            })
            .catch (err => console.log(err))
        }
    }
}
</script>

<style>

</style>