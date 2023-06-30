import { Request,Response } from "express";

export const home = (req: Request, resp:Response) => {
    resp.send('home do controller')
    // res.render('pages/home')
}
export const dogs = (req: Request, resp:Response) => {
    // res.render('pages/home')
}
export const cats = (req: Request, resp:Response) => {
    // res.render('pages/home')
}
export const others = (req: Request, resp:Response) => {
    // res.render('pages/home')
}