import { Router } from 'express'
import comicController from 'src/comic/comicController'

const routes = Router()
routes.get('/health-check')
routes.post('/books', comicController.create)
routes.get('/books/:id', comicController.findById)
routes.get('/books/', comicController.find)
routes.put('/books/:id', comicController.update)
routes.delete('/books/:id', comicController.delete)

export {
    routes
}