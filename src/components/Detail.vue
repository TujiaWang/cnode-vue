<template>
    <div class="content">
        <div class="panel">
            <span class="topic_full_title">
                <span class="put_top"></span>
                {{topic.title}}
            </span>
            <div class="inner" v-html="topic.content"></div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            topic : Object
        }
    }
</script>
<style lang="less" scoped>
    
</style>