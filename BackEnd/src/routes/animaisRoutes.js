import express from "express";
import animalController from "../controllers/animalController.js";

const routes = express.Router();

routes.get('/Animais', animalController.getAnimais);
routes.get('/Animais/:id', animalController.getAnimaisById);
routes.get('/Animais/nome/:nome', animalController.getAnimaisByName);
routes.get('/Animais/ativo/tipo/:tipo', animalController.getAnimaisByTypeApenasAtivo);
routes.get('/Animais/tipo/:tipo', animalController.getAnimaisByType);
routes.get('/Animais/tipo/:tipo/nome/:nome', animalController.getAnimaisByTypeAndName);
routes.post('/Animais', animalController.cadastrarAnimal);
routes.put('/Animais/nome/:nome', animalController.alterarCadastroAnimalComNome);
routes.put('/Animais/:id', animalController.alterarCadastroAnimalComId);
routes.delete('/Animais/:id', animalController.deletarCadastroAnimalId);

export default routes;