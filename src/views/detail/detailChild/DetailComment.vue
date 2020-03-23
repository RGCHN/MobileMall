<template>
    <div class="detail-comment" v-if="Object.keys(comments).length !== 0">
        <div class="comment-header">
            <span class="header-title">用户评价</span>
            <div class="header-more">
                更多
                <i class="arrow-right"></i>
            </div>
        </div>

        <div class="user-info">
            <div class="head">
                <img :src="comments.user.avatar" alt="">
                <span>{{comments.user.uname}}</span>
            </div>
            <div class="content">
                <p>{{comments.content}}</p>
                <div class="info-other">
                    <span class="date">{{comments.created | showDate}}</span>
                    <span>{{comments.style}}</span>
                </div>
                <div class="comment-img">
                    <img v-for="(item, index) in comments.images" :src="item"  :key="index" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {formatDate} from "../../../Utils/utils";

    export default {
    name: "DetailComment",
    props:{
      comments:{
        type:Object,
        default(){
          return {}
        }
      },
    },
   filters:{
     showDate(value){
       let date = new Date(value * 1000);
       return formatDate(date,'yyyy-MM-dd');
     }
   },
  }
</script>

<style scoped>
    .detail-comment{
        padding:5px 12px;
        color:#333;
        border-bottom:5px solid #f2f5f8;
    }
    .comment-header{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    .header-title{
        float: left;
        font-size: 15px;
    }
    .header-more{
        float: right;
        margin-right: 10px;
        font-size: 13px;
    }
    .user-info .head{
        padding:10px 0 5px;
    }
    .user-info .head img{
        width:42px;
        height: 42px;
        border-radius: 50%;
    }
    .user-info .head span{
        position: relative;
        font-size: 15px;
        top:-15px;
        margin-left:15px;
    }
    .content{
        padding:0 5px 15px;
    }
    .content p{
        font-size: 14px;
        line-height: 1.5;
        color: #777;
    }
    .content .info-other{
        font-size: 12px;
        color:#999;
        margin-top: 10px;
    }
    .content .date{
        margin-right: 10px;
    }
    .content .comment-img{
        margin-top: 10px;
    }
    .comment-img img{
        width: 60px;
        height: 60px;
        margin-right: 5px;
    }
    .arrow-right{
        display: inline-block;
        width: 9px;
        height: 9px;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        transform: rotate(45deg);
    }


</style>
