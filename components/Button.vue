<template>
    <button class="button">
      <p class="label">{{ label }}</p>
    </button>
  </template>
  
  <script>
  export default {
    name: "Button",
    props: {
      label: { type: String, default: "Discover more" }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .button {
    background-color: $yellow;
    overflow: hidden;
    border-radius: 8px;
    padding: 10px 14px;
    box-shadow: 4px 4px 0 0 $black;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $black;
    cursor: pointer;
  }
  .label {
    color: $black;
    text-align: center;
    @include helvetica-24-regular;
  }
  </style>