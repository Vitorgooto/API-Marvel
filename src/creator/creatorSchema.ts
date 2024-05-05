import { Schema, model, Types } from 'mongoose';

const creatorSchema = new Schema({
    nome: String,
    funcao: String,
    comic: [{ type: Schema.Types.ObjectId, ref: 'Comic' }]
}, {
    timestamps: true
});

export default model('Creator', creatorSchema)
