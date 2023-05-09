import { sequelize } from "../models/init-models"

const findAll = async (req,res)=>{
    try {
        const produk = await req.context.models.produk.findAll({
            include: [
                {
                  all: true,
                },
            ],
        })
        return res.send(produk)
    } catch (error) {
        return res.status(404).send(error)
    }
}
const findOne = async (req,res)=>{
    try {
        const produk = await req.context.models.produk.findOne({
            where:{prodid : req.params.id}
        })
        return res.send(produk)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req,res)=>{
    try {
        const produk = await req.context.models.produk.create({
            prodid : req.body.prodid,
            prodname : req.body.prodname,
            keterangan : req.body.keterangan
        })
        return res.send(produk)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req,res)=>{
    try {
        const produk = await req.context.models.produk.update({
            prodid : req.body.prodid,
            prodname : req.body.prodname,
            keterangan : req.body.keterangan
        },{ returning : true , where:{prodid : req.params.id}})
        return res.send(produk)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req,res)=>{
    try {
        const produk = await req.context.models.produk.destroy({
            where:{prodid : req.params.id}
        })
        return res.send('delete '+produk+' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async(req,res)=>{
    try {
        await sequelize.query('SELECT * from countries where prodid = :produkId',
        {replacements : {prodid : req.params.id},type : sequelize.QueryTypes.SELECT})
        .then(result =>{
            return res.send(result)
        })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    deleted,
    querySQL
}