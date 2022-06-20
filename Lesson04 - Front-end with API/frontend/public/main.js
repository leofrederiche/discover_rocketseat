// Local API like BACKEND
const url = "http://localhost:3000/api"

const getUsers = () => {
    console.log("Consultando dados")
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

getUsers()
getUser(1)