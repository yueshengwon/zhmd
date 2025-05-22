"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const isFormValid = common_vendor.ref(false);
    const checkInputs = () => {
      isFormValid.value = username.value.trim() !== "" && password.value.trim() !== "";
    };
    const handleLogin = () => {
      if (!isFormValid.value) {
        common_vendor.index.showToast({
          title: "请输入账号和密码",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showLoading({
        title: "登录中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success"
        });
        setTimeout(() => {
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
        }, 1500);
      }, 1e3);
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.o([($event) => username.value = $event.detail.value, checkInputs]),
        c: username.value,
        d: common_vendor.o([($event) => password.value = $event.detail.value, checkInputs]),
        e: password.value,
        f: !isFormValid.value ? 1 : "",
        g: common_vendor.o(handleLogin)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/index.js.map
