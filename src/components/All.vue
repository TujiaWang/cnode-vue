<template>
<div class="topic_list">
    <div class="cell" v-for="(topic,index) in topics">
      <a class="user_avatar pull-left" href="javascript:;" @click="showDetail(topic.id)">
        <img :src="topic.author.avatar_url" :title="topic.author.loginname">
      </a>

      <span class="reply_count pull-left">
        <span class="count_of_replies" title="回复数">{{topic.reply_count}}</span>
        <span class="count_seperator">/</span>
        <span class="count_of_visits" title="点击数">{{topic.visit_count}}</span>
      </span>

      <a class="last_time pull-right" href="javascript:;" @click="showDetail(topic.id)">
        <img class="user_small_avatar" :src="topic.author.avatar_url">
        <span class="last_active_time">{{calcTimes(topic.last_reply_at)}}</span>
      </a>
      
      <div class="topic_title_wrapper">
        <span :class="getShow(topic).className">{{getShow(topic).text}}</span>
        <a class="topic_title" href="javascript:;" :title="topic.title" @click="showDetail(topic.id)">{{topic.title}}</a>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      topics:[]
    }
  },
  methods:{
      getShow(obj){
        if(obj.top){
          return {text:'置顶',className:'put_top'};
        }else{
          if(obj.good){
            return {text:'精华',className:'put_good'};
          }else{
            switch(obj.tab){
              case 'share':
                return {text:'分享',className:'topiclist-tab'};
              break;
              case 'ask':
                return {text:'问答',className:'topiclist-tab'};
              break;
              default:
              return {text:'',className:''};
            }
          }
        }
      },
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
      showDetail(id){
        // console.log(id);
        this.$emit('topicid',id);
      }
  },
  created(){
      let _this = this;
      axios.get('/topics').then(function(res){
        // console.log(res.data.data);
        _this.topics = res.data.data;
      }).then(function(err){
          // console.log(err);
      });
  }
}
</script>

<style lang="less" scoped>
.cell{
  padding-right: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  position: relative;
  padding: 10px 0 10px 10px;
  font-size: 14px;
  &:first-child{
    border-top:none;
  }
  .user_avatar{
    color:#778087;
    img{
      width: 30px;
      height: 30px;
      border-radius: 3px;
    }
  }
  .reply_count{
      position: absolute;
      bottom: 0;
      left: 85px;
      text-align: left;
      line-height: 2em;
      font-size: 10px;
      width: 70px;
      display: inline-block;
      .count_of_replies {
          color: #9e78c0;
      }
      .count_seperator {
          margin: 0 -3px;
          font-size: 10px;
      }
      .count_of_visits {
          font-size: 10px;
          color: #b4b4b4;
      }
  }
  .last_time{
      position: absolute;
      bottom: 0;
      right: 10px;
      font-size: .8em;
      color:#778087;
      display: inline-block;
      margin-left: 20px;
      .user_small_avatar{
        display:none;
      }
  }
  .topic_title_wrapper{
    padding-left: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
      .put_top,.put_good {
          background: #80bd01;
          padding: 2px 4px;
          border-radius: 3px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          -o-border-radius: 3px;
          color: #fff;
          font-size: 12px;
      }
      .topiclist-tab {
          background-color: #e5e5e5;
          color: #999;
          padding: 2px 4px;
          border-radius: 3px;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          -o-border-radius: 3px;
          font-size: 12px;
      }
      .topic_title {
          color: #333;
          font-size: 1em;
          width: 100%;
          max-width: 70%;
          -o-text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
          vertical-align: middle;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          &:visited{
            color:#888;
          }
      }
  }
}
</style>
