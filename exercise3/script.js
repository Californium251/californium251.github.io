const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

// BEGIN (write your solution here)
const getTheNearestLocation = (places, location) => {
  if (places.length === 0) {
    return null;
  }
  let distance;
  let result;
  for (const point of places) {
    if (distance === undefined) {
      distance = getDistance(location, point[1]);
      result = point;
    } else if (distance > getDistance(location, point[1])) {
      distance = getDistance(location, point[1]);
      result = point;
    }
  }
  return result;
}

const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

const currentPoint2 = [1, 3];

console.log(getTheNearestLocation(locations, currentPoint2)); // ['Sea', [1, 3]]

const locations2 = [
  ['Hotel', [7, 3]],
  ['Square', [5, 6]],
];

console.log(getTheNearestLocation(locations2, currentPoint2)); // ['Square', [5, 6]]