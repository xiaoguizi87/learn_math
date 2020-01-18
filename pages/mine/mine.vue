<template>
  <view class='container'>
    <open-data class='icon' mode='aspectFit' type='userAvatarUrl'></open-data>
    <!-- <button class='bt' plain type="info" open-type='feedback'>意见反馈</button> -->
    <!-- <text>头条号"趣学小学数学"专注小学数学，用益智游戏启迪思维，培养兴趣，感觉您的支持！</text> -->
<!--    <button class='bt' type="primary" @click='author_info'>关注头条号</button>-->
    <button class='shareBtn' open-type="share">分享</button> 
    <button class='bt' type="primary" @click='author_info'>作者信息</button>
    <button class='bt' plain type="primary" @click='gotoOtherMiniProgram()'>打赏作者
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    onLoad() {
//       tt.checkFollowState({
//         success(res) {
//           console.log(res.result); // true:已关注 /  false:未关注
// 
//         }
//       });
    },
    methods: {

      author_info: function() {
        uni.showModal({
          content: '专注小学数学，用益智游戏启迪思维，培养兴趣，感觉您的支持！'
        })
      },
      onShareAppMessage: function(options) {
        console.log('分享的代码！！')
      },
            gotoOtherMiniProgram: function() {
        console.log('begin jump')
        wx.navigateToMiniProgram({
          appId: 'wx18a2ac992306a5a4',
          path: 'pages/apps/largess/detail?id=51Qv%2BU4jrUqgPc1CLmE7uw%3D%3D',
          envVersion: 'release',
          success(res) {
            // 打开成功
            console.log('test')
          },
          fail(res) {
            console.log(res)
          }
        })
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
    padding: 100rpx;
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
  
	.shareBtn {
		position: fixed;
		bottom: 200rpx;
		right: -25rpx;
		width: 120rpx;
		font-size: 10px;
		height: 60rpx;
		background: pink;
	}
</style>
