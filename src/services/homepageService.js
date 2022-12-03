require("dotenv").config();
import request from "request";

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

let handleSetupProfileAPI = () => {
    return new Promise((resolve, reject) => {
        try {

            let url = `https://graph.facebook.com/v8.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;

            let request_body = {

                "get_started":{
                    "payload":"GET_STARTED"
                },

                "persistent_menu": [
                    {
                        "locale": "default",
                        "composer_input_disabled": false,
                        "call_to_actions": [
                            {
                                "type": "postback",
                                "title": "Talk to an agent 💭",
                                "payload": "TALK_AGENT"
                            },
                            {
                                "type": "postback",
                                "title": "Restart this conversation 🤖",
                                "payload": "RESTART_CONVERSATION"
                            },
                            {
                                "type": "web_url",
                                "title": "View facebook page",
                                "url": "https://www.facebook.com/generationconceptstore",
                                "webview_height_ratio": "full"
                            },
                            {
                                "type": "web_url",
                                "title": "View website",
                                "url": "https://www.thegenerationonline.com/",
                                "webview_height_ratio": "full"
                            },
                            {
                                "type": "postback",
                                "title": "Get Locations 📌",
                                "payload": "GET_LOCATIONS"
                            },
                        ]
                    }
                ],

                "whitelisted_domains":[
                    "https://gcs-chatbot-msg.herokuapp.com/"
                ]

            };

            // Send the HTTP request to the Messenger Platform
            request({
                "uri": url,
                "qs": { "access_token": PAGE_ACCESS_TOKEN },
                "method": "POST",
                "json": request_body
            }, (err, res, body) => {
                if (!err) {
                    resolve("OK!")
                } else {
                    reject("Unable to send message:" + err);
                }
            });

        }catch (e) {
            reject(e);
        }
    });
};

let getFacebookUsername = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            // Send the HTTP request to the Messenger Platform
            let url = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`;
            request({
                "uri": url,
                "method": "GET",
            }, (err, res, body) => {
                if (!err) {
                    //convert string to json object
                    body = JSON.parse(body);
                    let username = `${body.first_name} ${body.last_name}`;
                    resolve(username);
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let sendTypingOn = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "sender_action": "typing_on"
            };

            let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
            request({
                "uri": url,
                "method": "POST",
                "json": request_body

            }, (err, res, body) => {
                if (!err) {
                    resolve("done!");
                } else {
                    reject("Unable to send message:" + err);
                }
            });

        } catch (e) {
            reject(e);
        }
    });
};

let markMessageRead = (sender_psid) => {
    return new Promise((resolve, reject) => {
        try {
            let request_body = {
                "recipient": {
                    "id": sender_psid
                },
                "sender_action": "mark_seen"
            };

            let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
            request({
                "uri": url,
                "method": "POST",
                "json": request_body

            }, (err, res, body) => {
                if (!err) {
                    resolve("done!");
                } else {
                    reject("Unable to send message:" + err);
                }
            });
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = {
    handleSetupProfileAPI: handleSetupProfileAPI,
    getFacebookUsername: getFacebookUsername,
    markMessageRead: markMessageRead,
    sendTypingOn: sendTypingOn
};
