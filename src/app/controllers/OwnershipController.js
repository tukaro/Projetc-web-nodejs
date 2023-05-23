class ownershipController{
    ownership(req , res){
        res.render('ownership')

    }

    detailownership(req, res){
        res.render('detailownership')
    }
}



module.exports = new ownershipController;