window.onload = function () {
    let id = document.querySelector(".table_item_id");
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let created = document.querySelector(".created");
                let status = document.querySelector(".status");
                let result = JSON.parse(request.responseText);

                console.log(result);

                id.innerHTML = result[0].id;
                created.innerHTML = result[0].created_at;
                status.innerHTML = result[0].status;
                console.log(id);
            }
        }

        request.open("GET", "/api/v1/bids");
        request.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('access_token'));
        request.send();
        id.addEventListener('click',function (e){
        e.preventDefault();
        window.location.href = "/myrequest/phys-request/phys-requestID";
        })




        document.querySelector(".item_btn").onclick = function () {
            sessionStorage.setItem('access_token', '');
            window.location.href = "/authorization/";

        }


}