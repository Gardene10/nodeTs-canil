import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/seachController'

const router = Router()

router.get('/',PageController.home)
router.get('/dogs',PageController.dogs)
router.get('/cats',PageController.cats)
router.get('/peixes',PageController.peixes)

router.get('/search',SearchController.search)


export default router