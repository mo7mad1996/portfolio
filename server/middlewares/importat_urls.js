// packages
const nodemailer = require("nodemailer");
const requestIP = require("request-ip");
const axios = require("axios");

// constants
const api_key = process.env.IP2LOCATION_API_KEY;

module.exports = (app) => {
  app.use((req, res, next) => {
    switch (req.url) {
      case "/download/Mohamed-Ibrahim.pdf":
        // send downloaded your cv
        notification_me(req, "حد نزل ملف السيره الذاتيه", next);
        break;

      default:
        next();
    }
  });
};

async function notification_me(req, msg, next) {
  /**
   *
   * 1) get data location
   * 2) create my message's text
   * 3) send SMS
   *
   */

  //  get IP address
  const ip = requestIP.getClientIp(req);

  // get information about ip
  let url = `https://api.ip2location.io/?key=${api_key}&ip=${ip}&format=json`;
  const { data } = await axios.get(url);

  // create text message
  const text = make_text(data, msg);

  useEmail(text);
  next();
}
function make_text(data, msg) {
  const ip = data.ip;
  const time = new Date().toLocaleString("ar-EG");
  const address = `${data.country_name} - ${data.region_name}`;
  const google_map = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;

  // text
  return `
  <H1>${msg}</H1>
  <ul>
    <li>ip: ${ip}</li>
    <li>at: ${time}</li>
    <li>address: ${address}</li>
    <li><a href='${google_map}'>location</a></li>
  </ul>
  `;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function useEmail(msg) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Mohamed Ibrahim 🙋‍♂️" <mo7mad369@gmail.com>',
    to: "mo7mad369@gmail.com",
    subject: "cv notification ✔",
    text: "downloading done",
    html: msg,
  });
  const { accepted, rejected } = info;

  return { accepted, rejected };
}
