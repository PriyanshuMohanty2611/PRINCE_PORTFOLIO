const crypto = require("crypto");
const fs = require("fs");

const tryDecrypt = (inputFile, password) => {
  try {
    const input = fs.readFileSync(inputFile);
    const iv = input.slice(0, 16);
    const encryptedData = input.slice(16);
    const key = crypto.createHash("sha256").update(password).digest();

    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    const decryptedData = Buffer.concat([
      decipher.update(encryptedData),
      decipher.final(),
    ]);
    
    // Check if it's a valid GLB (starts with glTF)
    if (decryptedData.slice(0, 4).toString() === "glTF") {
        console.log(`Password "${password}" IS CORRECT!`);
        return true;
    }
    console.log(`Password "${password}" matches decrypt but not glTF signature.`);
  } catch (err) {
    console.log(`Password "${password}" failed: ${err.message}`);
  }
  return false;
};

console.log("Testing password candidates...");
tryDecrypt("character.enc", "Character3D#@");
tryDecrypt("character.enc", "MyCharacter12");
tryDecrypt("character.enc", "Character@123");
tryDecrypt("character.enc", "Admin#123");
