import axios from "axios";
import nodemailer from "nodemailer";
import requestIp from "request-ip";

// read .env file
const env = useRuntimeConfig();
const api_key = env.IP2LOCATION_API_KEY;

export default defineEventHandler(async (event) => {
  const { req } = event.node;
  if (env.NODE_ENV == "development") return;

  // 1) Get IP
  const ip = requestIp.getClientIp(req);
  if (!ip || req.method != "GET") return;

  // define middleware path
  switch (req.url) {
    case "/download/Mohamed-Ibrahim.pdf":
      // send notification
      await notification_me(ip, "حد نزل الCV");
      break;

    default:
      await notification_me(ip, `وصل هنا ${req.url}`);
  }
});

async function notification_me(ip: string, msg: string) {
  // 2) Get location data for IP
  let url = `https://api.ip2location.io/?key=${api_key}&ip=${ip}&format=json`;
  const { data } = await axios.get(url);

  await useEmail(make_text(data, msg));
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
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
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
