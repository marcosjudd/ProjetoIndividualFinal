import express from "express";
import user from './src/controllers/user.js'
import filme from './src/controllers/filme.js'
import filmeParaVer from './src/controllers/filmeParaVer.js'
import filmeVisto from './src/controllers/filmeVisto.js'

const routes = express.Router();

routes.get("/user", user.findAll);
routes.post("/user", user.addUser);
routes.get("/user/:id", user.findUser);
routes.put("/user/:id", user.updateUser);
routes.delete("/user/:id", user.deleteUser);

routes.get("/filme", filme.findAll);
routes.post("/filme", filme.addFilme);
routes.get("/filme/:id", filme.findFilme);
routes.put("/filme/:id", filme.updateFilme);
routes.delete("/filme/:id", filme.deleteFilme);

routes.get("/filmeparaver", filmeParaVer.findAll);
routes.post("/filmeparaver", filmeParaVer.addFilmeParaVer);
routes.get("/filmeparaver/:id", filmeParaVer.findFilmeParaVer);
routes.put("/filmeparaver/:id", filmeParaVer.updateFilmeParaVer);
routes.delete("/filmeparaver/:id", filmeParaVer.deleteFilmeParaVer);

routes.get("/filmevisto", filmeVisto.findAll);
routes.post("/filmevisto", filmeVisto.addFilmeVisto);
routes.get("/filmevisto/:id", filmeVisto.findFilmeVisto);
routes.put("/filmevisto/:id", filmeVisto.updateFilmeVisto);
routes.delete("/filmevisto/:id", filmeVisto.deleteFilmeVisto);

export { routes as default };