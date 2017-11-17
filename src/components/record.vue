<template>
  <div id="record">
    <input type="text" placeholder="请输入书名/作者/关键词" v-model="something" v-on:keyup.13="add">
    <ul>
      <li v-for="(item,index) in myRecord" v-on:click="del(index)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'record',
  // props: ['keyWord'],
  data: function () {
    return {
      myRecord: [],
      something: ''
    }
  },
  methods: {
    add: function () {
      this.myRecord.push(this.something)
      // 清空当前记录
      this.something = ''
    },
    del: function (index) {
      // splice方法，删除/添加项目
      this.myRecord.splice(index, 1)
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
