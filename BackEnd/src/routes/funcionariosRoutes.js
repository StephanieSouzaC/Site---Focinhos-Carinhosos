import express from "express";
import funcionarioController from "../controllers/funcionarioController.js";

const routes = express.Router();

routes.get('/Funcionarios', funcionarioController.getFuncionario);
routes.get('/Funcionarios/:id', funcionarioController.getFuncionarioById);
routes.get('/Funcionarios/nome/:nome', funcionarioController.getFuncionarioByName);
routes.get('/Funcionarios/cpf/:cpf', funcionarioController.getFuncionarioByCpf);
routes.post('/Funcionarios', funcionarioController.cadastrarFuncionario);
routes.put('/Funcionarios/nome/:nome', funcionarioController.alterarCadastroFuncionarioComNome);
routes.put('/Funcionarios/cpf/:cpf', funcionarioController.alterarCadastroFuncionarioComCpf);
routes.put('/Funcionarios/:id', funcionarioController.alterarCadastroFuncionarioComId);
routes.delete('/Funcionarios/:id', funcionarioController.deletarCadastroFuncionarioId);


export default routes;