<template>
  <div>
    <div class="flex justify-between items-center">
      <!-- <h1 class="pt-8 mb-8 text-2xl">
        <nuxt-link to="/" class="no-underline text-black hover:text-grey-darkest">My Awesome Blog</nuxt-link> 
      </h1>-->
      <nuxt-link to="/" class="no-underline text-black hover:text-grey-darkest">
        <nuxt-img src="/nuxt-icon.png" provider="static" fit="inside" :placeholder="[100, 50, 10]" sizes="sm:100vw md:50vw lg:100px" alt="nuxt-icon" />
      </nuxt-link>
      <div class="flex">
        <div class="mr-6"><nuxt-link to="/about" class="nav text-black no-underline">About</nuxt-link></div>
        <div class="mr-6"><nuxt-link to="/team" class="nav text-black no-underline">Team</nuxt-link></div>
        <div><nuxt-link to="/mountain" class="nav text-black no-underline">Mountain</nuxt-link></div>
      </div>
    </div>
    <div class="border-b border-solid border-grey mb-8"></div>
  </div>
</template>
