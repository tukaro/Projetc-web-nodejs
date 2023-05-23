class listproductController{
    productlist(req , res){
        res.render('productlist')

    }

    detailproduct(req, res){
        res.render('detail-product')
    }
}



module.exports = new listproductController;