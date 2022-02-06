window.onload = function () {
    function ajaxPost(params){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            console.log(request.responseText);
            if(request.readyState === 4 && request.status === 200){
                document.querySelector('#result').innerHTML = request.responseText;
            }
        }
        request.open("GET","/api/v1/bids/corporate");

        request.send(params);

    }

    document.querySelector("button[class = item_btn]").onclick = function () {
        sessionStorage.setItem('access_token', '');
        window.location.href = "/authorization/";
    }
}