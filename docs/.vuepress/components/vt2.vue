<template>
  <div>
    <p class="font-t2">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.font-t2 {
  color: black;
  font-size: 14px;
  background-color: rgba(238, 237, 237, 0.836);
  padding: 5px;
  border-radius: 10px;
}
</style>
