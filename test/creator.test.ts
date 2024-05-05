import app from '../src/app';
import { describe, it, afterAll } from '@jest/globals';
import mongoose from 'mongoose';
import creatorModel from '../src/creator/creatorSchema';
import comicModel from '../src/comic/comicSchema';
import * as request from 'supertest';

describe('/creators endpoint', () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Deve inserir um criador no banco de dados', async () => {
        const creatorMock = {
            name: 'Stan Lee',
            role: 'Writer',
            comics: [] 
        };

        const response = await request.default(app).post('/creators').send(creatorMock);
        const foundCreator = await creatorModel.findById(response.body._id);

        expect(response.status).toEqual(201);
        expect(response.body._id).toBeDefined();
        expect(creatorMock.name).toBe(foundCreator?.nome);
        expect(creatorMock.role).toBe(foundCreator?.funcao);
        expect(creatorMock.comics).toEqual(foundCreator?.comic.map((comic: any) => comic.toString())); 
    });

    it('Deve buscar todos os criadores no banco de dados', async () => {
        const response = await request.default(app).get('/creators');
        const totalCreatorsOnDatabase = await creatorModel.countDocuments();

        expect(response.body.length).toEqual(totalCreatorsOnDatabase);
    });
});