<template>
    <div class="container mx-auto">
       <header class="text-center bg-indigo-500 rounded-md mb-2">
           <h1 class="text-2xl font-bold text-white p-3">Todos</h1>
       </header>
       <div class="mb-2">
           <AddTodo />
       </div>
       <div>
           <Todos :items="items" v-on:dataupdate="getData()"/>
       </div>
    </div>
</template>

<script>
import AddTodo from './AddTodo.vue'
import Todos from './Todos.vue'

export default {
    components: {
        AddTodo,
        Todos
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        getData() {
            axios.get('api/items')
            .then(res => {
                this.items = res.data
            })
            .catch(err => console.log(err))
        }
    },
    created() {
        this.getData()
    }
}
</script>

<style>

</style>