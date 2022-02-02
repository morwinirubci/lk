window.onload = function(){

    let kad = /\d{1,2}:\d{1,2}:\d{6,7}:\d{1,4}/;
    var inp_firstName = document.querySelector('input[name=firstName]');
    var inp_surName = document.querySelector('input[name=surName]');
    var inp_patronymic = document.querySelector('input[name=patronymic]');
    var inp_Series = document.querySelector('input[name=inputSeries]');
    var inp_Number = document.querySelector('input[name=inputNumber]');
    var inp_Data = document.querySelector('input[name=inputData]');
    var inp_Gave = document.querySelector('input[name=inputGave]');
    var inp_Region = document.querySelector('input[name=inputRegion]');
    var inp_Locality = document.querySelector('input[name=inputLocality]');
    var inp_Street = document.querySelector('input[name=inputStreet]');
    var inp_House = document.querySelector('input[name=inputHouse]');
    var inp_Index = document.querySelector('input[name=inputIndex]');
    var inp_Req = document.querySelector('#inputReq');
    var inp_Text = document.querySelector('#inputText');
    var inp_Address = document.querySelector('#inputAddress');
    var inp_KadNumber = document.querySelector('input[name=inputKadNumber]');
    var inp_Level = document.querySelector('#inputLevel');
    var inp_MaxPower = document.querySelector('input[name=inputMaxPower]');
    var inp_Categories = document.querySelector('input[name=inputCategories]');
    var inp_Phone = document.querySelector('input[name=inputPhone]');
    var inp_Post = document.querySelector('input[name=inputPost]');
    var inp_Inn = document.querySelector('input[name=inputInn]');
    var inp_Supp = document.querySelector('#inputSupp');
    var inp_Epu = document.querySelector("#inputEpu");
    var inp_Files = document.querySelector("#inputFiles");
    let res = document.querySelector("#result");
    let btn = document.querySelector('button');

    btn.onclick = function(){
        

        var physConnectionData = {
            firstName:inp_firstName.value,
            surName:inp_surName.value,
            patronymic:inp_patronymic.value,
            series:inp_Series.value,
            number:inp_Number.value,
            data:inp_Data.value,
            gave:inp_Gave.value,
            region:inp_Region.value,
            locality: inp_Locality.value,
            street:inp_Street.value,
            house:inp_House.value,
            index:inp_Index.value,
            req:inp_Req.options[inp_Req.selectedIndex].value,
            text:inp_Text.value,
            address:inp_Address.value,
            kadNumber:inp_KadNumber.value,
            level:inp_Level.options[inp_Level.selectedIndex].value,
            maxPower:inp_MaxPower.value,
            categories:inp_Categories.value,
            phone:inp_Phone.value,
            post:inp_Post.value,
            inn:inp_Inn.value,
            supp:inp_Supp.options[inp_Supp.selectedIndex].value,
            epu:inp_Epu.value,
            files:inp_Files.value
        }

        if (inp_Series.value.length < 4){
            res.innerHTML = 'Необходимо 4 цифры';
            inp_Series.style.borderBottom = '2px solid brown';
        }else if(inp_Number.value.level < 6){
            res.innerHTML = 'Необходимо 6 цифр';
            inp_Series.style.borderBottom = '2px solid brown';
        }else if(!kad.test(inp_KadNumber.value)){
            res.innerHTML = 'Кадастровый номер должен содержать ":" ';
            inp_Series.style.borderBottom = '2px solid brown';
        }

        var params = JSON.stringify(physConnectionData);
        
        ajaxPost(params);
        console.log(physConnectionData);
    };
}

    function ajaxPost(params){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            if(request.readyState === 4 && request.status === 200){
                    document.querySelector('#result').innerHTML = request.responseText;
                    console.log(request.responseText);
            }
        }
        request.open("POST","/");
        request.setRequestHeader('Content-type','application/json');
        request.send(params);
};

    document.querySelector(".item_btn").onclick = function () {
    localStorage.setItem('access_token', '');
    window.location.href = "/authorization/";
}
