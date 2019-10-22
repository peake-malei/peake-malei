<template>
    <div>
        <van-nav-bar
                :title="title"
                fixed="true"
                left-text="返回"
                right-text="分享链接"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />


           <div v-if="content!=''" v-html="content" style="padding-top: 15%;padding-left: 10px;padding-right: 10px">
           </div>


           <View404 v-if="content==''"/>


    </div>
</template>

<script>
    import { Toast } from 'vant';
    import { Dialog } from 'vant';
    import View404 from '@/views/404.vue'
    import Axios from 'axios'
    export default {
        name: "ArticleDetail",
        components:{
            View404,Dialog
        },
        data(){
            return {
                title:'详情',
                content:false,
            }
        },created:function () {
            this.init()
        }
        ,methods: {
            onClickLeft() {
                this.$router.back()
            },
            onClickRight() {

                var href=window.location.href;
                this.$copyText( href).then(function (e) {
                    Dialog.alert({
                        title: '',
                        message: '链接复制成功'
                    }).then(() => {
                        // on close
                    });
                    console.log(e)
                }, function (e) {
                    alert('Can not copy')
                    console.log(e)
                })

            },
            init(){
                var _this=this
                this.title=this.$route.query.title;
                Axios.get('/html/article/'+this.$route.query.id+'.html').then(function (res) {
                    _this.content=res.data
                });

                // this.url='/html/article/'+this.$route.query.id+'.html';
            }
        }
    }
</script>

<style scoped>

</style>