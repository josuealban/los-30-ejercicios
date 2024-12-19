const nums = [6, 13, 1, 15, 5];
let elementosImpares = "";

for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
        elementosImpares += nums[i] + " ";
    }
}
alert("Elementos en índices impares: " + elementosImpares);