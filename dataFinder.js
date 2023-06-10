function dataFinder(data) {
  return function find(minRange, maxrange, value) {
    if (minRange > data.length || maxrange > data.length) {
      throw new Error("Invalid range");
    }
    for (let i = minRange; i <= maxrange; i++) {
      if (data[i] === value) return true;
    }
    return false;
  };
}
