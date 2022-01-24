<template>
  <div class="bootstrap-iso">
    <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white"
        style="width: 60%"
    >
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h4 class="uppercase text-blueGray-700 mb-1 font-semibold">
              Add New File
            </h4>
          </div>
        </div>
      </div>
    </div>

    <SelectFiles></SelectFiles>

  </div>
</template>

<script>

import axios from "axios";
import API_HOME from "@/variables/apiHome";
import SelectFiles from "@/components/Files/SelectFiles";

export default {
  name: "AddFile",
  components: {
    SelectFiles,
  },
  data(){
    return{
      attachments: [],
      // files: '',
      files: [],
      file: ' ',
    }
  },
  methods: {
    submitMultipleFiles(){
      /*
        Initialize the form data
      */
      let formData = new FormData();

      /*
        Iteate over any file sent over appending the files
        to the form data.
      */
      for( var i = 0; i < this.files.length; i++ ){
        let file = this.files[i];

        formData.append('files[' + i + ']', file);
      }

      /*
        Make the request to the POST /multiple-files URL
      */
      axios.post( API_HOME + 'api/files',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
          )
          .then(response => {
            if (response) {
              console.log(response.data)
            } else {
              this.error = response.data.message
            }
          })
          .catch(function (error) {
            console.error(error);
          });
    },

    addFiles(){
      document.getElementById('select-files').click();
    },

    handleFilesUpload( event ){
      let uploadedFiles = event.target.files;

      /*
        Adds the uploaded file to the files array
      */
      for( var i = 0; i < uploadedFiles.length; i++ ){
        this.files.push( uploadedFiles[i] );
      }
    },

    handleFileUploads_old( event ){
      this.files = event.target.files;
    },
    handleFileUpload( event ){
      this.file = event.target.files[0];
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);
      axios.post( API_HOME + 'api/files',
          formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',

              }
              }
          )
          .then(response => {
              if (response) {
                console.log(response.data)
              } else {
                this.error = response.data.message
              }
            })
          .catch(function (error) {
            console.error(error);
          });
    },

    setFiles(e) {
      let selectedFiles = e.target.files;

      if(!selectedFiles.length) {
        return false;
      }

      for (let i = 0; i < this.$refs.files.files.length; i++){
        this.attachments.push(selectedFiles[i]);
      }
    },
    submitFiles() {
      console.log("Submiting files");
      const config = { headers: { "Content-Type": undefined } };

      this.files.append('files[]', this.attachments)

      axios.post(API_HOME + 'api/files', {'file': this.file}, config)
          .then(response => {
            if (response) {
              console.log(response.data)
            } else {
              this.error = response.data.message
            }
          })
          .catch(function (error) {
            console.error(error);
          });
    }
  }

}
</script>

<style scoped>
  input[type="file"]{
    position: absolute;
    top: -500px;
  }
</style>