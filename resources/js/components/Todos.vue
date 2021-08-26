<template>
  <div>
    <div class="bg-indigo-500" v-for="item in items" :key="item.id">
    <TodoItem :item="item" v-on:dataupdate="$emit('dataupdate')"/>
  </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  props: ['items'],
  components: {
    TodoItem
  }
}
</script>

<style>

</style>