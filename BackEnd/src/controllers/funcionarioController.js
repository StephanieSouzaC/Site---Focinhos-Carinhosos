import funcionario from "../models/Funcionario.js";
import validarCPF from "../services/validadorCpf.js";

class funcionarioController {

    static async getFuncionario(req, res){
        try{
            const getFuncionario = await funcionario.find({});
            res.status(200).json(getFuncionario);
        }catch (error) {
            res.status(500).json({message: `${error.message} - falha na requisição.`});
        };
    };

    static async getFuncionarioById(req, res){
        try{
            const id = req.params.id;
            const funcionarioEncontrado = await funcionario.findById(id);
            res.status(200).json(funcionarioEncontrado);
        } catch (error){
            res.status(500).json({message: `${error.message} - Falha na busca.`});
        };
    };

    static async getFuncionarioByName(req, res) {
        try {
            const nome = req.params.nome;
            const funcionarioEncontradoNome = await funcionario.findOne({ nome: nome });

            if (funcionarioEncontradoNome) {
                res.status(200).json(funcionarioEncontradoNome);
            } else {
                res.status(404).json({ message: 'Funcionário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na busca.` });
        };
    };

    static async getFuncionarioByCpf(req, res) {
        try {
            const cpf = req.params.cpf;
            const cpfValido = validarCPF(cpf);
            
            if (!cpfValido) {
                return res.status(400).json({ message: "CPF inválido." });
            }
    
            const funcionarioEncontradoCpf = await funcionario.findOne({ cpf: cpf });
    
            if (funcionarioEncontradoCpf) {
                res.status(200).json(funcionarioEncontradoCpf);
            } else {
                res.status(404).json({ message: 'Funcionário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na busca.` });
        };
    };

    static async cadastrarFuncionario(req, res) {
        try {
            const cpfValido = validarCPF(req.body.cpf);
            if (!cpfValido) {
                return res.status(400).json({ message: "CPF inválido." });
            }
            const novoFuncionario = await funcionario.create(req.body);
            res.status(201).json({ message: "Funcionário cadastrado com sucesso", funcionario: novoFuncionario }); 
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar o funcionário.` });
        };
    };

    static async alterarCadastroFuncionarioComNome(req, res){
        try{
            const nome = req.params.nome;
            const funcionarioEncontradoNome = await funcionario.findOne({ nome: nome });
            await funcionario.findOneAndUpdate(funcionarioEncontradoNome, req.body);
            res.status(200).json({message:"Cadastro do funcionário alterado com sucesso."});
        } catch(error){
            res.status(500).json({message:`${error.message} - Falha ao alterar o cadastro.`});
        };
    };
  
    static async alterarCadastroFuncionarioComCpf(req, res) {
        try {
            const cpf = req.params.cpf;
            const cpfValido = validarCPF(cpf);
            if (!cpfValido) {
                return res.status(400).json({ message: "CPF inválido." });
            }
            const funcionarioEncontradoCpf = await funcionario.findOne({ cpf: cpf });
            if (!funcionarioEncontradoCpf) {
                return res.status(404).json({ message: "Funcionário não encontrado." });
            }
            await funcionario.findOneAndUpdate({ cpf: cpf }, req.body);
            res.status(200).json({ message: "Cadastro do funcionário alterado com sucesso." });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao alterar o cadastro.` });
        };
    };

    static async alterarCadastroFuncionarioComId(req, res){
        try{
            const id = req.params.id;
            await funcionario.findByIdAndUpdate(id, req.body);
            res.status(200).json({message:"Cadastro do funcionario alterado com sucesso."});
        } catch(error){
            res.status(500).json({message:`${error.message} - Falha ao alterar o cadastro.`});
        };
    };

    static async deletarCadastroFuncionarioId(req, res) {
        try {
            const id = req.params.id;
            await funcionario.findByIdAndDelete(id);
            res.status(200).json({message: "Cadastro do funcionário deletado"});
        } catch (error) {
            res.status(500).json({message: `${error.message} - falha na exclusão.`});
        };
    };

    static async getFuncionarioByNomeAndCpf(req, res) {
        try {
            const { nome, cpf } = req.query;
            const cpfValido = validarCPF(cpf);
            
            if (!cpfValido) {
                return res.status(400).json({ message: "CPF inválido." });
            };
    
            const funcionarioEncontrado = await funcionario.findOne({ nome: nome, cpf: cpf });
    
            if (funcionarioEncontrado) {
                res.status(200).json(funcionarioEncontrado);
            } else {
                res.status(404).json({ message: 'Funcionário não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha na busca.` });
        };
    };
};

export default funcionarioController;