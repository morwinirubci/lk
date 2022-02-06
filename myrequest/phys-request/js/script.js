window.onload = function () {

        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {


                document.querySelector(".id").innerHTML = result.id;
                console.log(request.responseText);
            }
        }

        request.open("GET", "/api/v1/bids");
        request.setRequestHeader("Authorization", "Bearer " + localStorage.getItem('access_token'));
        request.send();





        document.querySelector(".item_btn").onclick = function () {
            sessionStorage.setItem('access_token', '');
            window.location.href = "/authorization/";

        }


}