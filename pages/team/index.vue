<template>
  <div class="">
    <h2>{{ name }}</h2>
    <div class="flex flex-row">
      <div class="flex-none mr-6 bg-gray-200 w-1/4 h-auto px-3">
        <ul>
          <li>article 1</li>
          <li>article 2</li>
          <li>article 3</li>
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
export default {
  data: () => ({
    name: "Team Page",
    teams: [],
  })
};
</script>
