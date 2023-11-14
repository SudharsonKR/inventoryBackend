const salesSchema = require("../models/salesModel")


exports.addSales=async(req, res)=>{
    const{title, amount, category, description, date}=req.body

    const sales=salesSchema({
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
        await sales.save()
        res.status(200).json({message:'Sales Information Added'})
    } catch (error) {
        res.status(500).json({error})
        console.log(error)
    }
    console.log(sales)
}

//allSalesInfo
exports.getSales = async(req, res)=>{
    try {
        const getSales=await salesSchema.find().sort({createdAt: -1})
        res.status(200).json(getSales)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

//deleteSalesInfo
exports.deleteSales = async(req, res)=>{
    const {id}=req.params;
    salesSchema.findByIdAndDelete(id)
    .then((sales)=>{res.status(200).json({message: 'Below Data Successfully Deleted', sales})})
    .catch ((err)=>{ res.status(500).json({message: "Server Error"})}) 
}