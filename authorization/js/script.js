window.onload = function(){
    if(localStorage.getItem('access_token')) {
        localStorage.setItem('access_token', '');
        console.log(localStorage.getItem('access_token'));
        console.log('Авторизован');
    }
    let validateError = false;
    var inp_login = document.querySelector('input[name=email]');
    var inp_password = document.querySelector('input[name=password]');
    let res = document.querySelector("#result");
    
    document.querySelector('button').onclick = function() {

        var userAuth = {
            name: inp_login.value,
            password: inp_password.value
        }

        if (inp_login.value === '' || inp_login.value === "null" || inp_login.value.length < 6){
            res.innerHTML = ('Логин должен содержать минимум 6 символов!');
            inp_login.style.borderBottom = '2px solid brown';
            validateError = true;
        }else if(inp_password.value.length < 6){
            res.innerHTML = ('Пароль должен содержать минимум 6 символов!');
            inp_password.style.borderBottom = '2px solid brown';
            validateError = true;
        }else{
            validateError = false;
            res.innerHTML = ('');
            inp_password.style.borderBottom = 'none';
        }

        if (localStorage.getItem('access_token')){
            window.location.href = "/toapply/";
        }
        ajaxPost(JSON.stringify(userAuth));
    }
    };

function ajaxPost(params){
    var request = new XMLHttpRequest();

    request.onreadystatechange = function (){
        console.log(request.responseText);
        if(request.readyState === 4 && request.status === 200){
                let result = JSON.parse(request.responseText);
              localStorage.setItem('access_token', result.token);
                /* result = {
                token: ""
                 */
            
        }
    }
    request.open("POST","/api/v1/user/token");
    request.setRequestHeader('Content-Type','application/json');
    request.setRequestHeader("Authorization", "Bearer" + localStorage.getItem('access_token'));
    request.send(params);
}

