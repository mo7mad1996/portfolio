import { createTransport } from "nodemailer";
import { readFileSync } from "fs";
import { join } from "path";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: config.EMAIL_USER,
      pass: config.EMAIL_PASS,
    },
  });

  const templatePath = "./template.html";
  const html = readFileSync(templatePath, "utf-8");

  const info = await transporter.sendMail({
    from: '"Mohamed Ibrahim 🙋‍♂️" <mo7mad369@gmail.com>',
    to: body.emails,
    subject: "Front-end web developer ✔",
    text: "Front-end developer",
    html,
    attachments: [
      {
        filename: "Mohamed-Ibrahim.pdf",
        contentType: "application/pdf",

        path: "https://portfolio-mohamed-ibrahim.vercel.app/download/Mohamed-Ibrahim.pdf",
      },
    ],
  });

  return {
    accepted: info.accepted,
    rejected: info.rejected,
  };
});
