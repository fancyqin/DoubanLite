// pages/movie/movie.js

const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie_in_theaters: [
            {
                "rating": {
                    "max": 10,
                    "average": 8.5,
                    "details": {
                        "1": 696,
                        "2": 1710,
                        "3": 12150,
                        "4": 36652,
                        "5": 38129
                    },
                    "stars": "45",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "动作",
                    "犯罪"
                ],
                "title": "红海行动",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1489386626.47.webp"
                        },
                        "name_en": "Yi Zhang",
                        "name": "张译",
                        "alt": "https://movie.douban.com/celebrity/1274761/",
                        "id": "1274761"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1458138265.51.webp"
                        },
                        "name_en": "Jingyu Huang",
                        "name": "黄景瑜",
                        "alt": "https://movie.douban.com/celebrity/1354442/",
                        "id": "1354442"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49399.webp"
                        },
                        "name_en": "Hai-Qing",
                        "name": "海清",
                        "alt": "https://movie.douban.com/celebrity/1272245/",
                        "id": "1272245"
                    }
                ],
                "durations": [
                    "138分钟"
                ],
                "collect_count": 261108,
                "mainland_pubdate": "2018-02-16",
                "has_video": false,
                "original_title": "红海行动",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1372934445.18.webp"
                        },
                        "name_en": "Dante Lam",
                        "name": "林超贤",
                        "alt": "https://movie.douban.com/celebrity/1275075/",
                        "id": "1275075"
                    }
                ],
                "pubdates": [
                    "2018-02-16(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514175916.webp"
                },
                "alt": "https://movie.douban.com/subject/26861685/",
                "id": "26861685"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "details": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": 0
                    },
                    "stars": "00",
                    "min": 0
                },
                "genres": [
                    "喜剧"
                ],
                "title": "翻滚吧姐妹",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519787701.92.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519787701.92.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519787701.92.webp"
                        },
                        "name_en": "Mingchao Feng",
                        "name": "冯铭潮",
                        "alt": "https://movie.douban.com/celebrity/1330862/",
                        "id": "1330862"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507520888.43.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507520888.43.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1507520888.43.webp"
                        },
                        "name_en": "Duo-na Zhao ",
                        "name": "赵多娜",
                        "alt": "https://movie.douban.com/celebrity/1320408/",
                        "id": "1320408"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512035444.96.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512035444.96.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1512035444.96.webp"
                        },
                        "name_en": "Meixing Chen",
                        "name": "陈美行",
                        "alt": "https://movie.douban.com/celebrity/1318068/",
                        "id": "1318068"
                    }
                ],
                "durations": [
                    "87分钟"
                ],
                "collect_count": 120,
                "mainland_pubdate": "2018-03-01",
                "has_video": false,
                "original_title": "翻滚吧姐妹",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519787683.64.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519787683.64.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519787683.64.webp"
                        },
                        "name_en": "Zheng Wang",
                        "name": "王钲",
                        "alt": "https://movie.douban.com/celebrity/1388371/",
                        "id": "1388371"
                    }
                ],
                "pubdates": [
                    "2018-03-01(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512835700.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512835700.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512835700.webp"
                },
                "alt": "https://movie.douban.com/subject/26898855/",
                "id": "26898855"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.1,
                    "details": {
                        "1": 2327,
                        "2": 6573,
                        "3": 34768,
                        "4": 38323,
                        "5": 11203
                    },
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动作",
                    "犯罪"
                ],
                "title": "唐人街探案2",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1356403251.95.webp"
                        },
                        "name_en": "Baoqiang Wang",
                        "name": "王宝强",
                        "alt": "https://movie.douban.com/celebrity/1274388/",
                        "id": "1274388"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473508881.63.webp"
                        },
                        "name_en": "Haoran Liu",
                        "name": "刘昊然",
                        "alt": "https://movie.douban.com/celebrity/1336305/",
                        "id": "1336305"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1518431956.11.webp"
                        },
                        "name_en": "Yang Xiao",
                        "name": "肖央",
                        "alt": "https://movie.douban.com/celebrity/1274979/",
                        "id": "1274979"
                    }
                ],
                "durations": [
                    "120分钟"
                ],
                "collect_count": 250745,
                "mainland_pubdate": "2018-02-16",
                "has_video": false,
                "original_title": "唐人街探案2",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1469073193.92.webp"
                        },
                        "name_en": "Sicheng Chen",
                        "name": "陈思诚",
                        "alt": "https://movie.douban.com/celebrity/1274763/",
                        "id": "1274763"
                    }
                ],
                "pubdates": [
                    "2018-02-16(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.webp"
                },
                "alt": "https://movie.douban.com/subject/26698897/",
                "id": "26698897"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 5.2,
                    "details": {
                        "1": 4181,
                        "2": 10922,
                        "3": 14151,
                        "4": 3616,
                        "5": 1014
                    },
                    "stars": "25",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "奇幻"
                ],
                "title": "捉妖记2",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33525.webp"
                        },
                        "name_en": "Tony Leung Chiu Wai",
                        "name": "梁朝伟",
                        "alt": "https://movie.douban.com/celebrity/1115918/",
                        "id": "1115918"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21559.webp"
                        },
                        "name_en": "Baihe Bai",
                        "name": "白百何",
                        "alt": "https://movie.douban.com/celebrity/1275542/",
                        "id": "1275542"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1452260519.76.webp"
                        },
                        "name_en": "Boran Jing",
                        "name": "井柏然",
                        "alt": "https://movie.douban.com/celebrity/1274628/",
                        "id": "1274628"
                    }
                ],
                "durations": [
                    "110分钟"
                ],
                "collect_count": 94186,
                "mainland_pubdate": "2018-02-16",
                "has_video": false,
                "original_title": "捉妖记2",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p42488.webp"
                        },
                        "name_en": "Raman Hui",
                        "name": "许诚毅",
                        "alt": "https://movie.douban.com/celebrity/1287124/",
                        "id": "1287124"
                    }
                ],
                "pubdates": [
                    "2018-02-16(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509643816.webp"
                },
                "alt": "https://movie.douban.com/subject/26575103/",
                "id": "26575103"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 4.8,
                    "details": {
                        "1": 1224,
                        "2": 1403,
                        "3": 1482,
                        "4": 407,
                        "5": 242
                    },
                    "stars": "25",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "奇幻"
                ],
                "title": "祖宗十九代",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p40756.webp"
                        },
                        "name_en": "Yun-peng Yue",
                        "name": "岳云鹏",
                        "alt": "https://movie.douban.com/celebrity/1317663/",
                        "id": "1317663"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p58967.webp"
                        },
                        "name_en": "Jing Wu",
                        "name": "吴京",
                        "alt": "https://movie.douban.com/celebrity/1000525/",
                        "id": "1000525"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1363935001.36.webp"
                        },
                        "name_en": "Xiubo Wu",
                        "name": "吴秀波",
                        "alt": "https://movie.douban.com/celebrity/1275317/",
                        "id": "1275317"
                    }
                ],
                "durations": [
                    "95分钟"
                ],
                "collect_count": 16900,
                "mainland_pubdate": "2018-02-16",
                "has_video": false,
                "original_title": "祖宗十九代",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6569.webp"
                        },
                        "name_en": "Degang Guo",
                        "name": "郭德纲",
                        "alt": "https://movie.douban.com/celebrity/1274305/",
                        "id": "1274305"
                    }
                ],
                "pubdates": [
                    "2018-02-16(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511560763.webp"
                },
                "alt": "https://movie.douban.com/subject/27114417/",
                "id": "27114417"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 4.7,
                    "details": {
                        "1": 3009,
                        "2": 3417,
                        "3": 3135,
                        "4": 1042,
                        "5": 473
                    },
                    "stars": "25",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "爱情",
                    "奇幻"
                ],
                "title": "西游记女儿国",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p49475.webp"
                        },
                        "name_en": "Aaron Kwok",
                        "name": "郭富城",
                        "alt": "https://movie.douban.com/celebrity/1041390/",
                        "id": "1041390"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36925.webp"
                        },
                        "name_en": "Shaofeng Feng",
                        "name": "冯绍峰",
                        "alt": "https://movie.douban.com/celebrity/1275721/",
                        "id": "1275721"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498822880.67.webp"
                        },
                        "name_en": "Liying Zhao",
                        "name": "赵丽颖",
                        "alt": "https://movie.douban.com/celebrity/1275620/",
                        "id": "1275620"
                    }
                ],
                "durations": [
                    "116分钟"
                ],
                "collect_count": 48258,
                "mainland_pubdate": "2018-02-16",
                "has_video": false,
                "original_title": "西游记女儿国",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1378782533.9.webp"
                        },
                        "name_en": "Pou-Soi Cheang",
                        "name": "郑保瑞",
                        "alt": "https://movie.douban.com/celebrity/1274240/",
                        "id": "1274240"
                    }
                ],
                "pubdates": [
                    "2018-02-16(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.webp"
                },
                "alt": "https://movie.douban.com/subject/25829175/",
                "id": "25829175"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 6.8,
                    "details": {
                        "1": 42,
                        "2": 136,
                        "3": 604,
                        "4": 459,
                        "5": 173
                    },
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动画",
                    "冒险"
                ],
                "title": "熊出没·变形记",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196460.57.webp"
                        },
                        "name_en": "Wei Zhang",
                        "name": "张伟",
                        "alt": "https://movie.douban.com/celebrity/1336920/",
                        "id": "1336920"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1451196097.21.webp"
                        },
                        "name_en": "Bingjun Zhang",
                        "name": "张秉君",
                        "alt": "https://movie.douban.com/celebrity/1336919/",
                        "id": "1336919"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1497954031.89.webp"
                        },
                        "name_en": "Xiao Tan",
                        "name": "谭笑",
                        "alt": "https://movie.douban.com/celebrity/1336930/",
                        "id": "1336930"
                    }
                ],
                "durations": [
                    "90分钟"
                ],
                "collect_count": 5061,
                "mainland_pubdate": "2018-02-16",
                "has_video": false,
                "original_title": "熊出没·变形记",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519556086.74.webp"
                        },
                        "name_en": "Liang Ding",
                        "name": "丁亮",
                        "alt": "https://movie.douban.com/celebrity/1336904/",
                        "id": "1336904"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1492836254.8.webp"
                        },
                        "name_en": "Huida Lin",
                        "name": "林汇达",
                        "alt": "https://movie.douban.com/celebrity/1336917/",
                        "id": "1336917"
                    }
                ],
                "pubdates": [
                    "2018-02-16(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506889386.webp"
                },
                "alt": "https://movie.douban.com/subject/27176717/",
                "id": "27176717"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 8.2,
                    "details": {
                        "1": 7,
                        "2": 36,
                        "3": 491,
                        "4": 1669,
                        "5": 939
                    },
                    "stars": "45",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "爱情"
                ],
                "title": "爱在记忆消逝前",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21169.webp"
                        },
                        "name_en": "Helen Mirren",
                        "name": "海伦·米伦",
                        "alt": "https://movie.douban.com/celebrity/1054390/",
                        "id": "1054390"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p47802.webp"
                        },
                        "name_en": "Donald Sutherland",
                        "name": "唐纳德·萨瑟兰",
                        "alt": "https://movie.douban.com/celebrity/1010556/",
                        "id": "1010556"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p12804.webp"
                        },
                        "name_en": "Janel Moloney",
                        "name": "简·默勒尼",
                        "alt": "https://movie.douban.com/celebrity/1027309/",
                        "id": "1027309"
                    }
                ],
                "durations": [
                    "112分钟"
                ],
                "collect_count": 5967,
                "mainland_pubdate": "2018-02-23",
                "has_video": false,
                "original_title": "The Leisure Seeker",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22206.webp"
                        },
                        "name_en": "Paolo Virzì",
                        "name": "保罗·维尔齐",
                        "alt": "https://movie.douban.com/celebrity/1032708/",
                        "id": "1032708"
                    }
                ],
                "pubdates": [
                    "2017-09-03(威尼斯电影节)",
                    "2018-01-25(意大利)",
                    "2018-02-23(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513341534.webp"
                },
                "alt": "https://movie.douban.com/subject/3036465/",
                "id": "3036465"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 0,
                    "details": {
                        "1": 0,
                        "2": 0,
                        "3": 0,
                        "4": 0,
                        "5": 0
                    },
                    "stars": "00",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动画",
                    "冒险"
                ],
                "title": "妈妈咪鸭",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495370690.02.webp"
                        },
                        "name_en": "Lu Zhao",
                        "name": "赵路",
                        "alt": "https://movie.douban.com/celebrity/1349631/",
                        "id": "1349631"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331168.87.webp"
                        },
                        "name_en": "Haodong Wu",
                        "name": "武皓栋",
                        "alt": "https://movie.douban.com/celebrity/1385413/",
                        "id": "1385413"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331194.34.webp"
                        },
                        "name_en": "Xiaoyu Yin",
                        "name": "殷筱瑜",
                        "alt": "https://movie.douban.com/celebrity/1350671/",
                        "id": "1350671"
                    }
                ],
                "durations": [
                    "90分钟"
                ],
                "collect_count": 368,
                "mainland_pubdate": "2018-03-09",
                "has_video": false,
                "original_title": "妈妈咪鸭",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331279.72.webp"
                        },
                        "name_en": "Rui Zhao",
                        "name": "赵锐",
                        "alt": "https://movie.douban.com/celebrity/1385830/",
                        "id": "1385830"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1513331306.63.webp"
                        },
                        "name_en": "Christopher Jenkins",
                        "name": "克里斯托弗·詹金斯",
                        "alt": "https://movie.douban.com/celebrity/1303136/",
                        "id": "1303136"
                    }
                ],
                "pubdates": [
                    "2018-03-09(中国大陆)",
                    "2018-04-20(美国)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515018270.webp"
                },
                "alt": "https://movie.douban.com/subject/26603666/",
                "id": "26603666"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 6.9,
                    "details": {
                        "1": 18,
                        "2": 67,
                        "3": 335,
                        "4": 204,
                        "5": 111
                    },
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动画",
                    "冒险"
                ],
                "title": "小马宝莉大电影",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1434886589.9.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1434886589.9.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1434886589.9.webp"
                        },
                        "name_en": "Uzo Aduba",
                        "name": "奥卓·阿杜巴",
                        "alt": "https://movie.douban.com/celebrity/1331706/",
                        "id": "1331706"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21481.webp"
                        },
                        "name_en": "Emily Blunt",
                        "name": "艾米莉·布朗特",
                        "alt": "https://movie.douban.com/celebrity/1041022/",
                        "id": "1041022"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517744935.96.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517744935.96.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1517744935.96.webp"
                        },
                        "name_en": "Ashleigh Ball",
                        "name": "阿什莉·鲍尔",
                        "alt": "https://movie.douban.com/celebrity/1388191/",
                        "id": "1388191"
                    }
                ],
                "durations": [
                    "99分钟",
                    "100分钟(中国大陆)"
                ],
                "collect_count": 1815,
                "mainland_pubdate": "2018-02-02",
                "has_video": false,
                "original_title": "My Little Pony: The Movie",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506145056.2.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506145056.2.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1506145056.2.webp"
                        },
                        "name_en": "Jayson Thiessen",
                        "name": "杰森·西森",
                        "alt": "https://movie.douban.com/celebrity/1380663/",
                        "id": "1380663"
                    }
                ],
                "pubdates": [
                    "2017-10-06(美国)",
                    "2018-02-02(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512418397.webp",
                    "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512418397.webp",
                    "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2512418397.webp"
                },
                "alt": "https://movie.douban.com/subject/26176481/",
                "id": "26176481"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.7,
                    "details": {
                        "1": 2001,
                        "2": 5437,
                        "3": 21319,
                        "4": 33676,
                        "5": 23728
                    },
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "爱情",
                    "战争"
                ],
                "title": "无问西东",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1359895311.0.webp"
                        },
                        "name_en": "Ziyi Zhang",
                        "name": "章子怡",
                        "alt": "https://movie.douban.com/celebrity/1041014/",
                        "id": "1041014"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1472787652.32.webp"
                        },
                        "name_en": "Xiaoming Huang",
                        "name": "黄晓明",
                        "alt": "https://movie.douban.com/celebrity/1041404/",
                        "id": "1041404"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1453574419.48.webp"
                        },
                        "name_en": "Chen Chang",
                        "name": "张震",
                        "alt": "https://movie.douban.com/celebrity/1077991/",
                        "id": "1077991"
                    }
                ],
                "durations": [
                    "138分钟"
                ],
                "collect_count": 227229,
                "mainland_pubdate": "2018-01-12",
                "has_video": false,
                "original_title": "无问西东",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19485.webp"
                        },
                        "name_en": "Fangfang Li",
                        "name": "李芳芳",
                        "alt": "https://movie.douban.com/celebrity/1313682/",
                        "id": "1313682"
                    }
                ],
                "pubdates": [
                    "2018-01-12(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507572275.webp"
                },
                "alt": "https://movie.douban.com/subject/6874741/",
                "id": "6874741"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.9,
                    "details": {
                        "1": 106,
                        "2": 757,
                        "3": 7473,
                        "4": 13624,
                        "5": 7144
                    },
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "传记",
                    "歌舞"
                ],
                "title": "马戏之王",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p22036.webp"
                        },
                        "name_en": "Hugh Jackman",
                        "name": "休·杰克曼",
                        "alt": "https://movie.douban.com/celebrity/1010508/",
                        "id": "1010508"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p20908.webp"
                        },
                        "name_en": "Michelle Williams",
                        "name": "米歇尔·威廉姆斯",
                        "alt": "https://movie.douban.com/celebrity/1049491/",
                        "id": "1049491"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p56613.webp"
                        },
                        "name_en": "Zac Efron",
                        "name": "扎克·埃夫隆",
                        "alt": "https://movie.douban.com/celebrity/1016676/",
                        "id": "1016676"
                    }
                ],
                "durations": [
                    "105分钟",
                    "106分钟(中国大陆)"
                ],
                "collect_count": 56479,
                "mainland_pubdate": "2018-02-01",
                "has_video": false,
                "original_title": "The Greatest Showman",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498127697.1.webp"
                        },
                        "name_en": "Michael Gracey",
                        "name": "迈克尔·格雷西",
                        "alt": "https://movie.douban.com/celebrity/1344735/",
                        "id": "1344735"
                    }
                ],
                "pubdates": [
                    "2017-12-20(美国)",
                    "2018-02-01(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511346392.webp"
                },
                "alt": "https://movie.douban.com/subject/3914513/",
                "id": "3914513"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 8.6,
                    "details": {
                        "1": 72,
                        "2": 338,
                        "3": 6353,
                        "4": 25264,
                        "5": 25535
                    },
                    "stars": "45",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "儿童",
                    "家庭"
                ],
                "title": "奇迹男孩",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1456737567.18.webp"
                        },
                        "name_en": "Jacob Tremblay",
                        "name": "雅各布·特伦布莱",
                        "alt": "https://movie.douban.com/celebrity/1332866/",
                        "id": "1332866"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p8889.webp"
                        },
                        "name_en": "Julia Roberts",
                        "name": "朱莉娅·罗伯茨",
                        "alt": "https://movie.douban.com/celebrity/1054532/",
                        "id": "1054532"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1383535512.2.webp"
                        },
                        "name_en": "Izabela Vidovic",
                        "name": "伊扎贝拉·维多维奇",
                        "alt": "https://movie.douban.com/celebrity/1335870/",
                        "id": "1335870"
                    }
                ],
                "durations": [
                    "113分钟",
                    "114分钟(中国大陆)"
                ],
                "collect_count": 116691,
                "mainland_pubdate": "2018-01-19",
                "has_video": false,
                "original_title": "Wonder",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p57551.webp"
                        },
                        "name_en": "Stephen Chbosky",
                        "name": "斯蒂芬·卓博斯基",
                        "alt": "https://movie.douban.com/celebrity/1070754/",
                        "id": "1070754"
                    }
                ],
                "pubdates": [
                    "2017-11-17(美国)",
                    "2018-01-19(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.webp",
                    "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.webp",
                    "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.webp"
                },
                "alt": "https://movie.douban.com/subject/26787574/",
                "id": "26787574"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.2,
                    "details": {
                        "1": 215,
                        "2": 1898,
                        "3": 18654,
                        "4": 20357,
                        "5": 4672
                    },
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "惊悚",
                    "恐怖"
                ],
                "title": "忌日快乐",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510538799.61.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510538799.61.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510538799.61.webp"
                        },
                        "name_en": "Jessica Rothe",
                        "name": "杰西卡·罗德",
                        "alt": "https://movie.douban.com/celebrity/1325899/",
                        "id": "1325899"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509274635.63.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509274635.63.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509274635.63.webp"
                        },
                        "name_en": "Israel Broussard",
                        "name": "伊瑟尔·布罗萨德",
                        "alt": "https://movie.douban.com/celebrity/1023036/",
                        "id": "1023036"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480857516.44.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480857516.44.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1480857516.44.webp"
                        },
                        "name_en": "Ruby Modine",
                        "name": "露比·莫迪恩",
                        "alt": "https://movie.douban.com/celebrity/1365373/",
                        "id": "1365373"
                    }
                ],
                "durations": [
                    "96分钟"
                ],
                "collect_count": 86098,
                "mainland_pubdate": "2018-02-02",
                "has_video": false,
                "original_title": "Happy Death Day",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18083.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18083.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18083.webp"
                        },
                        "name_en": "Christopher Landon",
                        "name": "克里斯托弗·兰登",
                        "alt": "https://movie.douban.com/celebrity/1032310/",
                        "id": "1032310"
                    }
                ],
                "pubdates": [
                    "2017-10-13(美国)",
                    "2018-02-02(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510057340.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510057340.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510057340.webp"
                },
                "alt": "https://movie.douban.com/subject/27027913/",
                "id": "27027913"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 6.9,
                    "details": {
                        "1": 292,
                        "2": 1266,
                        "3": 5407,
                        "4": 4579,
                        "5": 1395
                    },
                    "stars": "35",
                    "min": 0
                },
                "genres": [
                    "爱情",
                    "冒险"
                ],
                "title": "南极之恋",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30529.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30529.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p30529.webp"
                        },
                        "name_en": "Mark Chao",
                        "name": "赵又廷",
                        "alt": "https://movie.douban.com/celebrity/1274608/",
                        "id": "1274608"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1429449422.48.webp"
                        },
                        "name_en": "Zishan Yang",
                        "name": "杨子姗",
                        "alt": "https://movie.douban.com/celebrity/1312862/",
                        "id": "1312862"
                    }
                ],
                "durations": [
                    "115分钟"
                ],
                "collect_count": 33939,
                "mainland_pubdate": "2018-02-01",
                "has_video": false,
                "original_title": "南极之恋",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519709708.42.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519709708.42.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519709708.42.webp"
                        },
                        "name_en": "Youyin Wu",
                        "name": "吴有音",
                        "alt": "https://movie.douban.com/celebrity/1375623/",
                        "id": "1375623"
                    }
                ],
                "pubdates": [
                    "2018-02-01(中国大陆)"
                ],
                "year": "2018",
                "images": {
                    "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511935678.webp",
                    "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511935678.webp",
                    "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2511935678.webp"
                },
                "alt": "https://movie.douban.com/subject/26628329/",
                "id": "26628329"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 8.6,
                    "details": {
                        "1": 197,
                        "2": 839,
                        "3": 8162,
                        "4": 23407,
                        "5": 27161
                    },
                    "stars": "45",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "传记",
                    "动画"
                ],
                "title": "至爱梵高·星空之谜",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p43221.webp"
                        },
                        "name_en": "Douglas Booth ",
                        "name": "道格拉斯·布斯",
                        "alt": "https://movie.douban.com/celebrity/1314461/",
                        "id": "1314461"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554583.31.webp"
                        },
                        "name_en": "Robert Gulaczyk",
                        "name": "罗伯特·古拉奇克",
                        "alt": "https://movie.douban.com/celebrity/1376200/",
                        "id": "1376200"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1360941730.7.webp"
                        },
                        "name_en": "Eleanor Tomlinson",
                        "name": "埃莉诺·汤姆林森",
                        "alt": "https://movie.douban.com/celebrity/1275043/",
                        "id": "1275043"
                    }
                ],
                "durations": [
                    "95分钟"
                ],
                "collect_count": 110892,
                "mainland_pubdate": "2017-12-08",
                "has_video": false,
                "original_title": "Loving Vincent",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1393488180.49.webp"
                        },
                        "name_en": "Dorota Kobiela",
                        "name": "多洛塔·科别拉",
                        "alt": "https://movie.douban.com/celebrity/1326282/",
                        "id": "1326282"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498554460.64.webp"
                        },
                        "name_en": "Hugh Welchman",
                        "name": "休·韦尔什曼",
                        "alt": "https://movie.douban.com/celebrity/1306202/",
                        "id": "1306202"
                    }
                ],
                "pubdates": [
                    "2017-06-12(安锡动画电影节)",
                    "2017-10-13(英国)",
                    "2017-12-08(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.webp",
                    "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.webp",
                    "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2506935748.webp"
                },
                "alt": "https://movie.douban.com/subject/25837262/",
                "id": "25837262"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.4,
                    "details": {
                        "1": 29,
                        "2": 275,
                        "3": 2949,
                        "4": 3544,
                        "5": 1216
                    },
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "喜剧",
                    "动画",
                    "冒险"
                ],
                "title": "公牛历险记",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23477.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23477.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p23477.webp"
                        },
                        "name_en": "John Cena",
                        "name": "约翰·塞纳",
                        "alt": "https://movie.douban.com/celebrity/1044883/",
                        "id": "1044883"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1386531771.86.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1386531771.86.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1386531771.86.webp"
                        },
                        "name_en": "Kate McKinnon",
                        "name": "凯特·麦克金农",
                        "alt": "https://movie.douban.com/celebrity/1319532/",
                        "id": "1319532"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1516269761.38.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1516269761.38.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1516269761.38.webp"
                        },
                        "name_en": "Lily Day",
                        "name": "莉莉·戴",
                        "alt": "https://movie.douban.com/celebrity/1387308/",
                        "id": "1387308"
                    }
                ],
                "durations": [
                    "106分钟"
                ],
                "collect_count": 15994,
                "mainland_pubdate": "2018-01-19",
                "has_video": false,
                "original_title": "Ferdinand",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4833.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4833.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p4833.webp"
                        },
                        "name_en": "Carlos Saldanha",
                        "name": "卡洛斯·沙尔丹哈",
                        "alt": "https://movie.douban.com/celebrity/1009704/",
                        "id": "1009704"
                    }
                ],
                "pubdates": [
                    "2017-12-15(美国)",
                    "2018-01-19(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510825300.webp"
                },
                "alt": "https://movie.douban.com/subject/25846857/",
                "id": "25846857"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.2,
                    "details": {
                        "1": 92,
                        "2": 558,
                        "3": 3391,
                        "4": 3730,
                        "5": 1280
                    },
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "剧情"
                ],
                "title": "浪矢解忧杂货店",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10036.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10036.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p10036.webp"
                        },
                        "name_en": "Ryôsuke Yamada",
                        "name": "山田凉介",
                        "alt": "https://movie.douban.com/celebrity/1239272/",
                        "id": "1239272"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488797057.36.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488797057.36.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1488797057.36.webp"
                        },
                        "name_en": "Nijiro Murakami",
                        "name": "村上虹郎",
                        "alt": "https://movie.douban.com/celebrity/1342488/",
                        "id": "1342488"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p-nqsoaJdAVYcel_avatar_uploaded1488723495.23.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p-nqsoaJdAVYcel_avatar_uploaded1488723495.23.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p-nqsoaJdAVYcel_avatar_uploaded1488723495.23.webp"
                        },
                        "name_en": "Kan'ichiro Sato",
                        "name": "宽一郎",
                        "alt": "https://movie.douban.com/celebrity/1370121/",
                        "id": "1370121"
                    }
                ],
                "durations": [
                    "129分钟"
                ],
                "collect_count": 20520,
                "mainland_pubdate": "2018-02-02",
                "has_video": false,
                "original_title": "ナミヤ雑貨店の奇蹟",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19123.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19123.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p19123.webp"
                        },
                        "name_en": "Ryuichi Hiroki",
                        "name": "广木隆一",
                        "alt": "https://movie.douban.com/celebrity/1286685/",
                        "id": "1286685"
                    }
                ],
                "pubdates": [
                    "2017-09-23(日本)",
                    "2018-02-02(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511434383.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511434383.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511434383.webp"
                },
                "alt": "https://movie.douban.com/subject/26742730/",
                "id": "26742730"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 8.3,
                    "details": {
                        "1": 3,
                        "2": 29,
                        "3": 378,
                        "4": 1278,
                        "5": 761
                    },
                    "stars": "45",
                    "min": 0
                },
                "genres": [
                    "剧情",
                    "传记",
                    "历史"
                ],
                "title": "尼斯·疯狂的心",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1394950362.99.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1394950362.99.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1394950362.99.webp"
                        },
                        "name_en": "Glória Pires",
                        "name": "格劳瑞·皮尔丝",
                        "alt": "https://movie.douban.com/celebrity/1050510/",
                        "id": "1050510"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204774.95.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204774.95.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204774.95.webp"
                        },
                        "name_en": "Roberta Rodrigues",
                        "name": "罗伯特·罗德里格斯",
                        "alt": "https://movie.douban.com/celebrity/1208135/",
                        "id": "1208135"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515205080.37.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515205080.37.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515205080.37.webp"
                        },
                        "name_en": "Fernando Eiras",
                        "name": "费尔南多·埃拉斯",
                        "alt": "https://movie.douban.com/celebrity/1080482/",
                        "id": "1080482"
                    }
                ],
                "durations": [
                    "109分钟",
                    "108分钟(中国大陆)"
                ],
                "collect_count": 4089,
                "mainland_pubdate": "2018-01-05",
                "has_video": false,
                "original_title": "Nise - O Coração da Loucura",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204552.25.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204552.25.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515204552.25.webp"
                        },
                        "name_en": "Roberto Berliner",
                        "name": "罗伯托·柏林厄",
                        "alt": "https://movie.douban.com/celebrity/1278468/",
                        "id": "1278468"
                    }
                ],
                "pubdates": [
                    "2015-10-25(东京电影节)",
                    "2016-04-21(巴西)",
                    "2018-01-05(中国大陆)"
                ],
                "year": "2015",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509401725.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509401725.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2509401725.webp"
                },
                "alt": "https://movie.douban.com/subject/26631663/",
                "id": "26631663"
            },
            {
                "rating": {
                    "max": 10,
                    "average": 7.7,
                    "details": {
                        "1": 29,
                        "2": 239,
                        "3": 3123,
                        "4": 5281,
                        "5": 1949
                    },
                    "stars": "40",
                    "min": 0
                },
                "genres": [
                    "动作",
                    "冒险"
                ],
                "title": "太空救援",
                "casts": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368685365.9.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368685365.9.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1368685365.9.webp"
                        },
                        "name_en": "Vladimir Vdovichenkov",
                        "name": "弗拉季米尔·弗多维琴科夫",
                        "alt": "https://movie.douban.com/celebrity/1023442/",
                        "id": "1023442"
                    },
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416541847.87.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416541847.87.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416541847.87.webp"
                        },
                        "name_en": "Pavel Derevyanko",
                        "name": "帕维尔·杰列维扬科",
                        "alt": "https://movie.douban.com/celebrity/1194282/",
                        "id": "1194282"
                    },
                    {
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486282779.93.webp",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486282779.93.webp",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1486282779.93.webp"
                        },
                        "name_en": "Lyubov Aksyonova",
                        "name": "柳波芙·阿克肖诺娃",
                        "alt": "https://movie.douban.com/celebrity/1327850/",
                        "id": "1327850"
                    }
                ],
                "durations": [
                    "111分钟",
                    "103分钟(中国大陆)"
                ],
                "collect_count": 19379,
                "mainland_pubdate": "2018-01-12",
                "has_video": false,
                "original_title": "Салют-7",
                "subtype": "movie",
                "directors": [
                    {
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511446479.18.webp",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511446479.18.webp",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1511446479.18.webp"
                        },
                        "name_en": "Klim Shipenko",
                        "name": "克利姆·希片科",
                        "alt": "https://movie.douban.com/celebrity/1382988/",
                        "id": "1382988"
                    }
                ],
                "pubdates": [
                    "2017-10-05(俄罗斯)",
                    "2018-01-12(中国大陆)"
                ],
                "year": "2017",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.webp",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.webp",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2508922375.webp"
                },
                "alt": "https://movie.douban.com/subject/27073291/",
                "id": "27073291"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // let _this = this;
        // wx.request({
        //     url: 'https://api.douban.com/v2/movie/in_theaters',
        //     data:{
        //         apikey: app.globalData.apikey
        //     },
        //     header:{
        //         "Content-Type": "application/text"
        //     },
        //     dataType:'json',
        //     success: function (res) {
        //         _this.setData({
        //             movie_in_theaters: res.data.subjects
        //         })
                
        //     }
        // })
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