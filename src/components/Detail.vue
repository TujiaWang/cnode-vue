<template>
    <div class="content">
        <div class="panel">
            <div class="topic_header">
                <span class="topic_full_title">
                    <span :class="topic.top ? 'put_top' : ''">{{topic.top ? '置顶' : ''}}</span>
                    {{topic.title}}
                </span>
                <div class="changes">
                    <span> 发布于 {{calcTimes(topic.create_at)}}</span>
                    <span> 作者 {{topic.author.loginname}}</span>
                    <span> {{topic.visit_count}} 次浏览</span>
                    <span> 最后一次编辑是 {{calcTimes(topic.last_reply_at)}}</span>
                    <span> 来自 {{calcFrom(topic.tab)}}</span>
                </div>
            </div>
            <div class="inner" v-html="topic.content"></div>
        </div>
        <div class="panel">
            <div class="header"><span class="col_fade">{{topic.reply_count}} 回复</span></div>
            <div class="cell reply_area reply_item" :class="index < 3 ? 'reply_highlight' : ''" v-for="(replay,index) in topic.replies">
                <div class="author_content">
                    <a href="" class="user_avatar"><img :src="replay.author.avatar_url" alt=""></a>
                    <div class="user_info">
                        <a href="" class="dark reply_author">{{replay.author.loginname}}</a>
                        <a href="" class="reply_time">1楼•{{calcTimes(replay.create_at)}}</a>
                    </div>
                    <div class="user_action"><span><i class="fa up_btn fa-thumbs-o-up" title="喜欢"></i><span class="up-count">{{replay.ups.length}}</span></span></div>
                </div>
                <div class="reply_content" v-html="replay.content"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            topic : Object
        },
        methods:{
            calcTimes(last){
                let distince = new Date() - new Date(last);
                let days = Math.floor(distince/24/60/60/1000);
                if(days==0){
                    let hours = Math.floor(distince/60/60/1000);
                    if(hours==0){
                        let minutes = Math.floor(distince/60/1000);
                        return minutes+' 分钟前';
                        // console.log(minutes);
                    }else{
                        return hours+' 小时前';
                    }
                }else{
                    return days+' 天前';
                }
            },
            calcFrom(tab){
                switch(tab){
                    case 'share':
                        return '分享';
                        break;
                }
            }
        }
    }
</script>
<style lang="less" scoped>
    .content{
        margin:20px 5px 0;
        background:#fff;

        .topic_header{
            padding: 10px;
            border-radius: 3px 3px 0 0;
            .topic_full_title {
                font-size: 22px;
                font-weight: 700;
                margin: 8px 0;
                display: inline-block;
                vertical-align: bottom;
                width: 75%;
                line-height: 130%;

                .put_top {
                    background: #80bd01;
                    padding: 2px 4px;
                    border-radius: 3px;
                    -webkit-border-radius: 3px;
                    -moz-border-radius: 3px;
                    -o-border-radius: 3px;
                    color: #fff;
                    font-size: 12px;
                }
            }

            .changes {
                font-size: 12px;
                color: #838383;
                 span:before {
                    content: "•";
                }
            }
        }
        .inner{
            padding: 10px;
            border-top: 1px solid #e5e5e5;
        }



        .panel {
            .header {
                padding: 10px;
                background-color: #f6f6f6;
                border-radius: 3px 3px 0 0;
                .col_fade {
                    color: #444;
                }
            }
            .cell.reply_highlight {
                background-color: #f4fcf0;
            }
            .cell {
                padding-right: 10px;
                background: #fff;
                border-top: 1px solid #f0f0f0;
                position: relative;
                padding: 10px 0 10px 10px;
                font-size: 14px;

                .user_avatar {
                    display: inline-block;
                    float: left;
                    img{
                        width: 30px;
                        height: 30px;
                        border-radius: 3px;
                        max-width: 100%;
                        vertical-align: middle;
                        border: 0;
                    }
                }

                .user_info {
                    margin-left: 10px;
                    display: inline-block;
                    .reply_author{
                        font-size: 12px;
                        font-weight: 700;
                        color: #666;
                        text-decoration: none;
                    }
                    .reply_time {
                        font-size: 11px;
                    }
                }

                .user_action {
                    float: right;
                    margin-right: 20px;
                    font-size: 15px;
                    .fa {
                        font: normal normal normal 14px/1 FontAwesome;
                        font-size: inherit;
                        text-rendering: auto;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        display: inline-block;
                    }
                    .up-count {
                        color: gray;
                    }
                }

                .reply_content {
                    clear: both;
                    padding-left: 0;
                    padding-top: 5px;
                }

            }
        }
        
    }
</style>