<template>
<!--    <i style="font-size: 50px; color: #cad1d8" :class="C"></i>-->
  <div style="color: rgb(2, 132, 199)" :class="'file-item-icon ' + icon"></div>
</template>

<script>
export default {
  name: "FileIcon",
  props: ['type', 'is_folder'],
  data(){
    return {
      icon: 'fas fa-file-excel',
    }
  },
  created() {
    switch(this.type) {
      case "xlsx": case "csv":
        console.log("Got gere")
        this.icon = 'fa fa-file-excel';
        break;

      case "pdf":
        this.icon = 'far fa-file-pdf'
        break;

      case "gif": case "png": case "jpg": case "jpeg":
        this.icon = 'far fa-file-image'
        break;

      case "doc": case "docx":
        this.icon = 'far fa-file-word'
        break;

      case "mp4":
        this.icon = 'far fa-file-video'
        break;

      case "txt":
        this.icon = 'far fa-file-code'
        break;

      case "py":
        this.icon = 'fab fa-python'
        break;

      default:
        this.icon = 'fa fa-file';
    }

    if (this.is_folder)
      this.icon = 'fa fa-folder';
  }
}
</script>

<style scoped>

</style>