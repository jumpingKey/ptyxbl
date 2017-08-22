// pages/scenic_detail/scenic_detail.js

var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
var Bmob = require('../../utils/bmob.js');
var that;

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    scenic:'',
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },

  onLoad: function (options) {
    that = this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

    var scenic = Bmob.Object.extend("Scenic");
    var query = new Bmob.Query(scenic);


    query.get(options.id, {
      success: function (result) {
        that.setData({
          scenic: result
        });
        WxParse.wxParse('article', 'html', result.get("Content"), that, 5);
        console.log("结束加载内容");
      },
      error: function (result, error) {
        console.log("查询失败");
      }
    });
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  // 点击tab切换
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})