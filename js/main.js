window.onload = (event) => {
  // Range ONLY between 1 and 1008
  // Gen1 = 001 - 151
  // Gen2 = 152 - 251
  // Gen3 = 252 - 386
  // Gen4 = 387 - 493
  // Gen5 = 494 - 649
  // Gen6 = 650 - 721
  // Gen7 = 722 - 809
  // Gen8 = 810 - 905
  // Gen9 = 906 - 1010

  var dexNumber = Math.floor(Math.random()*151 + 1)
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


          //boolean logic if name is correct
          if (guess == data.name){
            document.querySelector('h1').innerText = `That's right! It's.. ${capName}!`
          } else {
            document.querySelector('h1').innerText = `Nope! It's actually.. ${capName}!`
          }

          //toggle filter brightness back
          document.querySelector('#thePokemon').classList.toggle('hidden')

          //removeEventListener to prevent user from toggling 
          document.querySelector('button').removeEventListener('click', guessPokemon)

          //add toggle for reload & remove skip
          document.querySelector('#tryAgain').classList.toggle('reload')
          document.querySelector('#skip').classList.toggle('reload')

        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

// try again function (reload page)
document.querySelector('#tryAgain').addEventListener('click', reload)
document.querySelector('#skip').addEventListener('click', reload)

function reload(){
  location.reload()
}



// next revision 
// 1 - add score counter | correct/wrong/skipped
// 2 - option to select generations
// 3 - after submit, show typing and other forms if exist


}