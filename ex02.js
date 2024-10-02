// Bài 2 : viết hàm kiểm tra 1 số
console.log("Bài 2");
let a = 10;
a = Number(a);
function checkNumber(n) {
  if (typeof n === "number" && !isNaN(n)) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("Chia hết cho cả 3 số 3, 5 và 15");
    } else if (n % 3 === 0) {
      console.log("Chia hết cho 3");
    } else if (n % 5 === 0) {
      console.log("Chia hết cho 5");
    } else {
      console.log("Không chia hết");
    }
  } else {
    console.log("invalid");
  }
}
checkNumber(a);
