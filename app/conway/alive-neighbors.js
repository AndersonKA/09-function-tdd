export default function(arr) {
  let alive = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i]) {
      alive += 1;
    }
}
    return alive;
  }
