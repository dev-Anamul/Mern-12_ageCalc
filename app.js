/* eslint-disable no-undef */
/// //// selecting html

const button = document.querySelector('#button');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
    /// /// name validation here
    const ageName = document.querySelector('#agename').value;
    const nameRGEX = /^[A-Za-z ]{2,}$/;
    const nameResult = nameRGEX.test(ageName);

    /// //// birthYear validation here
    const ageYear = document.querySelector('#ageyear').value;
    const yearRGEX = /^[0-9]{4}$/;
    const ageResult = yearRGEX.test(ageYear);

    /// //// show result on the basis of condition
    if (nameResult && ageResult) {
        result.innerHTML = ageCal(ageName, ageYear);
    } else if (!nameResult && ageResult) {
        result.innerHTML = '<p class="alert-danger p-4">Please Enter Your Valid  Name</p>';
    } else if (nameResult && !ageResult) {
        result.innerHTML = '<p class="alert-danger p-4">Please Enter Your Valid Date Of Birth</p>';
    } else {
        result.innerHTML = '<p class="alert-danger p-4">Please Enter Your Valid  Information</p>';
    }

    document.getElementById('agename').value = '';
    document.getElementById('ageyear').value = '';
});
