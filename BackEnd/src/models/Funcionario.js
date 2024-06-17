import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcryptjs';

const funcionarioSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type:mongoose.Schema.Types.String, required: true},
    cpf:{type:mongoose.Schema.Types.String, required: true},
    email:{type:mongoose.Schema.Types.String, required: true},
    telefone:{type:mongoose.Schema.Types.String, required: true},
    senha:{type:mongoose.Schema.Types.String, required: true},
    funcao:{type:mongoose.Schema.Types.String},
    dataNascimento:{type:mongoose.Schema.Types.Date},
    ativo:{type: mongoose.Schema.Types.Boolean, required: true},
},{versionKey: false});

funcionarioSchema.pre('save', function(next) {
    if (this.isModified('senha')) {
      this.senha = bcrypt.hashSync(this.senha, 8);
    }
    next();
  });

const funcionario = mongoose.model("Funcionario", funcionarioSchema);

export default funcionario;