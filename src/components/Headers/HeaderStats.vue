<template>
  <!-- Header -->
  <div class="relative md:pt-32 pb-32 pt-12" style="background-color: rgb(2 132 199);">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <router-link to="/files/shared">
              <card-stats
                  statSubtitle=""
                  statTitle="Shared"
                  :statPercent=sharedCount
                  statPercentColor="text-emerald-500"
                  statIconName="far fa-share-square"
                  statIconColor="js-bg-blue"
              />
            </router-link>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <router-link to="/files/recent">
              <card-stats
                  statSubtitle=""
                  statTitle="Recent Files"
                  statArrow="up"
                  :statPercent=recentCount
                  statIconName="fas fa-calendar-plus"
                  statIconColor="js-bg-blue"
              />
            </router-link>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <router-link to="/files/starred">
              <card-stats
                  statSubtitle=""
                  statTitle="Starred"
                  statArrow="up"
                  :statPercent=starredCount
                  statIconName="fas fa-star"
                  statIconColor="js-bg-blue"
              />
            </router-link>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <router-link to="/files/trashed">
              <card-stats
                  statSubtitle=""
                  statTitle="Trashed"
                  statArrow="up"
                  :statPercent='trashedCount'
                  statIconName="fas fa-trash-alt"
                  statIconColor="js-bg-blue"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import axios from "axios";
import API_HOME from "@/variables/apiHome";

export default {
  components: {
    CardStats,
  },
  data(){
    return {
        sharedCount: "",
        recentCount: "",
        starredCount: "",
        trashedCount: "",
    }
  },
  methods: {
    get(link) {
      axios.get(API_HOME +'api/' + link, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('e_files_sesame')}`
        }
      })
          .then(response => {
            let type = response.data.type
            let data = response.data.data

            if(type === 'shared'){
              this.sharedCount = data;
            }
            else if(type === 'recent'){
              this.recentCount = data;
            }
            else if(type === 'starred'){
              this.starredCount = data;
            }
            else if(type === 'trashed'){
              this.trashedCount = data;
            }
          })
          .catch(function (error) {
            console.error(error);
          });
    },
    getSharedCount(){
        this.get('shared_count');
    },

    getRecentCount(){
      this.get('recent_count');
    },

    getStarredCount(){
      this.get('starred_count');
    },

    getTrashedCount(){
      this.get('trashed_count');
    },
  },
  created() {
    this.getSharedCount();
    this.getRecentCount();
    this.getStarredCount();
    this.getTrashedCount();
  }
};
</script>

<style>
  .js-bg-blue {
    background-color: rgb(2, 132, 199);
  }
</style>
