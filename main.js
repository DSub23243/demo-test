var temp = 0
var troll = function(){
    var nut1 = document.getElementById("khong")
    var top = Math.floor(Math.random()*600)
    var left = Math.floor(Math.random()*600)
    nut1.style.top = top;
    nut1.style.left = left;
    temp++
    if (temp == 4) {
    alert("Đừng trốn tránh nữa")
    }
    if (temp == 6) {
    alert("Thề đéo thoát được đâu :))))")
    }
    if (temp == 9) {
    alert("Đầu hàng đi đmm")
    }
    if (temp == 12) {
    alert("nhấn 'YES' đi man buồn vl")
    }
}
var test = document.getElementsByClassName('.btn-hover color-10').onclick = function() {
    document.querySelector(".form").style.top = "10%"
}
var test1 = document.getElementsByClassName('.btn-hover color-3').onclick = function() {
    document.querySelector(".endgame").style.top = "0%"
}
var test2 = document.getElementsByClassName('.btn-hover color-2').onclick = function() {
    document.querySelector('#formnhap').value = "TẠI TUI DỄ THƯƠNG"
    //console.log(ans)
    returns
}
