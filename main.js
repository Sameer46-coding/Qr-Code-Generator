// Code By Sulphuric


let image = document.getElementById("image")
let qrimg = document.getElementById("qrimg")
let text = document.getElementById("text")

function qrcode(){
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
    + text.value
}
