const app = require("express")();

const router = require("./router")

app.use(router)

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

module.exports = app;