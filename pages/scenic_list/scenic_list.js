// pages/scenic_list/scenic_list.js

var app = getApp();
var Bmob = require('../../utils/bmob.js');
var that;

Page({
  data: {
    scenicList: [],
    loadingHidden:true
  },

  onLoad: function (options) {
    var scenic = Bmob.Object.extend("Scenic");
    var query = new Bmob.Query(scenic);
    query.select("Name");
    query.select("Tag1");
    query.select("Tag2");
    query.select("Tag3");
    query.select("PubDate");
    query.select("ThumbNailUrl");

    that = this;
    query.find({
      success: function (results) {
        that.setData({ 
          scenicList: results,
          loadingHidden: true
          });
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },


  getScenicDetail: function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '../scenic_detail/scenic_detail?id=' + e.currentTarget.id,
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


  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }

})