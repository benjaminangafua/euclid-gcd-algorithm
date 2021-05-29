//Take two inputs values and return the gcd of the two
document.querySelector("#findGcd").addEventListener("click", (lengt, widt) => {
    // Input value
    lengt = Number(document.querySelector("#length").value)
    widt = Number(document.querySelector("#width").value)

    // the print of the gcd
    var answer = findGcd(lengt, widt);
    document.querySelector("#gcd").value = answer
})

function findGcd(len, wid) {
    // the base case to quit the program as the remainder be 0
    if (wid === 0) {
        return len;
    } else {
        //  Get the the remainder of  length and width
        var modulus = len % wid;

        //Keep calling the length and width until the width remain 0
        return findGcd(wid, modulus)
    }
}