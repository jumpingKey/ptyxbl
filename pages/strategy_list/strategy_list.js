// pages/strategy_list/strategy_list.js

var app = getApp();
var Bmob = require('../../utils/bmob.js');
var that;


Page({
  data: {
    strategyList: []
  },
  onLoad: function (options) {
    var strategy = Bmob.Object.extend("Strategy");
    var query = new Bmob.Query(strategy);

    query.select("Title");
    query.select("PubDate");
    query.select("VisitedTimes");
    query.select("ThumbNailUrl");
    query.select("VisitedTimes");

    that = this;

    query.find({
      success: function (results) {
        that.setData({ strategyList: results });
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },

  getStrategyDetail: function (e) {
    var strategyId = e.currentTarget.id;
    wx.navigateTo({
      url: '../strategy_detail/strategy_detail?id=' + e.currentTarget.id,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

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
  }
})