require("dotenv").config();
import homepageService from "../services/homepageService";
import chatbotService from "../services/chatbotService";
import templateMessage from "../services/templateMessage";

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

let getHomePage = (req, res) => {
    return res.render("homepage.ejs")
};

let getWebhook = (req, res) => {
    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = MY_VERIFY_TOKEN;

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
};

let postWebhook = (req, res) => {
    let body = req.body;

    // Checks this is an event from a page subscription
    if (body.object === 'page') {

        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {
            //check the incoming message from primary app or not; if secondary app, exit
            if (entry.standby) {
                //if user's message is "back" or "exit", return the conversation to the bot
                let webhook_standby = entry.standby[0];
                console.log("web ::: ", webhook_standby)
                if(webhook_standby && webhook_standby.message){
                    //console.log("webhook_standby.message : ", webhook_standby.message);
                    if (webhook_standby.message.text === "back" || webhook_standby.message.text === "exit") {
                        chatbotService.takeControlConversation(webhook_standby.sender.id);
                    }else if (webhook_standby.message.quick_reply != null) {
                        handleMessage(webhook_standby.sender.id, webhook_standby.message);
                    }
                } else if (webhook_standby && webhook_standby.postback && webhook_standby.postback.title){
                    handlePostback(webhook_standby.sender.id, webhook_standby.postback.title);
                }

                return;
            }

            // Gets the body of the webhook event
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            //console.log("webhook_event.message :: ", webhook_event.message)

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });

        // Returns a '200 OK' response to all requests
        res.status(200).send('EVENT_RECEIVED');
    } else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }
};

// Handles messages events
let handleMessage = async (sender_psid, received_message) => {

    console.log("rm :: ", received_message);
    //check the incoming message is a quick reply?
    if (received_message && received_message.quick_reply && received_message.quick_reply.payload) {
        let payload = received_message.quick_reply.payload;
        if (payload === "CATEGORIES") {
            await chatbotService.sendCategories(sender_psid);

        } else if (payload === "LOOKUP_ORDER") {
            await chatbotService.sendLookupOrder(sender_psid);

        } else if (payload === "TALK_AGENT") {
            await chatbotService.requestTalkToAgent(sender_psid);

        } else if (payload === "YANGON") {
            await chatbotService.getDirections(sender_psid, "Yangon");

        } else if (payload === "MANDALAY") {
            await chatbotService.getDirections(sender_psid, "Mandalay");

        } else if (payload === "NAY_PYI_TAW") {
            await chatbotService.getDirections(sender_psid, "Nay Pyi Taw");

        } else if (payload === "MONEYWA") {
            await chatbotService.getDirections(sender_psid, "Moneywa");

        } else if (payload === "MAWLAMYINE") {
            await chatbotService.getDirections(sender_psid, "Mawlamyine");

        } else if (payload === "PATHEIN") {
            await chatbotService.getDirections(sender_psid, "Pathein");

        } else if (payload === "TAUNG_GYI") {
            await chatbotService.getDirections(sender_psid, "Taung Gyi");

        }

        return;
    }


    /*let response;

    /!*!// Check if the message contains text
    if (received_message.text) {
        // Create the payload for a basic text message
        response = {
            "text": `You sent the message: "${received_message.text}". Now send me an image!`
        }
    } else if (received_message.attachments) {
        // Get the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [ {
                        "title": "Is this the right picture?",
                        "subtitle": "Tap a button to answer.",
                        "image_url": attachment_url,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Yes!",
                                "payload": "yes",
                            },
                            {
                                "type": "postback",
                                "title": "No!",
                                "payload": "no",
                            }
                        ],
                    } ]
                }
            }
        }
    }*!/

    // Sends the response message
    await chatbotService.sendMessage(sender_psid, response);*/
};

