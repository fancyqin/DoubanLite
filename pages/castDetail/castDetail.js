// pages/castDetail/castDetail.js
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
        if (options.id === 'hy2qf1314'){
            this.hyData.detailLoading = false;
            _this.setData({ ...this.hyData });
            wx.setNavigationBarTitle({ title: this.hyData.name });
            return;
        }else if(options.id === 'qf2hy1314'){
            this.qfData.detailLoading = false;
            _this.setData({ ...this.qfData });
            wx.setNavigationBarTitle({ title: this.qfData.name });
            return;
        }
        wx.request({
            url: app.globalData.url + '/v2/movie/celebrity/' + Number(options.id.replace(/["]/g, '')),
            data: {
                apikey: app.globalData.apikey,
            },
            header: {
                "Content-Type": "application/text"
            },
            dataType: 'json',
            success: function (res) {
                app.ajaxFunc(res, () => {
                    console.log(JSON.stringify(res.data))
                    res.data.detailLoading = false;
                    _this.setData({ ...res.data });
                    wx.setNavigationBarTitle({ title: res.data.name });
                });

            }
        })
    },

    qfData: {
        "website": "",
        "mobile_url": "https://movie.douban.com/celebrity/1016681/mobile",
        "aka_en": [
            "Robert John Ford - Elias Jr.(本名)",
            "Bob(昵称)"
        ],
        "name": "\u79e6\u5e06",
        "works": [
            {
                "subject": {
                    "rating": {
                        "max": 10,
                        "average": 10,
                        "stars": "50",
                        "min": 0
                    },
                    "genres": [
                        "脱口秀"
                    ],
                    "title": "\u79e6\u5e06\u548c\u5ba6\u76c8",
                    "collect_count": 190,
                    "mainland_pubdate": "",
                    "has_video": false,
                    "original_title": "Love Story of Q and H",
                    "year": "2016",
                    "images": {
                        "small": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
                        "large": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
                        "medium": "http://p8jly0wx2.bkt.clouddn.com/love.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/qf2hy1314/",
                    "id": "qf2hy1314"
                }
            }
        ],
        "name_en": "Qin Fan",
        "gender": "男",
        "professions": [
            "导演",
            "演员"
        ],
        "avatars": {
            "small": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg",
            "large": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg",
            "medium": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg"
        },
        "summary": "神一样的男人，只爱宦盈~",
        "photos": [
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/qf1.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/qf.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/qf2.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/we.jpg",
            }
        ],
        "birthday": "1989-01-30",
        "aka": [
            "罗拔唐尼(港)",
            "小劳勃·道尼"
        ],
        "alt": "https://movie.douban.com/celebrity/1016681/",
        "born_place": "中国,新乡",
        "constellation": "水瓶座",
        "id": "1016681"
    },
    hyData: {
        "website": "",
        "mobile_url": "https://movie.douban.com/celebrity/1016681/mobile",
        "aka_en": [
            "Robert John Ford - Elias Jr.(本名)",
            "Bob(昵称)"
        ],
        "name": "\u5ba6\u76c8",
        "works": [
            {
                "subject": {
                    "rating": {
                        "max": 10,
                        "average": 10,
                        "stars": "50",
                        "min": 0
                    },
                    "genres": [
                        "脱口秀"
                    ],
                    "title": "\u79e6\u5e06\u548c\u5ba6\u76c8",
                    "collect_count": 190,
                    "mainland_pubdate": "",
                    "has_video": false,
                    "original_title": "Love Story of Q and H",
                    "year": "2016",
                    "images": {
                        "small": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
                        "large": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
                        "medium": "http://p8jly0wx2.bkt.clouddn.com/love.jpg"
                    },
                    "alt": "https://movie.douban.com/subject/qf2hy1314/",
                    "id": "qf2hy1314"
                }
            }
        ],
        "name_en": "Huan Ying",
        "gender": "女",
        "professions": [
            "导演",
            "演员"
        ],
        "avatars": {
            "small": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg",
            "large": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg",
            "medium": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg"
        },
        "summary": "宇宙无敌可爱美丽善良小公举",
        "photos": [
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/hy.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/hy1.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/hy2.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/love.jpg",
            },
            {
                "image": "http://p8jly0wx2.bkt.clouddn.com/we.jpg",
            }
        ],
        "birthday": "1993-02-16",
        "aka": [
            "罗拔唐尼(港)",
            "小劳勃·道尼"
        ],
        "alt": "https://movie.douban.com/celebrity/1016681/",
        "born_place": "中国,南京",
        "constellation": "水瓶座",
        "id": "1016681"
    }
})