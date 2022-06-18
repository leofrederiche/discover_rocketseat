const { NameModel } = require("../data/name")

const getIndex = (req) => {
    return req.params.index - 1
}

const index = (req, res) => {
    return res.send(NameModel)
}

const insert = (req, res) => {
    const name = req.body.content

    NameModel.push(name)

    return res.send(name)
}

const show = (req, res) => {
    const index = getIndex(req)
    return res.send(NameModel[index])
}

const update = (req, res) => {
    const index = getIndex(req)
    const newName = req.body.content
    
    NameModel[index] = newName

    return res.send(NameModel[index])
}

const destroy = (req, res) => {
    const index = getIndex(req)

    const deletedName = NameModel.splice(index, 1)[0]

    return res.send(`Nome "${deletedName}" excluido`)
}

module.exports = { index, insert, show, update, destroy }