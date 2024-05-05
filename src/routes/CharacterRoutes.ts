import { Router } from 'express'
import characterController from 'src/character/characterController'


const routes = Router()
routes.get('/health-check')
routes.post('/books', characterController.create)
routes.get('/books/:id', characterController.findById)
routes.get('/books/', characterController.find)
routes.put('/books/:id', characterController.update)
routes.delete('/books/:id', characterController.delete)

export {
    routes
}