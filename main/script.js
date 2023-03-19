function submit() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('number');
    const formDiv = document.getElementById('formDiv');
    const car = document.getElementById('car');
    const bus = document.getElementById('bus');
    const motorbike = document.getElementById('motorbike');
    returnText = '<p>';

    if (car.checked == false && bus.checked == false && motorbike.checked == false) {
        alert('Please choose your preferable transport!');
        return false;
    } 

    returnText += name.value + ', thank you for getting in touch!</p>';
    if(email.value !== '') {
        returnText += '<p>We will send you a reply email at ' + email.value + '. Or,' + '</p>';
    }
    if(phone !== '') {
        returnText += '<p>We will contact directly to you at ' + phone.value + ' when necessary.' + '</p>';
    }

    formDiv.innerHTML = returnText;

    return false;
}

let f = document.forms[0];
f.onsubmit = submit;