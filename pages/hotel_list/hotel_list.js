// pages/hotel_list/hotel_list.js

var Bmob = require('../../utils/bmob.js');
var that;

Page({
  data: {
    hotelList: []
  },
  onLoad: function (options) {
    var Diary = Bmob.Object.extend("Hotel");
    var query = new Bmob.Query(Diary);
    that = this;
    query.find({
      success: function (results) {
        that.setData({ hotelList: results});
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });
  },

  getHotelDetail:function(e){
    wx.navigateTo({
      url: '../hotel_detail/hotel_detail?id=' + e.currentTarget.id,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
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