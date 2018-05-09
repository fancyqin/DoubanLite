// pages/movieDetail/movieDetail.js
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        detailLoading: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this;


        if (options.id === 'qf2hy1314'){

            return;
        }

        wx.request({
            url: app.globalData.url + '/v2/movie/subject/' + Number(options.id.replace(/["]/g, '')),
            data: {
                apikey: app.globalData.apikey,
            },
            header: {
                "Content-Type": "application/text"
            },
            dataType: 'json',
            success: function (res) {
                app.ajaxFunc(res,() => {
                    res.data.detailLoading = false;
                    _this.setData({ ...res.data });
                    wx.setNavigationBarTitle({ title: res.data.title });
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
        
        return {
            title: this.data.title,
            success:function(res){
                wx.showToast({
                    title: '分享成功！',
                    icon: 'success'
                })
            },
            fail:function(res){
                wx.showToast({
                    title: 'Oops, 转发失败',
                    icon: 'none'
                })
            }
        }
    }
})