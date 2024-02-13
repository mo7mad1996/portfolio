const packages = ["cors", "bodyParser", "dotenv", "importat_urls"];

module.exports = (app) =>
  packages.forEach((package) => require("./" + package)(app));
