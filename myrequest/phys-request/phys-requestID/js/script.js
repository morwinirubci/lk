window.onload = function () {

    document.querySelector(".item_btn").onclick = function () {
        sessionStorage.setItem('access_token', '');
        window.location.href = "/authorization/";
    }

    let url = '/api/v1/bids/';

    function getQueryVariable(variable) {
        const query = window.location.search.substring(1);
        const vars = query.split('?');
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split('=');
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return false;
    }

    let inp_firstName = document.querySelector(".table_item_td_first_name");
    let inp_surName = document.querySelector(".table_second_item_td_surname")
    let inp_lastName = document.querySelector(".table_third_item_td_lastname")
    let inp_series = document.querySelector(".table_item_td_series");
    let inp_number = document.querySelector(".table_item_td_number");
    let inp_date = document.querySelector(".table_item_td_date");
    let inp_issued = document.querySelector(".table_item_td_issued");
    let inp_region = document.querySelector(".table_item_td_region");
    let inp_city = document.querySelector(".table_item_td_city");
    let inp_street = document.querySelector(".table_item_td_street");
    let inp_building = document.querySelector(".table_item_td_building");
    let inp_post_code = document.querySelector(".table_item_td_post_code");
    let inp_type = document.querySelector(".table_item_td_type");
    let inp_devices = document.querySelector(".table_item_td_devices");
    let inp_location = document.querySelector(".table_item_td_location");
    let inp_conditionalNumber = document.querySelector(".table_item_td_conditional_number");
    let inp_voltageLevel = document.querySelector(".table_item_td_voltage_level");
    let inp_voltageLevelMax = document.querySelector(".table_item_td_voltage_level_max");
    let inp_devicesReliability = document.querySelector(".table_item_td_devices_reliability");
    let inp_phone = document.querySelector(".table_item_td_phone");
    let inp_email = document.querySelector(".table_item_td_email");
    let inp_inn = document.querySelector(".table_item_td_inn");
    let inp_supplier = document.querySelector(".table_item_td_supplier");





    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let result = JSON.parse(request.responseText);
            console.log(result);

         inp_firstName.innerHTML = result.applicant.first_name;
         inp_surName.innerHTML = result.applicant.second_name;
         inp_lastName.innerHTML = result.applicant.last_name;
         inp_series.innerHTML = result.applicant.document.series;
         inp_number.innerHTML = result.applicant.document.number;
         inp_date.innerHTML = result.applicant.document.date;
         inp_issued.innerHTML = result.applicant.document.issued_by;
         inp_region.innerHTML = result.applicant.address.region;
         inp_city.innerHTML = result.applicant.address.city;
         inp_street.innerHTML = result.applicant.address.street;
         inp_building.innerHTML = result.applicant.address.building;
         inp_post_code.innerHTML = result.applicant.address.post_code;
         inp_type.innerHTML = result.description.type;
         inp_devices.innerHTML = result.description.devices;
         inp_location.innerHTML = result.description.location;
         inp_conditionalNumber.innerHTML = result.description.conditional_number;
         inp_voltageLevel.innerHTML = result.description.voltage_level;
         inp_voltageLevelMax.innerHTML = result.description.voltage_level_max;
         inp_devicesReliability.innerHTML = result.description.devices_reliability;
         /*inp_phone.innerHTML = result.description.contacts.phone;
         inp_email.innerHTML = result.description.contacts.email;*/
         inp_inn.innerHTML = result.applicant.inn;
         inp_supplier.innerHTML = result.description.supplier;
        }
    }
    request.open("GET", url + getQueryVariable('id'));
    request.setRequestHeader("Authorization", "Bearer " + sessionStorage.getItem('access_token'));
    request.send();



}