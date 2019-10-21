<template>


    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
        <van-cell
                v-for="item in list"
                :key="item.id"
                :title="item.title"
        />
    </van-list>



</template>

<script>
    import Axios from 'axios'
    export default {
        name: "ArticleTitleList",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                size:50
            };
        },
        props:{
            type:String
        },
        methods: {
            onLoad() {
                var _this=this;
                Axios.get('/api/cms/articleList')
                    .then(function(res){
                        _this.list=res.data.data
                       console.log(res.data);
                    })
                    .catch(function(err){
                        alert(err);
                    });

                // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                this.finished = true;

            }
        }
    }
</script>

<style scoped>

</style>