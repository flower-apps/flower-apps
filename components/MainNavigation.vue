<template>
  <div>
    <div class="flex p-4 justify-between items-center">
      <nuxt-link to="/" class="no-underline text-black hover:text-grey-darkest">
        <nuxt-img src="/flower-apps-logo.png" provider="static" fit="inside" :placeholder="[100, 50, 10]" sizes="sm:10vw md:10vw lg:100px" alt="logo-flower-apps" />
      </nuxt-link>
      <div class="flex flew-col md:flex-row">
        <div class="mr-6"><nuxt-link to="/about" class="nav text-black no-underline">About</nuxt-link></div>
        <div class="mr-6"><nuxt-link to="/team" class="nav text-black no-underline">Team</nuxt-link></div>
        <div><nuxt-link to="/documentation" class="nav text-black no-underline">Documentation</nuxt-link></div>
      </div>
    </div>
    <div class="border border-solid border-black mb-4 outline-purple-50"></div>
  </div>
</template>
