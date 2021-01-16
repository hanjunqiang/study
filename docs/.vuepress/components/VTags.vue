<template>
  <div >
    <div class="tags-div" >
      <ul v-for="(item, index) in tags">
        <li
          @click="linkWeb(item.value)"
          :key="index"
          :style="{'color':getTagColor(index)}"
        >{{item.key}}</li>
        <!-- <span :key="index+tags.length" /> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: ''
    },
    tagsData: {
      type: Array,
      default: []
    },
    length: {
      type: [String, Number],
      default: 'all'
    }
  },
  data () {
    return {
      tagBgColors: ['#FF9900', '#CCFF00', '#FFCC00', '#FF6666', '#FF33CC', '#0099FF','#33CC33','#99CCCC','#9933FF','#FF3399','#CCFFCC'],
    }
  },
  computed: {
    tags () {
      if (this.length === 'all') {
        return this.tagsData
      } else {
        return this.tagsData.slice(0, this.length)
      }
    }
  },
  methods: {
    getTagColor (number) {
      if (number > 10) {
        number = number - 10;
      }
      return this.tagBgColors[number];
    },
    linkWeb(url) {
      window.open(url);
    }
  }
}
</script>

<style lang='stylus' scoped>

.tags-div{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.tags-div ul li{
  list-style : none;
  float: left;
  border: 1px solid ;
  padding: 5px 8px;
  color: blue;
  border-radius: 5px;
}
.tags-div ul li:hover{
  border-color : #CCCCFF;
  color : #CCCCFF;
  cursor :pointer;
}

// .tags {
//   padding: 2px 3px;
//   margin: 3px 5px;
// }
</style>
