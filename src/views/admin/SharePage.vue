<template>
  <div class="bootstrap-iso">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white" style="width: 60%">
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h4 class="uppercase text-blueGray-700 mb-1 font-semibold">
              Share File
            </h4>
            <h6><small class="text-secondary">{{ name }}</small></h6>
          </div>
        </div>
      </div>
    </div>

    <div class="bootstrap-iso" style="min-height: 300px">

      <div class="container">
        <div class="card">
          <div class="card-body">
            <h5>Share File</h5>
            <div class="d-flex flex-row">
              <p><label for="select">Select Recipient</label></p>
              <select v-model="recipient" name="select" id="select" class="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                <option v-bind:key="user.id" v-for="user in users" :value="user.id">{{ user.name }}</option>
              </select>
            </div>
            <div>
              <button class="btn btn-primary" @click="share()">Share</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import API_HOME from "@/variables/apiHome";

export default {
  name: "SharePage",
  data(){
    return {
      id: 0,
      name: "",
      users: [],
      recipient: 0,
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.getUsers();
  },
  methods: {
    share(){
      axios.post( API_HOME + 'api/files_share',
          {
            id: this.id,
            recipient: this.recipient
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
            }
          })
          .then(response => {
            // console.log(response);
            if (response.data == true){
              alert("File Shared successfully.")
            }
          })
          .catch(function (error) {
            console.error(error);
          });
    },
    getUsers(){
      axios.get(API_HOME +'api/users/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
        }
      })
      .then(response => {
        this.users = response.data;
      })
    }
  }
}
</script>

<style scoped>

</style>