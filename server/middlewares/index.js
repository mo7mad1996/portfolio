module.exports = (app) => {
  app.use((req, res, next) => {
    switch (req.url) {
      case "/download/Mohamed-Ibrahim.pdf":
        // send downloaded your cv
        break;
      case "/email.png":
        // show your email
        break;
      default:
        return next();
    }
    next();
  });
};
