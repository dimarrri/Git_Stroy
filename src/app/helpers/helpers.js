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
    const background = this.__downloadImagine(requestData)
    for (let i = 0; i < requestData; ++i) {
      result.push({
        titleCard: "Укладка плитки",
        priceWOrk: "1220р",
        backgroundCadd: background[i]
      })
    }
    return result;
  },
  __downloadImagine(request) {
    const result = []
    // debugger
    for (let i = 0; i < request; ++i) {
      import(`./../__img/${i}.jpg`).then(( mod ) => result.push(mod)).catch((_) => result)
}
return result;
  }
}

