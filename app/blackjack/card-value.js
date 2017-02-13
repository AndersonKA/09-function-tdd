export default function(card, value1, value2) {


  if (card === '5') {
    return 5;
  }

  if (card === 'jack') {
    return 10;
  }

  if (card === 'queen') {
    return 10;
  }

  if (card === 'king') {
    return 10;
  }

  if (card === 'ace') {
    return 11;
  }

  return parseInt(card);
}
