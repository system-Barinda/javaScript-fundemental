function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
let word = "abracadabra";
console.log(countVowels(word));
