"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  CustomTabbar();
}
const CustomTabbar = () => "../../components/tabbar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const searchText = common_vendor.ref("");
    const handleSearch = () => {
      if (searchText.value.trim()) {
        common_vendor.index.showToast({
          title: "正在搜索: " + searchText.value,
          icon: "none"
        });
      }
    };
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/index/index.vue:148", "首页加载完成");
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_vendor.o(handleSearch),
        d: searchText.value,
        e: common_vendor.o(($event) => searchText.value = $event.detail.value),
        f: common_assets._imports_2,
        g: common_assets._imports_3,
        h: common_assets._imports_4,
        i: common_assets._imports_5,
        j: common_assets._imports_6,
        k: common_assets._imports_7,
        l: common_assets._imports_8,
        m: common_assets._imports_9,
        n: common_assets._imports_10,
        o: common_assets._imports_11,
        p: common_assets._imports_12,
        q: common_assets._imports_13,
        r: common_assets._imports_14
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
