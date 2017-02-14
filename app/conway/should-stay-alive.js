import aliveNeighbors from './alive-neighbors';


  export default function (a) {
    if (aliveNeighbors(a) === 0 || aliveNeighbors(a) >= 4) {
    return false;
  }

  return true;
  }
