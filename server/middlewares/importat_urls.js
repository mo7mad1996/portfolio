// packages
// const geoip = require("geoip-lite");
const requestIP = require("request-ip");
const axios = require("axios");

// constants
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const api_key = process.env.IP2LOCATION_API_KEY;

module.exports = (app) => {
  app.use((req, res, next) => {
    switch (req.url) {
      case "/download/Mohamed-Ibrahim.pdf":
        // send downloaded your cv
        notification_me(req, "حد نزل ملف السيره الذاتيه")
          .then(() => next())
          .catch(() => next());

        break;

      default:
        next();
    }
  });
};

async function notification_me(req, msg) {
  /**
   *
   * 1) get data location
   * 2) create my message's text
   * 3) send SMS
   *
   */

  //  get IP address
  // const ip = requestIP.getClientIp(req);
  const ip = "41.235.141.81";

  // get information about ip
  let url = `https://api.ip2location.io/?key=${api_key}&ip=${ip}&format=json`;
  const { data } = await axios.get(url);

  // create text message
  const text = make_text(data, msg);

  return send_SMS(text);
}
function make_text(data, msg) {
  const ip = data.ip;
  const time = new Date().toLocaleString("ar-EG");
  const address = `${data.country_name} - ${data.region_name}`;
  const google_map = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;

  // text
  return (
    msg +
    `
  ip: ${ip}
  at: ${time}
  address: ${address}

  location: ${google_map}
  `
  );
}

function send_SMS(msg) {
  const client = require("twilio")(accountSid, authToken);
  return client.messages.create({
    body: msg,
    from: "+12292644354",
    to: "+201063525389",
  });
}
