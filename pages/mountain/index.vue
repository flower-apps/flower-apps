<template>
  <div class="">
    <h2>{{ name }}</h2>
    <div class="flex flex-row">
      <div class="flex-none mr-6 bg-gray-200 w-1/4 h-auto px-3">
        <ul>
          <p v-if="$fetchState.pending">Loading....</p>
          <p v-else-if="$fetchState.error">Error while fetching mountains</p>
          <ul v-else>
            <li v-for="(mountain, index) in mountains" :key="index">
              {{ mountain.title }}
            </li>
          </ul>
        </ul>
      </div>
      <div class="grow bg-gray-100 h-auto px-10">
        <p class="mb-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          consequatur dolores dolore eveniet non eaque vero repellat, doloremque
          rerum iste tempore numquam illo natus vitae delectus eius? Nihil
          accusantium ducimus culpa veniam fugiat assumenda? Reiciendis sunt
          temporibus quidem, consequatur incidunt nisi. Unde velit aspernatur,
          atque exercitationem aperiam fugiat perspiciatis voluptatum?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NuxtLogo from "../../components/NuxtLogo.vue";
export default {
  data: () => ({
    name: "Team Page",
    mountains: [],
  }),
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => res.json()
    );
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Mountain page description",
        },{
          hid: "keywords",
          name: "keywords",
          content: "vuejs, nuxtjs, seo, meta, sitemap, modules",
        }
      ],
    };
  },
};
</script>
