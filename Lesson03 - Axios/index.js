const express = require("express")
const axios = require("axios")

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

app.route("/").get((req, res) => {
    const url = "https://api.github.com/users/leofrederiche"

    axios.get(url)
        .then( result => {
            let avatar = `<img src="${result.data.avatar_url}" />`
            res.send(avatar) 
        })
        .catch( error => res.send(error))
})