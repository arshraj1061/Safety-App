const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const twilio = require('twilio');
const accountSid = functions.config().twilio.sid
const authToken  = functions.config().twilio.token

const client = new twilio(accountSid, authToken);

const twilioNumber = "+12395108844"

function validE164(num) {
    return /^\+?[1-9]\d{1,14}$/.test(num)
}

