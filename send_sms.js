require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioFromPhoneNo = process.env.TWILIO_FROM_PHONE_NUMBER;
const twilioToPhoneNo = process.env.TWILIO_TO_PHONE_NUMBER

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: twilioFromPhoneNo,
     to: twilioToPhoneNo,
   })
  .then(message => console.log(message.sid));