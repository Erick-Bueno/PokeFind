const express = require("express")
const router = express.Router()
const apipoke = require("./controllers/ApiPokeController")



router.get("/pokemon/v1/:pokemon", apipoke.ApiPoke)


module.exports = router