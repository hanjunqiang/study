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
  color: rgb(255, 255, 255);
  font-size: 14px;
}
</style>
