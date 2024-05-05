import { Request, Response } from "express";
import creatorService from './creatorService';

class creatorController {

    async create(req: Request, res: Response) {
        const creator = await creatorService.create(req.body);
        res.status(201).json(creator);
    }

    async findById(req: Request, res: Response) {
        const creator = await creatorService.findById(req.params.id);
        res.json(creator);
    }

    async find(req: Request, res: Response) {
        const creators = await creatorService.findAll();
        res.json(creators);
    }

    async update(req: Request, res: Response) {
        const updatedCreator = await creatorService.update(req.params.id, req.body);
        res.json(updatedCreator);
    }

    async delete(req: Request, res: Response) {
        await creatorService.delete(req.params.id);
        res.json('Criador Removido com Sucesso');
    }

}

export default new creatorController();
