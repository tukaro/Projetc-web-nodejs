class cutstomController{
    cutstom(req , res){
        res.render('cutstom')

    }

    detailcutstom(req, res){
        res.render('detailcutstom')
    }
}



module.exports = new cutstomController;