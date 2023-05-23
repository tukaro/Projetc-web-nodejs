class NewController{
    index(req , res){
        res.render('model')

    }

    vehicles(req, res){
        res.render('vehicles')
    }
}



module.exports = new NewController;