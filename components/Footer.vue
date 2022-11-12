<template>
  <div class="flex flex-col md:flex-row font-sans text-black">
      <div
        class="
          fixed
          bottom-0
          left-0
          z-20
          p-4
          w-full
          bg-white
          border-t border-gray-200
          shadow
          flex md:items-start md:justify-between md:p-6
          dark:bg-gray-800 dark:border-gray-600
        "
      >
        <div class="flex">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© 2022
            <a href="https://flowerapps.com/" class="hover:underline"
              >FlowerApps™</a
            >. All Rights Reserved.
          </span>
        </div>
        <div
          class="
            flex flex-wrap
            items-center
            text-sm text-gray-500
            dark:text-gray-400
          "
        >
          <a href="#" class="mr-4 hover:underline mr-6">About</a>
          <a href="#" class="mr-4 hover:underline mr-6">Privacy Policy</a>
          <a href="#" class="mr-4 hover:underline mr-6">Licensing</a>
          <a href="#" class="hover:underline mr-10">Contact</a>
      </div>
      </div>
  </div>
</template>
  
  <script>
import FormElementWithButton from "./FormElementWithButton";

export default {
  name: "Footer",
  components: { FormElementWithButton },
  props: {
    blog: { type: String, default: "Blog" },
    columnLabel: { type: String, default: "Company" },
    columnLabelTwo: { type: String, default: "Social" },
    contact: { type: String, default: "Contact" },
    copyrightMention: {
      type: String,
      default: "&#64;2021, all rights reserved",
    },
    description: {
      type: String,
      default: "Stay up to date with our latest releases",
    },
    legal: { type: String, default: "Legal mentions" },
    link: { type: String, default: "About us" },
    linkedin: { type: String, default: "Linkedin" },
    linkTwo: { type: String, default: "Instagram" },
    signUp: { type: String, default: "Sign up" },
    title: { type: String, default: "Subscribe now" },
    twitter: { type: String, default: "Twitter" },
  },
};
</script>
  
  <style lang="scss" scoped>
.footer {
  background-color: $white;
  padding: 0 24px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.divider {
  height: 4px;
  background-color: $black;
  margin-bottom: 16px;
  align-self: stretch;
}
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /*height: 376px;*/
}
.columns {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;
}
.footer-column {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.column-label {
  color: $black;
  align-self: stretch;
  margin-bottom: 24px;
  @include helvetica-24-bold;
}
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 110px;
}
.link {
  color: $black;
  align-self: stretch;
  margin-bottom: 16px;
  cursor: pointer;
  @include helvetica-24-regular;
}
.sign-up {
  color: $black;
  align-self: stretch;
  @include helvetica-24-regular;
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
.copyright {
  display: flex;
  align-items: center;
  height: 72px;
  align-self: stretch;
}
.logo {
  width: 72px;
  height: 72px;
  margin-right: 40px;
}
.copyright-mention {
  color: $black;
  @include helvetica-24-regular;
}
.newsletter-subscription {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.top {
  margin-bottom: 32px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}
.description {
  color: $black;
  align-self: stretch;
  @include helvetica-24-regular;
}
.legal {
  color: $black;
  align-self: stretch;
  text-align: right;
  cursor: pointer;
  @include helvetica-24-regular;
}
</style>