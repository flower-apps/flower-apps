<template>
  <div class="container font-sans text-black">
    <main-navigation></main-navigation>
    <teaser v-if="$route.path == '/'"></teaser>
    <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    <!-- <Footer></Footer> -->
    <footer
      class="
        fixed
        bottom-0
        left-0
        z-20
        p-4
        w-2/3
        bg-white
        border-t border-gray-200
        shadow
        md:flex md:items-center md:justify-between md:p-6
        dark:bg-gray-800 dark:border-gray-600
      "
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2022
        <a href="https://FlowerApps.com/" class="hover:underline">FlowerApps™</a
        >. All Rights Reserved.
      </span>
      <ul
        class="
          flex flex-wrap
          items-center
          mt-3
          text-sm text-gray-500
          dark:text-gray-400
          sm:mt-0
        "
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Contact</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import Teaser from "../components/Teaser.vue";

export default {
  components: {
    MainNavigation,
    Footer,
    Teaser,
  },
};
</script>


<style lang="scss">
// This is the project stylesheet

// Colors
$black: rgba(0, 0, 0, 1);
$blue: rgba(64, 114, 139, 1);
$green: rgba(119, 172, 19, 1);
$light-brown: rgba(246, 233, 221, 1);
$orange: rgba(241, 111, 25, 1);
$white: rgba(255, 255, 255, 1);
$yellow: rgba(241, 204, 64, 1);

// Typographies
@mixin helvetica-16-regular {
  font-family: "Helvetica";
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}
@mixin helvetica-24-bold {
  font-family: "Helvetica";
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
}
@mixin helvetica-24-regular {
  font-family: "Helvetica";
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
}
@mixin helvetica-40-bold {
  font-family: "Helvetica";
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
}
@mixin helvetica-72-bold {
  font-family: "Helvetica";
  font-size: 72px;
  font-weight: 700;
  line-height: normal;
}
.container-inner {
  max-width: 650px;
}

.nav.nuxt-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
