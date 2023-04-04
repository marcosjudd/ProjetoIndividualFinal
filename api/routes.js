import express from "express";
import user from './src/controllers/user.js'
import jogo from './src/controllers/jogo.js'
import jogoParaVer from './src/controllers/jogoParaVer.js'
import jogoVisto from './src/controllers/jogoVisto.js'

const routes = express.Router();

routes.get("/user", user.findAll);
routes.post("/user", user.addUser);
routes.get("/user/:id", user.findUser);
routes.put("/user/:id", user.updateUser);
routes.delete("/user/:id", user.deleteUser);

routes.get("/jogo", jogo.findAll);
routes.post("/jogo", jogo.addjogo);
routes.get("/jogo/:id", jogo.findjogo);
routes.put("/jogo/:id", jogo.updatejogo);
routes.delete("/jogo/:id", jogo.deletejogo);

routes.get("/jogoparaver", jogoParaVer.findAll);
routes.post("/jogoparaver", jogoParaVer.addjogoParaVer);
routes.get("/jogoparaver/:id", jogoParaVer.findjogoParaVer);
routes.put("/jogoparaver/:id", jogoParaVer.updatejogoParaVer);
routes.delete("/jogoparaver/:id", jogoParaVer.deletejogoParaVer);

routes.get("/jogovisto", jogoVisto.findAll);
routes.post("/jogovisto", jogoVisto.addjogoVisto);
routes.get("/jogovisto/:id", jogoVisto.findjogoVisto);
routes.put("/jogovisto/:id", jogoVisto.updatejogoVisto);
routes.delete("/jogovisto/:id", jogoVisto.deletejogoVisto);

export { routes as default };