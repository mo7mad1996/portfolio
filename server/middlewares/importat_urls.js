const twilio = require("twilio");

module.exports = (app) => {
  app.use((req, res, next) => {
    switch (req.url) {
      case "/download/Mohamed-Ibrahim.pdf":
        // send downloaded your cv
        send_SMS("حد نزل الملف")
          .then(() => next())
          .catch((_) => next());
        break;
      case "/email.png":
        // show your email
        send_SMS("حد شاف الايميل")
          .then(() => next())
          .catch((_) => next());
        break;
      default:
        next();
    }
    next();
  });
};

function send_SMS(msg) {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_TOKEN;

  const client = twilio(accountSid, authToken);
  return client.messages.create({
    body: msg,
    from: "portfolio",
    to: "+201063525389",
  });
}
