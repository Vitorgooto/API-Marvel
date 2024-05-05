import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

interface ICreator extends Document {
    nome: string;
    funcao: string;
    comics: ObjectId[];
}
