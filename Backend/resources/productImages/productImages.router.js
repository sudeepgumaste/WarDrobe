const { Router } = require("express");
const {
  getMyntraImages,
  getFlipkartImages,
  getAmazonImages,
  getAjioImages
} = require("./productImages.controller");

const productRouter = Router();

const puppeteer = require("puppeteer");
let browser = undefined;

(async()=>{
  browser = await puppeteer.launch({ headless: true });
})()

const passBrowserObject = async(req, res, next) => {
  req.browser = browser;
  // console.log(browser);
  next();
}

productRouter.post("/myntra", passBrowserObject, getMyntraImages);
productRouter.post("/flipkart", passBrowserObject, getFlipkartImages);
productRouter.post("/amazon", passBrowserObject,getAmazonImages);
productRouter.post("/ajio", passBrowserObject, getAjioImages);

module.exports = productRouter;