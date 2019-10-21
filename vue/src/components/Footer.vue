<template>
    <div class="footer">
        <van-divider :style="{ color: '#1989fa', borderColor: '#6C8592', padding: '0 16px' }">{{copyright}}</van-divider>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: "Footer",
        data(){
            return {
                copyright:'xxxx'
            }
        },
        created:function (){
           this.init();
        },
        methods:{
            init(){
                var _this=this;
                Axios.get('/api/cms/globalSetting').then(function(res){
                    _this.copyright =res.data.data.copyright
                })
            }
        }
    }
</script>

<style scoped>

    .footer{
        height: 40px;
        bottom: 5px;
        text-align: left;
        width: 100%;
        margin: 0 auto;
        position: fixed;
        right: 0;
        left: 0;
        z-index: 99

    }

</style>