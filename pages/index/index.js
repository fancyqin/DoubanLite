// pages/movie/movie.js

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        in_theaters: [],
        in_theaters_loading: true,
        weekly: [],
        weekly_loading: true,
        new_movies: [],
        new_movies_loading: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getRequestData();
    },

    getRequestData:function(){

        
        let _this = this;
        wx.request({
            url: app.globalData.url + '/v2/movie/in_theaters',
            data: {
                apikey: app.globalData.apikey
            },
            header: {
                "Content-Type": "application/text"
            },
            dataType: 'json',
            success: function (res) {
                app.ajaxFunc(res,() =>{
                    _this.setData({
                        in_theaters: res.data.subjects,
                        in_theaters_loading: false
                    })
                    wx.setStorage({
                        key: 'in_theaters',
                        data: res.data.subjects
                    });
                })
            }
        })

        wx.request({
            url: app.globalData.url + '/v2/movie/weekly',
            data: {
                apikey: app.globalData.apikey
            },
            header: {
                "Content-Type": "application/text"
            },
            dataType: 'json',
            success: function (res) {
                app.ajaxFunc(res, () => {
                    _this.setData({
                        weekly: res.data.subjects,
                        weekly_loading: false
                    })
                    wx.setStorage({
                        key: 'weekly',
                        data: res.data.subjects
                    });
                })
                
            }
        })

        wx.request({
            url: app.globalData.url + '/v2/movie/new_movies',
            data: {
                apikey: app.globalData.apikey
            },
            header: {
                "Content-Type": "application/text"
            },
            dataType: 'json',
            success: function (res) {
                app.ajaxFunc(res, () => {
                    _this.setData({
                        new_movies: res.data.subjects,
                        new_movies_loading: false
                    })
                    wx.setStorage({
                        key: 'new_movies',
                        data: res.data.subjects
                    });
                })
            }
        })


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        this.setData({
            in_theaters: [],
            in_theaters_loading: true,
            weekly: [],
            weekly_loading: true,
            new_movies: [],
            new_movies_loading: true
        });
        this.getRequestData();
        setTimeout(function(){
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        },1000);
        
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})