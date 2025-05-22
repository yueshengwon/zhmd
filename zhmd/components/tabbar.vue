<template>
  <view class="tabbar">
    <view class="tabbar-item" @click="switchTab(0)">
      <image :src="currentTab === 0 ? '/static/tabbar-1-1.png' : '/static/tabbar-1-0.png'" class="tabbar-icon"></image>
      <text :class="['tabbar-text', currentTab === 0 ? 'active' : '']">首页</text>
    </view>
    <view class="tabbar-item" @click="switchTab(1)">
      <image :src="currentTab === 1 ? '/static/tabbar-2-1.png' : '/static/tabbar-2-0.png'" class="tabbar-icon"></image>
      <text :class="['tabbar-text', currentTab === 1 ? 'active' : '']">车辆</text>
    </view>
    <view class="tabbar-center" @click="handleAdd">
      <image src="/static/tabbar-add.png" class="tabbar-add"></image>
    </view>
    <view class="tabbar-item" @click="switchTab(2)">
      <image :src="currentTab === 2 ? '/static/tabbar-3-1.png' : '/static/tabbar-3-0.png'" class="tabbar-icon"></image>
      <text :class="['tabbar-text', currentTab === 2 ? 'active' : '']">工单</text>
    </view>
    <view class="tabbar-item" @click="switchTab(3)">
      <image :src="currentTab === 3 ? '/static/tabbar-4-1.png' : '/static/tabbar-4-0.png'" class="tabbar-icon"></image>
      <text :class="['tabbar-text', currentTab === 3 ? 'active' : '']">门店</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref(0);

const switchTab = (index) => {
  currentTab.value = index;
  // 这里可以添加页面跳转逻辑
  // uni.switchTab({
  //   url: 对应的页面路径
  // });
};

const handleAdd = () => {
  uni.showToast({
    title: '点击了添加按钮',
    icon: 'none'
  });
  // 这里可以添加新增相关的逻辑
};
</script>

<style lang="scss">
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  display: flex;
  background-color: #fff;
  box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);
  z-index: 999;
  
  &-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  &-icon {
    width: 48rpx;
    height: 48rpx;
  }
  
  &-text {
    font-size: 24rpx;
    color: #999;
    margin-top: 4rpx;
    
    &.active {
      color: #125AE2;
    }
  }
  
  &-center {
    width: 100rpx;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  &-add {
    width: 96rpx;
    height: 64rpx;
  }
}
</style>