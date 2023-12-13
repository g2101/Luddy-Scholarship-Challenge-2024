// Caesar Cipher Code
function caesarCipher(input, shiftAmount) {
  // error handling before rest of function runs
  if (input === '' && isNaN(shiftAmount)) {
    alert("No input provided in both inputs.");
    return "No input provided in both inputs.";
  } else if (input === '') {
    alert("No input provided in the input for the word.");
    return "No input provided in the input for the word.";
  } else if (isNaN(shiftAmount)) {
    alert("No input provided in the shift amount.");
    return "No input provided in the shift amount.";
  }

  let outputString = '' // create blank output string

  // iterate through entire word
  for (let i = 0; i < input.length; i++) {
    let letter = input[i]
    const ascii = input.charCodeAt(i)

    // if shiftAmount of over 26 is entered, take modulo down to manageable number
    shiftAmount %= 26

    if (ascii >= 65 && ascii <= 90) {
      // for all uppercase letters (ASCII 65-90)
      letter = String.fromCharCode(((ascii - 65 + shiftAmount + 26) % 26) + 65)
    } else if (ascii >= 97 && ascii <= 122) {
      // for all lowercase letters (ASCII 97-122)
      letter = String.fromCharCode(((ascii - 97 + shiftAmount + 26) % 26) + 97)
    } else if (ascii >= 33 && ascii <= 64) {
      // for all non-letters (ASCII 33-64)
      letter = String.fromCharCode(((ascii - 33 + shiftAmount + 32) % 32) + 33)
    }

    // append shifted letter to output string
    outputString += letter
  }
  return outputString
}

// functions called in the HTML on each button press
function encryptCaesar() { // returns the encrypted Caesar cipher to the encryption section output
  const input = document.getElementById('caesarEncryptInput').value.trim()
  const shiftAmount = parseInt(document.getElementById('shiftEncryptAmount').value)
  const output = document.getElementById('caesarEncryptOutput')
  output.value = 'The encoded string using the Caesar cipher is:\n' + caesarCipher(input, shiftAmount) // use a positive shift amount to encrypt cipher text
}

function decryptCaesar() { // returns the decrypted Caesar cipher to the decryption section output
  const input = document.getElementById('caesarDecryptInput').value
  const shiftAmount = parseInt(document.getElementById('shiftDecryptAmount').value)
  const output = document.getElementById('caesarDecryptOutput')
  output.value = 'The decoded string using the Caesar cipher is:\n' + caesarCipher(input, -shiftAmount) // use a negative shift amount to decrypt cipher text
}

// Vigenere Cipher Code
function vigenereCipher(input, cipher, choice) {
  // error handling before rest of function runs
  if (input === '' && cipher === '') {
    alert("No input provided in both inputs.");
    return "No input provided in both inputs.";
  } else if (input === '') {
    alert("No input provided in the word input.");
    return "No input provided in the word input.";
  } else if (cipher === '') {
    alert("No input provided in the cipher input.");
    return "No input provided in the cipher input.";
  }

  let outputString = ''

  // creates new empty string to be used as the temporary cipher, looping the original cipher until it matches the length of the input
  if (!(cipher.length === input.length)) {
    let extendedCipher = ''
    for (let index = 0; extendedCipher.length < input.length; index++) {
      extendedCipher += cipher[index % cipher.length]
    }
    cipher = extendedCipher // reassign original cipher with the extended cipher
    console.log('Input: ' + input + ' Length: ' + input.length)
    console.log('Constructed Cipher: ' + extendedCipher + ' Length: ' + extendedCipher.length)
  }

  for (let index = 0; index < input.length; index++) {
    let letter = input[index]
    const asciiInput = input.charCodeAt(index)
    const asciiCipher = cipher.charCodeAt(index)

    if (choice === 'encrypt') {
      if (asciiInput >= 65 && asciiInput <= 90) {
        // for all uppercase letters (ASCII 65-90)
        letter = String.fromCharCode((((asciiInput - 65) + (asciiCipher - 65)) % 26 + 26) % 26 + 65)
      } else if (asciiInput >= 97 && asciiInput <= 122) {
        // for all lowercase letters (ASCII 97-122)
        letter = String.fromCharCode((((asciiInput - 97) + (asciiCipher - 97)) % 26 + 26) % 26 + 97)
      } else if (asciiInput >= 33 && asciiInput <= 64) {
        // for all non-letters (ASCII 33-64)
        letter = String.fromCharCode((((asciiInput - 33) + (asciiCipher - 33)) % 32 + 32) % 32 + 33)
      }
    }

    if (choice === 'decrypt') {
      if (asciiInput >= 65 && asciiInput <= 90) {
        // for all uppercase letters (ASCII 65-90)
        letter = String.fromCharCode((((asciiInput - 65) - (asciiCipher - 65) + 26) % 26 + 26) % 26 + 65)
      } else if (asciiInput >= 97 && asciiInput <= 122) {
        // for all lowercase letters (ASCII 97-122)
        letter = String.fromCharCode((((asciiInput - 97) - (asciiCipher - 97) + 26) % 26 + 26) % 26 + 97)
      } else if (asciiInput >= 33 && asciiInput <= 64) {
        // for all non-letters (ASCII 33-64)
        letter = String.fromCharCode((((asciiInput - 33) - (asciiCipher - 33) + 32) % 32 + 32) % 32 + 33)
      }

    }
    // append ciphered characters to the end of the string
    outputString += letter
  }
  return outputString
}

// functions called in the HTML on each button press
function encryptVigenere() {
  const input = document.getElementById('vigenereEncryptInput').value.toString().trim()
  const cipher = document.getElementById('vigenereKeywordEncrypt').value.toString().trim()
  const output = document.getElementById('vigenereEncryptOutput')
  output.value = 'The encoded string using the Vigenere cipher is:\n' + vigenereCipher(input, cipher, 'encrypt')
}

function decryptVigenere() {
  const input = document.getElementById('vigenereDecryptInput').value.toString().trim()
  const cipher = document.getElementById('vigenereKeywordDecrypt').value.toString().trim()
  const output = document.getElementById('vigenereDecryptOutput')
  output.value = 'The decoded string using the Vigenere cipher is:\n' + vigenereCipher(input, cipher, 'decrypt')
}
