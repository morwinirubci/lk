window.onload = function(){

    var inp_OrganizationName = document.querySelector('input[name=inputOrganizationName]');
    var inp_RegistryNumber = document.querySelector('input[name=inputRegistryNumber]');
    var inp_Data = document.querySelector('input[name=inputData]');
    var inp_Region = document.querySelector('input[name=inputRegion]');
    var inp_Locality = document.querySelector('input[name=inputLocality]');
    var inp_Street = document.querySelector('input[name=inputStreet]');
    var inp_House = document.querySelector('input[name=inputHouse]');
    var inp_Index = document.querySelector('input[name=inputIndex]');
    var inp_Region2 = document.querySelector('input[name=inputRegion2]');
    var inp_Locality2 = document.querySelector('input[name=inputLocality2]');
    var inp_Street2 = document.querySelector('input[name=inputStreet2]');
    var inp_House2 = document.querySelector('input[name=inputHouse2]');
    var inp_Index2 = document.querySelector('input[name=inputIndex2]');
    var inp_Devices = document.querySelector('#inputDevices');
    var inp_DevicesAddress = document.querySelector('#inputDevicesAddress');
    var inp_MaxPower = document.querySelector('input[name=inputMaxPower]');
    var inp_ConPower = document.querySelector('input[name=inputConPower]');
    var inp_ClassVolt = document.querySelector('input[name=inputClassVolt]');
    var inp_Categories = document.querySelector("input[name=inputCategories]")
    var inp_EcAc = document.querySelector('#inputEcAc');
    var inp_Term = document.querySelector('input[name=inputTerm]');
    var inp_disMaxPower = document.querySelector('#disMaxPower');
    var inp_calc = document.querySelector('#calc');
    var inp_Phone = document.querySelector('input[name=inputPhone]');
    var inp_Post = document.querySelector('input[name=inputPost]');
    var inp_Inn = document.querySelector('input[name=inputInn]');
    var inp_Kpp = document.querySelector('input[name=inputKpp]');
    var inp_Bik = document.querySelector('input[name=inputBik]');
    var inp_Bname = document.querySelector('input[name=inputBname]');
    var inp_Check = document.querySelector('input[name=inputCheck]');
    var inp_KorCheck = document.querySelector('input[name=inputKorCheck]');
    var inp_Code = document.querySelector('input[name=inputCode]');
    var inp_CodeR = document.querySelector('input[name=inputCodeR]');
    var inp_inputDoc = document.querySelector('#inputDoc');
    var inp_Supp = document.querySelector('#inputSupp');

    let btn = document.querySelector(".item_btn").onclick = function () {
        localStorage.setItem('access_token', '');
        window.location.href = "/authorization/";
    }
    

    document.querySelector('.button').onclick = function(){

        var jurConnectionData = {
            OrganizationName:inp_OrganizationName.value,
            RegistryNumber:inp_RegistryNumber.value,
            Data:inp_Data.value,
            Region:inp_Region.value,
            Locality: inp_Locality.value,
            Street:inp_Street.value,
            House:inp_House.value,
            Index:inp_Index.value,
            Region2:inp_Region2.value,
            Locality2: inp_Locality2.value,
            Street2:inp_Street2.value,
            House2:inp_House2.value,
            Index2:inp_Index2.value,
            Devices:inp_Devices.value,
            DevicesAddres:inp_DevicesAddress.value,
            MaxPower:inp_MaxPower.value,
            ConPower:inp_ConPower.value,
            ClassVolt:inp_ClassVolt.value,
            EcAc:inp_EcAc.value,
            Term:inp_Term.value,
            disMaxPower:inp_disMaxPower.value,
            calc:inp_calc.value,
            Phone:inp_Phone.value,
            Post:inp_Post.value,
            Inn:inp_Inn.value,
            Kpp:inp_Kpp.value,
            Bik:inp_Bik.value,
            Bname:inp_Bname.value,
            Check:inp_Check.value,
            KorCheck:inp_KorCheck.value,
            Code:inp_Code.value,
            CodeR:inp_CodeR.value,
            inputDoc:inp_inputDoc.value,
            Supp:inp_Supp.options[inp_Supp.selectedIndex].value
        }

        ajaxPost(JSON.stringify(jurConnectionData));

}

    function ajaxPost(params){
        let request = new XMLHttpRequest();
        request.onreadystatechange = function (){
            if(request.readyState === 4 && request.status === 200){
                    document.querySelector('#result').innerHTML = request.responseText;
                    console.log(request.responseText);
            }
        }


        request.open("POST","/api/v1/bids/corporate");
        request.setRequestHeader('Content-type','application/json');
        request.send(params);
}


    document.querySelector("button[class = item_btn]").onclick = function () {
        sessionStorage.setItem('access_token', '');
        window.location.href = "/authorization/";
}
};