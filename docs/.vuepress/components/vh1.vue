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
  color: #99CCFF;
  font-size: 18px;
  font-weight: bold;
}
</style>
