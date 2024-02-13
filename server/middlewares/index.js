const packages = ["cors", "bodyParser", "importat_urls", "dotenv"];

module.exports = (app) =>
  packages.forEach((package) => require("./" + package)(app));
