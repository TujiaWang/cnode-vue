<template>
  <div id="app">
    <cn-header></cn-header>
    <div class="main" v-if="show">
        <div class="header">
            <router-link to="all">全部</router-link>
            <router-link to="good">精华</router-link>
            <router-link to="share">分享</router-link>
            <router-link to="ask">问答</router-link>
            <router-link to="job">招聘</router-link>
            <router-link to="dev">客户端测试</router-link>
        </div>
        <div class="inner">
            <router-view @topicid="showDetail"></router-view>
        </div>
    </div>
    <cn-detail :topic="topic" v-if="detail"></cn-detail>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './common/Header'
import Detail from './components/Detail'
export default {
  name: 'app',
  data(){
    return {
      topic : {},
      show:true,
      detail:false
    }
  },
  components:{
      'cn-header' : Header,
      'cn-detail' : Detail
  },
  methods:{
    showDetail(id){
      this.show = false;
      this.detail = true;
      // console.log("App"+id);
      let _this = this;
      axios.get('/topic/'+id).then(function(res){
        // console.log(res);
        _this.topic = res.data.data;
      }).then(function(err){
        // console.log(err);
      });
    }
  }
}
</script>

<style lang="less" scoped>
  .main{
    margin:20px 5px;
    .header{
      padding: 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      & a {
        margin: 0 10px;
        color: #80bd01;
        &.router-link-active{
          background-color: #80bd01;
          color: #fff;
          padding: 3px 4px;
          border-radius: 3px;
        }
      }
    }
    .inner{
      border-radius:0 0 3px 3px;
      background-color:#fff;
    }

    .content{
      background-color: #fff;
      padding: 10px;
      border-radius: 3px 3px 0 0;
    }
  }
</style>
