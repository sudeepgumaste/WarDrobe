const getAjioImages = async (productLink, browser) => {
  const page = await browser.newPage();

  await page.goto(productLink);

  await page.waitFor(1000)

  const data = await page.evaluate(() => {
    const productImages = document.getElementsByClassName('img-container');
    const urls = Array.from(productImages).map(
      img => img.children[0].src
    );
    return {
      urls,
    };
  });

  page.close();
  return data;
};


module.exports.getAjioImages = getAjioImages