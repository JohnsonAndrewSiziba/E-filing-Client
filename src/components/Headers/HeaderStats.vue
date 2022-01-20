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
                  statPercent="3.48"
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
                  statPercent="3.48"
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
                  statPercent="3.48"
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

export default {
  components: {
    CardStats,
  },
};
</script>

<style>
  .js-bg-blue {
    background-color: rgb(2, 132, 199);
  }
</style>
