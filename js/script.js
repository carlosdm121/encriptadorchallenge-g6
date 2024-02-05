// Setting the encrypter function
const getInput = document.getElementById('inputText');
let textToEncrypt = '';

function encrypter() {
  textToEncrypt = getInput.value;
  const encryptedText = [];
  for (let i = 0; i < textToEncrypt.length; i++) {
    if (textToEncrypt[i] === 'e') {
      encryptedText[i] = 'enter';
    } else if (textToEncrypt[i] === 'i') {
      encryptedText[i] = 'imes';
    } else if (textToEncrypt[i] === 'a') {
      encryptedText[i] = 'ai';
    } else if (textToEncrypt[i] === 'o') {
      encryptedText[i] = 'ober';
    } else if (textToEncrypt[i] === 'u') {
      encryptedText[i] = 'ufat';
    } else {
      encryptedText[i] = textToEncrypt[i];
    }
  }
  let finalText = encryptedText.join('');
  document.getElementById('outputText').innerHTML = finalText;
  document.getElementById('outputText').className = 'textFound';
}

// Setting the decrypter function
let decryptedText = null;
function decrypter() {
  textToEncrypt = getInput.value;
  decryptedText = textToEncrypt.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  document.getElementById('outputText').innerHTML = decryptedText;
  document.getElementById('outputText').className = 'textFound';
}

// Setting the copyToClipboard function
function copyToClipboard() {
  let getTextToCopy = document.getElementById("outputText");
  getTextToCopy.select();
  getTextToCopy.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(getTextToCopy.value);
}
