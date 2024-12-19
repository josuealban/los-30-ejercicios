const nums = [6, 13, 1, 15, 5];
let elementosImpares = "";

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        elementosImpares += nums[i] + " ";
    }
}
alert("Elementos impares: " + elementosImpares);