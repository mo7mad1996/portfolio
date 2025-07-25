// ..:: packages ::..
const express = require("express");

// nuxt
const { Nuxt, Builder } = require("nuxt");

// ..:: Constants ::..
const app = express();

// ..:: middlewares ::..
require("./middlewares")(app);
const config = require("../nuxt.config");

// ..:: routes ::..
app.use("/api", require("./api"));

// ..:: start function ::..
async function start() {
  const nuxt = new Nuxt(config);
  const { port } = nuxt.options.server;

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else await nuxt.ready();

  app.use(nuxt.render);

  // ..:: Running server ::..
  app.listen(port, () => console.log(`http://localhost:${port}`));
}
start();
