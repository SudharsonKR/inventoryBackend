const ordersSchema = require("../models/ordersModel")


exports.addOrders=async(req, res)=>{
    const{title, amount, category, description, date}=req.body

    const orders=ordersSchema({
        title,
        amount,
        category,
        description,
        date
    })
//validation
    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message: "All fields are required"})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message: "Amount must be Positive number"})
        }
        await orders.save()
        res.status(200).json({message:'Orders Information Added'})
    } catch (error) {
        res.status(500).json({error})
        console.log(error)
    }
    console.log(orders)
}

//allOrdersInfo
exports.getOrders = async(req, res)=>{
    try {
        const getOrders=await ordersSchema.find().sort({createdAt: -1})
        res.status(200).json(getOrders)
    } catch (error) {
        res.status(500).json({message: "No data available"})
    }
}

//deleteOrdersInfo
exports.deleteOrders = async(req, res)=>{
    const {id}=req.params;
    ordersSchema.findByIdAndDelete(id)
    .then((orders)=>{res.status(200).json({message: 'Below Data Successfully Deleted', orders})})
    .catch ((err)=>{ res.status(500).json(err)}) 
}