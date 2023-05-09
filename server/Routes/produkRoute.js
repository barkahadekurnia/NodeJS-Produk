import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";

const router = Router()

router.get('/',indexCtrl.produkCtrl.findAll)
router.get('/:id',indexCtrl.produkCtrl.findOne)
router.post('/',indexCtrl.produkCtrl.create)
router.put('/:id',indexCtrl.produkCtrl.update)
router.delete('/:id',indexCtrl.produkCtrl.deleted)
router.get ('/sql/:id',indexCtrl.produkCtrl.querySQL)
export default router