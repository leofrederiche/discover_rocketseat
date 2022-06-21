// Local API like BACKEND
const url = "http://localhost:3000/api"

const getUsers = () => {
    fetch(url)
        .then( response => response.json())
        .then( data => apiResiltGetUsers.textContent = JSON.stringify(data) )
        .catch( error => console.error(error) )
}

const getUser = (id) => {
    fetch(`${url}/${id}`)
        .then( response => response.json())
        .then( data => {
            userName.textContent = data.name
            userAvatar.src = data.avatar
            userCity.textContent = data.city
        })
        .catch( error => console.error(error))
}

const newUser = {
    name: "Maria Eduarda",
    avatar: "https://pps.whatsapp.net/v/t61.24694-24/225043864_138098855475195_3648358203373206951_n.jpg?ccb=11-4&oh=c6576f651b637cf0ddbadf9ff531e5a4&oe=62BF43C8",
    city: "Pindamonhangaba"
}

const addUser = () => {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
        .then( response => response.json() )
        .then( data => {
            apiNotification.textContent = data
        })
        .catch( error => console.log(error) )
}

const changeUser = {
    name: "Heloisa Frederiche",
    avatar: "https://i.pinimg.com/originals/43/4e/3e/434e3e8b6c88779dd5f68706ca28bfa8.jpg",
    city: "Pindamonhangaba"
}

const updateUser = (id) => {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(changeUser),
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
        .then( response => response.json())
        .then( data => {
            apiNotification.textContent = data 
        })
        .catch( error => console.log(error))
}

getUsers()
getUser(1)
// addUser()
updateUser(1)