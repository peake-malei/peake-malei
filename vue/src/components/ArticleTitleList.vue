<template>


    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
        <van-cell
                v-for="item in list"
                :key="item"
                :title="item"
        />
    </van-list>



</template>

<script>
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
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 20) {
                    this.finished = true;
                }
            }, 500);
            }
        }
    }
</script>

<style scoped>

</style>