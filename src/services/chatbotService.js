require("dotenv").config();
import request from "request";
import homepageService from "./homepageService";
import templateMessage from "./templateMessage";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const SECONDARY_RECEIVER_ID = process.env.SECONDARY_RECEIVER_ID;
const PRIMARY_RECEIVER_ID = process.env.FACEBOOK_APP_ID;

let sendMessageWelcomeNewUser = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //let username = await homepageService.getFacebookUsername(sender_psid);
            //send text message
            let response1 = {
                //"text": ``
                /*"text": `မင်္ဂလာပါ Generation Concept Store Page မှ ကြိုဆိုပါတယ်ရှင်။ 🙇\n` +
                    "___\n"+
                    `Hi! Welcome from Generation Concept Store Page. Thanks for getting in touch! 🙇`*/
                "text": `မင်္ဂလာပါ။ Generation Concept Store မှ ​နွေး​ထွေးစွာကြိုဆိုပါတယ်။မိတ်​​ဆွေသိလိုတဲ့ အချက်​တွေကို message ချန်ထားခဲ့နိုင်ပါတယ်ရှင်။ ရုံးချိန် မနက် ၉ နာရီမှ ည​နေ၅ နာရီအတွင်း ပြန်လည်​​ဖြေကြား​ပေးပါမယ်။ ဖုန်းဖြင့်တိုက်ရိုက် ဆက်သွယ်လိုပါက 09458046112,09458046113  ကိုတိုက်ရိုက်ဆက်သွယ်နိုင်ပါတယ်။​ကျေးဇူးတင်ပါတယ်။\n` +
                    "\n" +
                    "မိမိမှာယူလို​သော အထည်၊အ​ရောင်၊ Size ကို ​ရွေးချယ်ပီး စာတိုချန်ခဲ့နိုင်ပါတယ်။ သို့မဟုတ် ဖုန်းနံပါတ်ကို ချန်ခဲ့နိုင်ပါတယ်။ ပြန်ဆက်သွယ်​ပေးပါမယ်။​"
            };
            
            let response2 = {
                "text": "ဘာများ ကူညီပေးရမလဲရှင့်။ လူကြီးမင်း သိရှိလိုသည်များကို အောက်တွင်ဖော်ပြထားသော Menu 👇 များမှ အသေးစိတ်လေ့လာနိုင်ပါတယ်ရှင်။\n" +
                    "___\n" +
                    "Perfect time for shopping with us don't you think? 🛒\n" +
                    "\n" +
                    "How can we help you today?\n" +
                    "___\n" +
                    "Scroll to view all 👈"
            }

            let response3 = {
                "attachment": {
                    "type": "template",
                    "payload": {
                        "template_type": "generic",
                        "elements": [
                            {
                                "title": "See Our Categories! 🎉 ",
                                "image_url": "https://image.freepik.com/free-photo/online-shopping-delivery-concept-mobile-shop-with-clothes-with-shopping-cart-parcels-box-delivery-background-3d-rendering-illustration_73903-413.jpg",
                                "subtitle": "",
                                "buttons": [
                                    {
                                        "type": "postback",
                                        "title": "SHOP OUR BEST 🛒",
                                        "payload": "CATEGORIES"
                                    }
                                ]
                            },
                            {
                                "title": "Talk to an agent 💭‍ ",
                                "image_url": "https://acquire.io/wp-content/uploads/2016/08/8-Customer-Service-Challenges-a-Customer-Service-Agent-Faces-and-Their-Solutions.png",
                                "subtitle": "Order using messenger!",
                                "buttons": [
                                    {
                                        "type": "postback",
                                        "title": "Talk to an agent",
                                        "payload": "TALK_AGENT"
                                    }
                                ]
                            },
                            {
                                "title": "Contact Us ☎️",
                                "image_url": "https://www.ict-solutions-events.com/wp-content/uploads/2019/12/TE-Title-Contact-Us.png",
                                "subtitle": "We 💓 to hear from you!\n" +
                                    "☎️: 09-458046112, 09-458045113",
                                "buttons": [
                                    {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/page/contactus",
                                        "title": "Contact On Website"
                                    }
                                ]
                            },
                        ]
                    }
                }
            };

            await sendMessage(sender_psid, response1);
            await sendMessage(sender_psid, response2);
            await sendMessage(sender_psid, response3);
            resolve("done");

        } catch (e) {
            reject(e);
        }
    });
};

