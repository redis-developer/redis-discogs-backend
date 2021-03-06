require('dotenv').config({ override: false })

const express = require("express");
const app = express();
const controller = require('./controllers/album.controller.js');

(async () => {
  app.use(express.json())
  app.use(express.urlencoded({extended:true}))

  app.get("/api/reload", controller.reload)
  app.post("/api/albums", controller.create)
  app.get("/api/albums/", controller.getAll)
  app.get("/api/albums/search", controller.search)
  app.get("/api/albums/:entityID", controller.getOne)
  app.put("/api/albums/:entityID", controller.update)
  app.delete("/api/albums/:entityID", controller.delete)
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  })
})();
