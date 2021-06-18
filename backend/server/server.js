const app = require('../app');
var express = require('express');


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

}

app.listen(process.env.PORT || 4000, () => console.log("server is up and running"));

module.exports = app;
