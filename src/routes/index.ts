import {Router} from 'express' // importamos o Router do express
import * as pageController from '../controller/pageControler' // importamos os controllers
import * as searchController from '../controller/searchController' // importamos os controllers

const router = Router() // usamos ele 


router.get('/', pageController.home)
router.get('/dogs', pageController.dogs)
router.get('/cats', pageController.cats)
router.get('/fishes', pageController.fishes)
router.get('/search', searchController.search) // criamos as rotas usando os controllers


export default router // exportar