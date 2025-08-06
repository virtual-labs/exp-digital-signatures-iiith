Follow these steps to create and verify digital signatures using RSA with SHA-1 hashing:

### Step 1: Enter Plaintext and Generate Hash

- Enter the message you want to sign in the **Plaintext** field (default: "test")
- Click the **"Generate SHA-1 Hash"** button to compute the hash value
- The hash will appear in the **Hash output (hex)** field and automatically populate the RSA input field

### Step 2: Prepare RSA Input

- Verify that the **Input to RSA (hex)** field contains the same hash value
- If not, manually copy the hash value from the output field to the RSA input field
- Both fields must contain identical values for the signature process to work

### Step 3: Select RSA Key Size

- **Important:** You must select an RSA key before applying the signature
- Choose from the available options:
  - **Load 1024-bit Key (e=F4)**: Standard 1024-bit key with exponent 65537
  - **Load 1024-bit Key (e=3)**: 1024-bit key with small exponent 3
  - **Load 512-bit Key (e=F4)**: Smaller 512-bit key with exponent 65537
  - **Load 512-bit Key (e=3)**: 512-bit key with small exponent 3
- The selected key's modulus and exponent will be displayed in the form

### Step 4: Generate Digital Signature

- Click the **"Apply RSA Signature"** button to create the digital signature
- The system will:
  - Validate that all inputs are correct
  - Apply RSA encryption to the hash using the selected private key
  - Display results in both hexadecimal and base64 formats

### Step 5: Review Results

- **Digital Signature (hex)**: The signature in hexadecimal format
- **Digital Signature (base64)**: The same signature encoded in base64
- **Status**: Shows success message with processing time or error details

### Understanding the Process

1. **Hashing**: The plaintext is hashed using SHA-1 to create a fixed-size digest
2. **Signing**: The hash is encrypted with the RSA private key to create the signature
3. **Verification**: In practice, others can verify the signature using the corresponding public key

### Troubleshooting

- **"Invalid RSA public key"**: Select a key size first before applying RSA
- **"Hash and RSA input mismatch"**: Copy the hash value to the RSA input field
- **"No hash generated"**: Click the Generate SHA-1 Hash button first
