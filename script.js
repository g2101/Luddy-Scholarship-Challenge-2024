function caesarCipher(input, shiftAmount) {
  var outputString = "";

  for (var i = 0; i < input.length; i++) { // iterate through entire word
    var letter = input[i];
    var ascii = input.charCodeAt(i);

    // if shiftAmount of over 26 is entered, take modulo down to manageable number
    shiftAmount %= 26; 

    if (ascii >= 65 && ascii <= 90) {
      // for all uppercase letters
      letter = String.fromCharCode(((ascii - 65 + shiftAmount + 26) % 26) + 65);
    } else if (ascii >= 97 && ascii <= 122) {
      // for all lowercase letters
      letter = String.fromCharCode(((ascii - 97 + shiftAmount + 26) % 26) + 97);
    }

    outputString += letter;
  }

  return outputString;
}

function encryptCaesar() {
  const input = document.getElementById("caesarEncryptInput").value;
  const shiftAmount = parseInt(document.getElementById("shiftEncryptAmount").value);
  const output = document.getElementById("caesarEncryptOutput");
  output.value = "The encoded string using the Caesar cipher is:\n" + caesarCipher(input, shiftAmount);
}

function decryptCaesar() {
  const input = document.getElementById("caesarDecryptInput").value;
  const shiftAmount = parseInt(document.getElementById("shiftDecryptAmount").value);
  const output = document.getElementById("caesarDecryptOutput");
  output.value = "The decoded string using the Caesar cipher is:\n" + caesarCipher(input, -shiftAmount);
}
