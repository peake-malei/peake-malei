<template>
    <div id="app">
          <!--  <Index :msg="首页"/>-->
        <router-link to="/"/>
        <router-view/>
    </div>

</template>

<script>
    // @ is an alias to /src
    export default {
        components:{
        },
        data() {
            return {

            }
        },
        created:function () {
            this.init()
        },
        methods:{
            init(){
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


    html{
        /*background-color: rgba(42, 117, 255, 0.15);*/
    }


</style>
