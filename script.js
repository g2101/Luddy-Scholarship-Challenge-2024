const NodeRSA = require('node-rsa');

function encryptRSA() {

}

function decryptRSA() {

}

function generateRSAKeys() {
    const key = new NodeRSA({b: 512});

    var output = document.getElementById("output");
    output.value = "The key is " + key;
}
