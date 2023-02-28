//Example fetch using pokemonapi.co
window.onload = (event) => {
  const dexNumber = Math.floor(Math.random()*151)
  const url = 'https://pokeapi.co/api/v2/pokemon/'+dexNumber

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#thePokemon').src = data.sprites.other['official-artwork'].front_default


        document.querySelector('button').addEventListener('click', guessPokemon)




        function guessPokemon(){
          const guess = document.querySelector('input').value.toLowerCase()
          let capName = data.name.charAt(0).toUpperCase() + data.name.slice(1)



          if (guess == data.name){
            document.querySelector('h1').innerText = `That's right! It's.. ${capName}!`
          } else {
            document.querySelector('h1').innerText = `Nope! It's actually.. ${capName}!`


          }

          //toggle filter brightness back
          document.querySelector('#thePokemon').classList.toggle('hidden')
          //removeEventListener to prevent user from toggling 
          document.querySelector('button').removeEventListener('click', guessPokemon)
        }





      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}