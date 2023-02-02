<h1> API POKEMON <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pokebola-Pok%C3%A9mon-PNG-1024x1022.png" width="50px" /> </h1>

</p> O PokeFind Pemite a busca de informações de varios pokemons, todos os dados são extraidos da <a href="https://www.pokemon.com/br/pokedex/">Pokedex</a> utilizando webscrapping.

</p> Na versão atual é possivel visualizar as seguintes informações do poke:</p>
<ul>
  <li>ALTURA</li>
  <li>PESO</li>
  <li>CATEGORIA</li>
  <li>HABILIDADE</li>
  <li>TIPO</li>
</ul>

<h2>Endpoints e Responses</h2>
<ul>
  <li>/pokemon/v1/{Nome do pokemon}</li>
</ul>

 <p>Response:</p>
 <pre>
[
  {
    altura: string,
    peso: string,
    categoria: string,
    habilidade: string,
    tipos: string[]
  }
]
 </pre>
 
 <h2>Exemplo</h2>
 <p>https://poke-find.vercel.app/pokemon/v1/charmander<p>
  <pre>
  [
   {
    "altura": "0.6 m",
    "peso":"8.5 kg",
    "categoria":"Lizard",
    "habilidade":"Blaze",
    "tipo":[
    "Fire"
    ]
  }
 ]
  </pre>
 
