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
                Sign In
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
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Enter username and password</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                    v-model="email"
                    type="email"
                    name="email"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    required
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                    v-model="password"
                    name="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                      v-model="remember"
                      id="customCheckLogin"
                      type="checkbox"
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import axios from "axios";
import API_HOME from "@/variables/apiHome";

export default {
  data() {
    return {
      github,
      google,
      email: "",
      password: "",
      remember: "",
      error: null
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      if (this.password.length > 0) {
        // eslint-disable-next-line no-unused-vars
        axios.get(API_HOME + 'sanctum/csrf-cookie').then(response => {
          axios.post(API_HOME +'api/login', {
            email: this.email,
            password: this.password
          }, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
            .then(response => {
              if (response.data.success === true) {
                localStorage.setItem('e_files_sesame', response.data.token);
                window.location.href = "/files";
              } else {
                this.error = response.data.message
              }
            })
            .catch(function (error) {
              console.error(error);
            });
        })
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    let sesame = localStorage.getItem('e_files_sesame');
    if (sesame) {
      localStorage.removeItem('e_files_sesame')
    }
    next();
  }

};
</script>
