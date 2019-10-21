<template>
    <div class="footer">
        <van-divider :style="{ color: '#1989fa', borderColor: '#6C8592', padding: '0 16px' }">©2019&nbsp;XXXXX.cn&nbsp;</van-divider>
    </div>
</template>

<script>
    export default {
        name: "Footer"
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