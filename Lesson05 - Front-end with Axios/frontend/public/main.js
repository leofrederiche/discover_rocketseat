const url = "http://localhost:3000/api"

var users = []

function getUsers() {
    axios.get(url)
    .then( response => {
        users = response.data
        apiResult.textContent = JSON.stringify(users)
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

function addUser(user) {
    axios.post(url, user)
    .then( response => {
        apiNotification.textContent = JSON.stringify(response.data)
    })
    .catch( error => console.error(error))
}

function updateUser(params) {
    const { id, user } = params

    axios.put(`${url}/${id}`, user)
    .then( response => {
        apiNotification.textContent = JSON.stringify(response.data)
    })
    .catch( error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then( response => {
        apiNotification.textContent = JSON.stringify(response.data)
    })
    .catch( error => console.error(error))
}

getUsers()
getUser(1)

const newUser = {
    name: "Maria Eduarda",
    avatar: "https://picsum.photos/200/200",
    city: "Taubate - SP"
}
// addUser(newUser)

const modifiedUser = {
    name: "Heloisa Camp",
    avatar: "https://picsum.photos/200/200",
    city: "Campos - SP"
}
// updateUser({ id: 1, user: modifiedUser})

deleteUser(1)