/* eslint-disable no-unused-vars */
/// ////////// Age status function here
const ageCalStatus = (age) => {
    if (age > 0 && age <= 10) {
        return {
            name: 'Baby',
            status: 'primary',
        };
    }
    if (age > 10 && age <= 22) {
        return {
            name: 'Jobok',
            status: 'success',
        };
    }
    if (age > 22 && age <= 35) {
        return {
            name: 'Young',
            status: 'info',
        };
    }
    if (age > 35 && age <= 60) {
        return {
            name: 'Old',
            status: 'warning',
        };
    }
    if (age > 60 && age <= 100) {
        return {
            name: 'Very-Old',
            status: 'danger',
        };
    }
    return {
        name: 'Bhoot / Jin',
        status: 'dark',
    };
};

/// /////// age cal function here
const ageCal = (name, year) => {
    const date = new Date();
    const age = date.getFullYear() - year;

    const statusCheck = ageCalStatus(age);
    return ` <p class = "alert-${statusCheck.status} p-4"> Hi ${name} you are ${age} years Old & You are ${statusCheck.name} </p>`;
};
