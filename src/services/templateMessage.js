let sendCategoriesTemplate = () =>{
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Men Collections",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3497/image?unique=b8af013",
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/category/men-9",
                                "title": "View on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Men Collections",
                                "payload": "MEN_COLLECTIONS"
                            }
                        ]
                    },
                    {
                        "title": "Women Collections",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3508/image?unique=ac18d37",
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/category/women-1",
                                "title": "View on Website"
                            }, {
                                "type": "postback",
                                "title": "Women Collections",
                                "payload": "WOMEN_COLLECTIONS"
                            }
                        ]
                    },
                    {
                        "title": "Boy Collections(Kid) 👦",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3515/image?unique=52c280f",
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/category/boys-105",
                                "title": "View on Website"
                            }, {
                                "type": "postback",
                                "title": "Boy Collections",
                                "payload": "BOY_COLLECTIONS"
                            }
                        ]
                    },
                    {
                        "title": "Girl Collections(Kid) 👧",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3479/image?unique=caf5d86",
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/category/girls-106",
                                "title": "View on Website"
                            }, {
                                "type": "postback",
                                "title": "Girl Collections",
                                "payload": "GIRL_COLLECTIONS"
                            }
                        ]
                    }
                ]
            }
        }
    };
};

let sendLookupOrderTemplate = () =>{
    return {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"button",
                "text":"OK. Let's set info about your order, so I won't need to ask for them in the future.",
                "buttons":[
                    {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_ORDER}`,
                        "title": "Set info",
                        "webview_height_ratio": "tall",
                        "messenger_extensions": true //false: open the webview in new tab
                    },
                    {
                        "type": "postback",
                        "title": "Main menu",
                        "payload": "BACK_TO_MAIN_MENU"
                    }
                ]
            }
        }
    };
};

let backToMainMenuTemplate = ()=>{
    return {
        "text": "What can I do to help you today?",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "Categories",
                "payload": "CATEGORIES",
            },
            {
                "content_type": "text",
                "title": "Talk to an agent",
                "payload": "TALK_AGENT",
            },
        ]
    };
};

let orderItem = () => {
    return {
        "text": "If you want to buy this item or ask about this item, click the button below please!",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "Talk to an agent",
                "payload": "TALK_AGENT",
            },
        ]
    };
}

let showLocation = () => {
    return {
        "text": "Choose your destination 📌!",
        "quick_replies": [
            {
                "content_type": "text",
                "title": "Yangon",
                "payload": "YANGON",
            },
            {
                "content_type": "text",
                "title": "Mandalay",
                "payload": "MANDALAY",
            },
            {
                "content_type": "text",
                "title": "Nay Pyi Taw",
                "payload": "NAY_PYI_TAW",
            },
            {
                "content_type": "text",
                "title": "Moneywa",
                "payload": "MONEYWA",
            },
            {
                "content_type": "text",
                "title": "Mawlamyine",
                "payload": "MAWLAMYINE",
            },
            {
                "content_type": "text",
                "title": "Pathein",
                "payload": "PATHEIN",
            },
            {
                "content_type": "text",
                "title": "Taung Gyi",
                "payload": "TAUNG_GYI",
            }
        ]
    };
}

let setInfoOrderTemplate = ()=>{
    return {
        "attachment":{
            "type":"template",
            "payload":{
                "template_type":"button",
                "text":"We're checking your order. We will send you a message when the process is complete." +
                    "\nThank you!",
                "buttons":[
                    {
                        "type": "postback",
                        "title": "Main menu",
                        "payload": "BACK_TO_MAIN_MENU"
                    }
                ]
            }
        }
    };
};

let sendMenTemplate1To9 = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Raglan Sleeve Sport Tee",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3497/image?unique=b8af013",
                        "subtitle": "Prize: 16,000 Ks, Size: S,M,L,XL,XXL, Color: Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/cst22497-3497?category=9&search=CST22497",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CST22497_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/cst22497-3497?category=9&search=CST22497",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Men Hoodie Jacket",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3511/image?unique=1a2c894",
                        "subtitle": "Prize: 32,000 Ks, Size: S,M,L,XL,XXL, Color: Grey, Olive Green,Maroon",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yj112513-3511?category=9&search=YJ112513",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YJ112513_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yj112513-3511?category=9&search=YJ112513",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Plane T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3514/image/300x300?unique=51a7c69",
                        "subtitle": "Prize: 15,000 KS, Size: S,M,L,XL,XXL, Color: White, Grey,Dark Grey,Maroon",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yt212299-3514?category=9&search=YT212299",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YT212299_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yt212299-3514?category=9&search=YT212299",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    //https://www.thegenerationonline.com/web/image/product.images/7774/image?unique=264d161
                    {
                        "title": "Raglan Sleeve T-Shirt",
                        "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121495784_2406174463023390_5351602961987859397_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_eui2=AeEUOBzS6uw2kV80fW3SVaoaSu60TOjca5RK7rRM6NxrlD6rVZvJV4fIn6t3QdNK8KPy2v4GGS1VCAiAk6hA5V-X&_nc_ohc=l3aXiHbLijsAX-Ufoht&_nc_ht=scontent.frgn10-1.fna&oh=869206f1f8d288960e2caa88ead465f4&oe=5FAD3FDA",
                        "subtitle": "Prize: 17,000 Ks, Size: S,M,L,XL,XXL, Color: Dark Grey,Brown,Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/ct12297-3523?category=9&search=CT12297",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CT12297_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/ct12297-3523?category=9&search=CT12297",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Raglan Sleeve T-Shirt",
                        "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121170560_2406182986355871_8576274141452287365_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_eui2=AeFh32W59I1Jx_5-tRxyffTwDsT7d6G9m-kOxPt3ob2b6cSLqUttLVBGjq7myX78j-V-eWHQfGCgkyqsXFPMi5Rb&_nc_ohc=7B8DGTk7uioAX_wrZo8&_nc_ht=scontent.frgn10-1.fna&oh=fe224f06042be9566d24c4ab9076e575&oe=5FAD8EBA",
                        "subtitle": "Prize: 15,000 Ks, Size: S,M,L,XL,XXL, Color: Brick Red,Dark Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yt212301-3465?category=9&search=YT212301",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YT212301_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yt212301-3465?category=9&search=YT212301",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Cotton Long Sleeve T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3464/image?unique=87fa0bf",
                        "subtitle": "Prize: 31,000 KS, Size: S,M,L,XL,XXL, Color: White,Navy",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yh112442-3464?category=9&search=YH112442",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YH112442_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yh112442-3464?category=9&search=YH112442",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Printed T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3466/image?unique=81c555c",
                        "subtitle": "Prize: 15,000 Ks, Size: S,M,L,XL,XXL, Color: Olive Green, Grey,Maroon",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yt212710-3466?category=9&search=YT212710",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YT212710_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yt212710-3466?category=9&search=YT212710",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Printed T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3467/image?unique=17e4d0c",
                        "subtitle": "Prize: 15,000 Ks, Size: S,M,L,XL,XXL, Color: Olive Green,Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yt212787-3467?category=9&search=YT212787",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YT212787_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yt212787-3467?category=9&search=YT212787",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Cotton T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3468/image?unique=b85bec1",
                        "subtitle": "Prize: 15,000 Ks, Size: S,M,L,XL,XXL, Color: Light Green, Light Khaki, Dark Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yt212819-3468?category=9&search=YT212819",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YT212819_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yt212819-3468?category=9&search=YT212819",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Want to look more?",
                        "image_url": "https://static.wixstatic.com/media/a74d7d_6ba71a5fa7394b3f9f44e6ec32369143.jpg",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Look More",
                                "payload": "MEN_MORE_9"
                            },
                        ]
                    },
                ]
            }
        }
    };
};

let sendMenTemplate10To18 = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Sweat Hood Jacket",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/2991/image?unique=e1916fb",
                        "subtitle": "Prize: 32,000 ks, Size: S,M,L,XL,XXL, Color: Light Grey, Dark Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/csj12430-2991?category=9&search=CSJ12430",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CSJ12430_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/csj12430-2991?category=9&search=CSJ12430",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sport Hoodie Sweatshirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.images/6887/image?unique=5811179",
                        "subtitle": "Prize: 33,000 Ks, Size: S,M,L,XL,XXL, Color: Light Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/csj12423-3103?category=9&search=CSJ12423",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CSJ12423_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/csj12423-3103?category=9&search=CSJ12423",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Men's Cotton Sweat Jacket",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3374/image?unique=7302aff",
                        "subtitle": "Prize: 33,000 Ks, Size: S,M,L,XL,XXL, Color: Black,Light Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/csj12451-3374?category=9&search=CSJ12451",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CSJ12451_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/csj12451-3374?category=9&search=CSJ12451",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Men's Hoodie Jacket",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3372/image?unique=df38e4f",
                        "subtitle": "Prize: 33,000 Ks, Size: S,M,L,XL,XXL, Color: Black, Light Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/csj12428-3372?category=9&search=CSJ12428",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CSJ12428_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/csj12428-3372?category=9&search=CSJ12428",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Men Slim Fit Denim",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3551/image/300x300?unique=052cdd1",
                        "subtitle": "Prize: 27,000 Ks, Size: 28,29,30,31,32,33,34,36, Color: Jean Blue",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/cpj2035-3551?category=9&search=CPJ2035",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CPJ2035_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/cpj2035-3551?category=9&search=CPJ2035",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Skinny Regular Denim",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/2994/image/300x300?unique=7d237d3",
                        "subtitle": "Prize: 27,000 Ks, Size: 28,29,30,31,32,33,34,36, Color: Jean Blue",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/cpj2479-2994?category=9&search=CPJ2479",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CPJ2479_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/cpj2479-2994?category=9&search=CPJ2479",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Men Skinny Denim",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3069/image?unique=d355e60",
                        "subtitle": "Prize: 27,000 Ks, Size: 28,29,30,31,32,33,34,36, Color: Jean Blue",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/cpj2480-3069?category=9&search=CPJ2480",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CPJ2480_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/cpj2480-3069?category=9&search=CPJ2480",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Skinny Regular Denim",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3074/image/300x300?unique=b5e5b6b",
                        "subtitle": "Prize: 27,000 Ks, Size: 28,29,30,31,32,33,34,36, Color: Jean Blue",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/cpj2482-3074?category=9&search=CPJ2482",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CPJ2482_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/cpj2482-3074?category=9&search=CPJ2482",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Cotton Stripes Short Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3349/image?unique=beb1e5f",
                        "subtitle": "Prize: 19,000 Ks, Size: S,M,L,XL,XXL, Color: Blue,Dark Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yp212546-3349?category=9&search=YP212546",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YP212546_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yp212546-3349?category=9&search=YP212546",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Want to look more?",
                        "image_url": "https://static.wixstatic.com/media/a74d7d_6ba71a5fa7394b3f9f44e6ec32369143.jpg",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Look More",
                                "payload": "MEN_MORE_18"
                            },
                        ]
                    },
                ]
            }
        }
    };
};

let sendMenTemplate19To22 = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Stripes Cotton Short Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3419/image?unique=238e9b0",
                        "subtitle": "Prize: 18,000 Ks, Size: S,M,L,XL,XXL, Color: Navy,Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/yp212482-3419?category=9&search=YP212482",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "YP212482_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/yp212482-3419?category=9&search=YP212482",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Men Sport Short Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/2852/image?unique=3efdf03",
                        "subtitle": "Prize: 22,000 Ks, Size: S,M,L,XL,XXL, Color: Light Grey, Dark Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/csp22439-2852?category=9&search=CSP22439",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CSP22439_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/csp22439-2852?category=9&search=CSP22439",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Sport Short Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.images/6902/image?unique=7529de6",
                        "subtitle": "Prize: 20,000 Ks, Size: S,M,L,XL,XXL, Color: Dark Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/csp22329-3107?category=9&search=CSP22329",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CSP22329_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/csp22329-3107?category=9&search=CSP22329",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Men's Sport Short Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3247/image?unique=d9581c5",
                        "subtitle": "Prize: 20,000 Ks, Size: S,M,L,XL,XXL, Color: Light Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/csp22793-3247?category=9&search=CSP22793",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "CSP22793_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/csp22793-3247?category=9&search=CSP22793",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    }
                ]
            }
        }
    };
};

let sendWomenTemplate2To10 = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Cotton Hoodie Jacket",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3508/image?unique=ac18d37",
                        "subtitle": "Prize: 30,000 Ks, Size: S,M,L,XL,XXL, Color: Black,Grey,Olive Green,Maroon",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xj112514-3508?category=1&search=XJ112514",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XJ112514_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xj112514-3508?category=1&search=XJ112514",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Woman Striped V-neck Tee",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3509/image?unique=fb4a4bc",
                        "subtitle": "Prize: 12,000 Ks, Size: S,M,L,XL,XXL, Color: Light Green",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xt212293-3509?category=1&search=XT212293",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XT212293_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xt212293-3509?category=1&search=XT212293",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Woman Straight Cut Tee",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.images/7847/image?unique=2517504",
                        "subtitle": "Prize: 12,000 Ks, Size: S,M,L,XL,XXL, Color: Yellow,Black,Maroon,Light Green",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xt212571-3510?category=1&search=XT212571",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XT212571_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xt212571-3510?category=1&search=XT212571",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Straight Cut Tee",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3512/image?unique=5015192",
                        "subtitle": "Prize: 12,000 Ks, Size: S,M,L,XL,XXL, Color: Dark Green, Light Green, Grey,Light Khaki",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xt212785-3512?category=1&search=XT212785",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XT212785_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xt212785-3512?category=1&search=XT212785",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Raglan Sleeve T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3524/image?unique=2d65791",
                        "subtitle": "Prize: 14,000 Ks, Size: S,M,L,XL,XXL, Color: Dark Grey,Brown,Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/gt12298-3524?category=1&search=GT12298",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "GT12298_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/gt12298-3524?category=1&search=GT12298",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Women Chino Jacket",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3138/image?unique=37cca1b",
                        "subtitle": "Prize: 33,000 Ks, Size: S,M,L,XL,XXL, Color: Light Blue, Light Green,Brown",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xj112458-3138?category=1&search=XJ112458",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XJ112458_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xj112458-3138?category=1&search=XJ112458",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Cotton Long Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3492/image?unique=73298e7",
                        "subtitle": "Prize: 18,000 Ks, Size: S,M,L,XL,XXL, Color: Black,Maroon",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xp112495-3492?category=1&search=XP112495",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XP112495_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xp112495-3492?category=1&search=XP112495",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Straight Cut T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3461/image?unique=a4b0212",
                        "subtitle": "Prize: 12,000 Ks, Size: S,M,L,XL,XXL, Color: Olive Green, Yellow",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xt212711-3461?category=1&search=XT212711",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XT212711_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xt212711-3461?category=1&search=XT212711",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Printed T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3462/image?unique=6640622",
                        "subtitle": "Prize: 12,000 Ks, Size: S,M,L,XL, Color: Olive Green,Light Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xt212786-3462?category=1&search=XT212786",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XT212786_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xt212786-3462?category=1&search=XT212786",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Want to look more?",
                        "image_url": "https://static.wixstatic.com/media/a74d7d_6ba71a5fa7394b3f9f44e6ec32369143.jpg",
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Look More",
                                "payload": "WOMEN_MORE_9"
                            },
                        ]
                    },
                ]
            }
        }
    };
};

let sendWomenTemplate11To15 = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Cotton T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.images/7627/image?unique=928036e",
                        "subtitle": "Prize: 12,000 Ks, Size: S,M,L,XL,XXL, Color: Light Green,Khaki",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/xt212820-3463?category=1&search=XT212820",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "XT212820_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/xt212820-3463?category=1&search=XT212820",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Hoodie Dress",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3550/image?unique=48c6e6b",
                        "subtitle": "Prize: 19,000 Ks, Size: S,M,L,XL,XXL, Color: Khaki,Blue Green",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/gd22760-3550?category=1&search=GD22760",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "GD22760_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/gd22760-3550?category=1&search=GD22760",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Floral Viscose Long Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3541/image?unique=d508a50",
                        "subtitle": "Prize: 18,000 Ks, Size: S,M,L,XL,XXL, Color: Black, Navy",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/gp12629-3541?category=1&search=GP12629",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "GP12629_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/gp12629-3541?category=1&search=GP12629",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Floral Cotton Long Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3540/image?unique=655e0b1",
                        "subtitle": "Prize: 18,000 Ks, Size: S,M,L,XL,XXL, Color: Navy",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/gp12627-3540?category=1&search=GP12627",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "GP12627_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/gp12627-3540?category=1&search=GP12627",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Floral Viscose Long Pant",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3539/image?unique=14f3108",
                        "subtitle": "Prize: 18,000 Ks, Size: S,M,L,XL,XXL, Color: Black,Navy",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/gp12626-3539?category=1&search=GP12626",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "GP12626_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/gp12626-3539?category=1&search=GP12626",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    }
                ]
            }
        }
    };
};

let sendBoyTemplate = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Boy Long Sleeve T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3515/image?unique=52c280f",
                        "subtitle": "Prize: 12,000 Ks, Size: 3,5,7,9,11, Color: Olive Green,Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kb10600-3515?category=105&search=KB10600",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KB10600_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kb10600-3515?category=105&search=KB10600",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Boy T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3517/image?unique=4af982b",
                        "subtitle": "Prize: 10,000 Ks, Size: 3,5,7,9,11, Color: Blue,Olive Green",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kb20724-3517?category=105&search=KB20724",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KB20724_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kb20724-3517?category=105&search=KB20724",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Boy T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3519/image?unique=3f6f113",
                        "subtitle": "Prize: 10,000 KS, Size: 3,5,7,9,11, Color: Yellow,Olive Green",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kb20898-3519?category=105&search=KB20898",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KB20898_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kb20898-3519?category=105&search=KB20898",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Boy T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3520/image?unique=3a4d42d",
                        "subtitle": "Prize: 10,000 Ks, Size: 3,5,7,9,11, Color: Dark Yellow",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kb20901-3520?category=105&search=KB20901",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KB20901_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kb20901-3520?category=105&search=KB20901",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Boy T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.images/7770/image?unique=4c51676",
                        "subtitle": "Prize: 10,000 Ks, Size: 3,5,7,9,11, Color: Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kb20903-3521?category=105&search=KB20903",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KB20903_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kb20903-3521?category=105&search=KB20903",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Boy T-Shirt",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.images/7772/image?unique=c58223a",
                        "subtitle": "Prize: 10,000 Ks, Size: 3,5,7,9,11, Color: Olive Green,Mirage Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kb20910-3522?category=105&search=KB20910",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KB20910_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kb20910-3522?category=105&search=KB20910",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    }
                ]
            }
        }
    };
};

let sendGirlTemplate = () => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Girl's Raglan Sleeve Tee",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3478/image/300x300?unique=9780e0e",
                        "subtitle": "Prize: 10,000 Ks, Size: 3,5,7,9,11, Color: Brown,Orange,White",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kg20880-3478?category=106&search=KG20880",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KG20880_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kg20880-3478?category=106&search=KG20880",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Girl Stripes Tee",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3477/image/300x300?unique=25af6f8",
                        "subtitle": "Prize: 10,000 Ks, Size: 3,5,7,9,11, Color: Pink",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kg20787-3477?category=106&search=KG20787",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KG20787_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kg20787-3477?category=106&search=KG20787",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Girl's Stripes Top",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3479/image?unique=caf5d86",
                        "subtitle": "Prize: 14,000Ks, Size: 3,5,7,9,11, Color: Black,Yellow",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kgh20843-3479?category=106&search=KGH20843",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KGH20843_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kgh20843-3479?category=106&search=KGH20843",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Girl Jersey Top",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.images/7663/image?unique=c8330c9",
                        "subtitle": "Prize: 14,000 Ks, Size: 3,5,7,9,11, Color: Pink,Purple",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kgh20847-3480?category=106&search=KGH20847",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KGH20847_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kgh20847-3480?category=106&search=KGH20847",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Girl's Polo Dress",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3481/image?unique=2ece211",
                        "subtitle": "Prize: 18,000 Ks, Size: 3,5,7,9,11, Color: Yellow,Navy",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kgl20838-3481?category=106&search=KGL20838",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KGL20838_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kgl20838-3481?category=106&search=KGL20838",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Girl's Dress",
                        "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121335224_2406439029663600_2862845875492684115_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeGP64JaVtmnawfyJkgLHI8c4k19GEeWiJbiTX0YR5aIlmIsD-CVCnRrqvMktJPCP6mTvxSWHww3IwtXxW_fy6De&_nc_ohc=ifGycDO7rwsAX-JYEeT&_nc_ht=scontent.frgn10-1.fna&oh=cc70b2576e76e8038b450649d9825194&oe=5FACC442",
                        "subtitle": "Prize: 15,000 Ks, Size: 3,5,7,9,11, Color: Dark Yellow,Grey",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/product/kgl20838-3481?category=106&search=KGL20838",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KGL30846_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/product/kgl20838-3481?category=106&search=KGL20838",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    },
                    {
                        "title": "Girl's Stripes Dress",
                        "image_url": "https://www.thegenerationonline.com/web/image/product.template/3482/image?unique=dfb2e67",
                        "subtitle": "Prize: 17,000 Ks, Size: 3,5,7,9,11, Color: White/Black",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://www.thegenerationonline.com/shop/category/girls-106?search=KGL30836",
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Detail",
                                "payload": "KGL30836_DETAIL"
                            },
                            {
                                "type": "web_url",
                                "url": "https://www.thegenerationonline.com/shop/category/girls-106?search=KGL30836",
                                "title": "Buy on Website"
                            },
                            {
                                "type": "postback",
                                "title": "Main menu",
                                "payload": "BACK_TO_MAIN_MENU"
                            }
                        ]
                    }
                ]
            }
        }
    };
};

module.exports = {
    sendCategoriesTemplate: sendCategoriesTemplate,
    sendLookupOrderTemplate: sendLookupOrderTemplate,
    backToMainMenuTemplate: backToMainMenuTemplate,
    setInfoOrderTemplate: setInfoOrderTemplate,
    sendMenTemplate1To9: sendMenTemplate1To9,
    sendMenTemplate10To18: sendMenTemplate10To18,
    sendMenTemplate19To22: sendMenTemplate19To22,
    sendWomenTemplate2To10: sendWomenTemplate2To10,
    sendWomenTemplate11To15: sendWomenTemplate11To15,
    sendBoyTemplate: sendBoyTemplate,
    sendGirlTemplate: sendGirlTemplate,
    orderItem: orderItem,
    showLocation: showLocation,
};
