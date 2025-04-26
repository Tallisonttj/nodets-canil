import { Request, Response } from "express"; // importamos o Req e o Res do express
import {Pet} from '../models/Pets' // importa o modelo de pets
import { activeObject } from "../helpers/activeMenuObject"; // importa o menu

export const search = (req:Request, res:Response) => {
    
    let query: string = req.query.q as string // pega o que a pessoa digitou 

    let list = Pet.getFromName(query) // pesquisa pelo que foi digitado
    if (!query){ // se query estiver vazio 
        res.redirect('/') //volte para a pagina inicial
        return
    }

    res.render('pages/page', { // renderiza
        menu: activeObject(''), // o menu no caso sem estar marcado nenhuma opção
        list, // a lista dependendo do nome que foi digitado
        query // e mantem o ultimo query aparecendo na busca 
    })
}