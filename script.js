function decimalToBinary(decimal) {
  let binaryNum = new Array(32);
 
    // counter for binary array
    let i = 0;
    while (decimal > 0) {
         // storing remainder in binary array
        binaryNum[i] = decimal % 2;
        decimal = Math.floor(decimal / 2);
        i++;
    }
 return binaryNum;
    // printing binary array in reverse order
    // for (let j = i - 1; j >= 0; j--)
    //     document.write(binaryNum[j]);
}


