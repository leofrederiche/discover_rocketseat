const { index } = require("./index")

const nameRoute = require("./name")

const route = (app) => {
    app.route("/").get(index)

    app.route("/name").get(nameRoute.index)
    app.route("/name").post(nameRoute.insert)
    app.route("/name/:index").put(nameRoute.update)
    app.route("/name/:index").get(nameRoute.show)
    app.route("/name/:index").delete(nameRoute.destroy)
}

module.exports = { route }