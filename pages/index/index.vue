<template>
	<view class="main">
		<view class="head">
			<text class="titleTxt">第{{problemIdx + 1}}题 共{{quections.length}}题</text>
			<image src="../../static/right.png" mode="scaleToFill"></image> <text class="numText">{{rightNum}}</text>
			<image src="../../static/wrong.png" mode="scaleToFill"></image> <text class="numText">{{wrongNum}}</text>
		</view>
		<view v-for="(item,index) in quections" :key="index" class='content' v-if="index === problemIdx">
			<text class="problemText">{{item.problem}}</text>
			<view class="row">
				<view v-for="(t, idx) in item.options" :key="idx" class="box" @click="handleClick(idx, item.result)">
					<button class="numberBtn">{{t}}</button>
				</view>
			</view>
		</view>
		<button class='shareBtn' open-type="share">分享</button>
	</view>
</template>

<script>
	let shuffle = require('lodash.shuffle')
	export default {
		data() {
			return {
				rightNum: 0,
				wrongNum: 0,
				quections: this.generateProblems(),
				problemIdx: 0,
				timer: undefined,
			}
		},
		onLoad() {

		},
		methods: {
			generateProblems() {
				var arr = []
				for (let i = 0; i < 10; i++) {
					var x = parseInt(Math.random() * 10)
					var y = parseInt(Math.random() * 10)
					let res = x + y
					let wrongOptions = [res + 1, res + 2, res + 3, res + 4, res + 5]
					if (res > 2) {
						wrongOptions.push(res - 2)
						wrongOptions.push(res - 1)
					}
					if (res > 4) {
						wrongOptions.push(res - 3)
						wrongOptions.push(res - 4)
					}
					let t = shuffle(wrongOptions)
					console.log(t)
					let tmp = t.slice(0, 3)
					let result = parseInt(Math.random() * 4)
					tmp.splice(result, 0, res)
					let options = tmp
					arr.push({
						problem: `${x} + ${y} = ?`,
						result: result,
						options: tmp
					})
				}
				return arr
			},
			handleClick(t, result) {
				console.log(t, result)
				if (t === result) {
					this.rightNum += 1
				} else {
					this.wrongNum += 1
				}
				if (this.problemIdx >= this.quections.length - 1) {
					uni.showModal({
						title: '测试结果',
						content: `您答对了${this.rightNum}题,答错${this.wrongNum}题`,
						showCancel: true,
						cancelText: '取消',
						confirmText: '重来',
						success: res => {
							this.reset()
						},
						fail: () => {},
						complete: () => {}
					});
				} else {
					this.problemIdx += 1
				}
			},
			reset() {
				this.rightNum = 0,
					this.wrongNum = 0,
					this.problemIdx = 0,
					this.quections = this.generateProblems()
			}
		},
		onShareAppMessage: function(options) {
			console.log('分享的代码！！')
			return {
				path: 'pages/index/index',
				title: '这题好难，你能帮帮我吗？'
			}
		}
	}
</script>

<style>
	.titleTxt {
		color: #444;
		font-size: 20px;
	}

	.main {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		background: #cafedb;
		height: 100vh;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20upx;
	}

	image {
		height: 30px;
		width: 30px;
	}

	.numText {
		font-size: 24px;
		color: #12cbff;
		line-height: 40px;
	}

	.problemText {
		font-size: 40px;
		color: #3498db;
		line-height: 60px;
	}

	.head {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 90vw;
		margin-top: 20upx;
	}

	.row {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 90vw;
		margin-top: 50upx;
	}
	
	.numberBtn {
		color: white;
		background-color: #1abc9c;
		font-size: 24px;
		width: 60px;
		height: 60px;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
