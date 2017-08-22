//index.js
//获取应用实例
var app = getApp();
var Bmob = require('../../utils/bmob.js');
var that;

Page({
  data: {
    hotelList: [],
    loadingHidden:true
  },
  onLoad: function (options) {
    var Diary = Bmob.Object.extend("Hotel");
    var query = new Bmob.Query(Diary);
    that = this;
    /*query.find({
      success: function (results) {
        that.setData({ 
          hotelList: results,
          loadingHidden: true
          });
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });*/
  },


  getScenicDetail: function (e) {
    console.log(e.currentTarget.id);
    wx.navigateTo({
      url: '../scenic_detail/scenic_detail',
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

})
