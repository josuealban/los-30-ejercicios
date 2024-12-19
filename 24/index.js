const nums = [9, 4, 2, 8];
const sumaTotal = nums.reduce((acc, num) => acc + num, 0);
if (sumaTotal > 20) {
    alert("Sí");
} else {
    alert("No");
}