window.onload = function(){
    if(localStorage.getItem('access_token')) {
        localStorage.setItem('access_token', ' ');
        console.log(localStorage.getItem('access_token'));
        console.log('Авторизован');
    }
    var inp_login = document.querySelector('input[name=email]');
    var inp_password = document.querySelector('input[name=password]')
    
    document.querySelector('button').onclick = function(){
        var userAuth = {
            name: inp_login.value,
            password: inp_password.value
        }
        ajaxPost(JSON.stringify(userAuth));

    };
}
function ajaxPost(params){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        console.log(request.responseText);
        if(request.readyState == 4 && request.status == 200){
                document.querySelector('#result').innerHTML = request.responseText;
                let result = JSON.parse(request.responseText);
                localStorage.setItem('access_token', result.token);
            
        }
    }
    request.open("POST","http://23.111.121.26/api/v1/user/token");
    request.setRequestHeader('Content-Type','application/json');
    request.send(params);
    request.setRequestHeader("Authorization", "Bearer" + localStorage.getItem('access_token'));
}