// Handles messaging_postbacks events
let handlePostback = async (sender_psid, received_postback) => {

    console.log("rec :: ", received_postback);

    if (received_postback === "Get Started") {
        await chatbotService.sendMessageWelcomeNewUser(sender_psid);

    } else if (received_postback === "Talk to an agent 💭"){
        await chatbotService.requestTalkToAgent(sender_psid);

    } else if (received_postback === "Restart this conversation 🤖"){
        await chatbotService.sendMessageWelcomeNewUser(sender_psid);

    } else if (received_postback === "Get Locations 📌"){
        //await chatbotService.getDirections(sender_psid);
        await chatbotService.showLoc(sender_psid);

    } else if (received_postback === "Yangon"){
        await chatbotService.getDirections(sender_psid, "Yangon");

    } else if (received_postback === "Mandalay"){
        await chatbotService.getDirections(sender_psid, "Mandalay");

    } else if (received_postback === "Nay Pyi Taw"){
        await chatbotService.getDirections(sender_psid, "Nay Pyi Taw");

    } else if (received_postback === "Moneywa"){
        await chatbotService.getDirections(sender_psid, "Moneywa");

    } else if (received_postback === "Mawlamyine"){
        await chatbotService.getDirections(sender_psid, "Mawlamyine");

    } else if (received_postback === "Pathein"){
        await chatbotService.getDirections(sender_psid, "Pathein");

    } else if (received_postback === "Taung Gyi"){
        await chatbotService.getDirections(sender_psid, "Taung Gyi");

    } else {
        // Get the payload for the postback
        let payload = received_postback.payload;

        // Set the response based on the postback payload
        switch (payload) {
            case "GET_STARTED":
            case "RESTART_CONVERSATION":
                await chatbotService.sendMessageWelcomeNewUser(sender_psid);
                break;
            case "TALK_AGENT":
                await chatbotService.requestTalkToAgent(sender_psid);
                break;
            case "SHOW_HEADPHONES":
                await chatbotService.showHeadphones(sender_psid);
                break;
            case "SHOW_TV":
                await chatbotService.showTVs(sender_psid);
                break;
            case "SHOW_PLAYSTATION":
                await chatbotService.showPlaystation(sender_psid);
                break;
            case "BACK_TO_CATEGORIES":
                await chatbotService.backToCategories(sender_psid);
                break;
            case "BACK_TO_MAIN_MENU":
                await chatbotService.backToMainMenu(sender_psid);
                break;
            case "CATEGORIES":
                await chatbotService.sendCategories(sender_psid);
                break;
            case "GET_LOCATIONS":
                await chatbotService.showLoc(sender_psid);
                break;
            case "MEN_COLLECTIONS":
                await chatbotService.showMenCollections1To9(sender_psid);
                break;
            case "WOMEN_COLLECTIONS":
                await chatbotService.showWomenCollections2To10(sender_psid);
                break;
            case "BOY_COLLECTIONS":
                await chatbotService.showBoyCollections(sender_psid);
                break;
            case "GIRL_COLLECTIONS":
                await chatbotService.showGirlCollections(sender_psid);
                break;
            case "MEN_MORE_9":
                await chatbotService.showMenCollections10To18(sender_psid);
                break;
            case "MEN_MORE_18":
                await chatbotService.showMenCollections19To22(sender_psid);
                break;
            case "WOMEN_MORE_9":
                await chatbotService.showWomenCollections11To15(sender_psid);
                break;
            case "CST22497_DETAIL":
                await chatbotService.menDetails(sender_psid, "CST22497");
                break;
            case "YJ112513_DETAIL":
                await chatbotService.menDetails(sender_psid, "YJ112513");
                break;
            case "YT212299_DETAIL":
                await chatbotService.menDetails(sender_psid, "YJ112513");
                break;
            case "CT12297_DETAIL":
                await chatbotService.menDetails(sender_psid, "CT12297");
                break;
            case "YT212301_DETAIL":
                await chatbotService.menDetails(sender_psid, "YT212301");
                break;
            case "YH112442_DETAIL":
                await chatbotService.menDetails(sender_psid, "YH112442");
                break;
            case "YT212710_DETAIL":
                await chatbotService.menDetails(sender_psid, "YT212710");
                break;
            case "YT212787_DETAIL":
                await chatbotService.menDetails(sender_psid, "YT212787");
                break;
            case "YT212819_DETAIL":
                await chatbotService.menDetails(sender_psid, "YT212819");
                break;
            case "CSJ12430_DETAIL":
                await chatbotService.menDetails(sender_psid, "CSJ12430");
                break;
            case "CSJ12423_DETAIL":
                await chatbotService.menDetails(sender_psid, "CSJ12423");
                break;
            case "CSJ12451_DETAIL":
                await chatbotService.menDetails(sender_psid, "CSJ12451");
                break;
            case "CSJ12428_DETAIL":
                await chatbotService.menDetails(sender_psid, "CSJ12428");
                break;
            case "CPJ2035_DETAIL":
                await chatbotService.menDetails(sender_psid, "CPJ2035");
                break;
            case "CPJ2479_DETAIL":
                await chatbotService.menDetails(sender_psid, "CPJ2479");
                break;
            case "CPJ2480_DETAIL":
                await chatbotService.menDetails(sender_psid, "CPJ2480");
                break;
            case "CPJ2482_DETAIL":
                await chatbotService.menDetails(sender_psid, "CPJ2482");
                break;
            case "YP212546_DETAIL":
                await chatbotService.menDetails(sender_psid, "YP212546");
                break;
            case "YP212482_DETAIL":
                await chatbotService.menDetails(sender_psid, "YP212482");
                break;
            case "CSP22439_DETAIL":
                await chatbotService.menDetails(sender_psid, "CSP22439");
                break;
            case "CSP22329_DETAIL":
                await chatbotService.menDetails(sender_psid, "CSP22329");
                break;
            case "CSP22793_DETAIL":
                await chatbotService.menDetails(sender_psid, "CSP22793");
                break;
            case "XJ112514_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XJ112514");
                break;
            case "XT212293_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XT212293");
                break;
            case "XT212571_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XT212571");
                break;
            case "XT212785_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XT212785");
                break;
            case "GT12298_DETAIL":
                await chatbotService.womenDetails(sender_psid, "GT12298");
                break;
            case "XJ112458_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XJ112458");
                break;
            case "XP112495_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XJ112458");
                break;
            case "XT212711_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XT212711");
                break;
            case "XT212786_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XT212786");
                break;
            case "XT212820_DETAIL":
                await chatbotService.womenDetails(sender_psid, "XT212820");
                break;
            case "GD22760_DETAIL":
                await chatbotService.womenDetails(sender_psid, "GD22760");
                break;
            case "GP12629_DETAIL":
                await chatbotService.womenDetails(sender_psid, "GP12629");
                break;
            case "GP12627_DETAIL":
                await chatbotService.womenDetails(sender_psid, "GP12627");
                break;
            case "GP12626_DETAIL":
                await chatbotService.womenDetails(sender_psid, "GP12626");
                break;
            case "KB10600_DETAIL":
                await chatbotService.boysDetails(sender_psid, "KB10600");
                break;
            case "KB20724_DETAIL":
                await chatbotService.boysDetails(sender_psid, "KB20724");
                break;
            case "KB20898_DETAIL":
                await chatbotService.boysDetails(sender_psid, "KB20898");
                break;
            case "KB20901_DETAIL":
                await chatbotService.boysDetails(sender_psid, "KB20901");
                break;
            case "KB20903_DETAIL":
                await chatbotService.boysDetails(sender_psid, "KB20903");
                break;
            case "KB20910_DETAIL":
                await chatbotService.boysDetails(sender_psid, "KB20910");
                break;
            case "KG20880_DETAIL":
                await chatbotService.girlsDetails(sender_psid, "KG20880");
                break;
            case "KG20787_DETAIL":
                await chatbotService.girlsDetails(sender_psid, "KG20787");
                break;
            case "KGH20843_DETAIL":
                await chatbotService.girlsDetails(sender_psid, "KGH20843");
                break;
            case "KGH20847_DETAIL":
                await chatbotService.girlsDetails(sender_psid, "KGH20847");
                break;
            case "KGL20838_DETAIL":
                await chatbotService.girlsDetails(sender_psid, "KGL20838");
                break;
            case "KGL30846_DETAIL":
                await chatbotService.girlsDetails(sender_psid, "KGL30846");
                break;
            case "KGL30836_DETAIL":
                await chatbotService.girlsDetails(sender_psid, "KGL30836");
                break;
            default:
                console.log("run default switch case")

        }
    }
};

