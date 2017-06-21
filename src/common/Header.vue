<template>
    <div class="navbar">
        <div class="navbar-inner">
            <a href="/" class="brand"><img src="../assets/cnodejs_light.svg" alt=""></a>
            <form action="" id="search_form" class="navbar-search">
                <input type="text" class="search-query">
            </form>
            <ul class="nav">
                <li><a href="/">首页</a></li>
                <li><a href="/getstart">新手入门</a></li>
                <li><a href="/api">API</a></li>
                <li><a href="/about">关于</a></li>
                <li><a href="/signup">注册</a></li>
                <li><a href="/signin">登录</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>

<style lang="less" scoped>
.navbar {
    margin: 0 5px;
    z-index: 999;
    width: auto!important;
    position: relative;
    background: #444;
    font-size: 13px;
    .navbar-inner{
        background: 0 0;
        border-radius: 0;
        border: none;
        box-shadow: none;
        width: 90%;
        margin: auto;
        padding: 5px;
        .brand {
            width: 120px;
            padding: 3px 20px;
            height: 28px;
            display: block;
            margin-left: -20px;
            font-size: 20px;
            font-weight: 200;
            color: #777;
            text-shadow: 0 1px 0 #fff;
        }

        .navbar-search{
            margin-top: 6px;
            margin-bottom: 0;
            .search-query{
                background: url(../assets/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
                padding: 3px 5px 3px 22px;
                color: #666;
                border: 0;
                margin-top: 2px;
                transition: all .5s;
                margin-bottom: 0;
                font-size: 13px;
                font-weight: 400;
                line-height: 1;
                -webkit-border-radius: 15px;
                -moz-border-radius: 15px;
                border-radius: 15px;
                width:206px;
                height:20px;
                outline:none;
            }
        }

        .nav{
            overflow:hidden;
            li{
                line-height: 20px;
                float:left;
                a {
                    padding: 10px 15px;
                    text-decoration: none;
                    color: #ccc;
                    display:block;
                }
            }
        }
    }
}
</style>