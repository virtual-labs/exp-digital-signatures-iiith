1. **Digital signature cannot provide **\_\_** for the message**

   - (a) Integrity
   - (b) Confidentiality
   - (c) Non-repudiation
   - (d) Authentication

2. **Digital signature uses **\_\_** for generating valid signature**

   - (a) Private key ($K_{priv}$)
   - (b) Public key ($K_{pub}$)
   - (c) Secret key ($K_{secret}$)
   - (d) None of the above

3. **Verification Algorithm uses **\_\_** for validating digital signature**

   - (a) Private key ($K_{priv}$)
   - (b) Public key ($K_{pub}$)
   - (c) Secret key ($K_{secret}$)
   - (d) None of the above

4. **Is digital signature scheme possible without public key cryptography?**

   - (a) Yes
   - (b) No
   - (c) May exist
   - (d) None of the above

5. **Explain the importance of Hashing (using experiment) and explain why Hashing is needed**

   Consider the digital signature process:
   $$\text{Signature} = \text{Sign}(H(M), K_{priv})$$
   $$\text{Verification} = \text{Verify}(S, H(M), K_{pub})$$

   Where:

   - $M$ = Original message
   - $H(M)$ = Hash of the message
   - $K_{priv}$ = Private key
   - $K_{pub}$ = Public key
   - $S$ = Digital signature

6. **Suggest a scheme that does not use any hashing scheme**

   Propose an alternative digital signature scheme and discuss:

   - Security implications
   - Performance considerations
   - Practical limitations

   Mathematical representation: $\text{Signature} = \text{Sign}(M, K_{priv})$

7. **Explain why digital signature schemes work**

   Discuss the mathematical foundations including:

   - **Asymmetric Key Properties**: How $K_{pub}$ and $K_{priv}$ are mathematically related
   - **One-way Functions**: The computational difficulty of deriving $K_{priv}$ from $K_{pub}$
   - **Hash Function Properties**:
     - Collision resistance: $H(x) = H(y) \Rightarrow x = y$
     - Preimage resistance: Given $h$, finding $x$ such that $H(x) = h$ is computationally infeasible
   - **Digital Signature Algorithm (DSA)** security proof outline
