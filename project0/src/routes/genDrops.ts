import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import DropsDao from '../daos/drops/DropsDao';
import { IMonsterDrops } from '../entities/Drops';

const dao = new DropsDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getItem(req: Request, res: Response) {
    const {dropName} = req.body;
    //Check if that specific dropName is in DB
    if(!(dropName)){
        return res.status(BAD_REQUEST).json({
            error: "Missing DropName Parameter",
        });
    }
    //Returns Item information to server
    let drop:IMonsterDrops|null = await dao.getOne(dropName);
    return res.status(OK).json(drop).end();
}

// uses path params
export async function getDrop(req: Request, res: Response) {
    const {dropName} = req.params;
    let drop = await dao.getDrop(dropName);
    return res.status(OK).json(drop).end();
}

export async function getAll(req: Request, res: Response) {    //Check if that specific dropName is in DB
    //Returns Item information to server
    let drop = await dao.getAll();
    return res.status(OK).json(drop).end();
}

export async function deleteDrop(req: Request, res: Response){
    const {dropName} = req.params;
    await dao.deleteDrop(dropName);
    res.status(200).json(`${dropName} was successfully deleted`);
}

export async function addOrUpdate(req: Request, res: Response){
    let {item} = req.body;
    if(!item){
        return res.status(BAD_REQUEST).json({
            error: "Missing 1 or more parameters"
        });
    }
    await dao.add(item);
    res.status(200).json(`${item.dropName} was added or updated`).end();
}