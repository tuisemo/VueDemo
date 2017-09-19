<template>
    <div id="home">
        <h1>welcome to my vue demo</h1>
        <p>作者：{{ author }}</p>
    </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      author: 'tuisemo'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
    text-align: center;
}

#home h1 {
    text-align: center;
    font-size: 20px;
}

#home p {
    text-align: center;
    font-size: 14px;
}
</style>