import { Request, Response } from "express";
import characterService from './characterService'

class characterController {

    async create(req: Request, res: Response) {
        const character = await characterService.create(req.body)
        res.status(201)
        return res.json(character)
    }

    async findById(req: Request, res: Response) {
        const character = await characterService.findById(req.params.id)
        return res.json(character)
    }

    async find(req: Request, res: Response) {
        const character = await characterService.findAll()
        return res.json(character)
    }

    async update(req: Request, res: Response) {
        const updatedCharacter = await characterService.update(req.params.id, req.body)
        return res.json(updatedCharacter)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await characterService.delete(req.params.id)
        return res.json(deleteReturn)
    }

}

export default new characterController()
