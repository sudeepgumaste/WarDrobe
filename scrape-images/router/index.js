const {Router} = require('express')
const productRouter = require('../resources/productImages/productImages.router')

const mainRouter = Router()

mainRouter.get('/test', (req, res) => {
  res.json({msg: "It works!"})
})

mainRouter.use('/images', productRouter)

module.exports = mainRouter