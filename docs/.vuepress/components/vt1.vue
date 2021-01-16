<template>
  <div>
    <p class="font-t1">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.font-t1 {
  color: #9b9baa;
  font-size: 16px;
  font-weight: bold;
}
</style>
