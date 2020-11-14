const URL = 'https://dog.ceo/api/breeds/image/random'

const image = document.querySelector('.image')
const innerImage = document.createElement('img')

function fetchRandomDogs(url) {
    let imageUrl = ''
    innerImage.innerHTML = ''
    fetch(url)
        .then(response => response.json())
        .then(json => {
            imageUrl = json.message
            innerImage.src = imageUrl
            image.appendChild(innerImage)
        })
}
fetchRandomDogs(URL)
setInterval(() => {
    fetchRandomDogs(URL)
}, 10000)
