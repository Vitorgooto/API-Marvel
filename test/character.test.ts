import app from '../src/app';
import { describe, it, afterAll } from '@jest/globals';
import mongoose from 'mongoose';
import characterModel from '../src/character/characterSchema';
import * as request from 'supertest';

describe('/characters endpoint', () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Deve inserir um personagem no banco de dados', async () => {
        const characterMock = {
            name: 'Homem de Ferro',
            description: 'Genius, billionaire, playboy, philanthropist',
            imageURL: 'https://example.com/ironman.jpg'
        };

        const response = await request.default(app).post('/characters').send(characterMock);
        const foundCharacter = await characterModel.findById(response.body._id);

        expect(response.status).toEqual(201);
        expect(response.body._id).toBeDefined();
        expect(characterMock.name).toBe(foundCharacter?.nome);
        expect(characterMock.description).toBe(foundCharacter?.descricao);
        expect(characterMock.imageURL).toBe(foundCharacter?.imagemURL);
    });

    it('Deve buscar todos os personagens no banco de dados', async () => {
        const response = await request.default(app).get('/characters');
        const totalCharactersOnDatabase = await characterModel.countDocuments();

        expect(response.body.length).toEqual(totalCharactersOnDatabase);
    });
});
