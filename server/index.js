// ..:: packages ::..
const express = require("express");
const mongoose = require("mongoose");

// nuxt
const { Nuxt, Builder } = require("nuxt");

// ..:: Constants ::..
const app = express();

// ..:: middlewares ::..
require("./middlewares")(app);
const config = require("../nuxt.config");

// ..:: connect to database ::..
const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then((/* v */) => console.log(">_ connect to Database" /*, v */))
  .catch((err) => console.log(">_ Cannot connect with DB:", err));

// ..:: database modles ::..
require("./models");

// ..:: routes ::..
app.use("/api", require("./api"));

// ..:: start function ::..
async function start() {
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  app.use(nuxt.render);

  // ..:: Running server ::..
  app.listen(port, host, (_) => console.log(`http://${host}:${port}`));
}
start();
