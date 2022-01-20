/* eslint-disable */

<template>
  <div>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
        style="width: 60%"
    >
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h3 class="uppercase text-blueGray-700 mb-1 text-xs font-semibold">
              Files Shared With Me
            </h3>
            <div class="flex flew-row justify-content-between mt-3">
              <div class="mr-2">
                <button class="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  <i class="fas fa-plus-circle mr-2"></i> Add New
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bootstrap-iso" style="min-height: 300px">
      <FileManager></FileManager>
    </div>
  </div>
</template>

<script>
import FileManager from "@/components/Files/FileManager";
export default {
  name: "Shared",
  components: {FileManager},
  created(){
    document.title = "Shared With Me"
  }
}
</script>

<style scoped>

</style>