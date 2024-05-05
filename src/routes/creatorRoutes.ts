import { Router } from 'express'
import creatorController from 'src/creator/creatorController'

const routes = Router()
routes.get('/health-check')
routes.post('/books', creatorController.create)
routes.get('/books/:id', creatorController.findById)
routes.get('/books/', creatorController.find)
routes.put('/books/:id', creatorController.update)
routes.delete('/books/:id', creatorController.delete)

export {
    routes
}