const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// data
const templatePath = path.join(__dirname, "template.html");
const html = fs.readFileSync(templatePath, "utf-8");

module.exports = (app) => {
  app.post("/send_mail", (req, res) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    async function main(req) {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"Mohamed Ibrahim 🙋‍♂️" <mo7mad369@gmail.com>',
        to: req.body.emails,
        subject: "Front-end web developer ✔",
        text: "Front-end developer",
        html: html,
        attachments: [
          {
            filename: "Mohamed-Ibrahim.pdf",
            contentType: "application/pdf",
            path: "./static/download/Mohamed-Ibrahim.pdf",
          },
        ],
      });
      const { accepted, rejected } = info;

      return { accepted, rejected };
    }

    main(req)
      .then((ok) => res.json(ok))
      .catch((error) => res.status(301).json({ error }));
  });
};
