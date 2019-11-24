<template>
  <view class="main">
    <text class="titleTxt">趣学小学数学</text>
    <button @click='goto("/pages/game/game?type=1")'>和为10以内加法</button>
    <button @click='goto("/pages/game/game?type=2")'>和为10~20加法</button>
	<button @click='goto("/pages/game/game?type=3")'>99乘法表</button>
    <button @click='goto("/pages/sudoku/sudoku")'>四宫数独</button>
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
</style>
