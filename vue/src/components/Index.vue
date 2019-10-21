<template>

  <div>
    <van-tabs v-model="active" sticky title-active-color="#42b983" color="#42b983">
      <van-tab title="标签 1" >
        <ArticleTitleList :type="123" />
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>

    </van-tabs>

  </div>



</template>

<script>
    import ArticleTitleList from '@/components/ArticleTitleList.vue'
export default {
  name: 'Index',
    components:{
        ArticleTitleList
    },
  props: {
    msg: String
  },
    data() {
        return {
            active: 0
        };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

  /*.van-tabs__content{*/
    /*height: 60%;*/
  /*}*/
  .van-tabs{
    height: 60%;
  }
</style>
