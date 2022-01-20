<template>
  <router-link to="/files/add">
    <button class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
      <i class="fas fa-plus-circle mr-2"></i> Add New
    </button>
  </router-link>
</template>

<script>
export default {
  name: "AddButton"
}
</script>

<style scoped>

</style>