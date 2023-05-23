const newsRouter = require('./news');
const siteRouter = require('./site');
const storesRouter = require('./stores')
const cutstomRouter = require('./cutstom')
const ownershipRouter = require('./ownership')
const motorsportRouter = require('./motorsport')
const listdetailtRouter = require('./listmodel')
const listproductRouter = require('./listproduct')

function route(app){

  
  app.use('/productlist',listproductRouter)

  app.use('/vehicles' ,listdetailtRouter)

  app.use('/motorsport' ,motorsportRouter)

  app.use('/ownership',ownershipRouter)

  app.use('/cutstom', cutstomRouter)

  app.use('/store', storesRouter )

  app.use('/model', newsRouter)
  
  app.use('/', siteRouter)

    // app.get('/ownership', (req, res) => {
    //     res.render('ownership');
    //   })
      
      // app.get('/motorsport', (req, res) => {
      //   res.render('motorsport');
      // })
      
      // app.get('/vehicles', (req, res) => {
      //   res.render('vehicles');
      // })

      // app.get('/cutstom', (req, res) => {
      //   res.render('cutstom');
      // })

      
      // app.get('/detailmotorsport', (req, res) => {
      //   res.render('detailmotorsport');
      // })
      
      // app.get('/detailownership', (req, res) => {
      //   res.render('detailownership');
      // })
      
      app.get('/order', (req, res) => {
        res.render('order');
      })
      
      // app.get('/detail-product', (req, res) => {
      //   res.render('detail-product');
      // })
      
      
}

module.exports=route;