class motorsportController{
    motorsport(req , res){
        res.render('motorsport')

    }

    detailmotorsport(req, res){
        res.render('detailmotorsport')
    }
}


module.exports = new motorsportController;