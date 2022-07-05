module.exports = function toReadable (number) {
  const numerals = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const dozens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  function hundredsToString (num) {
    return num > 0 ? `${numerals[num]} hundred` : '';
  }
  function dozensToString (num) {
    if (num < 20) {
        return numerals[num];
    }
    if (num % 10 === 0) {
        return dozens[num / 10];
    }
    return `${dozens[Math.floor(num / 10)]} ${numerals[num % 10]}`
  }
  const parsedNum = number.toString().split('');
  var result = [];

  switch (parsedNum.length) {
    case 3:
        result.push(hundredsToString(+parsedNum[0]));
    case 2:
        var lastNum = parsedNum.at(-2) + parsedNum.at(-1);
        result.push(dozensToString(+lastNum));
        break;
    case 1:
        result.push(number ? dozensToString(number) : 'zero');
  }
  return result.join(' ').trim();
};
