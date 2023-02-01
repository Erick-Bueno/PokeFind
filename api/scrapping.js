

async function scrap(pokemon){
//configuração para n dar erro de deploy na vercel!!!!
let chrome = {};
let pupe;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  pupe = require("puppeteer-core");
} else {
  pupe = require("puppeteer");
}

let options = {};

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
      ignoreDefaultArgs: ['--disable-extensions']
    };
  }
//--------------------------------------------------------------------------
  const browser = await pupe.launch(options)  
    try {
        
        const page = await browser.newPage()
        await page.goto(`https://www.pokemon.com/br/pokedex/${pokemon}`)
        const dados = await page.evaluate(function() {
            const info = document.querySelectorAll(".attribute-value")
            const list = [...info]
            const dados = list.map(function(d){
                return {
                    dados: d.textContent
                }
            })
            const tipos = []
            const info2 = document.querySelectorAll(".dtm-type ul li a")
            const list2 = [...info2]
            const dados2 = list2.map(function(d2){
                return{
                    dados2:d2.textContent
                }
                
                
            })
            for(var c in dados2){
                tipos.push(dados2[c].dados2)
    
            }
           
            const altura = dados[0].dados
            const peso = dados[1].dados
            const categoria = dados[3].dados
            const habilidade = dados[4].dados
     
            
    
            const pokemon = {
                'altura': altura,
                'peso': peso,
                'categoria': categoria,
                'habilidade':habilidade,
                'tipo': tipos
            }
             
           
           
           
            
            return pokemon
            
           
        
        })
        
        await browser.close()
        return dados
        
        } catch (error) {
            await browser.close()
            return 'pokemon não encontrado'
            
            
        }
}
module.exports = scrap
