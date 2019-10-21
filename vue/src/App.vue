<template>
    <div id="app">
        <div id="nav">
            <!-- <img alt="Vue logo" src="../assets/logo.png">-->
            <van-swipe :autoplay="3000" indicator-color="white" >
                <van-swipe-item v-for="ad in adList"><van-image :src="ad.url"/></van-swipe-item>
            </van-swipe>

        </div>

        <div style="height: 65%; ">
            <Index :msg="首页"/>
            <div style="height: 28px"></div>
        </div>

       <Footer/>

    </div>

</template>

<script>
    import Index from '@/components/Index.vue'
    import Footer from '@/components/Footer.vue'
    import Axios from 'axios'

    // @ is an alias to /src
    export default {
        components:{
            Index,Footer
        },
        data() {
            return {
                adList: [
                    {url: 'http://fs.zhenjiang365.cn/bbsimg/fcmb/image/nopic590.jpg'}
                ]
            }
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



<style>
    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*text-align: center;*/
        /*color: #2c3e50;*/
        width:100%;
        height: 100%;
        /*overflow:hidden;*/
        position: absolute;
        /*background-color: #ee0a24;*/
    }
    #nav{
        overflow:hidden;
        width:100%;
        height: 30%;
    }

    html{
        /*background-color: rgba(42, 117, 255, 0.15);*/
    }


</style>
