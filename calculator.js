function caesarCipher() {
  const input = document.getElementById("caesarInput").value;
  const shiftAmount = parseInt(document.getElementById("shiftAmount").value);
  var outputString = "";

  for (var i = 0; i < input.length; i++) {
    var letter = input[i];

    if (letter.match(/[a-z]/i)) {
      var code = input.charCodeAt(i);

      console.log("Original ascii code: " + code); // debugging

      if (code >= 65 && code <= 90) {
        // for all lowercase letters
        code = ((code - 65 + shiftAmount) % 26) + 65;
        console.log("Adjusted lowercase ASCII code: " + code); // debugging
      }

      if (code >= 97 && code <= 122) {
        // for all uppercase letters
        code = ((code - 97 + shiftAmount) % 26) + 97;
        console.log("Adjusted uppercase ASCII code: " + code); // debugging
      }
    }
    outputString += String.fromCharCode(code);
  }
  var output = document.getElementById("caesarOutput");
  output.value =
    "The encoded string using the Caesar cipher is:\n" + outputString;
}
