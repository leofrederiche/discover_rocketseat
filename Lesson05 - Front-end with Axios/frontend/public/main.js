const url = "http://localhost:3000/api"

function getUsers() {
    axios.get(url)
    .then( response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch( error => console.error(error))
}

getUsers()