window.onload = function() {

    const method = "POST";
    let token = sessionStorage.getItem('access_token');
    const url = 'http://23.111.121.26/api/v1/bids';

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
    var inp_Categories = document.querySelector('#inputCategories');
    var inp_Phone = document.querySelector('input[name=inputPhone]');
    var inp_Post = document.querySelector('input[name=inputPost]');
    var inp_Inn = document.querySelector('input[name=inputInn]');
    var inp_Supp = document.querySelector('#inputSupp');
    var inp_Epu = document.querySelector("#inputEpu");
    var inp_Files = document.querySelector("#inputFiles");
    let res = document.querySelector("#result");
    let btn = document.querySelector('.button');
    let par = document.querySelectorAll('form');

    btn.onclick = function () {


        let data =  {
            type: inp_Req.value,
            location: inp_Address.value,
            conditional_number: inp_KadNumber.value,
            voltage_level: inp_Level.value,
            voltage_level_max: inp_MaxPower.value,
            devices: inp_Text.value,
            devices_reliability: inp_Categories.value,
            supplier: inp_Supp.value,
            applicant: {
                first_name: inp_firstName.value,
                last_name: inp_surName.value,
                second_name: inp_patronymic.value,
                inn: inp_Inn.value,
                contacts: {
                    phone: inp_Phone.value,
                    email: inp_Post.value
                },
                document: {
                    series: inp_Series.value,
                    number: inp_Number.value,
                    date: inp_Data.value,
                    issued_by: inp_Gave.value
                },
                address: {
                    region: inp_Region.value,
                    city: inp_Locality.value,
                    street: inp_Street.value,
                    building: inp_House.value,
                    post_code: inp_Index.value
                }
            }
        }
        let personData = JSON.stringify(data);

        ajaxPost(method, url, token, getRequestBody(personData,inp_Files));
    }

        function appendFiles(form, inp_Files, key){
            for (let i = 0; i < inp_Files.files.length; i++){
                form.append(key + '[]', inp_Files.files[i]);
            }
        }

        function getRequestBody(personData,inp_Files){
            let form = new FormData();

            appendFiles(form, inp_Epu, 'layout_documents');
            appendFiles(form, inp_Files, 'ownership_documents');

            form.append('data', personData);

            return form;
        }

        function ajaxPost(method, url, token, body) {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState === 4 && request.status === 200) {
                    console.log(request.responseText);
                }else if(request.readyState === 4 && request.status !== 200){
                    alert('Заполнены не все поля');
                }
            }
            request.open(method, url);
            request.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('access_token'));
            request.send(body);
        }



        document.querySelector(".item_btn").onclick = function () {
            sessionStorage.setItem('access_token', '');
            window.location.href = "/authorization/";
        }

    }
