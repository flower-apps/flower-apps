<template>
    <div class="footer fixed bottom-0 left-0 z-20 p-4 w-2/3 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div class="divider"></div>
      <div class="footer-container">
        <div class="left">
          <div class="columns">
            <div class="footer-column">
              <p class="column-label">{{ columnLabel }}</p>
              <div class="links">
                <a class="link">{{ link }}</a>
                <p class="sign-up">{{ signUp }}</p>
                <p class="sign-up">{{ blog }}</p>
                <p class="sign-up">{{ contact }}</p>
              </div>
            </div>
            <div class="footer-column">
              <p class="column-label">{{ columnLabelTwo }}</p>
              <div class="links">
                <p class="sign-up">{{ linkTwo }}</p>
                <p class="sign-up">{{ twitter }}</p>
                <p class="sign-up">{{ linkedin }}</p>
              </div>
            </div>
          </div>
          
        </div>
        <div class="left">
          <div class="copyright">
            <img
              alt=""
              class="logo"
              src="https://staging.static.overlay-tech.com/assets/4cc68850-c7b6-475d-a3b8-f605060cb722.png"
            />
            <p class="copyright-mention">
              {{ copyrightMention }}
            </p>
          </div>
          <div class="newsletter-subscription">
            <div class="top">
              <p class="column-label">{{ title }}</p>
              <p class="description">{{ description }}</p>
            </div>
            <FormElementWithButton></FormElementWithButton>
          </div>
          <a class="legal">{{ legal }}</a>
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
        default: "&#64;2021, all rights reserved"
      },
      description: {
        type: String,
        default: "Stay up to date with our latest releases"
      },
      legal: { type: String, default: "Legal mentions" },
      link: { type: String, default: "About us" },
      linkedin: { type: String, default: "Linkedin" },
      linkTwo: { type: String, default: "Instagram" },
      signUp: { type: String, default: "Sign up" },
      title: { type: String, default: "Subscribe now" },
      twitter: { type: String, default: "Twitter" }
    }
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