let handleSetupProfile = async (req, res) => {
    try {
        await homepageService.handleSetupProfileAPI();
        return res.redirect("/");
    } catch (e) {
        console.log(e);
    }
};

let getSetupProfilePage = (req, res) => {
    return res.render("profile.ejs");
};

let getInfoOrderPage = (req, res) => {
    let facebookAppId = process.env.FACEBOOK_APP_ID;
    return res.render("infoOrder.ejs", {
        facebookAppId: facebookAppId
    });
};

let setInfoOrder = async (req, res) => {
    try {
        let customerName = "";
        if (req.body.customerName === "") {
            customerName = "Empty";
        } else customerName = req.body.customerName;

        // I demo response with sample text
        // you can check database for customer order's status

        let response1 = {
            "text": `---Info about your lookup order---
            \nCustomer name: ${customerName}
            \nEmail address: ${req.body.email}
            \nOrder number: ${req.body.orderNumber}
            `
        };

        let response2 = templateMessage.setInfoOrderTemplate();

        await chatbotService.sendMessage(req.body.psid, response1);
        await chatbotService.sendMessage(req.body.psid, response2);

        return res.status(200).json({
            message: "ok"
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getHomePage: getHomePage,
    getWebhook: getWebhook,
    postWebhook: postWebhook,
    handleSetupProfile: handleSetupProfile,
    getSetupProfilePage: getSetupProfilePage,
    getInfoOrderPage: getInfoOrderPage,
    setInfoOrder: setInfoOrder
};

