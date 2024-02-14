var geoip = require("geoip-lite");

module.exports = (app) => {
  app.use((req, res, next) => {
    switch (req.url) {
      case "/download/Mohamed-Ibrahim.pdf":
        // send downloaded your cv
        send_SMS(get_client_data(req, "حد نزل الملف"))
          .then(() => next())
          .catch((err) => {
            console.log(err);
            next();
          });
        break;
      case "/email.png":
        // show your email
        send_SMS(get_client_data(req, "حد شاف الايميل"))
          .then(() => next())
          .catch(() => next());
        break;
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
function get_client_data(req, str) {
  const ip = req.ip;
  const time = new Date().toLocaleString();

  const geo = geoip.lookup(ip);

  let text = `${str}
    ip: ${ip}
    Time: ${time}
    ${JSON.stringify(geo)}
    `;

  return text;
}
