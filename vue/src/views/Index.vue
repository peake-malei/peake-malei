<template>
  <div>

    <div id="nav">
      <!-- <img alt="Vue logo" src="../assets/logo.png">-->
      <van-swipe :autoplay="3000" indicator-color="white" >
        <van-swipe-item v-for="ad in adList"><van-image :src="ad.url"/></van-swipe-item>
      </van-swipe>
    </div>
    <van-notice-bar text="不积跬步，无以至千里；不积小流，无以成江海" left-icon="volume-o" />
    <van-tabs v-model="active" sticky title-active-color="#42b983" color="#42b983">
      <van-tab title="标签 1" >
        <ArticleTitleList :type="123" />
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>

    </van-tabs>
    <div style="height: 28px"></div>
    <Footer/>

  </div>



</template>

<script>
    import Footer from '@/components/Footer.vue'
    import Axios from 'axios'
    import ArticleTitleList from '@/views/ArticleTitleList.vue'
export default {
  name: 'Index',
    components:{
        ArticleTitleList,Footer
    },
  props: {
    msg: String
  },
    data() {
        return {
            active: 0,
            adList: [
                {url: 'http://fs.zhenjiang365.cn/bbsimg/fcmb/image/nopic590.jpg'}
            ]
        };
    },
    created:function () {

        this.init();
    },
    methods:{
        init(){
            var _this =this;
            Axios.get('/api/cms/adList').then(function (res) {
                _this.adList=res.data.data;
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

  #nav{
    overflow:hidden;
    width:100%;
    height: 30%;
  }

  /*.van-tabs__content{*/
    /*height: 60%;*/
  /*}*/
  .van-tabs{
    height: 60%;
  }
</style>
