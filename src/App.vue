<template>
  <div id="app">
    <cn-header></cn-header>
    <div class="main">
        <div class="header">

        </div>
        <div class="inner">
            <div class="topic_list">
                <div class="cell">
                  <a class="user_avatar pull-left" href="/user/i5ting">
                    <img src="https://avatars0.githubusercontent.com/u/3118295?v=3&amp;s=120" title="i5ting">
                  </a>

                  <span class="reply_count pull-left">
                    <span class="count_of_replies" title="回复数">
                      39
                    </span>
                    <span class="count_seperator">/</span>
                    <span class="count_of_visits" title="点击数">
                      5212
                    </span>
                  </span>
   
                  <a class="last_time pull-right" href="/topic/592917b59e32cc84569a7458#594a231b325c502917ef0cb6">
                    <img class="user_small_avatar" src="https://avatars3.githubusercontent.com/u/12490787?v=3&amp;s=120">
                    <span class="last_active_time">17 分钟前</span>
                  </a>
                  
                  <div class="topic_title_wrapper">
                    <span class="put_top">置顶</span>
                    <a class="topic_title" href="/topic/592917b59e32cc84569a7458" title="测试请发到客户端测试专区，违规影响用户的，直接封号">
                      测试请发到客户端测试专区，违规影响用户的，直接封号
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './common/Header'
export default {
  name: 'app',
  components:{
      'cn-header' : Header
  }
}
</script>

<style lang="less" scoped>

</style>
