// pages/movie/movie.js

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        in_theaters: [],
        weekly:[],
        new_movies:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;
        wx.request({
            url: app.globalData.url+'/v2/movie/in_theaters',
            data:{
                apikey: app.globalData.apikey
            },
            header:{
                "Content-Type": "application/text"
            },
            dataType:'json',
            success: function (res) {
                _this.setData({
                    in_theaters: res.data.subjects
                })
                wx.setStorage({
                    key:'in_theaters',
                    data: res.data.subjects
                });
            }
        })

        wx.request({
            url: app.globalData.url+'/v2/movie/weekly',
            data: {
                apikey: app.globalData.apikey
            },
            header: {
                "Content-Type": "application/text"
            },
            dataType: 'json',
            success: function (res) {
                _this.setData({
                    weekly: res.data.subjects
                })
                wx.setStorage({
                    key: 'weekly',
                    data: res.data.subjects
                });
            }
        })

        wx.request({
            url: app.globalData.url+'/v2/movie/new_movies',
            data: {
                apikey: app.globalData.apikey
            },
            header: {
                "Content-Type": "application/text"
            },
            dataType: 'json',
            success: function (res) {
                _this.setData({
                    new_movies: res.data.subjects
                })
                wx.setStorage({
                    key: 'new_movies',
                    data: res.data.subjects
                });
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
        window.location.reload();
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