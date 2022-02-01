window.onload = function(){

    var inp_FullName = document.querySelector('input[name=inputFullName]');
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
    var inp_Snils = document.querySelector('input[name=inputSnils]');
    var inp_Supp = document.querySelector('#inputSupp');
    var inp_Epu = document.querySelector("#inputEpu");
    var inp_Files = document.querySelector("#inputFiles");

   

    document.querySelector('button').onclick = function(){
        

        var physConnectionData = {
            FullName:inp_FullName.value,
            Series:inp_Series.value,
            Number:inp_Number.value,
            Data:inp_Data.value,
            Gave:inp_Gave.value,
            Region:inp_Region.value,
            Locality: inp_Locality.value,
            Street:inp_Street.value,
            House:inp_House.value,
            Index:inp_Index.value,
            Req:inp_Req.options[inp_Req.selectedIndex].value,
            Text:inp_Text.value,
            Address:inp_Address.value,
            KadNumber:inp_KadNumber.value,
            Level:inp_Level.options[inp_Level.selectedIndex].value,
            MaxPower:inp_MaxPower.value,
            Categories:inp_Categories.value,
            Phone:inp_Phone.value,
            Post:inp_Post.value,
            Snils:inp_Snils.value,
            Supp:inp_Supp.options[inp_Supp.selectedIndex].value,
            Epu:inp_Epu.value,
            Files:inp_Files.value
        }
        var params = JSON.stringify(physConnectionData);
        
        ajaxPost(params);
        console.log(physConnectionData);
    };
}

    function ajaxPost(params){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            if(request.readyState == 4 && request.status == 200){
                    document.querySelector('#result').innerHTML = request.responseText;
                    console.log(request.responseText);
            }
        }
        request.open("POST","/");
        request.setRequestHeader('Content-type','application/json');
        request.send(params);
};


const btn = document.querySelector(".item_btn").onclick = function () {
    window.location.href = "/authorization/index.html";
}