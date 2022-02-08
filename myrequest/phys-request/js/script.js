window.onload = function () {


    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let result = JSON.parse(request.responseText);
            console.log(result);

            document.querySelector(".newTab").innerHTML = `<table class="id"></table>`
            for (let i = 0; i < result.length; i++) {
                let row = document.createElement('tr');

                row.innerHTML = `<td><a class='link_item' href="phys-requestID?id=` + result[i].id + `">` + result[i].id + `</a></td>` +
                    `<td>` + result[i].created_at + `</td>` +
                    `<td>` + result[i].status + `</td>`;
                document.querySelector('.id').appendChild(row);
            }
        }
    }
    request.open("GET", "/api/v1/bids/");
    request.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('access_token'));
    request.send();


    document.querySelector(".item_btn").onclick = function () {
        sessionStorage.setItem('access_token', '');
        window.location.href = "/authorization/";

    }


}