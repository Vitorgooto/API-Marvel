import app from '../src/app';
import { describe, it, afterAll } from '@jest/globals';
import mongoose from 'mongoose';
import comicController from 'src/comic/comicController';
import comicModel from '../src/comic/comicSchema';
import * as request from 'supertest';

describe('/comics endpoint', () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('Deve inserir um quadrinho no banco de dados', async () => {
        const comicMock = {
            title: 'Spider-Man: Far From Home',
            description: 'Amazing Spider-Man: Far From Home',
            date: '2019-07-02',
            cover: 123456 
        };

        const response = await request.default(app).post('/comics').send(comicMock);
        const foundComic = await comicModel.findById(response.body._id);

        expect(response.status).toEqual(201);
        expect(response.body._id).toBeDefined();
        expect(comicMock.title).toBe(foundComic?.titulo);
        expect(comicMock.description).toBe(foundComic?.descricao);
        expect(comicMock.date).toBe(foundComic?.data);
        expect(comicMock.cover).toBe(foundComic?.capa);
    });

    it('Deve buscar todos os quadrinhos no banco de dados', async () => {
        const response = await request.default(app).get('/comics');
        const totalComicsOnDatabase = await comicModel.countDocuments();

        expect(response.body.length).toEqual(totalComicsOnDatabase);
    });
});
