const url = "localhost:3000/api"

function getUser() {
    axios.get("/")
    .then( response => {
        apiResult.textContent = JSON.stringify(response.body)
    })
}