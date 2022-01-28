<style>
input[type="file"]{
  position: absolute;
  top: -500000px;
  display: none;
}


span.remove-file{
  color: red;
  cursor: pointer;
  float: right;
}
</style>

<template>
  <div class="bootstrap-iso">
    <div class="container">

      <div class="card" style="width: 100%;">
        <h5 class="m-2">Upload Files</h5>
        <div class="card-body">
          <hr>
          <div class="large-12 medium-12 small-12 cell">
              <label>
                <input class="form-control" type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
              </label>
          </div>

            <table class="table table-hover table-sm table-striped" style="margin-top: -30px">
              <tr v-bind:key="key" v-for="(file, key) in files">
                <td>{{ file.name }}</td>
                <td><span class="remove-file" v-on:click="removeFile( key )">Remove</span></td>
              </tr>
            </table>
          <hr>
            <div class="d-flex flex-row ">
              <button class="btn btn-primary btn-sm" style="margin-right: 20px" v-on:click="addFiles()">Add Files</button>
              <button class="btn btn-success btn-sm" v-on:click="submitFiles()">Submit</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import API_HOME from "@/variables/apiHome";
import Swal from "sweetalert2";

export default {
  /*
    Defines the data used by the component
  */
  data(){
    return {
      files: []
    }
  },

  /*
    Defines the method used by the component
  */
  methods: {
    /*
      Adds a file
    */
    addFiles(){
      this.$refs.files.click();
    },

    /*
      Submits files to the server
    */
    submitFiles(){
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
        Make the request to the POST /select-files URL
      */
      axios.post( API_HOME + 'api/files',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
            }
          }
      )
      .then(response => {
        if (response){
          // alert("File saved successfully!");
          Swal.fire({
            icon: 'success',
            title: 'File saved successfully!',
            showConfirmButton: false,
            timer: 1500
          })
        }
        this.files = [];
      })
      .catch(function (error) {
        console.error(error);
      });
    },

    /*
      Handles the uploading of files
    */
    handleFilesUpload(){
      let uploadedFiles = this.$refs.files.files;

      /*
        Adds the uploaded file to the files array
      */
      for( var i = 0; i < uploadedFiles.length; i++ ){
        this.files.push( uploadedFiles[i] );
      }
    },

    /*
      Removes a select file the user has uploaded
    */
    removeFile( key ){
      this.files.splice( key, 1 );
    }
  }
}
</script>
