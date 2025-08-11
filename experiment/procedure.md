Follow these steps to create and verify digital signatures using RSA with SHA-1 hashing:

### 📝 Step 1: Enter Plaintext and Generate Hash

The first step involves entering your message and creating its cryptographic hash:

- **Enter your message** in the **Plaintext (string)** field (default: "test")
- Click the **"Generate SHA-1 Hash"** button to compute the SHA-1 hash
- The hash will automatically appear in the **Hash output (hex)** field below
- This hash represents a fixed-size fingerprint of your original message

_The light blue section clearly indicates this is the input and hashing phase._

### 🔑 Step 2: Input Hash to RSA

The second step prepares the hash for RSA signature creation:

- The system automatically copies the generated hash to the **Input to RSA (hex)** field
- If needed, you can manually copy the hash value from Step 1
- Verify that both hash fields contain identical values
- Click **"Apply RSA Signature"** to create the digital signature using RSA encryption

_The light orange section distinguishes this RSA processing phase._

### ✅ Step 3: View Digital Signature Results

The third step displays your digital signature in multiple formats:

- **Digital Signature (hex)**: The signature in hexadecimal format for technical analysis
- **Digital Signature (base64)**: The same signature in base64 encoding for easy transmission
- **Status**: Shows success confirmation with processing details or error messages
- **Digital Signature Summary**: A comprehensive table showing all parameters and results

_The light green section clearly indicates successful completion and results._

### ⚙️ Step 4: Select RSA Public Key

The fourth step involves configuring the RSA cryptographic parameters:

- **Important**: You must select a key size before applying the RSA signature in Step 2
- **Public exponent**: Shows the current exponent value (typically 3 or 65537)
- **Modulus**: Displays the RSA modulus in hexadecimal format
- **Key Size Selection**: Choose from four available options:
  - **Load 1024-bit Key (e=F4)**: Standard 1024-bit key with exponent 65537 (recommended)
  - **Load 1024-bit Key (e=3)**: 1024-bit key with small exponent 3 (faster)
  - **Load 512-bit Key (e=F4)**: Smaller 512-bit key with exponent 65537 (educational use)
  - **Load 512-bit Key (e=3)**: 512-bit key with small exponent 3 (fastest, least secure)

_The light purple section emphasizes the importance of key configuration._

### 🔍 Understanding the Digital Signature Process

#### Cryptographic Workflow:

1. **Message Hashing**: SHA-1 creates a 160-bit digest of any input message
2. **Private Key Signing**: RSA encrypts the hash with the private key to create the signature
3. **Public Key Verification**: Others can verify authenticity using the corresponding public key
4. **Integrity Assurance**: Any message modification will result in signature verification failure

#### Security Properties:

- **Authentication**: Confirms the signer's identity
- **Integrity**: Detects any message tampering
- **Non-repudiation**: Prevents denial of signature creation

### 🔧 Troubleshooting Common Issues

| Issue                             | Solution                                                             |
| --------------------------------- | -------------------------------------------------------------------- |
| **"Invalid RSA public key"**      | Select a key size in Step 4 before applying RSA signature            |
| **"Hash and RSA input mismatch"** | Ensure both hash fields contain identical values                     |
| **"No hash generated"**           | Click the "Generate SHA-1 Hash" button in Step 1 first               |
| **Empty signature results**       | Verify all previous steps are completed in order                     |
| **Mobile display issues**         | Use landscape orientation or access from desktop for best experience |
