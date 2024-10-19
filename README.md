# Shamir's Secret Sharing Algorithm - Catalog Placements Assignment

This project demonstrates the implementation of **Shamir's Secret Sharing algorithm** using JavaScript. Shamir's Secret Sharing is a cryptographic method for distributing a secret among participants. A subset of the shares is required to reconstruct the secret.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Implementation Details](#implementation-details)
- [Features](#features)
- [References](#references)

## Introduction

The objective of this assignment is to implement **Shamir's Secret Sharing algorithm** using **JavaScript** to split a secret into `n` parts. Any `k` parts can be used to reconstruct the original secret. This ensures security in distributed environments.

## Technologies Used
- **JavaScript**
- **Node.js** (if required to run the script in a Node.js environment)
- **HTML/CSS** (optional front-end interface)

## Setup and Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/shamir-secret-sharing-js.git
    ```

2. Navigate to the project directory:
    ```bash
    cd shamir-secret-sharing-js
    ```

3. Install dependencies (if applicable):
    ```bash
    npm install
    ```

4. Run the program:
    ```bash
    node index.js
    ```

## Usage

1. **Dividing the Secret**: You can input a secret and specify how many parts (`n`) to split it into and how many parts (`k`) are required to reconstruct the secret.

2. **Reconstructing the Secret**: Combine any `k` shares to reconstruct the original secret.

### Example:

```javascript
// Generate shares (n = 5, k = 3)
const secret = "my-secret-message";
const shares = generateShares(secret, 5, 3);
console.log(shares);

// Reconstruct the secret from 3 shares
const reconstructedSecret = reconstructSecret([share1, share2, share3]);
console.log(reconstructedSecret);  // Output: my-secret-message
