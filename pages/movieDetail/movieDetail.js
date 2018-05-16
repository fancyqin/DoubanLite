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
            let data = this.qhData;
            data.detailLoading = false;
            _this.setData({ ...data });
            wx.setNavigationBarTitle({ title: data.title });
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
    },
    qhData: {
        "rating": {
            "max": 10,
            "average": 10,
            "stars": "50",
            "min": 0
        },
        "reviews_count": 666,
        "videos": [],
        "wish_count": 5201314,
        "original_title": "Love Story of Q and H",
        "blooper_urls": [
            "http://vt1.doubanio.com/201805101702/dec0fd643c8a0fc82dae4f9f4f0ec506/view/movie/M/302300792.mp4",
            "http://vt1.doubanio.com/201805101702/5b31ad8142e364dcdc294e52ae0f7eea/view/movie/M/302300345.mp4",
            "http://vt1.doubanio.com/201805101702/5e22d5537eba8b0ec68bd57f67796c2b/view/movie/M/302300193.mp4",
            "http://vt1.doubanio.com/201805101702/4626f3ac68bcde0822133b94f9bdc44e/view/movie/M/302300190.mp4"
        ],
        "collect_count": 520,
        "images": {
            "small": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
            "large": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
            "medium": "http://p8jly0wx2.bkt.clouddn.com/love.jpg"
        },
        "douban_site": "",
        "year": "2016",
        "popular_comments": [
            {
                "rating": {
                    "max": 5,
                    "value": 5,
                    "min": 0
                },
                "useful_count": 554,
                "author": {
                    "uid": "cn_panda",
                    "avatar": "http://p8jly0wx2.bkt.clouddn.com/hyhead.jpg",
                    "signature": "",
                    "alt": "https://www.douban.com/people/cn_panda/",
                    "id": "2561289",
                    "name": "小公举"
                },
                "subject_id": "24773958",
                "content": "打饭~",
                "created_at": "2016-11-27 19:50:26",
                "id": "1364732206"
            },
            {
                "rating": {
                    "max": 5,
                    "value": 5,
                    "min": 0
                },
                "useful_count": 554,
                "author": {
                    "uid": "cn_panda",
                    "avatar": "http://p8jly0wx2.bkt.clouddn.com/qfhead.jpg",
                    "signature": "",
                    "alt": "https://www.douban.com/people/cn_panda/",
                    "id": "2561289",
                    "name": "Q"
                },
                "subject_id": "24773958",
                "content": "飞鹰~",
                "created_at": "2016-09-15 19:50:29",
                "id": "1364732206"
            },
            {
                "rating": {
                    "max": 5,
                    "value": 5,
                    "min": 0
                },
                "useful_count": 554,
                "author": {
                    "uid": "cn_panda",
                    "avatar": "http://p8jly0wx2.bkt.clouddn.com/bs.jpg",
                    "signature": "",
                    "alt": "https://www.douban.com/people/cn_panda/",
                    "id": "2561289",
                    "name": "宝石"
                },
                "subject_id": "24773958",
                "content": "祝你们春梦了无痕！",
                "created_at": "2016-11-27 22:30:23",
                "id": "1364732206"
            }
        ],
        "alt": "https://movie.douban.com/subject/24773958/",
        "id": "24773958",
        "mobile_url": "https://movie.douban.com/subject/24773958/mobile",
        "photos_count": 1387,
        "pubdate": "2018-05-11",
        "title": "\u79e6\u5e06\u548c\u5ba6\u76c8",
        "do_count": null,
        "has_video": false,
        "share_url": "https://m.douban.com/movie/subject/24773958",
        "seasons_count": null,
        "languages": [
            "汉语"
        ],
        "schedule_url": "https://movie.douban.com/subject/24773958/cinema/",
        "pubdates": [
            "2016-08-26(南京站首映)",
            "2016-09-15(青奥体育公园)",
            "2018-05-18(中国大陆)"
        ],
        "website": "marvel.com/avengers",
        "tags": [
            "漫威",
            "超级英雄",
            "科幻",
            "美国",
            "2018",
            "漫画改编",
            "动作",
            "欧美",
            "经典",
            "奇幻"
        ],
        "has_schedule": true,
        "durations": [
            "\u4e00\u8f88\u5b50"
        ],
        "genres": [
            "爱情",
            "剧情",
            "奇幻",
            "动作",
            "冒险",
            "情色",
            "纪录片"
        ],
        "collection": null,
        "episodes_count": null,
        "has_ticket": true,
        "clip_urls": [],
        "current_season": null,
        "casts": [
            {
                "avatars": {
                    "small": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg",
                    "large": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg",
                    "medium": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg"
                },
                "name_en": "Qin Fan",
                "name": "\u79e6\u5e06",
                "alt": "https://movie.douban.com/celebrity/1048000/",
                "id": "qf2hy1314"
            },
            {
                "avatars": {
                    "small": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg",
                    "large": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg",
                    "medium": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg"
                },
                "name_en": "Huan Ying",
                "name": "\u5ba6\u76c8",
                "alt": "https://movie.douban.com/celebrity/1313866/",
                "id": "hy2qf1314"
            }
        ],
        "countries": [
            "中国"
        ],
        "mainland_pubdate": "2018-05-18",
        "summary": "\u8fd9\u91cc\u6ca1\u6709\u5fd7\u660e\u548c\u6625\u5a07\uff0c\u6ca1\u6709\u7f57\u5bc6\u6b27\u4e0e\u6731\u4e3d\u53f6\uff0c\u6ca1\u6709\u90ed\u9756\u548c\u9ec4\u84c9\uff0c\u6ca1\u6709\u6768\u8fc7\u4e0e\u5c0f\u9f99\u5973\uff0c\u53ea\u6709\u79e6\u5e06\u548c\u5ba6\u76c8\u3002\u201c\u6211\u4eec\u7684\u540d\u5b57\u597d\u50cf\u8fd8\u6709\u70b9\u6e0a\u6e90\u5462\u007e\u201d\uff0c\u4ece\u6211\u89c1\u5230\u4f60\u7684\u90a3\u4e00\u523b\uff0c\u6211\u4eec\u7684\u6545\u4e8b\u5c31\u5f00\u59cb\u4e86\uff1a\u6211\u4eec\u5728\u97f3\u4e50\u8282\u7684\u665a\u4e0a\u7b2c\u4e00\u6b21\u62e5\u62b1\uff0c\u5728\u676d\u5dde\u7684\u897f\u6e56\u8fb9\u4f9d\u504e\uff0c\u5728\u53a6\u95e8\u7684\u6c11\u5bbf\u91cc\u8de8\u5e74\uff0c\u5728\u9999\u6e2f\u7684\u8857\u5934\u5435\u67b6\uff0c\u5728\u91cd\u5e86\u7684\u706b\u9505\u5e97\u80e1\u5403\u6d77\u559d\uff0c\u5728\u571f\u8033\u5176\u7684\u70ed\u6c14\u7403\u4e0a\u4fef\u77b0\u5361\u5e15\u591a\u5947\u4e9a\uff0c\u5728\u65b0\u897f\u5170\u7684\u970d\u6bd4\u5c6f\u5b09\u620f\uff0c\u5728\u82ac\u5170\u7684\u5723\u8bde\u8001\u4eba\u6751\u770b\u6781\u5149\u002e\u002e\u002e\u5728\u6211\u4eec\u5bb6\u91cc\u5ea6\u8fc7\u6bcf\u4e00\u65e5\u6bcf\u4e00\u591c\uff0c\u6700\u540e\u5728\u6211\u4eec\u5b50\u5b59\u7684\u966a\u4f34\u4e0b\u5b89\u7136\u79bb\u5f00\u3002\u8fd9\u5c31\u662f\u6211\u4eec\u7684\u4e00\u751f\uff0c\u4e0d\u7ba1\u751f\u6d3b\u662f\u5e73\u6de1\u8fd8\u662f\u7cbe\u5f69\uff0c\u6211\u90fd\u613f\u610f\u8ddf\u4f60\u4e00\u8d77\u5ea6\u8fc7\uff0c\u6211\u7231\u4f60\uff01",
        "clips": [],
        "subtype": "movie",
        "directors": [
            {
                "avatars": {
                    "small": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg",
                    "large": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg",
                    "medium": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg"
                },
                "name_en": "Qin Fan",
                "name": "\u79e6\u5e06",
                "alt": "https://movie.douban.com/celebrity/1048000/",
                "id": "qf2hy1314"
            },
            {
                "avatars": {
                    "small": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg",
                    "large": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg",
                    "medium": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg"
                },
                "name_en": "Huan Ying",
                "name": "\u5ba6\u76c8",
                "alt": "https://movie.douban.com/celebrity/1313866/",
                "id": "hy2qf1314"
            }
        ],
        "comments_count": 1314,
        "ratings_count": 5201314,
        "aka": [
            "复联3",
            "复仇者联盟：无限之战(台)",
            "复仇者联盟3：无尽之战",
            "Avengers: Infinity War - Part I",
            "The Avengers 3: Part 1"
        ]
    }
})