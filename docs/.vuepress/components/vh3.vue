<template>
  <div>
    <p class="font-h1">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.font-h1 {
  color: rgb(165, 240, 45);
  font-size: 14px;
}
</style>
