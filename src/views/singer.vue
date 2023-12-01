<template>
  <div class="singer" v-loading="!singers.length">
   歌手页面
  </div>
</template>

<script>

  export default {
    name: 'm-singer',
    components: {
    },
    data() {
      return {
        singers: [],
        selectedSinger: null
      }
    },
    async created() {
      // const result = await getSingerList()
      // this.singers = result.singers
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .singer {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
  }
</style>
