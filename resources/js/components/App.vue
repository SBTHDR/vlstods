<template>
    <div class="container mx-auto">
       <header class="text-center bg-indigo-500 rounded-md mb-2">
           <h1 class="text-2xl font-bold text-white p-3">Todos</h1>
       </header>
       <div class="mb-2">
           <AddTodo />
       </div>
       <div>
           <Todos />
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
    }
}
</script>

<style>

</style>