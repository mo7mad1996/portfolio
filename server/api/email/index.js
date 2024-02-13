const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const templatePath = path.join(__dirname, "template.html");

const html = fs.readFileSync(templatePath, "utf-8");

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
    subject: "full-stack web developer ✔",
    text: "looking for job",
    html: html,
  });
  const { accepted, rejected } = info;

  return { accepted, rejected };
}

module.exports = (app) => {
  app.post("/send_mail", (req, res) => {
    const data = main().catch(console.error);
    res.json(data);
  });
};
