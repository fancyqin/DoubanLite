// pages/search/search.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchData:[],
        searchLoading: false
    },
    timer: null,
    searchMovie:function(e){
        var _this = this;
        this.timer && clearTimeout(this.timer);
        _this.setData({
            searchData:[],
            searchLoading: true
        })
        this.timer = setTimeout(function () {   
            wx.request({
                url: app.globalData.url + '/v2/movie/search',
                data: {
                    apikey: app.globalData.apikey,
                    q: e.detail.value
                },
                header: {
                    "Content-Type": "application/text"
                },
                dataType: 'json',
                success: function (res) {
                    _this.setData({
                        searchData: res.data.subjects,
                        searchLoading: false
                    })
                }
            })
        }, 1000);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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