import EncryptRsa from 'encrypt-rsa';


function encryptRSA() {

}

function decryptRSA() {

}

function generateRSAKeys() {
    const { privateKey, publicKey } = nodeRSA.createPrivateAndPublicKeys();

    var output = document.getElementById("output");
    output.value = `The private key is: ${privateKey} and the public key is ${publicKey}`;
}


