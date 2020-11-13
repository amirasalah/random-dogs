const URL = 'https://dog.ceo/api/breeds/image/random'

const image = document.querySelector('.image')

function fetchRandomDogs(url) {
    let imageUrl = ''
    fetch(url)
        .then(response => response.json())
        .then(json => {
            imageUrl = json.message
            const innerImage = document.createElement('img')
            innerImage.src = imageUrl
            image.appendChild(innerImage)
        })
}
fetchRandomDogs(URL)
