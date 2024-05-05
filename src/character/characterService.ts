import characterModel from './characterSchema';

class CharacterService {
    async create(character: any) {
        const createdCharacter = await characterModel.create(character);
        return createdCharacter;
    }

    async findById(id: string) {
        const foundCharacter = await characterModel.findById(id);
        return foundCharacter;
    }

    async findAll() {
        const foundCharacters = await characterModel.find();
        return foundCharacters;
    }

    async update(id: string, character: any) {
        const updatedCharacter = await characterModel.findByIdAndUpdate(id, {
            name: character.name,
            description: character.description,
            imageURL: character.imageURL
        }, { new: true });

        return updatedCharacter;
    }

    async delete(id: string) {
        await characterModel.findByIdAndDelete(id);
        return 'Personagem Removido com Sucesso';
    }
}

export default new CharacterService();
