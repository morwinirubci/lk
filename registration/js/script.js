window.onload = function(){
    if (sessionStorage.getItem("access_token")){
        window.location.href = "/authorization/";
    }

    var validateError = false;

    let regEmail =/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    var inp_login = document.querySelector('input[name=login]');
    var inp_email = document.querySelector('input[name=email]');
    var inp_password = document.querySelector('input[name=password]');
    var inp_password2 = document.querySelector('input[name=password2]');
    let btn = document.querySelector("button");
    let res = document.querySelector("#result");

    btn.onclick = function(){

        var userReg = {
            name: inp_login.value,
            email: inp_email.value,
            password: inp_password.value
        }

        if (inp_login.value === '' || inp_login.value === "null" || inp_login.value.length < 6){
            res.innerHTML = ('Логин должен содержать минимум 6 символов!');
            inp_login.className = "valid";
            validateError = true;
        }else if (inp_email.value === "" || inp_email.value === "null" || !regEmail.test(inp_email.value)){
            res.innerHTML = ('Ошибка ввода E-mail, повторите попытку!');
            inp_email.className = "valid";
            validateError = true;
        }else if(inp_password.value === "" || inp_password.value === "null" || inp_password.value !== (inp_password2.value) || inp_password.value.length < 6 || inp_password2.value.length < 6){
            res.innerHTML = ('Пароли должны совпадать и содержать минимум 6 символов');
            inp_password.className = "valid";
            inp_password2.className = "valid";
            validateError = true;
        }else{
            res.innerHTML = ('');
            inp_login.classList.remove('valid');
            inp_email.classList.remove('valid');
            inp_password.classList.remove('valid');
            inp_password2.classList.remove('valid');
            validateError = false;
        }
        ajaxPost(JSON.stringify(userReg));
}
function ajaxPost(params){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        if(request.readyState === 4 && request.status === 200){
                window.location.href = "/authorization/";
        }else if (request.readyState === 4 && request.status !== 200 && validateError === false)  {
            document.querySelector("#result2").innerHTML = ('Такой пользователь уже зарегистрирован');
            inp_email.className = ('valid');
            inp_password.className = ("valid");
            inp_password2 .className = ('valid');
            inp_login.className = ("valid");
        }else{
            document.querySelector("#result2").innerHTML = "";
        }

    }
    request.open("POST","/api/v1/users");
    request.setRequestHeader('Content-Type','application/json');
    request.send(params);

}

};
