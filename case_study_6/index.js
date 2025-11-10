function countVowelsAndReverse() {
  const text = document.getElementById("paragraph").value;
  const vowels = text.match(/[aeiouAEIOU]/g);
  const vowelCount = vowels ? vowels.length : 0;

  const reversed = text.split("").reverse().join("");

  document.getElementById("vowelCount").textContent = vowelCount;
  document.getElementById("reversedText").textContent = reversed;
}
