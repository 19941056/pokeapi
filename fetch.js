const lista=document.querySelector('.lista');



const getPokemon=async() => {
    const trokemon=[];
    for (let i = 1; i < 151; i++) {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
        const pokemonData = await result.json();
        trokemon.push(pokemonData);
        console.log(trokemon);
        
    }
    
    
    const pokemons=trokemon.map((pokemon)=>({
        name:pokemon.name,
        image:pokemon.sprites.other['official-artwork']['front_default'],
        id:pokemon.id

    }))

    pintarPokemon(pokemons)
}
const pintarPokemon=(pokemons)=>{
   const pokemonsHtml=pokemons.map(
        (element)=>
        `<li><h2>${element.name}</h2>
        <img src="${element.image}"
        /><p>#${element.id}</p></li>`).join(' ');
        lista.innerHTML=pokemonsHtml
    



}

getPokemon();
    
  //  pintarPokemon(pokemons)
//}
//const pintarPokemon=pokemons=>{
  //  const pokemonsHtml=pokemons.map(
    //    (element)=>
     //   `<li><h2>${element.name}</h2>
      //  <img src="${element.image}"/></li>`).join(' ');
     //   lista.innerHTML=pokemonsHtml
    
//}


