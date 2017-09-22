<template>
  <div id="search">
    <input type="text" placeholder="请输入书名/作者/关键词">
  </div>
</template>

<script>
export default {
  name: 'search',
  // props: ['keyWord'],
  data () {
    return {
      keyWord: '请输入书名/作者/关键词'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../css/normalize.css';
#home {
  text-align: center;
  h1 {
    text-align: center;
    font-size: 20px;
  }
  p {
    text-align: center;
    font-size: 14px;
  }
}

</style>
