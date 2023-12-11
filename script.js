/* eslint-disable no-unused-vars */
// Caesar Cipher Code
function caesarCipher(input, shiftAmount) {
  let outputString = ''

  for (let i = 0; i < input.length; i++) { // iterate through entire word
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
    }

    // append ciphered letter to output string
    outputString += letter
  }

  return outputString
}

function encryptCaesar() { // function to return encrypted string to output
  const input = document.getElementById('caesarEncryptInput').value
  const shiftAmount = parseInt(document.getElementById('shiftEncryptAmount').value)
  const output = document.getElementById('caesarEncryptOutput')
  output.value = 'The encoded string using the Caesar cipher is:\n' + caesarCipher(input, shiftAmount) // use a positive shift amount to encrypt cipher text
}

function decryptCaesar() { // function to return decrypted string to output
  const input = document.getElementById('caesarDecryptInput').value
  const shiftAmount = parseInt(document.getElementById('shiftDecryptAmount').value)
  const output = document.getElementById('caesarDecryptOutput')
  output.value = 'The decoded string using the Caesar cipher is:\n' + caesarCipher(input, -shiftAmount) // use a negative shift amount to decrypt cipher text
}

// Vigenere Cipher Code
function vigenereCipher(input, cipher, choice) {
  input = input.trim()
  cipher = cipher.trim()

  for (let index = 0; index < cipher.length; index++) {
    if (cipher.charAt(index).match(/[^A-Za-z]/g)) {
      return 'INVALID CIPHER INPUT.'
    }
  }

  if (!(cipher.length === input.length)) {
    for (let index = 0; cipher.length < input.length; index++) {
      cipher += cipher.substring(index, index + 1)
    }
    console.log('Input: ' + input + ' Length: ' + input.length)
    console.log('Constructed Cipher: ' + cipher + ' Length: ' + cipher.length)
  }

  let output = ''

  for (let index = 0; index < input.length; index++) {
    let letter = input[index]
    const asciiInput = input.charCodeAt(index)
    const asciiCipher = cipher.charCodeAt(index)
    console.log('Letter: ' + letter + ' asciiInput: ' + asciiInput + ' asciiCipher: ' + asciiCipher) // debugging

    if (choice === 'encrypt') {
      if (asciiInput >= 65 && asciiInput <= 90) {
        // Uppercase letters
        letter = String.fromCharCode((((asciiInput - 65) + (asciiCipher - 65)) % 26) + 65)
      } else if (asciiInput >= 97 && asciiInput <= 122) {
        // Lowercase letters
        letter = String.fromCharCode((((asciiInput - 97) + (asciiCipher - 97)) % 26) + 97)
      }
    }
    if (choice === 'decrypt') {
      if (asciiInput >= 65 && asciiInput <= 90) {
        // Uppercase letters
        letter = String.fromCharCode((((asciiInput - 65) - (asciiCipher - 65) + 26) % 26) + 65)
      } else if (asciiInput >= 97 && asciiInput <= 122) {
        // Lowercase letters
        letter = String.fromCharCode((((asciiInput - 97) - (asciiCipher - 97) + 26) % 26) + 97)
      }
    }
    output += letter
  }
  return output
}

function encryptVigenere() {
  const input = document.getElementById('vigenereEncryptInput').value.toString()
  const cipher = document.getElementById('vigenereKeywordEncrypt').value.toString()
  const output = document.getElementById('vigenereEncryptOutput')
  output.value = 'The encoded string using the Vigenere cipher is:\n' + vigenereCipher(input, cipher, 'encrypt')
}

function decryptVigenere() {
  const input = document.getElementById('vigenereDecryptInput').value.toString()
  const cipher = document.getElementById('vigenereKeywordDecrypt').value.toString()
  const output = document.getElementById('vigenereDecryptOutput')
  output.value = 'The decoded string using the Vigenere cipher is:\n' + vigenereCipher(input, cipher, 'decrypt')
}
