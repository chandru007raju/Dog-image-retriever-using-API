console.log('hello')
// https://dog.ceo/api/breeds/image/random

const dogImageDiv = document.getElementById('dogImage')
const catImageDiv = document.getElementById('catImage')
const buttonDiv = document.getElementById('button')
buttonDiv.onclick = () => getNewDog()

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json.message)
      dogImageDiv.innerHTML = `<img height="250px" src=${json.message}>`
    })

  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json.message)
      catImageDiv.innerHTML = `<img height="250px" src=${json.message}>`
    })
}



