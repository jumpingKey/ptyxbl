var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
var Bmob = require('../../utils/bmob.js');
var that;


Page({
    data: {
        winWidth: 0,
        winHeight: 0,
        currentTab: 0,
        movies: [
            { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
            { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
            { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
            { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
        ],
        hotel:''
    },
    bindChange: function (e) {
        that = this;
        that.setData({ currentTab: e.detail.current });
    },
    onLoad: function (options) {
        var hotel = Bmob.Object.extend("Hotel");
        var query = new Bmob.Query(hotel);
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

        //更新访问次数
        query.get(options.id, {
            success: function (result) {
               that.setData({
                    hotel:result
                });
            },
            error: function (object, error) {
                console.log("查询失败");
            }
        });
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