function criar() {
    let img = document.getElementById("imgQRcode");
    let input = document.getElementById("input").value;
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&chld=H&data=${encodeURIComponent(input.value)}`;
    
    img.src=api;
}