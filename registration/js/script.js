window.onload = function(){

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
            inp_login.style.borderBottom = '2px solid brown';
            validateError = true;
        }else if (inp_email.value === "" || inp_email.value === "null" || !regEmail.test(inp_email.value)){
            res.innerHTML = ('Ошибка ввода E-mail, повторите попытку!');
            inp_email.style.borderBottom = '2px solid brown';
            validateError = true;
        }else if(inp_password.value === "" || inp_password.value === "null" || inp_password.value !== (inp_password2.value) || inp_password.value.length < 6){
            res.innerHTML = ('Пароли должен совпадать и содержать минимум 6 символов');
            inp_password.style.borderBottom = '2px solid brown';
            inp_password2.style.borderBottom = '2px solid brown';
            validateError = true;
        }else{
            res.innerHTML = ('');
            inp_login.style = ('none');
            inp_email.style = ('none');
            inp_password.style = ("none");
            inp_password2.style = ("none");
            validateError = false;
            window.location.href = "/toapply/"

        }
        ajaxPost(JSON.stringify(userReg));
    };
}
function ajaxPost(params){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (){
        console.log(request.responseText);
        if(request.readyState === 4 && request.status === 200){
                document.querySelector('#result').innerHTML = request.responseText;
        }
    }
    request.open("POST","/api/v1/users");
    request.setRequestHeader('Content-Type','application/json');
    request.send(params);

}


