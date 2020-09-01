
const scrapeFlipkartImages = async (productLink, browser) => {
  const page = await browser.newPage();
  await page.goto(productLink);
  const data = await page.evaluate(() => {
    const productImages = document.getElementsByClassName("_2_AcLJ _3_yGjX");
    const urls = Array.from(productImages).map(img => {
      const string = img.attributes.style.value.replace("128/128", "880/1068").split('(')[1]
      return string.substring(0,string.length-2)
    });
    const cost = document.getElementsByClassName("_1vC4OE _3qQ9m1")[0]
      .innerText;
    return {
      urls,
      cost
    };
  });

  page.close()
  return data;
};

module.exports.scrapeFlipkartImages = scrapeFlipkartImages;
