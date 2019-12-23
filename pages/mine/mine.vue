<template>
  <div class='container'>
    <open-data class='icon' mode='aspectFit' type='userAvatarUrl'></open-data>
    <button class='bt' plain type="info" open-type='feedback'>意见反馈</button>
    <button class='shareBtn' open-type="share">分享</button>
    <button class='bt' type="primary" @click='author_info'>作者信息</button>
    </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      author_info: function() {
        uni.showModal({
          title: '作者信息',
          content: '专注小学数学，用益智游戏启迪思维，培养兴趣'
        })
        
      },
      onShareAppMessage: function(options) {
        console.log('分享的代码！！')
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background: #cafedb;
    height: 100vh;

  }

  .icon {
    height: 200rpx;
    width: 200rpx;
    border-radius: 50%;
    border: 1rpx solid #e9ee9d;
    overflow: hidden;
    margin: 200rpx 0;
  }
    .bt {
    margin: 20rpx;
    width: 240rpx;
    height: 80rpx;
    font-size: 14px;
    /* width: 200rpx; */
  }
</style>
