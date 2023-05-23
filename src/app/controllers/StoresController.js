class storesController{
    store(req , res){
        res.render('store')

    }

    productlist(req, res){
        res.render('productlist')
    }


}



module.exports = new storesController;