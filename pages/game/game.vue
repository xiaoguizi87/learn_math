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
		<ad unit-id="7l6adkb126411210b1" bindload="adloadhandler"></ad>
	</view>
</template>

<script>
	let shuffle = require('lodash.shuffle')
	export default {
		data() {
			return {
				opType: '1',
				rightNum: 0,
				wrongNum: 0,
				quections: [],
				problemIdx: 0,
				timer: undefined,
			}
		},
		onLoad() {
			console.log(this.$mp.query)
			this.opType = this.$mp.query.type
			this.quections = this.generateProblems()
		},
		methods: {
			generateProblems() {
				var arr = []
				for (let i = 0; i < 10; i++) {
					arr.push(this.getProblemByOpId(this.opType))
				}
				return arr
			},
			getProblemByOpId(opTypeId) {
				let x, y, res;
				if (opTypeId === '1') {
					return this.getProblemByOpId_1()
				} else if (opTypeId === '2') {
					return this.getProblemByOpId_2()
				} else if (opTypeId === '3') {
					return this.getProblemByOpId_3()
				} else if (opTypeId === '4') {
					return this.getProblemByOpId_4()
				} else if (opTypeId === '5') {
					return this.getProblemByOpId_5()
				}
			},
			getProblemByOpId_1() {
				let x = parseInt(Math.random() * 5)
				let y = parseInt(Math.random() * 5)
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
				let tmp = t.slice(0, 3)
				let result = parseInt(Math.random() * 4)
				tmp.splice(result, 0, res)
				let options = tmp
				return {
					problem: `${x} + ${y} = ?`,
					result: result,
					options: tmp
				}
			},
			getProblemByOpId_2() {
				let x = parseInt(Math.random() * 5) + 5
				let y = parseInt(Math.random() * 5) + 5
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
				let tmp = t.slice(0, 3)
				let result = parseInt(Math.random() * 4)
				tmp.splice(result, 0, res)
				let options = tmp
				return {
					problem: `${x} + ${y} = ?`,
					result: result,
					options: tmp
				}
			},
			getProblemByOpId_4() {
				let x = parseInt(Math.random() * 10)
				let y = parseInt(Math.random() * 9 + 1)
				let res = x * y
				let wrongOptions = []
				let candicate = [res-1, res-2, res+1, res+2, res+3, res+4, (x+1)*y, (x-1)*y, x*(y+1), x*(y-1)]
				for (let c of candicate) {
					if (c !== res && c >= 0 && wrongOptions.indexOf(c) === -1) {
						wrongOptions.push(c)
					}
				}
				let t = shuffle(wrongOptions)
				let tmp = t.slice(0, 3)
				let result = parseInt(Math.random() * 4)
				tmp.splice(result, 0, res)
				let options = tmp
				return {
					problem: `${x} * ${y} = ?`,
					result: result,
					options: tmp
				}
			},
			getProblemByOpId_5() {
				let res = parseInt(Math.random() * 10)
				let x = parseInt(Math.random() * 9 + 1)
				let y = res * x
				let wrongOptions = [res + 1, res + 2, res + 3]
				if (res > 2) {
					wrongOptions.push(res - 2)
					wrongOptions.push(res - 1)
				}
				let t = shuffle(wrongOptions)
				let tmp = t.slice(0, 3)
				let result = parseInt(Math.random() * 4)
				tmp.splice(result, 0, res)
				let options = tmp
				return {
					problem: `${y} / ${x} = ?`,
					result: result,
					options: tmp
				}
			},
			getProblemByOpId_3() {
				let x = parseInt(Math.random() * 5) + 5
				let y = parseInt(Math.random() * 5) + 5
				let z = parseInt(Math.random() * 10)
				let res = x + y + z
				let wrongOptions = [res + 1, res + 2, res + 3, res + 4]
				if (res > 2) {
					wrongOptions.push(res - 2)
					wrongOptions.push(res - 1)
				}
				if (res > 4) {
					wrongOptions.push(res - 3)
					wrongOptions.push(res - 4)
				}
				let t = shuffle(wrongOptions)
				let tmp = t.slice(0, 3)
				let result = parseInt(Math.random() * 4)
				tmp.splice(result, 0, res)
				let options = tmp
				return {
					problem: `${x} + ${y}  + ${z}= ?`,
					result: result,
					options: tmp
				}
			},
			handleClick(t, result) {
				// console.log(t, result)
				if (t === result) {
					this.playAudio('static/audios/correct.mp3')
					this.rightNum += 1
				} else {
					this.playAudio('static/audios/error.mp3')
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
			},
			playAudio(src) {
				const innerAudioContext = uni.createInnerAudioContext()
				innerAudioContext.autoplay = true
				innerAudioContext.src = src
				// console.log('play')
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
		color: #ff9668;
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
		color:#82b6ff;
		line-height: 60px;
	}

	.head {
		display: inline-flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 90vw;
		margin-top: 120upx;
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
		/* background-color: #1abc9c; */
		background-color: #82b6ff;
		color: #84ff9f;
		font-size: 28px;
		line-height: 60px;
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

	.shareBtn {
		position: fixed;
		top: 20rpx;
		right: -5rpx;
		width: 120rpx;
		font-size: 10px;
		height: 60rpx;
		background: pink;
	}
</style>
