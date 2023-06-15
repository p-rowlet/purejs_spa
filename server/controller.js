import * as dataRepository from './data.js';

export async function getLists(req, res){
    const data = await dataRepository.getAll();
    res.status(200).json(data);
}

export async function createList(req, res, next){
    const {text} = req.body;
    const list = await dataRepository.create(text);
    res.status(201).json(list);
}

export async function deleteList(req, res, next){
    const id = req.params.id;
    const list = await dataRepository.findById(id);

    if(!list){
        return res.status(404).json({message : '해당하는 리스트가 없습니다'});
    }

    await dataRepository.remove(id);
    res.sendStatus(204);
}