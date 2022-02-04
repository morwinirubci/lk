
if (localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === ""){
    window.location.href = "/authorization/";
}
let btn = document.querySelector(".item_btn").onclick = function () {
    localStorage.setItem('access_token', '');
    window.location.href = "/authorization/";
}