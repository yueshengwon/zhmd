"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "tabbar",
  setup(__props) {
    const currentTab = common_vendor.ref(0);
    const switchTab = (index) => {
      currentTab.value = index;
    };
    const handleAdd = () => {
      common_vendor.index.showToast({
        title: "点击了添加按钮",
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: currentTab.value === 0 ? "/static/tabbar-1-1.png" : "/static/tabbar-1-0.png",
        b: common_vendor.n(currentTab.value === 0 ? "active" : ""),
        c: common_vendor.o(($event) => switchTab(0)),
        d: currentTab.value === 1 ? "/static/tabbar-2-1.png" : "/static/tabbar-2-0.png",
        e: common_vendor.n(currentTab.value === 1 ? "active" : ""),
        f: common_vendor.o(($event) => switchTab(1)),
        g: common_assets._imports_0$2,
        h: common_vendor.o(handleAdd),
        i: currentTab.value === 2 ? "/static/tabbar-3-1.png" : "/static/tabbar-3-0.png",
        j: common_vendor.n(currentTab.value === 2 ? "active" : ""),
        k: common_vendor.o(($event) => switchTab(2)),
        l: currentTab.value === 3 ? "/static/tabbar-4-1.png" : "/static/tabbar-4-0.png",
        m: common_vendor.n(currentTab.value === 3 ? "active" : ""),
        n: common_vendor.o(($event) => switchTab(3))
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/tabbar.js.map
