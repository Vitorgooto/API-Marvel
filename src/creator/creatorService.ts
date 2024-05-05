import creatorModel from './creatorSchema';

class creatorService {
    async create(creator: any) {
        const createdCreator = await creatorModel.create(creator);
        return createdCreator;
    }

    async findById(id: string) {
        const foundCreator = await creatorModel.findById(id);
        return foundCreator;
    }

    async findAll() {
        const foundCreators = await creatorModel.find();
        return foundCreators;
    }

    async update(id: string, creator: any) {
        const updatedCreator = await creatorModel.findByIdAndUpdate(id, {
            name: creator.name,
            role: creator.role,
            comics: creator.comics
        }, { new: true });

        return updatedCreator;
    }

    async delete(id: string) {
        await creatorModel.findByIdAndDelete(id);
        return 'Criador Removido com Sucesso';
    }
}

export default new creatorService();
