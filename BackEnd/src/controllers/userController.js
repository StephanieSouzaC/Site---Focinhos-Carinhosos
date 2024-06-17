import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import funcionario from '../models/Funcionario.js';
import validarCPF from '../services/validadorCpf.js';

const secret = 'your_jwt_secret';

export const login = async (req, res) => {
  const { cpf, senha } = req.body;

  if (!validarCPF(cpf)) {
    console.log('Formato de CPF inválido:', cpf);
    return res.status(400).send({ error: 'Formato de CPF inválido' });
  }

  try {
    const Funcionario = await funcionario.findOne({ cpf });
    if (!Funcionario) {
      console.log('Funcionario não encontrado com o CPF:', cpf);
      return res.status(401).send({ error: 'CPF ou Senha inválida' });
    }

    if (!Funcionario.ativo) {
      console.log('Funcionario está inativo:', cpf);
      return res.status(403).send({ error: 'Usuário está inativo no sistema.' });
    }

    console.log('Funcionario found:', Funcionario);

    const isPasswordValid = bcrypt.compareSync(senha, Funcionario.senha);
    if (!isPasswordValid) {
      console.log('Senha errada para o CPF:', cpf);
      return res.status(401).send({ error: 'CPF ou Senha inválida' });
    }

    const token = jwt.sign({ userId: Funcionario._id }, secret, { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    console.log('Erro durante login:', error);
    res.status(500).send({ error: 'Login falhou' });
  }
};
