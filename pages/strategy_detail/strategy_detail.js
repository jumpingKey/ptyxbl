// pages/strategy_detail/strategy_detail.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
var Bmob = require('../../utils/bmob.js');
var that;


Page({
  data: {
    strategy: '',
    article_content: ''
  },
  onLoad: function (options) {
    var strategy = Bmob.Object.extend("Strategy");
    var query = new Bmob.Query(strategy);
    that = this;

    //更新访问次数
    query.get(options.id, {
      success: function (result) {
        result.set('VisitedTimes', result.get("VisitedTimes") + 1);
        result.save();
      },
      error: function (object, error) {

      }
    });

    query.get(options.id, {
      success: function (result) {
        that.setData({
          strategy: result,
          article_content: WxParse.wxParse('article', 'html', result.get("Content"), that, 5)
          //article_content:result.get("Content")
        });

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

  }
})