const express = require("express")

const swaggerUI = require("swagger-ui-express")
const swaggerDocument = require("./swagger")

const app = express()
const port = 3000
const author = "Leonardo Frederiche"

// Middleware
app.use(express.json())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))


app.listen(port, () => {
    console.log(`Server litening on port ${port}`)
})

// Body Params
app.post("/body", (req, res) => {
    // const content = req.body.content
    const { content } = req.body

    const result = {
        status: 1,
        body: content,
        author
    }

    res.send(result)
})

// Route Params
app.get("/route/:content", (req, res) => {
    // const content = req.params.content
    const { content } = req.params

    const result = {
        status: 2,
        body: content,
        author
    }

    res.send(result)
})

// Query Params
app.get("/query", (req, res) => {
    // const content = req.query.content
    const { content } = req.query

    const result = {
        status: 3,
        body: content,
        author
    }

    res.send(result)
})




