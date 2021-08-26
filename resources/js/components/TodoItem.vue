<template>
  <div>
      <div class="bg-indigo-200 p-3 mb-2 flex justify-between items-center">
        <div>
            <input type="checkbox" @change="updateData()" v-model="item.completed">
            <span :class="[ item.completed ? 'line-through' : '' ]" class="text-lg">{{ item.name }}</span>
        </div>
        <button @click="removeData()">
            <font-awesome-icon class="text-3xl text-red-400" icon="trash"/>
        </button>
      </div>
  </div>
</template>

<script>
export default {
    props: ['item'],
    methods: {
        updateData() {
            axios.put('api/item/' + this.item.id, {
                item: this.item
            })
            .then(res => {
                if (res.status === 200) {
                    this.$emit('dataupdate')
                }
            })
            .catch(err => console.log(err))
        }
        
    }
}
</script>

<style>

</style>