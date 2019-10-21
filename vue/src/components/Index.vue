<template>

  <van-tabs v-model="active" sticky title-active-color="#42b983" color="#42b983">
    <van-tab title="标签 1" >内容 1</van-tab>
    <van-tab title="标签 2">内容 2</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
    <van-tab title="标签 3">内容 3</van-tab>
  </van-tabs>


</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Index',
    components:{
        helloWorld:HelloWorld
    },
  props: {
    msg: String
  },
    data() {
        return {
            active: 2
        };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
