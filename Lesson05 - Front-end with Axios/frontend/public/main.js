const url = "http://localhost:3000/api"

function getUsers() {
    axios.get(url)
    .then( response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch( error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then( response => {
        const { name, avatar, city } = response.data
        userName.textContent = name
        userAvatar.src = avatar
        userCity.textContent = city
    })
    .catch( error => console.error(error))
}

getUsers()
getUser(1)