process.env.TWILIO_ACCOUNT_SID="AC106fc12af7bcae7a333f03805cb55906"
process.env.TWILIO_AUTH_TOKEN="cf51831e8a217f0aaee0f6e5e4798411"
process.env.TWILIO_PHONE_NUMBER="+15878031118"
const client = require('twilio')(process.env.TWILIO_ACCOUT_SID,process.env.TWILIO_AUTH_TOKEN);

// require('dotenv').config();
// process.env.TWILIO_ACCOUNT_SID=TWILIO_ACCOUNT_SID;
// process.env.TWILIO_AUTH_TOKEN=TWILIO_AUTH_TOKEN;
// process.env.TWILIO_PHONE_NUMBER=TWILIO_FROM_PHONE_NUMBER
// const client = require('twilio')(process.env.TWILIO_ACCOUT_SID,process.env.TWILIO_AUTH_TOKEN);

const { Router } = require('express');
const jobs = require('../data/job');
const router = Router();

const url = `http://localhost:8080`;

const getAllJobs = (req, res) => {
    res.json(jobs.map(({...requestdate}) => ({
        ...requestdate,
        link: `{url}/jobs/${jobs.tradeid}`
    })
    ));
}

const createJob = (req, res) => {
    const { job } = req.body;
    console.log('====**', job);

    jobs.push(job);

    client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+16476574618",
      body: "Job: " + job.description + "; " + "City: " + job.city
             + "; " + "Requestor: " + job.requestorname + "; " 
             + "Phone No.: " +job.phoneno
    })
    .then(() => {
    console.log('Message Sent')
    })
    .catch(err => {
      console.log(err);
    });

    console.log('====>', jobs);
    return res.status(201).json({
        success: true,
        job,
    });
}

router.get('/',getAllJobs);
router.post('/', createJob);

module.exports = router;