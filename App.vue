<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.shareBtn {
		position: fixed;
		top: 500rpx;
		right: -5rpx;
		width: 120rpx;
		font-size: 10px;
		height: 60rpx;
		background: pink;
	}
	
</style>
