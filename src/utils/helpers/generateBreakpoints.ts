export const generateBreakpoints = (numberOfLinks, containerWidth) => {
  let pixelsPerLink = containerWidth / numberOfLinks;
  let arr = [];

  for (let i = 0; i < numberOfLinks; i++) {
    const obj = { min: pixelsPerLink * i, max: pixelsPerLink * (i + 1) - 20 };
    arr.push(obj);
  }

  return arr;
};
