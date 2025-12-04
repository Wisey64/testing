function caesarCipher(str, shift) {
    // Helper function to shift a single character
    const shiftChar = (char, shift) => {
        const isUpperCase = char >= 'A' && char <= 'Z';
        const isLowerCase = char >= 'a' && char <= 'z';

        if (isUpperCase || isLowerCase) {
            const base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            const charCode = char.charCodeAt(0);
            const shiftedCode = ((charCode - base + shift) % 26 + 26) % 26 + base;
            return String.fromCharCode(shiftedCode);
        }

        return char; // Return non-alphabetical characters unchanged
    };

    // Process the string
    return str
        .split('')
        .map(char => shiftChar(char, shift))
        .join('');
}

module.exports = caesarCipher;