let sendMessage = (sender_psid, response) => {
    return new Promise(async (resolve, reject) => {
        try {
            await homepageService.markMessageRead(sender_psid);
            await homepageService.sendTypingOn(sender_psid);
            // Construct the message body
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "message": response
            };

            // Send the HTTP request to the Messenger Platform
            request({
                "uri": "https://graph.facebook.com/v6.0/me/messages",
                "qs": { "access_token": PAGE_ACCESS_TOKEN },
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                if (!err) {
                    resolve('message sent!')
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let requestTalkToAgent = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a text message
            let response1 = {
                "text": "Ok. Someone will be with you in a few minutes ^^\n" +
                    "\n"+
                    "မိမိမှာယူလို​သော အထည်၊အ​ရောင်၊ Size ကို ​ရွေးချယ်ပီး စာတိုချန်ခဲ့နိုင်ပါတယ်။ သို့မဟုတ် ဖုန်းနံပါတ်ကို ချန်ခဲ့နိုင်ပါတယ်။ ပြန်ဆက်သွယ်​ပေးပါမယ်။​"
            };

            await sendMessage(sender_psid, response1);

            //change this conversation to page inbox
            let app = "page_inbox"
            await passThreadControl(sender_psid, app);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let passThreadControl = (sender_psid, app) => {
    console.log("app ::: ", app);
    console.log("SECONDARY_RECEIVER_ID :: ", SECONDARY_RECEIVER_ID);
    return new Promise((resolve, reject) => {
        try {
            let target_app_id = "";
            let metadata = "";

            if(app === "page_inbox"){
                target_app_id = SECONDARY_RECEIVER_ID;
                metadata = "Pass thread control to inbox chat";
            }
            if(app === "primary"){
                target_app_id = PRIMARY_RECEIVER_ID;
                metadata = "Pass thread control to the bot, primary app";
            }
            // Construct the message body
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "target_app_id": target_app_id,
                "metadata": metadata
            };

            // Send the HTTP request to the Messenger Platform
            request({
                "uri": "https://graph.facebook.com/v6.0/me/pass_thread_control",
                "qs": { "access_token": PAGE_ACCESS_TOKEN },
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                console.log(body)
                if (!err) {
                    resolve('message sent!')
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let sendCategories = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendCategoriesTemplate();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let sendLookupOrder = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = templateMessage.sendLookupOrderTemplate();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let backToCategories = (sender_psid) => {
    sendCategories(sender_psid)
};

let backToMainMenu = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = templateMessage.backToMainMenuTemplate();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let showLoc = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = templateMessage.showLocation();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let takeControlConversation = (sender_psid) =>{
    return new Promise((resolve, reject) => {
        try {
            // Construct the message body
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "metadata": "Pass this conversation from page inbox to the bot - primary app"
            };

            // Send the HTTP request to the Messenger Platform
            request({
                "uri": "https://graph.facebook.com/v6.0/me/take_thread_control",
                "qs": { "access_token": PAGE_ACCESS_TOKEN },
                "method": "POST",
                "json": request_body
            }, async (err, res, body) => {
                if (!err) {
                    //send messages
                    await sendMessage(sender_psid, {"text": "The super bot came back !!!"});
                    await backToMainMenu(sender_psid);
                    resolve('message sent!')
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getDirections = (sender_psid, city) => {
    return new Promise(async (resolve, reject) => {
        try {

            if (city === "Yangon"){
                let response = {
                    "text": "1.MyanmarPlaza(09451018912)\n" +
                        "__\n" +
                        "2.Junction City(09-445320845)\n" +
                        "__\n" +
                        " 3.ဂမုန်းပွင့်(စံရိပ်ငြိမ်)(09-455033616)\n" +
                        "__\n" +
                        " 4.City Mall St.John (09-971945778)\n" +
                        "__\n" +
                        " 5.Tawwin Center (01-8600111  EXT-1019)\n" +
                        "__\n" +
                        " 6.Junction Square(01539873 Ext-2006)\n" +
                        "__\n" +
                        " 7.Junction Mawtin (09-674490520)\n" +
                        "__\n" +
                        " 8.Junction- 8 (09-951282015)\n" +
                        "__\n" +
                        " 9.Junction Zawana(09-884836752)\n" +
                        "__\n" +
                        " 10.Hledan Center (09-787324793)\n" +
                        "__\n" +
                        " 11.Capital (သာေကတ)(09-267487481)\n" +
                        "__\n" +
                        " 12.Ocean Super Center (Hlaing Tha Yar)"
                };
                await sendMessage(sender_psid, response);

            } else if (city === "Mandalay"){
                let response = {
                    "text": "13.Ocean SuperCenter (Mingalar)(09-984555626)\n" +
                        "__\n" +
                        " 14. Diamond Plaza (09-781160085)\n" +
                        "__\n" +
                        " 15.Central Point (09-263326344)\n" +
                        "__\n" +
                        " 16.Capital Hypermarket (Shwenagar) (09-778435536)"
                };
                await sendMessage(sender_psid, response);

            } else if (city === "Nay Pyi Taw"){
                let response = {
                    "text": `17.Junction Nay Pyi Taw (09-660929985)`
                };
                await sendMessage(sender_psid, response);

            } else if (city === "Moneywa"){
                let response = {
                    "text": `18.Ocean SuperCenter(09-882615397)`
                };
                await sendMessage(sender_psid, response);

            } else if (city === "Mawlamyine"){
                let response = {
                    "text": `19.Ocean SuperCenter (09-881657118)`
                };
                await sendMessage(sender_psid, response);

            } else if (city === "Pathein"){
                let response = {
                    "text": `20.Ocean SuperCenter(09-261353885)`
                };
                await sendMessage(sender_psid, response);

            } else if (city === "Taung Gyi"){
                let response = {
                    "text": `21.City Square Shopping Center(09-884808210)`
                };
                await sendMessage(sender_psid, response);
            }
            resolve("done");

        } catch (e) {
            reject(e);
        }
    });
}

let showMenCollections1To9 = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendMenTemplate1To9();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let showMenCollections10To18 = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendMenTemplate10To18();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let showMenCollections19To22 = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendMenTemplate19To22();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let showWomenCollections2To10 = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendWomenTemplate2To10();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let showWomenCollections11To15 = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendWomenTemplate11To15();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let showBoyCollections = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendBoyTemplate();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let showGirlCollections = (sender_psid) => {
    return new Promise(async (resolve, reject) => {
        try {
            //send a generic template message
            let response = templateMessage.sendGirlTemplate();
            await sendMessage(sender_psid, response);
            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
};

let menDetails = (sender_psid, code) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (code === "CST22497"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Raglan Sleeve Sport Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7714/image?unique=0cc388b",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7714/image?unique=0cc388b",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Raglan Sleeve Sport Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7715/image?unique=0cc388b",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7715/image?unique=0cc388b",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 16,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YJ112513"){

                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Men Hoodie Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3511/image?unique=1a2c894",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3511/image?unique=1a2c894",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men Hoodie Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7742/image?unique=b9e1441",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7742/image?unique=b9e1441",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men Hoodie Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7743/image?unique=b9e1441",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7743/image?unique=b9e1441",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 32,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Grey, Olive Green, Maroon\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YT212299"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Plane T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3514/image/300x300?unique=51a7c69",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3514/image/300x300?unique=51a7c69",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Plane T-Shirt",
                                    "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122174385_2411429009164602_1224455375549214890_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_eui2=AeH8VJ7Weze0zi2qWN5ggf4JXbOkHi1bhYNds6QeLVuFg1obG25Kos4KMgCiPPcquPruYeHz6jy8zn3EB95ZeQHy&_nc_ohc=Q69rEDVNqp4AX_xH6d0&_nc_oc=AQmrvzTpSny2Hw3F5fYU-DFMXue6dPEInIg_-atGW3P34ZitPdulZrrtFf58xP-GiZM&_nc_ht=scontent.frgn10-1.fna&oh=d94b3a2f0e17d60e2c1d975ab27abbf9&oe=5FB5B55D",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122174385_2411429009164602_1224455375549214890_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_eui2=AeH8VJ7Weze0zi2qWN5ggf4JXbOkHi1bhYNds6QeLVuFg1obG25Kos4KMgCiPPcquPruYeHz6jy8zn3EB95ZeQHy&_nc_ohc=Q69rEDVNqp4AX_xH6d0&_nc_oc=AQmrvzTpSny2Hw3F5fYU-DFMXue6dPEInIg_-atGW3P34ZitPdulZrrtFf58xP-GiZM&_nc_ht=scontent.frgn10-1.fna&oh=d94b3a2f0e17d60e2c1d975ab27abbf9&oe=5FB5B55D",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 15,000 KS\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : White, Grey, Dark Grey, Maroon\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CT12297"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Raglan Sleeve T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7774/image?unique=264d161",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7774/image?unique=264d161",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Raglan Sleeve T-Shirt",
                                    "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121974072_2411434782497358_1002859641530668290_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_eui2=AeFNJ7foYnqlAytBX8X1ky0DjFubupZ8B6aMW5u6lnwHphXiR_lXqYwfX4s1h63M2AAP7WJACgJAfh2SZOL2lIJ1&_nc_ohc=yfR3EbrRccgAX_5uUnR&_nc_ht=scontent.frgn10-1.fna&oh=7545be940f36e20f8f48792ae99ef7ef&oe=5FB4D3A1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121974072_2411434782497358_1002859641530668290_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_eui2=AeFNJ7foYnqlAytBX8X1ky0DjFubupZ8B6aMW5u6lnwHphXiR_lXqYwfX4s1h63M2AAP7WJACgJAfh2SZOL2lIJ1&_nc_ohc=yfR3EbrRccgAX_5uUnR&_nc_ht=scontent.frgn10-1.fna&oh=7545be940f36e20f8f48792ae99ef7ef&oe=5FB4D3A1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 17,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Dark Grey, Brown, Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YT212301"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Raglan Sleeve T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7638/image?unique=3cd7f40",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7638/image?unique=3cd7f40",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Raglan Sleeve T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7639/image?unique=3cd7f40",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7639/image?unique=3cd7f40",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 15,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Brick Red,Dark Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YH112442"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Cotton Long Sleeve T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7633/image?unique=ad666e9",
                                },
                                {
                                    "title": "Cotton Long Sleeve T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7637/image?unique=87fa0bf",
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 31,000 KS\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : White, Navy\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YT212710"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Printed T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3466/image?unique=81c555c",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3466/image?unique=81c555c",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Printed T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7641/image?unique=b43dc79",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7641/image?unique=b43dc79",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Printed T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7642/image?unique=b43dc79",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7642/image?unique=b43dc79",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 15,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Olive Green, Grey, Maroon\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YT212787"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Printed T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3467/image?unique=17e4d0c",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3467/image?unique=17e4d0c",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Printed T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7645/image?unique=09101de",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7645/image?unique=09101de",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 15,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Olive Green, Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YT212819"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Cotton T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3468/image?unique=b85bec1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3468/image?unique=b85bec1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Cotton T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7647/image?unique=1accaa4",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7647/image?unique=1accaa4",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 15,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Green, Light Khaki, Dark Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CSJ12430"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Sweat Hood Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/2991/image?unique=e1916fb",
                                },
                                {
                                    "title": "Sweat Hood Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/6622/image?unique=8c8671d",
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 32,000 ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Grey, Dark Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CSJ12423"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Sport Hoodie Sweatshirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/6887/image?unique=5811179",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/6887/image?unique=5811179",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Sport Hoodie Sweatshirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/6889/image?unique=5811179",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/6889/image?unique=5811179",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 33,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CSJ12451"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Men's Cotton Sweat Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7527/image?unique=cb672b1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7527/image?unique=cb672b1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men's Cotton Sweat Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7529/image?unique=579ae73",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7529/image?unique=579ae73",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 33,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Black,Light Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CSJ12428"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Men's Hoodie Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3372/image?unique=df38e4f",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3372/image?unique=df38e4f",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men's Hoodie Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7526/image?unique=c6b0800",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7526/image?unique=c6b0800",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 33,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Black, Light Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CPJ2035"){

                let response1 = {
                    "attachment": {
                        "type": "image",
                        "payload": {
                            "url": "https://www.thegenerationonline.com/web/image/product.template/3551/image/300x300?unique=052cdd1"
                        }
                    }
                };

                let response2 = {
                    "text": "Men Slim Fit Denim\n" +
                        "Price :  27,000 Ks\n" +
                        "Size : 28,29,30,31,32,33,34,36\n" +
                        "Color : Jean Blue\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CPJ2479"){

                let response1 = {
                    "attachment": {
                        "type": "image",
                        "payload": {
                            "url": "https://www.thegenerationonline.com/web/image/product.template/2994/image/300x300?unique=7d237d3"
                        }
                    }
                };

                let response2 = {
                    "text": "Skinny Regular Denim\n" +
                        "Price :  27,000 Ks\n" +
                        "Size : 28,29,30,31,32,33,34,36\n" +
                        "Color : Jean Blue\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CPJ2480"){

                let response1 = {
                    "attachment": {
                        "type": "image",
                        "payload": {
                            "url": "https://www.thegenerationonline.com/web/image/product.template/3069/image/300x300?unique=d355e60"
                        }
                    }
                };

                let response2 = {
                    "text": "Men Skinny Denim\n" +
                        "Price :  27,000 Ks\n" +
                        "Size : 28,29,30,31,32,33,34,36\n" +
                        "Color : Jean Blue\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CPJ2482"){

                let response1 = {
                    "attachment": {
                        "type": "image",
                        "payload": {
                            "url": "https://www.thegenerationonline.com/web/image/product.template/3074/image/300x300?unique=b5e5b6b"
                        }
                    }
                };

                let response2 = {
                    "text": "Skinny Regular Denim\n" +
                        "Price :  27,000 Ks\n" +
                        "Size : 28,29,30,31,32,33,34,36\n" +
                        "Color : Jean Blue\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YP212546"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Cotton Stripes Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3349/image?unique=beb1e5f",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3349/image?unique=beb1e5f",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Cotton Stripes Short Pant",
                                    "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121826903_2411476595826510_7671817770670655088_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeGR1bVq1A3b7AoRR4P8AywcebpvBOSBIC15um8E5IEgLd1cTZE_VSywxZId4NVjIugkSloy-gLW-seuQRv6bR5f&_nc_ohc=yIAmydcXWx4AX9u2JDL&_nc_ht=scontent.frgn10-1.fna&oh=491c2b218abd6c05dc86f5ca5eb29b8c&oe=5FB43258",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121826903_2411476595826510_7671817770670655088_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_eui2=AeGR1bVq1A3b7AoRR4P8AywcebpvBOSBIC15um8E5IEgLd1cTZE_VSywxZId4NVjIugkSloy-gLW-seuQRv6bR5f&_nc_ohc=yIAmydcXWx4AX9u2JDL&_nc_ht=scontent.frgn10-1.fna&oh=491c2b218abd6c05dc86f5ca5eb29b8c&oe=5FB43258",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Cotton Stripes Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7480/image?unique=ffeef3e",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7480/image?unique=ffeef3e",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 19,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Blue, Dark Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "YP212482"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Stripes Cotton Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3419/image?unique=238e9b0",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3419/image?unique=238e9b0",
                                        "webview_height_ratio": "tall",
                                    },

                                },
                                {
                                    "title": "Stripes Cotton Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7595/image?unique=1d3afb0",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7595/image?unique=1d3afb0",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Stripes Cotton Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7597/image?unique=1d3afb0",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7597/image?unique=1d3afb0",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 18,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Navy, Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CSP22439"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Men Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/6131/image?unique=322b8f3",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/6131/image?unique=322b8f3",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/2852/image?unique=3efdf03",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/2852/image?unique=3efdf03",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/6130/image?unique=322b8f3",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/6130/image?unique=322b8f3",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 22,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Grey, Dark Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CSP22329"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3107/image?unique=7eaf60c",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3107/image?unique=7eaf60c",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/6902/image?unique=7529de6",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/6902/image?unique=7529de6",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/6904/image?unique=7529de6",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/6904/image?unique=7529de6",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 20,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Dark Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "CSP22793"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Men's Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3247/image?unique=d9581c5",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3247/image?unique=d9581c5",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men's Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7265/image?unique=2d5b5b1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7265/image?unique=2d5b5b1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Men's Sport Short Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7267/image?unique=2d5b5b1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7267/image?unique=2d5b5b1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 20,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            }

            resolve("done");
        } catch (e) {
            reject(e);
        }
    });
}

let womenDetails = (sender_psid, code) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (code === "XJ112514"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Cotton Hoodie Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3508/image?unique=ac18d37",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3508/image?unique=ac18d37",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Cotton Hoodie Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7736/image?unique=18760e8",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7736/image?unique=18760e8",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 30,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Black,Grey,Olive Green,Maroon\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XT212293"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Woman Striped V-neck Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3509/image?unique=fb4a4bc",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3509/image?unique=fb4a4bc",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Woman Striped V-neck Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7741/image?unique=42efe65",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7741/image?unique=42efe65",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 12,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Green\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XT212571"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Woman Straight Cut Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7847/image?unique=2517504",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7847/image?unique=2517504",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Woman Straight Cut Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7849/image?unique=2517504",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7849/image?unique=2517504",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 12,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Yellow,Black,Maroon,Light Green\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XT212785"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Straight Cut Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3512/image?unique=5015192",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3512/image?unique=5015192",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Straight Cut Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7749/image?unique=5015192",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7749/image?unique=5015192",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Straight Cut Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7751/image?unique=5015192",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7751/image?unique=5015192",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 12,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Dark Green, Light Green, Grey,Light Khaki\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "GT12298"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Raglan Sleeve T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7862/image?unique=2d65791",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7862/image?unique=2d65791",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Raglan Sleeve T-Shirt",
                                    "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121823847_2411652622475574_6607842414674262074_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeFnIbK7Kq33nIsvxonBKrHGeo-hS0Z95id6j6FLRn3mJ-BgWen6oti0pHQsbwTbidYYy4t5vvEVZ1vlZz-o-yCs&_nc_ohc=GPWN_9I0SS8AX_hs4d1&_nc_ht=scontent.frgn10-1.fna&oh=92ec9a058493b118881c84620fa5a870&oe=5FB739D1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/121823847_2411652622475574_6607842414674262074_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeFnIbK7Kq33nIsvxonBKrHGeo-hS0Z95id6j6FLRn3mJ-BgWen6oti0pHQsbwTbidYYy4t5vvEVZ1vlZz-o-yCs&_nc_ohc=GPWN_9I0SS8AX_hs4d1&_nc_ht=scontent.frgn10-1.fna&oh=92ec9a058493b118881c84620fa5a870&oe=5FB739D1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 14,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Dark Grey,Brown,Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XJ112458"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Women Chino Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7797/image?unique=37cca1b",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7797/image?unique=37cca1b",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Women Chino Jacket",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3138/image?unique=37cca1b",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3138/image?unique=37cca1b",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 33,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Blue, Light Green,Brown\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XP112495"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Cotton Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3492/image?unique=73298e7",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3492/image?unique=73298e7",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Cotton Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7695/image?unique=a8acbaa",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7695/image?unique=a8acbaa",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 18,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Black,Maroon\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XT212711"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Straight Cut T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3461/image?unique=a4b0212",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3461/image?unique=a4b0212",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Straight Cut T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7620/image?unique=0d7479d",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7620/image?unique=0d7479d",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 12,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Olive Green, Yellow\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XT212786"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Printed T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3462/image?unique=6640622",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3462/image?unique=6640622",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Printed T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7625/image?unique=81e8e41",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7625/image?unique=81e8e41",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 12,000 Ks\n" +
                        "Size : S,M,L,XL\n" +
                        "Color : Olive Green,Light Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "XT212820"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Cotton T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3463/image?unique=048d22c",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3463/image?unique=048d22c",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Cotton T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7627/image?unique=928036e",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7627/image?unique=928036e",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 12,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Light Green,Khaki\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "GD22760"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Hoodie Dress",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3550/image?unique=48c6e6b",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3550/image?unique=48c6e6b",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Hoodie Dress",
                                    "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122117284_2411662529141250_4118608074490992648_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeFcmHquKnfzUaymBivqdHNeaHBavdFKG3FocFq90UobcQhdXgTL0K5DUObgCSQLxGeeiLSI_JZC5BBpmaHsT2CP&_nc_ohc=UwgWd-JJCncAX-A2VkN&_nc_ht=scontent.frgn10-1.fna&oh=5e72178af9f8ed6c2ba68d94b0667a3a&oe=5FB5682C",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122117284_2411662529141250_4118608074490992648_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeFcmHquKnfzUaymBivqdHNeaHBavdFKG3FocFq90UobcQhdXgTL0K5DUObgCSQLxGeeiLSI_JZC5BBpmaHsT2CP&_nc_ohc=UwgWd-JJCncAX-A2VkN&_nc_ht=scontent.frgn10-1.fna&oh=5e72178af9f8ed6c2ba68d94b0667a3a&oe=5FB5682C",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Hoodie Dress",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7857/image?unique=4dc4491",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7857/image?unique=4dc4491",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 19,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Khaki,Blue Green\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "GP12629"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Floral Viscose Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3541/image?unique=d508a50",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3541/image?unique=d508a50",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Floral Viscose Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7834/image?unique=e2d5351",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7834/image?unique=e2d5351",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 18,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Black, Navy\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "GP12627"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Floral Cotton Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3540/image?unique=655e0b1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3540/image?unique=655e0b1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Floral Cotton Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7831/image?unique=6b0fdec",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7831/image?unique=6b0fdec",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 18,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Navy\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "GP12626"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Floral Viscose Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3539/image?unique=14f3108",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3539/image?unique=14f3108",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Floral Viscose Long Pant",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7828/image?unique=83c800c",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7828/image?unique=83c800c",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 18,000 Ks\n" +
                        "Size : S,M,L,XL,XXL\n" +
                        "Color : Black,Navy\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            }
            resolve("done");
        } catch (e) {
            reject(e);
        }
    })
}

let boysDetails = (sender_psid, code) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (code === "KB10600"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Boy Long Sleeve T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3515/image?unique=52c280f",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3515/image?unique=52c280f",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 12,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Olive Green,Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KB20724"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Boy T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3517/image?unique=4af982b",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3517/image?unique=4af982b",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 10,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Blue,Olive Green\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KB20898"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Boy T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3519/image?unique=3f6f113",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3519/image?unique=3f6f113",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Boy T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7765/image?unique=077a705",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7765/image?unique=077a705",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 10,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Yellow,Olive Green\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KB20901"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Boy T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3520/image?unique=3a4d42d",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3520/image?unique=3a4d42d",
                                        "webview_height_ratio": "tall",
                                    },
                                }
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 10,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Dark Yellow\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KB20903"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Boy T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7771/image?unique=4c51676",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7771/image?unique=4c51676",
                                        "webview_height_ratio": "tall",
                                    },
                                }
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 10,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Light Green\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KB20910"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Boy T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3522/image?unique=8f973e1",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3522/image?unique=8f973e1",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Boy T-Shirt",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7772/image?unique=c58223a",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7772/image?unique=c58223a",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 10,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Olive Green,Mirage Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            }
            resolve("done");
        } catch (e) {
            reject(e);
        }
    })
};

let girlsDetails = (sender_psid, code) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (code === "KG20880"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Girl's Raglan Sleeve Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3478/image/300x300?unique=9780e0e",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3478/image/300x300?unique=9780e0e",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 10,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Brown,Orange,White\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KG20787"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Girl Stripes Tee",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3477/image/300x300?unique=25af6f8",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3477/image/300x300?unique=25af6f8",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 10,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Pink\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KGH20843"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Girl's Stripes Top",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3479/image?unique=caf5d86",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3479/image?unique=caf5d86",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Girl's Stripes Top",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7660/image?unique=0e57d9f",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7660/image?unique=0e57d9f",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Girl's Stripes Top",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7661/image?unique=0e57d9f",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7661/image?unique=0e57d9f",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 14,000Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Black,Yellow\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KGH20847"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Girl Jersey Top",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3480/image?unique=1e6ea50",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3480/image?unique=1e6ea50",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Girl Jersey Top",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7663/image?unique=c8330c9",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7663/image?unique=c8330c9",
                                        "webview_height_ratio": "tall",
                                    },
                                }
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 14,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Pink Purple\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KGL20838"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Girl's Polo Dress",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3481/image?unique=2ece211",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3481/image?unique=2ece211",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Girl's Polo Dress",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7665/image?unique=45933f6",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7665/image?unique=45933f6",
                                        "webview_height_ratio": "tall",
                                    },
                                }
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 18,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Yellow,Navy\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KGL30846"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Girl's Dress",
                                    "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122407538_2411694492471387_8673723264684414434_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_eui2=AeFe5X32jchcjQAbNP8Jhz_FHmj-WbW_ntseaP5Ztb-e24ihJoSG4vHTcwJ_lYOQe_zRHk4XTV9QiwEB6obBJnGt&_nc_ohc=kdLAnkjkivsAX_Omy9W&_nc_ht=scontent.frgn10-1.fna&oh=de5aca68e5fb4c7f45be7e28ff8bc1e4&oe=5FB64414",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122407538_2411694492471387_8673723264684414434_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_eui2=AeFe5X32jchcjQAbNP8Jhz_FHmj-WbW_ntseaP5Ztb-e24ihJoSG4vHTcwJ_lYOQe_zRHk4XTV9QiwEB6obBJnGt&_nc_ohc=kdLAnkjkivsAX_Omy9W&_nc_ht=scontent.frgn10-1.fna&oh=de5aca68e5fb4c7f45be7e28ff8bc1e4&oe=5FB64414",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Girl's Dress",
                                    "image_url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122106746_2411694515804718_5947902294426957390_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_eui2=AeG0HWbaSEYDJW8I9q8b2x3nOK9lJdb43tw4r2Ul1vje3CKm0sNYKLFKU_54VNLtDXNo1ghK9TJh9b7deryo98XF&_nc_ohc=43OGnkDqZboAX-Nz-C4&_nc_ht=scontent.frgn10-1.fna&oh=e000b17e78c7493464f446f2b3f1c9fa&oe=5FB79326",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://scontent.frgn10-1.fna.fbcdn.net/v/t1.0-9/122106746_2411694515804718_5947902294426957390_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_eui2=AeG0HWbaSEYDJW8I9q8b2x3nOK9lJdb43tw4r2Ul1vje3CKm0sNYKLFKU_54VNLtDXNo1ghK9TJh9b7deryo98XF&_nc_ohc=43OGnkDqZboAX-Nz-C4&_nc_ht=scontent.frgn10-1.fna&oh=e000b17e78c7493464f446f2b3f1c9fa&oe=5FB79326",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 15,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : Dark Yellow,Grey\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            } else if (code === "KGL30836"){
                //send categories
                let response1 = {
                    "attachment": {
                        "type": "template",
                        "payload": {
                            "template_type": "generic",
                            "elements": [
                                {
                                    "title": "Girl's Stripes Dress",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.template/3482/image?unique=dfb2e67",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.template/3482/image?unique=dfb2e67",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                                {
                                    "title": "Girl's Stripes Dress",
                                    "image_url": "https://www.thegenerationonline.com/web/image/product.images/7667/image?unique=964dc54",
                                    "default_action": {
                                        "type": "web_url",
                                        "url": "https://www.thegenerationonline.com/web/image/product.images/7667/image?unique=964dc54",
                                        "webview_height_ratio": "tall",
                                    },
                                },
                            ]
                        }
                    }
                };

                let response2 = {
                    "text": "Price : 17,000 Ks\n" +
                        "Size : 3,5,7,9,11\n" +
                        "Color : White/Black\n"
                };

                let response3 = templateMessage.orderItem();

                await sendMessage(sender_psid, response1);
                await sendMessage(sender_psid, response2);
                await sendMessage(sender_psid, response3);

            }
            resolve("done");
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = {
    sendMessage: sendMessage,
    sendMessageWelcomeNewUser: sendMessageWelcomeNewUser,
    sendCategories: sendCategories,
    sendLookupOrder: sendLookupOrder,
    requestTalkToAgent: requestTalkToAgent,
    backToCategories: backToCategories,
    backToMainMenu: backToMainMenu,
    passThreadControl: passThreadControl,
    takeControlConversation: takeControlConversation,
    getDirections: getDirections,
    showMenCollections1To9: showMenCollections1To9,
    showMenCollections10To18: showMenCollections10To18,
    showMenCollections19To22: showMenCollections19To22,
    showWomenCollections2To10: showWomenCollections2To10,
    showWomenCollections11To15: showWomenCollections11To15,
    showBoyCollections: showBoyCollections,
    showGirlCollections: showGirlCollections,
    menDetails: menDetails,
    womenDetails: womenDetails,
    boysDetails: boysDetails,
    girlsDetails: girlsDetails,
    showLoc: showLoc,
};
