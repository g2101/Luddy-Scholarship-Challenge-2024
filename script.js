function caesarCipher(input, shiftAmount) {
  var outputString = ""

  for (var i = 0; i < input.length; i++) {
    var letter = input[i]

      var ascii = input.charCodeAt(i)

      if (ascii >= 65 && ascii <= 90) {
        // for all uppercase letters
        letter = String.fromCharCode(((ascii - 65 + shiftAmount) % 26) + 65)
      }
      else if (ascii >= 97 && ascii <= 122) {
        // for all lowercase letters
        letter = String.fromCharCode(((ascii - 97 + (shiftAmount % 26))) + 97)
      }
      /* else if (ascii >= 48 && ascii <= 57) {
        // for numbers
        letter = String.fromCharCode(((ascii - 97 + (shiftAmount % 9))) + 48)
      } */
      
      outputString += letter 

    if (shiftAmount > 0){
    var output = document.getElementById("caesarEncryptOutput")
    output.value =
      "The encoded string using the Caesar cipher is:\n" + outputString
    }
    else {
      var output = document.getElementById("caesarDecryptOutput")
    output.value =
      "The decoded string using the Caesar cipher is:\n" + outputString
    }
  }
}

function encryptCaesar() {
  const input = document.getElementById("caesarEncryptInput").value
  const shiftAmount = parseInt(document.getElementById("shiftEncryptAmount").value)
  caesarCipher(input, shiftAmount)
}

function decryptCaesar() {
  const input = document.getElementById("caesarDecryptInput").value
  const shiftAmount = parseInt(document.getElementById("shiftDecryptAmount").value)
  caesarCipher(input, -shiftAmount)
}