const scrap = require("../scrapping")
exports.ApiPoke =  async (req, res) => {
    const pokemon = req.params.pokemon
    const data = await scrap(pokemon)
    res.send(data)
}