export const auxSetMethod = {

  createMediaClass(mainClass, allMediaQuery) {
    for (let markMediaQuery in allMediaQuery) {
      if (allMediaQuery[markMediaQuery]) return { [mainClass]: true, [`${mainClass}-${markMediaQuery}`]: true }
      else continue;
    }
    return { [mainClass]: true }
  }
}

