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

getUsers()
getUser(1)

const newUser = {
    name: "Maria Eduarda",
    avatar: "https://picsum.photos/200/200",
    city: "Taubate - SP"
}
addUser(newUser)