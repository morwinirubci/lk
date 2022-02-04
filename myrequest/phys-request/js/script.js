window.onload = function () {
    let btn = document.querySelector(".item_btn").onclick = function () {
        localStorage.setItem('access_token', '');
        window.location.href = "/authorization/";
    }
    function ajaxPost(params){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            console.log(request.responseText);
            if(request.readyState === 4 && request.status === 200){
                document.querySelector('#result').innerHTML = request.responseText;
            }
        }
        request.open("GET","/api/v1/bids");

        request.send(params);

    }



if (localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === "") {
    window.location.href = "/authorization/";
}
    document.querySelector("button[class = item_btn]").onclick = function () {
        localStorage.setItem('access_token', '');
        window.location.href = "/authorization/";

    }
}