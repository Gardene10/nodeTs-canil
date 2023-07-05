import { Request,Response } from "express";
import { CreateMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pets";

export const search = (req: Request, res:Response) => {
    let query: string = req.query.q as string
    let list = Pet.getFromName(query)
    if (!query){
        res.redirect('/')
        return
    }

    res.render('pages/page', {
        menu: CreateMenuObject(''),
        list,
        query
    })
} 