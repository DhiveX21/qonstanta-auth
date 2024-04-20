import React from "react";
import crypto from "crypto";

const useEncrypt = () => {
  const secretKey = process.env.NEXT_PUBLIC_ENCRYPT_SECRET_KEY;

  if (!secretKey) {
    throw "Encryption failed, key is invalid!";
  }
  function adjustAESKey(key: string) {
    const keyLength = 32; // Panjang kunci dalam byte untuk AES-256
    if (key.length < keyLength) {
      // Jika kunci terlalu pendek, tambahkan nol di bagian belakang
      return key.padEnd(keyLength, "\0");
    } else if (key.length > keyLength) {
      // Jika kunci terlalu panjang, potong bagian ekstra
      return key.slice(0, keyLength);
    }
    return key;
  }
  // Fungsi untuk melakukan enkripsi menggunakan AES
  function encrypt(text: any) {
    const iv = crypto.randomBytes(16); // Generate IV secara acak
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(adjustAESKey(secretKey!)),
      iv
    );
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return iv.toString("hex") + ":" + encrypted;
  }

  // Fungsi untuk melakukan dekripsi menggunakan AES
  function decrypt(encryptedData: any) {
    const iv = encryptedData.split(":")[0];
    const data = encryptedData.split(":")[1];
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(adjustAESKey(secretKey!)),
      Buffer.from(iv, "hex")
    );
    let decrypted = decipher.update(data, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }

  return {
    encrypt,
    decrypt,
    adjustAESKey,
  };
};

export default useEncrypt;
