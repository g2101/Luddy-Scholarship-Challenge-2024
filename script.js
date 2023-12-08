function caesarCipherEncrypt() {
  const input = document.getElementById("caesarEncryptInput").value;
  const shiftAmount = parseInt(document.getElementById("shiftEncryptAmount").value);
  var outputString = "";

  for (var i = 0; i < input.length; i++) {
    var letter = input[i];

    if (letter.match(/[a-z]/i)) {
      var code = input.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        // for all uppercase letters
        code = ((code - 97 + shiftAmount) % 26) + 65;
      }

      if (code >= 97 && code <= 122) {
        // for all uppercase letters
        code = ((code - 97 + shiftAmount) % 26) + 97;
      }
    }
    outputString += String.fromCharCode(code);

    var output = document.getElementById("caesarEncryptOutput");
    output.value =
      "The encoded string using the Caesar cipher is:\n" + outputString;
  }
}

  function caesarCipherDecrypt() {
    const input = document.getElementById("caesarDecryptInput").value;
    const shiftAmount = -parseInt(
      document.getElementById("shiftDecryptAmount").value
    );
    var outputString = "";

    for (var i = 0; i < input.length; i++) {
      var letter = input[i];

      if (letter.match(/[a-z]/i)) {
        var code = input.charCodeAt(i);

        if (code >= 65 && code <= 90) {
          // for all lowercase letters
          code = ((code - 65 + shiftAmount) % 26) + 65;
        }

        if (code >= 97 && code <= 122) {
          // for all uppercase letters
          code = ((code - 97 + shiftAmount) % 26) + 97;
        }
      }
      outputString += String.fromCharCode(code);
    }
    var output = document.getElementById("caesarDecryptOutput");
    output.value =
      "The decoded string using the reverse Caesar cipher is:\n" + outputString;
  }

