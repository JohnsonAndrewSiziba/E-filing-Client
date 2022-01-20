<template>
  <div>
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
        style="width: 60%"
    >
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h3 class="uppercase text-blueGray-700 mb-1 font-semibold">
              My Files
            </h3>
            <div class="flex flew-row justify-content-between mt-3">
              <div class="mr-2">
                <AddButton></AddButton>
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
import AddFileModal from "@/components/Modals/AddFileModal";
import AddButton from "@/components/MiscComponents/AddButton";
export default {
  name: "dashboard-page",
  components: {
    AddButton,
    AddFileModal,
    FileManager,
  },
  data() {
    return {
      showModal: false
    }
  },
  created(){
    document.title = "My Files"
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    }
  }
};
</script>
