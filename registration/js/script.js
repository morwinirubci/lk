window.onload = function(){

    if(localStorage.getItem('access_token')) {
        localStorage.setItem('access_token', '');
        console.log(localStorage.getItem('access_token'));
        console.log('Уже зарегистрирован');
    }
    
    let regEmail =/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    // var inp_firstName = document.querySelector('input[name=firstName]');
    // var inp_surName = document.querySelector('input[name=surName]');
    var inp_login = document.querySelector('input[name=login]');
    var inp_email = document.querySelector('input[name=email]');
    var inp_password = document.querySelector('input[name=password]');
    var inp_password2 = document.querySelector('input[name=password2]');
    let btn = document.querySelector("button");
    let res = document.querySelector("#result");


    btn.onclick = function(){

        if (inp_login.value === "" || inp_login.value === "null"){
            res.innerHTML = ('Обязательное поле!');
            inp_login.style.borderBottom = '2px solid brown';
            ajaxPost();
        }else{
            res.innerHTML = ('');
            inp_login.style = ("none");
        }
        if (inp_email.value === "" || inp_email.value === "null") {
            res.innerHTML = ('Обязательное поле!');
            inp_email.style.borderBottom = '2px solid brown';
            ajaxPost();
        }else if(!regEmail.test(inp_email.value)){
            res.innerHTML = ('Ошибка ввода E-mail, повторите попытку!');
            inp_email.style.borderBottom = '2px solid brown';
            ajaxPost();
        }else{
            res.innerHTML = ('');
            inp_email.style = ("none");
        }
        if(inp_password.value === "" || inp_password.value === "null") {
            res.innerHTML = ('Обязательное поле!');
            inp_password.style.borderBottom = '2px solid brown';
            ajaxPost();
        }else if (inp_password.value !== (inp_password2.value)){
            res.innerHTML = ('Пароли не совпадают, повторите попытку!');
            inp_password.style.borderBottom = '2px solid brown';
            inp_password2.style.borderBottom = '2px solid brown';
            ajaxPost();
        }else{
            res.innerHTML = ('');
            inp_password.style = ("none");
            inp_password2.style = ("none");
        }

        var userReg = {
            // firstName: inp_firstName.value,
            // surName: inp_surName.value,
            name: inp_login.value,
            email: inp_email.value,
            password: inp_password.value
        }
        console.log(userReg);
        ajaxPost(JSON.stringify(userReg));
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
    request.setRequestHeader("Registration", "Bearer" + localStorage.getItem('access_token'));
}


