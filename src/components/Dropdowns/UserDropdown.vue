<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
        >
          <img
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg"
            :src="image"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
          href="javascript:void(0);"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 d-item"
      >
        {{ user.name }}
      </a>
      <router-link to="/auth/change_password">
        <span
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 d-item"
        >
          Change Password
        </span>
      </router-link>
      <a
        href="javascript:void(0);"
        @click="logout"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 d-item"
      >
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

import image from "@/assets/img/avatar.png";
import axios from "axios";
import API_HOME from "@/variables/apiHome";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
      image: image,
      user: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    logout() {
      // eslint-disable-next-line no-unused-vars
      axios.get(API_HOME + 'sanctum/csrf-cookie').then(response => {
        axios.get(API_HOME +'api/logout',  {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
          }
        })
            .then(response => {
              Swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1500
              })
              localStorage.removeItem('e_files_sesame');
              // window.location.href = "/";
              this.$router.push('/')
            })
            .catch(function (error) {
              console.error(error);
            });
      })

    },
    getUser(){
      axios.get(API_HOME +'api/profile',  {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
        }
      })
      .then(response => {
        if (response.data) {
          this.user = response.data;
        }
      })
      .catch(function (error) {
        console.error(error);
        console.log("Logging out!");
        localStorage.removeItem('e_files_sesame');
        window.location.reload();
      });
    },
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>

<style>
  .d-item:hover{
    background-color: #cecece;
  }
</style>
