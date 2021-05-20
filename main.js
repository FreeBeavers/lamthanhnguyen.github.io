// Bài 1 Tính tiền lương nhân viên 
/**
 * input: số ngày làm 
 * output: tiền lương ứng với số ngày làm
 * process:...
 */
function js11(){
    var soNgayLam = document.getElementById("soNgayLam").value ;
    soNgayLam = parseFloat(soNgayLam);

    document.getElementById("inSoNgayLam").innerHTML = soNgayLam;
    document.getElementById("inSoTienLuong").innerHTML = soNgayLam*100000;
}
// Bài 2: Tính giá trị trung bình
/**
 * input: 5 số bất kì
 * output: trung bình cộng của 5 số
 * process:...
 */
function js12(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var so4 = document.getElementById("so4").value;
    var so5 = document.getElementById("so5").value;
    
    so1 = parseFloat(so1);
    so2 = parseFloat(so2);
    so3 = parseFloat(so3);
    so4 = parseFloat(so4);
    so5 = parseFloat(so5);

    document.getElementById("inTrungBinhCong").innerHTML = (so1+so2+so3+so4+so5)/5
}
// Bài 3: Quy đổi tiền
/**
 * input: số tiền USD muốn đổi
 * output: số tiền VND tương ứng
 * process:...
 */
function js13(){
        var tienUsd = document.getElementById("tienUsd").value;
        tienUsd = parseFloat(tienUsd);
        document.getElementById("inSoTien").innerHTML = 23500*tienUsd;
}
// Bài 4: Tính chu vi và diện tích hình chữ nhật
/**
 * input: chiều dài, chiều rộng HÌNH CHỮ NHẬT
 * output: chu vi , diện tích HÌNH CHỮ NHẬT
 * process: ...
 */
function js14(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    chieuDai = parseFloat(chieuDai);
    chieuRong = parseFloat(chieuRong);

    document.getElementById("inChuVi").innerHTML = (chieuRong + chieuDai)*2;
    document.getElementById("inDienTich").innerHTML = chieuDai*chieuRong;
}
// Bài 5: Tính tổ 2 ký số
/**
 * input: số có hai chữ số
 * output: tổng của chữ số hàng chục và chữ số hàng đơn vị
 * process:....
 */
function js15(){
    var soHaiChuSo = document.getElementById("soHaiChuSo").value;
    soHaiChuSo = parseInt(soHaiChuSo);
    if(soHaiChuSo > 9 && soHaiChuSo < 100){
        document.getElementById("inLoiNhan").innerHTML = "Tổng ký số của số trên là:";
        document.getElementById("inTongKySo").innerHTML = parseInt(soHaiChuSo/10)  + parseInt(soHaiChuSo%10);
    }else{
        document.getElementById("inLoiNhan").innerHTML = "Số bạn nhập không phải là số có hai chữ số! Vui lòng nhập lại.";
        document.getElementById("inTongKySo").innerHTML = "";
    }
    
}