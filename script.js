 function check_gcd(lengt, widt) {
     lengt = Number(document.querySelector("#length").value)
     widt = Number(document.querySelector("#width").value)

     var answer = euclidGcdAlgorithm(lengt, widt);
     console.log(answer)
     document.querySelector("#gcd").value = answer
 }


 function euclidGcdAlgorithm(len, wid) {
     if (wid === 0) {
         return len;
     } else {
         var remainder = len % wid;

         //The gcd
         return euclidGcdAlgorithm(wid, remainder)
     }
 }