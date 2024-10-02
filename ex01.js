console.log("bài 1");
let s = prompt("nhập quãng đường");
s = Number(s);

function taxiFare(km) {
  let sum = 0;
  if (typeof km === "number" && !isNaN(km)) {
    if (km <= 0) {
      console.log("invalid");
    } else if (km <= 1) {
      console.log("5000đ");
    } else if (km <= 30) {
      sum = 5000 + (km - 1) * 4000;
      console.log(`${sum}đ`);
    } else {
      sum = 5000 + 29 * 4000 + (km - 30) * 3000;
      console.log(`${sum}đ`);
    }
  } else {
    console.log("Thông tin nhập vào ko hợp lệ");
  }
}
taxiFare(s);
