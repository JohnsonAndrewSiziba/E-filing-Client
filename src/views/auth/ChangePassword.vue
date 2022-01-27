<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Change Password
              </h6>
              <div class="bootstrap-iso">
                <div class="alert alert-danger" role="alert" v-if="error !== null" >
                  <p>An Error Occured</p>
                  <p>
                    <small>{{ error }}</small>
                  </p>
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form v-if="changed === false">

              <div class="relative w-full mb-3">
                <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                    v-model="old_password"
                    name="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Current Password"
                />
              </div>


              <div class="relative w-full mb-3">
                <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                  Create Password
                </label>
                <input
                    v-model="password"
                    name="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                  Verify Password
                </label>
                <input
                    v-model="password_verification"
                    name="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                />
              </div>

              <div class="text-center mt-6">
                <button
                    class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    @click="handleSubmit"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div v-else>
              <div class="bootstrap-iso">
                <div class="text-center">
                  <router-link to="/auth/login"> <span class="btn btn-outline-secondary btn-lg px-5 mt-2">Login</span> </router-link>
                </div>
              </div>
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
  name: "ChangePassword",
  data(){
    return {
      error: null,
      old_password: "",
      password: "",
      password_verification: "",
      changed: false,
    }
  },
  methods: {
    handleSubmit(){
      this.verifyPassword();
    },
    verifyPassword(){
      if(this.old_password.length < 4 || this.password.length < 4 || this.password_verification.length < 4){
        this.error = "You need to fill in all fields."
        return false;
      }
      if(this.password !== this.password_verification){
        this.error = "Passwords do not match."
        return false;
      }
      else{
        axios.post( API_HOME + 'api/change_password',
            {"old_password" : this.old_password, "new_password": this.password},
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
              }
            }
            )
            .then(response => {
              console.log("Result", response.data)
              if (response.data.result === true){
                alert("Password changed successfully. Please login.");
                // window.location.href = "/auth/login";
                // this.$router.push('auth/login')
                this.changed = true;
              }
              else {
                this.error = "The password is incorrect.";
                return false
              }
            })
            .catch(function (error) {
              console.error(error);
              alert("An error occurred. Unable to change password at this time.")
              return false;
            });
      }
    },
    changePassword(){

    }
  }
}
</script>

<style scoped>

</style>