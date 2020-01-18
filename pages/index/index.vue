<template>
  <view class="main">
    <text class="titleTxt">趣学小学数学</text>
    <button @click='goto("/pages/game/game?type=1")'>和为10以内加法</button>
    <button @click='goto("/pages/game/game?type=2")'>和为10~20加法</button>
    <button @click='goto("/pages/game/game?type=3")'>三数相加</button>
    <button @click='goto("/pages/game/game?type=4")'>99乘法表</button>
    <button @click='goto("/pages/game/game?type=5")'>基础除法</button>
    <button class='shareBtn' open-type="share">分享</button> 
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      goto(url) {
        uni.navigateTo({
          url
        })
      }
    }
  }
</script>

<style lang="scss">
  .titleTxt {
    color: #ff5994;
    font-size: 40px;
    margin: 50rpx 0rpx;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background: #cafedb;
    height: 100vh;
  }

  button {
    margin: 20upx 0;
    background: #edff8f;
    font-size: 24px;
    color: #12cbff;
    width: 70vw;
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
