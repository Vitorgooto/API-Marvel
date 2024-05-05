import { Schema, model } from 'mongoose'

const comicSchema = new Schema({
    titulo: String,
    descricao: String,
    data: String,
    capa: Number
}, {
    timestamps: true
})

export default model('Comic', comicSchema)