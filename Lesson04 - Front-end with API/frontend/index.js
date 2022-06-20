const express = require("express")

const app = express()
const port = 8080

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

// Run folder public like a Static Page
app.use("/", express.static("public"))