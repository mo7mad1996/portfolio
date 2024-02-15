const geoip = require("geoip-lite");
const requestIP = require("request-ip");

var https = require("https");

module.exports = (app) => {
  app.use((req, res, next) => {
    switch (req.url) {
      case "/download/Mohamed-Ibrahim.pdf":
        // send downloaded your cv
        get_client_data(req, "حد نزل الملف")
          .then(() => next())
          .catch((err) => {
            console.log(err);
            next();
          });
        break;
      // case "/email.png":
      //   // show your email
      //   send_SMS(get_client_data(req, "حد شاف الايميل"))
      //     .then(() => next())
      //     .catch(() => next());
      //   break;
      default:
        next();
    }
  });
};

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

function send_SMS(msg) {
  const client = require("twilio")(accountSid, authToken);

  return client.messages.create({
    body: msg,
    from: "+12292644354",
    to: "+201063525389",
  });
}
async function get_client_data(req, str) {
  // const ip = req.socket.remoteAddress;
  const ip = requestIP.getClientIp(req);

  let url = `https://api.ip2location.io/?key=${process.env.IP2LOCATION_API_KEY}&ip=${ip}&format=json`;

  const time = new Date().toLocaleString();

  const geo = geoip.lookup(ip);
  let latitude, longitude;

  let response = "";
  https.get(url, function (res) {
    res.on("data", (chunk) => (response = response + chunk));
    res.on("end", function () {
      {
        latitude = response.latitude;
        longitude = response.longitude;
      }
    });
  });

  if (latitude) {
    let text = `${str}
    ip: ${ip}
    Time: ${time}
    ${JSON.stringify(geo)}
    ${JSON.stringify(response)}

    https://www.google.com/maps/search/?api=1&query=${latitude},${longitude} 
    
    `;

    send_SMS(text);
  }
}
