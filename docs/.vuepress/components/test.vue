<template>
  <div>
    <font
      style="
        background: linear-gradient(to right, #ff1616, #ff7716);
        padding: 10px;
      "
      >太阳太阳，给我们带来，七色光彩</font
    >
    <p
      style="
        text-indent: 0;
        padding: 18px 21px;
        background-color: #f8fafc;
        border-radius: 8px;
        overflow: hidden;
        border-left: 8px solid #69f;
        color: #1c1f21;
        font-size: 1em;
      "
    >
      {{content}}
    </p>
  </div>
</template>

<script>
export default {
    props:[
        'content'
    ]
}
</script>
<style></style>
