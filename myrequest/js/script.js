let btn = document.querySelector(".item_btn").onclick = function () {
    localStorage.setItem('access_token', ' ');
    window.location.href = "/authorization/index.html";   
}