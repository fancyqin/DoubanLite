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
    searchMovie(q){
        let _this =this;
        _this.setData({
            searchData: [],
            searchLoading: true
        })
        if (encodeURIComponent(q) === '%E5%AE%A6%E7%9B%88' || encodeURIComponent(q) === '%E7%A7%A6%E5%B8%86') {
            _this.setData({
                searchData: [_this.qfData],
                searchLoading: false,
                showHistroy: false,
            })
            return;
        }
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
                if (q && _this.data.historyList.indexOf(q) === -1) {
                    _this.data.historyList.push(q);
                    wx.setStorage({
                        key: 'historyList',
                        data: _this.data.historyList
                    });
                }
                console.log(JSON.stringify(res.data.subjects[0]));
                _this.setData({
                    searchData: res.data.subjects,
                    searchLoading: false,
                    showHistroy: false,
                    historyList: _this.data.historyList
                })
            }
        })
    },
    searchMovieByInput:function(e){
        var _this = this;
        this.timer && clearTimeout(this.timer);
        
        this.timer = setTimeout(function () {
            var q = e.detail.value;   
            _this.searchMovie(q);
        }, 1000);
    },
    searchMovieByTap(e){

        console.log(e)
        //todo
        this.searchMovie(e.currentTarget.dataset.q)
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
    clearHistory(){
        this.setData({
            historyList: [],
            showHistroy: false
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

    },
    qfData: {
        "rating": {
            "max": 10,
            "average": 10,
            "stars": "50"
        },
        "title": "\u79e6\u5e06\u548c\u5ba6\u76c8\u7684\u7231\u60c5\u6545\u4e8b",
        "original_title": "Love Story of Q and H",
        "year": "2012",
        "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1566292031.jpg",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1566292031.jpg",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1566292031.jpg"
        },
        "id": "qf2hy1314"
    }
})