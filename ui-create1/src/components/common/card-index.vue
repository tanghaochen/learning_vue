<template>
  <div
    class="py-4 bg-secondary text-light bg-opacity-50 rounded-3 flex-grow-1 m-1 d-flex flex-column text-center justify-content-center"
  >
    <my-icon class="icon-kong text-danger my-3" :size="size"></my-icon>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "card-index",
  components: {},
  props: {
    id: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    size: {
      type: [Number, String],
      default: 40,
    },
  },
};
</script>

<style scoped></style>
