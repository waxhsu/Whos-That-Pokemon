//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
window.onload = (event) => {
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)


        console.log(Math.floor(Math.random()*data.length))

        document.querySelector('#pokemonHidden').src = data.sprites.other['official-artwork'].front_default


      })
      .catch(err => {
          console.log(`error ${err}`)
      });

}




function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)


        document.querySelector('h2').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1)
        document.querySelector('#typeOne').innerText = data.types[0].type.name

        
        if (data.types[1] == null){
          document.querySelector('#typeTwo').innerText = ''
        } else {
          document.querySelector('#typeTwo').innerText = data.types[1].type.name
        }
        
        document.querySelector('#pokemonHidden').src = data.sprites.other['official-artwork'].front_default


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}



// given information
// types
// generation
// there's 1008 entries THUS far


