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
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2517753454.jpg"
        },
        "douban_site": "",
        "year": "2016",
        "popular_comments": [
            {
                "rating": {
                    "max": 5,
                    "value": 0,
                    "min": 0
                },
                "useful_count": 173,
                "author": {
                    "uid": "aquqmarine",
                    "avatar": "https://img1.doubanio.com/icon/u3439511-8.jpg",
                    "signature": "Let's cross over.",
                    "alt": "https://www.douban.com/people/aquqmarine/",
                    "id": "3439511",
                    "name": "Chloé "
                },
                "subject_id": "24773958",
                "content": "下一部：《复仇者联盟：逆转未来》",
                "created_at": "2018-04-26 04:37:55",
                "id": "1364086114"
            },
            {
                "rating": {
                    "max": 5,
                    "value": 4,
                    "min": 0
                },
                "useful_count": 299,
                "author": {
                    "uid": "kejinlong",
                    "avatar": "https://img3.doubanio.com/icon/u37507203-102.jpg",
                    "signature": "你在干么呢？",
                    "alt": "https://www.douban.com/people/kejinlong/",
                    "id": "37507203",
                    "name": "有意识的贱人"
                },
                "subject_id": "24773958",
                "content": "一直以为自己是漫威的路人，但看完《复联3》才知道漫威最强大的地方就是把每个人物都润物无声写进了你的心里，好几处泪眼婆娑。真的不要被剧透，这样你会多几次虐心，因为你不知道挂的究竟是谁。第一次看完漫威心情如此的down…节奏、视觉、情感全部被照顾到了！无限期待《复联4》！！！",
                "created_at": "2018-04-25 13:26:38",
                "id": "1363761334"
            },
            {
                "rating": {
                    "max": 5,
                    "value": 5,
                    "min": 0
                },
                "useful_count": 611,
                "author": {
                    "uid": "hscolumbia",
                    "avatar": "https://img3.doubanio.com/icon/u45461378-6.jpg",
                    "signature": "",
                    "alt": "https://www.douban.com/people/hscolumbia/",
                    "id": "45461378",
                    "name": "Blacksheepist"
                },
                "subject_id": "24773958",
                "content": "居然没有让Samuel Jackson说完Motherfucker就让他领饭盒了！！",
                "created_at": "2018-04-25 20:50:35",
                "id": "1213985005"
            },
            {
                "rating": {
                    "max": 5,
                    "value": 3,
                    "min": 0
                },
                "useful_count": 554,
                "author": {
                    "uid": "cn_panda",
                    "avatar": "https://img1.doubanio.com/icon/u2561289-8.jpg",
                    "signature": "",
                    "alt": "https://www.douban.com/people/cn_panda/",
                    "id": "2561289",
                    "name": "摩诃曼珠沙华"
                },
                "subject_id": "24773958",
                "content": "景甜出场的那一瞬间真的太震撼了，打趴下灭霸的时候全场都起立鼓掌了，美队把自己的盾牌给了景甜希望她能做下一任美国队长，景甜拒绝了并且亮出了胸口的红旗说i am Chinese! 电影院里掌声久久不息…",
                "created_at": "2018-04-27 16:50:29",
                "id": "1364732206"
            }
        ],
        "alt": "https://movie.douban.com/subject/24773958/",
        "id": "24773958",
        "mobile_url": "https://movie.douban.com/subject/24773958/mobile",
        "photos_count": 1387,
        "pubdate": "2018-05-11",
        "title": "\u79e6\u5e06\u548c\u5ba6\u76c8\u7684\u7231\u60c5\u6545\u4e8b",
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
                    "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                    "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg",
                    "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56339.jpg"
                },
                "name_en": "Robert Downey Jr.",
                "name": "小罗伯特·唐尼",
                "alt": "https://movie.douban.com/celebrity/1016681/",
                "id": "1016681"
            },
            {
                "avatars": {
                    "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg",
                    "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg",
                    "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4053.jpg"
                },
                "name_en": "Chris Hemsworth",
                "name": "克里斯·海姆斯沃斯",
                "alt": "https://movie.douban.com/celebrity/1021959/",
                "id": "1021959"
            },
            {
                "avatars": {
                    "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                    "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg",
                    "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359877729.49.jpg"
                },
                "name_en": "Chris Evans",
                "name": "克里斯·埃文斯",
                "alt": "https://movie.douban.com/celebrity/1017885/",
                "id": "1017885"
            },
            {
                "avatars": {
                    "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15885.jpg",
                    "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15885.jpg",
                    "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p15885.jpg"
                },
                "name_en": "Mark Ruffalo",
                "name": "马克·鲁弗洛",
                "alt": "https://movie.douban.com/celebrity/1040505/",
                "id": "1040505"
            }
        ],
        "countries": [
            "中国"
        ],
        "mainland_pubdate": "2018-05-18",
        "summary": "《复仇者联盟3：无限战争》是漫威电影宇宙10周年的历史性集结，将为影迷们带来史诗版的终极对决。面对灭霸突然发起的闪电袭击，复仇者联盟及其所有超级英雄盟友必须全力以赴，才能阻止他对全宇宙造成毁灭性的打击。",
        "clips": [],
        "subtype": "movie",
        "directors": [
            {
                "avatars": {
                    "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg",
                    "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg",
                    "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51466.jpg"
                },
                "name_en": "Anthony Russo",
                "name": "安东尼·罗素",
                "alt": "https://movie.douban.com/celebrity/1321812/",
                "id": "1321812"
            },
            {
                "avatars": {
                    "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                    "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg",
                    "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525505053.79.jpg"
                },
                "name_en": "Joe Russo",
                "name": "乔·罗素",
                "alt": "https://movie.douban.com/celebrity/1320870/",
                "id": "1320870"
            }
        ],
        "comments_count": 9371,
        "ratings_count": 22807,
        "aka": [
            "复联3",
            "复仇者联盟：无限之战(台)",
            "复仇者联盟3：无尽之战",
            "Avengers: Infinity War - Part I",
            "The Avengers 3: Part 1"
        ]
    }
})