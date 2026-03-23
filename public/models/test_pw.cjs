const crypto = require("crypto");
const fs = require("fs");

const passwords = ["Character3D#@", "MyCharacter12", "Character@123", "Admin#123", "Character3D@#", "12345678", "password"];

passwords.forEach(password => {
  try {
    const input = fs.readFileSync("character.enc");
    const iv = input.slice(0, 16);
    const encryptedData = input.slice(16);
    const key = crypto.createHash("sha256").update(password).digest();
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
    if (decryptedData.slice(0, 4).toString() === "glTF" || decryptedData.slice(0, 4).readUInt32LE(0) === 0x46546C67) {
        console.log("FOUND CORRECT PASSWORD:", password);
        process.exit(0);
    }
  } catch (err) {}
});
console.log("No password found.");
