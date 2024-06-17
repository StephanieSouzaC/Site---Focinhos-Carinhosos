import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    nome:{type: mongoose.Schema.Types.String, required: true},
    tipo:{type:mongoose.Schema.Types.String, required: true},
    idade:{type:mongoose.Schema.Types.Number},
    porte:{type:mongoose.Schema.Types.String},
    cor:{type:mongoose.Schema.Types.String, required: true},
    linkImg:{type: mongoose.Schema.Types.String, required: true},
    observacao:{type: mongoose.Schema.Types.String, required: true},
    ativo:{type: mongoose.Schema.Types.Boolean, required: true},
}, {versionKey: false});

const animal = mongoose.model("Animal", animalSchema);

export default animal;