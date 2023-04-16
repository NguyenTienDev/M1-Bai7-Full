// document.write(""");


let ten = prompt("Nhập tên học sinh: ");
let diemLy = parseFloat(prompt("Nhập điểm môn Vật lý: "));
let diemHoa = parseFloat(prompt("Nhập điểm môn Hóa học: "));
let diemSinh = parseFloat(prompt("Nhập điểm môn Sinh học: "));
let tongDiem = diemLy + diemHoa + diemSinh;
let diemTrungBinh = tongDiem / 3;
//Hiển thị kết quả
alert("Học sinh " + ten + " có điểm trung bình: " + diemTrungBinh + " và tổng điểm: " + tongDiem);