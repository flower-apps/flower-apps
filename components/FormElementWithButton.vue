<template>
    <div class="form-element-with-button">
      <input
        class="input"
        placeholder="I am an input field"
      />
      <Button></Button>
    </div>
  </template>
  
  <script>
  import Button from "./Button";
  
  export default {
    name: "FormElementWithButton",
    components: { Button }
  };
  </script>
  
  <style lang="scss" scoped>
  .form-element-with-button {
    display: flex;
    align-items: flex-start;
  }
  .input {
    width: 338px;
    align-self: stretch;
    background-color: $white;
    margin-right: 12px;
    border-radius: 8px;
    padding: 10px 22px;
    box-shadow: 4px 4px 0 0 $black;
    border: 2px solid $black;
    color: $black;
    @include helvetica-24-regular;
  }
  </style>