import comicModel from './comicSchema'

class comicService {
    async create(book: any) {
        const createdBook = await comicModel.create(book)

        return createdBook
    }

    async findById(id: string) {
        const findedBook = await comicModel.findById(id)
        return findedBook
    }

    async findAll() {
        const findedBooks = await comicModel.find()
        return findedBooks
    }

    async update(id: string, book: any) {
        const updatedBook = await comicModel.findByIdAndUpdate(id, {
            title: book.title,
            author: book.author,
            price: book.price
        }, { new: true })

        return updatedBook
    }

    async delete(id: string) {
        await comicModel.findByIdAndDelete(id)
        return 'Comic Removido com Sucesso'
    }
}

export default new comicService()