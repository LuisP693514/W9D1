function distance(arr1, arr2) {
  const x1 = arr1[0];
  const x2 = arr1[1];
  const y1 = arr2[0];
  const y2 = arr2[1];

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

const Util = {
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
};

module.exports = Util;
