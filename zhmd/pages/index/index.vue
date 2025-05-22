<template>
	<view class="container">
		<!-- 顶部区域 -->
		<view class="header">
			<image class="header-bg" src="/static/topbg.png" mode="widthFix"></image>
			<view class="header-content">
				<view class="company-info">
					<text class="company-name">小星信息科技(常州)有限公司...</text>
					<text class="company-id">91320411MA1MPMOX02</text>
				</view>

				<!-- 顶部菜单 -->
				<view class="top-menu">
					<view class="menu-item">
						<text class="menu-text">车辆档案</text>
						<text class="menu-count">8</text>
					</view>
					<view class="menu-item">
						<text class="menu-text">维修工单</text>
						<text class="menu-count">6</text>
					</view>
					<view class="menu-item">
						<text class="menu-text">进厂车辆</text>
						<text class="menu-count">3</text>
					</view>
					<view class="menu-item">
						<text class="menu-text">会员管理</text>
						<text class="menu-count">5</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 搜索框 -->
		<view class="search-box">
			<image class="search-icon" src="/static/search.png"></image>
			<input class="search-input" type="text" placeholder="例：苏DAS234" v-model="searchText" @confirm="handleSearch" />
		</view>

		<!-- 主菜单 -->
		<view class="main-menu">
			<view class="menu-grid">
				<view class="grid-item">
					<image class="grid-icon" src="/static/menu-1.png"></image>
					<text class="grid-text">车辆档案</text>
				</view>
				<view class="grid-item">
					<image class="grid-icon" src="/static/menu-2.png"></image>
					<text class="grid-text">维修工单</text>
				</view>
				<view class="grid-item">
					<image class="grid-icon" src="/static/menu-3.png"></image>
					<text class="grid-text">进厂车辆</text>
				</view>
				<view class="grid-item">
					<image class="grid-icon" src="/static/menu-4.png"></image>
					<text class="grid-text">财务管理</text>
				</view>
			</view>

			<!-- 统计数据 -->
			<view class="count-section">
				<view class="count-item">
					<image class="count-bg" src="/static/count-1.png" mode="aspectFit"></image>
					<view class="count-content">
						<text class="count-title">本日开单</text>
						<text class="count-number">9</text>
					</view>
				</view>
				<view class="count-item">
					<image class="count-bg" src="/static/count-2.png" mode="aspectFit"></image>
					<view class="count-content">
						<text class="count-title">在修车辆</text>
						<text class="count-number">7</text>
					</view>
				</view>
				<view class="count-item">
					<image class="count-bg" src="/static/count-3.png" mode="aspectFit"></image>
					<view class="count-content">
						<text class="count-title">竣工车辆</text>
						<text class="count-number">5</text>
					</view>
				</view>
				<view class="count-item">
					<image class="count-bg" src="/static/count-4.png" mode="aspectFit"></image>
					<view class="count-content">
						<text class="count-title">本日结算</text>
						<text class="count-number">3</text>
					</view>
				</view>
			</view>
		</view>

		<!-- Banner -->
		<view class="banner">
			<image class="banner-img" src="/static/banner.png" mode="widthFix"></image>
		</view>

		<!-- 特色服务 -->
		<view class="service-section">
			<view class="section-title">特色服务</view>
			<view class="service-grid">
				<view class="service-item">
					<image class="service-icon" src="/static/service-1.png"></image>
					<text class="service-text">车辆改装</text>
				</view>
				<view class="service-item">
					<image class="service-icon" src="/static/service-2.png"></image>
					<text class="service-text">常享车</text>
				</view>
				<view class="service-item">
					<image class="service-icon" src="/static/service-3.png"></image>
					<text class="service-text">保险比价</text>
				</view>
				<view class="service-item">
					<image class="service-icon" src="/static/service-4.png"></image>
					<text class="service-text">维保查询</text>
				</view>
			</view>
		</view>

		<!-- 底部占位，防止内容被tabbar遮挡 -->
		<view class="tabbar-placeholder"></view>

		<!-- 引入自定义tabbar -->
		<custom-tabbar></custom-tabbar>
	</view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CustomTabbar from '@/components/tabbar.vue';

