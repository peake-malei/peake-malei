<template>
    <div id="app">
        <div id="nav">
            <!-- <img alt="Vue logo" src="../assets/logo.png">-->
            <van-swipe :autoplay="3000" indicator-color="white" >
                <van-swipe-item><van-image src="https://img.yzcdn.cn/vant/cat.jpeg"/></van-swipe-item>
                <van-swipe-item><van-image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572227426&di=842c28499be563964b0a834d0690db35&imgtype=jpg&er=1&src=http%3A%2F%2Fpic16.nipic.com%2F20110927%2F7958738_115703685192_2.jpg"/></van-swipe-item>
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

    // @ is an alias to /src
    export default {
        components:{
            Index,Footer
        },
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ]
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
