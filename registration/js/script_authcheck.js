
    document.querySelector(".item_btn").onclick = function () {
        sessionStorage.setItem('access_token', '');
        window.location.href = ("/authorization/");
    }

