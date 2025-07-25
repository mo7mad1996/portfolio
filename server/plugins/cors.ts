export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response) => {
    response.headers ||= {};
    response.headers["Access-Control-Allow-Origin"] = "*";
    response.headers["Access-Control-Allow-Methods"] =
      "GET, POST, PUT, DELETE, OPTIONS";
    response.headers["Access-Control-Allow-Headers"] =
      "Content-Type, Authorization";
  });
});
