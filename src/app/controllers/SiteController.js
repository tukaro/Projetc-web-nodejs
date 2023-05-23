class siteController{
    home(req , res){
        res.render('home')

    }

    map(req, res){
        res.render('map')
    }

    museum(req, res){
        res.render('museum')
    }
}



module.exports = new siteController;