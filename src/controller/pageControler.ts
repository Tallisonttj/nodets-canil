import { Request, Response } from "express"; // importamos o Req e o Res do express

export const home = (req:Request, res:Response) => {
    res.send('Alguma coisa ')
}
export const dogs = (req:Request, res:Response) => {
    res.send('Alguma coisa ')
}
export const cats = (req:Request, res:Response) => {
    res.send('Alguma coisa ')
}

export const fishes = (req:Request, res:Response) => {
    res.send('Alguma coisa ')
}
// criamos as funções que iremos usar em cada pagina do site