// 搜索相关
const searchText = ref('');
const handleSearch = () => {
  if (searchText.value.trim()) {
    uni.showToast({
      title: '正在搜索: ' + searchText.value,
      icon: 'none'
    });
    // 这里可以添加实际的搜索逻辑
  }
};

// 页面加载时的逻辑
onMounted(() => {
	console.log('首页加载完成');
});
</script>

<style lang="scss">
.container {
	min-height: 100vh;
	background-color: #f5f5f5;
}

.header {
	position: relative;
	width: 100%;

	&-bg {
		width: 100%;
		height: 300rpx;
	}

	&-content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}
}

.company-info {
	margin-bottom: 30rpx;

	.company-name {
		font-size: 32rpx;
		color: #fff;
		font-weight: bold;
		display: block;
	}

	.company-id {
		font-size: 24rpx;
		color: rgba(255, 255, 255, 0.8);
		margin-top: 10rpx;
		display: block;
	}
}

.top-menu {
	display: flex;
	background-color: #fff;
	border-radius: 10rpx;
	padding: 20rpx 0;
	box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.1);

	.menu-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		&:not(:last-child)::after {
			content: '';
			position: absolute;
			right: 0;
			top: 20%;
			height: 60%;
			width: 1rpx;
			background-color: #eee;
		}
	}

	.menu-text {
		font-size: 28rpx;
		color: #333;
	}

	.menu-count {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-top: 10rpx;
	}
}

.search-box {
	margin: 92rpx 30rpx 30rpx 30rpx;
	height: 80rpx;
	background-color: #fff;
	border-radius: 40rpx;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	border: 2rpx solid #125AE2;

	.search-icon {
		width: 30rpx;
		height: 30rpx;
		margin-right: 20rpx;
	}

	.search-input {
		flex: 1;
		height: 80rpx;
		font-size: 28rpx;
		color: #333;
	}
}

.main-menu {
	margin: 0 30rpx 30rpx;
	background-color: #fff;
	border-radius: 10rpx;
	padding: 30rpx;

	.menu-grid {
		display: flex;
		flex-wrap: wrap;
	}

	.grid-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.grid-icon {
		width: 77rpx;
		height: 77rpx;
		margin-bottom: 10rpx;
	}

	.grid-text {
		font-size: 24rpx;
		color: #333;
	}

	.count-section {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 20rpx;

		.count-item {
			width: 144rpx;
			height: 123rpx;
			position: relative;
			margin-bottom: 10rpx;
		}

		.count-bg {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}

		.count-content {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			z-index: 1;
			padding: 0 20rpx;
			box-sizing: border-box;
		}

		.count-title {
			font-size: 24rpx;
			color: #333333;
			text-align: center;
			width: 100%;
		}

		.count-number {
			font-size: 36rpx;
			color: #333333;
			font-weight: bold;
			align-self: flex-start;
			margin-top: 5rpx;
		}
	}
}

.banner {
	margin: 0 30rpx 30rpx;

	.banner-img {
		width: 100%;
		border-radius: 10rpx;
	}
}

.service-section {
	margin: 0 30rpx 30rpx;
	background-color: #fff;
	border-radius: 10rpx;
	padding: 30rpx;

	.section-title {
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		margin-bottom: 30rpx;
	}

	.service-grid {
		display: flex;
		flex-wrap: wrap;
	}

	.service-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.service-icon {
		width: 80rpx;
		height: 80rpx;
		margin-bottom: 10rpx;
	}

	.service-text {
		font-size: 24rpx;
		color: #333;
	}
}

.tabbar-placeholder {
	height: 100rpx;
}
</style>
