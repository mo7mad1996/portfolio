import type { IncomingMessage } from "http";
import requestIP from "request-ip";
import axios from "axios";
import nodemailer from "nodemailer";
import { getRequestIP } from "h3";

// read .env file
const api_key = useRuntimeConfig().IP2LOCATION_API_KEY;

export default defineEventHandler(async (event) => {
  const { req } = event.node;
  const localIP = getRequestIP(event);

  console.log(localIP);
  // define middleware path
  // send notification
  await notification_me(req);
  if (req.url === "/download/Mohamed-Ibrahim.pdf") {
  }
});

async function notification_me(req: IncomingMessage) {
  // 1) Get IP
  const ip = requestIP.getClientIp(req);

  console.log({ ip });
  // 2) Get location data for IP
  let url = `https://api.ip2location.io/?key=${api_key}&ip=${ip}&format=json`;
  //   const { data } = await axios.get(url);

  // await useEmail(make_text(data, "حد نزل ملف السيره الذاتيه"));
  await useEmail(
    make_text(
      {
        ip: "123",
        region_name: "gap",
        country_name: "ass",
        latitude: 1,
        longitude: 1,
      },
      "حد نزل ملف السيره الذاتيه"
    )
  );
}

function make_text(data: any, msg: string) {
  const ip = data.ip;
  const time = new Date().toLocaleString("ar-EG");
  const address = `${data.country_name} - ${data.region_name}`;
  const google_map = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;

  // Create HTML
  return `
    <H1>${msg}</H1>
    <ul>
      <li>ip: ${ip}</li>
      <li>at: ${time}</li>
      <li><a href='${google_map}'> ${address}</a></li>
    </ul>
  `;
}

// Email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: useRuntimeConfig().EMAIL_USER,
    pass: useRuntimeConfig().EMAIL_PASS,
  },
});

// Send Email
async function useEmail(msg: string) {
  // Send Email
  const info = await transporter.sendMail({
    from: '"Mohamed Ibrahim 🙋‍♂️" <mo7mad369@gmail.com>',
    to: "mo7mad369@gmail.com",
    subject: "cv notification ✔",
    text: "downloading done",
    html: msg,
  });

  return { accepted: info.accepted, rejected: info.rejected };
}
