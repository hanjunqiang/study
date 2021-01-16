<template>
  <div>
    <p class="font-h2">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.font-h2 {
  color: #FFFF00;
  font-size: 15px;
  font-weight: bold;
}
</style>
