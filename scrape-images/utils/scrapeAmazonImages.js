const scrapeAmazonImages = async (productLink, browser) => {
  
  const page = await browser.newPage();

  await page.goto(productLink);

  const data = await page.evaluate(() => {
    const [_, ...productImages] = document.querySelectorAll('.a-button-input+span.a-button-text>img');
    const urls = Array.from(productImages).map(
      img => img.src.replace('._SR38,50_','')
    );
    const cost = document.getElementById('priceblock_ourprice').innerText;
    return {
      urls,
      cost
    };
  });

  page.close()
  return data;
};


module.exports.scrapeAmazonImages = scrapeAmazonImages