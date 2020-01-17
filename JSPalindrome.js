const palindrome = str => {
  // Read from the start of the sentence

  let nStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " ") {
      nStr = nStr + str.charAt(i).toLowerCase();
    }
  }

  // Read from the end of the sentence

  let reversed = "";
  for (let i = nStr.length - 1; i >= 0; i--) {
    reversed = reversed + nStr.charAt(i).toLowerCase();
  }

  // Comparison between the reading of the beginning and the end

  if (reversed === nStr) {
    return true;
  } else {
    return false;
  }
};

/* True Version 👉🏻 */ console.log(palindrome("Aromate et Amora"));
/* False Version 👉🏻 */ console.log(palindrome("Aromate et Amore"));
