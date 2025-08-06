For a very brief theory of digital signature schemes and their analysis, click [here](docs/dss1.pdf)

Digital signatures are cryptographic mechanisms that provide authentication, integrity, and non-repudiation for digital documents and messages. Unlike handwritten signatures, digital signatures use mathematical algorithms to ensure that a document hasn't been altered and to verify the identity of the signer.

### How Digital Signatures Work

1. **Hash Generation**: The original message is processed through a hash function (like SHA-1) to create a fixed-size digest
2. **Signature Creation**: The hash is encrypted using the signer's private key to create the digital signature
3. **Verification**: Recipients can verify the signature using the signer's public key to decrypt the signature and compare it with a freshly computed hash

### RSA-Based Digital Signatures

RSA (Rivest-Shamir-Adleman) is widely used for digital signatures:

- **Key Generation**: Create a public-private key pair
- **Signing**: Encrypt the message hash with the private key
- **Verification**: Decrypt the signature with the public key and compare with the original hash

### Mathematical Representation

For RSA digital signatures:

- **Signature**: s = H(m)^d mod n
- **Verification**: H(m) = s^e mod n
  where:
- H(m) is the hash of message m
- d is the private key exponent
- e is the public key exponent
- n is the modulus

### Security Properties

Digital signatures provide three key security properties:

1. **Authentication**: Verifies the identity of the message sender
2. **Integrity**: Ensures the message hasn't been modified
3. **Non-repudiation**: Prevents the sender from denying they signed the message

<img src="images/image11.png">

### Key Size Considerations

The security of RSA digital signatures depends on key size:

1. **512-bit keys**: Fast but vulnerable to modern attacks
2. **1024-bit keys**: Moderate security, suitable for educational purposes
3. **2048-bit keys**: Currently recommended minimum for production use
4. **4096-bit keys**: High security but slower performance
