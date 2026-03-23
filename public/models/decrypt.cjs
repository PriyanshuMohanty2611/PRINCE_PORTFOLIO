const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const input = fs.readFileSync(inputFile);
  const iv = input.slice(0, 16);
  const encryptedData = input.slice(16);
  const key = crypto.createHash("sha256").update(password).digest();

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decryptedData = Buffer.concat([
    decipher.update(encryptedData),
    decipher.final(),
  ]);

  fs.writeFileSync(outputFile, decryptedData);
};

decryptFile("character.enc", "character.glb", "MyCharacter12");
console.log("Decrypted character.glb successfully!");
