<template>

    <div>
        <van-nav-bar
                title="人脸识别"
                fixed="true"
                left-text="返回"
                right-text="分享链接"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />


    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "FaceRecognition",
        components:{
            Dialog
        },
        data () {
            return {
                videoEle: null
            }
        },
        methods:{
            onClickLeft() {
                this.$router.back()
            }
            , onClickRight() {

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

            }
        }

    }
</script>

<style scoped>

</style>