
window.onload = function(){

    if( sessionStorage.getItem('access_token')) {
        console.log( sessionStorage.getItem('access_token'));
        console.log('Авторизован');
    }
    let validateError = false;
    var inp_login = document.querySelector('input[name=email]');
    var inp_password = document.querySelector('input[name=password]');
    var res = document.querySelector("#result");
    
    document.querySelector('button').onclick = function() {

        var userAuth = {
            email: inp_login.value,
            password: inp_password.value
        }

        if (inp_login.value === '' || inp_login.value === "null" || inp_login.value.length < 6){
            res.innerHTML = ('Логин должен содержать минимум 6 символов!');
            inp_login.className = "valid";
            validateError = true;
        }else if(inp_password.value.length < 6){
            res.innerHTML = ('Пароль должен содержать минимум 6 символов!');
            inp_password.className = "valid";
            validateError = true;
        }else{
            validateError = false;
            res.innerHTML = ('');
            inp_password.classList.remove("valid");
            inp_login.classList.remove("valid");
        }

        ajaxPost(JSON.stringify(userAuth));
    }


function ajaxPost(params){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function (){
        console.log(request.responseText);
        if(request.readyState === 4 && request.status === 200) {
            let result = JSON.parse(request.responseText);
            sessionStorage.setItem('access_token', result.token);
            window.location.href = "/toapply/";
            /* result = {
            token: ""
             */
        }else if (request.readyState === 4 && request.status !== 200 && validateError === false)  {
            document.querySelector("#result2").innerHTML = ('Пользователь не существует, либо данные набраны неверно');
            inp_password.className = ("valid");
            inp_login.className = ("valid");
        }else{
            document.querySelector("#result2").innerHTML = "";
        }
    }
    request.open("POST","/api/v1/users/token");
    request.setRequestHeader('Content-Type','application/json');
    request.send(params);
}

/*
if (localStorage.getItem('access_token')){
    window.location.href = "/toapply/";
}*/
};