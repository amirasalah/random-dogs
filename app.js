const URL = 'https://dog.ceo/api/breeds/image/random'


function fetchRandomDogs(url) {
    let data = []
    fetch(url)
        .then(response => response.json())
        .then(json => {
            data = json
            console.log(data.message)
            return data.message
        })
}

fetchRandomDogs(URL)
