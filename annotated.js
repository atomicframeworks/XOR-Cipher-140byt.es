function(
    a,  // The input text
    b   // The encryption key
){
    return a.replace(/./g, function(a){                     // Replace every character
        return String.fromCharCode(a.charCodeAt() ^ b)      // Shift the character code with the key using XOR and create new character from the result
    })
}