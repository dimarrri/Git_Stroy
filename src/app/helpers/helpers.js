export const auxSetMethod = {

  createMediaClass(mainClass, allMediaQuery) {
    for (let markMediaQuery in allMediaQuery) {
      if (allMediaQuery[markMediaQuery]) return { [mainClass]: true, [`${mainClass}-${markMediaQuery}`]: true }
      else continue;
    }
    return { [mainClass]: true }
  },
}

export const createFakeDate = {
  creteDataCardProduct(requestData) {
    const result = []
    // const background = this.__downloadImagine(requestData)
    for (let i = 0; i < requestData; ++i) {
      result.push({
        titleCard: "Укладка плитки",
        priceWOrk: "1220р",
        backgroundCard: this.__addPhotosToCard(i).then(result => result).catch(err => console.error(err)),
      })
    }
    return result;
  },
  __addPhotosToCard(index) {
    return import(`./../__img/${index}.jpg`).then((mode) => mode.default)
  }
}

