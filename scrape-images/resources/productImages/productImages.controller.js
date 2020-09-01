const {scrapeMyntraImages} = require('../../utils/scrapeMyntraImages');
const {scrapeAmazonImages} = require('../../utils/scrapeAmazonImages');
const {scrapeFlipkartImages} = require('../../utils/scrapeFlipkartImages');

const getMyntraImages = async(req, res) => {
  // console.log(req.b);
  try{
    const data = await scrapeMyntraImages(req.body.url, req.browser)
    res.json(data)
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
}

const getFlipkartImages = async(req, res) => {
  try{
    const data = await scrapeFlipkartImages(req.body.url, req.browser)
    res.json(data)
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
}

const getAmazonImages = async(req, res) => {
  try{
    const data = await scrapeAmazonImages(req.body.url, req.browser)
    res.json(data)
  }catch(err){
    console.log(err);
    res.sendStatus(500);
  }
}

const getAjioImages = async(req, res) => {
  res.json({msg: "Ajio not supported yet"})
}

module.exports ={
  getMyntraImages,
  getFlipkartImages,
  getAmazonImages,
  getAjioImages
}