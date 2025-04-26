import { Request, Response } from "express"; // importamos o Req e o Res do express
import {Pet} from '../models/Pets' // importamos os MODELS
import { activeObject } from "../helpers/activeMenuObject";// importo a função helpper

export const home = (req:Request, res:Response) => {

     let list =  Pet.getAll() // VARIAVEL RECEBE A FUNÇÃO DO MODEL
    res.render('pages/page',{
        menu: activeObject('all'),
        banner:{
        title: 'Todos os animais',
        background:'allanimals.jpg' 
        },
        list // JOGAMOS ELA PARA RENDERIZAR
        
    })
}
export const dogs = (req:Request, res:Response) => {
    let list =  Pet.getFromType('dog') // VARIAVEL RECEBE A FUNÇÃO DO MODEL
    res.render('pages/page',{
        menu: activeObject('dog'),
        banner:{
        title: 'Cachorros',
        background:'banner_dog.jpg' 
        },
        list
    })
}
export const cats = (req:Request, res:Response) => {
    let list =  Pet.getFromType('cat') // VARIAVEL RECEBE A FUNÇÃO DO MODEL
    res.render('pages/page',{
        menu: activeObject('cat'),
        banner:{
        title: 'Gatos',
        background:'banner_cat.jpg' 
        },
        list
    })
}

export const fishes = (req:Request, res:Response) => {
    let list =  Pet.getFromType('fish') // VARIAVEL RECEBE A FUNÇÃO DO MODEL
    res.render('pages/page',{
        menu: activeObject('fish'),
        banner:{
        title: 'Peixes',
        background:'banner_fish.jpg' 
        },
        list
        
    })
}
// criamos as funções que iremos usar em cada pagina do site