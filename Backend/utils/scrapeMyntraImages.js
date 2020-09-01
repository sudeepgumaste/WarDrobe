const scrapeMyntraImages = async (productLink, browser) => {
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
  try{
    await page.goto(productLink);
    const data = await page.evaluate(() => {
      const productImages = document.getElementsByClassName("image-grid-image");
      const urls = Array.from(productImages).map(
        img => img.attributes.style.value.split('"')[1]
      );
      const cost = document.getElementsByClassName("pdp-price")[0].innerText;
      return {
        urls,
        cost
      };
    });
    return data;
  }
  catch(err){
    throw new Error("Fetch error");
  }
  finally{
    page.close(); 
  }
};


module.exports.scrapeMyntraImages = scrapeMyntraImages