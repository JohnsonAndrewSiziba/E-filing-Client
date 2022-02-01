<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import APP_VERSION from "@/variables/appVersion";
import axios from "axios";
import API_HOME from "@/variables/apiHome";
import Swal from "sweetalert2";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
  methods: {
    getCurrentValidVersion(){
      const version = APP_VERSION;
      axios.get(API_HOME +'api/current_version')
          .then(response => {
            // return response.data;
             const data = response.data;
            const currentValidVersion = data.version;

            if(data.tba === true){
              alert('This version of E-Files will become obsolete on ' + data.date + '. Please download the latest version of the app.')
            }
            if(version !== currentValidVersion){
              alert('This version of E-Files is now obsolete. Please download the latest version of the app.')
              window.location.href = "/";
            }

          })
          .catch(function (error) {
            console.error(error);
            alert("An error occurred. Unable to communicate with server. Please alert the Administrator.")
          });
    }
  },

  created() {
    this.getCurrentValidVersion();

    axios.interceptors.request.use((config) => {
      Swal.fire(
          'Processing',
          'Please wait...',
          'info'
      )
      Swal.showLoading()
      return config;
    }, (error) => {
      // trigger 'loading=false' event here
      return Promise.reject(error);
    });

    axios.interceptors.response.use((response) => {
      Swal.close()
      return response;
    }, (error) => {
      // trigger 'loading=false' event here
      return Promise.reject(error);
    });
  },


  beforeRouteEnter(to, from, next) {
    let sesame = localStorage.getItem('e_files_sesame');
    if (! sesame) {
      return next('/auth/login');
    }
    next();
  }
};
</script>
