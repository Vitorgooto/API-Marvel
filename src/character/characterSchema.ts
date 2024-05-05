import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
    nome: String,
    descricao: String,
    imagemURL: String
}, {
    timestamps: true
});

export default model('Character', characterSchema);
