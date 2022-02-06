
document.querySelector("button[class = item_btn]").onclick = function () {
    sessionStorage.setItem('access_token', '');
    window.location.href = "/authorization/";
}