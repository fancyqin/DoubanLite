// pages/search/search.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchData:[],
        searchLoading: false,
        showHistroy: true,
        historyList:[]
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
            var q = e.detail.value;   
            wx.request({
                url: app.globalData.url + '/v2/movie/search',
                data: {
                    apikey: app.globalData.apikey,
                    q: q
                },
                header: {
                    "Content-Type": "application/text"
                },
                dataType: 'json',
                success: function (res) {
                    let his;
                    if (q && _this.data.historyList.indexOf(q) === -1){
                        _this.data.historyList.push(q);
                        wx.setStorage({
                            key: 'historyList',
                            data: _this.data.historyList
                        });
                    }
                    _this.setData({
                        searchData: res.data.subjects,
                        searchLoading: false,
                        showHistroy: false,
                        historyList: _this.data.historyList
                    })
                }
            })
        }, 1000);
    },
    searchMovieByTap:function(){
        //todo
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        wx.getStorage({
            key: "historyList",
            success: function (res) {
                _this.setData({
                    historyList: res.data
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