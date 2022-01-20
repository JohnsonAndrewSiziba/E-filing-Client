<template>
  <div>
    <navbar />
    <main>

      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="`background-image: url('${cabinet}')`"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Jemina Capital E-Files
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  Secure storage for all your important files
                </p>
                <div class="bootstrap-iso">
                  <p v-if="showLogin === true">
                    <router-link to="/auth/login"> <a href="/auth/login" class="btn btn-outline-light btn-lg px-5 mt-2">Login / Signup</a> </router-link>
                  </p>
                  <p v-else>
                    <router-link to="/files"> <a href="/files" class="btn btn-outline-light btn-lg px-5 mt-2">Continue To Account</a> </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Store Files</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae eligendi expedita illo magnam necessitatibus odit perferendis possimus tenetur unde.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                  >
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Share files</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae eligendi expedita illo magnam necessitatibus odit perferendis possimus tenetur unde.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                  >
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Secure</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae eligendi expedita illo magnam necessitatibus odit perferendis possimus tenetur unde.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                :src="cabinet"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"
                >
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">Get it on desktop</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae eligendi expedita illo magnam necessitatibus odit perferendis possimus tenetur unde.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Windows
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Mac OS
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    <footer-component />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
import cabinet from "@/assets/img/file_cabinet.jpg";

export default {
  data() {
    return {
      team1,
      team2,
      team3,
      team4,
      cabinet,
      showLogin: true
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
  created() {
    let sesame = localStorage.getItem('e_files_sesame');
    if (sesame) {
      this.showLogin = false;
    }
  }
};
</script>
