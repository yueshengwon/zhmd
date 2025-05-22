<template>
  <view class="login-container">
    <view class="logo-container">
      <image class="logo" src="/static/logo.png" mode="aspectFit"></image>
    </view>
    
    <view class="title-container">
      <text class="main-title">小星科技智慧门店</text>
    </view>
    
    <view class="form-container">
      <text class="welcome-text">您好，欢迎登录</text>
      
      <view class="input-item">
        <input 
          class="input" 
          type="text" 
          placeholder="登录账号" 
          v-model="username"
          @input="checkInputs"
        />
      </view>
      
      <view class="input-item">
        <input 
          class="input" 
          type="password" 
          placeholder="登录密码" 
          v-model="password"
          @input="checkInputs"
        />
      </view>
      
      <button 
        class="login-btn" 
        :class="{ 'login-btn-disabled': !isFormValid }"
        @click="handleLogin"
      >
        登 录
      </button>
    </view>
    
    <view class="footer">
      <text class="copyright">版权所有：小星信息科技（常州）有限公司</text>
      <text class="hotline">客服热线:0519-81190919</text>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';

// 响应式状态
const username = ref('');
const password = ref('');
const isFormValid = ref(false);

// 方法
const checkInputs = () => {
  isFormValid.value = username.value.trim() !== '' && password.value.trim() !== '';
};

const handleLogin = () => {
  if (!isFormValid.value) {
    uni.showToast({
      title: '请输入账号和密码',
      icon: 'none'
    });
    return;
  }
  
  // 这里添加登录逻辑
  uni.showLoading({
    title: '登录中...'
  });
  
  // 模拟登录请求
  setTimeout(() => {
    uni.hideLoading();
    uni.showToast({
      title: '登录成功',
      icon: 'success'
    });
    
    // 登录成功后跳转
    setTimeout(() => {
      uni.switchTab({
        url: '/pages/index/index'
      });
    }, 1500);
  }, 1000);
};
</script>

<style lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 50rpx;
  background-color: #fff;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 80rpx;
  
  .logo {
    width: 200rpx;
    height: 200rpx;
  }
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30rpx;
  margin-bottom: 60rpx;
  
  .main-title {
    font-size: 48rpx;
    font-weight: bold;
    color: #333;
  }
}

.form-container {
  width: 100%;
  
  .welcome-text {
    font-size: 36rpx;
    color: #333333;
    margin-bottom: 30rpx;
    display: block;
  }
  
  .input-item {
    margin-bottom: 30rpx;
    
    .input {
      width: 100%;
      height: 100rpx;
      border-bottom: 1px solid #eee;
      font-size: 32rpx;
      padding: 0 20rpx;
    }
  }
  
  .login-btn {
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    background-color: #125AE2;
    color: #fff;
    font-size: 34rpx;
    border-radius: 10rpx;
    margin-top: 50rpx;
  }
  
  .login-btn-disabled {
    background-color: #125AE2;
    color: rgba(255, 255, 255, 0.5);
  }
}

.footer {
  margin-top: auto;
  padding: 40rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .copyright, .hotline {
    font-size: 24rpx;
    color: #999;
    line-height: 1.8;
  }
}
</style>