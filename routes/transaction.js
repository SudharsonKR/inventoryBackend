const { addOrders, getOrders, deleteOrders } = require('../controllers/orders');
const { addSales, getSales, deleteSales } = require('../controllers/sales');

const router=require('express').Router();

// router.get('/', (req, res)=>{    
//     res.send('Success working fine with postman')  
// })

router.post('/add-sales', addSales)
router.get('/all-Salesinfo', getSales)
router.delete('/delete-Sales/:id', deleteSales)
router.post('/add-orders', addOrders)
router.get('/all-Ordersinfo', getOrders)
router.delete('/delete-Orders/:id', deleteOrders)


module.exports = router