class listmodelController{
    vehicles(req , res){
        res.render('vehicles')

    }

    detailmodel(req, res){
        res.render('detailmodel')
    }
}



module.exports = new listmodelController;