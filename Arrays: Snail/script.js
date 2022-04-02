const createMatrix = (n) => {
  const arr = [];
  for (let i = 0; i <= n; i += 1) {
    const row = [];
    for (let j = 0; j <= n; j += 1) {
      row.push(`${i} ${j}`);
    }
    arr.push(row);
  }
  return arr;
}

const buildSnailPath = (arr) => {
  if (arr.length === 0 || arr[0].length === 0) {
    return [];
  }

  let direction = 'right';
  let edges = {
    right: arr[0].length,
    left: 0,
    top: 0,
    bottom: arr.length
  };
  const result = [];
  const currPoint = {
    x: 0,
    y: 0
  };

  while (edges.right - edges.left >= 1) {
    while (
      direction === 'right' && currPoint.x < edges.right
    ) {
      result.push(arr[currPoint.y][currPoint.x]);
      if (result.length === arr.length * arr[0].length) {
        return result;
      }
      currPoint.x += 1;
    };

    edges.right -= 1;
    currPoint.x -= 1;
    currPoint.y += 1;
    direction = 'down';
    
    while (
      direction === 'down' && currPoint.y < edges.bottom
    ) {
      result.push(arr[currPoint.y][currPoint.x]);
      if (result.length === arr.length * arr[0].length) {
        return result;
      }
      currPoint.y += 1;
    };

    edges.bottom -= 1;
    currPoint.y -= 1;
    currPoint.x -= 1;
    direction = 'left';

    while (
      direction === 'left' && currPoint.x >= edges.left
    ) {
      result.push(arr[currPoint.y][currPoint.x]);
      if (result.length === arr.length * arr[0].length) {
        return result;
      }
      currPoint.x -= 1;
    };

    edges.left += 1;
    currPoint.x += 1;
    currPoint.y -= 1;
    direction = 'up';

    while (
      direction === 'up' && currPoint.y > edges.top
    ) {
      result.push(arr[currPoint.y][currPoint.x]);
      if (result.length === arr.length * arr[0].length) {
        return result;
      }
      currPoint.y -= 1;
    };

    edges.top += 1;
    currPoint.y += 1;
    currPoint.x += 1;
    direction = 'right';
  }

  return result;
};




console.log(buildSnailPath([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]));