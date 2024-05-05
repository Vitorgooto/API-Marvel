import { Request, Response } from "express";
import comicService from './comicService'


class comicController {

    async create(req: Request, res: Response) {
        const comic = await comicService.create(req.body)
        res.status(201)
        return res.json(comic)
    }

    async findById(req: Request, res: Response) {
        const comic = await comicService.findById(req.params.id)
        return res.json(comic)
    }

    async find(req: Request, res: Response) {
        const comic = await comicService.findAll()
        return res.json(comic)
    }

    async update(req: Request, res: Response) {
        const updatedComic = await comicService.update(req.params.id, req.body)
        return res.json(updatedComic)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await comicService.delete(req.params.id)
        return res.json(deleteReturn)
    }

}

export default new comicController()